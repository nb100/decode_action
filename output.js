//Sun Jun 29 2025 21:14:42 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  const IlillilI = {
    "serverUrl": "../hm.gif",
    "coolDownPeriod": 30,
    "debugMode": false
  };
  let I1IIiili = 0;
  const I1Ii1iI1 = Date.now();
  function lIiilIii() {
    (function () {})();
    document.addEventListener("click", Il11lII1, false);
  }
  function Il11lII1(lIi11lIi) {
    const l11Ill1i = Date.now();
    if (l11Ill1i - I1IIiili < IlillilI.coolDownPeriod) {
      return;
    }
    const ilIII1II = {
      "timestamp": l11Ill1i,
      "url": window.location.href,
      "referrer": document.referrer || "no-referrer",
      "clientX": lIi11lIi.clientX,
      "clientY": lIi11lIi.clientY,
      "pageX": lIi11lIi.pageX,
      "pageY": lIi11lIi.pageY,
      "screenX": lIi11lIi.screenX,
      "screenY": lIi11lIi.screenY,
      "elementPath": lIlI11Il(lIi11lIi.target),
      "targetTag": lIi11lIi.target.tagName.toLowerCase(),
      "siteReferer": li1IIIl1(),
      "buttonText": lliI1Ili(lIi11lIi.target),
      "deviceResolution": screen.width + "x" + screen.height,
      "loadToClickTime": l11Ill1i - I1Ii1iI1
    };
    illi1Il1(ilIII1II);
    I1IIiili = l11Ill1i;
  }
  function lIlI11Il(I1Ii1i) {
    {
      if (I1Ii1i === document.body) return "body";
      const l111iiiI = [];
      let iil11l1i = I1Ii1i;
      while (iil11l1i && iil11l1i !== document.body) {
        const IiIIi = iil11l1i.tagName.toLowerCase(),
          lll1il11 = iil11l1i.id ? "#" + iil11l1i.id : "",
          IiiIlIl1 = iil11l1i.className ? "." + iil11l1i.className.split(" ").join(".") : "";
        l111iiiI.unshift("" + IiIIi + lll1il11 + IiiIlIl1);
        iil11l1i = iil11l1i.parentElement;
      }
      l111iiiI.unshift("body");
      return l111iiiI.join(" > ");
    }
  }
  function li1IIIl1() {
    try {
      const iIlillli = document.referrer;
      if (!iIlillli) return "no-referrer";
      const lliI11l1 = new URL(iIlillli);
      return lliI11l1.hostname || iIlillli;
    } catch (ll1ilil) {
      return "invalid-referrer";
    }
  }
  function lliI1Ili(iiliiiI1) {
    if (iiliiiI1.tagName.toLowerCase() === "button") return (iiliiiI1.textContent || "").trim() || "empty-button";
    if (iiliiiI1.type === "button" || iiliiiI1.type === "submit" || iiliiiI1.type === "reset") return (iiliiiI1.value || iiliiiI1.textContent || "").trim() || "input-button";
    if (iiliiiI1.tagName.toLowerCase() === "a") return (iiliiiI1.textContent || "").trim() || "empty-link";
    if (iiliiiI1.children && iiliiiI1.children.length > 0) {
      for (const Il111Ill of iiliiiI1.children) {
        const liiil1ll = lliI1Ili(Il111Ill);
        if (liiil1ll && liiil1ll !== "non-button-element") {
          return liiil1ll;
        }
      }
    }
    return "non-button-element";
  }
  function Il111iII(Iill1i11) {
    let iilIiiI = "";
    for (const ilI1lI11 in Iill1i11) {
      {
        const iIilIIlI = Iill1i11[ilI1lI11],
          IlIIil = ilI1lI11 + "=" + iIilIIlI + "&",
          i1I1iiI = new TextEncoder().encode(IlIIil);
        for (const IlllIIIl of i1I1iiI) {
          iilIiiI += IlllIIIl.toString(16).padStart(2, "0");
        }
      }
    }
    return iilIiiI;
  }
  function illi1Il1(ll1lIiI1) {
    {
      const il1I1lii = Il111iII(ll1lIiI1),
        i1II111l = il1I1lii.substring(8, 14),
        I1lI11ll = il1I1lii.substring(2, 8),
        l1i1iliI = I1lI11ll + "9" + il1I1lii + i1II111l;
      try {
        {
          if (window.fetch) fetch(IlillilI.serverUrl, {
            "method": "POST",
            "body": l1i1iliI,
            "headers": {
              "Content-Type": "text/plain"
            },
            "keepalive": true
          });else {
            if (window.XMLHttpRequest) {
              const I11l111I = new XMLHttpRequest();
              I11l111I.open("POST", IlillilI.serverUrl, true);
              I11l111I.setRequestHeader("Content-Type", "text/plain");
              I11l111I.send(il1I1lii);
            }
          }
        }
      } catch (lIlII1) {
        IlillilI.debugMode && console.error("数据发送失败:", lIlII1);
      }
    }
  }
  window.clickTracker = {
    "init": lIiilIii,
    "setCoolDown": iIliilli => {
      IlillilI.coolDownPeriod = iIliilli * 1000;
    }
  };
  lIiilIii();
})();