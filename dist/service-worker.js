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
    "revision": "478e0eaf5905d49c7ad60f88faef8ddd"
  },
  {
    "url": "assets/css/0.styles.ce33db04.css",
    "revision": "23fb1047ca9098bdcd4d9f980b1fb665"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.64c872cc.js",
    "revision": "3f72177894d4d4479962eb69488d0d98"
  },
  {
    "url": "assets/js/11.c28d133f.js",
    "revision": "f2987890588d48bfe9550fd157882d37"
  },
  {
    "url": "assets/js/12.d33c632d.js",
    "revision": "b92e19cfd065dd610e87ae2435545661"
  },
  {
    "url": "assets/js/13.902ef98f.js",
    "revision": "a20f79a5e6ebcf1a3b411dec401cb6f0"
  },
  {
    "url": "assets/js/14.38dd3150.js",
    "revision": "477424c7e8fe1a20b4a5e4eaa5f2fd36"
  },
  {
    "url": "assets/js/15.0baabe12.js",
    "revision": "43275d7398dd0f585a9b32eda208d97f"
  },
  {
    "url": "assets/js/16.df30ab9d.js",
    "revision": "64753517558dfac4aab828c54ca9852c"
  },
  {
    "url": "assets/js/17.37452f3a.js",
    "revision": "486b12b7b13e070e2ca2acdb88209e90"
  },
  {
    "url": "assets/js/18.ba55fe9b.js",
    "revision": "b172c9fab1b0448a25d6fc7955b80c6f"
  },
  {
    "url": "assets/js/19.2665e990.js",
    "revision": "65d877377321222647f451ab3806c371"
  },
  {
    "url": "assets/js/2.675b9061.js",
    "revision": "367833c518dd62388fe3e941c241357b"
  },
  {
    "url": "assets/js/20.7fd94d65.js",
    "revision": "b27968dd5901792324bbed0f85d8aa17"
  },
  {
    "url": "assets/js/21.8315848b.js",
    "revision": "0c6449a930bc9d78b8bb492ff35e3902"
  },
  {
    "url": "assets/js/22.f3d308ce.js",
    "revision": "204bc57d344f3e5fa9d63b44a5f49f33"
  },
  {
    "url": "assets/js/23.fca9ac9f.js",
    "revision": "db05c64271f85da5540b33ccd3cdceb7"
  },
  {
    "url": "assets/js/24.65b2daec.js",
    "revision": "22cd91ba575cd631a8a56287ef4042d7"
  },
  {
    "url": "assets/js/25.c4d00d61.js",
    "revision": "bccf1f957b03c1e2250b4adc7e849952"
  },
  {
    "url": "assets/js/26.1065c0d6.js",
    "revision": "a8cff17fd222590fdf0f0c3de97b4695"
  },
  {
    "url": "assets/js/27.69357d54.js",
    "revision": "21e0e13caa42131ef0c64ab2350345d0"
  },
  {
    "url": "assets/js/28.464eaf10.js",
    "revision": "895bcdc34b2c421e07ad7c95f6315c81"
  },
  {
    "url": "assets/js/29.42b641ad.js",
    "revision": "3df2e033847b88962b06d939c18cafaf"
  },
  {
    "url": "assets/js/3.4e24d5fc.js",
    "revision": "088e10d2ac9d3c8fef43a1fe1aca9c83"
  },
  {
    "url": "assets/js/30.306ea60c.js",
    "revision": "0b499509027f773890df28643b76b6aa"
  },
  {
    "url": "assets/js/31.6836b9d9.js",
    "revision": "d77c09bc2614eeda67f6beb24fbfe9d3"
  },
  {
    "url": "assets/js/32.94e8a0db.js",
    "revision": "97987e9fdf6781e1672af6b50c70a50c"
  },
  {
    "url": "assets/js/33.6513466b.js",
    "revision": "668294035c603cff426f614d7dbe34a1"
  },
  {
    "url": "assets/js/34.be5e1b39.js",
    "revision": "ebad7b3a88c1a557954d2a4ec1f3e9ed"
  },
  {
    "url": "assets/js/35.cf1a5fcb.js",
    "revision": "33477f88fad156fc60f4e161b738abbb"
  },
  {
    "url": "assets/js/36.a8d1e0d5.js",
    "revision": "d9aeaae4d3ba150987ef9d41fb68af36"
  },
  {
    "url": "assets/js/37.c10a80c0.js",
    "revision": "9fc9f55c465e9bcbbcbddc67d19ce2e7"
  },
  {
    "url": "assets/js/38.c8018328.js",
    "revision": "544b9c65bdcd82b496c3ad5d53e020af"
  },
  {
    "url": "assets/js/39.6cbf021e.js",
    "revision": "63c3fc40ec754b63b47886f5c46e841c"
  },
  {
    "url": "assets/js/4.f907179e.js",
    "revision": "f004a01cf9ff3395050c973cc215f317"
  },
  {
    "url": "assets/js/40.3f405d26.js",
    "revision": "d378a8865231c2353afa3f0d14d5b523"
  },
  {
    "url": "assets/js/41.c4e905bc.js",
    "revision": "af5a081daa313b10c74d7826d8421b6c"
  },
  {
    "url": "assets/js/42.4f1de1ad.js",
    "revision": "a13dc46a487bb0c4e56234e5a6a742c2"
  },
  {
    "url": "assets/js/5.62e99edd.js",
    "revision": "9f5ce988af7d9139d33c66380438cf5c"
  },
  {
    "url": "assets/js/6.33e88ddf.js",
    "revision": "9c8e683715b08edf817e5a89cca742c6"
  },
  {
    "url": "assets/js/7.a55f0d7f.js",
    "revision": "c7cc7f66c164d6384448c3de06b94229"
  },
  {
    "url": "assets/js/8.69aaf2fc.js",
    "revision": "9ba090a3785450e0b3b301eb50175093"
  },
  {
    "url": "assets/js/9.2f493107.js",
    "revision": "ee64e88c0c3d67af25fb4846f7ba7791"
  },
  {
    "url": "assets/js/app.3ac9baed.js",
    "revision": "aca16d30ea49f646f38eb3ce6f2b0678"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "d538f7f43379d0002e13255221961a79"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "370b872740e70dbda9a76e17d971c009"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "8a9e20978e267838e7506f2fceb9ae6b"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "8ff29dddf68bf4641f10db98af685da7"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "0fa079d9acf1ad25c4020e147f1940f0"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "c2dcf64cb5967195d360e3cce8dd614c"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "5d0ff0583d9050a9885c39783a92356c"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "fc3d8e71525dea5cc7558cc07b970b28"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "9bfa6683e58e7a292d5a7ca63f06882e"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "264633e6cc4d438a32be0cf786f433ea"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "9a8bac999bf21d059b4b39d3ae8385e3"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "b89d7ef813acfde604b2e6b83df6d8f1"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "78e16958efc300925ce5bf65c8467231"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "5e5747aa1fcf890783efd6fac8b03e12"
  },
  {
    "url": "base/practice/1.MongoDB.html",
    "revision": "4c5040ec5720dc5871c7b742451b3122"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "63f970346c3b77023df36ffd578ea430"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "48e4561810706f8d1fe640f19868e80c"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "e80bfc061baaa1e4fadf78e71e7a8720"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "ccb418c81cc8fc7c0ef002d01c0215de"
  },
  {
    "url": "base/practice/test.html",
    "revision": "d68afc64090ffe17ffa35249abf44b6a"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "32d05fc06cd672e9b2590c25a0905031"
  },
  {
    "url": "index.html",
    "revision": "3b9ff905c7f07eb6a65a5850a288564e"
  },
  {
    "url": "senior/typeScript/1.inde.html",
    "revision": "69d3a1ba0b81927e64be2cb6d56d9f9d"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "3fe9a42148404eaed12112a2a56e4c16"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "70c262b8d93c0ea0e42417d946c250b5"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "a5087151e41ea51a0c5ff7b314e34e38"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "65feeae4382ecb900e7ba36702cf69b6"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "9024caff33dc2bb64247369c9c88572e"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "41371dd2c98526b916e845258b633af0"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "af912b959c28663fa2a7adfb10795584"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "aa717a4571012531ac7f7b84621815fe"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "d557310e3b425234b30b85ed58dd40e9"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "6996a67e7d826c4c5a8b7596c6080c05"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "0cfb320717fabb0405ad5df9c09a9eca"
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
