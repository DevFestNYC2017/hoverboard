"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["data/blog.json","60ebfe65fb4666d3cb2c254e2a0e0fd3"],["data/firebase.data.json","b2512e2f1b486705f5a2c45ef093ca6a"],["data/hoverboard.config.json","83a61b69a5462eeea97e7ade131b9489"],["data/posts/2017-08-16-c4p-time.markdown","1424b019463a6a6abfca03b70b353ad6"],["data/posts/2017-08-16-devfest-2017-announced.markdown","65379533f5a85b9fe922936c3c5b2049"],["data/posts/2017-11-16-devfest-nyc-summary.markdown","b2335b5a1899f880b208cd794d4519cf"],["data/posts/code-of-conduct.markdown","fa86cfb9d4bab16db8bc7e24fa595b41"],["data/resources.json","fe32590d5abd4dc542a1eba5a72a7611"],["data/tweets.json","80b8481b23c5a2e43a316f24b8973f04"],["images/backgrounds/2016_1.jpg","ac34fb57ce0af1aefad8d8fa1134a4d0"],["images/backgrounds/2016_2.jpg","46272acb95e633f480d42d102cf98894"],["images/backgrounds/2016_3.jpg","03cb4ed1646cc580951f714274989d89"],["images/backgrounds/coffee-break.jpg","2172f6f419fd1f8371d89e840e0e6a30"],["images/backgrounds/home.png","c87dcc5233b431e5a2a8bebb09c3aa39"],["images/backgrounds/hub.jpg","07deaa4dc55f4df9118c2038b1c898d1"],["images/backgrounds/location_1.jpg","4bb5363e0e1683b4bd88632e1ea38d36"],["images/backgrounds/location_2.jpg","089e9d8e232e7b66cd093dabf015f07d"],["images/backgrounds/location_3.jpg","d23e7044d10975c305b9b881cd4fef13"],["images/backgrounds/lunch.jpg","a718444c98c994e4fbc8f45cff691652"],["images/backgrounds/morning.jpg","54cc39b7224d53a7f43f61904f61d563"],["images/backgrounds/opening.jpg","89ce87e4a81b55632bef0f265ebf1740"],["images/backgrounds/party.jpg","932b756ccaea542e3c319cea55d4f3a5"],["images/backgrounds/registration.jpg","d9ef7bd5493e915ac330d65f7050a31f"],["images/favicon/favicon-32.png","2bd2d083368649bd07d73cbae5b7a104"],["images/favicon/favicon-72.png","d8b46bac13db0de8590a33277f25e892"],["images/favicon/favicon.ico","b86585686052335d3f7ef73973e18aef"],["images/gdg-nyc.png","49055d15b52d60e09a1432d8015f4b4d"],["images/logo-light.png","e6257af11f3d928976f6a1a426892c3f"],["images/logo-light.svg","46b565a5848cd7cdfffdbf259755f876"],["images/logo-monochrome.svg","46b565a5848cd7cdfffdbf259755f876"],["images/logo-white.svg","46b565a5848cd7cdfffdbf259755f876"],["images/logo.svg","46b565a5848cd7cdfffdbf259755f876"],["images/logos/gdg-nyc.svg","c730961195b12cc30300f7db8ad335f6"],["images/logos/gdg-x.svg","0898d83e4069b77f8a2e00ecd164d3a7"],["images/logos/google.svg","888b314b2d82dac34ba4f7d1df8e0a84"],["images/posts/announce.jpg","a875901e467370da9efa6da915da105f"],["images/posts/c4p-is-open.jpg","572615f122756f1f9d1cb0a02e940f73"],["images/posts/dfnyc-2016.png","f20b48adc24ce71130430da0b704f050"],["images/posts/dfnyc-appfest.jpeg","0f4cb7ff63e03862a4ee76cb2f18b706"],["images/posts/summary.jpg","51474d37aaa6569869202f3eee984f6c"],["images/posts/summary1.jpg","c6deb766b3d711b16dd54836cec831be"],["images/posts/summary10.jpg","1aff5a0ca99650e9cee58905465a78d6"],["images/posts/summary11.jpg","3ac05465390ffaeb194b1bee3ff047d2"],["images/posts/summary2.jpg","74e85ef3a6a30e5d6cce59a21ea95887"],["images/posts/summary3.jpg","3c58db9663491bd33513bd57942947c3"],["images/posts/summary4.jpg","176b9543955b84c0bbda8f21a80aa7f0"],["images/posts/summary5.jpg","c78308e79f8fdb281df1115ce04c68be"],["images/posts/summary6.jpg","4637db009b49463d40be52c9e57c367a"],["images/posts/summary7.jpg","18f9515bb11dcf2e2a98a856b939b23d"],["images/posts/summary8.jpg","51a6357257d94790599645aa1059e0f5"],["images/posts/summary9.jpg","63bbe0210affa537342e33e7a203bbc6"],["images/social-share.jpg","b36bce5b95efb888a6515244a429a75e"],["images/touch/homescreen-144.png","f2c492e99b8366a6d92a921f8249152f"],["images/touch/homescreen-168.png","e91d7370f1706d5998d1e05da8ae91bc"],["images/touch/homescreen-192.png","7104d21d84f1c1c2f30fdd5659ef7786"],["images/touch/homescreen-256.png","6e673bafbd9ca017c73f2e519a4db8ec"],["images/touch/homescreen-48.png","2a91b18b9b85898f97937c5576173705"],["images/touch/homescreen-72.png","d8b46bac13db0de8590a33277f25e892"],["images/touch/homescreen-96.png","56b02e610a135cf9e8fd5b0fc5805930"],["index.html","8970ca1c49c4ec1ab3c4965b0a094431"],["manifest.json","d120c1b2bab9015ae4de53d29314cdc7"],["scripts/bootstrap.js","fd4aa5db6eb2e0cc20f19ba6bbcdaaeb"],["scripts/helper/deferred.js","59574ed3ba207ae6af5bf90540f249d6"],["scripts/helper/elements.js","966b87f32c77ea745e9f0784ca32ff47"],["scripts/helper/promise-polyfill.js","1ded1b14068920473b2c35e644c9313d"],["scripts/helper/schedule-webworker.js","51b56bc0bebd2a683fb10f0109468fbf"],["scripts/helper/service-worker-registration.js","129abffe0514a961ad714a08757bb5e4"],["scripts/helper/util.js","e431125c25557082fb3cde562bd64489"],["scripts/metrics.js","46f6924d3de3494181822b64d4522a4a"],["src/elements/featured-videos.html","af142f4dbac14f8497a7100e8376ac2a"],["src/hoverboard-app.html","c661773c4525297ce725043157da599f"],["src/pages/blog-list.html","2f87c2764cfb59f98a9498179180f97e"],["src/pages/blog-page.html","0f18e1649cea95f2c0de0cb656c0fcee"],["src/pages/cod-page.html","c02931fd57dd005d7066bec31bc822d9"],["src/pages/post-page.html","f13cfabe660436900db7be76f1090566"],["src/pages/schedule-page.html","2bb99762bbdf88b4949ee25b77b31869"],["src/pages/speakers-page.html","6485ec753cf33894721edea07fab51a7"],["src/pages/team-page.html","f911ce297d15e1070a3a365f59d3c566"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=a),s.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,s,c){var t=new URL(e);return c&&t.pathname.match(c)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(s)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var s=new URL(a).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,a){var s=new URL(e);return s.hash="",s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],s=e[1],c=new URL(a,self.location),t=createCacheKey(c,hashParamName,s,!1);return[c.toString(),t]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!a.has(s)){var c=new Request(s,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+s+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(s,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(s){return Promise.all(s.map(function(s){if(!a.has(s.url))return e.delete(s)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,s=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(s))||(s=addDirectoryIndex(s,"index.html"),a=urlsToCacheKeys.has(s));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^\\/[^\\_]+\\/"],e.request.url)&&(s=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(s)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});