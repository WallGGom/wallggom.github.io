'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "24e4a7aca252489ff196f11bf8a48743",
"assets/assets/fonts/NotoSansKR-Black.otf": "05c077164c27fa722dcafe63ed38355e",
"assets/assets/fonts/NotoSansKR-Bold.otf": "e2406ff1791c401bc93e73d9e44e6d2b",
"assets/assets/fonts/NotoSansKR-Light.otf": "e914a10a1bd0088fb8f743fc7569749f",
"assets/assets/fonts/NotoSansKR-Medium.otf": "32666ae307200b0bcab5553590672bb1",
"assets/assets/fonts/NotoSansKR-Regular.otf": "210989664066c01d8ffdbdf56bb773cd",
"assets/assets/fonts/NotoSansKR-Thin.otf": "277434d967d5f33b857fc3f2dbaff15b",
"assets/assets/images/19_0321_CoolerScreens14857RT.jpg": "18a2038e1aec068818c29f53aecf3f9b",
"assets/assets/images/19_0321_CoolerScreens14900RT.jpg": "9e02bdaa888a2571fa2724fd0fb20b5e",
"assets/assets/images/19_0321_CoolerScreens14911_2RT.jpg": "d2ccb250490435e83987b339b28ce2a2",
"assets/assets/images/19_0321_CoolerScreens14929RT.jpg": "bc62401218cf9ae423a7a31677c82a43",
"assets/assets/images/19_0321_CoolerScreens14993RT.jpg": "6b6aa220137f522daad1630947e7e745",
"assets/assets/images/19_0321_CoolerScreens15065RT_.jpg": "7c4409bc05abb7b992e57c2a865b2729",
"assets/assets/images/19_0321_CoolerScreens15084RT.jpg": "57a927be2a845514403e2a65fa50f97d",
"assets/assets/images/19_0321_CoolerScreens15157RT.jpg": "0e1228a4acd88a4fe1a47655497a5429",
"assets/assets/images/banner.gif": "327623aab292c184496bf66517857bbd",
"assets/assets/images/banner_ads.gif": "6ad184938b202ad1ef2c7717bad6c9e7",
"assets/assets/images/basic.png": "35f8629cca1899d4b669bcbcad2fdaf9",
"assets/assets/images/cola.gif": "ac58a6c497ac7179f3bdcab65a824dcf",
"assets/assets/images/CSI_Lockup_Horiz_1line_rgb_Registered.png": "14d0c34dfce9dec29ab1dde888362b10",
"assets/assets/images/CSI_Lockup_Horiz_1line_rgb_WhiteType_Registered.png": "6ccc484e238909bd73db697c9c2a3ccd",
"assets/assets/images/CSI_Lockup_Horiz_2line_rgb_Registered.png": "f5f954fb199ad1de5020a1c1d2cd7070",
"assets/assets/images/CSI_Lockup_Horiz_2line_rgb_WhiteType_Registered.png": "d0a482bf812c4b33e4084caf697bfd51",
"assets/assets/images/CSI_Lockup_Vert_rgb_Registered.png": "0306c5224c2af46cbb34f22f1f85b6ba",
"assets/assets/images/CSI_Lockup_Vert_rgb_WhiteType_Registered.png": "1c6647d6141b508ee050e787eb08767b",
"assets/assets/images/CSI_TaglineLockup_Horiz_rgb_Registered.png": "382a45119e2e99126d80f5ec41552155",
"assets/assets/images/CSI_TaglineLockup_Horiz_rgb_WhiteType_Registered.png": "b1241bd240322b341e81816e950db760",
"assets/assets/images/demo.png": "de52220849454384211d1a073c47eec4",
"assets/assets/images/filters.gif": "ba76b5f35daf9c34c4ffc762b2dd599d",
"assets/assets/images/fulldoor.gif": "11830ff5ac51c3ecc500b86ec48dc96f",
"assets/assets/images/label.gif": "467e60cdd604ff973c584e1aaf0861a1",
"assets/assets/images/multidoor.gif": "287b5a46022dc2b561ae2afd33854f1c",
"assets/assets/images/native.gif": "cfb82637a2ec63ad83a129f1be5f058c",
"assets/assets/images/promotion.gif": "fbd174c77b55621cd18b33d65dcda40a",
"assets/assets/images/resizing.gif": "883f2c208bd929a0fc128188b9f18932",
"assets/assets/images/smile_cooler.png": "a1d225ff800b2fc5bacfc4864722e3d7",
"assets/assets/images/spinner200.gif": "41cb3ac0709a160f63f1d22ad76e022c",
"assets/assets/images/spinner800.gif": "fcfd42474f8bf44e74a88514f0885532",
"assets/assets/images/spot.gif": "ad1f09782026219707a6e86e90c5066b",
"assets/assets/images/spotlight.png": "c3597e3602a881fb4458f160a139591e",
"assets/assets/images/spot_ads.gif": "11f7e1125b4980d1e22dfa07d73b782d",
"assets/assets/images/two_doors.gif": "171eda8de85826fb5e20df38afa539f8",
"assets/assets/images/wall_ads.png": "321c00e8e3533d01159a64a14d42d15c",
"assets/assets/images/wall_paper.png": "58eb2b7336823153d401dcbd921805a7",
"assets/assets/images/wall_paper2.png": "91f556323a3911d72ba90e497bfe80c2",
"assets/assets/images/wall_paper3.png": "846b72482156cbf4da105c4d8ddf440d",
"assets/assets/images/wall_paper4.png": "3a4f8da1d083e5b85d369b0065fcf5ab",
"assets/FontManifest.json": "ce427f14a33a2154d776c1c274087746",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8f0b76536c4ad3dbb2950716736de7c8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "21c8fd7cfb5920a517d5093fc447749a",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3e55cdd81a2d67892c8e9bcad4320e56",
"/": "3e55cdd81a2d67892c8e9bcad4320e56",
"main.dart.js": "574f4762125bb2d2a635749497f7fdcb",
"manifest.json": "f9c4c93cbe19d3303d61b8b9948228bf",
"version.json": "356ec77506da903103683009b880319e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
