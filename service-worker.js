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
    "revision": "0208b3a84fec1f365b2b84dbc9af8039"
  },
  {
    "url": "assets/css/0.styles.1221baa7.css",
    "revision": "740f4df2a2947f5f740cbda4d9f3daa8"
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
    "url": "assets/js/1.c7999b22.js",
    "revision": "176201d6442b7eddba26b166728b2a6e"
  },
  {
    "url": "assets/js/10.62935875.js",
    "revision": "1b010847f68dd2cab94c069b1fd9017e"
  },
  {
    "url": "assets/js/11.0669fae1.js",
    "revision": "fab031a5bdb270e52073837a27981218"
  },
  {
    "url": "assets/js/12.908037a8.js",
    "revision": "ffbb13315a5a345f9a65f153cd3b85e5"
  },
  {
    "url": "assets/js/13.7d4249f0.js",
    "revision": "c9d4d997c8852f5870a6633be5211c04"
  },
  {
    "url": "assets/js/14.503c154e.js",
    "revision": "4154e29b21bc8f9d5eb1cabb408a473a"
  },
  {
    "url": "assets/js/15.e940f298.js",
    "revision": "9bee9b926e07f94b5b358a1baa2fdf62"
  },
  {
    "url": "assets/js/16.1641d976.js",
    "revision": "2d830546f6c4f9dc5b85d1002cc8d3f8"
  },
  {
    "url": "assets/js/17.77cb064f.js",
    "revision": "2c09ceee75510025057363768e7dae5d"
  },
  {
    "url": "assets/js/18.b37cbc46.js",
    "revision": "f371a6baed15980ac5de1ca590277cb7"
  },
  {
    "url": "assets/js/19.3aa63867.js",
    "revision": "e5a40605762e13a7157d312c27746a97"
  },
  {
    "url": "assets/js/2.9c6df21b.js",
    "revision": "a5fda98cdfc195aaf04526a8696790c0"
  },
  {
    "url": "assets/js/20.d3bc44a7.js",
    "revision": "0980c16506bb5bd072c543de77fcc26c"
  },
  {
    "url": "assets/js/21.e85e9d90.js",
    "revision": "92aab12667f7a14fb557adfab2517cb2"
  },
  {
    "url": "assets/js/22.16e8f03b.js",
    "revision": "2d354fb877560c6c9353a5d1f2ecedaf"
  },
  {
    "url": "assets/js/23.83664782.js",
    "revision": "a6a8173e4a2cdb6d7d61528ed1826af7"
  },
  {
    "url": "assets/js/24.cff610c9.js",
    "revision": "3a1351a98d93e0267fc552a1d94b2203"
  },
  {
    "url": "assets/js/25.75ce52a8.js",
    "revision": "71f647ad4bcc343513d5c0ac36c16773"
  },
  {
    "url": "assets/js/26.e7eab329.js",
    "revision": "cf3b5c00d8edabc39f838580d292e3f9"
  },
  {
    "url": "assets/js/27.ad4f56fc.js",
    "revision": "56b26914253f6af572476e14acc4ea77"
  },
  {
    "url": "assets/js/28.1da3b40c.js",
    "revision": "35c349bd2dbe19d1c64f5ff50792d1e0"
  },
  {
    "url": "assets/js/29.6de9ee14.js",
    "revision": "4d26f53b9fe10d263503071be314673c"
  },
  {
    "url": "assets/js/3.9f5ca14c.js",
    "revision": "f4d8732f323be3ad8ca07d9f5689698a"
  },
  {
    "url": "assets/js/30.4388d6f8.js",
    "revision": "aa483d0b85f0a10f686589bfe9e7636f"
  },
  {
    "url": "assets/js/31.4b12d086.js",
    "revision": "fe6125d565a98d4ec6907bc599c5dac3"
  },
  {
    "url": "assets/js/32.e56d6931.js",
    "revision": "59e1fb959ebd0a1fa8ca2fba6c7af24e"
  },
  {
    "url": "assets/js/33.d5e0eadc.js",
    "revision": "9d6ea7ff6d315df15d4e7dae2316f34d"
  },
  {
    "url": "assets/js/34.a5bdc1f9.js",
    "revision": "577e1388c59a747bc8cd6e07509fc53f"
  },
  {
    "url": "assets/js/35.c083b277.js",
    "revision": "3ee9bd0a790e63142b6483c37b1b266d"
  },
  {
    "url": "assets/js/36.c6294bab.js",
    "revision": "4e5714ca9ee2b3575cf42c4daef885c7"
  },
  {
    "url": "assets/js/37.49f99c82.js",
    "revision": "a8ae3c43513fce2ade76bd2105d3aeeb"
  },
  {
    "url": "assets/js/38.0207d117.js",
    "revision": "4e28d41c16da4a6ac9ea6220f5c93370"
  },
  {
    "url": "assets/js/39.7b511e6e.js",
    "revision": "4872d864749d6d204a9e2b71cce739f3"
  },
  {
    "url": "assets/js/4.5a212b2d.js",
    "revision": "172413e062741cdb70596656eb727124"
  },
  {
    "url": "assets/js/40.18d654bc.js",
    "revision": "0d38a91e820000b06c2dc2f27fe56dc1"
  },
  {
    "url": "assets/js/41.0764eab4.js",
    "revision": "0d0ba07a90c4dcb60f9d6f3613b395b5"
  },
  {
    "url": "assets/js/42.9221178b.js",
    "revision": "0ae563eebcf416dc0dd12cff61ede3a5"
  },
  {
    "url": "assets/js/43.dd6fe239.js",
    "revision": "3ac3df8353fd839e4ceccc2fccf627b0"
  },
  {
    "url": "assets/js/44.13ebe8a4.js",
    "revision": "3cac096f6442c733892805ef455f4992"
  },
  {
    "url": "assets/js/45.4f2f4d8f.js",
    "revision": "87c3b883542d678fbdc8ed8470b14793"
  },
  {
    "url": "assets/js/46.eb602e13.js",
    "revision": "ab9d93139e6be5bcc9f7be2a7ce906fb"
  },
  {
    "url": "assets/js/47.c022f1db.js",
    "revision": "29c770f5c304c9aa915880e58935c8fd"
  },
  {
    "url": "assets/js/48.490caa90.js",
    "revision": "5413dd0cb1588d372d5fb14722c03959"
  },
  {
    "url": "assets/js/49.0ea69b84.js",
    "revision": "4568422804fce3f2aa41476159c45fd7"
  },
  {
    "url": "assets/js/5.70f6abfa.js",
    "revision": "0f1e9aee2941e7881b65da941a1363d2"
  },
  {
    "url": "assets/js/50.ca6ccc3d.js",
    "revision": "10c35f2b13f935d8670b8313f60796e6"
  },
  {
    "url": "assets/js/51.0294c615.js",
    "revision": "37be00f0c2b18f3a0d16bfa2a1ccd260"
  },
  {
    "url": "assets/js/52.4ee4b94e.js",
    "revision": "abb3b8695523be519a64d6699027083b"
  },
  {
    "url": "assets/js/53.467778b3.js",
    "revision": "de1cd3518e085a093efb5933527c0483"
  },
  {
    "url": "assets/js/54.8b3d7f73.js",
    "revision": "5dfe3ca4bdae4c34fe3ea619946b11e0"
  },
  {
    "url": "assets/js/55.dcba9f56.js",
    "revision": "a0dd9725ea1f3cdee0a5767bd6418b0e"
  },
  {
    "url": "assets/js/56.464bacc2.js",
    "revision": "6942d2881e2298308c392e17dff5d515"
  },
  {
    "url": "assets/js/57.a6b884de.js",
    "revision": "c0abec02c82d9c4aff0c7e19369cd1c6"
  },
  {
    "url": "assets/js/6.48f2ca4a.js",
    "revision": "aadfba8f7cea494c4dfe2a4170e39e02"
  },
  {
    "url": "assets/js/7.6c1e9806.js",
    "revision": "8fc6b0c9ebbdaf3295e5418caeb00975"
  },
  {
    "url": "assets/js/app.46953e00.js",
    "revision": "124918b4a87844c2ade2a52c61a0b756"
  },
  {
    "url": "assets/js/vendors~docsearch.39676dd9.js",
    "revision": "5e7716d1c5a79ebcd251936b540a16ae"
  },
  {
    "url": "base/build/1.index.html",
    "revision": "8fd1a531aa177e455fac94401e1dc6e0"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "245c3d401f9f273a34507acbcb9817b3"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "2c6ceec274ff95d9c1bf9831951a61c2"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "c4e08ee38eb39cfaa382fe9b92105cce"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "05c026c2b7b0bc0effbc05e1e49d4990"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "b50a19bb455bcd66c9b924145b578438"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "1d36342a96bf79ca4c7dadb4cd588da2"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "60f9f1e479eabb42a1180067097367a0"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "f2ee9218146a307458921725f8030b96"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "6a6ed3bf65800b6c0a23130bea839044"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "77df2fa642f3aea5d29d5cd413ec3569"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "7acdb8b64b921f76a52d5f191b18cc8a"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "acbb596f492f96bee6c50c35f970d933"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "fca579e7b56a70a9aa0934062b30461f"
  },
  {
    "url": "base/practice/1.index.html",
    "revision": "9e23168b7604282f8b894c56921a5d29"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "fbdc02534a81223e89cdc1a3d854246c"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "d90f44511bd9ee9b898cdb344fc53e14"
  },
  {
    "url": "base/practice/egg.html",
    "revision": "442f2fc6c58177afda35c12777c8eecb"
  },
  {
    "url": "base/practice/express.html",
    "revision": "8a674c883fe765bdae8341dcbb20ff98"
  },
  {
    "url": "base/practice/koa.html",
    "revision": "61edea69d6bde4eda2010ab881c1d0dd"
  },
  {
    "url": "base/practice/node.html",
    "revision": "41cae5304f0f9f71c516f1c593a0dfb0"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "5136a7a0dd34ec7f1e18f3887549edcc"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "0e2b55e3478a2d951ea2edc6521ec568"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "f20776385bd8df326f0fe19a4a2539e8"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "c75bba57c1601fa48d6317265d5d7b24"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "8805e4f31ef2a629da672f2d51c09684"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "8118327e72d945cea2158460aac32464"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "8c89d3770f0e20171deee006398c6ef6"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "c244e09f6b6004e0fef68c5cda6e6154"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "cae267c61e058d213df2dc7146eadc19"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "4936e8caa3c7b39d0f7ab2982a3de60a"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "6ae222372b4321e41f5126875a0c4424"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "409c1ca83cef88c3930594aca081dd47"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "f3f6c5088609188b9658c9cf31a19b45"
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
