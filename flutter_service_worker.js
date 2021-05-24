'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "stripe_payment.js": "c8f3e52f75959533842cd44b1efed848",
"index.html": "e0a994014f9518efa23f1a73938d5fc0",
"/": "e0a994014f9518efa23f1a73938d5fc0",
"assets/assets/Captura%2520de%2520tela%25202021-05-05%2520-%252014.59.png": "c8c7a0ea1d1e4d1f5e506c2c00d44184",
"assets/assets/app-store(1).png": "9262381e5523f3bbeeea7f580693bf71",
"assets/assets/logo-minimal.png": "54a69b085f34e89bbf31dd4f96fbc1ce",
"assets/assets/smartphone-gerente.png": "78781a628ffab4d3227494824f93cf0f",
"assets/assets/logo%2520minimal_onlyLogo.png": "b90cd6f240b663f66b8fab5fb44e7f2d",
"assets/assets/computer_orders_resized.png": "9aca766f6dd25f54bd9c97bb1977393a",
"assets/assets/iosForTheme.png": "ba484147c92e36adba23fc016c10e332",
"assets/assets/Screenshot_2021-03-17_LogoMaker_-_Caixa-removebg-preview.png": "d2d2217bd15786f2671d17c94140a7a0",
"assets/assets/pngwing.png": "7d2fc9287d368a6f8839936e742e1c30",
"assets/assets/rocket-launch.png": "6adfea2decaf6b731fdb95ad81d27c9d",
"assets/assets/smarphone-client-edited.png": "e090802bfc9d6f51e709bf08c1d5f954",
"assets/assets/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/green_check.png": "505cdc1c0c50ff4ca0646ca7e80699f6",
"assets/assets/cancel.png": "69e6fb5f53f63f7422e4707cf212b7e8",
"assets/assets/check_icon.png": "941a336052bcf3267be97f0608d394fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/error_without_loop.flr": "35b9b6c9a71063406bdac60d7b3d53e8",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "87d83833748ad4425a01986f2821a75b",
"assets/packages/flutter_credit_card/icons/visa.png": "9db6b8c16d9afbb27b29ec0596be128b",
"assets/packages/flutter_credit_card/icons/discover.png": "ea70c496dfa0169f6a3e59412472d6c1",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/amex.png": "dad771da6513cec63005d2ef1271189f",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MyFlutterApp.ttf": "5ef1fb81c5d76140dbd85739cc0e248d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "87a49ddb579a33976fc961813783a705",
"assets/AssetManifest.json": "0372a499102eccde7ea78bdb1ed55901",
"assets/FontManifest.json": "c52ea27a43c84f081401d3bab8c0e4d4",
"main.dart.js": "770b2fb7ddbbbedb32c4f14a80b23fad",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/index": "2aba77e3659302ad44f4f7a1e81ec7f2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "5df34b91a63d794ed45f7c2517ce5a67",
".git/logs/refs/remotes/origin/master": "525c2868245f4571458f2f4b914c30d6",
".git/logs/refs/heads/master": "5df34b91a63d794ed45f7c2517ce5a67",
".git/config": "2e7ee149bfdaa2fcb1a263bf6b21df24",
".git/COMMIT_EDITMSG": "7770240f62019b36e618576957ff1e98",
".git/objects/ee/7270433ee08c014107fe19b25b83507c4d2f31": "345263bf0934b5c8e8072c348fda37f3",
".git/objects/3e/7e7e19b81446a105a7643936344e006257aa71": "5197503fa776fc53ddf8111384af4ae3",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/b9/c6cb42c161ad944c257dc67e23c0a9c014ceea": "7910fe0a01a0074eea54451ac774f03a",
".git/objects/fe/c2653af7a925aa75aa11e8d49fb267deb96daf": "d81d96453f3dde30d8ceb77224acbdff",
".git/objects/33/2544b9047ce0c35934fb5f7bd915caf5d45ac7": "537855f11fb4e87a08bffd9d2f0267ed",
".git/objects/ed/6eab322b1686cf8f0722b0435cf770fbcad9f9": "2a726b0c602cb407420de9605b513134",
".git/objects/ed/1916820f7b23084d7a7e03894d13f83e6156ee": "250e3325bc150fc27e59258a62a71d2f",
".git/objects/ea/4d14612c1a27cc971a96d55c149a81d97aa62d": "1c440151dc10d87221d84592fe80b842",
".git/objects/92/d543c00da2f29ccbb35dcfab7e37bb74cb5445": "1fb2e40851f08fd66732c79ac743b457",
".git/objects/97/a4bc76f8dd04d9c0e3c3a18afbedb2c73e54c5": "aeb2bc83cc0be148b377fe51e1eba249",
".git/objects/e6/17f16091804db4a7faf80ac5bd6b4a3a853bdd": "f09f573739ffb8f643f7c5d663a28155",
".git/objects/ff/f98530aca2303f714ff969243b95d9bfb755d1": "c2f1d1555d2e025e0356b2bbec7f0aaf",
".git/objects/ff/73a9eda21d8506f60b182d93ea954d54b5a0d1": "bdbca163ef91e12371d680ce2cb35faf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/73817e8672fead22d3d0dfc479131a3c93f169": "45a26e49ed7efd8d7f1c37652dbc6846",
".git/objects/e1/58f6d0f3f1513e29f16e70a8c712ad958d911a": "68a92d2eb4d6446921c83a9f4883d6a6",
".git/objects/2c/ae2e0a27f8583d107025bb38da24134bb744f9": "8468c540554b4c82bf4e3731a18315b7",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/63/c66e88ff2c934d0a55dce89570aff90c26b1fa": "85ae25c1b695adbb339ef4b7009b7108",
".git/objects/63/8b0b640747be92d6a09d079290609589832c00": "c445ea3385ab22ae1dd61aaac26647a9",
".git/objects/8b/913754a4cd6831b7de76c632292c11ccb75d48": "e6cd61ca5b920346413c2e3d1cad3588",
".git/objects/8b/5e009fab76c673ddf6cb7b7ecb91fd4fd10d7c": "24cb02c41f339c8a9fa25490dca93469",
".git/objects/8b/b14a0d06af812d0d4d61a86aaf2fde00a7ec74": "9e30f7cf660929bfe2792e3a61467891",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/59/3e5b7dbf2084e80a612353c8b4298944a700f0": "f33289f5caa70b44cc8e4920bb48d1e0",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/67/105209a560dce1f5de3dacebad3ed3445e4eb5": "5befc3d8b047978eec5ca710827a5c6e",
".git/objects/4e/abaa737b77bd8b036c7bc4de84e180b27e86d5": "00843d47c22de6aa7f6a025fc5e70968",
".git/objects/d9/2e84b2a817b97a8d45fb79595d38554df3fe13": "f6c4ac1a579bd4e2a5fa80394d66d32a",
".git/objects/ef/5986752cfe36c9f6828e0e2f74e9a412e3c270": "b960b08bfde871e6ad964c131bf0cbea",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/9b/e555c441f3f123321286c2d49efd8ef722316a": "70efa4d0432f34159c49bd5743bda38a",
".git/objects/7c/d9b530d931c7e5a8f8553c55bcae63b22d369c": "e8c7a6f53bc6fb160d0464ce6ce4131b",
".git/objects/ce/31769b0dbd54d575b935b2886611d732e3f322": "ee3a784470baca8042aa075b3f6d4835",
".git/objects/1e/c432610524b4748f446869d41429137079ed78": "1a1417b2501d60456531b65ae64d8c4d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ad/e4138a17993d7d8246f6e2ddd0095ffee65e18": "f34dcde6a11b488739e3420d35fdbb1e",
".git/objects/51/d64490e7ded2f4b0f322d379f4ba7b0bdf3457": "eb7438f2b1f1d53d9ba4adc47751b663",
".git/objects/c8/52eabacfbf71df31c40a9b30e0104776b69811": "60bc68490dc4c65368ef6417830926c1",
".git/objects/c6/b18d93242ad2b33d6be85ace687deab1da9d27": "7969c82c21ca459d187c92e9e7823778",
".git/objects/c6/ed00b5f3923a5cd6c9c9349d2f4866e2cb31ce": "9785fff8d2906474500541715a801296",
".git/objects/f0/587fa1a2ea078048fd0cf7cd134b547a48fb77": "a4e254e43314c9083a945d91fb4550a1",
".git/objects/70/8d042201de639fef8c2ae235c7f4ac551075e0": "ca5645399b09614fd7d8fb4bf54db49b",
".git/objects/c4/6d8803999fbab905abae9a3ef047fd54fd60e2": "1349005f2d8f22d4d7da697e897ed43f",
".git/objects/bc/d696e5ffb6f28374930ae4f9aab91034869ba2": "b879e740aa575bae8bd9eabc77e62991",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/f1/d78c4e433d3354f56b54d8f2ebb1639703eeeb": "2fce9030986de825b5f3a54073c97d50",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/ba/23a86731a59268fe7ed243bb6ed74b14c4b592": "726d367b4771fb5da678cd9ec435cdcd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/3c/69aeeb1a28fa087d4959f17dd4c2b2d4cce549": "db18530ed77dded3fef1a8717c6cdc60",
".git/objects/4a/7671d9c83fae0d868ea7770a4fe298a1777f52": "37b7a14ce9d48363cc28c5c466aabfbf",
".git/objects/c5/2534bb280ca019230099bb1d41de682ff6fa9f": "5810ae911dd4f6bed2c88bc69c148307",
".git/objects/20/59c463e66fdd48252ce40a07c6377e16062f4f": "77dae9b74ac0ba80b3cede03a4c60db1",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/3f0f1748c700ac722f707de44e3a88cbe08433": "e846d133b33a31cae2c87a746823934c",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/b2/cf06cccda63b94c3c6afbaaa4bb564aea09641": "50c010418e67f81012f37147e7457560",
".git/objects/96/c2bc90ace274b10dc903650b1e55630f6956a6": "b9c19d1fc9ff0ef0cc6db327fcdabc56",
".git/objects/1f/ea54d6bb190d81f407b1e7e28ace947417f239": "9b4c963f7dac62e45d5767c722c9579d",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/da/978cb7e5ed3ede162831eb76bcbbb68596fe92": "08e025ff340ea037e2a783e96cd931f1",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/80/9abe022571b80751e6e6ad6c1c70f6b2d33751": "ecd700aa339976f823c43687d5028da2",
".git/objects/b6/a28389fc3ee5bf98e75a52072d218cf1476063": "f302c75a454a8fd247fcc769eda8426a",
".git/objects/f3/670e6fa3da2d3edaf184f5246fc5f4eba2313a": "4f412b985af0a35c1400956c2f05b8c7",
".git/objects/f3/16c96d45ee0d71086da662e5f5c2b6bf03a5d0": "25b7d1e684a4a15fe432b669c98b0c32",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/7b/6fd70c6e80433e78a0a36f39a23b3bee3258a7": "a97c022d821a6eae44f80e3a7c833a82",
".git/objects/62/6afd3a77c0236a0b188ae3457270d42340503c": "6020fc64ba883b6c6b8312894f23af3c",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/cd/e4becdbf7ceaddc877d7ca51b3c40b56c40ca0": "674a022335b5ef718906d2dea10ad9c6",
".git/objects/35/523aee871708566a3862b2323dc41d5fffb995": "4904d5badf1ab4ced805aede16a8b929",
".git/objects/35/3db83002d8cdf67961a318e901d7e83ae3c513": "e1d4b1b7eb9d7da48ed7acb85dee4b59",
".git/objects/54/189a78b94b8e49d53fb0c8f8c61b9241bcc55a": "ae8aea72253c6f423cf4d4f5002d5cb7",
".git/objects/25/80fae26e12fee644aa52550bce68a71205475f": "55b5a4a346cc311dacdab0a136fb30d8",
".git/objects/f6/e58f4e8d971114bcaf195292bbcf9d729151cb": "b374f6fb56fc58b286d574080d142548",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/17/34ed3e55a263b61ecf732fb334dcfd9f80ba56": "b5915d7e90204289c279ee7d02fccb15",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/30/adf4e9223867ed24dbc5440bd119b837d6655c": "46bb8d73ec573fe1f800aafd7c8cf804",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/master": "065cf717ead2a58a95e4e9fc78547541",
".git/refs/heads/master": "065cf717ead2a58a95e4e9fc78547541",
"manifest.json": "dcf49812c13fd1dc7ee0c148263a8a3a",
"favicon.png": "6909bd781f11053b47b7cb099999f34b",
"version.json": "b3bbaa269511e11e21829e41e92d40dd",
"stripe.html": "6c339243e4e5675faf011a85a21f344e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
