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
    "revision": "0a450f1af39bf323ad2e67b80a810345"
  },
  {
    "url": "assets/css/0.styles.212954f6.css",
    "revision": "90a253b16035de3d22a331e6298fc8a8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.34506c01.js",
    "revision": "e9cc42ed41ba329f69311c505fd1730c"
  },
  {
    "url": "assets/js/11.7d1e5171.js",
    "revision": "cb43e564b8bc7c38b386a27af95f8ccf"
  },
  {
    "url": "assets/js/12.f6ce1ba0.js",
    "revision": "c2854aa78ef7b619deda84b7c52e85e1"
  },
  {
    "url": "assets/js/13.434245e7.js",
    "revision": "35ee1c6e961ca1d683066bcb7906b586"
  },
  {
    "url": "assets/js/14.673e5cf9.js",
    "revision": "f40a665c00ca633ec773abddcadc4768"
  },
  {
    "url": "assets/js/15.254de26e.js",
    "revision": "f03cfd125162b640e2e47c01c6ae90bd"
  },
  {
    "url": "assets/js/16.8f2439f8.js",
    "revision": "183dc9948092bb2006fc87ca37e4e4b9"
  },
  {
    "url": "assets/js/17.78f8363b.js",
    "revision": "3ea2a700fee9f50cc751d29d130b0c2d"
  },
  {
    "url": "assets/js/18.8520ae7c.js",
    "revision": "9bb90d722a73f5e581bd90142e29b437"
  },
  {
    "url": "assets/js/19.acae7903.js",
    "revision": "602d81226571f995df51e17fe16fdb26"
  },
  {
    "url": "assets/js/2.675b9061.js",
    "revision": "367833c518dd62388fe3e941c241357b"
  },
  {
    "url": "assets/js/20.a28f9dcf.js",
    "revision": "3ce2d1f6838f7071a61360ae3f69eb27"
  },
  {
    "url": "assets/js/21.a2213c6b.js",
    "revision": "12ce7ff922bb3fa88348dd11c3aed86b"
  },
  {
    "url": "assets/js/22.88e0153a.js",
    "revision": "d2b0f32d270e310d549f1b186f6f0a74"
  },
  {
    "url": "assets/js/23.0672cb02.js",
    "revision": "f3054bdf74931b09bd259a61029ef9a2"
  },
  {
    "url": "assets/js/24.65b2daec.js",
    "revision": "22cd91ba575cd631a8a56287ef4042d7"
  },
  {
    "url": "assets/js/25.c4d00d61.js",
    "revision": "bccf1f957b03c1e2250b4adc7e849952"
  },
  {
    "url": "assets/js/26.fc6f8e82.js",
    "revision": "9e1f8310a32a2e14f36e996c272d50d7"
  },
  {
    "url": "assets/js/27.70ebf994.js",
    "revision": "6d52a3a6060e48f7dd613cb87b09a5fd"
  },
  {
    "url": "assets/js/28.464eaf10.js",
    "revision": "895bcdc34b2c421e07ad7c95f6315c81"
  },
  {
    "url": "assets/js/29.42b641ad.js",
    "revision": "3df2e033847b88962b06d939c18cafaf"
  },
  {
    "url": "assets/js/3.4e24d5fc.js",
    "revision": "088e10d2ac9d3c8fef43a1fe1aca9c83"
  },
  {
    "url": "assets/js/30.306ea60c.js",
    "revision": "0b499509027f773890df28643b76b6aa"
  },
  {
    "url": "assets/js/31.be8948ae.js",
    "revision": "6018df96a922cdd188852532db8efe01"
  },
  {
    "url": "assets/js/32.df74d36c.js",
    "revision": "6c076cc737cfccc4642ba68dd71138ba"
  },
  {
    "url": "assets/js/33.2d766bf8.js",
    "revision": "f297bef196712f1c4f194d6c3e49ff1e"
  },
  {
    "url": "assets/js/34.be5e1b39.js",
    "revision": "ebad7b3a88c1a557954d2a4ec1f3e9ed"
  },
  {
    "url": "assets/js/35.cf1a5fcb.js",
    "revision": "33477f88fad156fc60f4e161b738abbb"
  },
  {
    "url": "assets/js/36.a8d1e0d5.js",
    "revision": "d9aeaae4d3ba150987ef9d41fb68af36"
  },
  {
    "url": "assets/js/37.c10a80c0.js",
    "revision": "9fc9f55c465e9bcbbcbddc67d19ce2e7"
  },
  {
    "url": "assets/js/38.c8018328.js",
    "revision": "544b9c65bdcd82b496c3ad5d53e020af"
  },
  {
    "url": "assets/js/39.6cbf021e.js",
    "revision": "63c3fc40ec754b63b47886f5c46e841c"
  },
  {
    "url": "assets/js/4.a44836c8.js",
    "revision": "c4392a2d54ee86e2473d286274fd16f2"
  },
  {
    "url": "assets/js/40.3f405d26.js",
    "revision": "d378a8865231c2353afa3f0d14d5b523"
  },
  {
    "url": "assets/js/41.c4e905bc.js",
    "revision": "af5a081daa313b10c74d7826d8421b6c"
  },
  {
    "url": "assets/js/42.4f1de1ad.js",
    "revision": "a13dc46a487bb0c4e56234e5a6a742c2"
  },
  {
    "url": "assets/js/5.9347a682.js",
    "revision": "51a4861490bc608df7c32e694720d748"
  },
  {
    "url": "assets/js/6.eea778bd.js",
    "revision": "7244b0640ca3e49fd3467970a179becc"
  },
  {
    "url": "assets/js/7.a55f0d7f.js",
    "revision": "c7cc7f66c164d6384448c3de06b94229"
  },
  {
    "url": "assets/js/8.e0ed2923.js",
    "revision": "65141a3d06b9aa654f388137ba296f66"
  },
  {
    "url": "assets/js/9.2f493107.js",
    "revision": "ee64e88c0c3d67af25fb4846f7ba7791"
  },
  {
    "url": "assets/js/app.146d25eb.js",
    "revision": "9e2180ec92b2c67fe468c54882a60e5c"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "a19dc3398516e313997868eb53970949"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "319707fbbaa124f92c6bb2e10bd8914d"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "35959bfad7941d8e1b0df921b8ee93f3"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "40e7c8b6e18025164f420bc688edb8f0"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "2ebd05b6df3d1335a9b5272bf90fc37e"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "8bbf90a1e1fc459d6b8e4952002ac445"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "2e2e06d0f8c33fe7b48a088d0ed4316d"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "0b903201190f3b615ee156a1670d09fd"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "03858dbd4bb8c747b603276e1e2592cb"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "386b2963f3f5d68c64b2cc18c106f612"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "ffe4f6a5a4aa0bfc08e8bc295cbd8662"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "5cd2c05f8de152b8d01d6800375b27c9"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "d53818e78d4b997de5f61cc47c848994"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "f89110fe7d3079f34dfe04b4ebb6e017"
  },
  {
    "url": "base/practice/1.MongoDB.html",
    "revision": "810ddf0084c1e70c32cca3df4249c144"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "7cdcd25b3a06be27243045b54bf0d438"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "25af5b4a8408df0f917237a1378a1a20"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "c9fa861068b8cc7bad99d26325bf974f"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "d628b21cf2706c40c65d12a71fb24b80"
  },
  {
    "url": "base/practice/test.html",
    "revision": "2900595389bd96ae0cf877768d092a22"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "f6dea62491b49ad5349fffbb20c5bac3"
  },
  {
    "url": "index.html",
    "revision": "a99051bebe5f605a788e11fc2194dabb"
  },
  {
    "url": "senior/typeScript/1.inde.html",
    "revision": "651d4d0408b76c09c3017e9c5ab6ed48"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "0dc8c794639110aad24e523e9bc5c808"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "395f249ec973aa02af3a07929d48363d"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "6d2fc960db81b6fdaf8f71541185ca3d"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "0a1ab23a47a86efdb4e75c81deb2e754"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "e1b27725f262fdf31df2f57c0d6a189c"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "1cb11ac5ad462e6b33a3cef8a1aa68fb"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "b0b6226033ca348fa9eba289d0048f0f"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "f57f66bb5988ad47e681e1d6f9758362"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "8702bf110ab6dd439f46cc02eee805bb"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "e9a139ddeddb133b7413fc77a1073871"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "c7b6a293d670c581996674b45dbc5c06"
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
