//Wed Jul 02 2025 09:43:59 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
function getHourlyTimestamp() {
  const _0x23f554 = new Date();
  _0x23f554.setMinutes(0);
  _0x23f554.setSeconds(0);
  _0x23f554.setMilliseconds(0);
  return _0x23f554.getTime();
}
function sha256(_0x2ffdfe) {
  return new Promise((_0x34b1dd, _0x4514fa) => {
    const _0x3040b5 = new TextEncoder().encode(_0x2ffdfe);
    window.crypto.subtle.digest("SHA-256", _0x3040b5).then(_0x2f42f9 => {
      const _0x1990ef = Array.from(new Uint8Array(_0x2f42f9)),
        _0x2d590e = _0x1990ef.map(_0x144297 => _0x144297.toString(16).padStart(2, "0")).join("");
      _0x34b1dd(_0x2d590e);
    }).catch(_0x2fef36 => {
      console.error("Error computing SHA-256 hash:", _0x2fef36);
      _0x4514fa(_0x2fef36);
    });
  });
}
var stray = {
  "start": function () {
    $.ajaxSettings.timeout = 30000;
    $.ajaxSettings.async = true;
    sha256(getHourlyTimestamp() / 1000 + "jarod").then(_0x3d0f85 => {
      $.post("https://mmsadf.520559.xyz/post.php", JSON.stringify({
        "url": config.url,
        "pbgjz": config.pbgjz,
        "dmkey": config.dmkey,
        "key": _0x3d0f85
      }), function (_0x1697aa) {
        _0x1697aa.code == "200" ? (stray.url = _0x1697aa.jarod, stray.dmkey = _0x1697aa.dmkey, stray.zantingguanggaoqidong = 0, stray.zantingguanggaourl = _0x1697aa.zantingguanggaourl, stray.zantingguanggaolianjie = _0x1697aa.zantingguanggaolianjie, stray.pbgjz = _0x1697aa.pbgjz, stray.type = stray.videotype(_0x1697aa.jarod, _0x1697aa.type), $("#loading").remove(), $("body").append("<div id=\"artplayer\" class=\"artplayer-app\" style=\"width:100%;height:100%;padding:0;margin:0\"></div>"), stray.DmPlayer()) : TheError();
      }, "json").fail(function (_0x1e21ec, _0x31e19d, _0x2d2050) {
        TheError();
      });
    }).catch(_0x3b50ce => {
      console.error("Error computing SHA-256 hash:", _0x3b50ce);
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
          return new Promise(async _0x3c2bf5 => {
            {
              const _0x36cbc2 = await fetch("https://mmsadf.520559.xyz/dmku/?ac=dm&type=json&id=" + stray.dmkey),
                _0x392757 = await _0x36cbc2.json(),
                _0x4cb087 = _0x392757.danmuku ?? [],
                _0x42145a = await fetch("https://dmku.m3u8.news/dm.php?url=" + config.url),
                _0x520222 = await _0x42145a.json(),
                _0x178fed = _0x520222.danmuku ?? [];
              let _0x2b303a = [];
              const _0x392c3e = ["#008B00", "#00EE76", "#EEEE00", "#FF6A6A", "#FF0000", "#FF69B4", "#7B68EE", "#98FB98"];
              function _0x467e20() {
                return _0x392c3e[Math.floor(Math.random() * _0x392c3e.length)];
              }
              for (let _0xd77005 = 0; _0xd77005 < _0x4cb087.length; _0xd77005++) {
                const _0x44aa9c = _0x4cb087[_0xd77005];
                _0x2b303a.push({
                  "time": Number(_0x44aa9c.time),
                  "mode": typeof _0x44aa9c.mode === "number" ? _0x44aa9c.mode : _0x44aa9c.mode === "right" ? 0 : 1,
                  "color": _0x467e20(),
                  "text": _0x44aa9c.text
                });
              }
              for (let _0x370954 = 0; _0x370954 < _0x178fed.length; _0x370954++) {
                {
                  const _0x101178 = _0x178fed[_0x370954];
                  _0x2b303a.push({
                    "time": Number(_0x101178[0]),
                    "mode": _0x101178[1].includes("right") ? 0 : 1,
                    "color": _0x467e20(),
                    "text": _0x101178[4]
                  });
                }
              }
              _0x3c2bf5(_0x2b303a);
            }
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
        "filter": _0x4a29f6 => _0x4a29f6.text.length < 50,
        "lockTime": 6,
        "heatmap": true
      })]
    });
    let _0x2b7a82 = $(".art-video-player");
    _0x2b7a82.prepend("<div class=\"vodlist-of danmu-hide\"></div><div class=\"ec-listbox\"><div class=\"anthology-wrap\"></div></div></div><div class=\"r-button\"><span class=\"yzmplayer-icon-content\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M448 128a106.667 106.667 0 0 1 106.667 106.667v576A106.667 106.667 0 0 1 448 917.333H128A106.667 106.667 0 0 1 21.333 810.667v-576A106.667 106.667 0 0 1 128 128h320z m448 256a106.667 106.667 0 0 1 106.667 106.667v320A106.667 106.667 0 0 1 896 917.333H661.333a42.667 42.667 0 1 1 0-85.333H896a21.333 21.333 0 0 0 21.333-21.333v-320A21.333 21.333 0 0 0 896 469.333H661.333a42.667 42.667 0 1 1 0-85.333zM448 213.333H128a21.333 21.333 0 0 0-21.333 21.334v554.666A21.333 21.333 0 0 0 128 810.667h320a21.333 21.333 0 0 0 21.333-21.334V234.667A21.333 21.333 0 0 0 448 213.333zM384 672a32 32 0 0 1 0 64H213.333a32 32 0 0 1 0-64z\"></path></svg></span></div>");
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
    stray.ad.on("artplayerPluginDanmuku:emit", _0x10adac => {
      stray.DanMu.add(_0x10adac);
    });
  },
  "load": function () {
    stray.nextcass();
    stray.ad.on("video:loadedmetadata", () => {
      var _0x373a60 = localStorage.getItem(stray.dmkey);
      stray.ad.seek = _0x373a60;
    });
    stray.ad.on("video:timeupdate", () => {
      var _0xac1be4 = Math.floor(stray.ad.currentTime);
      localStorage.setItem(stray.dmkey, _0xac1be4);
    });
    stray.ad.on("video:pause", () => {
      {
        if (stray.zantingguanggaoqidong == 1) {
          stray.pause.play(stray.zantingguanggaolianjie, stray.zantingguanggaourl);
        }
      }
    });
    stray.ad.on("video:play", () => {
      stray.zantingguanggaoqidong == 1 && stray.pause.out();
    });
    stray.ad.on("video:ended", () => {
      localStorage.removeItem(stray.dmkey);
      if (!!config.next) {
        top.location.href = config.next;
      }
    });
  },
  "DanMu": {
    "initial": function () {
      stray.ad.on("artplayerPluginDanmuku:error", _0x2cb5c0 => {
        stray.Msg("没有弹幕", 2000);
      });
      $(document).on("click", ".player-comment-setting-icon", function () {
        stray.ad.plugins.artplayerPluginDanmuku.isHide ? (stray.ad.plugins.artplayerPluginDanmuku.show(), $(this).addClass("danmu-setting-show").removeClass("danmu-setting-hide")) : (stray.ad.plugins.artplayerPluginDanmuku.hide(), $(this).addClass("danmu-setting-hide").removeClass("danmu-setting-show"));
      });
    },
    "add": function (_0x4b6f9e) {
      if (_0x4b6f9e.text < 1) {
        {
          stray.Msg("要输入内容啊~", 2000);
          return;
        }
      }
      if (stray.pbgjz.length > 0) for (var _0x2a668c = 0; _0x2a668c < stray.pbgjz.length; _0x2a668c++) {
        if (_0x4b6f9e.text.search(stray.pbgjz[_0x2a668c]) != -1) {
          {
            stray.Msg("您发送的内容含有敏感字符，请规范您的弹幕内容", 2000);
            return;
          }
        }
      }
      $.ajax({
        "url": "https://mmsadf.520559.xyz/dmku/?ac=dm",
        "type": "post",
        "dataType": "json",
        "contentType": "application/x-www-form-urlencoded",
        "data": JSON.stringify({
          "player": stray.dmkey,
          "author": "",
          "time": _0x4b6f9e.time,
          "text": _0x4b6f9e.text,
          "color": getrgb(_0x4b6f9e.color),
          "type": "right",
          "size": "32px",
          "referer": getreferrer()
        }),
        "success": function (_0x28e1fc) {
          _0x28e1fc.code != "23" && stray.Msg(_0x28e1fc.msg, 2000);
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
    "play": function (_0x197850, _0x3c4400) {
      let _0x33ae84 = "<div id=\"player_pause\"><div class=\"tip\" style=\"left:0;bottom:6px\">广告</div><div class=\"tip g_close\"><a href=\"javascript:\" title=\"关闭广告\" style=\"color:#f4f4f4\">X</a></div><a href=\"" + _0x197850 + "\" target=\"_blank\"><img src=\"" + _0x3c4400 + "\"></a><script>$(\".g_close\").click(function(){$(this).parent().remove()})</script></div>";
      $(".art-video-player").prepend(_0x33ae84);
    },
    "out": function () {
      $("#player_pause").remove();
    }
  },
  "RemoveMsg": function () {
    $(".pop-msg").remove();
  },
  "Msg": function (_0x58d7c9, _0x333df9) {
    $(".art-video-player").prepend("<div class=\"pop-msg\"><div class=\"pop-content\"></div></div>");
    $(".pop-msg .pop-close").click(function () {
      $(".pop-msg").remove();
    });
    $(".pop-msg .pop-content").html(_0x58d7c9);
    $(".pop-msg").show();
    setTimeout(stray.RemoveMsg, _0x333df9);
  },
  "videotype": function (_0xa085ec, _0x13b743) {
    if (_0xa085ec.indexOf(".m3u8") > 0) {
      thetype = "m3u8";
    } else {
      if (_0xa085ec.indexOf(".flv") > 0) {
        thetype = "flv";
      } else {
        if (_0xa085ec.indexOf(".ts") > 0) thetype = "ts";else {
          if (_0xa085ec.indexOf(".mpd") > 0) thetype = "mpd";else {
            if (_0x13b743 == "hls" || _0x13b743 == "m3u8") thetype = "m3u8";else {
              thetype = _0x13b743;
            }
          }
        }
      }
    }
    return thetype;
  },
  "nextcass": function () {
    if (config.next) {
      $(".art-control-playAndPause").after("<div class=\"art-control art-control-next\" data-index=\"10\"><i class=\"art-icon art-icon-next hint--rounded hint--top\" aria-label=\"下一集\" style=\"display: flex;\"><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\"><path d=\"M16 5a1 1 0 00-1 1v4.615a1.431 1.431 0 00-.615-.829L7.21 5.23A1.439 1.439 0 005 6.445v9.11a1.44 1.44 0 002.21 1.215l7.175-4.555a1.436 1.436 0 00.616-.828V16a1 1 0 002 0V6C17 5.448 16.552 5 16 5z\"></path></svg></i></div>");
      $(".art-control-next").on("click", function () {
        top.location.href = config.next;
      });
    }
  }
};
function TheError() {
  $("body").append("<div id=\"error\"><h1>解析失败，请切换线路或刷新！</h1></div>");
  $("#loading").remove();
}
function getrgb(_0x2e8e10) {
  var _0x2170f1 = new RegExp(/^#[0-9a-fA-F]{6}$/);
  if (!_0x2170f1.test(_0x2e8e10)) {
    {
      console.log("invalid hex");
      return;
    }
  }
  var _0x14a38d = parseInt(_0x2e8e10.slice(1), 16),
    _0x163e01 = _0x14a38d % 256;
  _0x14a38d = parseInt(_0x14a38d / 256);
  var _0x14685e = _0x14a38d % 256;
  _0x14a38d = parseInt(_0x14a38d / 256);
  var _0x4a5273 = _0x14a38d % 256;
  return "rgb(" + _0x4a5273 + "," + _0x14685e + "," + _0x163e01 + ")";
}
function getreferrer() {
  var _0x711b94 = "";
  if (document.referrer.length > 0) _0x711b94 = document.referrer;else {
    _0x711b94 = window.location.href;
  }
  return _0x711b94;
}
function playM3u8(_0x54b7ad, _0x163405, _0x36f7c6) {
  const _0x5631dd = document.createElement("script");
  _0x5631dd.src = "https://lcap-static-saas.nos-eastchina1.126.net/app/hls.min.js_20250102100359243.css";
  document.head.appendChild(_0x5631dd);
  _0x5631dd.onload = function () {
    {
      if (Hls.isSupported()) {
        {
          var _0x1022c2 = {
            "maxBufferLength": 120
          };
          if (_0x36f7c6.hls) _0x36f7c6.hls.destroy();
          const _0x2782da = new Hls();
          _0x2782da.loadSource(_0x163405);
          _0x2782da.attachMedia(_0x54b7ad);
          _0x36f7c6.hls = _0x2782da;
          _0x36f7c6.on("destroy", () => _0x2782da.destroy());
        }
      } else _0x54b7ad.canPlayType("application/vnd.apple.mpegurl") ? _0x54b7ad.src = _0x163405 : _0x36f7c6.notice.show = "Unsupported playback format: m3u8";
    }
  };
}
function playMpegts(_0x1012fa, _0x22e807, _0x3a615a) {
  const _0x36b364 = document.createElement("script");
  _0x36b364.src = "https://lcap-static-saas.nos-eastchina1.126.net/app/mpegts.js_20250102100509013.css";
  document.head.appendChild(_0x36b364);
  _0x36b364.onload = function () {
    {
      if (mpegts.isSupported()) {
        if (_0x3a615a.mpegts) _0x3a615a.mpegts.destroy();
        const _0x363e63 = mpegts.createPlayer({
          "type": "mse",
          "url": _0x22e807
        });
        _0x363e63.attachMediaElement(_0x1012fa);
        _0x363e63.load();
        _0x3a615a.stray = _0x363e63;
        _0x3a615a.on("destroy", () => _0x363e63.destroy());
      } else {
        _0x3a615a.notice.show = "Unsupported playback format: flv or ts";
      }
    }
  };
}
function playMpd(_0x1cea8a, _0x526502, _0x14de8c) {
  const _0x234b23 = document.createElement("script");
  _0x234b23.src = "https://lcap-static-saas.nos-eastchina1.126.net/app/dash.all.min.js_20250102100549442.css";
  document.head.appendChild(_0x234b23);
  _0x234b23.onload = function () {
    if (dashjs.supportsMediaSource()) {
      {
        if (_0x14de8c.dash) _0x14de8c.dash.destroy();
        const _0x2a1c6f = dashjs.MediaPlayer().create();
        _0x2a1c6f.initialize(_0x1cea8a, _0x526502, _0x14de8c.option.autoplay);
        _0x14de8c.dash = _0x2a1c6f;
        _0x14de8c.on("destroy", () => _0x2a1c6f.destroy());
      }
    } else {
      _0x14de8c.notice.show = "Unsupported playback format: mpd";
    }
  };
}
console.info("%c柯南影视，https://20s.top", "background: linear-gradient(to right, #ff8a00, #e52e71); color: white; padding: 8px; border-radius: 5px;");