
    const suggestions = [
        {
            s: "addEventListener",
            u: 0
        },
        {
            s: "alert",
            u: 0
        },
        {
            s: "Audio",
            u: 0
        },
        {
            s: "AbortController",
            u: 0
        },
        {
            s: "Array",
            u: 0
        },
        {
            s: "Buffer",
            u: 0
        },
        {
            s: "Blob",
            u: 0
        },
        {
            s: "Boolean",
            u: 0
        },
        {
            s: "BroadcastChannel",
            u: 0
        },
        {
            s: "console",
            u: 0
        },
        {
            s: "CSSAnimation",
            u: 0
        },
        {
            s: "DOMException",
            u: 0
        },
        {
            s: "document",
            u: 0
        },
        {
            s: "Document",
            u: 0
        },
        {
            s: "Date",
            u: 0
        },
        {
            s: "Error",
            u: 0
        },
        {
            s: "fetch",
            u: 0
        },
        {
            s: "Generator",
            u: 0
        },
        {
            s: "history",
            u: 0
        },
        {
            s: "Image",
            u: 0
        },
        {
            s: "JSON",
            u: 0
        },
        {
            s: "KeyboardEvent",
            u: 0
        },
        {
            s: "localStorage",
            u: 0
        },
        {
            s: "let",
            u: 0
        },
        {
            s: "location",
            u: 0
        },
        {
            s: "length",
            u: 0
        },
        
        {
            s: "Math",
            u: 0
        },
        {
            s: "Number",
            u: 0
        },
        {
            s: "Object",
            u: 0
        },
        {
            s: "Promise",
            u: 0
        },
        {
            s: "RegExp",
            u: 0
        },
        {
            s: "Set",
            u: 0
        },
        {
            s: "Text",
            u: 0
        },
        {
            s: "URL",
            u: 0
        },
        {
            s: "Video",
            u: 0
        },
        {
            s: "Window",
            u: 0
        },
        {
            s: "WebSocket",
            u: 0
        },
        {
            s: "XMLHttpRequest",
            u: 0
        }
    ];


    try {
        function is(k) {
            const st = setTimeout;
            var lc = e.value.charAt(e.selectionStart - 2);
            var t = e.value;
            var sp = e.selectionStart;

            let start = t.lastIndexOf(' ', sp - 1) + 1;
            let end = t.indexOf(' ', sp);

            if (end === -1) {
                end = t.length;
            }

            const word = t.substring(start, end);
            switch (k) {
                case "Enter":
                    if (lc == "{") {
                        ins("\n")
                        ins("    ")
                    }
                    if (lc == ":" && lang == "py" || lang == "python") {
                        ins("    ")
                    }
                    break
            }

           /* const sug = suggestions.find(s => s.s.toLowerCase().startsWith(word.toLowerCase()));
            if (sug) {
                console.log(sug)
            }*/

            var sugs = [];
            var inx = [];
            let top = [];
            for (let i = 0; i < suggestions.length; i++) {
                if (suggestions[i].s.toLocaleLowerCase().startsWith(word.toLowerCase())) {
                    sugs.push(suggestions[i])
                }
            }
            
            for (let i = 0; i < sugs.length; i++) {
                
            }

            function getLargest(r){for(var t,e=r[0],n=0;n<r.length;n++)e<=r[n]&&(e=r[n],t=n);return t}
        }
    } catch (er) {
        alert(er)
    }
