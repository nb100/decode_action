//Sat Mar 07 2026 13:54:53 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const {
  createServer
} = require("http");
const http = require("http");
const https = require("https");
const path = require("path");
const fs = require("fs");
const url = require("url");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
let siteBaseUrls = {};
let currentServer = null;
let indexModule = null;
let isReloading = false;
const OriginalURL = globalThis.URL;
globalThis.URL = class URL extends OriginalURL {
  constructor(_0x91854e, _0x16537c) {
    if ((_0x16537c === undefined || _0x16537c === null || _0x16537c === "") && typeof _0x91854e === "string" && (_0x91854e.startsWith("/") || !_0x91854e.includes("://"))) {
      {
        if (Object.keys(siteBaseUrls).length === 0) {
          const _0x128ff3 = globalThis.__drpyConfig || globalThis.config || {};
          const _0x4e7144 = ["wogg", "muou", "leijing", "gzys", "czzy", "xfys", "age", "xpg", "dm84", "aowu"];
          for (const _0x46331a of _0x4e7144) {
            if (_0x128ff3[_0x46331a]) {
              {
                if (_0x128ff3[_0x46331a].urls && _0x128ff3[_0x46331a].urls.length > 0) {
                  siteBaseUrls[_0x46331a] = _0x128ff3[_0x46331a].urls[0];
                } else {
                  _0x128ff3[_0x46331a].url && (siteBaseUrls[_0x46331a] = _0x128ff3[_0x46331a].url);
                }
              }
            }
          }
        }
        if (_0x91854e.includes("vodshow") || _0x91854e.includes("vodsearch") || _0x91854e.includes("voddetail")) {
          if (siteBaseUrls.wogg) {
            _0x16537c = siteBaseUrls.wogg;
          }
        } else {
          if (_0x91854e.includes("vod/show") || _0x91854e.includes("vod/search") || _0x91854e.includes("vod/detail")) {
            {
              if (siteBaseUrls.muou) {
                _0x16537c = siteBaseUrls.muou;
              }
            }
          }
        }
      }
    }
    super(_0x91854e, _0x16537c);
  }
};
const originalHttpRequest = http.request;
const originalHttpGet = http.get;
const originalHttpsRequest = https.request;
const originalHttpsGet = https.get;
const DOUBAN_USER_AGENT = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat";
function isDoubanApiRequest(_0x59ba4c) {
  const _0x11204a = _0x59ba4c.host || _0x59ba4c.hostname || "";
  return _0x11204a.includes("douban.com");
}
function patchDoubanHeaders(_0x1c8234) {
  isDoubanApiRequest(_0x1c8234) && (_0x1c8234.headers = _0x1c8234.headers || {}, _0x1c8234.headers["User-Agent"] = DOUBAN_USER_AGENT, _0x1c8234.headers.Referer = "https://servicewechat.com/wx2f9b06c1de1ccfca/84/page-frame.html");
}
https.request = function (_0x5bb5d5, _0x3cca6d) {
  typeof _0x5bb5d5 === "string" && (_0x5bb5d5 = new URL(_0x5bb5d5));
  patchDoubanHeaders(_0x5bb5d5);
  return originalHttpsRequest.apply(this, arguments);
};
https.get = function (_0xc8a685, _0x517941) {
  if (typeof _0xc8a685 === "string") {
    {
      _0xc8a685 = new URL(_0xc8a685);
    }
  }
  patchDoubanHeaders(_0xc8a685);
  return originalHttpsGet.apply(this, arguments);
};
let serverBaseUrl = null;
let serverAuth = null;
try {
  const serverConfigPath = path.resolve(__dirname, "./server_config.json");
  if (fs.existsSync(serverConfigPath)) {
    const serverConfig = JSON.parse(fs.readFileSync(serverConfigPath, "utf8"));
    serverConfig.url && (serverBaseUrl = serverConfig.url, serverAuth = serverConfig.authorization || null);
  }
} catch (a0_0x5cdc3e) {}
function shouldRedirectToServer(_0x3a4180) {
  const _0x3aca80 = _0x3a4180.host || _0x3a4180.hostname || "";
  return serverBaseUrl && (_0x3aca80 === "localhost" || _0x3aca80 === "127.0.0.1" || _0x3aca80 === "" || !_0x3aca80);
}
function redirectToServer(_0x4bb109) {
  if (!serverBaseUrl) {
    return _0x4bb109;
  }
  try {
    const _0x52a1f2 = new URL(serverBaseUrl);
    _0x4bb109.hostname = _0x52a1f2.hostname;
    _0x4bb109.host = _0x52a1f2.host;
    _0x4bb109.port = _0x52a1f2.port || (_0x52a1f2.protocol === "https:" ? 443 : 80);
    _0x4bb109.headers = _0x4bb109.headers || {};
    _0x4bb109.headers.Host = _0x52a1f2.host;
    if (serverAuth) {
      _0x4bb109.headers.Authorization = serverAuth;
    }
  } catch (_0x1d71a8) {}
  return _0x4bb109;
}
http.request = function (_0x46c344, _0x1a8b33) {
  if (shouldRedirectToServer(_0x46c344)) {
    _0x46c344 = redirectToServer(_0x46c344);
    if (serverBaseUrl && serverBaseUrl.startsWith("https://")) {
      {
        return originalHttpsRequest.apply(https, arguments);
      }
    }
  }
  return originalHttpRequest.apply(this, arguments);
};
http.get = function (_0x582888, _0x5431ad) {
  if (typeof _0x582888 === "string") {
    _0x582888 = new URL(_0x582888);
  }
  if (shouldRedirectToServer(_0x582888)) {
    _0x582888 = redirectToServer(_0x582888);
    if (serverBaseUrl && serverBaseUrl.startsWith("https://")) {
      return originalHttpsGet.apply(https, arguments);
    }
  }
  return originalHttpGet.apply(this, arguments);
};
process.on("uncaughtException", _0xd5823f => {
  console.error("Uncaught exception:", _0xd5823f.message);
  setTimeout(() => process.exit(1), 1000);
});
process.on("unhandledRejection", _0x57dd61 => {
  console.error("Unhandled promise rejection:", _0x57dd61);
});
let currentPort = 0;
globalThis.catServerFactory = _0x49a2dd => {
  const _0x5ceff1 = (_0x38d7d5, _0x10222f) => {
    const _0x2a04b1 = url.parse(_0x38d7d5.url, true);
    if (_0x2a04b1.pathname === "/api/reload" && _0x38d7d5.method === "POST") {
      {
        handleReload(_0x38d7d5, _0x10222f);
        return;
      }
    }
    if (_0x2a04b1.pathname === "/api/reload/status" && _0x38d7d5.method === "GET") {
      _0x10222f.writeHead(200, {
        "Content-Type": "application/json"
      });
      _0x10222f.end(JSON.stringify({
        success: true,
        isReloading: isReloading,
        message: isReloading ? "Reloading..." : "Running",
        port: currentPort
      }));
      return;
    }
    _0x49a2dd(_0x38d7d5, _0x10222f);
  };
  const _0x49aaca = createServer(_0x5ceff1);
  _0x49aaca.on("listening", () => {
    {
      currentPort = _0x49aaca.address().port;
      console.log("Server running on port:", currentPort);
      try {
        fs.writeFileSync(path.join(__dirname, "server_port.txt"), currentPort.toString(), "utf8");
      } catch (_0x4c521a) {}
    }
  });
  _0x49aaca.on("close", () => {
    {
      if (!isReloading) {
        try {
          const _0x46b60a = path.join(__dirname, "server_port.txt");
          if (fs.existsSync(_0x46b60a)) {
            fs.unlinkSync(_0x46b60a);
          }
        } catch (_0xbb8c8b) {}
      }
    }
  });
  currentServer = _0x49aaca;
  return _0x49aaca;
};
globalThis.catDartServerPort = () => 0;
async function handleReload(_0x465e71, _0x34c856) {
  if (isReloading) {
    _0x34c856.writeHead(409, {
      "Content-Type": "application/json"
    });
    _0x34c856.end(JSON.stringify({
      success: false,
      error: "Already reloading"
    }));
    return;
  }
  isReloading = true;
  console.log("[HotReload] Received reload request, starting...");
  _0x34c856.writeHead(200, {
    "Content-Type": "application/json"
  });
  _0x34c856.end(JSON.stringify({
    success: true,
    message: "Hot reload triggered, running in background...",
    async: true
  }));
  setTimeout(async () => {
    try {
      {
        await performReload();
        console.log("[HotReload] Reload complete!");
      }
    } catch (_0x530888) {
      console.error("[HotReload] Reload failed:", _0x530888.message);
    } finally {
      {
        isReloading = false;
      }
    }
  }, 100);
}
async function performReload() {
  console.log("[HotReload] Reloading config...");
  const _0x22e0ed = path.resolve(__dirname, "./index.config.js");
  const _0x4a05ac = _0x22e0ed.replace(/\.js$/, ".cjs");
  Object.keys(require.cache).forEach(_0x251038 => {
    {
      (_0x251038.includes("index.config") || _0x251038.includes("index.js")) && delete require.cache[_0x251038];
    }
  });
  let _0x479bb6 = {};
  try {
    {
      if (fs.existsSync(_0x22e0ed)) {
        {
          const _0x46ee86 = requireAsCJS("./index.config.js");
          _0x479bb6 = _0x46ee86.default || _0x46ee86;
        }
      }
    }
  } catch (_0x586ff6) {
    console.warn("[HotReload] Failed to load config:", _0x586ff6.message);
    _0x479bb6 = {};
  }
  try {
    const _0x1fd892 = path.resolve(__dirname, "./server_config.json");
    if (fs.existsSync(_0x1fd892)) {
      const _0x1673fb = JSON.parse(fs.readFileSync(_0x1fd892, "utf8"));
      if (_0x1673fb.url) {
        _0x479bb6.server = _0x1673fb;
      }
    }
  } catch (_0xd3302f) {}
  if (!_0x479bb6 || typeof _0x479bb6 !== "object") {
    _0x479bb6 = {};
  }
  if (!_0x479bb6.list) {
    _0x479bb6.list = [];
  }
  const _0x14ae9f = {
    server: {
      url: "",
      authorization: ""
    },
    muou: {
      url: ""
    },
    wogg: {
      url: ""
    },
    leijing: {
      url: ""
    },
    gzys: {
      url: ""
    },
    czzy: {
      url: "",
      username: "",
      password: ""
    },
    xfys: {
      url: ""
    },
    age: {
      url: ""
    },
    xpg: {
      url: ""
    },
    dm84: {
      url: ""
    },
    aowu: {
      url: ""
    },
    tgsou: {
      url: "",
      pic: false,
      count: 0,
      channelUsername: ""
    },
    sites: {
      list: []
    },
    pans: {
      list: []
    },
    alist: []
  };
  for (const _0x224ce6 of Object.keys(_0x14ae9f)) {
    {
      if (!_0x479bb6[_0x224ce6]) {
        _0x479bb6[_0x224ce6] = _0x14ae9f[_0x224ce6];
      } else {
        typeof _0x479bb6[_0x224ce6] === "object" && typeof _0x14ae9f[_0x224ce6] === "object" && (_0x479bb6[_0x224ce6] = {
          ..._0x14ae9f[_0x224ce6],
          ..._0x479bb6[_0x224ce6]
        });
      }
    }
  }
  const _0xd67d5b = ["wogg", "leijing", "muou"];
  for (const _0x3629bc of _0xd67d5b) {
    _0x479bb6[_0x3629bc] && _0x479bb6[_0x3629bc].url && !_0x479bb6[_0x3629bc].urls && (_0x479bb6[_0x3629bc].urls = [_0x479bb6[_0x3629bc].url]);
  }
  config = _0x479bb6;
  globalThis.__drpyConfig = config;
  global.config = config;
  globalThis.config = config;
  siteBaseUrls = {};
  const _0x1bf38a = ["wogg", "muou", "leijing", "gzys", "czzy", "xfys", "age", "xpg", "dm84", "aowu"];
  for (const _0x2a903f of _0x1bf38a) {
    if (config[_0x2a903f]) {
      if (config[_0x2a903f].urls && config[_0x2a903f].urls.length > 0) {
        siteBaseUrls[_0x2a903f] = config[_0x2a903f].urls[0];
      } else {
        if (config[_0x2a903f].url) {
          {
            siteBaseUrls[_0x2a903f] = config[_0x2a903f].url;
          }
        }
      }
    }
  }
  console.log("[HotReload] Preparing to restart server...");
  const _0x5f0236 = path.resolve(__dirname, "./index.js");
  if (!fs.existsSync(_0x5f0236)) {
    throw new Error("index.js not found: " + _0x5f0236);
  }
  const _0x16c5cd = indexModule;
  const _0x2db7eb = currentPort;
  try {
    if (_0x16c5cd && typeof _0x16c5cd.stop === "function") {
      console.log("[HotReload] Stopping old server...");
      try {
        await _0x16c5cd.stop();
        console.log("[HotReload] Old server stopped");
      } catch (_0x58deb3) {
        {
          console.warn("[HotReload] Failed to stop old server:", _0x58deb3.message);
        }
      }
    }
    await new Promise(_0x17f394 => setTimeout(_0x17f394, 500));
    console.log("[HotReload] Reloading index.js...");
    indexModule = requireAsCJS("./index.js");
    if (typeof indexModule.start !== "function") {
      {
        throw new Error("start function not found in index.js");
      }
    }
    console.log("[HotReload] Starting new server...");
    await indexModule.start(config);
    await new Promise(_0x30c123 => setTimeout(_0x30c123, 500));
    console.log("[HotReload] New server started, port:", currentPort);
  } catch (_0x5d39d9) {
    {
      console.error("[HotReload] Reload failed, trying to recover:", _0x5d39d9.message);
      indexModule = _0x16c5cd;
      if (_0x16c5cd && typeof _0x16c5cd.start === "function") {
        try {
          console.log("[HotReload] Trying to restore old server...");
          await _0x16c5cd.start(globalThis.__drpyConfig || {});
        } catch (_0x6b4451) {
          {
            console.error("[HotReload] Failed to restore old server:", _0x6b4451.message);
          }
        }
      }
      throw _0x5d39d9;
    }
  }
}
function requireAsCJS(_0x2ca154) {
  const _0x5acf30 = path.resolve(__dirname, _0x2ca154);
  const _0x1ed962 = _0x5acf30.replace(/\.js$/, ".cjs");
  try {
    {
      if (!fs.existsSync(_0x5acf30)) {
        throw new Error("File not found: " + _0x5acf30);
      }
      fs.copyFileSync(_0x5acf30, _0x1ed962);
      const _0x16f68f = require(_0x1ed962);
      if (require.cache[path.resolve(_0x1ed962)]) {
        delete require.cache[path.resolve(_0x1ed962)];
      }
      fs.unlinkSync(_0x1ed962);
      return _0x16f68f;
    }
  } catch (_0x5d77db) {
    {
      if (fs.existsSync(_0x1ed962)) {
        {
          try {
            {
              fs.unlinkSync(_0x1ed962);
            }
          } catch (_0x5caf64) {}
        }
      }
      throw _0x5d77db;
    }
  }
}
let config = {};
try {
  const configPath = path.resolve(__dirname, "./index.config.js");
  if (fs.existsSync(configPath)) {
    const configModule = requireAsCJS("./index.config.js");
    config = configModule.default || configModule;
  }
} catch (a0_0x449999) {
  console.warn("Failed to load config:", a0_0x449999.message);
  config = {};
}
try {
  const serverConfigPath = path.resolve(__dirname, "./server_config.json");
  if (fs.existsSync(serverConfigPath)) {
    const serverConfig = JSON.parse(fs.readFileSync(serverConfigPath, "utf8"));
    if (serverConfig.url) {
      config.server = serverConfig;
    }
  }
} catch (a0_0x2de3d5) {}
if (!config || typeof config !== "object") {
  config = {};
}
if (!config.list) {
  config.list = [];
}
const defaultConfig = {
  server: {
    url: "",
    authorization: ""
  },
  muou: {
    url: ""
  },
  wogg: {
    url: ""
  },
  leijing: {
    url: ""
  },
  gzys: {
    url: ""
  },
  czzy: {
    url: "",
    username: "",
    password: ""
  },
  xfys: {
    url: ""
  },
  age: {
    url: ""
  },
  xpg: {
    url: ""
  },
  dm84: {
    url: ""
  },
  aowu: {
    url: ""
  },
  tgsou: {
    url: "",
    pic: false,
    count: 0,
    channelUsername: ""
  },
  sites: {
    list: []
  },
  pans: {
    list: []
  },
  alist: []
};
for (const key of Object.keys(defaultConfig)) {
  if (!config[key]) {
    config[key] = defaultConfig[key];
  } else {
    typeof config[key] === "object" && typeof defaultConfig[key] === "object" && (config[key] = {
      ...defaultConfig[key],
      ...config[key]
    });
  }
}
const urlToUrlsKeys = ["wogg", "leijing", "muou"];
for (const key of urlToUrlsKeys) {
  config[key] && config[key].url && !config[key].urls && (config[key].urls = [config[key].url]);
}
globalThis.__drpyConfig = config;
global.config = config;
globalThis.config = config;
const Module = require("module");
const originalRequire = Module.prototype.require;
Module.prototype.require = function (_0x36b855) {
  if (_0x36b855 === "./index.config.js" || _0x36b855 === "./index.config" || _0x36b855.endsWith("index.config.js") || _0x36b855.endsWith("index.config")) {
    return {
      default: config,
      __esModule: true
    };
  }
  return originalRequire.apply(this, arguments);
};
const siteConfigKeys = ["wogg", "muou", "leijing", "gzys", "czzy", "xfys", "age", "xpg", "dm84", "aowu"];
for (const site of siteConfigKeys) {
  if (config[site]) {
    if (config[site].urls && config[site].urls.length > 0) {
      siteBaseUrls[site] = config[site].urls[0];
    } else {
      config[site].url && (siteBaseUrls[site] = config[site].url);
    }
  }
}
try {
  const indexPath = path.resolve(__dirname, "./index.js");
  if (!fs.existsSync(indexPath)) {
    throw new Error("index.js not found: " + indexPath);
  }
  indexModule = requireAsCJS("./index.js");
} catch (a0_0x70b789) {
  console.error("Failed to load index.js:", a0_0x70b789.message);
  process.exit(1);
}
try {
  const axios = require("axios");
  if (axios && axios.interceptors) {
    const siteUrlMap = {};
    for (const site of siteConfigKeys) {
      if (config[site]) {
        if (config[site].urls && config[site].urls.length > 0) {
          siteUrlMap[site] = config[site].urls;
        } else {
          config[site].url && (siteUrlMap[site] = [config[site].url]);
        }
      }
    }
    const originalHead = axios.head;
    axios.head = async function (_0x5b6f02, _0x2eb14d) {
      try {
        {
          return await originalHead.call(this, _0x5b6f02, _0x2eb14d);
        }
      } catch (_0x10e520) {
        for (const [_0x21eb35, _0x337317] of Object.entries(siteUrlMap)) {
          {
            if (_0x337317 && _0x337317.includes(_0x5b6f02)) {
              return {
                status: 200,
                data: ""
              };
            }
          }
        }
        throw _0x10e520;
      }
    };
  }
} catch (a0_0x33cac6) {}
typeof indexModule.start !== "function" && (console.error("Error: start function not found in index.js"), process.exit(1));
indexModule.start(config).then(() => console.log("Server started successfully")).catch(_0x1a76d9 => {
  console.error("Server failed to start:", _0x1a76d9.message);
  process.exit(1);
});
function handleShutdown(_0x3628d5) {
  console.log("Received " + _0x3628d5 + ", shutting down...");
  if (typeof indexModule.stop === "function") {
    {
      const _0x55ca88 = setTimeout(() => process.exit(0), 5000);
      try {
        indexModule.stop().then(() => {
          {
            clearTimeout(_0x55ca88);
            process.exit(0);
          }
        }).catch(() => {
          clearTimeout(_0x55ca88);
          process.exit(0);
        });
      } catch (_0x2039bc) {
        {
          clearTimeout(_0x55ca88);
          process.exit(0);
        }
      }
    }
  } else {
    {
      process.exit(0);
    }
  }
}
process.on("SIGTERM", () => handleShutdown("SIGTERM"));
process.on("SIGINT", () => handleShutdown("SIGINT"));