'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ae6aed5a9d6ac3555c586382872f102b",
"version.json": "89a23ceb77571254ad27444391a8e438",
"index.html": "5291f0edefd21a51c223c26f905581ea",
"/": "5291f0edefd21a51c223c26f905581ea",
"main.dart.js": "e9610d9bab1517d1093c06286b666035",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "027f30f23b48d9ca86b94dad1b3be0ea",
"assets/AssetManifest.json": "ecbef55c6aee59fb477862b9f2f17cac",
"assets/NOTICES": "fd2ff8a2765fee2ac505ba562057ca81",
"assets/FontManifest.json": "e4ba826df96c9ae940cd6e8e2229a6cc",
"assets/AssetManifest.bin.json": "1d8a343f8cda216730ff803b148acb30",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7c6b7a7ac8712aafe7f6bfca00404cdb",
"assets/fonts/MaterialIcons-Regular.otf": "21d614e9218f237b76d697599856189d",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.45.01.jpeg": "6d4e04b23f90feea3980b764682d8cab",
"assets/assets/images/instagram_image.jpeg": "d0994c3e82c00f7a05f58b12f876cfce",
"assets/assets/images/universit9logo.png": "4e44666e30046e15ff46ea52c499a595",
"assets/assets/images/university12.png": "dda41bd1abf9ccd6139f3f8448bdab39",
"assets/assets/images/applyforjobs.png": "09d64eef5366e65f9a70eeeb944d5cb0",
"assets/assets/images/careersapplication.png": "3f3d6b891ad80f000240b83f81136e13",
"assets/assets/images/classroom1.png": "33d13170010c58e64965a09b30933245",
"assets/assets/images/egstudio1.png": "f12e9f782d32648f9c62d725e4ba324f",
"assets/assets/images/email.png": "caaf2bd09291a53d81ab774004f0a0b4",
"assets/assets/images/eCHB1.png": "ec386d5d3cb50422c2289dc753fde6c7",
"assets/assets/images/university9.png": "a81a53657df9e20b2d65416f473c06c2",
"assets/assets/images/eP3.png": "0d910556ffbf4ac58f0274f8d6104609",
"assets/assets/images/universit16logo.png": "ca2dcbe6162a89fd6a369164d62aa659",
"assets/assets/images/studentsconnect.png": "e2487a1a2a358c9f4751361733fb59d9",
"assets/assets/images/fund3.png": "d91f649bafea98a208dda85e006614f7",
"assets/assets/images/fund2.png": "e23cea210e558b8a69eab5776bd1eacd",
"assets/assets/images/signin1.png": "0018200319150dceed7287ce4abebe86",
"assets/assets/images/Vibe%2520Education.png": "6ef434a843dd758251a48d77de5f00ee",
"assets/assets/images/accomodationstudents.png": "c32435bbfd1bc554e0d9a70b1ec58f12",
"assets/assets/images/guides_ebooks.png": "aab941ec61c68c4118da09897076c24d",
"assets/assets/images/empty_cart.png": "50967e5ee6395ba5f2f5cd7001022e5c",
"assets/assets/images/mission.png": "b80a077af7a27fae2a6f6dc101e5c13a",
"assets/assets/images/scholarshipapplyprocess.png": "9f8a7a8d04c2122573f16c72682cb790",
"assets/assets/images/eP2.png": "939ecba16a2d3e1ce1dc2388c1694088",
"assets/assets/images/university8.png": "73f75f3569d59506eac6f067e41df9b7",
"assets/assets/images/nextstep.png": "a36668ec9bd2d4d2437d1053eedfb4ab",
"assets/assets/images/application.png": "d904891bff8b1756cf73c5f70dcd0c4c",
"assets/assets/images/eCRSB1.png": "4930ffec52c293a373ac7a62dc1b0def",
"assets/assets/images/gluster1.png": "52f4fc335ecd696eb6f1c0730c6be544",
"assets/assets/images/university13.png": "55d6017dec30b0144c4668d535d0e8cc",
"assets/assets/images/partnership.png": "1ef920baf5b7d6e27e4971e2a22c3c98",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.57.jpeg": "08212e37b201ab05d617f053235cf699",
"assets/assets/images/university11.png": "12b1ba9e73b66684dd318e83324b17d3",
"assets/assets/images/transportstudents.png": "921039f70dad2d59b6645bf46047e252",
"assets/assets/images/eCRSB3.png": "42815d4406ab6c6b2cdd407ec8068332",
"assets/assets/images/classroom2.png": "6920fd54ef3ad9661c7163bec341749d",
"assets/assets/images/accomodation.png": "d94ca9719238c10d7627938f993958db",
"assets/assets/images/eCHB2.png": "ff65041993a629c242d943a9db43861a",
"assets/assets/images/stepahead.png": "4271e16de2b8358a3ceb4bf98d450cac",
"assets/assets/images/eACCC4.png": "cdb1a65179fd5203fb8623f4461afa0a",
"assets/assets/images/ideastationproject.png": "753d225d40f30ee461bb8c23eb9216a5",
"assets/assets/images/credit9.png": "4754d449ed0887fd92ea51d73f496b74",
"assets/assets/images/elearninguninew.png": "9c241b0c584425df7f44a6d0be2c5336",
"assets/assets/images/level7thirteen.png": "6b2904c7e7f8704de552765a25238778",
"assets/assets/images/pathwaysapplication.png": "80cd63a3748d0ec502a59fac1c1a1a51",
"assets/assets/images/podcast.png": "ac5049f322bad33505a28227cc5f3fcc",
"assets/assets/images/employees.png": "913b6b4c6b179a85f364048fb06031fe",
"assets/assets/images/fund1.png": "447e623788b7007e24cfcc78846bd063",
"assets/assets/images/UAE.png": "b31e3af54e7b89e525f31613d13edf94",
"assets/assets/images/scholarships.png": "d1c783e8d010931dcc62c7b21b6a51a1",
"assets/assets/images/credit8.png": "1a14f8ae3d150deecd1f038c83b30f94",
"assets/assets/images/150175.png": "db08aee854aad6bef6654f7d59b15244",
"assets/assets/images/aboutus.png": "59ee81b7624bfda7c253b9d521cd4841",
"assets/assets/images/level5one.png": "1eb2a9cad8f85154167f0f6f84b0fc81",
"assets/assets/images/eP1.png": "1f12e65ffe5c9a73ca0d5e08f173e888",
"assets/assets/images/universit20logo.png": "820398a239cf6727d2912f118702df68",
"assets/assets/images/login_illustration.png": "7843f666ce0a070a1330489e1660e3f2",
"assets/assets/images/eCHB3.png": "b2fa2642b21a17e379a4aeb3895e34f9",
"assets/assets/images/scholarships_financial_aid.png": "ce4bfdc17692c54eb2e58ef95788d0a8",
"assets/assets/images/classroom3.png": "4198dd36bf75c92bbd42526c947f189e",
"assets/assets/images/eCRSB2.png": "07b33014cd52849af98892e6988a6de8",
"assets/assets/images/level7seven.png": "62032d53d72d1048d991a9a2f346a0ba",
"assets/assets/images/university10.png": "67f72bf5a8d373ac9befc99e52ad5018",
"assets/assets/images/sms.png": "acc8a6aae90168721a7ad6f1eb9ab5d6",
"assets/assets/images/level3five.png": "c90115be93e498aaa9ae66cddf2f919f",
"assets/assets/images/adduniversity.png": "f49227a7cfb1c16815dc55aecdef8222",
"assets/assets/images/university14.png": "63e95cf4f03a4697d2ee60e417df4d8a",
"assets/assets/images/level4ten.png": "5bffa46d9413d29b102b340895103bc0",
"assets/assets/images/homeimagemobile.png": "244dbf564faf7ff4155518ea75a77fe2",
"assets/assets/images/courseoutlinenew.png": "ff157a4b5ae4cffe87e23452bfd98b40",
"assets/assets/images/eACCC1.png": "728f068e07898e4c7569c510cd82a6f3",
"assets/assets/images/nodataImage.png": "383aef1a9a6d353459669f2f4fb94a0a",
"assets/assets/images/University%2520of%2520Gloucestershire.png": "0731c87cc73098e681859d1491dc55af",
"assets/assets/images/BritishCouncil_Logo.png": "2e7c25007ec3721c74e4fdf5ce7cdc17",
"assets/assets/images/universit1logo.png": "d4cc384c71f8aafe7e172136335485e4",
"assets/assets/images/universityaccreditation1.png": "2eb5d2bbeb7efd8f5fdfb46b30de1680",
"assets/assets/images/fund4.png": "7dda7170f60913de02341e4061398e30",
"assets/assets/images/universit21logo.png": "71225cce6a964a88c28ad7593cc25e96",
"assets/assets/images/jobselection.png": "e2d92ff568d808ad0bfeb7d8651c7cea",
"assets/assets/images/travel.png": "06da22017684307c34b69f0a56fde8fd",
"assets/assets/images/businessportal1.png": "8f0dcbbacfd06602d98c42221dea3cca",
"assets/assets/images/level3three.png": "605dfde6ed0fac2f10076648cdfe11f8",
"assets/assets/images/eP4.png": "e62998a62beccc4625f568393213d896",
"assets/assets/images/whatsapp_image.jpeg": "d4213c9456bb3473bd4938084b6871f0",
"assets/assets/images/level7one.png": "82feeaaba00a00542b1c60a753c9293b",
"assets/assets/images/logocourse.png": "e627dd1223abc61ee48db2f1b4280c92",
"assets/assets/images/newsletter.png": "70926ada7aa4488392c8b9f59006b5f1",
"assets/assets/images/university15.png": "1ed0ea90229264fac1791562506bac7e",
"assets/assets/images/joblogo1.png": "23910861882fcafdfcc3d96384d3041d",
"assets/assets/images/university17.png": "ae914a136fc0062b8f0c77a4877875e1",
"assets/assets/images/meet_the_faculty.png": "99a5a62d905c79989d7412c0a7b6924a",
"assets/assets/images/classroom4.png": "6023070a003da02088fa707d4664ecab",
"assets/assets/images/level4eleven.png": "3669f0e6389974a9690f2b6c1f4d1ab0",
"assets/assets/images/universit8logo.png": "b62a556a371cde7927e8e06d0b14d311",
"assets/assets/images/benifits.png": "78312748a43c27bf99735093857ce757",
"assets/assets/images/careersoverview.png": "82f575ffde4bd1692c6edd8dba13234c",
"assets/assets/images/qualifications.png": "8a4dbeddd3b52e7c46785f2bc7315568",
"assets/assets/images/businessportal3.png": "3672c34088a916697d3d433063d1a618",
"assets/assets/images/eACCC2.png": "58174f389aef48aa9b1d9d324b06c026",
"assets/assets/images/eCHB4.png": "dc6aada5a9d63c6b777a342af87571d5",
"assets/assets/images/worlduniversitiesnew.png": "1795110046c843931a77570d2438ee31",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.57%2520(1).jpeg": "5defc5d386d227b6113635c668af81cc",
"assets/assets/images/alumni.png": "eee8ed53dbb7dea99e7f4ab7a2e6eca0",
"assets/assets/images/courseoutline.png": "e98581a46184f1ee8af05eed1928d0de",
"assets/assets/images/likedin_image.jpeg": "633255efc6348b00f48186fc79817cff",
"assets/assets/images/egjobspage.png": "57a8a0acc0f35048c728bf3a050fb65e",
"assets/assets/images/universit17logo.png": "e8b5fe0026081df1a671508828ea3ae4",
"assets/assets/images/webinars_workshops.png": "5a435a3655523094fdc2343d2b7817af",
"assets/assets/images/worlduniversities.png": "6b81975862b7f3c315478ade514d2677",
"assets/assets/images/siginpartner.png": "8c917a387c5a5a7a474166b426671cec",
"assets/assets/images/transportationimage.png": "62a9c4e9ca261d5a672e08fbbd81536f",
"assets/assets/images/navigating_uk_education_system.png": "07552e9cd7123c77a9048dbf02c67982",
"assets/assets/images/siginbusiness.png": "ba0a3b12231493f83e6684e550396afc",
"assets/assets/images/egstudio1new.png": "eeb41211d0f25bcf945bbebc156ccda0",
"assets/assets/images/businessportal2.png": "aadcfdfc0cf0a06ac274232c6837a4c4",
"assets/assets/images/eACCC3.png": "c2074d2606909c8a7d94557550234187",
"assets/assets/images/eCRSB4.png": "c649e5bf12a4b98cf5699b79def437a5",
"assets/assets/images/enrollementprocess.png": "dc2445ea2570fc6dcdd947fb6537dd60",
"assets/assets/images/egacademy.png": "d54f1fe00f4138616ea0102bd2a95631",
"assets/assets/images/level7four.png": "eec3a4bdcefa16d5ca133ff8fda42e69",
"assets/assets/images/advance.png": "18906884add993a39b6babefe1c982bc",
"assets/assets/images/university16.png": "6caf91567037b7d1af9690197df783d6",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.45.00.jpeg": "ffbb48c636f4cf88dd1e60915e0b855f",
"assets/assets/images/winning_personal_statementnew.png": "153c13fad7dba3bbd56785accca07c6b",
"assets/assets/images/eACM3.png": "7ec7660f1192068756f2f824977e9cc3",
"assets/assets/images/level7eight.png": "68a1e1fac0fef193588f6fe98d71f433",
"assets/assets/images/level3one.png": "9a6e914ca53f52129cd545679ce8d41c",
"assets/assets/images/eCR2.png": "bf629e21db23ffca9c4b27e47bc5d653",
"assets/assets/images/universit3logo.png": "e171fe5f4d75ae078f1d537e42e8c3d3",
"assets/assets/images/service3.png": "aef9425b46144bd8d1291b69738a7529",
"assets/assets/images/STP3.png": "da25af7712e621c8ef7093c712e52951",
"assets/assets/images/parentportal1.png": "275c99f124733183802e6d5077d2e650",
"assets/assets/images/ePHS3.png": "97052fa57514cd8f84a8ff950e617000",
"assets/assets/images/logoicef.png": "868c23db8bcf953d1315515729d1747e",
"assets/assets/images/USA.png": "7b870bc60c62dc3519b1405182a1d3d4",
"assets/assets/images/why4mobile.png": "9269b92287cc43dd5abb980591e4b416",
"assets/assets/images/course2.png": "d36c91e43558ff2f2223c6f88243738d",
"assets/assets/images/courses.png": "e6599909411dcaf1d80cb560dd465f38",
"assets/assets/images/review.png": "76e3bec9f44a19c14ae0249a111ea508",
"assets/assets/images/tour1.png": "a9b278d320cb0a1abfba9fe72147335e",
"assets/assets/images/ePP3.png": "f5e85de8de7599a2ba7bcad6248f1542",
"assets/assets/images/eGs2.png": "6c206616c8c4b9d8180f41fc5f094f99",
"assets/assets/images/eGSC2.png": "a074a877dd4e1adda926cea154efda30",
"assets/assets/images/usersignuppage2.png": "57a30738d25308a8bf70c94f15eeb6fc",
"assets/assets/images/Australia.png": "36c990ba22f9551622e775351d6b4c9c",
"assets/assets/images/email%2520image.png": "26b989b742a352c92d18d12cdf7e722f",
"assets/assets/images/projects_3.png": "a2eb1b5c8f0ce63c56a57cf6f6271ea9",
"assets/assets/images/learners.png": "e90062544cf51a1e689d05c98218eeb7",
"assets/assets/images/ePH4.png": "979788285e1a50ce5b405c69939dc208",
"assets/assets/images/eGJ1.png": "74f8f4222c052e71d973091b37a2e2ca",
"assets/assets/images/faceboook_image.png": "8cf5e300b2e3086e6fd464c573b01b74",
"assets/assets/images/projects_2.png": "ad65d5f765ff4e985a077c748162387c",
"assets/assets/images/signupillustration1.png": "aa5bfb18da395948069317530eb3dc06",
"assets/assets/images/careersnew.png": "555fc936d2273854a6ec0c5eee81be25",
"assets/assets/images/level4three.png": "df104b619cb5744094938187682bb055",
"assets/assets/images/eGs3.png": "bd3947a46f4ad962d9e2999931cd631d",
"assets/assets/images/ePP2.png": "14282326fa39f579c8022d47c228efba",
"assets/assets/images/eGSC3.png": "e23a794af5279dc18e330dc512a28417",
"assets/assets/images/elearningjob.png": "7a6a813429c9847bcd606fad27f8ac39",
"assets/assets/images/course3.png": "a2f182b669032b0c35f74b7c40162594",
"assets/assets/images/checkout_banner.png": "12610aac8767416f5ed5456071ccf735",
"assets/assets/images/bcaccreditation.png": "9d16dec1763b2515310b5f6518cc8e85",
"assets/assets/images/contactusnewfinal.png": "ccb276bc67f6f47f5c049b1448dd1cd6",
"assets/assets/images/studycenter1.png": "c7817781bd41dccb8c728510f9291342",
"assets/assets/images/ePHS2.png": "7071a1759e4b898de25e4a2e44c9852d",
"assets/assets/images/STP2.png": "fab2d10969716e8ae7665144c116d2e6",
"assets/assets/images/level4six.png": "42ad959bf65cb93381a37f195630f98e",
"assets/assets/images/service2.png": "22a62d8c1dd395cf95d9ebd4709f06fe",
"assets/assets/images/eCR3.png": "36db4e8933277324b4f381bd6df099ff",
"assets/assets/images/educationjobs1.png": "792ba7697b70aad00a04f0fd6a331d1c",
"assets/assets/images/eACA1.png": "4d4b783d4c8d9a9325838bcd8df06677",
"assets/assets/images/studentexperience.png": "625c4551e2a02719a830ecb08cd46486",
"assets/assets/images/level4two.png": "c14a98084b950e765c4de0ae7f9035e9",
"assets/assets/images/eACM2.png": "f8348a2f0892dd25716659522551c0b0",
"assets/assets/images/elearninguniversity.png": "5a1ae02a90409ab8266b1c0375c8066b",
"assets/assets/images/jobrequirements.png": "dd10cf3675981f18db9312fa5489c762",
"assets/assets/images/egstudio.png": "9601b8f346fa76933aa1ad3a2a0bab7f",
"assets/assets/images/call_image.jpeg": "aa907afebdcee6420696b28bab3bbe79",
"assets/assets/images/eCR1.png": "e9bfad4336d4a3303c415f48729c0204",
"assets/assets/images/eACA3.png": "92e53437eefe7a6c5f09e8fd527ba951",
"assets/assets/images/Sweden.png": "45ad53a5b66a89ad64e66207a6a20033",
"assets/assets/images/parentportal2.png": "5fdd6873f6226fd2422ee0f7cf204043",
"assets/assets/images/whatsappweb.png": "0233e7233ca1b0147339990f6b9809e0",
"assets/assets/images/Quora_icon.png": "674856c2afa89e3f4b4ffed48705bc2c",
"assets/assets/images/studycenter3.png": "ba467b4ec4880f4f7d7ef32b4e77cc4c",
"assets/assets/images/universit15logo.png": "0c5462a5286001d16caf2c49ac490776",
"assets/assets/images/course1.png": "40977d372a8764b6c33027aba3acdd3f",
"assets/assets/images/eGSC1.png": "98eedde7c381f0d855817d2f5916e1b1",
"assets/assets/images/eGs1.png": "5cd505e623413d842c2cc6653ede8972",
"assets/assets/images/tour2.png": "950316292b64dcb7dd28a86b4c7bb226",
"assets/assets/images/educationjobs.png": "71687babb7f4adef90a40325b973f80f",
"assets/assets/images/usersignuppage1.png": "efb5be4e31665dd2a4524e995d547714",
"assets/assets/images/down.png": "36975b46649484e1819703669c3548a1",
"assets/assets/images/projects_0.png": "a80d6f43167a449753d0a8aa44cbed7b",
"assets/assets/images/eGJ3.png": "e1f4d7c9c85088132c628a42210eb300",
"assets/assets/images/level7twelve.png": "0076239f3d4f70256ead23480f47ce52",
"assets/assets/images/eGJ2.png": "18ab121154ef8c95fb6f09e6f9278392",
"assets/assets/images/projects_1.png": "4edf4551fa5fe6db44af2834ecd13045",
"assets/assets/images/tour3.png": "3e79f5cf8f00a8d72220dcfc23fc9af6",
"assets/assets/images/ePP1.png": "8f751db8b11363901802b6a2ba2c0a3d",
"assets/assets/images/Mail%2520Envelope%2520With%25201%2520Alert.jpg": "047057d9856e809f0f1d7e780a45c7fd",
"assets/assets/images/studycenter2.png": "0a452843d1ebc59e11afba524a34e887",
"assets/assets/images/egscholarship.png": "e91e5cc1d26c3dd2a6431e6fcf06ea97",
"assets/assets/images/STP1.png": "6b22c4ee4afadaed2da192b0af4c31c4",
"assets/assets/images/ePHS1.png": "35eaf8a3773da256d39e45d8cf414225",
"assets/assets/images/cities.png": "99fbc07d484f5a9118a9f9bc55b4dcfd",
"assets/assets/images/ejB4.png": "29cd0924f193b1342a9ede7cd42dcf0a",
"assets/assets/images/online4.png": "86e20deed5b7b887193bac810b149a51",
"assets/assets/images/level3eleven.png": "0d3a055760fcb17c0c6b06ee1dbc0b2b",
"assets/assets/images/service1.png": "0c39f3d8fbc033e3e62e58cba80873e1",
"assets/assets/images/eACA2.png": "eb97d9a402cf5d772f1228342f29f539",
"assets/assets/images/educationjobs2.png": "3650ee564fa6321bd3604b367ca86006",
"assets/assets/images/library.png": "f8f3688f4cfb31704ae5281d50ec4407",
"assets/assets/images/eACM1.png": "5f209c635a63b5bebc488863bb56bbcf",
"assets/assets/images/universit14logo.png": "de8da2222531113d762d770ce95239c6",
"assets/assets/images/eCR4.png": "678a8311cf0954deb338ae61e205288e",
"assets/assets/images/careerhub.png": "7fc8a58c365adddf9be6465e719881a0",
"assets/assets/images/eGs4.png": "c02115968400b5eb88c4cde593520ab5",
"assets/assets/images/eGSC4.png": "1fc02f9ba83be5499c89fe4d01ed9e25",
"assets/assets/images/bk12.png": "b1f89411bb3cc0ca46e08ffcdd253917",
"assets/assets/images/ePH3.png": "67cc9afdaab46915600e0e0d1c963fcc",
"assets/assets/images/instructors.png": "7902f496609840a401d45b3eab4a15cc",
"assets/assets/images/idestationpjt.png": "4e899a9745b283c417409fb1d424e079",
"assets/assets/images/optionaldocument.png": "a4b1c218af3ace8c9dce45e889552dcc",
"assets/assets/images/ePH2.png": "884c70cb4062bb855f7c38f788d71705",
"assets/assets/images/level3nine.png": "9156688757449f9cc6c6495b5285bd48",
"assets/assets/images/pdf_image.png": "eb7bc33eaf90bb9a5ff48e687f8304a1",
"assets/assets/images/level4four.png": "b9fae2ad33b5ae9a41c47f5023f58f34",
"assets/assets/images/ePP4.png": "60f2d9a58a8dc76bf6bd605f3a907573",
"assets/assets/images/universityaccreditation.png": "5d4cfc11febb04d049597ca4af52f442",
"assets/assets/images/STP4.png": "0bc7a932b349a81fb6d454056b024324",
"assets/assets/images/egaca3.png": "5fcd10e70972a670d7f605132819f566",
"assets/assets/images/ejB1.png": "32e14074f4c1a8bcbf5640f79808079f",
"assets/assets/images/ePHS4.png": "84427afc130071b37980a61361df8866",
"assets/assets/images/NewZealand.png": "47c2550f21ac3f04c5cb0614dd90ea9f",
"assets/assets/images/corsera1.png": "e76d3a79cb4e8b851cd2655ef96418d1",
"assets/assets/images/signupillustration.png": "33bbcf18861de1d781cbcb70c1bdd274",
"assets/assets/images/service4.png": "3cd02410a7b6e7b2f49cdb5635c437be",
"assets/assets/images/Screenshot%25202024-11-14%2520at%252018.58.20.png": "d3c7952f0b140cc53096ac1ae22824ce",
"assets/assets/images/online1.png": "37c1c30e776cbbc0ba3021c88c765516",
"assets/assets/images/applicationback.png": "830c0d0b04e7671582a376d687c0e826",
"assets/assets/images/universities.png": "cb1546dfd6bfbbb0fec1be297884a220",
"assets/assets/images/eGideas1.png": "047b2c6a58850ac0330813c49c65fd73",
"assets/assets/images/eACM4.png": "30c7a7fa07ccdbd6bba15259948afd52",
"assets/assets/images/universit2logo.png": "6d5ca08dbf61e69d807449af94c9a9b9",
"assets/assets/images/online3.png": "20014d47382b6e16de797af78f13cd81",
"assets/assets/images/eSCHP3.png": "6a043625ff7cdc08a96f9c2a180f1f78",
"assets/assets/images/studycenter5.png": "fa0c7301a5c66994423bfa53557cb60c",
"assets/assets/images/ejB3.png": "109d2bcc9540c1fb6d49ea764bdfcac6",
"assets/assets/images/studyabroadpage.png": "19f6944fe3a8a8e07ce3c2eb3b28bee2",
"assets/assets/images/testimonial9.png": "5855261322acfe4527d8e1a92d41f05d",
"assets/assets/images/tour4.png": "4e611d88c913d8b7c2d271546013f4a3",
"assets/assets/images/bk11.png": "bf9028ed0df44811b9302d5e571b548e",
"assets/assets/images/course7.png": "4dd1af7e9f96e5dec1c92a0ca0a648e4",
"assets/assets/images/bk9.png": "9fd826c925a29ec94f8b3126557f24b6",
"assets/assets/images/ePH1.png": "55433565595b4d8fe12589b29b095b0a",
"assets/assets/images/adduniversitynew.png": "65ddf3cb0f858a6e97911302ab307fc2",
"assets/assets/images/eGJ4.png": "1f06771b391f1369edc058b314073578",
"assets/assets/images/requirements.png": "efdda30a0b55b6cf9ed9d428a1cd0b55",
"assets/assets/images/payment.png": "67ea2f1a62264ccbd01e310f5b3ce412",
"assets/assets/images/bk8.png": "cb6987691d21ba02522de1926caa837b",
"assets/assets/images/level6two.png": "9b5eb6c2db0314f52bea3a52dc4fefb7",
"assets/assets/images/bk10.png": "7f89617f93a67e33dd07306bfb7f3847",
"assets/assets/images/testimonial8.png": "410eefb23cb9a2a7d2159e2aa7aced44",
"assets/assets/images/ejB2.png": "9f707cab97eb422e801b8305f3545d56",
"assets/assets/images/SJBB1.png": "d46bccf5da096ddd42bf1da8936209ff",
"assets/assets/images/studycenter4.png": "a661b2f1ee63ece534f1968077b66706",
"assets/assets/images/online2.png": "1637eb6f2b1131047480777c8aa033cb",
"assets/assets/images/homeimage3mobile.png": "8a5b94df0ec42c63155afc8bebb0a887",
"assets/assets/images/universit22logo.png": "8b11e05dbbebe8971a1b9125caa6c3a0",
"assets/assets/images/eACA4.png": "c548fa08e801b2bd7d386fd0eff126db",
"assets/assets/images/admissionopen.png": "bd448abab8647ab0d0b62836d6ee70ae",
"assets/assets/images/eGbusiness1.png": "90c7d1c639392dc98e63e4ac90d43017",
"assets/assets/images/careers1.png": "accb9cd06023a581174e81492ed58699",
"assets/assets/images/eGSCP4.png": "dc53bb98944f295955991e79f61676c7",
"assets/assets/images/level4one.png": "9a9083c966ae14ca1b23d3f2c606e207",
"assets/assets/images/elearning1.png": "5d7aca716ddec44f633d02788fc08abb",
"assets/assets/images/cimage2.png": "ca0a8c8ed11eed19dc9022e69d9852a8",
"assets/assets/images/careerenroll.png": "d05c0f02b01507e183cce7bc3b8ca1fe",
"assets/assets/images/educationuniv.png": "30381230383c2b597e117bb34b95d23a",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.59%2520(2).jpeg": "a80d6f43167a449753d0a8aa44cbed7b",
"assets/assets/images/eJOB1.png": "888f7f03c3ec38766e47c215e381258e",
"assets/assets/images/eTRP2.png": "e2090b722fc8b118456a956b6212ec86",
"assets/assets/images/testimonial5.png": "e1d3b1b84754bc66bb8d0d2f6c02c441",
"assets/assets/images/documents.png": "2699b1e01894e831c5ba14de3590e7a0",
"assets/assets/images/studentlms3.png": "283f57d6e3802170378e59df2f5658c0",
"assets/assets/images/bk5.png": "5407b3a3a474c0734f651cf4b4068936",
"assets/assets/images/level8one.png": "d8548ee5ff9eab02dab46f890cefe5ee",
"assets/assets/images/newsletter2.png": "7d595fc53eef6ebd25f81902473f8486",
"assets/assets/images/submit.png": "4e4bec3e00928dd5c39d1de72adf8094",
"assets/assets/images/bk4.png": "2eabb0448225639c133536c22e26d156",
"assets/assets/images/enrollementry.png": "ea66d498897c344d02f309bd38cd13fb",
"assets/assets/images/Canada.png": "d3d843f8e87ed411ce786452ae59f10b",
"assets/assets/images/universit7logo.png": "962a4b88d054e87b679e72a12722d439",
"assets/assets/images/studentlms2.png": "02db2f17c35d987d320d85973fe0b88e",
"assets/assets/images/tiktok.png": "55046fbdea38fe825e8b1bcee7de32c0",
"assets/assets/images/eSPG1.png": "147f3471eb59cf32f9741a89e6a9f6cd",
"assets/assets/images/testimonial4.png": "0ee04c2393389929b613ccefac8c8480",
"assets/assets/images/eTRP3.png": "afa6c1ba67c1064ccd0ee177d23df108",
"assets/assets/images/universit18logo.png": "bd61c014b1c4413a037d4c85451edc96",
"assets/assets/images/careersjobs.png": "1de708db82c597329958d9e000fa3e5d",
"assets/assets/images/eJBS4.png": "b616de198dda2f7ca94ca59f7733f0ed",
"assets/assets/images/level3six.png": "381b21c4f7b4b883e8589a835bbc0302",
"assets/assets/images/apple.png": "48c510b4b28e25e2eddbe7850adcaa7b",
"assets/assets/images/eST1.png": "d80af8a381c4f14e6d689f5d4fbb9950",
"assets/assets/images/homeimage1.png": "d31964fb4ed793ff004508aa8fe876b0",
"assets/assets/images/level7ten.png": "a25cdb7c46deb40dc4bb22a4f242a871",
"assets/assets/images/studyabroad.png": "639558bdb015831366d1f81bd4508e66",
"assets/assets/images/OurServices.png": "be501afb37d20b04b33abe6b98811595",
"assets/assets/images/level3two.png": "a5931b799ca3a46654d1bee78941b684",
"assets/assets/images/signinedu1.png": "b0b8f64b0e89657772510b14b8d03f09",
"assets/assets/images/homeimage3.png": "8fc3d0bb15e364d90503b71d0ac25d82",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.45.00%2520(1).jpeg": "f182bbdca31865507b1266943bae0950",
"assets/assets/images/eST3.png": "581f73f27e883f411676e8803cf2e1f1",
"assets/assets/images/level3eight.png": "fad1896d7ae17f298dc606d82535994c",
"assets/assets/images/cimage1.png": "da75e588dbb458713e64381ff24a5fa3",
"assets/assets/images/elearning2.png": "a3c7e1b39a9845c87e33a5a2db5cf807",
"assets/assets/images/elearninguni.png": "409d577ddb86a0c687ca090ae66949d6",
"assets/assets/images/eJOB2.png": "2e4d337bda820baeb3b0b2781fb8b488",
"assets/assets/images/testimonial6.png": "8d4654f8370bf3fedf7e06510fe724a7",
"assets/assets/images/eGCh4.png": "cd6a887d7c569517e3196a05042fc1f7",
"assets/assets/images/universitiesnew.png": "10ee16d8377708718b66b193a04346c4",
"assets/assets/images/eTRP1.png": "0ea392ca2131c1a3e8436a5717802946",
"assets/assets/images/faculties.png": "d7d6a324c4de1ec4bf5adb7216eb5c16",
"assets/assets/images/eSPG3.png": "be42ed268758d9fe96189acbd56164cd",
"assets/assets/images/destinationstudents.png": "ff08a731985ced306d9c40a2e8544aed",
"assets/assets/images/edumobile.png": "620171707c9fc3e6aa54b01172ed88e2",
"assets/assets/images/course8.png": "1eb2a9cad8f85154167f0f6f84b0fc81",
"assets/assets/images/ideaimage.png": "f11b6db4c98af016292034b5244eec74",
"assets/assets/images/eGP4.png": "836fa7479d9bbeca311e5642efc3202a",
"assets/assets/images/bk6.png": "28203b1cef1d64e8e625965102b5cc1f",
"assets/assets/images/eGbusiness.png": "bd0b6acbc56f8530392b09a22f792664",
"assets/assets/images/help.png": "0bbe58c8cb4658a926b6b1f0cd82c9e6",
"assets/assets/images/universit11logo.png": "c13faa5df47ae40cb5bdf1a7e8901379",
"assets/assets/images/newsletter1.png": "d60e2e0427125e5171c3dcc91dce3761",
"assets/assets/images/templates_tools.png": "d68e4f4e011875353575b4b3adc73672",
"assets/assets/images/bk7.png": "bba0d8b6f02bca12e1e5885d0bd22db0",
"assets/assets/images/studentlms1.png": "959324cb26df83d64eee19891ddb3962",
"assets/assets/images/eSPG2.png": "617821fe43df319fe77273211ba5dc29",
"assets/assets/images/icef.png": "1097416419b3473f729c5960d154c708",
"assets/assets/images/testimonial7.png": "30406b3368e92dc320958732f259f3ca",
"assets/assets/images/ABST4.png": "ec386d5d3cb50422c2289dc753fde6c7",
"assets/assets/images/eJOB3.png": "f6ba96915997d0aeae2b1afea762a6b9",
"assets/assets/images/templates_toolswebinar.png": "b2bd4354e271bf138cf446717fb9fb73",
"assets/assets/images/scholarshipsapplyprocess.png": "a4e886517c32ddefe570d5520e603ff3",
"assets/assets/images/Germany.png": "efd0dcabf004e280259ef2045a957171",
"assets/assets/images/pinterest_logo.png": "358a500d8d0fa1da04475ecd3d14ccb7",
"assets/assets/images/elearning3.png": "0777e127aa1e7a14fa19a355005b51b2",
"assets/assets/images/eTR4.png": "9d28bdcc0ccb84fd6fe6f2742a2b9bd6",
"assets/assets/images/eST2.png": "5f67c9a01c9f6c893f7d0ba7bcc7a9d8",
"assets/assets/images/PTW1.png": "c9f4e8208d7440709297289e17072898",
"assets/assets/images/bolton4.png": "24ea64fe1c5b22faf2a9aba698b6fbb7",
"assets/assets/images/transportationappln.png": "ae7185b5d3de6111b6e4310f9d3a237c",
"assets/assets/images/rightprogram.png": "3da339169102b9b4439cfd36e96107ce",
"assets/assets/images/eGSCP2.png": "9a1b8b7c49c78b92154146bca463330f",
"assets/assets/images/globaljobs.png": "4d499009b99ee3d82e1bc24608c3ae33",
"assets/assets/images/socialmediafb_1.png": "6395c24854b248606314e23ed2c7c5a9",
"assets/assets/images/homeimage6.png": "7b597d30f9713bf07366a6ef4d43a949",
"assets/assets/images/eJBS3.png": "fdf1fcba5766077ff0d1e972142d10fd",
"assets/assets/images/applicationback2.png": "7bb4170ab85d52aacf1dca3df9c05cfa",
"assets/assets/images/level7nine.png": "77bee39a2e4ce0e446b52d195ca83cbb",
"assets/assets/images/liveclass.png": "e48e932df095f51a0265a02a4f092f6d",
"assets/assets/images/eduguardian.png": "f81d518187668586282b0161ed0dfd77",
"assets/assets/images/usersignin2.png": "64983451462376a6838bce71e5f4469b",
"assets/assets/images/testimonial3.png": "2b31350328cf861ba307c689fddd029d",
"assets/assets/images/eGCh1.png": "2c3109f61d443d97aae4ff9a91542961",
"assets/assets/images/eTRP4.png": "67ed44f6af864e420f5a87fb0af7f6e8",
"assets/assets/images/accommodationappln.png": "d042b3eb879643623d186a04413f024f",
"assets/assets/images/eGP1.png": "26eded38f9b64afdfe5fa62f9b2b3731",
"assets/assets/images/about22.png": "71485e9b7ecaa63eaeb7afb95e03f0af",
"assets/assets/images/bk3.png": "7d4be542eb66e8e2ddc0778452a1d540",
"assets/assets/images/flexibile.png": "aedc2f19cdd2061ef5c0db1d96ebc020",
"assets/assets/images/payment2.png": "1df77050fe6b90454d973aee75e2cafa",
"assets/assets/images/egCareers.png": "37929bb45df2a5ca3dbe2c17b749255a",
"assets/assets/images/egjobs.png": "7ef5b063d1e1b37a8121ccf2826ab4fc",
"assets/assets/images/about23.png": "0ce055c5b51360dacd97bbe8d0efa8c9",
"assets/assets/images/bk2.png": "5d51f233548b7be5820d249dea48fd84",
"assets/assets/images/universit10logo.png": "6ca5325af3761e358d48d9f11e0fe515",
"assets/assets/images/ABST1.png": "09ea5678ebbc5d87ca6b54d320621f34",
"assets/assets/images/testimonial2.png": "24da18ca5b597dd848e03b889cdbc7f9",
"assets/assets/images/usersignin3.png": "99117b9d4970bfd478b84f0b725008ec",
"assets/assets/images/visionbanner.png": "50aa1e29725decebe5dbda7d6235ccbe",
"assets/assets/images/level4seven.png": "8e8f983e6f9cab621c04c7d05c656889",
"assets/assets/images/companylogonewfinal.png": "97fd43cf180ee87dfdfaa0e62f9b3f3c",
"assets/assets/images/elearning6.png": "c1a6d72f2f68d7bffcd368927d12e7db",
"assets/assets/images/applicationback3.png": "dc90f81479fd22202b69ce2114e1b57c",
"assets/assets/images/eJBS2.png": "c9fc8a31b12c48218d5e561116533b5b",
"assets/assets/images/search_trans.jpeg": "b96782d0ab0ea492dabcf4a0f00698d2",
"assets/assets/images/socialmediafb_0.png": "04f554fcbe92d91ff67f11ba43ffce32",
"assets/assets/images/eTR1.png": "2eee2b6dc8bff651a72de84e2d8c3413",
"assets/assets/images/partnershipportal1.png": "167ffac3e37196bd0f825d210e31074e",
"assets/assets/images/eGSCP3.png": "a22c31a9802024cf73068c01bd1937f0",
"assets/assets/images/bolton1.png": "9e5bdba533314169d38c6cb95d21bed3",
"assets/assets/images/eGSCP1.png": "361c41f928c30ef986735f8503b74157",
"assets/assets/images/bolton3.png": "31fe3cd3976b48c44f3be60dda2096fe",
"assets/assets/images/studyabraod.png": "7f61b3a9ba13d1be369decb7edec3382",
"assets/assets/images/eTR3.png": "2b67e49f4dd0ab987625fffacb3545b2",
"assets/assets/images/socialmediafb_2.png": "515fbef0a4c8c52eb555596665d8d11e",
"assets/assets/images/partnershipportal3.png": "641e5e81ef13ae76c5b3530735dca8bf",
"assets/assets/images/applicationback1.png": "4793f8b1f0778b2dc28cc10bfb6508bb",
"assets/assets/images/profile.png": "7dbde1c33cffbcc4feeca576d6dbe2a6",
"assets/assets/images/elearning4.png": "a54cce525dac20f73de92d265af18bec",
"assets/assets/images/usersignin1.png": "6d1a90813f0d833f4738a5aeb04a1416",
"assets/assets/images/companybanner.png": "a744c0f0cf9ef707b6f95687df2907cd",
"assets/assets/images/appdownload.png": "e3e1fe9bf0c1d73af6ae6cc614549f77",
"assets/assets/images/eGCh2.png": "ffb38cf90e82ad7b07dad48953f2178f",
"assets/assets/images/ABST3.png": "f4a19172673ab54ef40087a6f52668de",
"assets/assets/images/eJOB4.png": "593db355e9bdb3a886ceaa47b6555b0d",
"assets/assets/images/eGP2.png": "6683b4818e593cbcef4b75f3bc475895",
"assets/assets/images/learn.png": "88084f7c761fdd9b27bac737a55bac13",
"assets/assets/images/level6one.png": "7d47b07131bdfff47889828a9cadb350",
"assets/assets/images/payment1.png": "d1c446e8a64951eeec0a66e7d89eb629",
"assets/assets/images/curriculum.png": "b433213d9afe1d453d03cdd999e46b25",
"assets/assets/images/contactus.png": "e2ef63baa5d76b22b2faaf6f7214a7ef",
"assets/assets/images/phone.png": "9cdc4b9cd836046e0e6f7b7f05146167",
"assets/assets/images/bk1.png": "7f1747298f253f403b0712fe0c948799",
"assets/assets/images/scholarshipbck.png": "5de4596bf240832f6b5238713f5ce337",
"assets/assets/images/eSPG4.png": "5fb84d4511dab125a826042484706e56",
"assets/assets/images/eGP3.png": "911bfed712ed561dee4ffd8060d8dad6",
"assets/assets/images/ABST2.png": "7ecbae1079c5a7d051db8ee9f963e69e",
"assets/assets/images/universit6logo.png": "8e7dc92ae5bff66f44c28f56eb771b38",
"assets/assets/images/eGCh3.png": "174017990a63a434774f89371fa31926",
"assets/assets/images/testimonial1.png": "f08b0d91f20940523ca633992742c54c",
"assets/assets/images/programlength.png": "b8b66386c7e16b3abcc7ce6dffed53bc",
"assets/assets/images/level4five.png": "3d8011beb6eb62f68422a8771c71b91f",
"assets/assets/images/France.png": "5056bd9b68abb3399388e15a88ddb37a",
"assets/assets/images/elearning5.png": "c25349b310b83d35d5b6d93f4575b159",
"assets/assets/images/eJBS1.png": "aa37a62494a4d423c537423ef8a1c80e",
"assets/assets/images/homeimage4.png": "3791e52086a787a60a911545037a533e",
"assets/assets/images/partnershipportal2.png": "f31ef70f46e6d4eca5bbf7c0baa5721a",
"assets/assets/images/eTR2.png": "fe4a665800700872ca42cf532623fc71",
"assets/assets/images/eST4.png": "68b25d6745d2816105fea36162eb19be",
"assets/assets/images/socialmediafb_3.png": "e2799821a4126c3b268b60a8f46f9d93",
"assets/assets/images/activeusers.png": "69e7c2135cf12d4f19540561bf7111d0",
"assets/assets/images/educators.png": "f8f9027220c7dbe497c9be1c110ae4e5",
"assets/assets/images/bolton2.png": "d99b43555291584bb27e8f288e034aee",
"assets/assets/images/companylogo.png": "77746db0f08e6f8474bac2cc295a3d51",
"assets/assets/images/eAC3.png": "ffa0f62931375a7ac106dbe6a63ab480",
"assets/assets/images/eSAB4.png": "7d873bc27afe5d2d8327de0e0ad7deca",
"assets/assets/images/siginparent.png": "98cf788040d964dd59a02d1f47caa373",
"assets/assets/images/why4.png": "7dadf8f91ce72a5b674fd42fea69cd7e",
"assets/assets/images/boltonbba.png": "b7baea744ff51953c6eaa8cdf7f77372",
"assets/assets/images/worlduniversitiesnewfinal.png": "c700d20241fa6524d0e7ea5c1d4c1fc7",
"assets/assets/images/credit3.png": "1d7e6563166105f9905e75bb48c630a0",
"assets/assets/images/lbr4.png": "65f923573a81a626e6117dc6c4508f54",
"assets/assets/images/eG3.png": "651cabe194c54e3ace1b2d3f707c3fa6",
"assets/assets/images/eG2.png": "054e9d9d37c5e2eb4199c79027e22d80",
"assets/assets/images/jobdemand.png": "cb4eddd46a2ccac2856fb29fe672e155",
"assets/assets/images/reviewsystem.png": "71c0b072ac21fb1bad8e38fe510a10d1",
"assets/assets/images/Pathwaysenroll.png": "399d5473f4cbefce56d205fb306388af",
"assets/assets/images/credit2.png": "ab5f8155253ba0640580d813c767f868",
"assets/assets/images/bro1.png": "0d013055e82b05e067c72099dc8c611b",
"assets/assets/images/ourteam.png": "0eab367a47775b469980aa655a9b23e9",
"assets/assets/images/university1.png": "c3c941b641028d46ae1db9aca48563b6",
"assets/assets/images/education.png": "b3cd8eba2f6fd70c4d7f106f230fc4a3",
"assets/assets/images/Swizz%2520School%2520of%2520Management.png": "4893cf37c6baedce684dd53b3e1c8543",
"assets/assets/images/about1.png": "403f83879700c5a7e8038f30b0974ba1",
"assets/assets/images/homepage2.png": "be29ba130676364d10c66d4839283893",
"assets/assets/images/level3seven.png": "4dd1af7e9f96e5dec1c92a0ca0a648e4",
"assets/assets/images/contactusnewfinalnew.png": "f5f083f381480b7694a7c1bfd2837890",
"assets/assets/images/UK.png": "cad262c2fe8c2e27e67069995eb3b639",
"assets/assets/images/eAC2.png": "1accfce2e62acefe4fe20777af437605",
"assets/assets/images/universit12logo.png": "1f63b45ab9237bcd4eefdaeaa49889e5",
"assets/assets/images/JB1.png": "64b1faf8f989e2d1b0ecfc8d2744d537",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.59%2520(1).jpeg": "a38e0d3650621d39887c5e41d677159e",
"assets/assets/images/JB3.png": "520d22a3316ffb8127ec20cb4df6cf56",
"assets/assets/images/snap_chat.png.jpeg": "6bded6e85fc90fa66834de42f0ae2bf3",
"assets/assets/images/providers.png": "8ca60bb0811344e93dde3c532fdc5bc6",
"assets/assets/images/careers.png": "dfa20238f8beb172bf0e22707fcef189",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.59.jpeg": "fe28c332502501d79aa4def2f51bbb97",
"assets/assets/images/eSS4.png": "2332f447675eeba081b743c264576f24",
"assets/assets/images/mingcute_pin-line.png": "e5c44589d25f8e100f9c5bc4dd2be42b",
"assets/assets/images/university18.png": "3d05827c511599c05aa1e203216537a8",
"assets/assets/images/Whatsapp_image.png": "2bff085c97d0a3afed5f06831bf7809d",
"assets/assets/images/about3.png": "3b1e220b1998d5dff94dab183a077ce4",
"assets/assets/images/Singapore.png": "07828140b12c97152418a4b7882f2ca1",
"assets/assets/images/university3.png": "1331432d423f174d23156cf1d730839b",
"assets/assets/images/tuitionfee.png": "530645cec52375c636f20a40413fc1c0",
"assets/assets/images/applyprocess.png": "4425d31320a8561eaf7617420a88c254",
"assets/assets/images/teenyicons_shield-tick-outline.png": "09e01150f4e4c82cf878fd9bae27431f",
"assets/assets/images/level3twonew.png": "1895175d2a5ff650ed820c75fd719e5d",
"assets/assets/images/eG1.png": "5c0a7b69e848b8bbd279c202e863b262",
"assets/assets/images/pathwayhighlights.png": "e06ae32b4568713ef5c3b3d53b5594ed",
"assets/assets/images/lb4.png": "da520e9ef518d49d1de98c55c5e043fc",
"assets/assets/images/coursera2.png": "0cee6ca79ddbe25f3a586471ec7fa498",
"assets/assets/images/enrollementprocesspartner.png": "701c0428d1e5b1f88d23f5bf8a7a7bde",
"assets/assets/images/stripe.png": "fb4644a096cc5cc29bd336319b506421",
"assets/assets/images/credit1.png": "0c811f9ca353853619f1d8dc1ec8182b",
"assets/assets/images/egpathways.png": "d7896a3a5c6c2c33cb97ef2e208917b4",
"assets/assets/images/Netherlands.png": "be34bf9f024fe5a8eb132845a64591a5",
"assets/assets/images/elearning.png": "d55e961c6e1cd5c723dcbdc75c53a99b",
"assets/assets/images/signin.png": "acfb03187a65a2019c4720c13b6fb52f",
"assets/assets/images/university2.png": "810a83d2fc09b3a072d77a53c2fbc183",
"assets/assets/images/about2.png": "bb7c6ecc90dd1d26e5a394b2e413acfd",
"assets/assets/images/offer4.png": "6e86b2e4aa9578a97a27b80cf2f04852",
"assets/assets/images/studyabroadapplication.png": "01420f3354bd5365de42a6e4c970059d",
"assets/assets/images/winning_personal_statement.png": "5bd13f502ac02a4653d0d48e4a1584c8",
"assets/assets/images/professionals.png": "f9567b357add8a2f1dab6a236b1f9da0",
"assets/assets/images/SAB1.png": "6948e5ee22fdecc1a58aa0d7aced6a1d",
"assets/assets/images/whatsapp.png": "4a1147b92930a43f76abac2c24082ed1",
"assets/assets/images/google.png": "dda9b81b94ee51ef980da5f77e87d62b",
"assets/assets/images/universit4logo.png": "9e4cff53f7ccfd7f9d4c993afa1917c5",
"assets/assets/images/whatyouget.png": "2833bde637b3edf07bc2072a9d176870",
"assets/assets/images/eAC1.png": "1b0213744ac436c2ab1d9d4755a5c237",
"assets/assets/images/JB2.png": "c9077201367c0ff5cdd944e4886c98ed",
"assets/assets/images/level7six.png": "f8988435e289da07abc843b5c30d723a",
"assets/assets/images/facebook.png": "92249f37ec3089ccb2cdee0b37bd8d31",
"assets/assets/images/eSS1.png": "f73bcef3ea1bec86c3883e07746d1269",
"assets/assets/images/jobapplyprocess.png": "5d9ae742978ddbb58969c7e1cafdecd2",
"assets/assets/images/university21.png": "e392b3e26f603fa5fa7ec56bfcef6789",
"assets/assets/images/socialmedia_2.png": "09e42dab797f8a3d25a9768e6e2226fe",
"assets/assets/images/level7two.png": "6eae35a9ac017103c45d974b33885e9b",
"assets/assets/images/why2.png": "e7cd6095289f38ba66ff0916746afd42",
"assets/assets/images/about6.png": "fac9d0996479e02ca0b42e6814254243",
"assets/assets/images/eSAB2.png": "67e7c4989fcc70acea6841ceebdbc943",
"assets/assets/images/homepage5.png": "1edf57d04b932cdd8c438f700389c669",
"assets/assets/images/level3ten.png": "6a4d7540e4c943f2abfc0b3312a6cfcb",
"assets/assets/images/university6.png": "46333bd7a1286b0b50e86ed8f6ace360",
"assets/assets/images/University%2520of%2520Bolton.png": "e392b3e26f603fa5fa7ec56bfcef6789",
"assets/assets/images/credit5.png": "deec9c15ed0c642c654f23f635c1706c",
"assets/assets/images/common_application.png": "1bbf8b99faea5861c83f3ccde55cc019",
"assets/assets/images/equipment_1.png": "bf3b4926da94e2acdb00baf279e6e982",
"assets/assets/images/tabby.png": "5c059e8bf4959ec67dd1d70d23e5c941",
"assets/assets/images/addjobappln.png": "1feac2e75b674dff05e23edd0c3668d6",
"assets/assets/images/lbr2.png": "397902dc38f028ba8ffcc9134009c921",
"assets/assets/images/lbr3.png": "b68e2be6dc3fbf4cc491500c96bfd012",
"assets/assets/images/eG4.png": "42b47e07392ab52f42d4064329dc3d6e",
"assets/assets/images/lb1.png": "0a7c83f7fe90176236648543c47ff70d",
"assets/assets/images/eelearning.png": "7f05273f618fc59b946665acdb83dfe4",
"assets/assets/images/equipment_0.png": "276cf28d2da177f01d58653d82fd7f7f",
"assets/assets/images/credit4.png": "b90890ae8f2b2136223f062d6a7f866d",
"assets/assets/images/university7.png": "0a8c8e21e01aa784f52b6a99f3cb1e54",
"assets/assets/images/level7five.png": "02542a7e5ebceee4475c8a78dc32ed32",
"assets/assets/images/universit5logo.png": "0353e267f6df51249a1016956c727316",
"assets/assets/images/eSAB3.png": "f199b4c46f9fbbc7cf35dee695a9f40e",
"assets/assets/images/universitiesnewmobile.png": "c4aeb71d84460006369a0a98f3ea8a8d",
"assets/assets/images/why3.png": "f833b29cae66829dba08c243450d6612",
"assets/assets/images/offer1.png": "6d816e8844c7e44f79f4b1b3cbc07205",
"assets/assets/images/about7.png": "c0b65d2995c54deac71443ddf63f4cbc",
"assets/assets/images/eelearning1.png": "78ba72c5e4a193e818518862f83a9089",
"assets/assets/images/socialmedia_3.png": "08e0df4a4e3509dd13ef348f2db5b079",
"assets/assets/images/university20.png": "7697b85b9590bfea07f56a92df869765",
"assets/assets/images/WhatsApp%2520Image%25202024-12-14%2520at%252014.44.58.jpeg": "61edd1e39b1ab942f3eb59f9fc2e7fdf",
"assets/assets/images/eAC4.png": "e6b08c27c23c83147648c6f4c4907dfe",
"assets/assets/images/level4eight.png": "5b0424357f1073ab2b7730bd49b810e3",
"assets/assets/images/Japan.png": "53e20bf38f69ad0a1ae32dd84c024fbc",
"assets/assets/images/images.png": "b5b96f7f348fec2fb37a4ba5a4b691e7",
"assets/assets/images/eSS2.png": "844ec21dd592f82bc113fcd249b0868e",
"assets/assets/images/university22.png": "6bb11ae2240e9acf3404a22ce57fa303",
"assets/assets/images/siginstudent.png": "acaf5779051991a998dd6550ce15e4f5",
"assets/assets/images/socialmedia_1.png": "3e4c64258a752fbed335dd789ef842a2",
"assets/assets/images/about5.png": "f1f3fcd8bb83b8384f257b398669c34a",
"assets/assets/images/offer3.png": "2fb56c10e579be4a3424372968a9c509",
"assets/assets/images/why1.png": "96e27a5eeb3edeeab3858b1dc9e79aa5",
"assets/assets/images/eGideas1new.png": "d3c66c68940296f4cabd6b9e79530fca",
"assets/assets/images/homepage6.png": "82f79f9fb1f1ee708312f6f0658e8ece",
"assets/assets/images/eSAB1.png": "7c44fa383413ecd71fec376aa877236b",
"assets/assets/images/admissionsoverview.png": "f7b0ef6f739cc63dc753a48a85bd8be3",
"assets/assets/images/homepage2mobile.png": "0e9eb0904fa8e1cd09b225c2a21b0709",
"assets/assets/images/university5.png": "8e1be5b9d13024d1536a29147f3846f8",
"assets/assets/images/equipment_2.png": "fe28c332502501d79aa4def2f51bbb97",
"assets/assets/images/level4nine.png": "62efbeeb7e86a3b2487fc2fff736f58b",
"assets/assets/images/credit6.png": "bd7da1a16fcb91930a8ed2dd97620370",
"assets/assets/images/lb3.png": "51e621787d861ca18d9db804ae4e0771",
"assets/assets/images/level3four.png": "1aaed302dcc3703a594a5d7ab9acf8fd",
"assets/assets/images/lbr1.png": "35ca62c586497520efb537e4335283fe",
"assets/assets/images/businessappln.png": "3e570f041663a0e3d715805f0c390bde",
"assets/assets/images/level7three.png": "fcd0ada0342119829c92f48f26b3f7c0",
"assets/assets/images/lb2.png": "62e421be6bed9a2695fc53cd234a91f5",
"assets/assets/images/tabby1.png": "88b4872c656567f8dccdb7bbecb49662",
"assets/assets/images/companylogonew.png": "ff1998abe551958fd7ee764c2db77c9b",
"assets/assets/images/credit7.png": "cc40d79898292dfbc88f066aa775d80b",
"assets/assets/images/equipment_3.png": "08212e37b201ab05d617f053235cf699",
"assets/assets/images/university4.png": "75a1a3982e4f41717c5868909765b86e",
"assets/assets/images/level3twelve.png": "31f6b0254dc5d9d6d2a2bb4e9ff1183f",
"assets/assets/images/x.png.webp": "045545dbf4e47c0376e7ac3bd919cdf3",
"assets/assets/images/finance.png": "b3920c97ff4225521cf745f91e463bd1",
"assets/assets/images/faqs_help.png": "7e9ffd42954714eb3f1b37f5fc5862d6",
"assets/assets/images/carrerhub.png": "282e9e818e87afdf8105bcc16e0b03ce",
"assets/assets/images/about4.png": "8d09e31a7184cb465a98fdc5b15f05f5",
"assets/assets/images/offer2.png": "f35fd98316edc027def1c02d7c8c001b",
"assets/assets/images/universit13logo.png": "bec680689fdc188420db3fe507d9180f",
"assets/assets/images/socialmedia_0.png": "a8edba43f9bf1a42513f55ec089ac62c",
"assets/assets/images/eelearning2.png": "f3aacc400044c314a9b3250153cfdd15",
"assets/assets/images/level7eleven.png": "1574d9ed7850c34fa1584261162325d2",
"assets/assets/images/eSS3.png": "9876559f3388a0d6cbc4b758c51a7620",
"assets/assets/images/ceo.png": "9061be718dba27ca6e0c4e1cdee3177a",
"assets/assets/images/JB4.png": "aed1847a261473804125fc23a10316d6",
"assets/assets/dev/india_flag_image.webp": "4c2d429a118911aa96fb44d0c17786ad",
"assets/assets/dev/28468.jpg": "862d7fe98ebe1854629043c1b9bd7d55",
"assets/assets/dev/19197556.jpg": "9bb997318ef8398a094cf77c693f9c98",
"assets/assets/dev/arrow_image.png": "17854b9cc6f3c201c10efd16b6644096",
"assets/assets/dev/level5one.png": "1eb2a9cad8f85154167f0f6f84b0fc81",
"assets/assets/dev/level4eleven.png": "3669f0e6389974a9690f2b6c1f4d1ab0",
"assets/assets/dev/benifits.png": "78312748a43c27bf99735093857ce757",
"assets/assets/dev/careerhub.png": "7fc8a58c365adddf9be6465e719881a0",
"assets/assets/dev/accommodationappln-1.png": "d042b3eb879643623d186a04413f024f",
"assets/assets/dev/universities.png": "cb1546dfd6bfbbb0fec1be297884a220",
"assets/assets/dev/ad_image.png": "b6e323a3e19cb2ecee7e23720c8f2a98",
"assets/assets/dev/studyabroad.png": "639558bdb015831366d1f81bd4508e66",
"assets/assets/dev/homeimage3.png": "8fc3d0bb15e364d90503b71d0ac25d82",
"assets/assets/dev/service_icons/icon_bus.png": "c4e2ef2da11e07d3957cfef402f9dfc2",
"assets/assets/dev/service_icons/lucide_library.png": "acacde0715c84b55cf015ce00f84b9c0",
"assets/assets/dev/service_icons/icon_bag.png": "bbd406716bf04349919fae36f012ce6c",
"assets/assets/dev/service_icons/ion_book.png": "b641357924fcf96005daeb6fef485d99",
"assets/assets/dev/service_icons/icon_Door.png": "0ff23bf40d817d0686a820199fdcf292",
"assets/assets/dev/service_icons/icon_cap.png": "770de42f1ca58b6962c928fec62b766b",
"assets/assets/dev/service_icons/icon_head.png": "5f1479e74e3e46e9fcbf9db56ea97fe1",
"assets/assets/dev/service_icons/icon_location.png": "55ad64975008db0b240f25f210deeb13",
"assets/assets/dev/service_icons/icon_bulb.png": "e99036ba60b84273765d0432b6c4af87",
"assets/assets/dev/service_icons/icon_book.png": "acacde0715c84b55cf015ce00f84b9c0",
"assets/assets/dev/service_icons/icon_plane.png": "fc932f3e3d4004e4f08d8041e9603123",
"assets/assets/dev/service_icons/icon_worshop.png": "58e4629b2f2adf30123bc303207d26e2",
"assets/assets/dev/eSPG3.png": "be42ed268758d9fe96189acbd56164cd",
"assets/assets/dev/eCRSB1-1.png": "4930ffec52c293a373ac7a62dc1b0def",
"assets/assets/dev/career_growth.jpeg": "a8edba43f9bf1a42513f55ec089ac62c",
"assets/assets/dev/scholarshipsapplyprocess.png": "a4e886517c32ddefe570d5520e603ff3",
"assets/assets/dev/Germany.png": "efd0dcabf004e280259ef2045a957171",
"assets/assets/dev/elearning3.png": "0777e127aa1e7a14fa19a355005b51b2",
"assets/assets/dev/transportationappln.png": "ae7185b5d3de6111b6e4310f9d3a237c",
"assets/assets/dev/rightprogram.png": "3da339169102b9b4439cfd36e96107ce",
"assets/assets/dev/eJBS3.png": "fdf1fcba5766077ff0d1e972142d10fd",
"assets/assets/dev/testimonial3.png": "1834627133df890f78583de7a6e81996",
"assets/assets/dev/eTRP4.png": "67ed44f6af864e420f5a87fb0af7f6e8",
"assets/assets/dev/about22.png": "71485e9b7ecaa63eaeb7afb95e03f0af",
"assets/assets/dev/scholarshipbck.png": "5de4596bf240832f6b5238713f5ce337",
"assets/assets/dev/France.png": "5056bd9b68abb3399388e15a88ddb37a",
"assets/assets/dev/school3.jpg": "02060f30dc47fcf7defb70de3ad7e568",
"assets/assets/dev/2302.q702.010.S.m005.c12.student%2520campus.jpg": "877b6d9526181f5af4f6941fbf7f3736",
"assets/assets/dev/level7seven-1.png": "62032d53d72d1048d991a9a2f346a0ba",
"assets/assets/dev/applyprocess.png": "4425d31320a8561eaf7617420a88c254",
"assets/assets/dev/faculties-1.png": "d7d6a324c4de1ec4bf5adb7216eb5c16",
"assets/assets/dev/Japan.png": "53e20bf38f69ad0a1ae32dd84c024fbc",
"assets/assets/dev/cache.dill.track.jpeg": "0fd2a976d30e3d9e36156a76f05dccff",
"assets/assets/fonts/Arvo-Regular.ttf": "afb50701726581f5f817faab8f7cf1b7",
"assets/assets/fonts/BigShoulders-VariableFont_opsz,wght.ttf": "d243b0542ccfccbc06e5d2bc3580c808",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
