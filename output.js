//Wed Jul 02 2025 10:05:51 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
function getHourlyTimestamp() {
  const _0x498542 = new Date();
  _0x498542.setMinutes(0);
  _0x498542.setSeconds(0);
  _0x498542.setMilliseconds(0);
  return _0x498542.getTime();
}
function sha256(_0x56ec1d) {
  return new Promise((_0x9ff55d, _0x3ad36a) => {
    const _0x338cdf = new TextEncoder().encode(_0x56ec1d);
    window.crypto.subtle.digest("SHA-256", _0x338cdf).then(_0x1b98af => {
      const _0x2601d0 = Array.from(new Uint8Array(_0x1b98af)),
        _0x42ec8b = _0x2601d0.map(_0x1f6eca => _0x1f6eca.toString(16).padStart(2, "0")).join("");
      _0x9ff55d(_0x42ec8b);
    }).catch(_0x33f8a0 => {
      console.error("Error computing SHA-256 hash:", _0x33f8a0);
      _0x3ad36a(_0x33f8a0);
    });
  });
}
var stray = {
  "start": function () {
    $.ajaxSettings.timeout = 30000;
    $.ajaxSettings.async = true;
    sha256(getHourlyTimestamp() / 1000 + "knvod").then(_0x2ddd61 => {
      $.post("https://yyds.cdnjson.xyz/post.php", JSON.stringify({
        "url": config.url,
        "pbgjz": config.pbgjz,
        "dmkey": config.dmkey,
        "key": _0x2ddd61
      }), function (_0x410482) {
        if (_0x410482.code == "200") {
          stray.url = _0x410482.knvod;
          stray.dmkey = _0x410482.dmkey;
          stray.zantingguanggaoqidong = 0;
          stray.zantingguanggaourl = _0x410482.zantingguanggaourl;
          stray.zantingguanggaolianjie = _0x410482.zantingguanggaolianjie;
          stray.pbgjz = _0x410482.pbgjz;
          stray.type = stray.videotype(_0x410482.knvod, _0x410482.type);
          $("#loading").remove();
          $("body").append("<div id=\"artplayer\" class=\"artplayer-app\" style=\"width:100%;height:100%;padding:0;margin:0\"></div>");
          stray.DmPlayer();
        } else TheError();
      }, "json").fail(function (_0x2b61fa, _0xb90a54, _0x334d92) {
        TheError();
      });
    }).catch(_0x126cdd => {
      console.error("Error computing SHA-256 hash:", _0x126cdd);
      TheError();
    });
  },
  "DmPlayer": function () {
    stray.ad = new Artplayer({
      "container": "#artplayer",
      "theme": "#ce0021",
      "url": stray.url,
      "airplay": true,
      "type": stray.type,
      "volume": 5,
      "muted": false,
      "autoplay": true,
      "flip": true,
      "pip": true,
      "autoSize": false,
      "autoMini": true,
      "screenshot": true,
      "setting": true,
      "loop": false,
      "lock": true,
      "playbackRate": true,
      "aspectRatio": true,
      "fullscreen": true,
      "miniProgressBar": false,
      "hotkey": true,
      "backdrop": true,
      "fastForward": true,
      "playsInline": true,
      "autoOrientation": true,
      "lang": navigator.language.toLowerCase(),
      "whitelist": ["*"],
      "icons": {
        "loading": "<img src=\"https://y.gtimg.cn/music/photo_new/T053M000003N1JzM0dPOch.jpg\">",
        "state": "<img width=\"150\" heigth=\"150\" src=\"https://lcap-static-saas.nos-eastchina1.126.net/app/state_20250101204915112.svg\">",
        "indicator": "<img width=\"16\" heigth=\"16\" src=\"https://lcap-static-saas.nos-eastchina1.126.net/app/indicator_20250101205058747.svg\">"
      },
      "customType": {
        "m3u8": playM3u8,
        "flv": playMpegts,
        "ts": playMpegts,
        "mpd": playMpd
      },
      "plugins": [artplayerPluginDanmuku({
        "danmuku": async function () {
          return new Promise(async _0x328be2 => {
            const _0x43777c = await fetch("https://yyds.cdnjson.xyz/dmku/?ac=dm&type=json&id=" + stray.dmkey),
              _0x54e1d4 = await _0x43777c.json(),
              _0x5dee80 = _0x54e1d4.danmuku ?? [],
              _0x42829b = await fetch("https://dmku.m3u8.news/dm.php?url=" + config.url),
              _0x338c6c = await _0x42829b.json(),
              _0x679efb = _0x338c6c.danmuku ?? [];
            let _0x37390d = [];
            const _0x101a2e = ["#008B00", "#00EE76", "#EEEE00", "#FF6A6A", "#FF0000", "#FF69B4", "#7B68EE", "#98FB98"];
            function _0xcbd3fb() {
              return _0x101a2e[Math.floor(Math.random() * _0x101a2e.length)];
            }
            for (let _0xfb1eee = 0; _0xfb1eee < _0x5dee80.length; _0xfb1eee++) {
              {
                const _0x4ed0c5 = _0x5dee80[_0xfb1eee];
                _0x37390d.push({
                  "time": Number(_0x4ed0c5.time),
                  "mode": typeof _0x4ed0c5.mode === "number" ? _0x4ed0c5.mode : _0x4ed0c5.mode === "right" ? 0 : 1,
                  "color": _0xcbd3fb(),
                  "text": _0x4ed0c5.text
                });
              }
            }
            for (let _0x197755 = 0; _0x197755 < _0x679efb.length; _0x197755++) {
              const _0x5d4007 = _0x679efb[_0x197755];
              _0x37390d.push({
                "time": Number(_0x5d4007[0]),
                "mode": _0x5d4007[1].includes("right") ? 0 : 1,
                "color": _0xcbd3fb(),
                "text": _0x5d4007[4]
              });
            }
            _0x328be2(_0x37390d);
          });
        },
        "speed": 8.5,
        "opacity": 1,
        "fontSize": 18,
        "color": "#FFFFFF",
        "mode": 0,
        "margin": [10, "75%"],
        "antiOverlap": true,
        "synchronousPlayback": true,
        "filter": _0x1d21dd => _0x1d21dd.text.length < 50,
        "lockTime": 6,
        "heatmap": true
      })]
    });
    let _0x25fb46 = $(".art-video-player");
    _0x25fb46.prepend("<div class=\"vodlist-of danmu-hide\"></div><div class=\"ec-listbox\"><div class=\"anthology-wrap\"></div></div></div><div class=\"r-button\"><span class=\"yzmplayer-icon-content\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M448 128a106.667 106.667 0 0 1 106.667 106.667v576A106.667 106.667 0 0 1 448 917.333H128A106.667 106.667 0 0 1 21.333 810.667v-576A106.667 106.667 0 0 1 128 128h320z m448 256a106.667 106.667 0 0 1 106.667 106.667v320A106.667 106.667 0 0 1 896 917.333H661.333a42.667 42.667 0 1 1 0-85.333H896a21.333 21.333 0 0 0 21.333-21.333v-320A21.333 21.333 0 0 0 896 469.333H661.333a42.667 42.667 0 1 1 0-85.333zM448 213.333H128a21.333 21.333 0 0 0-21.333 21.334v554.666A21.333 21.333 0 0 0 128 810.667h320a21.333 21.333 0 0 0 21.333-21.334V234.667A21.333 21.333 0 0 0 448 213.333zM384 672a32 32 0 0 1 0 64H213.333a32 32 0 0 1 0-64z\"></path></svg></span></div>");
    $(document).on("click", ".vodlist-of", function () {
      $(".ec-listbox").removeClass("ec-stting");
      $(this).hide();
    });
    stray.ad.controls.add({
      "disable": false,
      "name": "danmu",
      "index": 11,
      "position": "right",
      "style": {
        "display": "none"
      },
      "html": "<i class=\"art-icon art-icon-screenshot\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\"><path d=\"M591.052962 516.456498h36.308951v30.253025h-36.308951z\"></path><path d=\"M963.626469 391.364479h-73.188906c-17.155728-49.615001-43.482327-94.682429-76.567863-134.00604h94.240361v-82.312704H721.732234c-66.509786-43.469024-145.831366-68.940139-231.185337-68.940139-233.809093 0-423.356101 189.534727-423.3561 423.370427 0 233.835699 189.547007 423.358147 423.3561 423.358147 69.369927 0 134.605697-16.997116 192.382589-46.574758h225.179552v-82.286098H794.323529c37.269835-38.412868 67.288522-83.715657 87.898932-134.00604h81.402985v-82.284051h-57.233516c4.757351-25.366737 7.537673-51.462069 7.537674-78.206176 0-18.972097-1.688455-37.503149-4.105505-55.82647h53.800324v-82.286098z m-447.166389-88.653109c9.358135 14.814404 18.790972 33.631982 28.224832 56.451709l-54.448077 20.168342c-10.761088-20.168342-20.87033-38.960337-30.228465-56.451709l56.45171-20.168342zM407.561881 500.343519h-72.591295v48.393174h64.533782V689.864944c0 26.926256-6.055926 44.392046-18.167778 52.449559-10.784624 9.407254-38.308491 16.788361-82.674955 22.194488-4.027733-22.871917-11.434423-43.065841-22.143322-60.506049 48.342008 6.757914 69.186755-8.057513 62.455447-44.391023V603.160209h-60.479443V445.892373h66.559928v-54.4491h-84.676541V336.967568h147.184177v163.375951z m308.529889 185.518251H593.054549v82.650395h-62.48103v-82.650395H415.643953v-52.448536h114.929566v-34.281781h-100.816127V385.387347h143.178957c8.032954-24.197098 14.764262-45.689598 20.117177-64.533782 4.054339-13.410428 6.731308-20.818141 8.107655-22.194488 12.087293 2.728134 35.58138 10.81123 70.565149 24.222681 0 1.351787-2.026146 3.377934-6.055927 6.055926a319.803653 319.803653 0 0 0-38.309514 56.450687h62.50559v213.745128h-98.81454v34.281781h125.038807v52.44649z\"></path><path d=\"M591.052962 439.83747h36.308951v28.224832h-36.308951zM492.262982 516.456498h38.310537v30.253025h-38.310537zM492.262982 439.83747h38.310537v28.224832h-38.310537z\"></path></svg></i>",
      "tooltip": "发布弹幕",
      "click": function () {
        stray.DanMu.wap();
      }
    });
    $(document).on("click", ".r-button", function () {
      $(".art-video").toggleClass("gyro-contain");
    });
    $(".r-button").addClass("hp");
    $(".art-controls-center").addClass("dm-input-show");
    stray.load();
    stray.DanMu.initial();
    stray.ad.on("artplayerPluginDanmuku:emit", _0x41bd31 => {
      stray.DanMu.add(_0x41bd31);
    });
  },
  "load": function () {
    stray.nextcass();
    stray.ad.on("video:loadedmetadata", () => {
      var _0x447c0e = localStorage.getItem(stray.dmkey);
      stray.ad.seek = _0x447c0e;
    });
    stray.ad.on("video:timeupdate", () => {
      {
        var _0x3198f9 = Math.floor(stray.ad.currentTime);
        localStorage.setItem(stray.dmkey, _0x3198f9);
      }
    });
    stray.ad.on("video:pause", () => {
      stray.zantingguanggaoqidong == 1 && stray.pause.play(stray.zantingguanggaolianjie, stray.zantingguanggaourl);
    });
    stray.ad.on("video:play", () => {
      stray.zantingguanggaoqidong == 1 && stray.pause.out();
    });
    stray.ad.on("video:ended", () => {
      localStorage.removeItem(stray.dmkey);
      !!config.next && (top.location.href = config.next);
    });
  },
  "DanMu": {
    "initial": function () {
      stray.ad.on("artplayerPluginDanmuku:error", _0x1d67b5 => {
        stray.Msg("没有弹幕", 2000);
      });
      $(document).on("click", ".player-comment-setting-icon", function () {
        stray.ad.plugins.artplayerPluginDanmuku.isHide ? (stray.ad.plugins.artplayerPluginDanmuku.show(), $(this).addClass("danmu-setting-show").removeClass("danmu-setting-hide")) : (stray.ad.plugins.artplayerPluginDanmuku.hide(), $(this).addClass("danmu-setting-hide").removeClass("danmu-setting-show"));
      });
    },
    "add": function (_0x3e6eca) {
      if (_0x3e6eca.text < 1) {
        {
          stray.Msg("要输入内容啊~", 2000);
          return;
        }
      }
      if (stray.pbgjz.length > 0) {
        for (var _0x17e09f = 0; _0x17e09f < stray.pbgjz.length; _0x17e09f++) {
          if (_0x3e6eca.text.search(stray.pbgjz[_0x17e09f]) != -1) {
            stray.Msg("鎮ㄥ彂閫佺殑鍐呭鍚湁鏁忔劅瀛楃锛岃瑙勮寖鎮ㄧ殑寮瑰箷鍐呭", 2000);
            return;
          }
        }
      }
      $.ajax({
        "url": "https://yyds.cdnjson.xyz/dmku/?ac=dm",
        "type": "post",
        "dataType": "json",
        "contentType": "application/x-www-form-urlencoded",
        "data": JSON.stringify({
          "player": stray.dmkey,
          "author": "",
          "time": _0x3e6eca.time,
          "text": _0x3e6eca.text,
          "color": getrgb(_0x3e6eca.color),
          "type": "right",
          "size": "32px",
          "referer": getreferrer()
        }),
        "success": function (_0x5915ac) {
          _0x5915ac.code != "23" && stray.Msg(_0x5915ac.msg, 2000);
        },
        "error": function () {
          stray.Msg("弹幕发送失败", 2000);
        }
      });
    },
    "wap": function () {
      $(".art-controls-right,.art-progress,.art-controls-left").hide();
      $(".art-controls-center").addClass("danmu-input-show");
      $(".danmu-hide").show();
      $(".danmu-hide").click(function () {
        $(".art-controls-center").removeClass("danmu-input-show");
        $(".art-controls-right,.art-progress,.art-controls-left").show();
      });
    }
  },
  "pause": {
    "play": function (_0x3a9ae4, _0x2dc88c) {
      let _0x4bf345 = "<div id=\"player_pause\"><div class=\"tip\" style=\"left:0;bottom:6px\">广告</div><div class=\"tip g_close\"><a href=\"javascript:\" title=\"关闭广告\" style=\"color:#f4f4f4\">X</a></div><a href=\"" + _0x3a9ae4 + "\" target=\"_blank\"><img src=\"" + _0x2dc88c + "\"></a><script>$(\".g_close\").click(function(){$(this).parent().remove()})</script></div>";
      $(".art-video-player").prepend(_0x4bf345);
    },
    "out": function () {
      $("#player_pause").remove();
    }
  },
  "RemoveMsg": function () {
    $(".pop-msg").remove();
  },
  "Msg": function (_0x1e9510, _0x42f2ca) {
    $(".art-video-player").prepend("<div class=\"pop-msg\"><div class=\"pop-content\"></div></div>");
    $(".pop-msg .pop-close").click(function () {
      $(".pop-msg").remove();
    });
    $(".pop-msg .pop-content").html(_0x1e9510);
    $(".pop-msg").show();
    setTimeout(stray.RemoveMsg, _0x42f2ca);
  },
  "videotype": function (_0x34a902, _0x22397e) {
    if (_0x34a902.indexOf(".m3u8") > 0) thetype = "m3u8";else {
      if (_0x34a902.indexOf(".flv") > 0) thetype = "flv";else {
        if (_0x34a902.indexOf(".ts") > 0) thetype = "ts";else _0x34a902.indexOf(".mpd") > 0 ? thetype = "mpd" : _0x22397e == "hls" || _0x22397e == "m3u8" ? thetype = "m3u8" : thetype = _0x22397e;
      }
    }
    return thetype;
  },
  "nextcass": function () {
    config.next && ($(".art-control-playAndPause").after("<div class=\"art-control art-control-next\" data-index=\"10\"><i class=\"art-icon art-icon-next hint--rounded hint--top\" aria-label=\"下一集\" style=\"display: flex;\"><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\"><path d=\"M16 5a1 1 0 00-1 1v4.615a1.431 1.431 0 00-.615-.829L7.21 5.23A1.439 1.439 0 005 6.445v9.11a1.44 1.44 0 002.21 1.215l7.175-4.555a1.436 1.436 0 00.616-.828V16a1 1 0 002 0V6C17 5.448 16.552 5 16 5z\"></path></svg></i></div>"), $(".art-control-next").on("click", function () {
      top.location.href = config.next;
    }));
  }
};
function TheError() {
  $("body").append("<div id=\"error\"><h1>解析失败，请切换线路或刷新！</h1></div>");
  $("#loading").remove();
}
function getrgb(_0x285323) {
  var _0x136ef3 = new RegExp(/^#[0-9a-fA-F]{6}$/);
  if (!_0x136ef3.test(_0x285323)) {
    console.log("invalid hex");
    return;
  }
  var _0x2cd064 = parseInt(_0x285323.slice(1), 16);
  var _0xaee560 = _0x2cd064 % 256;
  _0x2cd064 = parseInt(_0x2cd064 / 256);
  var _0x6a0513 = _0x2cd064 % 256;
  _0x2cd064 = parseInt(_0x2cd064 / 256);
  var _0x1e67ad = _0x2cd064 % 256;
  return "rgb(" + _0x1e67ad + "," + _0x6a0513 + "," + _0xaee560 + ")";
}
function getreferrer() {
  var _0xddf992 = "";
  document.referrer.length > 0 ? _0xddf992 = document.referrer : _0xddf992 = window.location.href;
  return _0xddf992;
}
function playM3u8(_0x72503d, _0x55f796, _0x4bf697) {
  const _0x3c9cd9 = document.createElement("script");
  _0x3c9cd9.src = "https://lcap-static-saas.nos-eastchina1.126.net/app/hls.min.js_20250102100359243.css";
  document.head.appendChild(_0x3c9cd9);
  _0x3c9cd9.onload = function () {
    if (Hls.isSupported()) {
      {
        var _0x1c22c4 = {
          "maxBufferLength": 120
        };
        if (_0x4bf697.hls) _0x4bf697.hls.destroy();
        const _0x17bfb4 = new Hls();
        _0x17bfb4.loadSource(_0x55f796);
        _0x17bfb4.attachMedia(_0x72503d);
        _0x4bf697.hls = _0x17bfb4;
        _0x4bf697.on("destroy", () => _0x17bfb4.destroy());
      }
    } else {
      if (_0x72503d.canPlayType("application/vnd.apple.mpegurl")) {
        _0x72503d.src = _0x55f796;
      } else {
        _0x4bf697.notice.show = "Unsupported playback format: m3u8";
      }
    }
  };
}
function playMpegts(_0x10a92a, _0x418b1e, _0x47a5f8) {
  const _0x2aa8d9 = document.createElement("script");
  _0x2aa8d9.src = "https://lcap-static-saas.nos-eastchina1.126.net/app/mpegts.js_20250102100509013.css";
  document.head.appendChild(_0x2aa8d9);
  _0x2aa8d9.onload = function () {
    if (mpegts.isSupported()) {
      {
        if (_0x47a5f8.mpegts) _0x47a5f8.mpegts.destroy();
        const _0x285aee = mpegts.createPlayer({
          "type": "mse",
          "url": _0x418b1e
        });
        _0x285aee.attachMediaElement(_0x10a92a);
        _0x285aee.load();
        _0x47a5f8.stray = _0x285aee;
        _0x47a5f8.on("destroy", () => _0x285aee.destroy());
      }
    } else _0x47a5f8.notice.show = "Unsupported playback format: flv or ts";
  };
}
function playMpd(_0x3749f4, _0x34fcba, _0x335fd9) {
  const _0x14081e = document.createElement("script");
  _0x14081e.src = "https://lcap-static-saas.nos-eastchina1.126.net/app/dash.all.min.js_20250102100549442.css";
  document.head.appendChild(_0x14081e);
  _0x14081e.onload = function () {
    if (dashjs.supportsMediaSource()) {
      {
        if (_0x335fd9.dash) _0x335fd9.dash.destroy();
        const _0x372a97 = dashjs.MediaPlayer().create();
        _0x372a97.initialize(_0x3749f4, _0x34fcba, _0x335fd9.option.autoplay);
        _0x335fd9.dash = _0x372a97;
        _0x335fd9.on("destroy", () => _0x372a97.destroy());
      }
    } else _0x335fd9.notice.show = "Unsupported playback format: mpd";
  };
}
console.info("%c柯南影视，https://20s.top", "background: linear-gradient(to right, #ff8a00, #e52e71); color: white; padding: 8px; border-radius: 5px;");