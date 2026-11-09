# PA1 — Styled Website · Misael Antonio Ramos Amaya (@misaramos04)

CSDP 232 · Internet Programming · Fall 2026

## About this site

- Site I styled: the supplied Hawk Study Spots site
- Pages: index.html, spots.html, tips.html
- How to view: download or clone this repository and open `index.html` in a browser.

## Color and contrast check

| Text | Text color | Background color | Contrast ratio (from DevTools) |
|---|---|---|---|
| Body text | rgb(33, 37, 41) | rgb(248, 249, 250) | 12.8:1 |
| Link text | rgb(255, 255, 255) | #0b4f45 | 6.5:1 |

## Cascade log

### 1. Two rules, one element
The `<h1>` heading inside the `<header>` element is targeted by two rules that declare the `color` property:
- Selector 1: `h1, h2, h3` has a specificity score of (0, 0, 1) and sets `color: #0b4f45`.
- Selector 2: `header h1` has a specificity score of (0, 0, 2) and sets `color: rgb(255, 255, 255)`.

The rule `header h1` wins because it contains two element selectors compared to only one in the group rule. Comparing from left to right, (0, 0, 2) beats (0, 0, 1) in the elements column, making source order irrelevant.

### 2. Inheritance
The `font-family` property declared on the `body` selector (`Calibri, Arial, sans-serif`) is inherited by paragraph (`<p>`) elements across the page; in DevTools, it appears listed under the "Inherited from body" section. In contrast, the `border` property defined on the `.card` selector is not inherited by the `<p>` elements nested inside the card; DevTools confirms that child elements do not inherit box-model properties like borders or margins from their parent.

### 3. DevTools evidence
The screenshot `screenshots/devtools-cascade.png` displays the Styles pane inspecting the `<h1>` element inside `<header>`. It shows the active declaration `color: rgb(255, 255, 255)` from the winning rule `header h1`, while the competing declaration `color: #0b4f45` from the `h1, h2, h3` rule is visibly crossed out by the browser.

![DevTools Styles pane showing a crossed-out declaration](screenshots/devtools-cascade.png)

## Validation

The W3C CSS Validation Service reported 0 errors for my final `css/style.css` stylesheet.

![W3C CSS Validator result](screenshots/css-validation.png)

## AI use statement

I used Google Gemini (Yellow Tier) to assist with troubleshooting a Git merge conflict and to guide the step-by-step setup of selector requirements. I wrote the code and configured the rules myself, verifying every style and specificity score directly in browser DevTools.