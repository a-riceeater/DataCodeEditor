const d = (q) => document.querySelector(q)
    var lang = prompt('What language are you coding in?').trim()
    var h = d(".h")
    var e = d(".c")
    var l = d(".l")
    var cm = d(".cm")
    var wl
    var cfh;

    navigator.platform.toString().toLowerCase().includes('mac') ? e.placeholder = '⌘+S: OPEN PAGE OUTPUT | ⌘+D: SAVE AS FILE' : e.placeholder = 'CTRL+S: OPEN PAGE OUTPUT | CTRL+D: SAVE AS FILE'

    async function gf() {
        try {
            const [fh] = await window.showOpenFilePicker({
                types: [
                    {
                        description: "Text files",
                        accept: {
                            "text/*": ".txt"
                        }
                    }
                ],
                multiple: false,
                excludeAcceptAllOption: true,
            });
            cfh = fh;
            return await fh.getFile()
        } catch (err) {
            console.error(err)
            if (!err.toString().includes("aborted")) alert("User must do an input (keypress/click) before opening dialog, or File API not supported.")
        }
    }

    e.addEventListener("scroll", (a) => {
        const st = a.target.scrollTop
        h.scrollTop = st
        l.scrollTop = st
        h.scrollLeft = a.target.scrollLeft
    })
    l.addEventListener("scroll", (a) => {
        const st = a.target.scrollTop
        h.scrollTop = st
        e.scrollTop = st
    })

    const ins = (ch, ev) => {
        const sp = e.selectionStart
        const ep = e.selectionEnd

        if (e.value.charAt(sp) == ch) {
            e.setSelectionRange(sp + 1, sp + 1)
            ev.preventDefault()
            return
        }

        e.value = e.value.substring(0, sp) + ch + e.value.substring(ep)
        e.selectionStart = e.selectionEnd = sp + ch.length - 1
        e.focus()
    }

    const inb = (ch, a) => {
        var sp = e.selectionStart;
        if (e.value.charAt(sp) != ch) return
        e.setSelectionRange(sp + 1, sp + 1);
        a.preventDefault()
    }

    const hl = () => h.innerHTML = hljs.highlight(e.value, { language: lang }).value || e.value

    const fd = () => {
        try {
            e.value = js_beautify(e.value, { indent_size: 4 })
            hl()
            cm.style.display = "none"
        } catch (err) {
            alert("Failed to format...")
            console.error(err)
        }
    }

    e.addEventListener("keydown", async (a) => {
        if (a.key == "Tab") a.preventDefault()
        hl()

        try {
            if (a.ctrlKey && a.key == "d" || a.metaKey && a.key == "d") {
                a.preventDefault();
                const ae = document.createElement("a")
                var fn = prompt("file name? (with ext.)")
                if (!fn) return
                ae.download = fn
                ae.href = URL.createObjectURL(new Blob([e.value], { type: 'text/plain' }))
                ae.click()
            }
            else if (a.ctrlKey && a.key == "s" || a.metaKey && a.key == "s") {
                a.preventDefault()
                if (cfh) {
                    console.log(cfh)
                    var w = await cfh.createWritable()
                    await w.write(new Blob([e.value], { type: 'text/plain' }))
                    await w.close()
                } else {
                    if (wl) wl.close()
                    const w = window.open()
                    w.document.write(e.value)
                    wl = w
                }
            }
            else if (a.ctrlKey && a.key == "p" || a.metaKey && a.key == "p") {
                a.preventDefault()
                fd()
            }
            else if (a.ctrlKey && a.key == "o" || a.metaKey && a.key == "o") {
                a.preventDefault()
                const f = await gf()
                if (!f) return
                lang = /(?:\.([^.]+))?$/.exec(f.name)[1];
                e.value = await f.text()
                setTimeout(hl);
            }
        } catch (err) { alert(err) }

        switch (a.key) {
            case "Tab":
                ins('    ')
                break
            case "{":
                ins("}", a)
                break
            case "[":
                ins("]", a)
                break
            case "(":
                ins(")", a)
                break
            case "\"":
                ins("\"", a)
                break
            case "\'":
                ins("\'", a)
                break
            case "\`":
                ins("\`", a)
            case ")":
                inb(")", a)
                break
            case "}":
                inb("}", a)
                break
            case "]":
                inb("]", a)
                break/*
            case "Backspace":
                console.log(e.value.charAt(e.selectionStart))
                if (e.value.charAt(e.selectionStart - 1) == "{") {
                    setTimeout(() => e.value = e.value.replaceAt(0, ""))
                }*/
        }
        setTimeout(() => {
            is(a.key)

            setTimeout(() => {
                hl()
                const st = e.scrollTop
                l.scrollTop = st
                h.scrollTop = st
                h.scrollLeft = e.scrollLeft

                let ld = ""
                let ln = e.value.split("\n").length
                for (let i = 0; i < ln; i++) { ld += `${i + 1}<br>` }
                l.innerHTML = ld
            })

        })
    })
    e.addEventListener("contextmenu", (ev) => {
        ev.preventDefault();
        cm.style.top = ev.clientY;
        cm.style.left = ev.clientX;
        cm.style.display = "flex"
    })
    e.addEventListener("click", (ev) => {
        cm.style.display = "none"
    })
    d(".fm").addEventListener("click", fd)
    String.prototype.replaceAt = function (index, replacement) {
        return this.substring(0, index) + replacement + this.substring(index + replacement.length);
    }
