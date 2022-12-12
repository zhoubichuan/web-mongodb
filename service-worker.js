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
    "revision": "2805888fd9dcfe89a1ea6e14b9eaa334"
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
    "url": "assets/js/13.1369a269.js",
    "revision": "0fc769b9246a8ab1dc2955cd127b69cf"
  },
  {
    "url": "assets/js/14.603c390c.js",
    "revision": "cd4ac6944d2b8c6ebe281676ce22b915"
  },
  {
    "url": "assets/js/15.2e2b8807.js",
    "revision": "33a299fdd77ab5497914ddce2a8e2693"
  },
  {
    "url": "assets/js/16.39ea716d.js",
    "revision": "e474bd3e1879ac314a0459b6e191c3d6"
  },
  {
    "url": "assets/js/17.360b2328.js",
    "revision": "71c3cb2cf5f5b0199c5fd9952be55c5c"
  },
  {
    "url": "assets/js/18.fb1c6a13.js",
    "revision": "97c9ffa087fabf512c54d8c7ed635565"
  },
  {
    "url": "assets/js/19.30fdec1f.js",
    "revision": "81c9f18ff4f2a2708de2ccf6944a56c9"
  },
  {
    "url": "assets/js/2.4a6e77df.js",
    "revision": "ef0c6f2f1f1098231aa5ac38ec307623"
  },
  {
    "url": "assets/js/20.6e331da4.js",
    "revision": "32c40ae76adf11bc90c0e6364132534a"
  },
  {
    "url": "assets/js/21.7b339d7b.js",
    "revision": "35d9f8da59bf4eafb357f0276287cdfb"
  },
  {
    "url": "assets/js/22.d2636e77.js",
    "revision": "16d75fd9683e879dea722d3284a2009f"
  },
  {
    "url": "assets/js/23.b0fa407e.js",
    "revision": "4135bad655b8d482d218379e69edd78e"
  },
  {
    "url": "assets/js/24.03d38d44.js",
    "revision": "8ed83271142c52ac5a243983c29f1301"
  },
  {
    "url": "assets/js/25.9292c75c.js",
    "revision": "03ce0ad07a38ebf045babd6ddc513c60"
  },
  {
    "url": "assets/js/26.2aa82096.js",
    "revision": "959155ceef136b3accb19a155a49be53"
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
    "url": "assets/js/33.3dcaec75.js",
    "revision": "8b34a617488ada8f006fc87f902fa2aa"
  },
  {
    "url": "assets/js/34.66021f2e.js",
    "revision": "e5d55749bd5b7a01821391a33b9a4655"
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
    "url": "assets/js/7.2ddad35b.js",
    "revision": "5c3d4497ff2add336b66705fadec5748"
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
    "url": "assets/js/app.98782623.js",
    "revision": "7a4ce65759a4f3cc48ed9e2e5d8f9286"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "4389bc5784159e76fd4c5707373ee8e6"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "b381131bbc6dde1cf6d27295965502c5"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "16e3aa7a65f349f9993c25c89c5438fe"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "de17e4afd73f18304312608a7fee530a"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "f38313bc982a8ad29f6cb5f533a27d8b"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "78e84fac992ecc9235223b7c87556114"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "015963b65aca92c79515534f1fdaaa5a"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "47e0000410ebd0744b2a2901e039b3f4"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "01868a7efbad6f402846e68284d535d9"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "4317b471cb3d68420d567412be2c418f"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "e27603a962d1ab4dbcd508dbf1b7ebea"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "f2d4387e84d226e26341cbb97a71fb83"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "1ddf615178739772010b6fa44e6224d3"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "82d5b0a720a0b647d8d12c3d4da681c5"
  },
  {
    "url": "base/practice/1.MongoDB.html",
    "revision": "151645bb01e1a4c45ab0674559cf151d"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "9323b9a85b06e8d84951daf4977bf81e"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "e4dea33fd84844c5bcf5d55449ce1655"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "2644e3562f62ca4c6c5199cd905de21d"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "7759ddbb9e6d1d0bc7afdd57ba90a3e9"
  },
  {
    "url": "base/practice/test.html",
    "revision": "1b05fbe4183f8d5a29d7d5e4f4ef4e4b"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "a4704b152327feecb5e268bf8d038e15"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "db1b742089104f6886b1078a63e58a1d"
  },
  {
    "url": "senior/typeScript/1.inde.html",
    "revision": "6251089ca3ec0c4d199a7c199e1141e1"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "5a988743d4c18c01b26993dacfce5854"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "eee914c8ace81d9632c790e06a04cbfa"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "bc94f358253ed827e36ebebe915c60df"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "20c6b51a48c375148033fe17e90c9185"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "10071f386bbee2ada5bb6201c4f7ccee"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "218481ca3532028687f8804926acb385"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "37f6f2a80bb704369792b630156b5589"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "ad2fcd529e8a8db307d83b1091c3d9ea"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "ad4010fbd9d52db1b6a55b5ed8e30f17"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "819624d89c089e1b539b76f5f0677693"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "d252a132792b537c3645b2cfeb5db3a5"
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
