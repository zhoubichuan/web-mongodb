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
    "revision": "a1a276af38003562378c05d508cbf224"
  },
  {
    "url": "assets/css/0.styles.412a3f04.css",
    "revision": "5ecc9a649b2d627eb0295c2880bb1061"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.54fb086f.js",
    "revision": "93c32f909b18cab702a3e381212a2cb2"
  },
  {
    "url": "assets/js/11.921b2312.js",
    "revision": "faaf6923605666f917e11f1ede8b1cfc"
  },
  {
    "url": "assets/js/12.66cf4b4a.js",
    "revision": "4c471b74a7f37d20e0d57fc3596e6428"
  },
  {
    "url": "assets/js/13.0eca9051.js",
    "revision": "3980f95834f4ffde9b22c51542ef079e"
  },
  {
    "url": "assets/js/14.850db4f3.js",
    "revision": "447d406321a67fb421ef87309004c1d6"
  },
  {
    "url": "assets/js/15.77991594.js",
    "revision": "41ef66825a4cee4fa98c9ebca509858c"
  },
  {
    "url": "assets/js/16.3d7627c7.js",
    "revision": "87715f362a548789419b7c1262f776cd"
  },
  {
    "url": "assets/js/17.a3b857f7.js",
    "revision": "dae1f2621488dd4947003f4b8653a6fd"
  },
  {
    "url": "assets/js/18.dfffe59f.js",
    "revision": "32e9a1bf2506e78471d51ba7f8fd5e83"
  },
  {
    "url": "assets/js/19.552a9cfb.js",
    "revision": "e5e408fe4151eb4f57eaa1f93b56b390"
  },
  {
    "url": "assets/js/2.1ee4d6d3.js",
    "revision": "32b56962650a9086b664f5397c6d0fa4"
  },
  {
    "url": "assets/js/20.c2bc8234.js",
    "revision": "316bba444c20c7bd87d84e4d4b4879a0"
  },
  {
    "url": "assets/js/21.d5dabce3.js",
    "revision": "d3f99c9383f1b1c529e14ee6b1c56f2e"
  },
  {
    "url": "assets/js/22.92e4a915.js",
    "revision": "53b94e285b38f76e3ef53ae68310bb7c"
  },
  {
    "url": "assets/js/23.c8b798e8.js",
    "revision": "9e36742b0b8c425e6ce3851c6754cff6"
  },
  {
    "url": "assets/js/24.bb851deb.js",
    "revision": "68e882a51d2a9437bc99b0b921e886c6"
  },
  {
    "url": "assets/js/25.0051b9bc.js",
    "revision": "a8a52267dcdbe8f8600747720111258e"
  },
  {
    "url": "assets/js/26.6c30b6a3.js",
    "revision": "4f9e7682f4c37c24bd618962bcc48d91"
  },
  {
    "url": "assets/js/27.2d9ca7bc.js",
    "revision": "8fac464666285cfcff06493ca8643c3e"
  },
  {
    "url": "assets/js/28.75965250.js",
    "revision": "f50901f31c59404b5c9f53bbfce90edc"
  },
  {
    "url": "assets/js/29.92b0b466.js",
    "revision": "669efadea8b53202d5c67be2aa5b7bb3"
  },
  {
    "url": "assets/js/3.0c6458ad.js",
    "revision": "61c28c61cf2ffab22b3d1cab51c4b147"
  },
  {
    "url": "assets/js/30.e7e74d03.js",
    "revision": "67faf9a0ede9548eb98c28d8f3b55a01"
  },
  {
    "url": "assets/js/31.fbfd05b4.js",
    "revision": "c0f45f05af5d04585c3a1c98eac7553c"
  },
  {
    "url": "assets/js/32.182d60ec.js",
    "revision": "6cbd3f4ecfb75f81adaf5a731800f193"
  },
  {
    "url": "assets/js/33.3e435e28.js",
    "revision": "6e2735154e462a3c8a9cf0bb38469602"
  },
  {
    "url": "assets/js/34.22c12421.js",
    "revision": "24ce70f64ac4d6cde9f663acf97e631e"
  },
  {
    "url": "assets/js/35.cc3101d6.js",
    "revision": "e0b86b6b089dfa3584cd2e37c31195ab"
  },
  {
    "url": "assets/js/36.ea5c4a9b.js",
    "revision": "993c8949835b40bff1ec287a69e2fd06"
  },
  {
    "url": "assets/js/37.7d7399fb.js",
    "revision": "20e49fba1c13265f0d0888b5f0240314"
  },
  {
    "url": "assets/js/38.0665076d.js",
    "revision": "cde3333aa4fad591379a2cbcadd051a0"
  },
  {
    "url": "assets/js/39.316ef617.js",
    "revision": "f992404d40e75ee83f74c3be83f0fef1"
  },
  {
    "url": "assets/js/4.62f13161.js",
    "revision": "32a19df9a0df752fb0f1e2aa3709e74f"
  },
  {
    "url": "assets/js/40.7e856aa0.js",
    "revision": "e1d6f0bbfe6da9cf306ad476f7722fc7"
  },
  {
    "url": "assets/js/41.80a981fd.js",
    "revision": "c1d386829cd00214de968ed7144efdef"
  },
  {
    "url": "assets/js/42.38b8c316.js",
    "revision": "005d1c06b1220864c48c184b7967232f"
  },
  {
    "url": "assets/js/5.b968e2ce.js",
    "revision": "0cfef493d8e6c42f6fd99a590b48ebc9"
  },
  {
    "url": "assets/js/6.2d1f614c.js",
    "revision": "282a9b8243d6da2ca38de20ccd8ddb21"
  },
  {
    "url": "assets/js/7.5e217abe.js",
    "revision": "7c56f6dcd42710efc723320f05338b14"
  },
  {
    "url": "assets/js/8.e796c565.js",
    "revision": "763fafc8a90637ac226ce7e85bcc9a07"
  },
  {
    "url": "assets/js/9.9a04d820.js",
    "revision": "09c5f4579744ee0943909b7ae10db28d"
  },
  {
    "url": "assets/js/app.418d3c31.js",
    "revision": "45c2c0114cf8f615bf2e81e004f7bef9"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "9c9ffea0125b4f594050dc9c8400a6ee"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "5b728341f1bf8fc8d3aeac781c856c62"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "1d349ca8403fe4b4f37f18ce7dc5b393"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "e4419523e2a6dc51c13f0c4fbfbf3525"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "03f9d29ba4aae04563081906a5e54995"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "26cdfc7dd455de50facc1bbb9afed2de"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "ac64acd8f4df73c989b5a29882d8a60e"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "9e6b6c6e12549f11563d6aff17ec48bf"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "f281ce2207ffea6d98a0b245c07c6f50"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "aab073d3de92ac435978d6661d8b7d6d"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "f1537dff762ded397355c9b25c9011fb"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "7a9f1592fb92af3cc2d5cb0b7eb96344"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "d24b403f8d152b5850c1707f7eae4bc2"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "014909790a215ab5a049bc8cc85d59b9"
  },
  {
    "url": "base/practice/1.MongoDB.html",
    "revision": "e10c8e0d487c52fe9a91aa841177c59a"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "f6a8c1c712ba737e27b9e846f9d2a9ef"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "d051e99ce6c1e7a44a39eb50349dbaa6"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "c416cb315443b393f8f9edb620be253a"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "1d375bdc35867ef3740a3586684bf579"
  },
  {
    "url": "base/practice/test.html",
    "revision": "5c5f9878a7493b9bb2bfa22b915a5f6e"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "8c1d9054a9b2966b887098201eaa0299"
  },
  {
    "url": "index.html",
    "revision": "9392286fac971df0cb69d8551239f2b4"
  },
  {
    "url": "senior/typeScript/1.inde.html",
    "revision": "8d740b735fc712361fff3555523781c2"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "363b729f45ca429f14204c02a6febeb9"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "b1d2cb363475e5ea887e2118179ca3aa"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "2322806f8a404a553f3e955d75ef9114"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "e9d9e722747eb2833e44e91d7d4c4878"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "83e71bd872145528b996d74e0d38255b"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "3611dc4a2a2cfd21d65b80d991933f3b"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "d3c2418240e0950dd8a265960b243619"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "e4b08cad1da3165e4ce2389434fc2ade"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "2ec1fa768f8419892c35ce4dbf2f7db4"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "d1788c90633193d08e46297f23b11b56"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "f70e14f8e1931dbf0e59be4550e8ba00"
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
