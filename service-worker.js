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
    "revision": "ca669e3143676b955db8632fa80f5164"
  },
  {
    "url": "assets/css/0.styles.b4d9c749.css",
    "revision": "121d760fd4e038cdd7abad95b3765c12"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2c88b28b.js",
    "revision": "f4fa5525db0f031162ecb3cadc99e2bd"
  },
  {
    "url": "assets/js/11.c0bc1c11.js",
    "revision": "29fede07e48507a8a14fea751e2a1d14"
  },
  {
    "url": "assets/js/12.2fb0cc91.js",
    "revision": "2fc4597718095d95c78285bf90fa01a8"
  },
  {
    "url": "assets/js/13.07bf4945.js",
    "revision": "de65b981e96f0440c907fc6709e71af8"
  },
  {
    "url": "assets/js/14.1dab443e.js",
    "revision": "0bcde3c363e8fcc7f842e9beec15194c"
  },
  {
    "url": "assets/js/15.fb72e4e1.js",
    "revision": "4f4c6f2f17d13f187ff55e8a7e9c1053"
  },
  {
    "url": "assets/js/16.e07cb849.js",
    "revision": "ed8f308810aff1427ed446dec12f8f9d"
  },
  {
    "url": "assets/js/17.b2bb12e8.js",
    "revision": "3aad3fba3d5b100dcf9c41342d88fd65"
  },
  {
    "url": "assets/js/18.11e4192b.js",
    "revision": "1a33a3297ad94981ca8b804cd9d4d7b6"
  },
  {
    "url": "assets/js/19.98c0e2ec.js",
    "revision": "efd99969b744e79d0f286deffbdfd21d"
  },
  {
    "url": "assets/js/2.6bd02efd.js",
    "revision": "4423dd2ec1b2e7da9f60868c587f2703"
  },
  {
    "url": "assets/js/20.0baf809e.js",
    "revision": "e0073b96caebea461845c4fc58ce6f4e"
  },
  {
    "url": "assets/js/21.54e4925d.js",
    "revision": "8ae2a44e33e4326d81b5cbaab9de9c6d"
  },
  {
    "url": "assets/js/22.6330e670.js",
    "revision": "0a1c8d418030ea72e96d029b0d61bbb6"
  },
  {
    "url": "assets/js/23.78f9b970.js",
    "revision": "8bb1cbd08c1001c37084e9c39d02a467"
  },
  {
    "url": "assets/js/24.048021ee.js",
    "revision": "3319d76de0a0477c0e0cbc5d3ea986f2"
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
    "url": "assets/js/27.98b0164a.js",
    "revision": "f68b5fb5803b6323aa8c2959bbcc7bff"
  },
  {
    "url": "assets/js/28.dad2dc83.js",
    "revision": "4c45a3021792aec386b00bfe5a04120d"
  },
  {
    "url": "assets/js/29.ee7a5d3b.js",
    "revision": "b1a18c593762c07b5824fdb89103f531"
  },
  {
    "url": "assets/js/3.9bfec14d.js",
    "revision": "ca318dae699c2e6bbd965e78926606dc"
  },
  {
    "url": "assets/js/30.4ecdc207.js",
    "revision": "d1614f58f4081ee0ddd106ab96fc390a"
  },
  {
    "url": "assets/js/31.a4e83288.js",
    "revision": "d282cdf3b211bb184538f4ec93fbdb9b"
  },
  {
    "url": "assets/js/32.6dfc76d2.js",
    "revision": "770aaa6bf8b18b395c3ed0f3577511c0"
  },
  {
    "url": "assets/js/33.ee31e60d.js",
    "revision": "5efe6efe3e120c923e3f7927c3eae050"
  },
  {
    "url": "assets/js/34.1290ee64.js",
    "revision": "141cffc1b7b92f19da5989368ffc055e"
  },
  {
    "url": "assets/js/35.92d06fd6.js",
    "revision": "7b0c3a77de6b78407fd081420f05faff"
  },
  {
    "url": "assets/js/36.8e3c8884.js",
    "revision": "7f364a5bff2814a51a58478f57935320"
  },
  {
    "url": "assets/js/37.772746af.js",
    "revision": "dcfce18b027009f9150f72fbc436c735"
  },
  {
    "url": "assets/js/38.9cf55f45.js",
    "revision": "661bba4a73c7a07b5c5898ea0b0e564f"
  },
  {
    "url": "assets/js/39.a1d7e18a.js",
    "revision": "c572b9691d89f8d6dbee42b37bcd2383"
  },
  {
    "url": "assets/js/4.5d1f653d.js",
    "revision": "b99fad6053b03121bc866eb91ca75e49"
  },
  {
    "url": "assets/js/40.6de93366.js",
    "revision": "e3c36b675b6ac0e27f7920d4c206438b"
  },
  {
    "url": "assets/js/41.2f8afd70.js",
    "revision": "47c50496d671902ddbeb2dfcb463fc1c"
  },
  {
    "url": "assets/js/42.69cf8852.js",
    "revision": "5d9b65fbd583b9180d295bf93a48e784"
  },
  {
    "url": "assets/js/5.6eb9db22.js",
    "revision": "c5aca42cafc7d0f6c41f98e3f5c99083"
  },
  {
    "url": "assets/js/6.12e88175.js",
    "revision": "9d8f610313cca92d482aa1e5b5911a45"
  },
  {
    "url": "assets/js/7.530d882a.js",
    "revision": "4a36d24d9d00f8c0ac2775a6fbf97353"
  },
  {
    "url": "assets/js/8.3df23271.js",
    "revision": "bec65bee7c459011586adc727b8010ec"
  },
  {
    "url": "assets/js/9.a6910d83.js",
    "revision": "1e8e34211efed5cc89364b132d1aaca5"
  },
  {
    "url": "assets/js/app.3e4808e6.js",
    "revision": "1a01aab1b7b6da07929fcb158d515e6a"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "22ca5988e83377d26422c49e9126366b"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "30ee3b483790ee966f52210bd5c8bcca"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "f7739441fe91615cbe1612be6d85e413"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "43f292cb027e02df05de03f25c55ac74"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "b093600908b4c31185963171b7e25514"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "ca5c85505113919a7843f796d64b604b"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "7e392c2cf89f893eb5addba138614835"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "c2bc2114717eb22088116aaba651b97a"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "e7b14200efd55fcc3c3c2158682e3ebf"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "d6ae45887f4a7319e74be5fe54befb23"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "9ccc1cd20386add44ad42768360eca3f"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "33c809b151e1601dceaee586062cd8d6"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "f65659900006378cce5134bc4977670e"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "51af3a7764c9e494b951a9a0b91eded4"
  },
  {
    "url": "base/practice/1.MongoDB.html",
    "revision": "d18db5685dd02099a07c1de3269c94cc"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "c3805484c1e066a53afab9aa85a02ff3"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "8be870add795c138dec6103b4d407efe"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "607f8d9da0df0d087f55b99d387844f7"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "7843a0cd83fe4b0b901598f31a7d81f9"
  },
  {
    "url": "base/practice/test.html",
    "revision": "47413d9972191700cd0640346e84af9b"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "1b568e8000766f3e57fb820b626bb903"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "592f8eeb3c1b7742882354f86a55b7c4"
  },
  {
    "url": "senior/typeScript/1.inde.html",
    "revision": "95cacc17dda266479ba47efadfdc0c59"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "196a0de14acfde01c8ce4e1fa6a5d66f"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "e10eb82218722a1b4ffc224e1817dc69"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "a6f07ff5236c0e1024bc3c53aec6ec69"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "7d065c9bf4840930906a5086cf72eb65"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "2f0b7a030313539151ed3c4cc93a64bc"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "a1e004f744198adfd128d5dd73e0351c"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "778567340ed78d8bb49da7eb7dffb4af"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "e7d1f862f6c6cb7c4617fd51006ee677"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "fdcc4b5af0db2690348548cb3cfbef72"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "7b729117f76a6912efb90dde5700afde"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "d24b14aadb8d287f18f0eaea5f858937"
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
