//Tue Jul 22 2025 00:12:34 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const AES_KEY = "AVSI6788^765idue";
const handleAES = (_0x20b981, _0x300c5c = AES_KEY, _0x15cc43 = true) => {
  try {
    const _0xec3385 = CryptoJS.enc.Utf8.parse(_0x300c5c);
    return _0x15cc43 ? CryptoJS.enc.Base64.parse(CryptoJS.AES.encrypt(_0x20b981, _0xec3385, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString()).toString(CryptoJS.enc.Hex) : CryptoJS.AES.decrypt(CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(_0x20b981)), _0xec3385, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
  } catch (_0x5e0589) {
    console.error((_0x15cc43 ? "Encryption" : "Decryption") + " error:", _0x5e0589);
    return null;
  }
};
function encryptByAES(_0x42ebb7, _0x5e7ad5) {
  return handleAES(_0x42ebb7, _0x5e7ad5, true);
}
function decryptByAES(_0x4cd3b0, _0x11eb23) {
  return handleAES(_0x4cd3b0, _0x11eb23, false);
}
const getBrowserCode = _0x3fc145 => {
  const _0x9ae4fa = localStorage.getItem("browser-code");
  if (_0x9ae4fa && !["", "null", "undefined"].includes(_0x9ae4fa)) {
    setCookie("browser-code", _0x9ae4fa, 30);
    return _0x3fc145(_0x9ae4fa);
  }
  FingerprintJS.load().then(_0x4e44fc => _0x4e44fc.get()).then(({
    visitorId: _0x22b692
  }) => {
    const _0x37ba1a = handleAES(_0x22b692 + "_" + new Date().toISOString().split("T")[0]);
    localStorage.setItem("browser-code", _0x37ba1a);
    setCookie("browser-code", _0x37ba1a, 30);
    _0x3fc145(_0x37ba1a);
  }).catch(_0x5e5f86 => console.error(_0x5e5f86));
};
function MdLLgB(_0x455a34, _0xc2c8a9) {
  return;
  MdLLgB = function (_0x31b461, _0x153487) {
    _0x31b461 = _0x31b461 - 0;
    var _0x33c7c0 = _0x5e50e6[_0x31b461];
    return _0x33c7c0;
  };
  return MdLLgB(_0x455a34, _0xc2c8a9);
}
MdLLgB();
new Vue({
  el: "#app",
  data() {
    return {
      scrollTop: 0,
      currentThememModel: "day",
      nexPrevScrollPosition: 0,
      nexLastScrollPosition: 0,
      scrollScrollD: 0,
      scrollScrollT: 0,
      searchValue: ""
    };
  },
  mounted() {
    this.initChangeTheme();
    this.getNavbarScrollTop();
    window.addEventListener("scroll", this.getNavbarScrollTop);
    document.addEventListener("click", this.searchBlur);
    this.initSearchHistories();
    document.addEventListener("DOMContentLoaded", this.initRollToTop);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.getNavbarScrollTop);
    document.removeEventListener("click", this.searchBlur);
    let rollTopTop = document.getElementById("roll-to-top");
    rollTopTop && rollTopTop.removeEventListener("click", this.scrollToTop);
  },
  methods: {
    checkCache() {
      let item = sessionStorage.getItem("browser-code");
      if (!item || item.length < 64) {
        sessionStorage.removeItem("browser-code");
        setCookie("browser-code", "", 0);
      }
    },
    getNavbarScrollTop() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      const mediaQuery = window.matchMedia("(max-width: 991px)");
      this.isMobileView = mediaQuery.matches;
      clearTimeout(this.lastScrollTopTimeout);
      if (this.isMobileView && document.getElementById("side-toolbar")) {
        this.nexLastScrollPosition = window.scrollY;
        if (this.nexPrevScrollPosition < this.nexLastScrollPosition) {
          this.scrollScrollD = this.nexLastScrollPosition;
          if (this.scrollScrollD > this.scrollScrollT + 50) {
            document.getElementById("side-toolbar").classList.remove("side-toolbar-show");
          }
        } else {
          if (this.nexPrevScrollPosition > this.nexLastScrollPosition) {
            this.scrollScrollT = this.nexLastScrollPosition;
            if (this.scrollScrollD > this.scrollScrollT + 50) {
              document.getElementById("side-toolbar").classList.add("side-toolbar-show");
            }
          }
        }
        this.nexPrevScrollPosition = this.nexLastScrollPosition;
      }
      if (this.scrollTop > 64) {
        document.body.classList.add("header-fixed");
        let logoEl = document.querySelector(".pc-logo img");
        if (logoEl && !logoEl.classList.contains("fixed")) {
          logoEl.classList.add("fixed");
          let attr = logoEl.getAttribute("data-sublogo");
          let src = logoEl.getAttribute("src");
          logoEl.setAttribute("src", attr);
          logoEl.setAttribute("data-sublogo", src);
        }
      } else {
        document.body.classList.remove("header-fixed");
        let logoEl = document.querySelector(".pc-logo img");
        if (logoEl && logoEl.classList.contains("fixed")) {
          logoEl.classList.remove("fixed");
          let attr = logoEl.getAttribute("data-sublogo");
          let src = logoEl.getAttribute("src");
          logoEl.setAttribute("src", attr);
          logoEl.setAttribute("data-sublogo", src);
        }
      }
    },
    navbarToggle() {
      let el = document.querySelector(".navbar-toggle.collapsed");
      if (el.classList.contains("in")) {
        document.body.classList.remove("navbar-on");
        document.body.classList.add("navbar-off");
        el.classList.remove("in");
        document.querySelector(".panel-search-icon").classList.remove("hide");
      } else {
        document.body.classList.add("navbar-on");
        document.body.classList.remove("navbar-off");
        el.classList.add("in");
        document.querySelector(".panel-search-icon").classList.add("hide");
      }
    },
    searchFocus() {
      document.querySelector(".search-container").classList.add("is-focus");
      document.querySelector("#navbar-searchform").classList.add("is-focus");
      document.querySelector("#navbar-searchform").classList.add("is-actived");
      document.querySelector(".search-panel").classList.remove("hide");
      let historiesWrap = document.querySelector(".histories-wrap");
      let histories = document.querySelector(".histories-wrap .histories");
      if (histories) {
        if (histories.clientHeight > historiesWrap.clientHeight) {
          document.querySelector(".fold-text").classList.remove("hide");
        } else {
          document.querySelector(".fold-text").classList.add("hide");
        }
      } else {
        console.log(".histories element not found");
      }
    },
    searchBlur(event) {
      if (this.$refs.searchContainer && !this.$refs.searchContainer.contains(event.target) && !event.target.closest(".navbar-search-clean")) {
        document.querySelector(".search-panel").classList.add("hide");
        document.querySelector(".search-container").classList.remove("is-focus");
        document.querySelector("#navbar-searchform").classList.remove("is-focus");
        document.querySelector("#navbar-searchform").classList.remove("is-actived");
      }
    },
    searchInput(event) {
      this.$nextTick(() => {
        let el = document.querySelector(".navbar-search-clean");
        if (event.target.value && event.target.value !== "" && !el.classList.contains("show")) {
          el.classList.add("show");
        } else {
          if (!event.target.value || event.target.value === "") {
            el.classList.remove("show");
          }
        }
      });
    },
    cleanSearch() {
      document.querySelector(".navbar-search-clean").classList.remove("show");
      this.searchValue = "";
    },
    initSearchHistories() {
      if (!document.querySelector(".history-list") || document.querySelector(".history-list").length === 0) {
        return;
      }
      let item = localStorage.getItem("search-histories");
      if (item && item.trim() !== "") {
        let array = JSON.parse(item);
        let html = "";
        let html2 = "";
        for (let str of array) {
          html += "<li><a href=\"" + (window.location.pathname.startsWith("/en") || window.location.pathname.startsWith("/hk") || window.location.pathname.startsWith("/tw") || window.location.pathname.startsWith("/zh") ? (window.location.pathname.length >= 3 ? window.location.pathname.substring(0, 3) : "") + "/search" : "/search") + "?keyword=" + str + "\" class=\"hl-bg-subs\">" + str + "</a></li>";
          html2 += "<div class=\"history-item\"><div class=\"history-text\"><a href=\"" + (window.location.pathname.startsWith("/en") || window.location.pathname.startsWith("/hk") || window.location.pathname.startsWith("/tw") || window.location.pathname.startsWith("/zh") ? (window.location.pathname.length >= 3 ? window.location.pathname.substring(0, 3) : "") + "/search" : "/search") + "?keyword=" + str + "\" class=\"hl-bg-subs\">" + str + "</a></div> <div class=\"close\"><i class=\"fa fa-close\" onclick=\"clearSearchHistories(event)\" data-str=\"" + str + "\"></i></div></div>";
        }
        document.querySelector(".history-list").innerHTML = html;
        document.querySelector(".histories").innerHTML = html2;
        document.querySelector(".fold-text").classList.remove("hide");
      } else {
        document.querySelector(".fold-text").classList.add("hide");
      }
    },
    handleEnter(event) {
      const target = event.target;
      if (target.classList.contains("hl-search-input")) {
        this.mobileSearch();
      }
    },
    mobileSearch() {
      let value = document.querySelector(".mobile-search-panel .full-search-form input").value;
      if (!value || value.trim() === "") {
        return;
      }
      let url = getLocaleFromUrl() + "/search?keyword=" + value;
      document.querySelector(".full-search-form").setAttribute("action", url);
      this.handleSearchValue(value);
      document.querySelector(".fold-text").classList.remove("hide");
      window.location.href = url;
    },
    pcSearch() {
      let value = document.querySelector("#navbar-searchform .navbar-search-content input").value;
      if (!value || value.trim() === "") {
        return;
      }
      let url = getLocaleFromUrl() + "/search?keyword=" + value;
      document.querySelector("#navbar-searchform").setAttribute("action", url);
      this.handleSearchValue(value);
      window.location.href = url;
    },
    centerSearch() {
      let value = document.querySelector(".search-input-wrap .search-input").value;
      if (!value || value.trim() === "") {
        return;
      }
      let url = getLocaleFromUrl() + "/search?keyword=" + value;
      document.querySelector(".search-input-wrap").setAttribute("action", url);
      this.handleSearchValue(value);
      window.location.href = url;
    },
    handleSearchValue(value) {
      let item = localStorage.getItem("search-histories");
      let array;
      if (item && item.trim() !== "") {
        array = JSON.parse(item);
        let existingIndex = array.indexOf(value);
        if (existingIndex !== -1) {
          array.splice(existingIndex, 1);
        }
        array.unshift(value);
        if (array.length > 8) {
          array.pop();
        }
      } else {
        array = [];
        array.push(value);
      }
      localStorage.setItem("search-histories", JSON.stringify(array));
    },
    openSearchHistory() {
      let el = document.querySelector(".histories-wrap");
      if (el.classList.contains("open")) {
        document.querySelector(".histories-wrap").classList.remove("open");
        document.querySelector(".fold-text").innerText = getLocaleMsg("openMore");
      } else {
        document.querySelector(".histories-wrap").classList.add("open");
        document.querySelector(".fold-text").innerText = getLocaleMsg("retract");
      }
    },
    handleSearchPanel() {
      let el = document.querySelector(".mobile-search-panel");
      if (el.classList.contains("full")) {
        el.classList.remove("full");
      } else {
        el.classList.add("full");
      }
    },
    initRollToTop() {
      let rollTopTop = document.getElementById("roll-to-top");
      if (!rollTopTop) {
        return;
      }
      rollTopTop.style.display = "none";
      window.addEventListener("scroll", this.handleScroll);
      rollTopTop.addEventListener("click", this.scrollToTop);
    },
    handleScroll() {
      let rollTopTop = document.getElementById("roll-to-top");
      if (rollTopTop) {
        if (window.scrollY > 300) {
          rollTopTop.style.display = "block";
        } else {
          rollTopTop.style.display = "none";
        }
      }
    },
    scrollToTop(event) {
      if (event) {
        event.preventDefault();
      }
      document.body.scrollIntoView({
        behavior: "smooth"
      });
    },
    changeTheme() {
      if (document.querySelector(".side_toolbar_top").classList.contains("night-model")) {
        localStorage.setItem("theme-model", "day");
        let toolbarElement = document.querySelector(".side_toolbar_top");
        let bannerElement = document.querySelector("header.header");
        bannerElement.classList.remove("night");
        toolbarElement.classList.remove("night-model");
        toolbarElement.classList.add("day-model");
        this.currentThememModel = "day";
        document.getElementById("nightModeStylesheet").disabled = true;
      } else {
        localStorage.setItem("theme-model", "night");
        let toolbarElement = document.querySelector(".side_toolbar_top");
        let bannerElement = document.querySelector("header.header");
        bannerElement.classList.add("night");
        toolbarElement.classList.remove("day-model");
        toolbarElement.classList.add("night-model");
        this.currentThememModel = "night";
        document.getElementById("nightModeStylesheet").disabled = false;
      }
      switchTheme(this.currentThememModel == "day" ? 1 : 2);
    },
    initChangeTheme() {
      if (document.querySelector(".header") && document.querySelector(".header").classList.contains("night")) {
        localStorage.setItem("theme-model", "night");
      } else {
        localStorage.setItem("theme-model", "day");
      }
      let model = localStorage.getItem("theme-model");
      if (!model || model.trim() === "") {
        const hour = new Date().getHours();
        if (hour >= 19 || hour < 6) {
          this.currentThememModel = "night";
          let toolbarElement = document.querySelector(".side_toolbar_top");
          if (toolbarElement) {
            toolbarElement.classList.remove("day-model");
            toolbarElement.classList.add("night-model");
          }
          let bannerElement = document.querySelector("header.header");
          if (bannerElement) {
            bannerElement.classList.remove("day");
            bannerElement.classList.add("night");
          }
          document.getElementById("nightModeStylesheet").disabled = false;
        } else {
          this.currentThememModel = "day";
          let toolbarElement = document.querySelector(".side_toolbar_top");
          if (toolbarElement) {
            toolbarElement.classList.remove("night-model");
            toolbarElement.classList.add("day-model");
          }
          let bannerElement = document.querySelector("header.header");
          if (bannerElement) {
            bannerElement.classList.remove("night");
            bannerElement.classList.add("day");
          }
          document.getElementById("nightModeStylesheet").disabled = true;
        }
      } else {
        if (model == "day") {
          let toolbarElement = document.querySelector(".side_toolbar_top");
          if (toolbarElement) {
            toolbarElement.classList.remove("night-model");
            toolbarElement.classList.add("day-model");
            this.currentThememModel = "day";
          }
          let bannerElement = document.querySelector("header.header");
          if (bannerElement) {
            bannerElement.classList.remove("night");
            bannerElement.classList.add("day");
          }
          document.getElementById("nightModeStylesheet").disabled = true;
        } else {
          let toolbarElement = document.querySelector(".side_toolbar_top");
          if (toolbarElement) {
            toolbarElement.classList.remove("day-model");
            toolbarElement.classList.add("night-model");
            this.currentThememModel = "night";
          }
          let bannerElement = document.querySelector("header.header");
          if (bannerElement) {
            bannerElement.classList.remove("day");
            bannerElement.classList.add("night");
          }
          document.getElementById("nightModeStylesheet").disabled = false;
        }
      }
    },
    expandAvatar(event) {
      this.$refs.avatarItem.classList.add("mini-avatar-large");
      this.$refs.avatarItem.classList.remove("mini-avatar-small");
    },
    shrinkAvatar(event) {
      if (!this.$refs.avatarItem.contains(event.relatedTarget)) {
        this.$refs.avatarItem.classList.remove("mini-avatar-large");
        this.$refs.avatarItem.classList.add("mini-avatar-small");
      }
    }
  }
});
let _0xd_0x8d5;
_0xd_0x8d5 = 0;
var os = function () {
  var _0xc9aa = navigator.userAgent;
  var _0x3739e = new RegExp("(?:Windows Phone)", "").test(_0xc9aa);
  var _0xe1a8ca = new RegExp("(?:SymbianOS)", "").test(_0xc9aa) || _0x3739e;
  var _0x437a3g = new RegExp("(?:Android)", "").test(_0xc9aa);
  var _0x2ef7e = new RegExp("(?:Firefox)", "").test(_0xc9aa);
  var _0x5_0xefd = new RegExp("(?:Chrome|CriOS)", "").test(_0xc9aa);
  var _0xe1begg = new RegExp("(?:iPad|PlayBook)", "").test(_0xc9aa) || _0x437a3g && !new RegExp("(?:Mobile)", "").test(_0xc9aa) || _0x2ef7e && new RegExp(")telbaT:?(".split("").reverse().join(""), "").test(_0xc9aa);
  var _0x7af = new RegExp(")enohPi:?(".split("").reverse().join(""), "").test(_0xc9aa) && !_0xe1begg;
  var _0xd3e = !_0x7af && !_0x437a3g && !_0xe1a8ca;
  return {
    isTablet: _0xe1begg,
    isPhone: _0x7af,
    isAndroid: _0x437a3g,
    isPc: _0xd3e
  };
}();
function setCookie(name, value, daysToLive) {
  var _0x31gg = 9;
  let _0xa62e = name + "=" + encodeURIComponent(value);
  _0x31gg = 12;
  if (typeof daysToLive === "rebmun".split("").reverse().join("")) {
    _0xa62e += "; max-age=" + daysToLive * 24 * 60 * 60;
  }
  _0xa62e += "/=htaP ;".split("").reverse().join("");
  document.cookie = _0xa62e;
}
function getBrowserName() {
  var _0x3g31bf = 8;
  let u = navigator.userAgent;
  _0x3g31bf = "nmqipo";
  var _0xcad9ce = 12;
  let _0x723b4b = [{
    name: "sgssapp",
    it: new RegExp("hcraesuogos".split("").reverse().join(""), "i").test(u)
  }, {
    name: "wechat",
    it: new RegExp("regnesseMorciM".split("").reverse().join(""), "i").test(u)
  }, {
    name: "weibo",
    it: !!u.match(new RegExp("Weibo", "i"))
  }, {
    name: "uc",
    it: !!u.match(new RegExp("UCBrowser", "i")) || u.indexOf("resworBU ".split("").reverse().join("")) > -1
  }, {
    name: "sogou",
    it: u.indexOf("rSateM".split("").reverse().join("")) > -1 || u.indexOf("uogoS".split("").reverse().join("")) > -1
  }, {
    name: "xiaomi",
    it: u.indexOf("resworBiuiM".split("").reverse().join("")) > -1
  }, {
    name: "baidu",
    it: u.indexOf("Baidu") > -1 || u.indexOf("resworBUDIB".split("").reverse().join("")) > -1
  }, {
    name: "360",
    it: u.indexOf("EE063".split("").reverse().join("")) > -1 || u.indexOf("360SE") > -1
  }, {
    name: "2345",
    it: u.indexOf("2345Explorer") > -1
  }, {
    name: "edge",
    it: u.indexOf("egdE".split("").reverse().join("")) > -1
  }, {
    name: "ie11",
    it: u.indexOf("tnedirT".split("").reverse().join("")) > -1 && u.indexOf("rv:11.0") > -1
  }, {
    name: "ie",
    it: u.indexOf("elbitapmoc".split("").reverse().join("")) > -1 && u.indexOf("EISM".split("").reverse().join("")) > -1
  }, {
    name: "firefox",
    it: u.indexOf("Firefox") > -1
  }, {
    name: "safari",
    it: u.indexOf("irafaS".split("").reverse().join("")) > -1 && u.indexOf("Chrome") === -1
  }, {
    name: "qqbrowser",
    it: u.indexOf("MQQBrowser") > -1 && u.indexOf(" QQ") === -1
  }, {
    name: "qq",
    it: u.indexOf("QQ") > -1
  }, {
    name: "chrome",
    it: u.indexOf("emorhC".split("").reverse().join("")) > -1 || u.indexOf("CriOS") > -1
  }, {
    name: "opera",
    it: u.indexOf("Opera") > -1 || u.indexOf("OPR") > -1
  }];
  _0xcad9ce = 9;
  for (let i = 0; i < _0x723b4b.length; i++) {
    if (_0x723b4b[i].it) {
      return _0x723b4b[i].name;
    }
  }
  return "other";
}
function getOSName() {
  var _0x5dd53d = 6;
  let u = navigator.userAgent;
  _0x5dd53d = 10;
  if (!!u.match(new RegExp("compatible", "i")) || u.match(new RegExp("Windows", "i"))) {
    return "windows";
  } else {
    if (!!u.match(new RegExp("hsotnicaM".split("").reverse().join(""), "i")) || u.match(new RegExp("letnIcaM".split("").reverse().join(""), "i"))) {
      return "macOS";
    } else {
      if (!!u.match(new RegExp("enohpi".split("").reverse().join(""), "i")) || u.match(new RegExp("dapI".split("").reverse().join(""), "i"))) {
        return "soi".split("").reverse().join("");
      } else {
        if (u.match(new RegExp("android", "i"))) {
          return "diordna".split("").reverse().join("");
        } else {
          if (u.match(new RegExp("Ubuntu", "i"))) {
            return "utnubU".split("").reverse().join("");
          } else {
            if (u.match(new RegExp("01BB".split("").reverse().join(""), "i"))) {
              return "blackberry";
            } else {
              if (u.match(new RegExp("IEMobile", "i"))) {
                return "enohpniw".split("").reverse().join("");
              } else {
                return "other";
              }
            }
          }
        }
      }
    }
  }
}
function clearSearchHistories(event) {
  if (event) {
    event.stopPropagation();
    let _0x_0x5ff;
    let _0xa6d3fc = localStorage.getItem("search-histories");
    _0x_0x5ff = 12;
    let _0xa151f;
    let _0x64827c = JSON.parse(_0xa6d3fc);
    _0xa151f = 14;
    let _0x373e = _0x64827c.indexOf(event.target.getAttribute("rts-atad".split("").reverse().join("")));
    if (_0x373e !== -1) {
      _0x64827c.splice(_0x373e, 1);
    }
    event.target.closest(".history-item").remove();
    if (_0x64827c && _0x64827c.length > 0) {
      localStorage.setItem("search-histories", JSON.stringify(_0x64827c));
    } else {
      localStorage.setItem("search-histories", "");
      document.querySelector(".fold-text").classList.add("hide");
    }
  } else {
    localStorage.setItem("search-histories", "");
    document.querySelector("tsil-yrotsih.".split("").reverse().join("")).innerHTML = "";
    document.querySelector(".histories").innerHTML = "";
    document.querySelector("txet-dlof.".split("").reverse().join("")).classList.add("edih".split("").reverse().join(""));
  }
}
function getLocaleFromUrl() {
  var _0x17d3c = 6;
  const _0xaf0cd = window.location.href;
  _0x17d3c = 10;
  var _0xcb666e = 4;
  const _0xca20a = new URL(_0xaf0cd);
  _0xcb666e = "pchchn";
  const _0x3cb1g = _0xca20a.pathname.split("/");
  if (_0x3cb1g.length > 1) {
    const _0x3f_0x4ba = _0x3cb1g[1];
    if (_0x3f_0x4ba === "zh" || _0x3f_0x4ba === "hk" || _0x3f_0x4ba === "wt".split("").reverse().join("") || _0x3f_0x4ba === "ne".split("").reverse().join("")) {
      return "/" + _0x3f_0x4ba;
    }
  }
  return "";
}
function getQueryString(name, _0x45904c) {
  let _0x19d25b = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var _0x5g6b = 14;
  let r = window.location.search.substr(1).match(_0x19d25b);
  _0x5g6b = 7;
  _0x45904c = "";
  if (r != null) {
    _0x45904c = decodeURIComponent(r[2]);
  }
  _0x19d25b = null;
  r = null;
  return !_0x45904c || false || _0x45904c === "" || _0x45904c === "undefined" ? "" : _0x45904c;
}
function copyLink(text, href, _0x9ec55a) {
  const _0xf_0x4f2 = document.createElement("textarea");
  _0x9ec55a = 10;
  var _0x309dc = 15;
  let _0xb8c79f = window.location.href;
  _0x309dc = 10;
  let _0x13bfd = getQueryString("ecruos_erahs".split("").reverse().join(""));
  if (!_0x13bfd) {
    if (href) {
      if (os.isAndroid || os.isPhone) {
        _0xb8c79f = href + "elibom=ecruos_erahs?".split("").reverse().join("");
      } else {
        if (os.isTablet) {
          _0xb8c79f = href + "?share_source=pad";
        } else {
          if (os.isPc) {
            _0xb8c79f = href + "?share_source=pc";
          }
        }
      }
    } else {
      if (os.isAndroid || os.isPhone) {
        _0xb8c79f = window.location.protocol + "//" + window.location.host + window.location.pathname + "elibom=ecruos_erahs?".split("").reverse().join("");
      } else {
        if (os.isTablet) {
          _0xb8c79f = window.location.protocol + "//" + window.location.host + window.location.pathname + "?share_source=pad";
        } else {
          if (os.isPc) {
            _0xb8c79f = window.location.protocol + "//" + window.location.host + window.location.pathname + "?share_source=pc";
          }
        }
      }
    }
  }
  _0xf_0x4f2.value = text ? text + " " + _0xb8c79f : _0xb8c79f;
  document.body.appendChild(_0xf_0x4f2);
  _0xf_0x4f2.select();
  document.execCommand("ypoc".split("").reverse().join(""));
  document.body.removeChild(_0xf_0x4f2);
  layer.msg(getLocaleMsg("copySuccess"), 1500);
}
var _0x0a6b = 9;
var isRolling = false;
_0x0a6b = 6;
var isForgot = false;
function changeReverse() {
  isRolling = !isRolling;
  isForgot = false;
  var _0xf3f0d = document.getElementById("esrever".split("").reverse().join(""));
  if (isRolling) {
    _0xf3f0d.className = "box login-container-box box_reverse";
  } else {
    _0xf3f0d.className = "xob-reniatnoc-nigol xob".split("").reverse().join("");
  }
}
function changeToForgot() {
  isForgot = !isForgot;
  isRolling = false;
  var _0x61caee = 7;
  var _0x8gg51b = document.getElementById("esrever".split("").reverse().join(""));
  _0x61caee = "jmdgqn".split("").reverse().join("");
  if (isForgot) {
    _0x8gg51b.className = "box login-container-box box_forgot";
  } else {
    _0x8gg51b.className = "xob-reniatnoc-nigol xob".split("").reverse().join("");
  }
}
function switchTheme(type) {
  sendPostRequest("emeht_hctiws/".split("").reverse().join(""), {
    type: type
  }).then(response => {
    var _0x22f75b = 12;
    let _0xd87g = JSON.parse(response);
    _0x22f75b = 13;
    if (_0xd87g.code === 0) {
      console.log("switch theme success");
    }
  });
}
function sendMail(button, _0x26ca) {
  if (button.textContent !== "送发".split("").reverse().join("") && button.textContent !== "發送" && button.textContent !== "dnes".split("").reverse().join("")) {
    return;
  }
  const _0xf2_0xfa6 = button.closest("tnetnoc-nigol.".split("").reverse().join("")).querySelector("input[name=email]").value;
  _0x26ca = 2;
  if (!_0xf2_0xfa6 || _0xf2_0xfa6.trim() === "") {
    layer.msg(getLocaleMsg("enterEmail"));
    return;
  }
  sendPostRequest("/send", {
    email: _0xf2_0xfa6
  }).then(response => {
    var _0x957b6c = 15;
    let _0x6b_0x5d8 = JSON.parse(response);
    _0x957b6c = 9;
    if (_0x6b_0x5d8.code === 0) {
      button.style.background = "ff4e6a#".split("").reverse().join("");
      button.style.cursor = "dewolla-ton".split("").reverse().join("");
      button.classList.add("dnes-dah".split("").reverse().join(""));
      var _0x49ged = 13;
      let _0xcfd6c = 59;
      _0x49ged = 9;
      button.textContent = `${_0xcfd6c}s`;
      console.log(getLocaleMsg("emailCodeSendSuccess") + ":", response);
      const _0x12fba = setInterval(() => {
        _0xcfd6c--;
        button.textContent = `${_0xcfd6c}s`;
        if (_0xcfd6c <= 1) {
          clearInterval(_0x12fba);
          button.classList.remove("had-send");
          button.textContent = getLocaleMsg("send");
          button.style.background = "#00b2ff";
          button.style.cursor = "pointer";
        }
      }, 1000);
    } else {
      layer.msg(_0x6b_0x5d8.msg);
    }
  }).catch(error => {
    layer.msg(getLocaleMsg("emailCodeSendFail") + ":", error);
  });
}
function refreshCode(event) {
  event.src = "/captcha/" + new Date().getTime();
}
function closePanelForgetContainer(_0x2_0x931) {
  let _0x6_0xfc8 = document.querySelector("#panel-forget-pwd-container-box");
  _0x2_0x931 = 3;
  _0x6_0xfc8.remove();
  document.querySelector("body").classList.remove("hide-scroll");
}
function openLoginPanel() {
  document.querySelector("ppa#".split("").reverse().join("")).insertAdjacentHTML("afterend", loginTemplate);
  document.querySelector("body").classList.add("hide-scroll");
  document.querySelector("elggot-rabvan.".split("").reverse().join("")).click();
}
function closeLoginPanel() {
  var _0x31eda = 7;
  let _0x168f4f = document.querySelector("esrever#".split("").reverse().join(""));
  _0x31eda = 3;
  _0x168f4f.remove();
  document.querySelector("ydob".split("").reverse().join("")).classList.remove("llorcs-edih".split("").reverse().join(""));
}
function openMobileLoginPanel() {
  isRolling = false;
  openLoginPanel();
}
function openMobileRegisterPanel() {
  isRolling = false;
  openLoginPanel();
  changeReverse();
}
function login(_0x32a7ag) {
  const _0x358e = document.querySelector("]liame=eman[tupni mrof-nigol.".split("").reverse().join("")).value;
  const _0x4464g = document.querySelector(".login-form input[name=password]").value;
  _0x32a7ag = "logagl";
  const _0x7_0x20g = document.querySelector("]ahctpac=eman[tupni mrof-nigol.".split("").reverse().join("")).value;
  if (!_0x358e || _0x358e.trim() === "") {
    layer.msg(getLocaleMsg("enterEmail"));
    return;
  }
  if (!_0x4464g || _0x4464g.trim() === "") {
    layer.msg(getLocaleMsg("enterPwd"));
    return;
  }
  if (!_0x7_0x20g || _0x7_0x20g.trim() === "") {
    layer.msg(getLocaleMsg("edoCretne".split("").reverse().join("")));
    return;
  }
  sendPostRequest("/login", {
    email: _0x358e,
    password: encryptByAES(_0x4464g),
    code: _0x7_0x20g
  }).then(response => {
    let _0x3_0xc3e;
    let _0x738b = JSON.parse(response);
    _0x3_0xc3e = 6;
    if (_0x738b.code === 0) {
      layer.msg(getLocaleMsg("loginSuccess"));
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      layer.msg(_0x738b.msg);
      document.querySelector("ahctpac-euy.".split("").reverse().join("")).click();
    }
  }).catch(error => {
    console.error("请求失败:", error);
    layer.msg(getLocaleMsg("loginFail"));
    document.querySelector("ahctpac-euy.".split("").reverse().join("")).click();
  });
}
function register() {
  const _0x7d_0x476 = document.querySelector(".register-form input[name=email]").value;
  var _0x6f54c = 12;
  const _0x2cfc = document.querySelector("]emankcin=eman[tupni mrof-retsiger.".split("").reverse().join("")).value;
  _0x6f54c = 7;
  var _0x8acea = 11;
  const _0x3ae7cc = document.querySelector(".register-form input[name=password]").value;
  _0x8acea = 9;
  var _0xe54ddc = 3;
  const _0x148c8a = document.querySelector("]drowssaPer=eman[tupni mrof-retsiger.".split("").reverse().join("")).value;
  _0xe54ddc = 10;
  const _0x28e = document.querySelector("]ahctpac=eman[tupni mrof-retsiger.".split("").reverse().join("")).value;
  if (!_0x7d_0x476 || _0x7d_0x476.trim() === "") {
    layer.msg(getLocaleMsg("enterEmail"));
    return;
  }
  if (!_0x2cfc || _0x2cfc.trim() === "") {
    layer.msg(getLocaleMsg("enterNickname"));
    return;
  }
  if (_0x2cfc.length <= 1) {
    layer.msg(getLocaleMsg("nicknameLengthError"));
    return;
  }
  if (!_0x3ae7cc || _0x3ae7cc.trim() === "") {
    layer.msg(getLocaleMsg("enterPwd"));
    return;
  }
  if (!_0x28e || _0x28e.trim() === "") {
    layer.msg(getLocaleMsg("enterCode"));
    return;
  }
  if (!_0x3ae7cc === _0x148c8a) {
    layer.msg(getLocaleMsg("twoPwdWrong"));
    return;
  }
  sendPostRequest("retsiger/".split("").reverse().join(""), {
    email: _0x7d_0x476,
    nickname: _0x2cfc,
    password: _0x3ae7cc,
    code: _0x28e
  }).then(response => {
    let _0x522bg;
    let _0x6860a = JSON.parse(response);
    _0x522bg = 5;
    if (_0x6860a.code === 0) {
      layer.msg(getLocaleMsg("registerSuccess"));
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      layer.msg(_0x6860a.msg);
    }
  }).catch(error => {
    console.error(":败失求请".split("").reverse().join(""), error);
    layer.msg(getLocaleMsg("registerFail"));
  });
}
function forgetPwd(_0x86ac3e, _0x4_0x8c8) {
  const _0xa8d78e = document.querySelector("]liame=eman[tupni mrof-tegrof.".split("").reverse().join("")).value;
  _0x86ac3e = 6;
  const _0x09c7e = document.querySelector(".forget-form input[name=password]").value;
  const _0x4efgda = document.querySelector(".forget-form input[name=captcha]").value;
  _0x4_0x8c8 = 9;
  if (!_0xa8d78e || _0xa8d78e.trim() === "") {
    layer.msg(getLocaleMsg("enterEmail"));
    return;
  }
  if (!_0x09c7e || _0x09c7e.trim() === "") {
    layer.msg(getLocaleMsg("enterPwd"));
    return;
  }
  if (!_0x4efgda || _0x4efgda.trim() === "") {
    layer.msg(getLocaleMsg("enterCode"));
    return;
  }
  sendPostRequest("/forget_pwd", {
    email: _0xa8d78e,
    password: _0x09c7e,
    code: _0x4efgda
  }).then(response => {
    var _0x0726c = 9;
    let _0x8b09f = JSON.parse(response);
    _0x0726c = 9;
    if (_0x8b09f.code === 0) {
      layer.msg(getLocaleMsg("resetPwdSuccess"));
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      layer.msg(_0x8b09f.msg);
    }
  }).catch(error => {
    console.error("请求失败:", error);
    layer.msg(getLocaleMsg("logoutFail"));
  });
}
function logout(isToggle) {
  if (isToggle) {
    document.querySelector("elggot-rabvan.".split("").reverse().join("")).click();
  }
  layer.confirm(getLocaleMsg("sureLogout"), function () {
    sendPostRequest("/logout").then(response => {
      let _0x5g769c = JSON.parse(response);
      if (_0x5g769c.code === 0) {
        window.location.reload();
      }
    }).catch(error => {
      console.error(":败失求请".split("").reverse().join(""), error);
      layer.msg(getLocaleMsg("logoutFail"));
    });
  });
}
function forgetPanelPwd(_0xadb23e) {
  var _0xdebag = 8;
  const _0xe5bebb = document.querySelector(".panel-forget-container .forget-form input[name=email]").value;
  _0xdebag = 15;
  const _0x18dgcf = document.querySelector(".panel-forget-container .forget-form input[name=password]").value;
  const _0x593ef = document.querySelector(".panel-forget-container .forget-form input[name=captcha]").value;
  _0xadb23e = 9;
  if (!_0xe5bebb || _0xe5bebb.trim() === "") {
    layer.msg(getLocaleMsg("liamEretne".split("").reverse().join("")));
    return;
  }
  if (!_0x18dgcf || _0x18dgcf.trim() === "") {
    layer.msg(getLocaleMsg("dwPretne".split("").reverse().join("")));
    return;
  }
  if (!_0x593ef || _0x593ef.trim() === "") {
    layer.msg(getLocaleMsg("enterCode"));
    return;
  }
  sendPostRequest("/user/panel/forget_pwd", {
    email: _0xe5bebb,
    password: _0x18dgcf,
    code: _0x593ef
  }).then(response => {
    let _0x7e75f = JSON.parse(response);
    if (_0x7e75f.code === 0) {
      layer.msg(getLocaleMsg("resetPwdSuccess"));
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      layer.msg(_0x7e75f.msg);
    }
  }).catch(error => {
    console.error(":败失求请".split("").reverse().join(""), error);
    layer.msg(getLocaleMsg("logoutFail"));
  });
}
function jumpToSearch(newPageNumber = 1, pages) {
  let _0xbe4f1c = window.location.href;
  if (newPageNumber && pages) {
    if (Number(newPageNumber) > Number(pages)) {
      newPageNumber = pages;
    }
  }
  let _0xc91bc = new URL(_0xbe4f1c);
  _0xc91bc.searchParams.set("p", newPageNumber);
  window.location.href = _0xc91bc.toString();
}
function jumpTo(num) {
  if (!num || num === "") {
    return;
  }
  var _0xdb4cc = 2;
  let _0x82cc2f = window.location.href;
  _0xdb4cc = "jgpifl".split("").reverse().join("");
  if (_0x82cc2f.indexOf("?") !== -1) {
    if (_0x82cc2f.indexOf("muNegap".split("").reverse().join("")) !== -1) {
      _0x82cc2f = replaceUrlParamValue(window.location.href, "pageNum", num);
    } else {
      _0x82cc2f += "=muNegap&".split("").reverse().join("") + num;
    }
  } else {
    _0x82cc2f += "=muNegap?".split("").reverse().join("") + num;
  }
  window.location.href = _0x82cc2f;
}
function replaceUrlParamValue(url, paramName, replaceVal, _0x22b46f) {
  let _0xdc50bc = url.toString();
  _0x22b46f = 13;
  let _0x86456c = eval("/(" + paramName + "=)([^&]*)/gi");
  return _0xdc50bc.replace(_0x86456c, paramName + "=" + replaceVal);
}
function toUnderLine(str) {
  return str.replace(new RegExp("[A-Z]", "g"), match => "_" + match.toLowerCase());
}
Date.prototype.format = function (format) {
  var _0x596fd = 7;
  let o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds()
  };
  _0x596fd = "ejdann";
  if (new RegExp("(y+)", "").test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
};
openApp();
function openApp(_0x4e47bg) {
  let _0x2d05fc = localStorage.getItem("browser-code");
  _0x4e47bg = "kaknlf".split("").reverse().join("");
  if (_0x2d05fc && _0x2d05fc.trim() !== "") {
    var _0xae6cfa = 5;
    let s = decryptByAES(_0x2d05fc, AES_KEY);
    _0xae6cfa = "hnhoap";
    if (s && s.trim() !== "") {
      let _0xe4e;
      let _0xf421a = s.split("_")[1];
      _0xe4e = 15;
      let _0xf9g2c = new Date().format("yyyy-MM-dd");
      if (_0xf421a === _0xf9g2c) {
        return;
      } else {
        localStorage.setItem("browser-code", "");
      }
    }
  }
  sendPostRequest("/add_website_visit", {
    browserName: getBrowserName(),
    osName: getOSName()
  }).then(r => {
    var _0x1e7c3c = 17;
    let _0xce95f = JSON.parse(r);
    _0x1e7c3c = 7;
    if (_0xce95f.code === 200) {
      console.log("awv success");
    }
  });
}
if (document.getElementById("yrotsih-resu".split("").reverse().join("")) && document.getElementById("yrotsih-resu".split("").reverse().join("")).length > 0) {
  document.getElementById("user-history").addEventListener("click", function () {
    sendGetRequest("nigol_kcehc/".split("").reverse().join("")).then(r => {
      var _0x0c69d = 10;
      let _0xd84aaf = JSON.parse(r);
      _0x0c69d = 9;
      if (_0xd84aaf.code === 0) {
        window.location.href = getLocaleFromUrl() + "yrotsih/resu/".split("").reverse().join("");
      }
    });
  });
}
if (document.getElementById("etiruovaf-resu".split("").reverse().join("")) && document.getElementById("user-favourite").length > 0) {
  document.getElementById("etiruovaf-resu".split("").reverse().join("")).addEventListener("kcilc".split("").reverse().join(""), function () {
    sendGetRequest("/check_login").then(r => {
      var _0xfae2e = 8;
      let _0xgb148e = JSON.parse(r);
      _0xfae2e = 16;
      if (_0xgb148e.code === 0) {
        window.location.href = getLocaleFromUrl() + "/user/favourite";
      }
    });
  });
}
async function checkMobile(mobile) {
  try {
    const _0x8f5ga = await sendGetRequest(`/check_mobile/${mobile}`);
    var _0x61af4c = 6;
    const _0x8_0x6e3 = JSON.parse(_0x8f5ga);
    _0x61af4c = 8;
    return _0x8_0x6e3.code === 0;
  } catch (error) {
    throw new Error("elibom kcehc ot deliaF".split("").reverse().join(""));
  }
}
async function checkNickname(nickname) {
  try {
    let _0x2375g;
    const _0xdaccbf = await sendGetRequest(`/check_nickname/${nickname}`);
    _0x2375g = 12;
    const _0x3f2 = JSON.parse(_0xdaccbf);
    return _0x3f2.code === 0;
  } catch (error) {
    throw new Error("Failed to check nickname");
  }
}
async function updateUserInfo(_0x11a) {
  var _0xe17d = 4;
  const _0x1ff = document.querySelector("#user-info-form input[name=mobile]").value;
  _0xe17d = 0;
  var _0xg5642f = 16;
  const _0x9_0xgac = document.querySelector("#user-info-form input[name=nickname]").value;
  _0xg5642f = 12;
  const _0xd5df0a = document.getElementById("avatarImage").getAttribute("crs".split("").reverse().join(""));
  _0x11a = "kdlhfj";
  const _0xfbf1ce = document.querySelector("]ratava=eman[tupni mrof-ofni-resu#".split("").reverse().join("")).value;
  try {
    if (_0x1ff && _0x1ff.trim() !== "") {
      var _0xe61f = 11;
      const _0x40c5ff = await checkMobile(_0x1ff);
      _0xe61f = 9;
      if (!_0x40c5ff) {
        layer.msg(getLocaleMsg("mobileExist"));
        return;
      }
    }
    if (_0x9_0xgac && _0x9_0xgac.trim() !== "") {
      let _0xa_0xa7d;
      const _0xe36b = await checkNickname(_0x9_0xgac);
      _0xa_0xa7d = 16;
      if (!_0xe36b) {
        layer.msg(getLocaleMsg("nicknameExist"));
        return;
      }
    }
    if ((!_0x1ff || _0x1ff.trim() === "") && (!_0x9_0xgac || _0x9_0xgac.trim() === "") && (!_0xfbf1ce || _0xfbf1ce.trim() === "" || _0xd5df0a.indexOf(_0xfbf1ce) === -1)) {
      layer.msg(getLocaleMsg("gnihtoNod".split("").reverse().join("")));
      return;
    }
    let _0xagf6gg = document.querySelector("mrof-ofni-resu#".split("").reverse().join("")).getAttribute("noitca".split("").reverse().join(""));
    await sendPostRequest(_0xagf6gg, {
      nickname: !_0x9_0xgac || _0x9_0xgac.trim() === "" ? null : _0x9_0xgac,
      mobile: !_0x1ff || _0x1ff.trim() === "" ? null : _0x1ff,
      avatar: !_0xfbf1ce || _0xfbf1ce.trim() === "" ? null : _0xfbf1ce
    }).then(r => {
      let _0xcfg8bd = JSON.parse(r);
      if (_0xcfg8bd.code === 0) {
        layer.msg(getLocaleMsg("saveSuccess"));
      } else {
        layer.msg(_0xcfg8bd.msg);
      }
    });
  } catch (error) {
    console.error(error);
    layer.msg("请求失败，请稍后再试");
  }
}
async function updateLevelModel(_0x73f3ae) {
  var _0x1cfb8d = 16;
  const _0x3fca4b = document.querySelector("dekcehc:]\"dIledoMlevel\"=eman[tupni".split("").reverse().join("")).getAttribute("di-atad".split("").reverse().join(""));
  _0x1cfb8d = 2;
  let _0xa8ade = document.querySelector("input[name=\"levelModelPwd\"]").value;
  _0x73f3ae = "gifmhd".split("").reverse().join("");
  if (_0xa8ade && _0xa8ade.length !== 6) {
    layer.msg(getLocaleMsg("dwP6retne".split("").reverse().join("")));
    return;
  }
  try {
    let _0x3d81a = document.querySelector("#user-info-form").getAttribute("action");
    await sendPostRequest(_0x3d81a, {
      levelModelId: _0x3fca4b,
      levelModelPwd: _0xa8ade
    }).then(r => {
      var _0x3fa7a = 4;
      let _0x9739b = JSON.parse(r);
      _0x3fa7a = 9;
      if (_0x9739b.code === 0) {
        layer.msg(getLocaleMsg("sseccuSevas".split("").reverse().join("")));
      } else {
        layer.msg(_0x9739b.msg);
      }
    });
  } catch (error) {
    console.error(error);
    layer.msg("试再后稍请，败失求请".split("").reverse().join(""));
  }
}
async function updatePwd(_0xee5bcb) {
  var _0x0abcg = 8;
  _0x0abcg = 8;
  var _0x56fbfc = 8;
  const _0x10_0xf99 = document.querySelector("]drowssap=eman[tupni mrof-ofni-resu#".split("").reverse().join("")).value;
  _0x56fbfc = "clnkcn";
  var _0x427aaa = 11;
  const _0x60be = document.querySelector("#user-info-form input[name=rePwd]").value;
  _0x427aaa = "opclih".split("").reverse().join("");
  if (document.querySelector("p-dwp-dlo.".split("").reverse().join(""))) {
    _0xee5bcb = document.querySelector("#user-info-form input[name=oldPwd]").value;
    if (!_0xee5bcb || _0xee5bcb.trim() === "") {
      layer.msg(getLocaleMsg("lluNtoNdwPdlo".split("").reverse().join("")));
      return;
    }
  }
  if (!_0x10_0xf99 || _0x10_0xf99.trim() === "") {
    layer.msg(getLocaleMsg("newPwdNotNull"));
    return;
  }
  if (_0x10_0xf99.length < 6) {
    layer.msg(getLocaleMsg("6tGhtgneLdwPwen".split("").reverse().join("")));
    return;
  }
  if (!_0x60be || _0x60be.trim() === "") {
    layer.msg(getLocaleMsg("repeatPwdNotNull"));
    return;
  }
  if (_0x10_0xf99 !== _0x60be) {
    layer.msg(getLocaleMsg("twoPwdWrong"));
    return;
  }
  if (document.querySelector("p-dwp-dlo.".split("").reverse().join(""))) {
    const _0x8b0b5a = await sendGetRequest(`/user/check_old_pwd/${_0xee5bcb}`);
    let _0xc88dce;
    const _0x727eae = JSON.parse(_0x8b0b5a);
    _0xc88dce = 3;
    if (_0x727eae.code !== 0) {
      layer.msg(_0x727eae.msg);
      return;
    }
  }
  let _0xc_0xfbf = document.querySelector("#user-info-form").getAttribute("noitca".split("").reverse().join(""));
  await sendPostRequest(_0xc_0xfbf, {
    password: _0x10_0xf99
  }).then(r => {
    let _0xc13g = JSON.parse(r);
    if (_0xc13g.code === 0) {
      setTimeout(() => {
        layer.msg(getLocaleMsg("saveSuccess"));
      }, 1000);
      window.location.reload();
    } else {
      layer.msg(_0xc13g.msg);
    }
  });
}
function openFavourite(host) {
  sendGetRequest("nigol_kcehc/".split("").reverse().join("")).then(r => {
    var _0x6d744d = 12;
    let _0x58ef9b = JSON.parse(r);
    _0x6d744d = 6;
    if (_0x58ef9b.code === 0) {
      window.location.href = host + "/user/favourite";
    }
  });
}
function openHistory(host) {
  sendGetRequest("/check_login").then(r => {
    var _0x22a = 12;
    let _0xcf5b = JSON.parse(r);
    _0x22a = 5;
    if (_0xcf5b.code === 0) {
      window.location.href = host + "/user/history";
    }
  });
}
function openLevelModel(host) {
  sendGetRequest("/check_login").then(r => {
    let _0x3114cb;
    let _0x7a5c7c = JSON.parse(r);
    _0x3114cb = 5;
    if (_0x7a5c7c.code === 0) {
      window.location.href = host + "/user/panel";
    }
  });
}
if (document.querySelector("#selectAll")) {
  document.querySelector("llAtceles#".split("").reverse().join("")).addEventListener("kcilc".split("").reverse().join(""), function () {
    document.querySelectorAll(".conch-input").forEach(function (checkbox) {
      checkbox.checked = true;
    });
  });
}
if (document.getElementById("deselectAll")) {
  document.getElementById("llAtcelesed".split("").reverse().join("")).addEventListener("click", function () {
    document.querySelectorAll(".conch-input").forEach(function (checkbox) {
      checkbox.checked = !checkbox.checked;
    });
  });
}
if (document.querySelector(".section-favourite #deleteSelected")) {
  document.querySelector(".section-favourite #deleteSelected").addEventListener("kcilc".split("").reverse().join(""), function () {
    var _0x571e9c = 18;
    const _0x8fe2da = Array.from(document.querySelectorAll(".viu-data-item")).filter(function (item) {
      return item.querySelector(".conch-input").checked;
    });
    _0x571e9c = "kpbebj".split("").reverse().join("");
    if (_0x8fe2da.length === 0) {
      layer.msg(getLocaleMsg("metIeteleDtceles".split("").reverse().join("")));
      return;
    }
    layer.confirm(getLocaleMsg("deleteSelectItem"), function () {
      var _0xa29c3e = 5;
      const _0x9232c = _0x8fe2da.map(item => item.getAttribute("data-id"));
      _0xa29c3e = 7;
      sendPostRequest("/user/favourite/delete", _0x9232c).then(r => {
        var _0xddccc = 11;
        let _0x3786ce = JSON.parse(r);
        _0xddccc = "jjjble";
        if (_0x3786ce.code === 0) {
          layer.msg(getLocaleMsg("deleteSuccess"));
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          layer.msg(_0x3786ce.msg);
        }
      });
    });
  });
}
if (document.querySelector("llAraelc# etiruovaf-noitces.".split("").reverse().join(""))) {
  document.querySelector(".section-favourite #clearAll").addEventListener("click", function () {
    var _0x0ebe = 10;
    let _0x13_0x5c9 = document.querySelectorAll(".viu-data-item");
    _0x0ebe = 2;
    if (_0x13_0x5c9 && _0x13_0x5c9.length > 0) {
      layer.confirm(getLocaleMsg("metIllAraelc".split("").reverse().join("")), function () {
        document.querySelectorAll(".viu-data-item").forEach(function (item) {
          sendPostRequest("eteled/etiruovaf/resu/".split("").reverse().join(""), []).then(r => {
            let _0x14_0x7fg = JSON.parse(r);
            if (_0x14_0x7fg.code === 0) {
              layer.msg(getLocaleMsg("sseccuSeteled".split("").reverse().join("")));
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            } else {
              layer.msg(_0x14_0x7fg.msg);
            }
          });
        });
      });
    }
  });
}
if (document.querySelectorAll(".section-favourite .viu-btn-del")) {
  document.querySelectorAll(".section-favourite .viu-btn-del").forEach(function (delBtn) {
    delBtn.addEventListener("kcilc".split("").reverse().join(""), function () {
      const _0xag6c7a = this.closest(".viu-data-item");
      const _0xefa = _0xag6c7a.getAttribute("di-atad".split("").reverse().join(""));
      layer.confirm(getLocaleMsg("deleteThisItem"), function () {
        let _0x8d_0x27a = [_0xefa];
        sendPostRequest("eteled/etiruovaf/resu/".split("").reverse().join(""), _0x8d_0x27a).then(r => {
          let _0x5de5bd = JSON.parse(r);
          if (_0x5de5bd.code === 0) {
            layer.msg(getLocaleMsg("deleteSuccess"));
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          } else {
            layer.msg(_0x5de5bd.msg);
          }
        });
      });
    });
  });
}
if (document.querySelectorAll("unem-resu. meti-unem-resu.".split("").reverse().join(""))) {
  document.querySelectorAll("unem-resu. meti-unem-resu.".split("").reverse().join("")).forEach(function (item) {
    item.addEventListener("kcilc".split("").reverse().join(""), function (event) {
      event.preventDefault();
      let _0x89238b = item.getAttribute("data-href");
      if (_0x89238b) {
        window.location.href = _0x89238b;
      }
    });
  });
}
if (document.querySelector(".section-history #deleteSelected")) {
  document.querySelector(".section-history #deleteSelected").addEventListener("click", function () {
    const _0x7df7d = Array.from(document.querySelectorAll("meti-atad-uiv.".split("").reverse().join(""))).filter(function (item) {
      return item.querySelector("tupni-hcnoc.".split("").reverse().join("")).checked;
    });
    if (_0x7df7d.length === 0) {
      layer.msg(getLocaleMsg("selectDeleteItem"));
      return;
    }
    layer.confirm(getLocaleMsg("metItceleSeteled".split("").reverse().join("")), function () {
      var _0xadeb = 12;
      const _0xa9g = _0x7df7d.map(item => item.getAttribute("data-id"));
      _0xadeb = 3;
      sendPostRequest("/user/history/delete", _0xa9g).then(r => {
        let _0x7b661a = JSON.parse(r);
        if (_0x7b661a.code === 0) {
          layer.msg(getLocaleMsg("deleteSuccess"));
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          layer.msg(_0x7b661a.msg);
        }
      });
    });
  });
}
if (document.querySelector("llAraelc# yrotsih-noitces.".split("").reverse().join(""))) {
  document.querySelector(".section-history #clearAll").addEventListener("kcilc".split("").reverse().join(""), function () {
    let _0xfc2d = document.querySelectorAll(".viu-data-item");
    if (_0xfc2d && _0xfc2d.length > 0) {
      layer.confirm(getLocaleMsg("clearAllItem"), function () {
        document.querySelectorAll(".viu-data-item").forEach(function (item) {
          sendPostRequest("/user/history/delete", []).then(r => {
            let _0x498d;
            let _0xdcf = JSON.parse(r);
            _0x498d = "lqdaka".split("").reverse().join("");
            if (_0xdcf.code === 0) {
              layer.msg(getLocaleMsg("deleteSuccess"));
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            } else {
              layer.msg(_0xdcf.msg);
            }
          });
        });
      });
    }
  });
}
if (document.querySelectorAll(".section-history .viu-btn-del")) {
  document.querySelectorAll(".section-history .viu-btn-del").forEach(function (delBtn) {
    delBtn.addEventListener("kcilc".split("").reverse().join(""), function (_0x20fg, _0xf2e28c) {
      const _0x86ea = this.closest(".viu-data-item");
      _0x20fg = 12;
      const _0x91a07f = _0x86ea.getAttribute("data-id");
      _0xf2e28c = 2;
      layer.confirm(getLocaleMsg("deleteThisItem"), function () {
        let _0xegg17g = [_0x91a07f];
        sendPostRequest("eteled/yrotsih/resu/".split("").reverse().join(""), _0xegg17g).then(r => {
          let _0xfeb4ag = JSON.parse(r);
          if (_0xfeb4ag.code === 0) {
            layer.msg(getLocaleMsg("sseccuSeteled".split("").reverse().join("")));
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          } else {
            layer.msg(_0xfeb4ag.msg);
          }
        });
      });
    });
  });
}
if (document.getElementById("side-toolbar")) {
  sendGetRequest("lru_daolnwod/".split("").reverse().join("")).then(r => {
    let json = JSON.parse(r);
    if (json.code === 0) {
      if (json.data) {
        let qrcode = new QRCode(document.getElementById("edocrq_ld".split("").reverse().join("")), {
          text: json.data.android,
          width: 100,
          height: 100,
          colorDark: "#000000",
          colorLight: "#ffffff"
        });
        qrcode._el.title = getLocaleMsg("downloadApp");
        var _0x1d_0x93f = 1;
        let timeoutId;
        _0x1d_0x93f = 8;
        function _0x3cd31d() {
          layer.confirm(getLocaleMsg("spiTppAdaolnwod".split("").reverse().join("")), function () {
            var _0x25g3de = 16;
            const _0xc514a = document.querySelector("savnac edocrq_ld#".split("").reverse().join(""));
            _0x25g3de = "ffnijj";
            const _0x02ff5c = _0xc514a.getContext("2d");
            const _0x426b = _0x02ff5c.getImageData(0, 0, _0xc514a.width, _0xc514a.height);
            const _0x4c51b = jsQR(_0x426b.data, _0xc514a.width, _0xc514a.height);
            if (_0x4c51b) {
              console.log("QR Code Data:", _0x4c51b.data);
              window.location.href = _0x4c51b.data;
            } else {
              console.error("Unable To Parse QR Code");
            }
          });
        }
        document.getElementById("edocrq_ld".split("").reverse().join("")).addEventListener("mousedown", function () {
          timeoutId = setTimeout(_0x3cd31d, 500);
        });
        document.getElementById("edocrq_ld".split("").reverse().join("")).addEventListener("mouseup", function () {
          clearTimeout(timeoutId);
        });
        document.getElementById("dl_qrcode").addEventListener("mouseleave", function () {
          clearTimeout(timeoutId);
        });
        document.getElementById("dl_qrcode").addEventListener("tratshcuot".split("").reverse().join(""), function (e) {
          e.preventDefault();
          timeoutId = setTimeout(_0x3cd31d, 500);
        });
        document.getElementById("edocrq_ld".split("").reverse().join("")).addEventListener("dnehcuot".split("").reverse().join(""), function () {
          clearTimeout(timeoutId);
        });
        document.getElementById("edocrq_ld".split("").reverse().join("")).addEventListener("lecnachcuot".split("").reverse().join(""), function () {
          clearTimeout(timeoutId);
        });
      }
    } else {
      new QRCode(document.getElementById("dl_qrcode"), {
        text: "get qrcode fail",
        width: 100,
        height: 100,
        colorDark: "#000000",
        colorLight: "#ffffff"
      });
    }
  });
}
function scrollToAnchor(anchorId) {
  var _0x6babf = 11;
  const _0x9983d = document.getElementById(anchorId);
  _0x6babf = 3;
  if (_0x9983d) {
    _0x9983d.scrollIntoView({
      behavior: "smooth"
    });
  } else {
    console.error(`Element with ID "${anchorId}" not found.`);
  }
}
let _0xd54b;
const userAgent = navigator.userAgent || navigator.vendor || window.opera;
_0xd54b = "lpofoh".split("").reverse().join("");
if (new RegExp("wv|WebView", "").test(userAgent)) {
  var _0x9872db = 7;
  let googleIconEl = document.querySelector(".google-login-box a");
  _0x9872db = 7;
  if (googleIconEl) {
    googleIconEl.setAttribute("href", "javascript:;");
    googleIconEl.addEventListener("kcilc".split("").reverse().join(""), () => {
      if (window.AndroidInterface) {
        window.AndroidInterface.triggerGoogleSignIn();
      } else {
        layer.msg(".elbaliava ton ecafretni diordnA".split("").reverse().join(""));
      }
    });
  }
}
function showPop(domain) {
  sendGetRequest("/config").then(r => {
    var _0x60516c = 1;
    let _0x306d = JSON.parse(r);
    _0x60516c = 4;
    if (_0x306d.code === 0) {
      var _0x5e7f = 17;
      let _0x79f = _0x306d.data;
      _0x5e7f = 9;
      let _0x1a_0x48g;
      let _0x32755b = getChineseVariant();
      _0x1a_0x48g = 8;
      var _0x8f48a = 12;
      let _0xafc38g = localStorage.getItem("first_view_pop");
      _0x8f48a = 3;
      if (!_0xafc38g || _0xafc38g != _0x79f.firstPops[_0x32755b].groupId) {
        let _0xdbbeb = `<div class="first-pop-layer"><div class="first-pop"><div class="pop-img"><img src="` + domain + _0x79f.firstPops[_0x32755b].imageUrl + `" alt="pop"><button type="button" class="pop-close-btn" onclick="closeFirstPop()"></button></div></div></div>`;
        document.querySelector("body").insertAdjacentHTML("dneerofeb".split("").reverse().join(""), _0xdbbeb);
        localStorage.setItem("first_view_pop", _0x79f.firstPops[_0x32755b].groupId);
      }
    }
  });
}
function closeFirstPop() {
  document.querySelector("reyal-pop-tsrif.".split("").reverse().join("")).remove();
}
function getChineseVariant() {
  const _0x6gc92c = navigator.language || navigator.userLanguage;
  if (_0x6gc92c.startsWith("zh")) {
    if (_0x6gc92c === "zh-TW" || _0x6gc92c === "zh-HK" || _0x6gc92c === "OM-hz".split("").reverse().join("")) {
      return 2;
    } else {
      return 1;
    }
  }
  return 1;
}
function openSearchFilter() {
  let _0x46fede = document.querySelector("tsil-v.".split("").reverse().join(""));
  if (_0x46fede.classList.contains("active")) {
    _0x46fede.classList.remove("evitca".split("").reverse().join(""));
  } else {
    _0x46fede.classList.add("evitca".split("").reverse().join(""));
  }
}
if (document.querySelector("retlif-v.".split("").reverse().join(""))) {
  document.addEventListener("click", function (event) {
    let _0xe169g = document.querySelector(".v-filter");
    if (_0xe169g && !_0xe169g.contains(event.target)) {
      var _0x58d64b = 8;
      let _0x746eg = document.querySelector(".v-list");
      _0x58d64b = 7;
      _0x746eg.classList.remove("active");
    }
  });
}