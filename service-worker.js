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
    "revision": "3c27c7b0f754b835d58631968c90628d"
  },
  {
    "url": "assets/css/0.styles.1221baa7.css",
    "revision": "740f4df2a2947f5f740cbda4d9f3daa8"
  },
  {
    "url": "assets/img/1.a1b18b4b.png",
    "revision": "a1b18b4b9f0a927aca99cf3c3812a9ab"
  },
  {
    "url": "assets/img/1.fd9cb1e0.png",
    "revision": "fd9cb1e0e005fa8947bd5f3381c2c35f"
  },
  {
    "url": "assets/img/2.265eaa00.png",
    "revision": "265eaa0094e1ed337d07b091b78b033c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c7999b22.js",
    "revision": "176201d6442b7eddba26b166728b2a6e"
  },
  {
    "url": "assets/js/10.62935875.js",
    "revision": "1b010847f68dd2cab94c069b1fd9017e"
  },
  {
    "url": "assets/js/11.0669fae1.js",
    "revision": "fab031a5bdb270e52073837a27981218"
  },
  {
    "url": "assets/js/12.908037a8.js",
    "revision": "ffbb13315a5a345f9a65f153cd3b85e5"
  },
  {
    "url": "assets/js/13.7d4249f0.js",
    "revision": "c9d4d997c8852f5870a6633be5211c04"
  },
  {
    "url": "assets/js/14.503c154e.js",
    "revision": "4154e29b21bc8f9d5eb1cabb408a473a"
  },
  {
    "url": "assets/js/15.e940f298.js",
    "revision": "9bee9b926e07f94b5b358a1baa2fdf62"
  },
  {
    "url": "assets/js/16.1641d976.js",
    "revision": "2d830546f6c4f9dc5b85d1002cc8d3f8"
  },
  {
    "url": "assets/js/17.77cb064f.js",
    "revision": "2c09ceee75510025057363768e7dae5d"
  },
  {
    "url": "assets/js/18.b37cbc46.js",
    "revision": "f371a6baed15980ac5de1ca590277cb7"
  },
  {
    "url": "assets/js/19.3aa63867.js",
    "revision": "e5a40605762e13a7157d312c27746a97"
  },
  {
    "url": "assets/js/2.9c6df21b.js",
    "revision": "a5fda98cdfc195aaf04526a8696790c0"
  },
  {
    "url": "assets/js/20.d3bc44a7.js",
    "revision": "0980c16506bb5bd072c543de77fcc26c"
  },
  {
    "url": "assets/js/21.e85e9d90.js",
    "revision": "92aab12667f7a14fb557adfab2517cb2"
  },
  {
    "url": "assets/js/22.16e8f03b.js",
    "revision": "2d354fb877560c6c9353a5d1f2ecedaf"
  },
  {
    "url": "assets/js/23.83664782.js",
    "revision": "a6a8173e4a2cdb6d7d61528ed1826af7"
  },
  {
    "url": "assets/js/24.cff610c9.js",
    "revision": "3a1351a98d93e0267fc552a1d94b2203"
  },
  {
    "url": "assets/js/25.75ce52a8.js",
    "revision": "71f647ad4bcc343513d5c0ac36c16773"
  },
  {
    "url": "assets/js/26.e7eab329.js",
    "revision": "cf3b5c00d8edabc39f838580d292e3f9"
  },
  {
    "url": "assets/js/27.37d3dbf1.js",
    "revision": "7fbb97f15ec537623c90fcfcfda73916"
  },
  {
    "url": "assets/js/28.3e25e892.js",
    "revision": "11706fe820deac6be774f864d5595f8b"
  },
  {
    "url": "assets/js/29.74a139e9.js",
    "revision": "ea2e170b3bc0c950b3126d61b8694d7f"
  },
  {
    "url": "assets/js/3.9f5ca14c.js",
    "revision": "f4d8732f323be3ad8ca07d9f5689698a"
  },
  {
    "url": "assets/js/30.1886e650.js",
    "revision": "427d1c1b4589ef87b8fe6c54a9f41179"
  },
  {
    "url": "assets/js/31.c2568303.js",
    "revision": "667d4715fbcf8fa8919282a2454b7f16"
  },
  {
    "url": "assets/js/32.ce5c326d.js",
    "revision": "d0f777ae047ead2977c4fd74aa4ab001"
  },
  {
    "url": "assets/js/33.d5e0eadc.js",
    "revision": "9d6ea7ff6d315df15d4e7dae2316f34d"
  },
  {
    "url": "assets/js/34.a5bdc1f9.js",
    "revision": "577e1388c59a747bc8cd6e07509fc53f"
  },
  {
    "url": "assets/js/35.c083b277.js",
    "revision": "3ee9bd0a790e63142b6483c37b1b266d"
  },
  {
    "url": "assets/js/36.c6294bab.js",
    "revision": "4e5714ca9ee2b3575cf42c4daef885c7"
  },
  {
    "url": "assets/js/37.49f99c82.js",
    "revision": "a8ae3c43513fce2ade76bd2105d3aeeb"
  },
  {
    "url": "assets/js/38.90865949.js",
    "revision": "d8d7fded81e1d282aaa9db5c3448e6f7"
  },
  {
    "url": "assets/js/39.5832cfee.js",
    "revision": "4d1fc9a3fe55254d3f7217839a84d84a"
  },
  {
    "url": "assets/js/4.5a212b2d.js",
    "revision": "172413e062741cdb70596656eb727124"
  },
  {
    "url": "assets/js/40.bac3a2b9.js",
    "revision": "056473067a95b88ba0474ebb73d17f0c"
  },
  {
    "url": "assets/js/41.511ab9b4.js",
    "revision": "4582e50c2356e060834830907b01d129"
  },
  {
    "url": "assets/js/42.fd3acb08.js",
    "revision": "2491b637edd6691c99e38747be8e714d"
  },
  {
    "url": "assets/js/43.51a77fc5.js",
    "revision": "96538ac9219009807999ff1d6c7f2df9"
  },
  {
    "url": "assets/js/44.13ebe8a4.js",
    "revision": "3cac096f6442c733892805ef455f4992"
  },
  {
    "url": "assets/js/45.4f2f4d8f.js",
    "revision": "87c3b883542d678fbdc8ed8470b14793"
  },
  {
    "url": "assets/js/46.eb602e13.js",
    "revision": "ab9d93139e6be5bcc9f7be2a7ce906fb"
  },
  {
    "url": "assets/js/47.c022f1db.js",
    "revision": "29c770f5c304c9aa915880e58935c8fd"
  },
  {
    "url": "assets/js/48.490caa90.js",
    "revision": "5413dd0cb1588d372d5fb14722c03959"
  },
  {
    "url": "assets/js/49.0ea69b84.js",
    "revision": "4568422804fce3f2aa41476159c45fd7"
  },
  {
    "url": "assets/js/5.70f6abfa.js",
    "revision": "0f1e9aee2941e7881b65da941a1363d2"
  },
  {
    "url": "assets/js/50.ca6ccc3d.js",
    "revision": "10c35f2b13f935d8670b8313f60796e6"
  },
  {
    "url": "assets/js/51.0294c615.js",
    "revision": "37be00f0c2b18f3a0d16bfa2a1ccd260"
  },
  {
    "url": "assets/js/52.4ee4b94e.js",
    "revision": "abb3b8695523be519a64d6699027083b"
  },
  {
    "url": "assets/js/53.467778b3.js",
    "revision": "de1cd3518e085a093efb5933527c0483"
  },
  {
    "url": "assets/js/54.8b3d7f73.js",
    "revision": "5dfe3ca4bdae4c34fe3ea619946b11e0"
  },
  {
    "url": "assets/js/55.dcba9f56.js",
    "revision": "a0dd9725ea1f3cdee0a5767bd6418b0e"
  },
  {
    "url": "assets/js/56.464bacc2.js",
    "revision": "6942d2881e2298308c392e17dff5d515"
  },
  {
    "url": "assets/js/57.a6b884de.js",
    "revision": "c0abec02c82d9c4aff0c7e19369cd1c6"
  },
  {
    "url": "assets/js/6.48f2ca4a.js",
    "revision": "aadfba8f7cea494c4dfe2a4170e39e02"
  },
  {
    "url": "assets/js/7.6c1e9806.js",
    "revision": "8fc6b0c9ebbdaf3295e5418caeb00975"
  },
  {
    "url": "assets/js/app.19453487.js",
    "revision": "cbb7941e55f10abc021d37c7fc62fa84"
  },
  {
    "url": "assets/js/vendors~docsearch.39676dd9.js",
    "revision": "5e7716d1c5a79ebcd251936b540a16ae"
  },
  {
    "url": "base/build/1.index.html",
    "revision": "c78e231affca0617274e2f17095ac598"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "370c2425b8d62176e08adee96e039ca7"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "11b86d19235db5571a1f9e8a9efd7563"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "dc63bac0b675ebc2001472601007df35"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "ac05ac4a3f71d48497b98229c101c3f2"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "c5cd78a1ef3352a7f6897c93082602e3"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "f3b0f90cfef381cd59f289b846630fe3"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "8dfd3f47a7d9e14588388d074ce8fab5"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "fb572c45fd37a025d2b3f72192e1bc00"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "f6e0c79050be35eaf92b09be25513da8"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "10ee35ed3ce7515d18f04e67dc94c575"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "4d4883147f3fe8d653ccfd93f9191246"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "c180a6db87921d15496f017570f67b54"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "9c7e394d7e9653f5de004e2e9758f9d3"
  },
  {
    "url": "base/practice/1.index.html",
    "revision": "84bd862bd771c4c87449658e6810503c"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "9fbc061b880ca5e4bb003095b0de9698"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "c86e94abf64ecfba386673187d66a306"
  },
  {
    "url": "base/practice/egg.html",
    "revision": "a12ca59270ef231eb8c7276d7f01f1c5"
  },
  {
    "url": "base/practice/express.html",
    "revision": "ad9a669a3ea243b70ea1ff2e99f9de73"
  },
  {
    "url": "base/practice/koa.html",
    "revision": "2b353020e78e11e68aab3ca27f32ab3e"
  },
  {
    "url": "base/practice/node.html",
    "revision": "0674484dd48b3447bff35f9098fba88b"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "d24fc880e0a8679dd3837f8ddda20ef7"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "d7f58e981d467317a2305d4afa93ed2a"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "82f733c1ef83aabbb00a2d5288b1c94a"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "d809cc8a25f3604496255e695babd9c2"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "c8543771ec80dcf15dd519516b18049d"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "a707fb8800e5cce805da14a15f87f5a6"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "d7f09869e9feb17b99e9bdfd1e816d76"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "433c014cdafc54dddf8ab87dad6ca348"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "3d4801138d0752e975bcbd46cbbca44f"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "ec6ce358ae12649f9a5f70d8d2196cd2"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "1939bfc0c81c227902b58dddc7d51568"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "57e068816f94257d3cc6a92f717db74e"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "efef7deef9f9c51bb698c5155179b913"
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
