'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "227ab2602b6505eda3f8f7e6db55a0bd",
".git/config": "afa2fecf79a931b1076038fb59a6722d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "c9a38e67f27d43c1152cb5528b2543ad",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6da2eb2985302d3e223a1302aea912ff",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e863ba9f86fe4c83235ee3655e51fdc2",
".git/logs/refs/heads/main": "7acb409f635718b1c8b4df425a28cec3",
".git/logs/refs/heads/new_master": "3a9d1a66b0b5a2aa9c5f10e240ee8da4",
".git/logs/refs/remotes/origin/main": "4b34c38698fa8936ada408bb3eb9b035",
".git/objects/01/210243a7666d710bd0640bd191e0b8524f115b": "7ab621a773c24bc79baaca4c228eef96",
".git/objects/03/1222d0b0153a15204036c1f758829dccf54515": "d1d3f0dc752c57507626da61426f18f3",
".git/objects/06/dffaef859c13c67f93b8816a24e582df02cacf": "cfa148e562a6689abf74287adb5e1c38",
".git/objects/08/a9f238c178ce1c5fae960d6994e4a15d046700": "77542b7856390dcd3a534aa2304bb316",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/10/72f82754d59e90091ebafa15762c84717b19be": "a5d9af70751f0b679303e9f2f0f1ed88",
".git/objects/11/5eb2d6e10655e3b3beedc0a83e8cd03eb1beca": "cb166e7b66f2a89d347af6c21465d9b3",
".git/objects/11/d6df4df807bffd0343faec1cf1d11bf68559fe": "5968478494b3dc9350c64bd5ff7c9a07",
".git/objects/13/1e27c26bd09fd6a424080414089df42e531091": "5073fbb4ca1ca5c6fec75017c9c057b2",
".git/objects/13/536f9e885c914c0ef2b219bae2af3f445d40ed": "2e8ebe0e4f894025f784d01a25c82d4f",
".git/objects/14/5b824a5b55162109a4efd6044beb9e830d3227": "f7199d72838bbbb7335f7609f2a45f9a",
".git/objects/15/523a760b4d1d289ecd8b1aa09c9d58a7f51ead": "0552d830706f8023756a38d7be93973b",
".git/objects/15/9461e4d6a913a5f1910a8927e798ffb52c65fc": "63bfce5bbb25708a8d7f90a10b030c2a",
".git/objects/16/e7c3db6f35010364298802bdfef0dadf4d20d2": "048677a86240f0a0c4a1544168cc4a26",
".git/objects/1d/a87173c8fb3cf0ad94839031e3a6356aa4efb2": "2ee65e3db7291c035286ab37db57f695",
".git/objects/1f/14a3e48f6d9192e22863d12399f3118f1b6e62": "649c2782359e65928d3f971e50ae7d40",
".git/objects/20/3626cee53497e1598bfa6a892ef0b4b0bea680": "99ccfe9141fbebf27de5dd92bc683e59",
".git/objects/23/06fe2fc71283bc5c938d54e53fd27e61a95529": "69e14bbfcfb4c62854a8a45d1b67c48f",
".git/objects/23/2424936a23afef0488d207c1b0146630df4ae9": "db2cacee5550e456f1cbf383242b7cee",
".git/objects/24/fc2b932c2ac4523a2df5914d1da72b19522461": "f2400611e350984a14ee7fced0616973",
".git/objects/25/39b7c7ef83f0b0345bc8d9df8e3ce103e6de5e": "1b5f727bb42417f8e29680e342085019",
".git/objects/26/be0e4666654ab736008c9c8beca5ebf05d841e": "49670c2e99ca497d95e2bde257f07e4a",
".git/objects/27/e739199342c40c875ada8ede7e2041607c3f6b": "f05e79990fa3c3206b2fd8f4c5a87339",
".git/objects/29/9708109c7fac44c85d327ac4e47585802b8b41": "88ce015b4e9e63b40f7c888a2342342f",
".git/objects/2b/1221bccd7641e5a25c3089f6db3f5911f562db": "9f6ae93b209324520cbb3c6c1121f60f",
".git/objects/2b/580e521671434037c71751ea886b1ed92ef4a0": "f8bee25e16ac751a02b1f39144b3a273",
".git/objects/2d/e2dbbc1667120d8119cde4b4b9e0db2103b70d": "02b72ac7eec555d9a420e91f78dc7f4b",
".git/objects/2e/b030d1e843c1defa08bbf00ea56118a73dcb15": "5e9ba07e3016b2951646238c16a7cacb",
".git/objects/2f/1454dd1d320c116fec90c801347b93275af7a8": "9b63e6b47debd3a37c535618371284fd",
".git/objects/32/84ef5efb816cdd48a64c7264cb46ab65432c8d": "13732d815170af1c56557059f7ae54f9",
".git/objects/33/4e39db473bb5f88aa5ebffed57841eaaba1710": "83994da55a4d4f741bb6ba034f037a08",
".git/objects/34/35a1684f20c9fbc62d0fa48db6ecda4b13c479": "5e7c6095c3d77206d3b506b9f5a7aece",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/3a/1a2fb3e11b457964955556cca71b2e697a020c": "9aa0d4c733f5065c8bfe9ca33deb5d51",
".git/objects/3c/c1be6a61bf3ff1e6430cd6ca907696ea0efa57": "4562d13f894ef30ca05adc2610509266",
".git/objects/3e/3d83fb357cd5a57ffb2b93d9b1efe74f701d4d": "67d7d3dd85665ea91adb5e446f742025",
".git/objects/45/080fc86e36b80101ac6e50b8c98f82ce68fd9b": "dbfcb08a2023de74214e5f26973a3f54",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/feeffa0e006cd7b25ac9a20f08fdfbef66984f": "9e8c255fd4fbcfe4de1c32364bf68441",
".git/objects/49/8d2b1683037659dc39f4a609e8e1d8550e5cd2": "4ab3e4a532aeff2824516878659da651",
".git/objects/4e/0ee2314c8317d71fef9a8b8ba4480de2d6baa6": "1d6aeded6a6082c618ca35cffffc10cb",
".git/objects/4f/0be875ee16a34324e674a5a25768f3bd17511b": "e21a651717f8216026372f5be4da2c08",
".git/objects/50/f7e52cabe79a956aef1f8c11c9ee9a1a98f6c0": "0bbac1f3059b569136e3994fa6732a97",
".git/objects/51/6ccc6195d54847998b9a4a6f16a4c5faef8cae": "8ef3584e8522b7a3eeb800e496e177eb",
".git/objects/53/28edbe54feb12c6dbeb7c2b5d49da152d3c87a": "9753d646d7123eaa64cbe6bf847ad548",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/b992ac40821a1f39500ec77f2e7f44f11d74f9": "be6787247eebefc17aa68ced05991617",
".git/objects/55/4b09f2a787e93456bc4909a5ff160b80c0a83e": "0fffdbf3b9d92f1cef7061ea0cb98032",
".git/objects/59/f2353da15fb7a575b594b54615ac0e490b281c": "7d3f27ba8dae0cadf5dd454b70c2107b",
".git/objects/5a/1dd1106d2b6d767e2aee03b354df06b407e737": "563ac16ba1e11cc9a32a66d781c79b73",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5d/07f41542fa5c6665f230149a0d0b3b3fb3f353": "09aee86fef1e67dd6de8568856091f95",
".git/objects/5d/6de5b5c3cc0be386976dffede4feee56e8a9b1": "e7cc95bd04df467a033dcf1a21ac23dd",
".git/objects/5f/343e17001f67764a4a7e6e37c1c7f11cf798ba": "0e524b4859116db3d62fc82445619c4d",
".git/objects/5f/c418951922a5544339a4d87eee988a4c988740": "34b14d4dbe7fcbee981c6de0e031fff7",
".git/objects/62/d4731efc01584db7c440c53a8a0203ab68294c": "c37dfc3c1a845ed1c9ef710a861c69cc",
".git/objects/66/38fa327a7d2a7cad6294657ac8e2e072a93a41": "5cf2bc4664da9b85b997f252cb63c0be",
".git/objects/66/faa7caa8b0727e24c5f01804987812ba1e6ee0": "d9dd794bb797b28256cc907ab76a66db",
".git/objects/68/0ea54af8ff3bd9e32a85599082d452b0b3a6a6": "d23134d22c12e48079d56f941a61b72c",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6a/f876d26782db34fb4291ff14a1137240f95df1": "ca291e4f61ae77d0357391d858198ae6",
".git/objects/6f/2457987a74ebe76b2af831632d6bfa8255b90a": "843441d1cc4c76a3f440fd2b405ed530",
".git/objects/71/5518e02272cad6fb8531f6f165dbd84e834349": "0f34aad12806963587e9e5173848b3db",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/74/ab656e12b3970df8f77813c0a636288a89d072": "e41b41ef2f7018e17d75257e71cccea2",
".git/objects/77/2758d952a17423e46a7966726fde2d0792f4ba": "720171dbb25c94e6ba2cf1f4659ea46e",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/7c/122dfb49b530856098d3bc86fe3ea903e00ebb": "cee07eda6b67944b551c541b438db59a",
".git/objects/7e/31d9124863bae6dde012f9b4e9507e5eca838e": "c18ef8c8da49e98423feeb779379e2d6",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4e998fcb88ed1ed02ea7673b79923c234ca98c": "9d63322ad7ec3193a77b8be2b6f7c6e7",
".git/objects/89/5325d4694c75953f1b51c2be5dde83c466152c": "79bbe8b4170169c376df387ccc487ef8",
".git/objects/89/f4cee29b8bcbc7c2835390587f6c8d30ce7a52": "9d60d81b6942edbdf84d7b9ec17d39b5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/16bda5437776d688855a1f5381f5d68ec771c4": "52bbe26ea45c92c2e7aaa171990e0464",
".git/objects/91/bed4ad94d01ace212a47e5f2b46ebafcdf016e": "c2f131d065a0a0f498cc9b88f5fe560b",
".git/objects/92/7d6287cc1b4ee0e767fb4b87a4106ff49af651": "bc486e200b761622afe8060deb19069b",
".git/objects/94/025aa73814b76167d6258eaad32eecdcde87c1": "1cc18c58650eb5520be52786c92489c8",
".git/objects/95/5cf70e8da779a3c61ae28842093fef1cfa9a9e": "e7953a17a2bfb8d35fd43cdd86ccb775",
".git/objects/97/5c05648abeed87973e9e57dca7304030142a4e": "7ae562096d6953b650cfcbefefaeedf1",
".git/objects/9a/4e1f69362c16d321ad5fd02d47a3de67dd086b": "df8bcd39032678c921e9275e8b35578e",
".git/objects/9a/7754f62c8d9e48e7ad72b4205419835dbc089d": "43e585cae2ec62a72c994221b6626ada",
".git/objects/9e/1029c4a09ecb715304ab77c0b4ab1f9d3ef48d": "71424611a9d52afff33d7532358faac0",
".git/objects/a2/54a29bc43a338d2f124c0f60f42119f995324f": "1c16dac0268505e124fc209483968c2b",
".git/objects/a2/f3281ea59e3677837111cdabfa3d2f9fdccd13": "a92beb25c09253227440733b40643f0f",
".git/objects/a4/71b420bf5703064e443aa5dbbc07e729b59e81": "fa56a13a73a5887719b9ac18074222b4",
".git/objects/a6/d673cd71ee74323fa9d55473b576bb59f6d0bd": "6e9a47b78b8fd2cd4397567f8be3a71a",
".git/objects/a6/e720d37260498c72e58e3054888e5fc92983fb": "80c3afc5de511196611c961b7f6167f8",
".git/objects/a8/0f2324f2d57d1702816f870cf5d02c809162cb": "fd9a210d2b30298ec4fa346079daa8ca",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a9/7dac4d4057deb0e9939f968d6756f78d0e95cc": "5ebc5d251b0b909a890f6b71db3c70b1",
".git/objects/af/04f9d1cc3e9e0a6a9f234dd313c8bf0a9fdcd6": "53cf69d9664f00eb274fefd5de667c2a",
".git/objects/af/c23882b638b12d791aa258af1f6f7ad42c23bb": "54a89572234853bc0ecef2d4785059fa",
".git/objects/af/ebe3b9f4f194e3d5cad1f3dcc7ca9cb331793a": "7684f8b35ca68b3563a7ae34f31e80ef",
".git/objects/b0/e02324d01b2db9562d8bc5d7547a9903d51fce": "785ab81e537e7bab85bf111cb1ea2b22",
".git/objects/b3/d87d79810b43e50a43494715504ba0ca5bd389": "6f94e60fc3e9e2cac5ce9aba4d46c602",
".git/objects/b3/dede31b02ae881c6fbed1f59355160dd6b08c9": "45bac7c99301ad084d685d45925ff927",
".git/objects/b5/9e67d16af3a9ce6db70ca6833b43ceaa2449b9": "3078867bb83132f51fda3a80015bafb8",
".git/objects/b6/9654518dc8239534b3f81b34bccb193dd55402": "f8c0b04ffefc104845c89d8759764060",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/bfeaf741848e167529e7e3ec3baa57bc8b51f4": "4b293e2cf035e600c3f9b904d68f8a12",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/c33dc164af029c8bc0079bcf55076183072688": "2ee53d8f937810dadb5018798ffdde74",
".git/objects/be/6b846c76e6012342d834a80d7be1a9f34c956c": "52c17ad1167bc0139f6f00ba87660192",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c5/832453f389b6c38a989bd98d0fa98b81bb9d55": "997b517b16564a6fd333fdeadd3aab0c",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/c9/1ca0427cc2f8e90f9e7983c18d0e5449ff42fb": "92fb6a982c9af69e3a481f4f2eeb65b4",
".git/objects/ca/5ebf2a07f150401baf3b133f579a82ceddc549": "7170166e2910a1f0734003fde69ee418",
".git/objects/cc/85a400437d420c4d307bf30f1f86aed1431fea": "b733ecf5c6f56d3ac18f3fe35e509a95",
".git/objects/d0/a820a27f43b9d4d31ee6ceae5b183f75486d4c": "9cdb7f5f817a6d51e9d59e3ab7d2a778",
".git/objects/d1/bede4c1ee57e05840328dc405ee3f36a7706b0": "63674b5f89d6918a71f6eb975e32c84c",
".git/objects/d2/cdcb8a99a848d9fafaa74c72a563413ea772fa": "250d977fd6e55bb8c20789966b108af2",
".git/objects/d2/d4b21f17d980f9d8a0d10f8b015a93db183782": "9e3703b5031e7964c8f35438093d9347",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/c3fb5a483835da11a71c9173ab6ceca97a9602": "9087d6a38aa66c9af36754b6d3a03b9f",
".git/objects/da/5726201d115e302e2b5ff4ebd910cd5a4ea766": "b2a7c49465b30c1fe6e4b3d121c6f664",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/dc/640f076f5202e84322f7a9c81a23b116ce0eb5": "c2b8b79c468427e6bd37e3908861b777",
".git/objects/dd/bb1506c727d62f1267c877cc9ad971eba945b0": "0459c91ea793adcdd42cf83a88dceb9f",
".git/objects/df/b4105d31c40054954e6a6ada3d1c961bd8890e": "3e4374588d843bdb00a69f24383435d5",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/57cc11bf6f5e634dae08e2301ae24056e86669": "dc3aa085ea63aa4e4ee01b3f2d13afd8",
".git/objects/e4/618d5bf7698434dee0be978dbb9fbdf0a57aa9": "c8d54a8768cf4e67e0415e5e0a746050",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/d21c609f6199788060cd0c96433c0b94abec43": "3aa599b0da3f259ec9e0085c94da3a86",
".git/objects/e7/c693c4fceaf57049b5860a7aec23c9cc8ea4f3": "1a4690922e45a10bcf81dc0a68e57c46",
".git/objects/e9/8a4230afadbbc5f8bc57839b77bdd363b8b9cd": "e3aa57e218d0727de16e92c724484e03",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/405468c9c21b1180f660df7714130ab60a716b": "031d7adc2df7ea675d9d1828fdb60c0c",
".git/objects/ec/8e4421dc447259c9fa2f6d68c522edb97ddc66": "c28e51ecc07c2549b0fa82421625edbb",
".git/objects/ed/4a5aaa04df30f84b782abd538c02cb814602c2": "b3f467c06159fa3afb0ed4256f9e3028",
".git/objects/ed/acddf24a91a65aeb0e172bffd93c6ff12fd6f6": "dd135d2e92a04704458c8d7b0c38162a",
".git/objects/ee/7844d807fc021d3acfa10a630546e51c71bf09": "50a65ba0e957da6edb5f4fbdcc02a0fd",
".git/objects/f2/1d4c3c0185390852e64883d40630d2c958f521": "c2facdccacbbdfa6c95f6ed1243441e8",
".git/objects/f2/b4f3bd79303b728b8834a17a4d8f585aad4b74": "358e234dac6cfb0b77d69261a99da2a4",
".git/objects/f7/0c21ed8c7e43fccd696bca638bb3106a165774": "2d43e7eff37035e3fde406b94a6a2dba",
".git/objects/f7/ccac5e4e1348dc8310130d3b073d8e90d62471": "98ad15ce0d946a4795d89b3e8bf89587",
".git/objects/f7/eaf61e2d736d490bb4e8b6aa593e217fadb956": "7f0fdcb7eebfad2a793b4e49c88ed3d9",
".git/objects/f9/4d6098bffa0ea25f9952d5a47483101b6d945b": "473c77279000d76423581aae3b2938ea",
".git/objects/f9/b3391615222bbb09b6ea28c3cb0ecaf614d0c0": "eaae0ec69c1ec1a9a656738cc9b19909",
".git/objects/fb/9479773be461854e88b7568c794734c8447b88": "ec6c6332efa8a5f82039b3b68a5304d2",
".git/objects/fc/b7677c3875c3c17075de17b3c0bfc7719c2cf5": "f1f6f8c31dd8a134bb17430312906d1e",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/2447e2d752ea1e325e9a645fa7a48d513c61d9": "ca5a6646db90cc224eda1a49c8e35918",
".git/objects/ff/d2f310e9b7cbaaa4446516c5a7d43a53c3c6a3": "6551d1f093f7db70d51de27cb2f82516",
".git/refs/heads/main": "6ed50c078cd87a3f146bf0795bee29c1",
".git/refs/heads/new_master": "07d061f49dc37db79ea959ae4b253626",
".git/refs/remotes/origin/main": "6ed50c078cd87a3f146bf0795bee29c1",
"assets/AssetManifest.bin": "b49ab5e24d6a23bd2b6d3512a9cb0997",
"assets/AssetManifest.json": "5c17dd8cb3ac164c7088a01f2117290a",
"assets/assets/images/book.png": "f38d2b1ce6c96da7df64d4f434a61cca",
"assets/assets/images/Cropmarks.jpg": "2c01716b9ffbd109d039d373c6b376ee",
"assets/assets/images/DATATOEVOEGEN.jpg": "7684e9eeaeda17749cc221a9261b2f1b",
"assets/assets/images/Frostmark.jpg": "49e7468fd75be2144f6b3b49f3531157",
"assets/assets/images/hut.png": "69fc53f9f1fae572d07dbab42b162939",
"assets/assets/images/info.png": "114c0496c822d51cef120c15c6b14b4e",
"assets/assets/images/map.png": "2df9b890f180af3a36b0f31c1be5559d",
"assets/assets/images/NIEUWEEXPRESSIEOPSLAAN.jpg": "3b92844bbd0c2da9e4bbccc0c3709623",
"assets/assets/images/RASTERCALCMENU.jpg": "2769de3726d6c50946d75bb4151b82fd",
"assets/assets/images/Shadowmarks.jpg": "849ae5d2063a0c2f1f9374d908e96e77",
"assets/assets/images/Soilmarks.jpg": "9a5f5b48d7bd1846359efcd7eac9a940",
"assets/assets/images/Tabel.jpg": "f88083f77b92f9e2291b452d42faf98a",
"assets/assets/images/TABELGROEIENDEGEWASSEN.jpg": "dbd312be29826621d0509611d465c2f5",
"assets/assets/images/TABELMULTISPECTRALESENSOREN.jpg": "45674cce80f6982d02d986b7c9e78d1f",
"assets/assets/text/formQuestions.json": "0a403d96c840e241ce5f09ce622183fd",
"assets/assets/text/library.json": "12caf2fc08e0cec7d9cac2cfb02de3ea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3895b881d466653636dbf9611945f6f4",
"assets/NOTICES": "f6ba67b29798cab2e5a3d8c20ec37cc2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6296d8b774d416751d76a6548a997807",
"/": "6296d8b774d416751d76a6548a997807",
"main.dart.js": "881c2f98e6362d2df1da28d7d7a7acc8",
"manifest.json": "b27d385e5f4b164597d0d68acc4cd1de",
"README.md": "dc0540d010e3902334ba049f36ebf60c",
"version.json": "5cf8049d8c6b19cabc39ae4721c7ca7f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
