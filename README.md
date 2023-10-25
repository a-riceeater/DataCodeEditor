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
  .l{position:fixed;left:0;top:0;width:30px;height:100%;background-color:rgb(40, 44, 52);color:white;text-align:center;font-size:14px;padding-top:5px;box-sizing:border-box;line-height:1em;overflow-y:scroll;cursor:default;font-family:Menlo,Monaco,'Courier New',monospace;border-right:1px solid lightgray}.c,.h{font-family:Menlo,Monaco,'Courier New',monospace;width:calc(100% - 30px);height:100%;position:fixed;left:30px;top:0;outline:0;font-size:14px;padding-top:2.5px;box-sizing:border-box;line-height:1em;border:none;padding-left:5px}.l::-webkit-scrollbar{display:none}.c{background-color:transparent;color:transparent;z-index:3;caret-color:lightgray}.c::selection{background-color:rgb(211,211,211,.35)}.h{background-color:rgb(40, 44, 52);color:lightgray;z-index:2;overflow-y: scroll}
</style>
<div class="l"></div>
<pre><div class="h"></div></pre>
<textarea class="c" placeholder="CTRL+S: OPEN PAGE OUTPUT | CTRL+SHIFT+S: SAVE AS FILE" autofocus spellcheck="false" autocomplete="off" autocapitalize="false"></textarea>
<script>var wl;const lang=prompt("What language are you coding in?").trim(),h=document.querySelector(".h"),e=document.querySelector(".c"),l=document.querySelector(".l");e.addEventListener("scroll",t=>{let a=t.target.scrollTop;h.scrollTop=a,l.scrollTop=a,h.scrollLeft=t.target.scrollLeft}),l.addEventListener("scroll",t=>{let a=t.target.scrollTop;h.scrollTop=a,e.scrollTop=a});const ins=(t,a)=>{let r=e.selectionStart,n=e.selectionEnd;if(e.value.charAt(r)==t){e.setSelectionRange(r+1,r+1),a.preventDefault();return}e.value=e.value.substring(0,r)+t+e.value.substring(n),e.selectionStart=e.selectionEnd=r+t.length-1,e.focus()},inb=(t,a)=>{var r=e.selectionStart;e.value.charAt(r)==t&&(e.setSelectionRange(r+1,r+1),a.preventDefault())};e.addEventListener("keydown",t=>{if("Tab"==t.key&&t.preventDefault(),t.ctrlKey&&t.shiftKey&&"s"==t.key||t.metaKey&&t.shiftKey&&"s"==t.key){alert("dow");let a=document.createElement("a");var r=prompt("file name? (with ext.)");if(!r)return;a.download=r,a.href=URL.createObjectURL(new Blob([e.value],{type:"text/plain"})),a.click()}else if(t.ctrlKey&&"s"==t.key||t.metaKey&&"s"==t.key){t.preventDefault(),wl&&wl.close();let n=window.open();n.document.write(e.value),wl=n}switch(t.key){case"Tab":ins("    ");break;case"{":ins("}",t);break;case"[":ins("]",t);break;case"(":ins(")",t);break;case'"':ins('"',t);break;case"'":ins("'",t);break;case"`":ins("`",t);case")":inb(")",t);break;case"}":inb("}",t);break;case"]":inb("]",t)}setTimeout(()=>{var a=t.target;h.innerHTML=hljs.highlight(a.value,{language:lang}).value||a.value;let r=a.scrollTop;l.scrollTop=r,h.scrollTop=r,h.scrollLeft=a.scrollLeft;let n="",s=a.value.split("\n").length;for(let c=0;c<s;c++)n+=`${c+1}<br>`;l.innerHTML=n})});</script>
```

## Preview

![image](https://github.com/a-riceeater/DataCodeEditor/assets/46640763/6c83331d-e64c-471f-a6f9-5af664610175)
