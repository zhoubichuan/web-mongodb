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
    "revision": "9feb84edddc4b4f18927c29fcf9ebe09"
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
    "url": "assets/js/app.15ca72af.js",
    "revision": "2cda2889b1ef1e8945c038a0f726c318"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "2216985d05b9010d437fdac74a15344d"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "6ad29ef67e50d2d80f30203c84582d84"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "5cc264162da8dd483a9f35a8165639c6"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "fe3b94c701aab5141cfef4993325676b"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "1c2347491246698a460d2178fd55d4c2"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "775b365281272fad87bb361d43c6a798"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "41dcd890ede7a3e99390416fc12da8f2"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "915f323b45a5da375bc984dd708622a5"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "1278f900392330599770fc08eaf80b73"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "86619edec52a2fec940da3768e4c79de"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "87bf4adc2c1e9668dfa4b7710800b442"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "5e03a1f451bc4db7f520a78a9e12554e"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "233652cc6129ac0783f6f103a68e1054"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "f3322e4c5ac04037c6cad2d2b3b3fa15"
  },
  {
    "url": "base/practice/1.MongoDB.html",
    "revision": "96efface09bc3bfd3ca923fe6bdf14a8"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "22206abc94d124250847c1149d0accdc"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "77a5eabd26828ac69fc75259ba1b4c2c"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "c5ffe9ab67feb844794bf8cf49d20b0e"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "2897339f442ad41ec32a6ee659dc4851"
  },
  {
    "url": "base/practice/test.html",
    "revision": "e4ae2c7d9a3150eeaed641ed006b2eda"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "8de9e697f8373bdb4520bc20ea64364e"
  },
  {
    "url": "index.html",
    "revision": "09dbd7903c242fd4ae70d1db276faee0"
  },
  {
    "url": "senior/typeScript/1.inde.html",
    "revision": "b6e163e6ac7c800534e5f7d49c85910b"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "062e7b9d2b6cc055acb3c43c83900126"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "82ae270fe911216971ccd796a9ff0318"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "6b65b026596e18d91df5f02e6e8892f9"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "35e67ebe3cff9e050432e4fb159e23e7"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "3091252e1a4ba960197bf4b492bc9cfe"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "63ffa980efa95f04f1b8676db0a7b92a"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "ec4464d23804aec91a815f5493342800"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "8ea6caec5d70972e62a1dfc868a6f950"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "4e6ac2633e082913ffd79bcc15e8407f"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "e0b86012928bdfa9fb76debc1763eb9a"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "8fef60acfd1782eb36a5c9caf7f7afe6"
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
