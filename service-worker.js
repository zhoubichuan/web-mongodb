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
    "revision": "dd0c0bc1c6e8e67b1eeb2f6d34999b9a"
  },
  {
    "url": "assets/css/0.styles.df5c7ee7.css",
    "revision": "1210837f89a8ff291cfaad3b4e4806ad"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.05b3464f.js",
    "revision": "25fae3339042321798f1a72448195fc1"
  },
  {
    "url": "assets/js/11.5af506d8.js",
    "revision": "00937ca3166537bf02fcb78694c37db7"
  },
  {
    "url": "assets/js/12.44ddaf32.js",
    "revision": "ca5b4a1d81753ffd2f615fd3488342fa"
  },
  {
    "url": "assets/js/13.26ad8fee.js",
    "revision": "72817d2d5d01790db8dc320cca691ca3"
  },
  {
    "url": "assets/js/14.a65d3f99.js",
    "revision": "5f51f5d9aa41aebf5bf80803ca51da19"
  },
  {
    "url": "assets/js/15.daba2057.js",
    "revision": "af7221cf9f4a54fa1f47eec7a22337e5"
  },
  {
    "url": "assets/js/16.55984f40.js",
    "revision": "dcf07ab689b7f19dd08980ee353a0d61"
  },
  {
    "url": "assets/js/17.3b7af280.js",
    "revision": "925f096937fb8bd75f25b234e7a756f0"
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
    "url": "assets/js/2.7e130fad.js",
    "revision": "eee17f2dcfb938df51d319de5ad24f7d"
  },
  {
    "url": "assets/js/20.7902bebd.js",
    "revision": "0dde925e8197d6a2afa0a6e2b0abc29e"
  },
  {
    "url": "assets/js/21.f2d74cf1.js",
    "revision": "4c3a02327101f0d87ce04ee5b12aee5a"
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
    "url": "assets/js/3.4bd6d40a.js",
    "revision": "e56b3106fb2a09eb39642e3f4fc07ae2"
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
    "url": "assets/js/6.00a3da53.js",
    "revision": "418f01fed6444f8fc11480552872b529"
  },
  {
    "url": "assets/js/7.d2844af6.js",
    "revision": "a0b6f6d35fd185b23865c97cf494a3ee"
  },
  {
    "url": "assets/js/8.9db36fde.js",
    "revision": "e5ba15e64dc50ba91c89304ac59ad9ca"
  },
  {
    "url": "assets/js/9.37d37b6f.js",
    "revision": "43bee594ec7d60b6144715614366f65e"
  },
  {
    "url": "assets/js/app.294b2654.js",
    "revision": "ee224d2dfb060f1456f1a59347fe027a"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "24ddf020e5f4faff06bc0e02e72446a3"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "6c5b50f15f4018ce5a0ac32dd6ebb70e"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "0cba533a659f5a8742a574a6242a52f2"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "6b9ba5b2b682924b5fb5ef6658827acb"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "d256ae2d78ad8cfd63e72494c1a5f632"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "c7767489781dc243778f2c6feb48a3c7"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "6885a798d57765a587e09eaca8dabd99"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "9538870fc39136a4278e0b87ad56b044"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "e6786febdf2c49582583307d828b9c96"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "fbcc14d51e9e13460c7cdd31674782d2"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "bf05fbb48550abc711414ffb1e3cb50a"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "4e2f27ed246b0f34284bf1d0939c4925"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "97af56b6532dc0664f231efd5b4287fb"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "7e7fae5ed8aea18dc697e31a80c84554"
  },
  {
    "url": "base/practice/1.MongoDB.html",
    "revision": "60c6caa9ec53848e96f41c0e00a92206"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "4c7eb3325e1fbd2c8baa443d1fb2cdb0"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "fdf07338936178223806ade7a0c5c3c0"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "00332d092c92742733402e368e99aee6"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "d7bac1122a83c3264af321d19d95c4eb"
  },
  {
    "url": "base/practice/test.html",
    "revision": "bcd0502a31c4de2f7bf548ae2909a167"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "54b5411c26c3744173027965b94b0a5f"
  },
  {
    "url": "index.html",
    "revision": "79d158b8c2f8c11a8242df2f951d6ba4"
  },
  {
    "url": "senior/typeScript/1.inde.html",
    "revision": "fbd51707e7f97719adeb1fd222a7adce"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "5b2deadce02edc0e0e0dba3370d1b524"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "59c4893c87992d6f747b5f1d29abc293"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "6f58f363b7d833132daa816631af1dff"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "b0bf4560c3ec4ede7f213f26204bfe7d"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "9b3ebe1fee885bc5d070c4f1bf45a853"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "7c1711a356cee722176b3e27d9b318ff"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "912fe0f920029a45102069e4ccd060ce"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "d4d7c663f83b60a348bb46c059d6335c"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "a2cd323638550d3d231633e19a9a61fd"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "668e5ba23475bce1d3e0aae8e0d67981"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "ba54c3e3005b5d78c3bed5cb17208d05"
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
