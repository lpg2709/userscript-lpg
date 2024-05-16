// ==UserScript==
// @name         Remove Side ADDs - hltv.org
// @description  Remove side adds from HTTV.org
// @version      1.2.1
// @author       lpg2709
// @match        https://www.hltv.org/*
// @icon         https://www.hltv.org/img/static/favicon/apple-touch-icon.png
// @grant        none
// @homepage     https://github.com/lpg2709/userscript-lpg
// ==/UserScript==

var interval = setInterval(function() {
  var body = document.querySelector("body");
  var standardPageGrid = document.querySelector(".standardPageGrid");
  var newSidebarAdds = document.querySelector(".newSidebar");
  var topAdds = document.querySelector(".logoCon");
  var bgPadding = document.querySelector(".bgPadding");
  var right2Col = document.querySelector(".right2Col");
  var presentedByLeft = document.querySelectorAll(".presented-by-row");
  var addLinkNoFollow = document.querySelectorAll('a[rel="nofollow"]');
  var horizontalWidget = document.querySelectorAll('.horizontal-widget');

  if (body != null) {
    body.style = "";
    if(standardPageGrid != null && newSidebarAdds != null) {
      newSidebarAdds.remove();
      standardPageGrid.style.display = "block";
    }

    if(topAdds != null) {
      // Remove top bar adds
      for(let i = topAdds.childNodes.length - 1; i >= 0; i--) {
        let e = topAdds.childNodes[i];
        if(e["href"] == undefined)
          e.remove();
      }
    }

    if(bgPadding != null) {
      // Remove other side bar adds
      for (let i = bgPadding.childNodes.length - 1; i >= 0; i--) {
        let e = bgPadding.childNodes[i];
        if (e.classList != undefined)
          if (!e.classList.value.includes("widthControl")) {
            e.remove();
          }
      }
    }

    if(right2Col != null) {
      // Remove extra adds on side
      for (let i = right2Col.childNodes.length - 1; i >= 0; i--) {
        let e = right2Col.childNodes[i];
        if (e.classList != undefined)
          if (e.classList.value != "")
            e.remove();
      }
    }

    if(presentedByLeft != null) {
      for (let e of presentedByLeft) {
        e.remove();
      }
    }

    if(addLinkNoFollow != null) {
      for(let e of addLinkNoFollow) {
        e.parentNode.remove()
      }
    }

    if(horizontalWidget != null) {
      // Remove bet on matchs page
      for(let e of horizontalWidget) {
        e.parentNode.remove()
      }
    }

    clearInterval(interval);
  }
}, 100);
