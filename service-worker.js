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
    "revision": "04bdd42741af806ee1989726ea7b7022"
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
    "url": "assets/js/10.a5a0e9c9.js",
    "revision": "618f9f88f80ee05750d80142c4159ccc"
  },
  {
    "url": "assets/js/11.44d4ed6f.js",
    "revision": "8133a4753b725456ca0a26f39fe68ebc"
  },
  {
    "url": "assets/js/12.e56ced9c.js",
    "revision": "3b5e5f27fcc48d9f11527a8b1f5e67d6"
  },
  {
    "url": "assets/js/13.4566b7da.js",
    "revision": "33a9c713996fa51a28c424b93253c89e"
  },
  {
    "url": "assets/js/14.adfe9a4f.js",
    "revision": "e3c3a8cf173065466d4e71b99dd93f39"
  },
  {
    "url": "assets/js/15.70bcd7be.js",
    "revision": "f52ad5e1a7142520a4dd7d92d5267b56"
  },
  {
    "url": "assets/js/16.4ebb688e.js",
    "revision": "5371042e4ccae082da8d3a5216fbffe9"
  },
  {
    "url": "assets/js/17.ac94d8f8.js",
    "revision": "149e7d3693263160caa37e34e76c16ed"
  },
  {
    "url": "assets/js/18.b1e273dd.js",
    "revision": "008ae1e6c648c96ea7b58f20d5bbebe0"
  },
  {
    "url": "assets/js/19.69132b88.js",
    "revision": "02ca16ec9fd2236a13f1df939cf9cd15"
  },
  {
    "url": "assets/js/2.4a6e77df.js",
    "revision": "ef0c6f2f1f1098231aa5ac38ec307623"
  },
  {
    "url": "assets/js/20.5f6ce476.js",
    "revision": "9bfdd9154b92f661eb17c6e2a3b29b52"
  },
  {
    "url": "assets/js/21.0d7ab556.js",
    "revision": "3239b89a7c3b450f72d058c09d44c4ba"
  },
  {
    "url": "assets/js/22.d72af173.js",
    "revision": "019fde7724176ce1cf336a248472170d"
  },
  {
    "url": "assets/js/23.33a982c9.js",
    "revision": "c55ae4c8ab51d8911593c293247a1dcd"
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
    "url": "assets/js/7.4a01d4f6.js",
    "revision": "5d359fcfb61edd1bb3a14b92317c3bee"
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
    "url": "assets/js/app.362387ed.js",
    "revision": "6f12c786ee8603210c23fb9a18fba423"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "ba8c8e373e43f6e97f5181705c2491d2"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "c6a7d5c9c88b25492843a20ebe9acac3"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "c6a70e5ec810fd9a8b2bb20fa01f484a"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "72d16d4b26c2568e7492a170943b9329"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "fed0e1ba3c687ea33faf9e4883d9fe06"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "bbf3bb661ae8f7e87236a297540d1a91"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "00643c1db12cb4b774476c9a58827376"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "df4396737d4debd230f43fdd9e72f16e"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "0b568083474371cf5fe7302f810eca34"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "8a8aa950d943c406f49e6de2f642e6e6"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "c61f6be494b55f3bce923bc1d59fc587"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "d94a6b32fc5b088406b5995545c93bec"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "bb8605e7a585b2e7706f012475d17282"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "aa263c357e6f6350e00094505096eb19"
  },
  {
    "url": "base/practice/1.MongoDB.html",
    "revision": "dfd9d3aa7dd88d37c375b564f7e8f46e"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "03bf5a35e315ab8d28edd67b9ae10788"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "b3ef41b4ec2a094f11a6647228d2cab8"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "7368e22b3cfe981b005e518cbfa46ff8"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "0f334aeb7982af527f1a3f7173043da1"
  },
  {
    "url": "base/practice/test.html",
    "revision": "7559f9f41a4a1af65e6d8df15b6c9001"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "89368487ca93e23ac55234c2a89d9d6d"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "6847a0be1f715c3f21df7dffd027e891"
  },
  {
    "url": "senior/typeScript/1.inde.html",
    "revision": "ff1600a983eca163e46faf8840dc3d40"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "4a96d5cbd3cbc1a635f87b32b1e3e79b"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "6726cb04bb9383da352ff73c31769f48"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "546fe0dc579a87627c7b596c0f43a037"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "65a9a69f854e3481f5726c033d68fc3c"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "d0dedd624e472479146cb4f64f01dfd5"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "0b191d88bd9c5eda909880b4ca7e3bbe"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "3b45e10c1b1e820b763f423680f2b7fb"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "1dcbf7903ae443c9b8c397afb75a8fd4"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "a71cff0095dd6f06608b049a3ffef253"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "1db3c9819d24cac17a72040d0297a7df"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "47a3387edae59689b380f29e2209d720"
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
