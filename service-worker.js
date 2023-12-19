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
    "revision": "78c633e64f2570c582a70a9a88976886"
  },
  {
    "url": "assets/css/0.styles.b0f43da8.css",
    "revision": "3140f7a0960be8d6b82eb0fd04eb2c0f"
  },
  {
    "url": "assets/img/add-grant-to-role-error.2596d823.png",
    "revision": "2596d82329ca892bf50e3d8b9507b56a"
  },
  {
    "url": "assets/img/add-grant-to-role.6195192c.png",
    "revision": "6195192c7344b54a708e494979c326b5"
  },
  {
    "url": "assets/img/add-media-error.9ba99cd8.png",
    "revision": "9ba99cd84dce5187fdebb047e5891ffb"
  },
  {
    "url": "assets/img/add-media.e0cf9bb8.png",
    "revision": "e0cf9bb86a3bd7e8aa17284d0b41998e"
  },
  {
    "url": "assets/img/add-origin-error.71be9bfe.png",
    "revision": "71be9bfe71ea0bcfa0bba1cb52ed92ad"
  },
  {
    "url": "assets/img/add-origin.b49ea3f2.png",
    "revision": "b49ea3f2c2263992b307b3c8102a8d14"
  },
  {
    "url": "assets/img/add-request-error.d20f2c70.png",
    "revision": "d20f2c7022c5e5e35f70378d2aac6829"
  },
  {
    "url": "assets/img/add-request.67551a29.png",
    "revision": "67551a29beccea5faae3ac7cd6b12041"
  },
  {
    "url": "assets/img/add-role-error.2271ddb4.png",
    "revision": "2271ddb47cb0f4421ad96bc278f7031b"
  },
  {
    "url": "assets/img/add-role.3fd877d0.png",
    "revision": "3fd877d0c6ac921637380a21aec1c082"
  },
  {
    "url": "assets/img/add-user-error.a2f9a428.png",
    "revision": "a2f9a42873572155df9bd7ba02fc3cfe"
  },
  {
    "url": "assets/img/add-user.8562c9ef.png",
    "revision": "8562c9ef9d152d632b847c38ffa545cb"
  },
  {
    "url": "assets/img/change-user-role.85a3b90a.png",
    "revision": "85a3b90ac77753b2fc7a133ca45a51f5"
  },
  {
    "url": "assets/img/delete-media-error.599cc2bd.png",
    "revision": "599cc2bd4054a0093be1dff892b4b57e"
  },
  {
    "url": "assets/img/delete-media.020a88f3.png",
    "revision": "020a88f3652d18a8cb60e21e168c3ef6"
  },
  {
    "url": "assets/img/delete-origin-error.b673a0bb.png",
    "revision": "b673a0bbcd29c693ac9a77818592da58"
  },
  {
    "url": "assets/img/delete-origin.7dbeee58.png",
    "revision": "7dbeee583f1a955953d4076ea97fae76"
  },
  {
    "url": "assets/img/delete-request-error.0cd59a76.png",
    "revision": "0cd59a76fe0363af25522c0464d854ac"
  },
  {
    "url": "assets/img/delete-request.f869415d.png",
    "revision": "f869415d3cdd6aa1b8afd98dc7ab6b5f"
  },
  {
    "url": "assets/img/delete-role-error.07e14746.png",
    "revision": "07e147465cdb275f0f241c5bacc6a0ad"
  },
  {
    "url": "assets/img/delete-role.ec79f26e.png",
    "revision": "ec79f26e3761938db2afaf621813ca41"
  },
  {
    "url": "assets/img/delete-user-error.28efdc9d.png",
    "revision": "28efdc9d73ebf396b9b627eab52d8401"
  },
  {
    "url": "assets/img/delete-user.e3bdea19.png",
    "revision": "e3bdea19531ea7f425c86009d6a9b198"
  },
  {
    "url": "assets/img/get-all-users.10fc1bab.png",
    "revision": "10fc1bab2a813f97cd010fd81c703724"
  },
  {
    "url": "assets/img/get-media-by-request.ab026c1b.png",
    "revision": "ab026c1b4aac9cdf1e725b1475d2d8a9"
  },
  {
    "url": "assets/img/get-user-by-id.7f17fd1f.png",
    "revision": "7f17fd1ff835e41428d7ef3ff815be25"
  },
  {
    "url": "assets/img/search-media.e5e4da8e.png",
    "revision": "e5e4da8eab7fe043ab47c7fd906fc16c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fabaa2dd.js",
    "revision": "2bd2bd564e6a6d053f022f36e9c23c80"
  },
  {
    "url": "assets/js/11.6b58e646.js",
    "revision": "6c531571f19438a6ab633bbeca0105b8"
  },
  {
    "url": "assets/js/12.d5752f01.js",
    "revision": "089c493f12e7d02946432621295bbcfe"
  },
  {
    "url": "assets/js/13.d3362c9b.js",
    "revision": "ec65fb9fb481cfa2c46c732267925d42"
  },
  {
    "url": "assets/js/14.06a8f7d9.js",
    "revision": "dafd1a57a3843746678819b3b5ed1b91"
  },
  {
    "url": "assets/js/15.f85885b8.js",
    "revision": "6f5f60a15311fbc66fb94a5de18a926f"
  },
  {
    "url": "assets/js/16.f047a066.js",
    "revision": "77102ee7fcdd23962a472f574d538255"
  },
  {
    "url": "assets/js/17.61eaf522.js",
    "revision": "aa64bffe2e00987ad107b9525d85afe8"
  },
  {
    "url": "assets/js/18.c5a7a2cc.js",
    "revision": "b824763d9ab4bfa4fa4fdd101a77240d"
  },
  {
    "url": "assets/js/19.14334bf2.js",
    "revision": "40c93fc0287d919299e74e94a002d40d"
  },
  {
    "url": "assets/js/2.c747979a.js",
    "revision": "c8fcebe7be811e8e65401fd976dab435"
  },
  {
    "url": "assets/js/20.ab3a2100.js",
    "revision": "d403c5b35483c764da601d9bcadd2ece"
  },
  {
    "url": "assets/js/21.72bc1a6f.js",
    "revision": "2426f835d839b58c17f576fb2aa6ac27"
  },
  {
    "url": "assets/js/22.d48c2a56.js",
    "revision": "9f9a540a0878902c2976a2dba9cdcf9d"
  },
  {
    "url": "assets/js/23.50f47bb6.js",
    "revision": "26e0029321a0c9550e62f1aff69a441c"
  },
  {
    "url": "assets/js/24.b6991383.js",
    "revision": "899792b2a66ef77bcd29e98ead3f36b1"
  },
  {
    "url": "assets/js/26.ea75440e.js",
    "revision": "2e414507ba80af9c529fa9c86a40b336"
  },
  {
    "url": "assets/js/3.5c063111.js",
    "revision": "6ace1b7146a83260c783fc9447ea9161"
  },
  {
    "url": "assets/js/4.b4bf3d5f.js",
    "revision": "5a43ef928ffe41e5d10bbda19f666be8"
  },
  {
    "url": "assets/js/5.47add81e.js",
    "revision": "b9dd35eca55a1b253502fd87ec1af3d8"
  },
  {
    "url": "assets/js/6.7184e593.js",
    "revision": "7ce2bb1e13129df2ec661c0eca0d6952"
  },
  {
    "url": "assets/js/7.bff792db.js",
    "revision": "d7bff7e0474f98b3d9ed820ea7f80021"
  },
  {
    "url": "assets/js/8.9bc216c4.js",
    "revision": "d26791ba189ca3e716ecffcb55f8b58a"
  },
  {
    "url": "assets/js/9.0f61371b.js",
    "revision": "63359525a055ab4fb31263b605c91a73"
  },
  {
    "url": "assets/js/app.f59c0e3d.js",
    "revision": "a892d129320e199e97e2a3cedb0a2a4c"
  },
  {
    "url": "conclusion/index.html",
    "revision": "888e9f051558b437cac066278c36d634"
  },
  {
    "url": "design/index.html",
    "revision": "68c346bc43bac244337fc11ab619f432"
  },
  {
    "url": "index.html",
    "revision": "310baac505070d23221bc0fa312f7443"
  },
  {
    "url": "intro/index.html",
    "revision": "afe9a4ab6f699b3337ff1d5ed375bef5"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "527b4b82a94156b02c9db9fcf544375f"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "99a5a7361ad4c3e58d04a70199d64a0e"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "4fb6403bc330e76a0b8121a180f9ef27"
  },
  {
    "url": "software/index.html",
    "revision": "0fddcd8ff19182e03dcd20e7bb749614"
  },
  {
    "url": "test/index.html",
    "revision": "894483a46315dfc192fc5662790dbce1"
  },
  {
    "url": "use cases/index.html",
    "revision": "9c75cea54d6d26af46ef4b0fe7fa1265"
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
