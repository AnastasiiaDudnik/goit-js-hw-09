const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(()=>{intervalId=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}),1e3),t.setAttribute("disabled","true")})),e.addEventListener("click",(()=>{clearInterval(intervalId),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.58377e96.js.map
