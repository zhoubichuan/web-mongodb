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
    "revision": "a16cc446c4982877f5b5781e1de1b7db"
  },
  {
    "url": "assets/css/0.styles.fb28978a.css",
    "revision": "1210837f89a8ff291cfaad3b4e4806ad"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.64381398.js",
    "revision": "fe26f50b73bc60acf7e0ecdbf85edddd"
  },
  {
    "url": "assets/js/11.25c926dd.js",
    "revision": "b35efc74c4e383a3928283eee56c8644"
  },
  {
    "url": "assets/js/12.9c584b7a.js",
    "revision": "b568bc7f5d27f2834fe1b2de2f7ee525"
  },
  {
    "url": "assets/js/13.7534c0ab.js",
    "revision": "1d1d27905b9b9d43e18dc535d257fe64"
  },
  {
    "url": "assets/js/14.29b5ff3c.js",
    "revision": "d65207311c7a0f00a4f06dd10b9ba09f"
  },
  {
    "url": "assets/js/15.125ecdae.js",
    "revision": "33d2e750a96437e4a97d794a9136363b"
  },
  {
    "url": "assets/js/16.61663ed5.js",
    "revision": "c66272732f28cf6accf61bdfc1d2d4f3"
  },
  {
    "url": "assets/js/17.77644327.js",
    "revision": "951d9625df6b6ed109342e1246c9a44f"
  },
  {
    "url": "assets/js/18.f50dd370.js",
    "revision": "5d6ea536b0cc08a61afec3749f0666b8"
  },
  {
    "url": "assets/js/19.2d67a31f.js",
    "revision": "ba3169841f9dd4ef4201b82c0b71ec82"
  },
  {
    "url": "assets/js/2.bc2b38cf.js",
    "revision": "eee17f2dcfb938df51d319de5ad24f7d"
  },
  {
    "url": "assets/js/20.0e681521.js",
    "revision": "0dde925e8197d6a2afa0a6e2b0abc29e"
  },
  {
    "url": "assets/js/21.8ec51d42.js",
    "revision": "4c3a02327101f0d87ce04ee5b12aee5a"
  },
  {
    "url": "assets/js/22.5ab02582.js",
    "revision": "d7beb368b2b4719472ded5d86ade7fe9"
  },
  {
    "url": "assets/js/23.0ae804a9.js",
    "revision": "d284df723e2b5a66ef0d96f2f81046e7"
  },
  {
    "url": "assets/js/24.f4d7295d.js",
    "revision": "272693d42ef29a4da6e26db6d6c217d3"
  },
  {
    "url": "assets/js/25.3dbbcfb8.js",
    "revision": "8e7890337a8cdcc76f6e52189f895367"
  },
  {
    "url": "assets/js/26.672f1000.js",
    "revision": "5aabba837c7bbf4921c30677b9cb2422"
  },
  {
    "url": "assets/js/27.efe68096.js",
    "revision": "b923e5fbc447168235e94b68f4887762"
  },
  {
    "url": "assets/js/28.ff4452b2.js",
    "revision": "64384f400ceb912e3220c062574b63c2"
  },
  {
    "url": "assets/js/29.e5bb6aaa.js",
    "revision": "a22d08fd2075e9142e57c8b9401961b2"
  },
  {
    "url": "assets/js/3.5fec0cf3.js",
    "revision": "e56b3106fb2a09eb39642e3f4fc07ae2"
  },
  {
    "url": "assets/js/30.84b72806.js",
    "revision": "0693f3e2f4cfb636af094c6cc33f8e23"
  },
  {
    "url": "assets/js/31.080a6f25.js",
    "revision": "e26b95222224495dfb327b7d91694214"
  },
  {
    "url": "assets/js/32.dbd829f8.js",
    "revision": "847704ce1d0949b36e657fcfe615ba8d"
  },
  {
    "url": "assets/js/33.75fd230f.js",
    "revision": "b5e568c17685dade567dfd9b67a49743"
  },
  {
    "url": "assets/js/34.98015ed7.js",
    "revision": "7e7b4fd8341d797d4ab2d180a4848595"
  },
  {
    "url": "assets/js/35.63b8e601.js",
    "revision": "60c8b3391a031adf0a870d2f83184a16"
  },
  {
    "url": "assets/js/36.7a72e1ee.js",
    "revision": "b4020bd90d4ccad00b8f6df8b799a535"
  },
  {
    "url": "assets/js/37.ca12eb48.js",
    "revision": "524c585dec39c60ac1976062e34b7000"
  },
  {
    "url": "assets/js/38.30a5c319.js",
    "revision": "4c7cf3ea1e592c31372d375e7160d30c"
  },
  {
    "url": "assets/js/39.c0eb205c.js",
    "revision": "b4db13e9ee6ba3472fea69ab2cff5cd0"
  },
  {
    "url": "assets/js/4.ff6709ad.js",
    "revision": "32a19df9a0df752fb0f1e2aa3709e74f"
  },
  {
    "url": "assets/js/40.4fd38f1f.js",
    "revision": "698b1ca9a26a7a008c5a412fcea2c118"
  },
  {
    "url": "assets/js/41.5db8bea5.js",
    "revision": "40c7728d086aea7a2a38da789f99e2fe"
  },
  {
    "url": "assets/js/42.6e225a14.js",
    "revision": "005d1c06b1220864c48c184b7967232f"
  },
  {
    "url": "assets/js/5.18f2e1fe.js",
    "revision": "7fdf0d6c4bf2705238ba3cbe4a369fb5"
  },
  {
    "url": "assets/js/6.35df17b0.js",
    "revision": "418f01fed6444f8fc11480552872b529"
  },
  {
    "url": "assets/js/7.d3958398.js",
    "revision": "a0b6f6d35fd185b23865c97cf494a3ee"
  },
  {
    "url": "assets/js/8.13fdbceb.js",
    "revision": "e5ba15e64dc50ba91c89304ac59ad9ca"
  },
  {
    "url": "assets/js/9.69924dc7.js",
    "revision": "475bb17f6538f90d31d57e71893a68b4"
  },
  {
    "url": "assets/js/app.44900397.js",
    "revision": "d519bf5080849d4658f9cba991d0f860"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "34c153715fda7cbf8364f7535ce64c59"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "f55e3cb7391e9e7ea75855620a1e2175"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "c5b00707989df246a828b872566aa93b"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "02e84604abeab6c542e47ef953fca216"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "bcbecca350906f56f27cb3ba67700a6a"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "acc983889c44a2fcd736a51a97ad4222"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "c9f5acd0ab2f0d96e3c1d8dac9435bbd"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "ad694af926526152a113f54638c81e25"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "fc877f6798649e65e4ee102c185f3002"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "5fe3d9171ea26c799a1bef6b3e6ffc22"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "380e5bbba2fd3184449a874598f9f17b"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "889dbdeb3cc37a2cf8373c4e9ad1c7cd"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "c7179d0d6c6ff4554d02bd7e8110130d"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "0da93adce4b91d54b12cb9c06a65acab"
  },
  {
    "url": "base/practice/1.MongoDB.html",
    "revision": "7009f30a40ca53fb604553f2d3751b3b"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "205cb2c6ef1c358a5712dcf6a2c34b82"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "814130469c8fd471df6c9d6cf89d1562"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "ee9399e4070e847fe774244a4c7e47f7"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "d4474c363ddfff2dc4f90425547ccbe9"
  },
  {
    "url": "base/practice/test.html",
    "revision": "c68b4a31cd9454287dd426f3cb3f27ee"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "4095d97bbd5f1fb78aa046e5b92494ce"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "1683ca17abb250075def20ab6977462c"
  },
  {
    "url": "senior/typeScript/1.inde.html",
    "revision": "36734bc330448cf59ad6de8bdf546378"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "78670cc4611336057eb741f29c3818a8"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "ef5af6ef22f01eaa8bde28934cd5e4e9"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "90fafe4aca9f1dd24e641fea9b2af672"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "ce7d5f63837865736ccc128eb20231b2"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "2dda49eb0127bb548daab4b42368b997"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "5b6cbaec24674b3acba890cf728e4f3a"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "8eee6e0aacde3439b72eb2c77b2e9089"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "f07bf46b731f5c24ca19d7de1ec89d64"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "e8083146176c79ace8ed2e3990331e9c"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "675312b9fdf348a36b0dae30290fd729"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "e378017788d0706e4c5ade16cbe64b9d"
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
