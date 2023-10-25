# Data Code Editor

A code editor created directly with a data:text/html page.

## Info
Q: Why is there no hex values? Wouldn't that increase URL length?
A: Hex values require a `#`. However, in URLS, `#` signifies an HTML element, which would cutoff all of the code after the `#`

## Usage

Simply paste the code into your browser tab!

**Tiniest version** (no inline)

```html
data:text/html,
<title>NIMBUS WEB v0.1.2</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/a-riceeater/DataCodeEditor@latest/styles.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/a-riceeater/DataCodeEditor@latest/atom.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<div class="l"></div>
<pre><div class="h"></div></pre>
<textarea class="c" placeholder="CTRL+S: OPEN PAGE OUTPUT | CTRL+SHIFT+S: SAVE AS FILE" autofocus spellcheck="false" autocomplete="off" autocapitalize="false"></textarea>
<script src="https://cdn.jsdelivr.net/gh/a-riceeater/DataCodeEditor@latest/script.js"></script>
```

**Mini version** (inline)
```html
data:text/html,
<title>NIMBUS WEB v0.1.2</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/a-riceeater/DataCodeEditor@latest/atom.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<style>
  .l{position:fixed;left:0;top:0;width:30px;height:100%;background-color:rgb(40, 44, 52);color:white;text-align:center;font-size:14px;padding-top:5px;box-sizing:border-box;line-height:1em;overflow-y:scroll;cursor:default;font-family:Menlo,Monaco,'Courier New',monospace;border-right:1px solid lightgray}.c,.h{font-family:Menlo,Monaco,'Courier New',monospace;width:calc(100% - 30px);height:100%;position:fixed;left:30px;top:0;outline:0;font-size:14px;padding-top:2.5px;box-sizing:border-box;line-height:1em;border:none;padding-left:5px}.l::-webkit-scrollbar{display:none}.c{background-color:transparent;color:transparent;z-index:3;caret-color:lightgray}.c::selection{background-color:rgb(211,211,211,.35)}.h{background-color:rgb(40, 44, 52);color:lightgray;z-index:2}
</style>
<div class="l"></div>
<pre><div class="h"></div></pre>
<textarea class="c" placeholder="CTRL+S: OPEN PAGE OUTPUT | CTRL+SHIFT+S: SAVE AS FILE" autofocus spellcheck="false" autocomplete="off" autocapitalize="false"></textarea>
<script>var wl;const lang=prompt("What language are you coding in?").trim(),h=document.querySelector(".h"),e=document.querySelector(".c"),l=document.querySelector(".l");h.addEventListener("scroll",t=>{let r=t.target.scrollTop;e.scrollTop=r,l.scrollTop=r,e.scrollLeft=t.target.scrollLeft}),e.addEventListener("scroll",t=>{let r=t.target.scrollTop;h.scrollTop=r,l.scrollTop=r,h.scrollLeft=t.target.scrollLeft}),l.addEventListener("scroll",t=>{let r=t.target.scrollTop;h.scrollTop=r,e.scrollTop=r});const ins=t=>{let r=e.selectionStart,s=e.selectionEnd;e.value=e.value.substring(0,r)+t+e.value.substring(s),e.selectionStart=e.selectionEnd=r+t.length-1,e.focus()};e.addEventListener("keydown",t=>{if("Tab"==t.key&&t.preventDefault(),t.ctrlKey||t.metaKey&&t.shiftKey&&"s"==t.key){let r=document.createElement("a");r.download=prompt("file name? (with ext.)"),r.href=URL.createObjectURL(new Blob([e.value],{type:"text/plain"})),r.click()}else if(t.ctrlKey||t.metaKey&&"s"==t.key){t.preventDefault(),wl&&wl.close();let s=window.open();s.document.write(e.value),wl=s}setTimeout(()=>{var r=t.target;switch(t.key){case"Tab":ins("    ");break;case"{":ins("}");break;case"[":ins("]");break;case"(":ins(")");break;case'"':ins('"');break;case"'":ins("'");break;case"`":ins("`")}h.innerHTML=hljs.highlight(r.value,{language:lang}).value||r.value;let s=r.scrollTop;l.scrollTop=s,h.scrollTop=s,h.scrollLeft=r.scrollLeft;let a="",o=r.value.split("\n").length;for(let c=0;c<o;c++)a+=`${c+1}<br>`;l.innerHTML=a})});</script>
```

## Preview

![image](https://github.com/a-riceeater/DataCodeEditor/assets/46640763/6c83331d-e64c-471f-a6f9-5af664610175)
