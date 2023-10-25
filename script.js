const lang = prompt('What language are you coding in?').trim();
    const h = document.querySelector(".h");
    const e = document.querySelector(".c");
    const l = document.querySelector(".l");
    var wl;
    h.addEventListener("scroll", (a) => {
        const st = a.target.scrollTop;
        e.scrollTop = st;
        l.scrollTop = st;
        e.scrollLeft = a.target.scrollLeft;
    })
    e.addEventListener("scroll", (a) => {
        const st = a.target.scrollTop;
        h.scrollTop = st;
        l.scrollTop = st;
        h.scrollLeft = a.target.scrollLeft;
    })
    l.addEventListener("scroll", (a) => {
        const st = a.target.scrollTop;
        h.scrollTop = st;
        e.scrollTop = st;
    })

    const ins = (ch) => {
        const sp = e.selectionStart;
        const ep = e.selectionEnd;

        e.value = e.value.substring(0, sp) + ch + e.value.substring(ep);
        e.selectionStart = e.selectionEnd = sp + ch.length - 1;
        e.focus();
    };

    e.addEventListener("keydown", (a) => {
        if (a.key == "Tab") a.preventDefault();


        if (a.ctrlKey || a.metaKey && a.shiftKey && a.key == "s") {
            const ae = document.createElement("a");
            ae.download = prompt("file name? (with ext.)");
            ae.href=URL.createObjectURL(new Blob([e.value], {type:'text/plain'}));
            ae.click();
        }
        else if (a.ctrlKey || a.metaKey && a.key == "s") {
            a.preventDefault();
            if (wl) wl.close();
            const w = window.open();
            w.document.write(e.value);
            wl = w;
        }
        
        setTimeout(() => {
            var ta = a.target;

            switch (a.key) {
                case "Tab":
                    ins('    ')
                    break
                case "{":
                    ins("}")
                    break
                case "[":
                    ins("]")
                    break
                case "(":
                    ins(")")
                    break
                case "\"":
                    ins("\"")
                    break
                case "\'":
                    ins("\'")
                    break
                case "\`":
                    ins("\`")
                    break
            }

            h.innerHTML = hljs.highlight(ta.value, { language: lang }).value || ta.value;
            const st = ta.scrollTop;
            l.scrollTop = st;
            h.scrollTop = st;
            h.scrollLeft = ta.scrollLeft;

            let ld = "";
            let ln = ta.value.split("\n").length;
            for (let i = 0; i < ln; i++) { ld += `${i + 1}<br>` }
            l.innerHTML = ld;
        })
    })
