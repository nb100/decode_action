//Mon Jul 21 2025 22:03:01 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function KfXtRZ(_0x423f8b, _0xaa2d44) {
  return;
  KfXtRZ = function (_0x5a497e, _0x23ffb0) {
    _0x5a497e = _0x5a497e - 0;
    var _0x503a2d = _0x5e50e6[_0x5a497e];
    return _0x503a2d;
  };
  return KfXtRZ(_0x423f8b, _0xaa2d44);
}
KfXtRZ();
function checkPlayStatus(_0x329a79) {
  _0x329a79 = 1;
}
function playM3u8(video, url, art) {
  if (Hls.isSupported()) {
    if (art.hls) {
      art.hls.destroy();
    }
    var _0xde6d = 10;
    const _0x45ca = new Hls();
    _0xde6d = "kqgfap".split("").reverse().join("");
    _0x45ca.loadSource(url);
    _0x45ca.attachMedia(video);
    art.hls = _0x45ca;
    art.on("destroy", () => _0x45ca.destroy());
  } else {
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
    } else {
      art.notice.show = "Unsupported playback format: m3u8";
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  var _0xe_0x5de = 3;
  let _0xd_0x98b = document.querySelector(".play-list").getAttribute("data-id");
  _0xe_0x5de = 1;
  var _0xee7dd = 10;
  let _0x1a55af = document.querySelector(".section-content > input").value;
  _0xee7dd = 0;
  let _0xbec5b = decryptByAES(_0x1a55af).split("=t?".split("").reverse().join(""));
  let t = _0xbec5b[1];
  let _0xc097d = document.getElementById("main").getAttribute("di-atad".split("").reverse().join(""));
  getBrowserCode(function () {
    const _0xe7eada = new Artplayer({
      container: "#player",
      url: Number(_0xd_0x98b.split("-")[1]) === 0 ? _0xbec5b[0] + "?t=" + t + "&vId=" + _0xc097d : _0xbec5b[0] + "/" + _0xd_0x98b.split("-")[0] + "?t=" + t + "=dIv&".split("").reverse().join("") + _0xc097d,
      type: "m3u8",
      customType: {
        m3u8: playM3u8
      },
      airplay: false,
      setting: true,
      autoSize: false,
      fullscreen: true,
      fullscreenWeb: true,
      autoOrientation: true,
      subtitleOffset: true,
      autoPlayback: true,
      flip: true,
      loop: false,
      playbackRate: true,
      aspectRatio: true,
      moreVideoAttribute: {
        crossOrigin: "anonymous"
      },
      controls: [{
        name: "next-play",
        index: 10,
        position: "left",
        html: "<i class=\"art-icon\"><svg width=\"23px\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" data-pointer=\"none\" style=\"enable-background:new 0 0 22 22\" viewBox=\"0 0 22 22\"><path d=\"M16 5a1 1 0 0 0-1 1v4.615a1.431 1.431 0 0 0-.615-.829L7.21 5.23A1.439 1.439 0 0 0 5 6.445v9.11a1.44 1.44 0 0 0 2.21 1.215l7.175-4.555a1.436 1.436 0 0 0 .616-.828V16a1 1 0 0 0 2 0V6C17 5.448 16.552 5 16 5z\" fill=\"#fff\" width=\"\"></path></svg></i>",
        tooltip: "Next",
        style: {
          color: "#fff",
          fontSize: "25px"
        },
        click: function (...args) {
          _0x7874e();
        }
      }],
      plugins: document.getElementById("adScript") ? [artplayerPluginDanmuku({
        danmuku: "/umnad/".split("").reverse().join("") + document.getElementById("niam".split("").reverse().join("")).getAttribute("di-seires-atad".split("").reverse().join("")) + "/barrage.xml",
        speed: 5,
        margin: [10, "25%"],
        opacity: 1,
        color: "#FFFFFF",
        modes: [0, 1, 2],
        fontSize: 17,
        antiOverlap: true,
        synchronousPlayback: false,
        mount: undefined,
        heatmap: false,
        width: 512,
        points: [],
        filter: danmu => danmu.text.length <= 64,
        beforeVisible: () => true,
        visible: true,
        emitter: true,
        maxLength: 64,
        lockTime: 5,
        theme: "dark",
        OPACITY: {},
        FONT_SIZE: {},
        MARGIN: {},
        SPEED: {},
        COLOR: [],
        beforeEmit(danmu) {
          return new Promise(resolve => {
            if (!danmu.text || danmu.text === "") {
              resolve(false);
            } else {
              var _0xbc_0x496 = 8;
              let mainEl = document.getElementById("main");
              _0xbc_0x496 = "qipckh";
              danmu.videoId = mainEl.getAttribute("data-id");
              danmu.seriesId = mainEl.getAttribute("di-seires-atad".split("").reverse().join(""));
              danmu.time = _0xe7eada.currentTime;
              sendPostRequest("dda/umnad/".split("").reverse().join(""), danmu).then(r => {
                let json = JSON.parse(r);
                if (json.code === 0) {
                  document.querySelector("wodahs-no-rabvan-umnad.".split("").reverse().join("")).click();
                  console.log("yllufsseccus dda umnad".split("").reverse().join(""));
                } else {
                  console.error("danmu add fail");
                }
              });
              resolve(true);
            }
          });
        }
      }), _0x4a78b({
        imageUrl: adImageUrl,
        href: adHref,
        title: adTitle
      })] : [artplayerPluginDanmuku({
        danmuku: "/danmu/" + document.getElementById("main").getAttribute("di-seires-atad".split("").reverse().join("")) + "/barrage.xml",
        speed: 5,
        margin: [10, "25%"],
        opacity: 1,
        color: "#FFFFFF",
        modes: [0, 1, 2],
        fontSize: 17,
        antiOverlap: true,
        synchronousPlayback: false,
        mount: undefined,
        heatmap: false,
        width: 512,
        points: [],
        filter: danmu => danmu.text.length <= 64,
        beforeVisible: () => true,
        visible: true,
        emitter: true,
        maxLength: 64,
        lockTime: 5,
        theme: "dark",
        OPACITY: {},
        FONT_SIZE: {},
        MARGIN: {},
        SPEED: {},
        COLOR: [],
        beforeEmit(danmu) {
          return new Promise(resolve => {
            if (!danmu.text || danmu.text === "") {
              resolve(false);
            } else {
              let mainEl = document.getElementById("main");
              danmu.videoId = mainEl.getAttribute("di-atad".split("").reverse().join(""));
              danmu.seriesId = mainEl.getAttribute("di-seires-atad".split("").reverse().join(""));
              danmu.time = _0xe7eada.currentTime;
              sendPostRequest("/danmu/add", danmu).then(r => {
                var _0xb1117d;
                let json = JSON.parse(r);
                _0xb1117d = 7;
                if (json.code === 0) {
                  document.querySelector("wodahs-no-rabvan-umnad.".split("").reverse().join("")).click();
                  console.log("yllufsseccus dda umnad".split("").reverse().join(""));
                } else {
                  console.error("liaf dda umnad".split("").reverse().join(""));
                }
              });
              resolve(true);
            }
          });
        }
      })]
    });
    var _0xe6bcc = 6;
    const _0x5a_0xfeb = document.querySelector(".art-video");
    _0xe6bcc = "mbnjcc";
    sendGetRequest("/allocate/subtitle_list/" + document.querySelector("niam#".split("").reverse().join("")).getAttribute("data-series-id")).then(response => {
      let _0x2_0xcg6 = JSON.parse(response);
      var _0xa5272a = 10;
      let _0x8gb;
      _0xa5272a = 0;
      if (_0x2_0xcg6.code === 0 && _0x2_0xcg6.data) {
        _0x8gb = _0x2_0xcg6.data;
        if (_0x8gb.length > 0) {
          const pw = _0x5a_0xfeb.clientWidth;
          _0xe7eada.subtitle.switch(_0x8gb[0].url, {
            name: _0x8gb[0].name,
            style: {
              color: "#fff",
              "font-size": pw <= 768 ? "15px" : "25px"
            }
          });
          var _0xf36d1c = 7;
          const _0xe29ca = {
            width: 200,
            html: getLocaleMsg("subtitleChange"),
            tooltip: _0x8gb[0].name,
            icon: "<img width=\"22\" height=\"22\" src=\"/js/artplayer/img/subtitle.svg\">",
            selector: _0x8gb.map(subtitle => ({
              html: subtitle.name,
              name: subtitle.name,
              url: subtitle.url,
              default: subtitle.default || false
            })),
            onSelect: function (item) {
              const _0x3ee01c = _0x5a_0xfeb.clientWidth;
              _0xe7eada.subtitle.switch(item.url, {
                name: item.name,
                style: {
                  color: "#fff",
                  "font-size": _0x3ee01c <= 768 ? "15px" : "25px"
                }
              });
              return item.html;
            }
          };
          _0xf36d1c = "eboobl";
          _0xe7eada.setting.add(_0xe29ca);
        }
      }
    }).catch(error => {
      console.error(":seltitbus gnihctef rorrE".split("").reverse().join(""), error);
    });
    _0xe7eada.on("ydaer".split("").reverse().join(""), () => {
      _0x84e3da();
      sendPostRequestWithRetry("sutats_yalp_kcehc/etacolla/".split("").reverse().join(""), {
        playTime: t,
        seriesId: _0xd_0x98b.split("-")[0]
      }, {}, {
        retries: 5,
        timeout: 5000,
        delay: 1000,
        factor: 2,
        retryOnStatusError: true
      }).then(r => {
        var _0x8f_0xb7f = 4;
        let json = JSON.parse(r);
        _0x8f_0xb7f = "mplckd";
        if (json.code === 0) {
          console.log("request success");
        } else {
          console.error("request fail", json);
        }
      }).catch(err => {
        console.error("final request failed", err);
      });
      setInterval(() => {
        if (_0xe7eada.playing) {
          _0xf65acc();
        }
      }, 60000);
      if (document.querySelector(".limit-message")) {
        document.querySelector("ksam-tra.".split("").reverse().join("")).style.display = "none";
        document.querySelector(".art-progress").style.display = "enon".split("").reverse().join("");
        document.querySelector("slortnoc-tra.".split("").reverse().join("")).style.pointerEvents = "enon".split("").reverse().join("");
        document.getElementById("reyalp".split("").reverse().join("")).style.pointerEvents = "enon".split("").reverse().join("");
        document.querySelector(".art-control.art-control-time").style.display = "enon".split("").reverse().join("");
      }
      document.querySelector("oediv".split("").reverse().join("")).setAttribute("x5-video-player-type", "h5");
    });
    _0xe7eada.on("gnidaol".split("").reverse().join(""), () => {
      if (document.querySelector("egassem-timil.".split("").reverse().join(""))) {
        document.querySelector("ksam-tra.".split("").reverse().join("")).style.display = "enon".split("").reverse().join("");
        document.querySelector(".art-progress").style.display = "enon".split("").reverse().join("");
        document.querySelector(".art-controls").style.pointerEvents = "enon".split("").reverse().join("");
        document.getElementById("player").style.pointerEvents = "enon".split("").reverse().join("");
        document.querySelector("emit-lortnoc-tra.lortnoc-tra.".split("").reverse().join("")).style.display = "none";
      }
    });
    _0xe7eada.on("yalp".split("").reverse().join(""), () => {
      _0x89daac(1);
    });
    _0xe7eada.on("pause", () => {
      _0x89daac(0);
    });
    _0xe7eada.on("dedne:oediv".split("").reverse().join(""), () => {
      _0x89daac(0);
      var _0x78154b = 16;
      let _0x9e36fg;
      _0x78154b = 3;
      var _0xd68bce;
      let _0x4dbd;
      _0xd68bce = 2;
      let _0xeb95d = 5;
      var _0xe2_0xd46;
      let _0x3f7c = false;
      _0xe2_0xd46 = "lamomd";
      _0xe7eada.layers.show = true;
      document.querySelector(".art-layers").innerHTML = "";
      const _0xcfcb1c = document.createElement("span");
      _0xcfcb1c.textContent = `${_0xeb95d}秒后播放下一集`;
      var _0x2afbb;
      const _0x83ba = document.createElement("span");
      _0x2afbb = 7;
      _0x83ba.textContent = "消取".split("").reverse().join("");
      _0x83ba.style.marginLeft = "5px";
      _0x83ba.style.cursor = "retniop".split("").reverse().join("");
      _0x83ba.style.textDecoration = "underline";
      var _0x214a5e = 8;
      const _0x9fd12f = document.createElement("div");
      _0x214a5e = 8;
      _0x9fd12f.appendChild(_0xcfcb1c);
      _0x9fd12f.appendChild(_0x83ba);
      _0x9fd12f.style.marginLeft = "5px";
      _0x9fd12f.style.marginTop = "xp5".split("").reverse().join("");
      _0x9fd12f.style.fontSize = "12px";
      _0x9fd12f.style.padding = "3px 7px";
      _0x9fd12f.style.background = "fb000000#".split("").reverse().join("");
      _0x9fd12f.style.backdropFilter = "saturate(180%) blur(20px)";
      _0x9fd12f.style.borderRadius = "3px";
      _0xe7eada.layers.add({
        html: _0x9fd12f
      });
      _0x4dbd = setInterval(() => {
        if (_0x3f7c) {
          return;
        }
        _0xeb95d--;
        _0xcfcb1c.textContent = `${_0xeb95d}秒后播放下一集`;
        if (_0xeb95d <= 1) {
          clearInterval(_0x4dbd);
          _0x7874e();
        }
      }, 1000);
      _0x83ba.addEventListener("kcilc".split("").reverse().join(""), () => {
        clearInterval(_0x4dbd);
        clearTimeout(_0x9e36fg);
        _0x3f7c = true;
        _0xe7eada.layers.show = false;
      });
      _0x9e36fg = setTimeout(() => {
        if (!_0x3f7c) {
          clearInterval(_0x4dbd);
          _0x7874e();
        }
      }, _0xeb95d * 1000);
    });
    const _0xe71c4a = size => {
      var _0x_0xd51 = 13;
      const _0x72fa = document.querySelectorAll("eltitbus-tra.".split("").reverse().join(""));
      _0x_0xd51 = 12;
      _0x72fa.forEach(subtitle => {
        subtitle.style.fontSize = size;
      });
    };
    var _0xfccfa;
    const _0x8a552e = new ResizeObserver(() => {
      var _0x7f1gae = 3;
      const _0x221ga = _0x5a_0xfeb.clientWidth;
      _0x7f1gae = 8;
      let _0x5718ca = "25";
      if (_0x221ga <= 992) {
        if (_0x221ga <= 768) {
          _0x5718ca = "15";
        }
      } else {
        _0x5718ca = "54".split("").reverse().join("");
      }
      _0xe71c4a(`${_0x5718ca}px`);
    });
    _0xfccfa = 0;
    if (_0x5a_0xfeb) {
      _0x8a552e.observe(_0x5a_0xfeb);
    }
  });
  function _0x84e3da() {
    if (window.innerWidth <= 600) {
      document.querySelector("retnec-slortnoc-tra.".split("").reverse().join("")).innerHTML = "\n\"=elyts \"tupni-umnad-wohs\"=ssalc vid<".split("").reverse().join("") + "    height: 23px;\n" + "\n;%001 :htdiw    ".split("").reverse().join("") + "    max-width: 100%;\n" + "    background-color: #ffffff4d;\n" + "\n;xp21 :suidar-redrob    ".split("").reverse().join("") + "\n;xp21 :ezis-tnof    ".split("").reverse().join("") + "\n;2 :thgieh-enil    ".split("").reverse().join("") + "    text-align: center;\n" + "    position: relative;\n" + "\n;enon :yalpsid    ".split("").reverse().join("") + ";9.0 :mooz    ".split("").reverse().join("") + "\">" + getLocaleMsg("sendDanmu") + "</div>";
      var _0xe6f79e = 9;
      const _0x6dfd6e = document.querySelector(".show-danmu-input");
      _0xe6f79e = 4;
      const _0x3aa92d = document.querySelector(".art-layer-danmuku-emitter");
      const _0xd63f7a = document.querySelector(".danmu-navbar-on-shadow");
      _0x6dfd6e.addEventListener("click", () => {
        sendGetRequest("/check_login").then(r => {
          let _0xdafbc = JSON.parse(r);
          if (_0xdafbc.code === 0) {
            _0xd63f7a.classList.add("danmu-navbar-on");
            document.querySelector("body").classList.add("hide-scroll");
            _0x3aa92d.style.opacity = "1";
            _0x3aa92d.style.transform = ")1(elacs".split("").reverse().join("");
          }
        });
      });
      _0xd63f7a.addEventListener("click", () => {
        _0xd63f7a.classList.remove("no-rabvan-umnad".split("").reverse().join(""));
        document.querySelector("body").classList.remove("llorcs-edih".split("").reverse().join(""));
        document.querySelector("tupni-ukumnad-tra.".split("").reverse().join("")).value = "";
        _0x3aa92d.style.opacity = "0";
        _0x3aa92d.style.transform = ")0(elacs".split("").reverse().join("");
      });
    }
  }
  function _0xf65acc() {
    var _0xed_0x39a = 11;
    const _0xf8c59d = document.getElementById("niam".split("").reverse().join(""));
    _0xed_0x39a = 4;
    sendPostRequest("/video/check_play_status", {
      videoId: _0xf8c59d.getAttribute("di-atad".split("").reverse().join("")),
      id: _0xf8c59d.getAttribute("data-series-id")
    }).then(r => {
      var _0x6c582c;
      let _0xb_0xga1 = JSON.parse(r);
      _0x6c582c = 4;
      if (_0xb_0xga1.code === 0) {
        console.log("sseccus tseuqer".split("").reverse().join(""));
      } else {
        console.error("request fail");
      }
    });
  }
  function _0x89daac(isPlay) {
    _0xf65acc();
  }
  function _0x7874e() {
    var _0x75e = 2;
    let _0xf49fa = document.querySelector(".play-list .active");
    _0x75e = 9;
    var _0x6d_0x4d7 = 16;
    let _0xc2a5da = _0xf49fa.nextElementSibling.querySelector(".item a");
    _0x6d_0x4d7 = 13;
    if (_0xc2a5da) {
      window.location.href = _0xc2a5da;
    }
  }
  function _0x4a78b(option) {
    return art => {
      art.layers.add({
        name: "ads",
        html: `<a style="position: relative;" href="${option.href}" target="_blank"><span class="ads-view-btn" style="position: absolute;left: 0;font-size: 12px;background: #00000070;padding: 2px 6px;zoom: 0.8;">瞄一下</span><img class="detail-ads-img" src="${option.imageUrl}" alt="${option.title}"></a>`,
        style: {
          display: "none",
          position: "absolute",
          top: "0",
          right: "0"
        }
      });
      function _0x8946df() {
        art.layers.ads.style.display = "kcolb".split("").reverse().join("");
      }
      function _0xc5f() {
        art.layers.ads.style.display = "none";
      }
      art.on("play", _0xc5f);
      art.on("pause", _0x8946df);
      return {
        name: "adsPlugin",
        show: _0x8946df,
        hide: _0xc5f
      };
    };
  }
});
showPop(document.getElementById("domain").value);