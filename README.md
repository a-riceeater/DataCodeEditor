# Data Code Editor

A code editor created directly with a data:text/html page.

## Info
Q: Why is there no hex values? Wouldn't that increase URL length?
A: Hex values require a `#`. However, in URLS, `#` signifies an HTML element, which would cutoff all of the code after the `#`

## Usage

Simply paste the code into your browser tab!

**Tiniest version**
```html
data:text/html,
<title>NIMBUS WEB v0.1.2</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/a-riceeater/DataCodeEditor@latest/styles.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/a-riceeater/DataCodeEditor@latest/atom.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<div class="l"></div>
<pre><div class="h"></div></pre>
<textarea class="c" placeholder="CTRL+S: OPEN PAGE OUTPUT | CTRL+SHIFT+S: SAVE AS FILE" autofocus spellcheck="false" autocomplete="off" autocapitalize="false"></textarea>
<script src="https://cdn.jsdelivr.net/gh/a-riceeater/DataCodeEditor@latest/script.js"></script>```
