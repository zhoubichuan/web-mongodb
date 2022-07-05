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
    "revision": "e016f14e8ad188702e81f7704711fd2c"
  },
  {
    "url": "assets/css/0.styles.1cc2edb7.css",
    "revision": "1210837f89a8ff291cfaad3b4e4806ad"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d932f0de.js",
    "revision": "35b9ba3d0da26ebc49a18518cc11bdad"
  },
  {
    "url": "assets/js/11.b75e87f0.js",
    "revision": "b35efc74c4e383a3928283eee56c8644"
  },
  {
    "url": "assets/js/12.58a4bfe0.js",
    "revision": "b568bc7f5d27f2834fe1b2de2f7ee525"
  },
  {
    "url": "assets/js/13.e2f8b744.js",
    "revision": "1d1d27905b9b9d43e18dc535d257fe64"
  },
  {
    "url": "assets/js/14.c581e6a6.js",
    "revision": "d65207311c7a0f00a4f06dd10b9ba09f"
  },
  {
    "url": "assets/js/15.185e3cbd.js",
    "revision": "33d2e750a96437e4a97d794a9136363b"
  },
  {
    "url": "assets/js/16.171d39c0.js",
    "revision": "c66272732f28cf6accf61bdfc1d2d4f3"
  },
  {
    "url": "assets/js/17.3daed6ff.js",
    "revision": "951d9625df6b6ed109342e1246c9a44f"
  },
  {
    "url": "assets/js/18.8955318f.js",
    "revision": "5d6ea536b0cc08a61afec3749f0666b8"
  },
  {
    "url": "assets/js/19.b601147f.js",
    "revision": "ba3169841f9dd4ef4201b82c0b71ec82"
  },
  {
    "url": "assets/js/2.5fc4c12c.js",
    "revision": "92430b2dc28725f2afd748ae895121c1"
  },
  {
    "url": "assets/js/20.7902bebd.js",
    "revision": "0dde925e8197d6a2afa0a6e2b0abc29e"
  },
  {
    "url": "assets/js/21.9eb21f0b.js",
    "revision": "d70ee0642f5d79ad064d0da4092074c1"
  },
  {
    "url": "assets/js/22.6b10cbc7.js",
    "revision": "d7beb368b2b4719472ded5d86ade7fe9"
  },
  {
    "url": "assets/js/23.f608a044.js",
    "revision": "fab2040535e3e30d090ae776e6be1f81"
  },
  {
    "url": "assets/js/24.77068dd5.js",
    "revision": "9652054e14a69c9b334db933671b55d8"
  },
  {
    "url": "assets/js/25.a271c0b6.js",
    "revision": "8e7890337a8cdcc76f6e52189f895367"
  },
  {
    "url": "assets/js/26.c0c352b9.js",
    "revision": "5aabba837c7bbf4921c30677b9cb2422"
  },
  {
    "url": "assets/js/27.6dbdad15.js",
    "revision": "b923e5fbc447168235e94b68f4887762"
  },
  {
    "url": "assets/js/28.4dcb3c17.js",
    "revision": "64384f400ceb912e3220c062574b63c2"
  },
  {
    "url": "assets/js/29.cd7e256d.js",
    "revision": "a22d08fd2075e9142e57c8b9401961b2"
  },
  {
    "url": "assets/js/3.7af90dcf.js",
    "revision": "d470ec890913af507a62f304ee42b5d1"
  },
  {
    "url": "assets/js/30.a96e47b8.js",
    "revision": "0693f3e2f4cfb636af094c6cc33f8e23"
  },
  {
    "url": "assets/js/31.ed8223ac.js",
    "revision": "e26b95222224495dfb327b7d91694214"
  },
  {
    "url": "assets/js/32.e7d7f357.js",
    "revision": "847704ce1d0949b36e657fcfe615ba8d"
  },
  {
    "url": "assets/js/33.49c3f651.js",
    "revision": "b5e568c17685dade567dfd9b67a49743"
  },
  {
    "url": "assets/js/34.77dc45e1.js",
    "revision": "7e7b4fd8341d797d4ab2d180a4848595"
  },
  {
    "url": "assets/js/35.f2cff53d.js",
    "revision": "60c8b3391a031adf0a870d2f83184a16"
  },
  {
    "url": "assets/js/36.b70d1aaa.js",
    "revision": "b4020bd90d4ccad00b8f6df8b799a535"
  },
  {
    "url": "assets/js/37.173f9c07.js",
    "revision": "524c585dec39c60ac1976062e34b7000"
  },
  {
    "url": "assets/js/38.7cc05dc5.js",
    "revision": "4c7cf3ea1e592c31372d375e7160d30c"
  },
  {
    "url": "assets/js/39.af8cef60.js",
    "revision": "b4db13e9ee6ba3472fea69ab2cff5cd0"
  },
  {
    "url": "assets/js/4.7605f29e.js",
    "revision": "32a19df9a0df752fb0f1e2aa3709e74f"
  },
  {
    "url": "assets/js/40.3ddb18c6.js",
    "revision": "698b1ca9a26a7a008c5a412fcea2c118"
  },
  {
    "url": "assets/js/41.bdd3c57f.js",
    "revision": "40c7728d086aea7a2a38da789f99e2fe"
  },
  {
    "url": "assets/js/42.38b8c316.js",
    "revision": "005d1c06b1220864c48c184b7967232f"
  },
  {
    "url": "assets/js/5.ed28116d.js",
    "revision": "7fdf0d6c4bf2705238ba3cbe4a369fb5"
  },
  {
    "url": "assets/js/6.72a169c2.js",
    "revision": "5fb1b48acdd2c7f0f51dd1b72dc3e990"
  },
  {
    "url": "assets/js/7.4155cfd8.js",
    "revision": "130d0893772c4e5e775b01388f7e8aaa"
  },
  {
    "url": "assets/js/8.9db36fde.js",
    "revision": "e5ba15e64dc50ba91c89304ac59ad9ca"
  },
  {
    "url": "assets/js/9.34460e32.js",
    "revision": "475bb17f6538f90d31d57e71893a68b4"
  },
  {
    "url": "assets/js/app.d4f4e3a2.js",
    "revision": "f8a3aba148c5459d478f9a7595308f37"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "e8389a5ea2bf26760e5387de2887f49c"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "a783e02df81ce0250d9cb5a8e992c5b8"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "dab8a20c282643ac88e8e86473db17f7"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "91c90749b29971f28fbb32c334c6c6f6"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "03ac595783897f2931b27ea667c2838c"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "d45ee54bb9c605b9a8cd4c840c46f28d"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "508a4300f003bb158bc0e07ddbfda160"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "94f6259edf5bd011bac5dc338ba5a95d"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "36bed6b89e5dffea4b1c92ce62b16f9a"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "84940f824a722569018c15b4b30ae7e8"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "a75a00e157db30b8a32c174141a200b5"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "3fe36d9dfe4fbc9445fc6cd13638a47f"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "4614dc9ae4fe32e0e20b6147b8d4e0ba"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "a39c5e8f074a6f1471b52e8c42b05a26"
  },
  {
    "url": "base/practice/1.MongoDB.html",
    "revision": "96f8b7af10015a3a93c46252372e5284"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "371565401c30f5ec37a6be57a1ee3dc0"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "43065d3b8abba1542ed162f39d1f32b3"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "ad852a802395b85aaaa4f61894e1533b"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "fd343fa51cd91e9c4f34d19018fa0db3"
  },
  {
    "url": "base/practice/test.html",
    "revision": "8f630bbc52a6e17a39c14071d3613d38"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "c76187a3e75e7373549094dce6799712"
  },
  {
    "url": "index.html",
    "revision": "7dff9a7c8dc3c4b8dfa9ebc8bbccd19c"
  },
  {
    "url": "senior/typeScript/1.inde.html",
    "revision": "845ac6ce1d0298cc1f6ce27546bf1ed4"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "9046ff62b14ad237ed935942fe7a9fd7"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "7c9020f6da728083dcd6f3e97f88d430"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "e59fb4442d244dfe84f0d8ebf3d65267"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "f9ab2e7c66889e52f0622da247ca0c0d"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "a47e8962c29b48ef38b4320161a1abed"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "68c99cd7ee8de63d027f975688237e47"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "8e782870bf287ff5d6fcb17a2690ecfa"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "56b42853e7a9a1226ce06d271bbf6f5f"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "285c0b3e9dac3d5a8a5ae532337858db"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "c2ea53d20cebe06674524daf52353f0b"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "76d6d2191088a558d6915bc9b9b01db1"
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
