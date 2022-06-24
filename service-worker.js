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
    "revision": "344d10a87014dd1b36f8afd01019a2c2"
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
    "url": "assets/js/10.2513877e.js",
    "revision": "6f904edd1b8bc9d2ad44f367f1295e34"
  },
  {
    "url": "assets/js/11.72946aaf.js",
    "revision": "c751dfc81b05bd4116e7809b6ba5f811"
  },
  {
    "url": "assets/js/12.ecc33a26.js",
    "revision": "6e50e1407095bbe00938d6144de323e2"
  },
  {
    "url": "assets/js/13.1b77f117.js",
    "revision": "a6ba2f9679c9cae553349897f72d8ff9"
  },
  {
    "url": "assets/js/14.1b455c97.js",
    "revision": "a387e46cb073911184290c1e862fafd0"
  },
  {
    "url": "assets/js/15.fb4ccaf7.js",
    "revision": "dca072ddfed92699a63a0b987ac91c49"
  },
  {
    "url": "assets/js/16.d1de1e80.js",
    "revision": "a560850d94263f743ee055959c3eaa19"
  },
  {
    "url": "assets/js/17.6f45c46f.js",
    "revision": "17de8ab43c1d4fe972289dc5239f3c69"
  },
  {
    "url": "assets/js/18.1ed9fefd.js",
    "revision": "d9f671d318751cbd3ff9044fa722fba7"
  },
  {
    "url": "assets/js/19.24d2906a.js",
    "revision": "a51329721b13b0d08c3cc2ae39b1b87a"
  },
  {
    "url": "assets/js/2.1ad97ad7.js",
    "revision": "9eaa532b07c8d2112a6cff0fd5ed2fd0"
  },
  {
    "url": "assets/js/20.2b74e3bd.js",
    "revision": "8b59e2d64e83474e04d632223cd0123a"
  },
  {
    "url": "assets/js/21.64660ffa.js",
    "revision": "93b4078c380379f8a2f71412d65c952b"
  },
  {
    "url": "assets/js/22.a0396291.js",
    "revision": "d9f228b597498efba060e839f0303e73"
  },
  {
    "url": "assets/js/23.42bff317.js",
    "revision": "7f0a745defffe42d6d90c752aef25193"
  },
  {
    "url": "assets/js/24.e4245bbe.js",
    "revision": "e5fc20dbb6e9c1b93695a8c2730258b9"
  },
  {
    "url": "assets/js/25.721df1f6.js",
    "revision": "5f296b6d6a903874463ec2475b6e3891"
  },
  {
    "url": "assets/js/26.cc7266f1.js",
    "revision": "f80b75738802694a6b9df9a6aee27c74"
  },
  {
    "url": "assets/js/27.bc0f3925.js",
    "revision": "9000768a3606c7a92193ba67ff7547ca"
  },
  {
    "url": "assets/js/28.1936b5e1.js",
    "revision": "2ecbccc18a9b39443af0b6fc7cc1ff6d"
  },
  {
    "url": "assets/js/29.20e997f0.js",
    "revision": "0f495ad21d73bf13706578d2304e94f7"
  },
  {
    "url": "assets/js/3.254ebf84.js",
    "revision": "33a91bdab22aaacd62f385a163b58941"
  },
  {
    "url": "assets/js/30.d93dc16d.js",
    "revision": "37efff153222faab8dc7697335c97ffb"
  },
  {
    "url": "assets/js/31.e2e163ec.js",
    "revision": "3d47ad4ef281969830223b75dd2ca135"
  },
  {
    "url": "assets/js/32.421fad6d.js",
    "revision": "105d16792894848a3765811aead9289a"
  },
  {
    "url": "assets/js/33.01ee9f8d.js",
    "revision": "093fbdc2c73023e2f299b5f60e72d5c3"
  },
  {
    "url": "assets/js/34.a874e5c9.js",
    "revision": "a8a6e98af4752e9f7793051256b27a54"
  },
  {
    "url": "assets/js/35.fcfae229.js",
    "revision": "6f706ad2675bea295996c2437aa94b00"
  },
  {
    "url": "assets/js/36.f11107ae.js",
    "revision": "aae41650b91b0453b024ca114cc44c6a"
  },
  {
    "url": "assets/js/37.63670afd.js",
    "revision": "d5daa09c78567a3d66525561c4cabc05"
  },
  {
    "url": "assets/js/38.919b8ddd.js",
    "revision": "183310462e84e62d5100d48c3224d69c"
  },
  {
    "url": "assets/js/39.9024db4c.js",
    "revision": "e727b5fde835e4353b4e97b4d70e3fae"
  },
  {
    "url": "assets/js/4.b212ff52.js",
    "revision": "f14c56cbe3abd37b3726203eaf63e2f7"
  },
  {
    "url": "assets/js/40.50164114.js",
    "revision": "cb245b5450d7b493a706f22b89aeff5d"
  },
  {
    "url": "assets/js/41.5958e520.js",
    "revision": "84f8f3adba58a15274beba4ae76121b3"
  },
  {
    "url": "assets/js/42.ab8e059c.js",
    "revision": "2df94e7744214e0c6b0ef7ee350d1be9"
  },
  {
    "url": "assets/js/5.f8b48296.js",
    "revision": "167b5aaa644c2036f77ee0fe313724d8"
  },
  {
    "url": "assets/js/6.bfb71bab.js",
    "revision": "a8d3dcea39aa4d7f769fe20b29dbc05a"
  },
  {
    "url": "assets/js/7.1522543f.js",
    "revision": "d73a4904c6f9e41b0510596a236fe963"
  },
  {
    "url": "assets/js/8.8fa16fc7.js",
    "revision": "c66af7149ec428301a2e2f715e1ec017"
  },
  {
    "url": "assets/js/9.eb695c72.js",
    "revision": "4bc5706351da9272ab0beb023512b7e5"
  },
  {
    "url": "assets/js/app.2e8052ae.js",
    "revision": "ff28fcf5ee9a414d0869d371e9e8b505"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "2cff4f8482a573767d67c77c25915d95"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "ae4a57ffe32e1554b827b30b3727a67f"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "4dd92d1cc59d9bfef0615d7146e1f035"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "4db6ba9021ad7d7c287f8b5b61009c35"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "309c561a47b5b21867308a3a493e3229"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "b3e362c2bf86e9fcd0aa89ca6310a415"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "5fec1f79f0c4044a0a476eebfe3343cd"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "6dffb5d2d84a0f156aab25f977579a0a"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "ec65cfb63b2899d15b88ad21e2fe41a2"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "12f33abfd99c7fefac5456c91c695f78"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "bf24e3cd72d5b2a4738c110b5cc3f5c5"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "b5a036c3b3cc195cb325909c22f72dfb"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "f4aa3429a281a134e30703a0bc698dc5"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "bb6c9af0d436dc3ae74fb313f0521b17"
  },
  {
    "url": "base/practice/1.MongoDB.html",
    "revision": "a1f84b9ea94fe59ba80a56a124023547"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "fd762f6e4e6d80c5261c4039fcc4d627"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "762d54997c7a76bd41370426b9a2cc28"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "5b90307d4d8ba4166e66910432310a4a"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "d89d288942649201180660bc0565a77d"
  },
  {
    "url": "base/practice/test.html",
    "revision": "6aac93d2d067275a89d897c3acc5bf20"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "ac009815ba268c49c3e35b50a585fc41"
  },
  {
    "url": "index.html",
    "revision": "9d45fd6a52db2a5051c46d17bfaa725a"
  },
  {
    "url": "senior/typeScript/1.inde.html",
    "revision": "063c97b1fd8953f7448f0e95081a2cbd"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "d915195aeedbb3855235e55468a7e2c5"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "353abdb5c52ce6e77c107092a88b30ec"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "60e7c5be44370e79cc71e66bc0bbeec0"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "dc96820311f6b064e99933edf0a6b313"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "02438268a474254c0e757a46bec84d37"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "7b891db83862356342a0b8217d224b2c"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "a1536c7a15efaedd8539c64b41518144"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "001eeee1d51ece5aabbcbb77b22756d8"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "aefe5ed02ad34421621a511a6218bca6"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "40e0bf97dc5d94cd90a069547443825f"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "3c4d7e01cd5a93b5df433ab4e60d628f"
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
