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
    "revision": "63957f7e8ef32adbc107fb94d6c2b3c3"
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
    "url": "assets/js/24.27acf53f.js",
    "revision": "9652054e14a69c9b334db933671b55d8"
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
    "url": "assets/js/app.3d6de93f.js",
    "revision": "7fbcf7552326acd9302b62913d1cd156"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "68f3707944b1f157e7d83c21bc95fab4"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "e2e23cf955f2b3d254a8888690558107"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "b77e996fbfb437f68820d4eff854f932"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "730baef08450b4863b99152878259974"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "cc7411f9ce08f1f53f7cfd34f9a94339"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "b34b292d4188089f082431ca92e16dae"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "4bc8fc6a30bfd7e31bb19bda5ad4b07f"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "0ecbb6f4bc1fe593f8d0c057059cdaf8"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "d022e82b31c4de7698a6e5044bb0b8e0"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "ea0f75dc3c60612e8a41e24ad90cddaa"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "20b97ccf37fa84e0e70dc8c4ef2223af"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "ab9fcf50bbc6466e31942964bd7ec85f"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "6a2b38d4046b5f126346fa67206ed835"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "8ea39fdb0533be8289e1a378ff861b6d"
  },
  {
    "url": "base/practice/1.MongoDB.html",
    "revision": "6a47127e725450e2d4e34f22bc183194"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "1dd76ef70b0b314dd27b97ec60c8ad86"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "fe0f1f13fdbc08b6f701592e58a7bdcd"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "dab1833487ea7972c57ec9cabae42ad3"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "2288a0bfcbd329cc2ab8e49673ebafef"
  },
  {
    "url": "base/practice/test.html",
    "revision": "25b941b7ebb1d53f484bfcb97f5e0b29"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "0d744dc867d60e13e7eba6627d9752d3"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "a837b67500d419baf146357ea2482f4d"
  },
  {
    "url": "senior/typeScript/1.inde.html",
    "revision": "910cbfdbb28111689dcf66e298a9fe88"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "821860d8969aaecac22e6fa785c25be0"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "7cca0391160e8f6489c94ceade0a5d59"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "56ce8ec8c95bf3cb222c9c173725db65"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "73c42ef52c40817ac965e7d764237418"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "ddb06255e2be92fcc0793ce05ebedbf0"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "03d0b91cf3979c2c90423d4136b45e81"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "434c27e68db3ba197470f3381846dc21"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "793dc82b4b8a1bcbc95294daae3d82a9"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "67951fac6d54312fa30f8312a7bd59dd"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "372a0375923322f45e2be65dca2d6534"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "db5b8f4fc773643e5c2f58784468e669"
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
