/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "01107b4864efe67b8e4b74552568138d"
  },
  {
    "url": "assets/css/0.styles.b4d9c749.css",
    "revision": "121d760fd4e038cdd7abad95b3765c12"
  },
  {
    "url": "assets/img/1.a1b18b4b.png",
    "revision": "a1b18b4b9f0a927aca99cf3c3812a9ab"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3fd8280d.js",
    "revision": "e592bda434f49909af060701b7613970"
  },
  {
    "url": "assets/js/11.d6f6d75e.js",
    "revision": "594512475211babd4cbd4987d565a19a"
  },
  {
    "url": "assets/js/12.f6d91bc8.js",
    "revision": "83ffeb832b1082167afcb1e46653d494"
  },
  {
    "url": "assets/js/13.30dc9d60.js",
    "revision": "a9a0bf8967360a4658d7fc01cfef9120"
  },
  {
    "url": "assets/js/14.274417c7.js",
    "revision": "a9e10bdc376f87009bb811875daa0f76"
  },
  {
    "url": "assets/js/15.c6b9779b.js",
    "revision": "5ffe0e459a9ab711f40c62d9d8e27385"
  },
  {
    "url": "assets/js/16.662b9600.js",
    "revision": "067b16d496f3c305e65c821447a293e6"
  },
  {
    "url": "assets/js/17.ac94d8f8.js",
    "revision": "149e7d3693263160caa37e34e76c16ed"
  },
  {
    "url": "assets/js/18.fb1c6a13.js",
    "revision": "97c9ffa087fabf512c54d8c7ed635565"
  },
  {
    "url": "assets/js/19.35077f93.js",
    "revision": "3478bbf6ceb77b9fc532e62ff624ec82"
  },
  {
    "url": "assets/js/2.4a6e77df.js",
    "revision": "ef0c6f2f1f1098231aa5ac38ec307623"
  },
  {
    "url": "assets/js/20.1798548d.js",
    "revision": "d627d4f15f260d8b98e263bebf9cab5a"
  },
  {
    "url": "assets/js/21.848691ad.js",
    "revision": "b2a63e0c484b8d9490ce98745fb167d3"
  },
  {
    "url": "assets/js/22.22586b5e.js",
    "revision": "5a0c9718747c0ae2e5fa42812c916a77"
  },
  {
    "url": "assets/js/23.19cb1adf.js",
    "revision": "8f5fe3718b0679b7201b3ec04dfc7363"
  },
  {
    "url": "assets/js/24.13691d5f.js",
    "revision": "ab363ea3a74c187ffe572fc4de3bcd6b"
  },
  {
    "url": "assets/js/25.f4c00af5.js",
    "revision": "c700c126df7d25e4fe5e385b8d07ec7a"
  },
  {
    "url": "assets/js/26.7c7e6ee8.js",
    "revision": "f6bf1ff2d92beaa3e1bfa32068ea1b58"
  },
  {
    "url": "assets/js/27.87dc466d.js",
    "revision": "bf8eb5113fc4a2d6dd908fa4d6fabbbb"
  },
  {
    "url": "assets/js/28.5be0a58c.js",
    "revision": "3cee57df5b56526d8058dbb4a18706e0"
  },
  {
    "url": "assets/js/29.6af17a6b.js",
    "revision": "1f284e490ef60c611184257d77f07446"
  },
  {
    "url": "assets/js/3.11632b7d.js",
    "revision": "0150bf8aeff3144174ccd354d365bf2e"
  },
  {
    "url": "assets/js/30.b8b278a3.js",
    "revision": "4246eb24d2a72b8168eca62b0b232dbd"
  },
  {
    "url": "assets/js/31.5b60189a.js",
    "revision": "fb325dc909b7695b0b477c6ac0e658a7"
  },
  {
    "url": "assets/js/32.0c6f88c6.js",
    "revision": "d26ada5a160b069cb3f9f14b5af79ab6"
  },
  {
    "url": "assets/js/33.d02a8238.js",
    "revision": "b7f56b8732855ff0fb4581745305c6ce"
  },
  {
    "url": "assets/js/34.1290ee64.js",
    "revision": "141cffc1b7b92f19da5989368ffc055e"
  },
  {
    "url": "assets/js/35.533bc893.js",
    "revision": "45dc0cfb942675441404fb8bff7a1f05"
  },
  {
    "url": "assets/js/36.052db458.js",
    "revision": "5264df53e2766daac1ef6bc6820b09db"
  },
  {
    "url": "assets/js/37.1ab10a0b.js",
    "revision": "da4757bc2c9c5a2bbb5994a4b0053529"
  },
  {
    "url": "assets/js/38.d7f18924.js",
    "revision": "e7b2d97005d7d9b688dd3698d1a8e151"
  },
  {
    "url": "assets/js/39.5f1acf34.js",
    "revision": "e77b7cf877e771477b1f71578f3577f7"
  },
  {
    "url": "assets/js/4.9c0981ee.js",
    "revision": "91f15a1dcf06f0826e877a12c5a7d71c"
  },
  {
    "url": "assets/js/40.34b5f089.js",
    "revision": "0c4d26bf5241a8704e21148bd98b97be"
  },
  {
    "url": "assets/js/41.d24d558a.js",
    "revision": "9abd2db9f260d05fc96c7066ba40fbda"
  },
  {
    "url": "assets/js/42.e6813933.js",
    "revision": "ac2f6a31f2e9825f2f439263a1b84990"
  },
  {
    "url": "assets/js/5.93a2c2b5.js",
    "revision": "a0e9035546b82d8d4b9d4b707320dbd1"
  },
  {
    "url": "assets/js/6.74a3b98c.js",
    "revision": "f65adcb2eaab340b43f6c3c0a592287c"
  },
  {
    "url": "assets/js/7.740d71c0.js",
    "revision": "734a5cc658fabaa98d7fb9709d087914"
  },
  {
    "url": "assets/js/8.1d081c4b.js",
    "revision": "3197664a9c479184056092b6b7a5dc5d"
  },
  {
    "url": "assets/js/9.87f5366b.js",
    "revision": "42691873b19cffc01bb99431c3c90664"
  },
  {
    "url": "assets/js/app.e1c52f76.js",
    "revision": "12fedc2f8e7e87cb03614a9947153156"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "bd60e8974e6dc760a54dcf895b877279"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "850e074e67f51844d8ff9fe454e76672"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "67bee5311046a673729f843f1c19273d"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "c0f97f9e93f4de4887a0c0a3a9c614ba"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "68e91d29ad6302efc82d6aa8d1a30b48"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "385ccca4f049c05e5e21ca9fa2fcd2c4"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "7252bf1965ee65af7c03d892fe5bb143"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "41221c9cba6929b9cb6bd01fd48bbf7d"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "2dd53ec75b5be5da5e048b029d56eca8"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "e46d76de5fa3b733b17f89302432044b"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "bfe94308bb8ad3c96ce98b46dfb72b4d"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "88c577368ce0755543a0ad6a523763e1"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "a2051ba374baebdbe081035a16a521dd"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "204f8df5cb84e5cca1e05e46126422d6"
  },
  {
    "url": "base/practice/1.MongoDB.html",
    "revision": "c451120f2280c28c07abd790e0f9024c"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "f7199d050e983367f3ad18b34d02c2cb"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "e23d943df85faf87a2ef4b2c06cf9e02"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "12bb0feba6213fc904b97935604377d7"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "57c38862228adaf861938dde2df8b8a8"
  },
  {
    "url": "base/practice/test.html",
    "revision": "2f5b845c23ce9b13aa23461484539679"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "008f1d50df048eef738af19f75c1eacf"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "d21c467355bfa378b0ecb883e22ca710"
  },
  {
    "url": "senior/typeScript/1.inde.html",
    "revision": "cec2b66f841a36a76fc53c7384a14deb"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "1b56e275e66a0a61afcb33732ac94c65"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "e82dbf70514bef4760716e3df2dd95a7"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "b1c12ada919a502d31044e8995870011"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "664ddbb15a826fbafb0179373ca3cf8c"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "8f277daee83b8d503a39908ca01ccdd5"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "d702a6ff3ad9927d45e409c125f3d4a9"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "383de439bc50ef4905697734d2dcfb88"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "10c496563e7c67d386a75b4c292d1ade"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "a6b0bb399c22001593c67b15b740642a"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "bf99facd0e65f462cf60f3e45aee8b7c"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "02c4b6354a3386ce34648abf3288fd4b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
