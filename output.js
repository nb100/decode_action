//Mon Mar 03 2025 00:44:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function htmlDecrypt(_0xc15a26, _0x4614d4) {
  const _0x3ab8c4 = "window.atob;window.Cookies";
  let _0x18f0d7 = CryptoJS.AES.decrypt(_0xc15a26, _0x3ab8c4).toString(CryptoJS.enc.Utf8),
    _0x3d36c1 = CryptoJS.AES.decrypt(_0x4614d4, _0x18f0d7).toString(CryptoJS.enc.Utf8);
  return _0x3d36c1;
}