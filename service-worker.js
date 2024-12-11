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
    "revision": "132f087b4dbbfb66a9d558f8c2d6a2f2"
  },
  {
    "url": "assets/css/0.styles.8b547b9c.css",
    "revision": "cdddc895f0ecb7ee8da226822d0520d3"
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
    "url": "assets/js/1.d82ad928.js",
    "revision": "3b323631b925acb5b92d7031acfc7111"
  },
  {
    "url": "assets/js/10.07488b37.js",
    "revision": "c776b82cd56b1f01388c6f251eabc48e"
  },
  {
    "url": "assets/js/11.0255dd6c.js",
    "revision": "7bf25b9c7e2c6f1b427988b73e0170a4"
  },
  {
    "url": "assets/js/12.9042e3f1.js",
    "revision": "da42e68b8a6ddd1a2c5934da94e831b1"
  },
  {
    "url": "assets/js/13.d31a9848.js",
    "revision": "ebf93a522e1c1512d7ae78772605613a"
  },
  {
    "url": "assets/js/14.289b3212.js",
    "revision": "f36c42956a045d28a3fb31ab19b2d376"
  },
  {
    "url": "assets/js/15.90495e72.js",
    "revision": "eadec24f2864611fc5c2fbb8fe73da91"
  },
  {
    "url": "assets/js/16.19ac10f4.js",
    "revision": "e325fe56f4d45fa1bace4c1f9f50dac9"
  },
  {
    "url": "assets/js/17.c6b0bc43.js",
    "revision": "4ae0551e35131c06c3cbd6a726c35dd9"
  },
  {
    "url": "assets/js/18.d12dff04.js",
    "revision": "e9a1cc8c7c2f21fdb227a76c344b74f5"
  },
  {
    "url": "assets/js/19.423c432e.js",
    "revision": "1b2be7371360493f445c16000c86f525"
  },
  {
    "url": "assets/js/2.e505b324.js",
    "revision": "7f65c9396a816e2da023dfb0b84ef2e4"
  },
  {
    "url": "assets/js/20.ea96e2ee.js",
    "revision": "d01b1b6962b2460f9db2d11c28214b92"
  },
  {
    "url": "assets/js/21.aa36733b.js",
    "revision": "3f6cdfd61fcc7af4de5243d22b9ac10a"
  },
  {
    "url": "assets/js/22.fdaecea3.js",
    "revision": "b60d8a61e067e3eceedd6dfa06f316a6"
  },
  {
    "url": "assets/js/23.7ae6bb37.js",
    "revision": "8d52c989eae0ba0eaae9dea772cc4422"
  },
  {
    "url": "assets/js/24.60026f1f.js",
    "revision": "1962d25aa79ddaa36eeea4aee677ba22"
  },
  {
    "url": "assets/js/25.dfda019d.js",
    "revision": "ad72939e1004db2246172c6d706a59ef"
  },
  {
    "url": "assets/js/26.e0b1ec58.js",
    "revision": "d4f836ac05d9059b2afa3979bbf03260"
  },
  {
    "url": "assets/js/27.39b10ea4.js",
    "revision": "4c54cc7c78d0c39048049c394d978362"
  },
  {
    "url": "assets/js/28.07866b18.js",
    "revision": "ebe5a3f79b294b5983459d3c3721727f"
  },
  {
    "url": "assets/js/29.2e047476.js",
    "revision": "6aa26bdb250aef3b17a0b5653f219396"
  },
  {
    "url": "assets/js/3.0f58868d.js",
    "revision": "a52d2824c3cc7a788854b52bd0ec7798"
  },
  {
    "url": "assets/js/30.81775a67.js",
    "revision": "12fdacdd4653f8c6cde6685f637f4585"
  },
  {
    "url": "assets/js/31.74bd8b78.js",
    "revision": "a6c9537d7cd3180d240f694a36309173"
  },
  {
    "url": "assets/js/32.1148de68.js",
    "revision": "eb6cba063188d58df113e973b184f364"
  },
  {
    "url": "assets/js/33.47118eca.js",
    "revision": "5b9a7be56b4591befa208252e5847b48"
  },
  {
    "url": "assets/js/34.33bc8905.js",
    "revision": "59b6a93d4b5d57252caa3a4ff309d658"
  },
  {
    "url": "assets/js/35.136af57d.js",
    "revision": "81d09ad12c7fe74bc9751842fdadba90"
  },
  {
    "url": "assets/js/36.2601159e.js",
    "revision": "5d7948e233f831fda9008c88b1805dbd"
  },
  {
    "url": "assets/js/37.399a9e53.js",
    "revision": "1e079368f315dcc9b9cf5044de435fe3"
  },
  {
    "url": "assets/js/38.5fedf1a6.js",
    "revision": "9c6d283935843763d1b04950d351461a"
  },
  {
    "url": "assets/js/39.a63158d6.js",
    "revision": "018e03faf23ef7b2666045b3bed31df9"
  },
  {
    "url": "assets/js/4.a531d3f3.js",
    "revision": "0fe4b37145105d1660d9d49e65ce9429"
  },
  {
    "url": "assets/js/40.5f23000d.js",
    "revision": "edbdc0b073dcc9863667ededeb98e0fc"
  },
  {
    "url": "assets/js/41.03681177.js",
    "revision": "58ec77ce7d4cff2ef8310eb0c814640e"
  },
  {
    "url": "assets/js/42.6bc36641.js",
    "revision": "68abe1b45902a2cfedbbf588828640af"
  },
  {
    "url": "assets/js/43.daa2118d.js",
    "revision": "87be06a634883a8ddecfcdc160d6edf7"
  },
  {
    "url": "assets/js/44.d9962d55.js",
    "revision": "fceff671147791634cbdabbea95f8b84"
  },
  {
    "url": "assets/js/45.223f76ba.js",
    "revision": "6612d18675309c45709276ec91351647"
  },
  {
    "url": "assets/js/46.61dac159.js",
    "revision": "ca54967b6bc52fb44d868f0de690575c"
  },
  {
    "url": "assets/js/47.cca199c5.js",
    "revision": "5216fe2a9518bda5a37f95f9e7085818"
  },
  {
    "url": "assets/js/48.24ac468c.js",
    "revision": "19db7aa5ed038252b87d128fce0fdf0c"
  },
  {
    "url": "assets/js/49.aec506cc.js",
    "revision": "2671792d4aedefd1610798cf08b359dc"
  },
  {
    "url": "assets/js/5.6875c607.js",
    "revision": "2f2fb01347752baf5687406c3a1f36c8"
  },
  {
    "url": "assets/js/50.df427311.js",
    "revision": "2e7163192a75640187a0439d8f35aed8"
  },
  {
    "url": "assets/js/51.162f6da2.js",
    "revision": "b03c9e26bcfa0488061f45335b87a0f2"
  },
  {
    "url": "assets/js/52.f331152c.js",
    "revision": "09106c357c63e36850add922c37200f5"
  },
  {
    "url": "assets/js/53.0aff601f.js",
    "revision": "d500775da49cb4e96625895a8563b7d2"
  },
  {
    "url": "assets/js/54.dd9fac7f.js",
    "revision": "c6f1daff20d3476abea634a03e96afd8"
  },
  {
    "url": "assets/js/55.524e548a.js",
    "revision": "6d7809f8e0e9b9a9c1f3faca903efb21"
  },
  {
    "url": "assets/js/56.41c7d6de.js",
    "revision": "8c9eceb18a7d94973780228240205df1"
  },
  {
    "url": "assets/js/57.f9bb5b50.js",
    "revision": "4ab454cfcb5acb710ad753fb26314932"
  },
  {
    "url": "assets/js/6.6bbaec93.js",
    "revision": "3813560b0c18448764f29b17b2167351"
  },
  {
    "url": "assets/js/7.51c3fffd.js",
    "revision": "f4db87322343d18d2bd84e73fff0bd3c"
  },
  {
    "url": "assets/js/app.3610ee7f.js",
    "revision": "11e0cad50c510e1a3c00e4903e30d897"
  },
  {
    "url": "assets/js/vendors~docsearch.e5a46125.js",
    "revision": "a5622cdb7b61f037abdb4898f5731f1c"
  },
  {
    "url": "base/build/1.index.html",
    "revision": "99a56876f36084511f6b6cf0c73ef1e5"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "190186b7092e28e8645c15a41a6481a9"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "3356f04b14ccc982f0fc4edcc75dbb48"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "1291b4dcb8b7ba9f6761e236d241c382"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "7c1b2e1aecb482b23b0d81f0b9bde6d1"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "8e726e1407793f8142ef79aad29700c7"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "925c5d2e81f1cf2584146160471c3d1a"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "9ab853833de6ce10d76026c232090c02"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "ed1240b51771a1872ae71ec774e238d6"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "2dd949031557afad7b4d6a20d7006637"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "7e67d235232b16768ece11d257b1c49d"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "51645e5f47dd424beb5dbd3570f538fc"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "ccb42e693f3f315a2e32931053d76a3d"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "1fe4b73dc0ec6cdfe217e337d7eb1fc6"
  },
  {
    "url": "base/practice/1.index.html",
    "revision": "2be21d4f47953c98c6b9977864597a56"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "09226ccf864310b91bb8b27fc89c96d4"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "55ada9ba4a88c096cd4796182ae27feb"
  },
  {
    "url": "base/practice/egg.html",
    "revision": "2803dd518613c51d6a4500976737a584"
  },
  {
    "url": "base/practice/express.html",
    "revision": "a9355ad2a91e4d7b4dc9b6977e38e25d"
  },
  {
    "url": "base/practice/koa.html",
    "revision": "8d1e496ca53a1b8d83051b81cc210af9"
  },
  {
    "url": "base/practice/node.html",
    "revision": "77da4046be1e19ebae905193a45e3e19"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "08e5a3a0c784d9e47f8983057ae20a7c"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "4c389727e62535d47ad9e67680dbccf1"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "145f70f7ff23bb384fc6e62b1564a3ed"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "cb66dacf668e5f80dc4108960064c590"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "500a12525ce22edf4c9df03c6b470107"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "5303654f1c241bc6adfe5a5682032aa0"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "bfa8e229189c738f654b749e3b05279c"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "31d26466a233fafd1acf0981326897d9"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "6490a2eb03954e35a7e1821bac0a1dee"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "fda9e66bcac95ad96037213c72d28c65"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "4c34cf2a3ea73c36f2aba3816d2218e5"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "9eda2939ad8e2f26301be58254e5cadb"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "97a14b911b5a295ae736085be3f4983e"
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
