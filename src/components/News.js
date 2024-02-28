import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {

    articles = [
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Apple Music and iTunes Store Experiencing Outage",
            "description": "Apple Music and the iTunes Store are experiencing issues, according to Apple's System Status page. ‌Apple Music‌ may be slow or unavailable for some users.\n\n\n\n\n\nAs for iTunes, some users are running into problems, and Apple is investigating as of right now. \n…",
            "url": "https://www.macrumors.com/2024/02/27/apple-music-itunes-store-outage/",
            "urlToImage": "https://images.macrumors.com/t/FhOW85qUG3EZBw65R3J6aWTQMFI=/1600x/article-new/2021/08/apple-music.jpg",
            "publishedAt": "2024-02-28T00:04:10Z",
            "content": "Apple Music and the iTunes Store are experiencing issues, according to Apple's System Status page. ‌Apple Music‌ may be slow or unavailable for some users.\r\nAs for iTunes, some users are running into… [+193 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Kwan Wei Kevin Tan",
            "title": "The Apple Car is dead, and Elon Musk is speaking at its funeral",
            "description": "\"The natural state of a car company is dead,\" Elon Musk said in response to news of Apple shuttering its electric car project.",
            "url": "https://www.businessinsider.com/apple-car-dead-elon-musk-speaking-at-its-funeral-2024-2",
            "urlToImage": "https://i.insider.com/65de966a6080194819faaa68?width=1200&format=jpeg",
            "publishedAt": "2024-02-28T04:03:30Z",
            "content": "\"The natural state of a car company is dead,\" Elon Musk said in response to news of Apple shuttering its electric car project.Costfoto/NurPhoto via Getty Images; STR/NurPhoto via Getty Images\r\n<ul><l… [+2052 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cord Cutters News, LLC"
            },
            "author": "John Gruber",
            "title": "Netflix Will No Longer Accept Payments From App Store Billing for Legacy Accounts",
            "description": "Are you one of the Netflix customers who still pay your Netflix bill through Apple? For years now, Netflix has not accepted new subscribers or rejoined members who want to use Apple to pay their bills. If you already had an active account, though, that paid t…",
            "url": "https://cordcuttersnews.com/netflix-will-no-longer-accept-payments-from-apple/",
            "urlToImage": "https://cordcuttersnews.com/wp-content/uploads/2020/10/shutterstock_1054927745-1024x683.jpg",
            "publishedAt": "2024-02-28T01:51:38Z",
            "content": "Are you one of the Netflix customers who still pay your Netflix bill through Apple? For years now, Netflix has not accepted new subscribers or rejoined members who want to use Apple to pay their bill… [+1296 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Frank Schräer",
            "title": "Mittwoch: Kanadas Kampf gegen Online-Hass, Nvidias Cloud-Gaming mit Reklame",
            "description": "Lebenslang für Hass-Beiträge + GeForce Now mit Werbung + Oppo zurück in Europa + Apple gibt iCar auf + GitHub mit KI-Assistent + Podcast zu AMDs Ryzen 8000G",
            "url": "https://www.heise.de/news/Mittwoch-Kanadas-Kampf-gegen-Online-Hass-Nvidias-Cloud-Gaming-mit-Reklame-9640936.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/4/9/0/0/2/mittwoch-271e6d977a6320b5.webp",
            "publishedAt": "2024-02-28T05:30:00Z",
            "content": "Kanadas Regierung hat sieben Online-Übel ausgemacht. Drei neue Behörden, viele Vorschriften und sogar lebenslange Haft sollen sie bekämpfen. Betroffen sind Soziale Netzwerke, aber auch Webseiten und … [+6850 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Mike Murphy",
            "title": "Apple reportedly ends its longtime plans to build a self-driving EV",
            "description": "Apple Inc. is scrapping an ambitious, decade-long effort to develop an electric car with self-driving capabilities, according to reports Tuesday.",
            "url": "https://www.marketwatch.com/story/apple-reportedly-ends-its-longtime-plans-to-build-a-self-driving-ev-625e4be3",
            "urlToImage": "https://images.mktw.net/im-251897/social",
            "publishedAt": "2024-02-28T01:48:00Z",
            "content": "Apple Inc. is scrapping an ambitious, decade-long effort to develop an electric car with self-driving capabilities, according to reports Tuesday.Bloomberg News first reported that Apple \r\n AAPL,\r\n +0… [+1553 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Wesley Hilliard)",
            "title": "Apple AI is the focus of an investing firm after Apple Car's death",
            "description": "Wedbush believes Apple's alleged move to cancel the development of the Apple Car provides a laser focus on what's next for the company — AI.Apple will do fine without Apple CarReliable sources say that Apple has ended work on Project Titan, meaning, if true, …",
            "url": "https://appleinsider.com/articles/24/02/28/apple-ai-is-the-focus-of-an-investing-firm-after-apple-cars-death",
            "urlToImage": "https://photos5.appleinsider.com/gallery/58755-119737-Apple-Park-above-xl.jpg",
            "publishedAt": "2024-02-28T01:40:05Z",
            "content": "Apple will do fine without Apple Car\r\nWedbush believes Apple's alleged move to cancel the development of the Apple Car provides a laser focus on what's next for the company — AI.\r\nReliable sources sa… [+1009 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (M1Astra .)",
            "title": "Apple Vision Pro may eventually get SteamVR functionality",
            "description": "Apple Vision Pro may gain the ability to play SteamVR games, thanks to developers who have begun porting the open-source ALVR software.Apple Vision ProALVR is software that enables streaming VR games to virtual reality headsets. The adaptation of ALVR allows …",
            "url": "https://appleinsider.com/articles/24/02/28/apple-vision-pro-may-eventually-get-steamvr-functionality",
            "urlToImage": "https://photos5.appleinsider.com/gallery/58756-119738-VP16-xl.jpg",
            "publishedAt": "2024-02-28T01:56:28Z",
            "content": "Apple Vision Pro\r\nApple Vision Pro may gain the ability to play SteamVR games, thanks to developers who have begun porting the open-source ALVR software.\r\nALVR is software that enables streaming VR g… [+1285 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Wesley Hilliard)",
            "title": "Imminent DOJ antitrust case against Apple is in final pre-filing phase -- probably",
            "description": "The United States Department of Justice seems to be in its final stages before filing an antitrust suit against Apple.United States Department of JusticeIt has been a long and winding road if you've been following the DOJ's probe into Apple's business practic…",
            "url": "https://appleinsider.com/articles/24/02/28/imminent-doj-antitrust-case-against-apple-is-in-final-pre-filing-phase----probably",
            "urlToImage": "https://photos5.appleinsider.com/gallery/58754-119736-IMG_0080-xl.jpg",
            "publishedAt": "2024-02-28T00:59:30Z",
            "content": "United States Department of Justice\r\nThe United States Department of Justice seems to be in its final stages before filing an antitrust suit against Apple.\r\nIt has been a long and winding road if you… [+1429 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.jp"
            },
            "author": "小暮ひさのり",
            "title": "9代目でついに成熟。「Apple Watch Series 9」には買っていい理由がある",
            "description": "Photo:小暮ひさのりこれからAppleWatchのバッテリーの話をします。「どうせ1日持たないよね」みたいな話なんでしょ？とか思われるかもしれないけど、違うんです！まぁ僕もね、買い替える前のAppleWatchSeries5があまりにも持たないので（朝から着けて夜には虫の息、バッテリー劣化の要因が大きいけどね）、日中しか生きられない逆カゲロウがAppleWatchの宿命だと思っていました。それ",
            "url": "https://www.gizmodo.jp/2024/02/apple-watch-series-9-review-jp.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/02/24/2024-02-23wak00.jpg?w=1280&h=630&f=jpg",
            "publishedAt": "2024-02-28T03:00:00Z",
            "content": "Apple Watch\r\n 1 \r\nApple Watch Series 5Apple Watch\r\nApple Watch Series 9\r\nApple Watch Series 918\r\nApple Watch Series 9 Apple Watch\r\n22Apple Watch\r\nApple Watch Series 9\r\nPhoto: \r\nApple Watch Series 9\r\n… [+301 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Sareena Dayaram",
            "title": "Honor's Smart Ring Is Coming For Oura Too - CNET",
            "description": "Honor's says its smart ring, which is expected to have health tracking and AI for personalized insights, will launch this year.",
            "url": "https://www.cnet.com/tech/mobile/honors-smart-ring-is-coming-for-oura-too/",
            "urlToImage": "https://www.cnet.com/a/img/resize/169c8523a5550be0279fc307e7e9f46b9bafcde8/hub/2019/11/26/8431379d-1b7a-4a24-bcc2-bc84c1d67543/honor-gettyimages-1170354103.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-02-28T06:44:23Z",
            "content": "After Samsung's surprise announcement of a Galaxy Ring this year, Chinese phone maker Honor said it'll launch its own finger wearable, called the Honor Ring, as early as this year.\r\n\"Internally, we h… [+9593 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yanko Design"
            },
            "author": "Sarang Sheth",
            "title": "LEAKED: Apple’s Notch Explorations Show What We Could Have Gotten Instead Of The Dynamic Island",
            "description": "LEAKED: Apple’s Notch Explorations Show What We Could Have Gotten Instead Of The Dynamic IslandIn the six full years that it took to transition from the notch to the dynamic island, I’m sure the Apple team was hard at...",
            "url": "https://www.yankodesign.com/2024/02/27/leaked-apples-notch-explorations-show-what-we-could-have-gotten-instead-of-the-dynamic-island/",
            "urlToImage": "https://www.yankodesign.com/images/design_news/2024/02/auto-draft/alternate_iphone_notch_designs_1.jpg",
            "publishedAt": "2024-02-28T02:45:27Z",
            "content": "In the six full years that it took to transition from the notch to the dynamic island, I’m sure the Apple team was hard at work figuring out what the next logical step would be. Under-screen cameras … [+3279 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Phandroid - News for Android"
            },
            "author": "Tyler Lee",
            "title": "Apple kills its electric car plans in favor of AI",
            "description": "According to a recent report, it seems that Apple has ditched their plans for their own electric car in favor of AI.\nThe post Apple kills its electric car plans in favor of AI appeared first on Phandroid.",
            "url": "https://phandroid.com/2024/02/28/apple-kills-its-electric-car-plans-in-favor-of-ai/",
            "urlToImage": "https://phandroid.com/wp-content/uploads/2013/09/Apple-logo1.jpg",
            "publishedAt": "2024-02-28T05:01:32Z",
            "content": "More than a few tech companies are starting to develop their own electric cars. This includes companies such as Xiaomi and Huawei, both of whom are more well-known for their mobile devices. In fact, … [+1132 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Phandroid - News for Android"
            },
            "author": "Tyler Lee",
            "title": "Phandroid Best of MWC 2024",
            "description": "MWC 2024 has introduced a bunch of new devices and gadgets, so here are some of our favorites that we’ve found so far!\nThe post Phandroid Best of MWC 2024 appeared first on Phandroid.",
            "url": "https://phandroid.com/2024/02/27/phandroid-best-of-mwc-2024/",
            "urlToImage": "https://phandroid.com/wp-content/uploads/2024/02/phandroid-best-of-mwc-2024.jpg",
            "publishedAt": "2024-02-28T00:31:54Z",
            "content": "Unlike CES, MWC tends to be more focused on mobile devices. This year, many companies attended the event where they showed off upcoming new smartphones, tablets, and wearables. Some also showed off s… [+4474 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Setra",
            "title": "Voici les 24 iPhone qui seraient compatibles avec iOS 18",
            "description": "Lorsqu'elle sera disponible, la mise à jour iOS 18 serait compatible avec 24 iPhone, dont l’iPhone XR et l’iPhone SE 2.",
            "url": "https://www.presse-citron.net/voici-les-24-iphone-qui-seraient-compatibles-avec-ios-18/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2023/08/Sommeil-Bruits-Blancs-Iphone.jpg",
            "publishedAt": "2024-02-28T06:03:52Z",
            "content": "Alors que Google teste déjà Android 15, Apple est en train de préparer la prochaine mouture de son système dexploitation : iOS 18. Pour le moment, la firme de Cupertino na pas encore donné dinformati… [+2813 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "XDA Developers"
            },
            "author": "Simon Batt",
            "title": "Apple abandons its electric car venture to go all-in on AI",
            "description": "Ta-ta to Titan.",
            "url": "https://www.xda-developers.com/apple-abandon-electric-car-venture-ai/",
            "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/06/xda-1-3.png",
            "publishedAt": "2024-02-28T00:30:14Z",
            "content": "Key Takeaways\r\n<ul><li> Apple's electric car project, \"Project Titan,\" has been shut down, with staff moving to AI development. </li><li> Apple kept Project Titan under wraps for over a decade, with … [+1824 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Presse-citron",
            "title": "Comme Google Stadia, le leader mondial du gaming botte en touche",
            "description": "Apple Arcade ne convainc pas vraiment, et c'est peut-être même la fin pour l'offre de jeux mobiles californienne !",
            "url": "https://www.presse-citron.net/comme-google-stadia-le-leader-mondial-du-gaming-botte-en-touche/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2024/02/apple-arcade.jpg",
            "publishedAt": "2024-02-28T07:00:19Z",
            "content": "Apple, grâce aux achats intégrés qui rapportent davantage sur iOS qu’avec le Google Play Store ou le PlayStation Network, est le numéro un mondial du gaming en termes de revenus. Si bien que la socié… [+4331 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Presse-citron",
            "title": "Netflix va bloquer des abonnements : comment éviter la coupure",
            "description": "Le géant du streaming est en conflit avec l'une des politiques d'Apple relative aux paiements via l'App Store. On vous explique comment éviter d'en faire les frais (et littéralement).",
            "url": "https://www.presse-citron.net/netflix-va-bloquer-des-abonnements-comment-eviter-la-coupure/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2024/02/netflix.jpg",
            "publishedAt": "2024-02-28T06:28:38Z",
            "content": "Netflix a commencé à prévenir ses utilisateurs qui s’acquittent du montant mensuel de leur abonnement via les achats intégrés d’Apple Pay. Le service explique que ceux-ci ne vont plus pouvoir continu… [+3776 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "HYPEBEAST"
            },
            "author": "info@hypebeast.com (Hypebeast)",
            "title": "BLACKPINK's Jennie Fronts Calvin Klein Spring 2024 Campaign",
            "description": "BLACKPINK's Jennie has returned to front the latest Spring 2024 campaign for Calvin Klein. She stuns in the campaign for denim and underwear, a signature for the iconic American brand. Since 2021, Jennie has been the face of the brand, even dropping her own c…",
            "url": "https://hypebeast.com/2024/2/blackpink-jennie-calvin-klein-spring-2024-campaign",
            "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F02%2Fblackpink-jennie-calvin-klein-spring-2024-campaign-tw.jpg?w=1080&cbr=1&q=90&fit=max",
            "publishedAt": "2024-02-28T04:23:57Z",
            "content": "BLACKPINK‘s Jennie has returned to front the latest Spring 2024 campaign for Calvin Klein. She stuns in the campaign for denim and underwear, a signature for the iconic American brand. Since 2021, Je… [+1116 chars]"
        },
        {
            "source": {
                "id": "die-zeit",
                "name": "Die Zeit"
            },
            "author": "ZEIT ONLINE: News -",
            "title": "Auto: Medien: Apple gibt Elektroauto-Pläne auf",
            "description": "Hier finden Sie Informationen zu dem Thema „Auto“. Lesen Sie jetzt „Medien: Apple gibt Elektroauto-Pläne auf“.",
            "url": "https://www.zeit.de/news/2024-02/28/medien-apple-gibt-elektroauto-plaene-auf",
            "urlToImage": "https://img.zeit.de/news/2024-02/28/medien-apple-gibt-elektroauto-plaene-auf-image-group/wide__1300x731",
            "publishedAt": "2024-02-28T01:22:32Z",
            "content": "Ist der Traum vom Apple-Auto ausgeträumt? Jahrelang hielten immer neue Berichte und Spekulationen die Autobranche und Fans des iPhone-Konzerns in Atem. Jetzt soll Apple dem Elektrofahrzeug-Projekt de… [+6721 chars]"
        },
        {
            "source": {
                "id": "die-zeit",
                "name": "Die Zeit"
            },
            "author": "ZEIT ONLINE: News -",
            "title": "Handwerk: 20.000 Lehrstellen unbesetzt: «Bildungswende» gefordert",
            "description": "Hier finden Sie Informationen zu dem Thema „Handwerk“. Lesen Sie jetzt „20.000 Lehrstellen unbesetzt: \"Bildungswende\" gefordert“.",
            "url": "https://www.zeit.de/news/2024-02/28/20-000-lehrstellen-unbesetzt-bildungswende-gefordert",
            "urlToImage": "https://img.zeit.de/news/2024-02/28/20-000-lehrstellen-unbesetzt-bildungswende-gefordert-image-group/wide__1300x731",
            "publishedAt": "2024-02-28T05:25:14Z",
            "content": "Im deutschen Handwerk sind im vergangenen Jahr rund 20.000 Lehrstellen unbesetzt geblieben. Der Zentralverband des Deutschen Handwerks ZDH) fordert daher vor Beginn der Münchner Handwerksmesse an die… [+2885 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Faz.net"
            },
            "author": "Simon Hüsgen",
            "title": "F.A.Z. Frühdenker: Kommt nach 30 Jahren die Aufklärung über die letzte RAF-Generation?",
            "description": "Im UN-Menschenrechtsrat wird ein heikler Bericht vorgestellt. Der Deutsche Wetterdienst zieht Bilanz für den Winter. Und die DFB-Frauen hoffen gegen die Niederlande auf das Ticket für Olympia. Der F.A.Z. Newsletter.",
            "url": "https://www.faz.net/podcasts/f-a-z-podcast-fruehdenker/kommt-nach-30-jahren-die-aufklaerung-ueber-die-letzte-raf-generation-faz-fruehdenker-19550641.html",
            "urlToImage": "https://media1.faz.net/ppmedia/aktuell/politik/700062177/1.9550709/facebook_teaser_fplus/ein-symbol-der-raf-auf-einem.jpg",
            "publishedAt": "2024-02-28T05:23:13Z",
            "content": "Das Wichtigste für Sie am Mittwoch:\r\n1. Bodentruppen für die Ukraine?2. Israels schwieriges Verhältnis zur UN3. Packt Daniela Klette nun über die letzte RAF-Generation aus?4. Begräbt Apple den Traum … [+1045 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Techmeme.com"
            },
            "author": null,
            "title": "In abandoning plans for a self-driving car, Apple is giving up on billions in potential revenue and hoping AI, Vision Pro, and other bets make up the difference (Mark Gurman/Bloomberg)",
            "description": "Mark Gurman / Bloomberg:\nIn abandoning plans for a self-driving car, Apple is giving up on billions in potential revenue and hoping AI, Vision Pro, and other bets make up the difference  —  - Company needs to restart search for next blockbuster product  — Alp…",
            "url": "https://www.techmeme.com/240227/p40",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i2zrxCnmvYBw/v1/1200x801.jpg",
            "publishedAt": "2024-02-28T04:20:01Z",
            "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 11:20 PM ET, February 27, 2024.\r\nThe most current version of the site as always is available at our home page.\r\nTo… [+72 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "tagesschau.de"
            },
            "author": "tagesschau.de",
            "title": "Marktbericht: DAX-Rekordrally - und kein Ende in Sicht?",
            "description": "Vier Börsentage in Folge hat der DAX ein Rekordhoch aufgestellt. Zur Wochenmitte könnte das Börsenbarometer nun die nächste Bestmarke erobern - die Vorgaben von den Überseebörsen sind allerdings verhalten.",
            "url": "https://www.tagesschau.de/wirtschaft/finanzen/marktberichte/marktbericht-dax-rekordhoch-serie-kurse-rally-geldanlage-dow-apple-gold-boerse-aktien-100.html",
            "urlToImage": "https://images.tagesschau.de/image/1c630884-af17-4f6a-b200-fda4dc44960c/AAABjZxwbEQ/AAABjcWen7M/16x9-1280/dax-kurstafel-106.jpg",
            "publishedAt": "2024-02-28T06:40:55Z",
            "content": "Stand: 28.02.2024 07:40 Uhr\r\nVier Börsentage in Folge hat der DAX ein Rekordhoch aufgestellt. Zur Wochenmitte könnte das Börsenbarometer nun die nächste Bestmarke erobern - die Vorgaben von den Übers… [+5046 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Caschys Blog"
            },
            "author": "caschy",
            "title": "Meta und LG arbeiten gemeinsam im XR-Bereich zusammen",
            "description": "Meta und LG arbeiten gemeinsam an Projekten im Bereich XR. Am 28. Februar traf sich das Top-Management von LG, darunter CEO William Cho und Park Hyoung-sei, Präsident der Home Entertainment Company, mit Meta-Gründer und CEO Mark Zuckerberg in den LG...Zum Bei…",
            "url": "https://stadt-bremerhaven.de/meta-und-lg-arbeiten-angeblich-gemeinsam-an-einem-mixed-reality-headset/",
            "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2024/02/zuckerberg-quest-3.jpg",
            "publishedAt": "2024-02-28T06:15:37Z",
            "content": "Bildquelle: @zuck auf Instagram\r\nMeta und LG arbeiten gemeinsam an Projekten im Bereich XR. Am 28. Februar traf sich das Top-Management von LG, darunter CEO William Cho und Park Hyoung-sei, Präsident… [+1684 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "01net.com"
            },
            "author": "Mickaël Bazoge",
            "title": "01net morning : le problème avec la R5 électrique, la fin du projet Titan d’Apple, le retour d’Oppo en France",
            "description": "Bonjour à tous, voici la matinale de 01net ! Retrouvez toute l’actu à connaitre pour démarrer la journée du bon pied.",
            "url": "https://www.01net.com/actualites/01net-morning-le-probleme-avec-la-r5-electrique-la-fin-du-projet-titan-dapple-le-retour-doppo-en-france.html",
            "urlToImage": "https://www.01net.com/app/uploads/2024/02/01net-Morning-12.jpg",
            "publishedAt": "2024-02-28T05:00:00Z",
            "content": "Bonjour à tous, voici la matinale de 01net ! Retrouvez toute lactu à connaitre pour démarrer la journée du bon pied.À retenir dans l’actu\r\nIncorrigible Renault ! Après avoir fait le coup avec sa Méga… [+1618 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Apple winds down electric car project, reports say",
            "description": "The firm never acknowledged the project publicly but had recruited thousands of car engineers.",
            "url": "https://www.bbc.co.uk/news/business-68420817",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7ED1/production/_132756423_gettyimages-2009083580.jpg",
            "publishedAt": "2024-02-28T00:34:14Z",
            "content": "Apple has reportedly cancelled its plans to build electric vehicles (EV) a decade after the iPhone maker was rumoured to be working on the project.\r\nThe firm has never publicly acknowledged the proje… [+1059 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "01net.com"
            },
            "author": "Mickaël Bazoge",
            "title": "Apple a un nouveau casque Beats Solo 4 en préparation",
            "description": "Huit ans après le lancement du Solo 3, Apple s'apprêterait à dévoiler un successeur au casque supra aural de Beats ! La dernière bêta d'iOS 17.4 lève un coin du voile sur ce Solo 4 qui ne devrait pas bousculer les habitudes.",
            "url": "https://www.01net.com/actualites/apple-a-un-nouveau-casque-beats-solo-4-en-preparation.html",
            "urlToImage": "https://www.01net.com/app/uploads/2024/02/Beats-Solo-4.jpg",
            "publishedAt": "2024-02-28T06:29:14Z",
            "content": "Huit ans après le lancement du Solo 3, Apple s’apprêterait à dévoiler un successeur au casque supra aural de Beats ! La dernière bêta d’iOS 17.4 lève un coin du voile sur ce Solo 4 qui ne devrait pas… [+1629 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "01net.com"
            },
            "author": "Mickaël Bazoge",
            "title": "Le casque de Sonos sortirait au début de l’été",
            "description": "Sonos veut s'extirper du marché des enceintes audio avec de nombreux produits en développement, dont un casque supra-auriculaire haut de gamme qui viendrait titiller les cadors de Bose ou de Sony. Il faudra simplement faire preuve d'un peu plus de patience qu…",
            "url": "https://www.01net.com/actualites/le-casque-de-sonos-sortirait-au-debut-de-lete.html",
            "urlToImage": "https://www.01net.com/app/uploads/2024/02/Sonos.jpg",
            "publishedAt": "2024-02-28T05:29:12Z",
            "content": "Sonos veut s’extirper du marché des enceintes audio avec de nombreux produits en développement, dont un casque supra-auriculaire haut de gamme qui viendrait titiller les cadors de Bose ou de Sony. Il… [+2281 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "01net.com"
            },
            "author": "Stéphanie Bascou",
            "title": "Partenariat avec Mistral, engagements en matière d’IA… Microsoft cherche à échapper aux autorités antitrust, une stratégie payante ?",
            "description": "« Une initiative d'autorégulation » : dans un long message de blog lundi 26 février, Microsoft s'est engagé à ouvrir son infrastructure d'IA basée sur le cloud à d'autres modèles d'IA - dont celui de Mistral, la licorne française - parmi onze autres « promess…",
            "url": "https://www.01net.com/actualites/partenariat-avec-mistral-engagements-en-matiere-dia-microsoft-cherche-a-echapper-aux-autorites-antitrust-une-strategie-payante.html",
            "urlToImage": "https://www.01net.com/app/uploads/2024/02/Design-sans-titre104.jpg",
            "publishedAt": "2024-02-28T07:02:27Z",
            "content": "« Une initiative d’autorégulation » : dans un long message de blog lundi 26 février, Microsoft s’est engagé à ouvrir son infrastructure d’IA basée sur le cloud à d’autres modèles d’IA – dont celui de… [+8534 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bloomberglaw.com"
            },
            "author": "Leah Nylen",
            "title": "Met with DOJ officials to avoid antitrust lawsuit...",
            "description": "Met with DOJ officials to avoid antitrust lawsuit...\r\n\n \n \n \n (First column, 3rd story, link)\r\n\n \r\n\n \r\n\n \n Related stories:APPLE CANCELS ELECTRIC CAR...\r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
            "url": "https://news.bloomberglaw.com/antitrust/apple-met-with-doj-in-final-bid-to-avoid-coming-antitrust-suit",
            "urlToImage": "https://db0ip7zd23b50.cloudfront.net/dims4/default/68e5f35/2147483647/crop/4032x1554%2B0%2B1029/resize/1920x740%3E/quality/90/?url=http%3A%2F%2Fbloomberg-bna-brightspot.s3.amazonaws.com%2F58%2Fdb%2F2eca74a9425ba33fa2a221cb6f08%2Fiphone.jpg",
            "publishedAt": "2024-02-28T02:52:36Z",
            "content": "Apple Inc.\r\n representatives met with the &lt;-bsp-bb-link state=\"{\"bbHref\":\"bbg://securities/4131761Z%20US%20Equity\",\"_id\":\"0000018d-ecec-d64e-af9d-eefeece20001\",\"_type\":\"0000016b-944a-dc2b-ab6b-d57… [+4442 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Impress.co.jp"
            },
            "author": null,
            "title": "スマホと無線接続するグラス型ARデバイス、NTTコノキューの丸山社長がアピールする特徴は",
            "description": "NTTドコモの100%子会社で、XRを事業化しているNTTコノキューは、MWC Barcelona 2024でグラス型のARデバイスを発表した。同モデルはコンセプトという位置づけ。後日製品化される製品とは仕様が異なる可能性があるというが、スペックの一部も公開されている。",
            "url": "https://k-tai.watch.impress.co.jp/docs/interview/1572194.html",
            "urlToImage": "https://k-tai.watch.impress.co.jp/img/ktw/list/1572/194/1.jpg",
            "publishedAt": "2024-02-28T04:20:15Z",
            "content": "NTT100%XRNTTMWC Barcelona 2024AR \r\n Snapdragon AR2 \r\n NTTNTT \r\nMWC\r\nARSnapdragon AR2\r\n6DOF\r\nMetaMagic Leap1\r\nAR\r\nApple Vision Pro\r\n3D\r\nB2B\r\nXR\r\nMWC\r\nSnapdragon Spaces\r\nNTT\r\nXR\r\nXR2000×20002\r\nUnityUnr… [+28 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livedoor.biz"
            },
            "author": "news4vip2",
            "title": "【画像】高級腕時計派にAppleリングを開発ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
            "description": "1: もん様(東京都) [US] 2024/02/26(月) 08:41:15.03 ID:A+t4FFiM0● BE:421685208-2BP(4000)\n sssp://img.5ch.net/ico/syobo2.gif Appleもスマートリングを発表するタイミングを見計らっていると報じられている。実現すれば、Appleにとって10年弱ぶりの新カテゴリー製品と...",
            "url": "http://news4vip.livedoor.biz/archives/52521349.html",
            "urlToImage": "",
            "publishedAt": "2024-02-28T02:30:56Z",
            "content": "https://hayabusa9.5ch.net/test/read.cgi/news/1708904475/"
        },
        {
            "source": {
                "id": null,
                "name": "Inside.com.tw"
            },
            "author": "Chris",
            "title": "蘋果 Apple Car 喊卡，是「電動車革命」的重大挫折嗎？",
            "description": "這幾年電動車熱潮表面上是 Tesla 等人的風光品牌故事，但背後是「製程」本身從垂直變成水平分工的轉型紀；但最有底氣的蘋果卻不玩了。",
            "url": "https://www.inside.com.tw/article/34329-apple-car-revolution",
            "urlToImage": "https://bucket-img.tnlmedia.com/cabinet/2024/02/f9e5a4e7-34da-402b-adcc-9ef7da62ae23.jpg?w=1200&h=630&fit=crop&auto=compress",
            "publishedAt": "2024-02-28T04:36:00Z",
            "content": "Apple Car \r\n Tesla BYD RivianLucid VinFast  IPO RivianLucid VinFast \r\n 3 1/3~1/2\r\n Apple Car iPhone OEM Apple Car\r\n Project Titan OEM Apple Car Apple Car Level 5 iPad iOS \r\n Level 5 Tesla 2026 \r\nIT O… [+64 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Inside.com.tw"
            },
            "author": "Chris",
            "title": "蘋果電動車夢碎？外媒曝「Apple Car」Project Titan 已喊卡",
            "description": "但現在看起來比起還遙遙無期的 Apple Car，蘋果將更多資源轉向 AI 似乎更實際，",
            "url": "https://www.inside.com.tw/article/34325-apple-cancels-work-on-electric-car-shifts-team-to-generative-ai",
            "urlToImage": "https://bucket-img.tnlmedia.com/cabinet/2024/02/a01df5d8-102d-46e1-b903-35686f80b6f1.jpg?w=1200&h=630&fit=crop&auto=compress",
            "publishedAt": "2024-02-28T01:20:00Z",
            "content": "BloombergApple CarProject Titan \r\n Jeff WilliamsProject Titan Kevin Lynch AI \r\n Apple Car Wired 45,000 Apple Car Level 5 Apple Car Level 2+ Tesla 2026 2028\r\nProject Titan 2015 Tesla Autopilot Canoo C… [+58 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Eric Song",
            "title": "Daily Deals: Apple iPad Air, Pokemon TCG, Helldivers 2, Lost Epoch, and More",
            "description": null,
            "url": "https://www.ign.com/articles/daily-deals-february-27-2024-apple-ipad-air-helldivers-pokemon-tcg-last-epoch",
            "urlToImage": "https://assets-prd.ignimgs.com/2024/02/27/helldivers2-1709078029752.jpg?width=1280",
            "publishedAt": "2024-02-28T00:05:00Z",
            "content": "Today's daily deals include the best price we've ever seen for the latest gen Apple iPad Air, discounts on two recently released games for the PC: Helldivers 2 and Last Epoch, a price drop on a Pokem… [+5467 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Andrew Binns, Contributor, \n Andrew Binns, Contributor\n https://www.forbes.com/sites/andrewbinns/",
            "title": "Apple Cancels Move Into Electric Vehicles Ending A Decade Long Saga",
            "description": "Apple has decided not to pursue a move into vehicles, diverting resources to its generative AI projects. A Shift from developing a new market to defending its core.",
            "url": "https://www.forbes.com/sites/andrewbinns/2024/02/27/apple-cancels-move-into-electric-vehicles-ending-a-decade-long-saga/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65de7d9d9646b5101ff3a187/0x0.jpg?format=jpg&crop=2393,1346,x0,y120,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-02-28T00:28:06Z",
            "content": "And so it ends. Apple has finally decided not to pursue a move into vehicles. After so many years of teasing the world with the possible launch of an Apple car, the company has decided to pull back a… [+3818 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cool3c.com"
            },
            "author": "Mash Yang",
            "title": "蘋果 Apple Car 計畫中止 2000 名員工受影響",
            "description": "蘋果已取消代號為「Project Titan」的Apple Car計畫，預期將造成2000名員工受影響。 蘋果傳聞許久、據說涉及數十億美元研發經費，同時更有多名負責人異動的Apple Car產品計畫，目前似乎已經正式被取消。 彭博新聞記者Mark Gurman指稱，蘋果內部已經取消此項傳聞代號為「Project Titan」的發展計畫，預期將造成目前在此計畫內工作的約2000名員工受影響。 而蘋果已經將多數在此計畫內工作的蘋果員工移轉至人工智慧部門，藉此聚焦自動生成式人工智慧技術發展，其餘人員可能會有一部分移轉到…",
            "url": "https://www.cool3c.com/article/210701",
            "urlToImage": "https://sw.cool3c.com/article/2024/aa454ff3-1946-470a-8fc1-63a7affc6b6b.jpg?fit=max&w=1400&q=80",
            "publishedAt": "2024-02-28T04:28:21Z",
            "content": "Project TitanApple Car2000\r\nApple Car\r\nMark GurmanProject Titan2000\r\n2014\r\n2028Tesla\r\n10Tesla Model X"
        },
        {
            "source": {
                "id": null,
                "name": "Iphoneitalia.com"
            },
            "author": "Giuseppe Migliorino",
            "title": "In arrivo nuove colorazioni primaverili per i cinturini degli Apple Watch",
            "description": "Ecco le nuove colorazioni primaverili in arrivo sui cinturini degli Apple Watch. \nLink all'articolo originale: In arrivo nuove colorazioni primaverili per i cinturini degli Apple Watch",
            "url": "https://www.iphoneitalia.com/822837/colori-primaverili-apple-watch-2024",
            "urlToImage": "https://static.iphoneitalia.com/wp-content/uploads/2024/02/apple-watch-cinturino.webp",
            "publishedAt": "2024-02-28T07:01:54Z",
            "content": "Apple aggiorna spesso i colori dei cinturini per Apple Watch e il codice presente nella beta di iOS 17.4 suggerisce che presto arriveranno nuovi colori primaverili.\r\nCome scoperto da MacRumors, i col… [+754 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "npr.org",
            "title": "Apple cancels its electric car project",
            "description": "After 10 years of development, Apple abruptly cancels its electric car project Apple has ended its secret plans of building a self-driving electric car, a decade-long effort that was seen as one of the most ambitious undertakings in the company's history. App…",
            "url": "https://biztoc.com/x/211072cbdef584ce",
            "urlToImage": "https://c.biztoc.com/p/211072cbdef584ce/og.webp",
            "publishedAt": "2024-02-28T03:56:09Z",
            "content": "After 10 years of development, Apple abruptly cancels its electric car projectApple has ended its secret plans of building a self-driving electric car, a decade-long effort that was seen as one of th… [+242 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "gadgettendency.com",
            "title": "Tesla has been polluting water in Germany for a long time, which is why its plant may be closed",
            "description": "Apple has been rumored to be working on its own car for years, but the company has never officially confirmed its interest in competing with Tesla, Ford or Mercedes-Benz. And now there will be nothing to confirm: as Bloomberg reports, citing its sources who w…",
            "url": "https://biztoc.com/x/04c8902657abc035",
            "urlToImage": "https://c.biztoc.com/p/04c8902657abc035/s.webp",
            "publishedAt": "2024-02-28T02:54:19Z",
            "content": "Apple has been rumored to be working on its own car for years, but the company has never officially confirmed its interest in competing with Tesla, Ford or Mercedes-Benz. And now there will be nothin… [+305 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "3dnews.ru"
            },
            "author": null,
            "title": "К концу 2025 года Intel готова оснастить своими процессорами с ИИ до 100 млн ПК",
            "description": "Корпорация Intel не перестаёт тешить себя надеждами, что интерес пользователей ПК к теме искусственного интеллекта позволит ей в ближайшие два года увеличить поставки своих процессоров, оснащённых блоками аппаратного ускорения работы систем ИИ. В этом году In…",
            "url": "https://3dnews.ru/1100926/k-kontsu-2025-goda-intel-gotova-osnastit-svoimi-protsessorami-s-ii-do-100-mln-pk",
            "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/02/28/1100926/intel_pc.jpg",
            "publishedAt": "2024-02-28T02:01:00Z",
            "content": "Intel , , . Intel 40 , — 60 .\r\n: Intel\r\n, Intel , 20 % , , AMD, Apple, Qualcomm. - Intel (David Feng), , Nikkei Asian Review.\r\n Intel , , . « », — . , Intel Microsoft, Intel Core Ultra (NPU) Windows … [+115 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tinhte.vn"
            },
            "author": "no-reply@tinhte.vn (Anh Tú.), Anh Tú.",
            "title": "Bloomberg: Apple đã huỷ bỏ dự án xe điện, chấm dứt tham vọng kéo dài 1 thập kỷ",
            "description": "Theo một nguồn tin từ Bloomberg, Apple đang hủy bỏ kế hoạch phát triển một chiếc xe điện. Đây có thể được xem là sự chấm dứt cho một trong những dự án tham vọng lớn nhất trong lịch sử của Apple.\n \nhttps://tinhte.",
            "url": "https://tinhte.vn/thread/bloomberg-apple-da-huy-bo-du-an-xe-dien-cham-dut-tham-vong-keo-dai-1-thap-ky.3766206/",
            "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2024/02/8273065_Cover-xe-dien-apple-tinhte-anhtu.jpg",
            "publishedAt": "2024-02-28T04:35:58Z",
            "content": "Ngoài nhng nhân viên k trên, nhóm phát trin xe hi in ca Apple cng có vài trm k s phn cng và nhà thit k. Rt có th h s xin vào làm nhng nhóm sn phm khác ca Apple hoc có th b sa thi. Hin ti, Apple ang t… [+1470 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ComingSoon.net"
            },
            "author": "Disheeta Maheshwari",
            "title": "Ghostwriter (2019) Season 1 Streaming: Watch & Stream Online via Apple TV Plus",
            "description": "Ghostwriter (2019) Season 1 is a captivating mystery television series helmed by director and writer Luke Matheny. The storyline revolves around four children, who come together to solve an exciting mystery. Their adventure begins when a ghost haunting a neig…",
            "url": "https://www.comingsoon.net/guides/news/1568664-ghostwriter-2019-season-1-streaming-watch-stream-online-via-apple-tv-plus",
            "urlToImage": "https://www.comingsoon.net/wp-content/uploads/sites/3/2024/02/MixCollage-28-Feb-2024-06-49-AM-2544.jpg?resize=1200,630",
            "publishedAt": "2024-02-28T01:20:34Z",
            "content": "Ghostwriter (2019) Season 1 is a captivating mystery television series helmed by director and writer Luke Matheny. The storyline revolves around four children, who come together to solve an exciting … [+2747 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ComingSoon.net"
            },
            "author": "Disheeta Maheshwari",
            "title": "Ghostwriter (2019) Season 2 Streaming: Watch & Stream Online via Apple TV Plus",
            "description": "Want to know where to watch Ghostwriter (2019) Season 2 online? Here is everything you need to know about the same. The storyline revolves around a ghost who begins haunting a neighborhood bookstore, unleashing fictional characters into the real world. It com…",
            "url": "https://www.comingsoon.net/guides/news/1568772-ghostwriter-2019-season-2-streaming-watch-stream-online-via-apple-tv-plus",
            "urlToImage": "https://www.comingsoon.net/wp-content/uploads/sites/3/2024/02/MixCollage-28-Feb-2024-06-43-AM-5666.jpg?resize=1200,630",
            "publishedAt": "2024-02-28T01:20:37Z",
            "content": "Want to know where to watch Ghostwriter (2019) Season 2 online? Here is everything you need to know about the same. The storyline revolves around a ghost who begins haunting a neighborhood bookstore,… [+2747 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ComingSoon.net"
            },
            "author": "Vrinda Mundara",
            "title": "Trying (2020) Season 3 Streaming: Watch & Stream Online via Apple TV Plus",
            "description": "Trying (2020) Season 3 is a comedy series about a London-based couple in their 30s who embrace parenthood through adoption. Nikki and Jason are finally parents to two children. But, nothing is easy for the couple as their relationship gets tested through emot…",
            "url": "https://www.comingsoon.net/guides/news/1526055-trying-2020-season-3-streaming-watch-stream-online-via-apple-tv-plus",
            "urlToImage": "https://www.comingsoon.net/wp-content/uploads/sites/3/2024/02/Untitled-design-42-12.jpg?resize=1200,630",
            "publishedAt": "2024-02-28T06:32:03Z",
            "content": "Trying (2020) Season 3 is a comedy series about a London-based couple in their 30s who embrace parenthood through adoption. Nikki and Jason are finally parents to two children. But, nothing is easy f… [+2718 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ComingSoon.net"
            },
            "author": "Disheeta Maheshwari",
            "title": "Ghostwriter (2019) Season 3 Streaming: Watch & Stream Online via Apple TV Plus",
            "description": "Ghostwriter (2019) Season 3 is the third iteration of the popular mystery television directed and written by Luke Matheny. In Season 3, a new ghostwriter enlists the help of three children he had encountered in life to return a precious relic, the Eloquent Pe…",
            "url": "https://www.comingsoon.net/guides/news/1568776-ghostwriter-2019-season-3-streaming-watch-stream-online-via-apple-tv-plus",
            "urlToImage": "https://www.comingsoon.net/wp-content/uploads/sites/3/2024/02/MixCollage-28-Feb-2024-06-40-AM-4583.jpg?resize=1200,630",
            "publishedAt": "2024-02-28T01:20:40Z",
            "content": "Ghostwriter (2019) Season 3 is the third iteration of the popular mystery television directed and written by Luke Matheny. In Season 3, a new ghostwriter enlists the help of three children he had enc… [+2844 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ComingSoon.net"
            },
            "author": "Ayesha Zafar",
            "title": "How It’s Made Season 1 Streaming: Watch & Stream Online via HBO Max",
            "description": "How It’s Made is a Canadian reality documentary series, where the show highlights the process of manufacturing ordinary everyday objects, exploring the multitude of steps and endeavors involved in their production. How It’s Made Season 1 serves as a documenta…",
            "url": "https://www.comingsoon.net/guides/news/1568953-how-its-made-season-1-streaming-watch-stream-online-via-hbo-max",
            "urlToImage": "https://www.comingsoon.net/wp-content/uploads/sites/3/2024/02/MixCollage-28-Feb-2024-11-15-AM-463.jpg?resize=1200,630",
            "publishedAt": "2024-02-28T05:57:38Z",
            "content": "How Its Made is a Canadian reality documentary series, where the show highlights the process of manufacturing ordinary everyday objects, exploring the multitude of steps and endeavors involved in the… [+3185 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Netafull.net"
            },
            "author": "コグレマサト",
            "title": "「iPhone 16 Pro」と「iPhone 16 Pro Max」の両モデルが光学5倍ズームを搭載か",
            "description": "MacRumorsが「iPhone 16 Pro」と「iPhone 16 Pro Max」の両モデルが光学5倍ズームを搭載するという情報を伝えています。Both iPhone 16 Pro Models Again Ru...\n投稿 「iPhone 16 Pro」と「iPhone 16 Pro Max」の両モデルが光学5倍ズームを搭載か は ネタフル に最初に表示されました。",
            "url": "https://netafull.net/iphone/0146433.html",
            "urlToImage": "https://netafull.net/wp-content/uploads/2023/09/iphone-16-pre.jpg",
            "publishedAt": "2024-02-28T05:00:00Z",
            "content": "MacRumorsiPhone 16 ProiPhone 16 Pro Max5Both iPhone 16 Pro Models Again Rumored to Feature 5x Optical Zoom\r\nApple plans to expand the iPhone 15 Pro Max’s tetraprism camera with up to 5x optical zoom … [+389 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tinhte.vn"
            },
            "author": "no-reply@tinhte.vn (Anh Tú.), Anh Tú.",
            "title": "Apple phát hành iOS 17.4 RC: nếu gặp lỗi với iOS 17.3.1 thì anh em nên lên nha",
            "description": "Vậy là iOS 17.4 đã có bản cuối cùng trước khi được phát hành chính thức trong khoảng thời gian tới, đối với trải nghiệm cá nhân của mình thì iOS 17.4 nhìn chung là khá ổn, chủ yếu thay đổi nhiều đối với các nhà phát triển ở châu Âu…",
            "url": "https://tinhte.vn/thread/apple-phat-hanh-ios-17-4-rc-neu-gap-loi-voi-ios-17-3-1-thi-anh-em-nen-len-nha.3766194/",
            "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2024/02/8273058_Cover-iOS-17-tinhte-anhtu.jpg",
            "publishedAt": "2024-02-28T00:14:37Z",
            "content": "Hin ti mình thy nhiu anh em ang phàn nàn v tín hiu sóng in thoi ang gp vn vi iOS 17.3.1, anh em nào b thì th update lên iOS 17.4 RC nha vì ây gn nh là bn chính thc ri. Va lên thì mình cha thy có bt k… [+120 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tinhte.vn"
            },
            "author": "no-reply@tinhte.vn (P.W), P.W",
            "title": "iOS 17.4 hé lộ rằng Beats Solo4 sắp ra mắt, 8 năm sau phiên bản Solo3",
            "description": "Ngay sau khi bản thử nghiệm iOS 17.4 được tung ra, vài chi tiết nhắc đến tên cặp tai nghe Beats Solo4 đã được tìm thấy. Vấn đề là hiện giờ mới nhất cũng mới chỉ có Beats Solo3, ra mắt tận 8 năm về trước.",
            "url": "https://tinhte.vn/thread/ios-17-4-he-lo-rang-beats-solo4-sap-ra-mat-8-nam-sau-phien-ban-solo3.3766227/",
            "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2024/02/8273128_3889259-DSC00340.jpg",
            "publishedAt": "2024-02-28T00:32:22Z",
            "content": "Nhìn nhng hình nh này, có l Beats Solo4 s rt ging Beats Solo3 v mt thit k, vi vài chi tit thay i khin cp tai nghe này ging vi Beats Studio Pro. V mt tính nng, cp tai nghe không dây này có th s h tr t… [+126 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Spidersweb.pl"
            },
            "author": "Oliwier Nytko",
            "title": "Oto ekologiczne etui od Apple’a. Tak wygląda po kilku miesiącach",
            "description": "Apple wprowadził materiał FineWoven, który zastąpił wszystkie skórzane akcesoria, w tym etui. Od samego początku było podejrzenie, że wytrzymałość tej ekologicznej opcji może być znacznie gorsza. Niestety, okazało się to prawdą, ponieważ FineWoven po prawie p…",
            "url": "https://spidersweb.pl/2024/02/apple-finewoven-etui-jakosc.html",
            "urlToImage": "https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2024/02/apple-finewoven-jakosc-1.jpg",
            "publishedAt": "2024-02-28T04:40:00Z",
            "content": "Joanna Stern, felietonistka z WSJ, skrytykowaa swoje etui FineWoven do iPhone'a 15 Pro, podkrelajc problemy takie jak odchodzce brzegi, rysujcy si materia i przebarwienia. Sarkastycznie zauwaya, e \"b… [+203 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TheBlaze"
            },
            "author": "Carlos Garcia",
            "title": "FBI gets absolutely torched online over image of white women on report about retail theft rings",
            "description": "A social media post from the FBI was roundly mocked and ridiculed online after it added an image of white women to a report about retail theft rings in the U.S. \"Higher prices, dangerous products, and closing businesses. These are just some of the impacts Org…",
            "url": "https://www.theblaze.com/news/fbi-image-white-retail-theft",
            "urlToImage": "https://www.theblaze.com/media-library/image.jpg?id=51583709&width=1200&height=600&coordinates=0%2C166%2C0%2C167",
            "publishedAt": "2024-02-28T01:53:00Z",
            "content": "A social media post from the FBI was roundly mocked and ridiculed online after it added an image of white women to a report about retail theft rings in the U.S. \r\n\"Higher prices, dangerous products, … [+2296 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Beast"
            },
            "author": "Jamie Stone",
            "title": "These Gentle Scalp Scrubs Remove Buildup for Healthier Hair",
            "description": "Scouted/The Daily Beast/Retailers.\r\nScouted selects products independently. If you purchase something from our posts, we may earn a small commission.As someone deeply invested in scalp health thanks to my own journey with scalp dryness, I’ve tested countless …",
            "url": "https://www.thedailybeast.com/scalp-scrubs-for-dry-scalp",
            "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1709084359/Best_Scalp_Scrubs_for_Dry_Scalp_neqsve",
            "publishedAt": "2024-02-28T01:42:42Z",
            "content": "Scouted selects products independently. If you purchase something from our posts, we may earn a small commission.\r\nAs someone deeply invested in scalp health thanks to my own journey with scalp dryne… [+3471 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Taisy0.com"
            },
            "author": "taisy0",
            "title": "｢visionOS 1.1｣ではより多くの標準アプリが削除可能に",
            "description": "本日、Appleが開発者向けに「Vision Pro」向けOS「visionOS」の最新ベータ版である「visionOS 1.1 beta 4」をリリースしましたが、Apple Insiderによると、その「visionOS 1.1 bet",
            "url": "https://taisy0.com/2024/02/28/195602.html",
            "urlToImage": "https://taisy0.com/wp-content/uploads/2024/01/th_visionos-home-screen-mt-hood.jpg",
            "publishedAt": "2024-02-28T00:39:23Z",
            "content": "AppleVision ProOSvisionOSvisionOS 1.1 beta 4Apple InsidervisionOS 1.1 beta 4Apple\r\nvisionOS 1.0KeynoteEncounter Dinosaurs\r\nvisionOS 1.1 beta 4Apple TVMusicMindfulnessFreeformNotesMailFilesTips8Safari… [+33 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Taisy0.com"
            },
            "author": "taisy0",
            "title": "PITAKA、｢Amazon 新生活SALE｣に合わせて対象製品を最大50％オフで販売するセールを開催中 ｰ 人気のアラミド繊維ケースなどが対象",
            "description": "PITAKAが、Amazonが3月1日より開催する「新生活SALE」に合わせて、対象製品を最大50％オフで販売するセールを開催しています。 セールでは同社の人気商品であるアラミド繊維を採用したiPhone・GalaxyケースやApple W",
            "url": "https://taisy0.com/2024/02/28/195483.html",
            "urlToImage": "https://taisy0.com/wp-content/uploads/2023/11/pitakacase152023.jpg",
            "publishedAt": "2024-02-28T05:50:41Z",
            "content": "PITAKAAmazon31SALE50\r\niPhoneGalaxyApple WatchiPadAirPodsAirTag\r\n3135SALE\r\n<table><tr><th></th><th></th><th></th><th></th></tr>\r\n<tr><td>iPhone 15 MagEZ Case 4</td><td>8,499</td><td>6,799</td><td>20%<… [+2361 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Macitynet.it"
            },
            "author": "Mauro Notarianni",
            "title": "In arrivo nuovi cinturini Apple Watch per la primavera",
            "description": "Apple tipicamente propone nuovi cinturini in concomitanza dalla primavera e anche quest'anno vedremo probabilmente annunci specifici.\n- su macitynet.it In arrivo nuovi cinturini Apple Watch per la primavera",
            "url": "https://www.macitynet.it/?p=1284595",
            "urlToImage": "https://www.macitynet.it/wp-content/uploads/2024/02/cinturiniprim.jpg",
            "publishedAt": "2024-02-28T06:29:39Z",
            "content": "Apple tipicamente propone nuovi cinturini in concomitanza dalla primavera e anche quest’anno vedremo probabilmente annunci specifici.\r\nÈ quanti si evince dall’esame della Release Candidate di iOS 17.… [+1908 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sapo.pt"
            },
            "author": "Vítor M.",
            "title": "iOS 17.4: Apple traz a versão RC do iOS mais europeus de sempre",
            "description": "Depois de 4 lançamentos beta e muita discussão, a Apple disponibilizou esta semana a Release Candidate (RC) para programadores. Esta versão antecede a versão final para todos os utilizadores que terão recursos dedicados exclusivamente...",
            "url": "https://pplware.sapo.pt/apple/ios-17-4-apple-traz-a-versao-rc-do-ios-mais-europeus-de-sempre/",
            "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2024/02/IMG_1875.jpeg",
            "publishedAt": "2024-02-28T00:30:36Z",
            "content": "O iOS 17.4 introduz alterações profundas na forma como a App Store e as aplicações funcionam na União Europeia, abrindo caminho para mercados de aplicações alternativos, sistemas de pagamento alterna… [+2065 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TechSpot"
            },
            "author": "Daniel Sims",
            "title": "Threads appears to be winning the Twitter succession war",
            "description": "Data from Appfigures shows Meta's Threads app has significantly more daily downloads than X over the past several weeks. Although app downloads don't paint the complete picture, the gap could be widening.Read Entire Article",
            "url": "https://www.techspot.com/news/102051-threads-appears-winning-twitter-succession-war.html",
            "urlToImage": "https://www.techspot.com/images2/news/bigimage/2024/02/2024-02-27-image-27.jpg",
            "publishedAt": "2024-02-28T01:15:00Z",
            "content": "The big picture: Concerns about Twitter / X's future since Elon Musk's takeover have sparked a competition over who can build a better microblogging service. Although X hasn't died, analysis shows th… [+2440 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SamMobile"
            },
            "author": "Asif Iqbal Shaik",
            "title": "VP of XR at Qualcomm leaving company ahead of Samsung’s XR headset launch",
            "description": "Qualcomm's Vice President of XR business division, Hugo Swart, has announced that he is leaving the company. This is an important time for the company, as Qualcomm is looking at major XR headset launches, including Samsung's first XR headset, in the coming mo…",
            "url": "https://www.sammobile.com/news/qualcomm-xr-vp-leaving-company-samsung-xr-headset-launch/",
            "urlToImage": "https://www.sammobile.com/wp-content/uploads/2024/02/Hugo-Swart-Qualcomm-AR-VR-XR-Vice-President-720x405.jpg",
            "publishedAt": "2024-02-28T05:30:20Z",
            "content": "Qualcomm's Vice President of XR business division, Hugo Swart, has announced that he is leaving the company. This is an important time for the company, as Qualcomm is looking at major XR headset laun… [+1428 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Unwire.hk"
            },
            "author": "Oscar",
            "title": "Apple 電動車計劃壽終正寢 2,000 名員工受影響",
            "description": "據《Bloomberg》引述消息人士指，Apple 已放棄開展了長達 10 年的電動車開發工作。消息指負責開發電動車團隊很多員工被轉移至人工智能部門，協助開發生成式人工智能項目。《Bloomberg》引述消息人士指，Apple 本周二（27 日）在內部宣布終止電動車開發，據悉該項目涉及近 2,000 名員工。Apple 尚未正式對外公布以上消息。消息人士又指，Apple 營運總監 Jeff Williams及負責電動車項目的 Apple 副總裁 Kevin Lynch 共同作出了終止電動車開發這一決定。Jeff …",
            "url": "https://unwire.hk/2024/02/28/apple-car-plan-ends/life-tech/auto/",
            "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2024/02/4-694x390.png",
            "publishedAt": "2024-02-28T03:55:17Z",
            "content": "BloombergApple 10 \r\nBloombergApple 27 2,000 Apple Apple Jeff Williams Apple Kevin Lynch \r\nJeff Williams Kevin Lynch John Giannandrea Apple Apple Bloomberg Apple Apple \r\nYouTube\r\nAuto BlogThe Wall Str… [+122 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Courrier International"
            },
            "author": null,
            "title": "Primaires américaines, Mali, Sénégal et Apple : les informations de la nuit",
            "description": "Biden et Trump vainqueurs dans le Michigan. Le président actuel et son prédécesseur ont chacun gagné facilement la primaire de leur parti dans le Michigan. Donald Trump ajoute une victoire à sa liste dans cette primaire mais le Washington Post note que Nikki …",
            "url": "https://www.courrierinternational.com/article/pendant-que-vous-dormiez-primaires-americaines-mali-senegal-et-apple-les-informations-de-la-nuit",
            "urlToImage": "https://focus.courrierinternational.com/2024/02/28/0/0/4000/2667/1200/630/60/0/0fa7254_afp-34kd2zb.jpg",
            "publishedAt": "2024-02-28T04:45:10Z",
            "content": "Biden et Trump vainqueurs dans le Michigan. Le président actuel et son prédécesseur ont chacun gagné facilement la primaire de leur parti dans le Michigan. Donald Trump ajoute une victoire à sa liste… [+2508 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Macmagazine.com.br"
            },
            "author": "Marcelo Melo",
            "title": "Promoções na App Store: MusicMatch, Cozy Solitaire, Fury Unleashed e mais!",
            "description": "Nesta terça-feira, confira e aproveite a nossa seleção de promoções na App Store! O MusicMatch, criado pelo pessoal da Timeless, é um utilitário para o compartilhamento de músicas. Você já deve ter recebido o link de uma música no Spotify, mas é assinante do …",
            "url": "https://macmagazine.com.br/post/2024/02/27/promocoes-na-app-store-musicmatch-cozy-solitaire-fury-unleashed-e-mais/",
            "urlToImage": "https://macmagazine.com.br/wp-content/uploads/2022/01/31-MusicMatch-1260x662.jpg",
            "publishedAt": "2024-02-28T02:16:28Z",
            "content": "Nesta terça-feira, confira e aproveite a nossa seleção de promoções na App Store!\r\nO MusicMatch, criado pelo pessoal da Timeless, é um utilitário para o compartilhamento de músicas.\r\nVocê já deve ter… [+724 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Iphones.ru"
            },
            "author": "Артём Баусов",
            "title": "В коде iOS 17.4 нашли упоминания новых весенних цветов для ремешков Apple Watch",
            "description": "Apple постоянно выпускает новые линейки ремешков для Apple Watch, приуроченные к какому-либо празднику или сезону. Эта весна, кажется, не станет исключением. В коде iOS 17.4 нашлись упоминания ремешков следующих цветов: светло-голубого, океанского синего, роз…",
            "url": "https://www.iphones.ru/iNotes/v-kode-ios-174-nashli-upominaniya-novyh-vesennih-cvetov-dlya-remeshkov-apple-watch-02-28-2024",
            "urlToImage": null,
            "publishedAt": "2024-02-28T05:17:35Z",
            "content": "Apple Apple Watch, - . , , .\r\n iOS 17.4 : -, , , , « » (, -). Hermes, Bleu Céleste Jaune de Naples. Watch « 2024».\r\nApple Apple Watch, - . , , . iOS 17.4 : -, , , , « » (, -). Hermes, Bleu Céleste Ja… [+17 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Iphones.ru"
            },
            "author": "Павел",
            "title": "Обзор Яндекс ТВ Станции с Алисой. Это телевизор с разными диагоналями и кучей навороченных фишек",
            "description": "Продажи умных колонок в России бьют рекорды каждый год, а это значит, что народ постепенно привыкает разговаривать с техникой. Вместе с тем растёт их многофункциональность. Яндекс Станция, к примеру, стартовала как обычная колонка, которая умела включать музы…",
            "url": "https://www.iphones.ru/iNotes/obzor-yandeks-tv-stancii-i-yandeks-tv-stancii-pro-eto-alisa-s-televizorom-a-ne-naoborot-02-21-2024",
            "urlToImage": null,
            "publishedAt": "2024-02-28T06:30:02Z",
            "content": ", , . \r\n . , , , , , , .\r\n , .\r\n, .\r\n . , ( ), , : .\r\n. , , .\r\n .\r\n , . .\r\n (, Zegbee ).\r\n , , - .\r\n, . .\r\n . , . , .\r\n , , . «». \r\n , .\r\n: .\r\n YaOS X ( Android 11), 4K Ultra HD HDR 60 , , « » .\r\n : … [+1047 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Expansion.com"
            },
            "author": "Expansión.com",
            "title": "Iberdrola, en el puesto 9 de las 200 compañías más limpias",
            "description": "Las empresas están clasificadas según sus ingresos limpios en dólares estadounidenses. Acerinox aparece en el puesto 64; Inditex en el 95; Acciona en el 96, y EDPRenovaveis en...",
            "url": "https://www.expansion.com/economia-sostenible/2024/02/28/65dcf6ca468aeb172b8b45ac.html",
            "urlToImage": "https://phantom-expansion.unidadeditorial.es/615016339d21a0d207ac2f5120da3e7c/crop/102x26/922x572/f/webp/assets/multimedia/imagenes/2024/02/26/17089798792867.jpg",
            "publishedAt": "2024-02-28T00:22:22Z",
            "content": "La multinacional energética es la única empresa española en las 50 primeras del undécimo ránking 'Clean200' de 'Corporate Knights'.Las empresas están clasificadas según sus ingresos limpios en dólare… [+783 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Expansion.com"
            },
            "author": "expansion.com",
            "title": "La Primera de Expansión sobre Aena, Santander, Caixabank, Sabadell y el Supremo",
            "description": "El podcast de este miércoles les cuenta también que Santander, CaixaBank y Sabadell han rediseñado el bonus que reparten entre sus directivos para acelerar la consecución de...",
            "url": "https://www.expansion.com/podcasts/la-primera-de-expansion/2024/02/28/65ded10ae5fdea7f2b8b45a4.html",
            "urlToImage": "https://phantom-expansion.unidadeditorial.es/40efdbb4c024685f74742688fec6582f/f/webp/assets/multimedia/imagenes/2024/02/28/17091024134423.jpg",
            "publishedAt": "2024-02-28T06:50:12Z",
            "content": "La Primera de Expansión les cuenta hoy que Aena consiguió en 2023 un beneficio neto récord de 1.630 millones de euros. Les ofrecemos sus principales cifras. El podcast de este miércoles les cuenta ta… [+805 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CleanTechnica"
            },
            "author": "Jennifer Sensiba",
            "title": "How’s The Metaverse Doing Two Years Later?",
            "description": "In late 2021, I wrote a four-part article series about the vast potential and possible downsides of Mark Zuckerberg’s vision ... [continued]\nThe post How’s The Metaverse Doing Two Years Later? appeared first on CleanTechnica.",
            "url": "https://cleantechnica.com/2024/02/28/hows-the-metaverse-doing-two-years-later/",
            "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/02/Meta-Quest-3-Press-Photo-1600x890-1.png",
            "publishedAt": "2024-02-28T05:36:32Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nIn late 2021, I wrote a four-part article series about the vast potential and possible downsides of Mark Zuck… [+7631 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livedoor.jp"
            },
            "author": "itsoku",
            "title": "【悲報】Apple、EV開発計画を断念か",
            "description": "1:Ikhtiandr ★  2024/02/28(水) 04:19:24.74 ID:JsmT7nHq9 BE:456446275-2BP(1000) アップル、ＥＶ開発計画ついに断念－生成ＡＩにリソースをシフト https://www.bloomberg.co.jp/news/articles/2024-02-27/S9J3GPT0G1KW00?srnd=cojp-v2",
            "url": "http://blog.livedoor.jp/itsoku/archives/61274807.html",
            "urlToImage": "https://livedoor.blogimg.jp/itsoku/imgs/8/b/8b85204d-s.png",
            "publishedAt": "2024-02-28T00:10:11Z",
            "content": "1:Ikhtiandr 2024/02/28() 04:19:24.74 ID:JsmT7nHq9 BE:456446275-2BP(1000)\r\nhttps://www.bloomberg.co.jp/news/articles/2024-02-27/S9J3GPT0G1KW00?srnd=cojp-v2\r\n2: 2024/02/28() 04:19:52.20 ID:kKvXp7ZB0\r\n3… [+2404 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Queerty.com"
            },
            "author": "Johnny Lopez",
            "title": "That time Jeremiah Brent was hired to be Bravo’s new fashion gay after Brad Goreski quit",
            "description": "Prior to joining 'Queer Eye', Jeremiah Brent got his start by replacing Brad Goreski's Gucci loafers.",
            "url": "https://www.queerty.com/that-time-jeremiah-brent-was-hired-to-be-bravos-new-fashion-gay-after-brad-goreski-quit-20240227",
            "urlToImage": "https://adabgmwwup.cloudimg.io/v7/_queerty-prodweb_/2024/02/mixcollage-27-feb-2024-04-54-pm-6556-scaled.jpg?auto=format&auto=compress&fit=crop&gravity=50p,0p&w=1200&h=630&force_format=jpeg&wat=1&wat_gravity=southeast&wat_pad=70",
            "publishedAt": "2024-02-28T02:00:00Z",
            "content": "On Tuesday, Netflix revealed they were officially giving a big makeover to Queer Eye.\r\nOn the heels of Bobby Berk’s recent exit, the upcoming ninth season of the reality series will see interior desi… [+3869 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Autocar"
            },
            "author": "Autocar",
            "title": "My Week In Cars: New Steve Cropley/Matt Prior podcast (ep. 77)",
            "description": "This week the lads talk Kei cars in Europe...\n\n\nThis week Steve reports on the Geneva motor show, and the lads talk Kei cars and licence refreshers \n\nEpisode 77 of the Autocar podcast My Week In Cars finds our resident car hacks Steve Cropley and Matt Prior t…",
            "url": "https://www.autocar.co.uk/car-news/podcasts-my-week-in-cars/my-week-in-cars-episode-77",
            "urlToImage": "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/honda-s660_0.jpg",
            "publishedAt": "2024-02-28T05:00:00Z",
            "content": "Episode 77 of the Autocar podcast My Week In Cars finds our resident car hacks Steve Cropley and Matt Prior talking about this week's Geneva motor show, visiting the McLaren Technical Centre to discu… [+390 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MobileSyrup"
            },
            "author": "Bradly Shankar",
            "title": "New on CBC Gem: March 2024",
            "description": "CBC has revealed the full list of movies and shows coming to its Gem streaming service in March Highlights include The Juno Awards hosted by Nelly Furtado, Crouching Tiger, Hidden Dragon and Workin’ Moms. Read on for the full list: March 1st The Adventures of…",
            "url": "https://mobilesyrup.com/2024/02/27/new-on-cbc-gem-march-2024/",
            "urlToImage": "https://cdn.mobilesyrup.com/wp-content/uploads/2024/02/Crouching-Tiger-Hidden-Dragon-scaled.jpg",
            "publishedAt": "2024-02-28T02:05:12Z",
            "content": "CBC has revealed the full list of movies and shows coming to its Gem streaming service in March\r\nHighlights include The Juno Awards hosted by Nelly Furtado, Crouching Tiger, Hidden Dragon and Workin’… [+1736 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thefirearmblog.com"
            },
            "author": "Eric B",
            "title": "TFB Review: Schmidt & Bender 5-45×56 PMII High Power Riflescope",
            "description": "This is a review of the Schmidt & Bender 5-45×56 PMII High Power Riflescope. I’ve reviewed almost all of S&B’s PMII riflescopes, and as the “top bird”, the 5-45x holds a special place. It was (and still is) my Holy Grail of riflescopes. The 9-power magnificat…",
            "url": "https://www.thefirearmblog.com/blog/2024/02/27/review-schmidt-bender-5-45x56-pmii-high-power-riflescope/",
            "urlToImage": "https://www.thefirearmblog.com/blog/wp-content/uploads/2024/01/sob545-2.png",
            "publishedAt": "2024-02-28T01:00:00Z",
            "content": "This is a review of the Schmidt &amp; Bender 5-45×56 PMII High Power Riflescope. I’ve reviewed almost all of S&amp;B’s PMII riflescopes, and as the “top bird”, the 5-45x holds a special place. It was… [+14653 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "Anja Ettel, Laurin Meyer",
            "title": "Microsofts neue KI-Liebe und ein aussichtsreicher Puma-Push",
            "description": "In der heutigen Folge „Alles auf Aktien“ sprechen die Finanzjournalisten Anja Ettel und Laurin Meyer über Cornflakes zum Abendbrot, den Bitcoin im Aufwind und das Comeback eines Corona-Gewinners.",
            "url": "https://www.welt.de/podcasts/alles-auf-aktien/article250309544/Boersen-Podcast-Microsoft-investiert-in-Mistral-AI-Das-bedeutet-der-neue-KI-Deal.html",
            "urlToImage": "https://img.welt.de/img/podcasts/alles-auf-aktien/mobile244546280/8631359437-ci16x9-w1200/meyer-ettel-DWO-Podcast-Teaser-AllesAufAktien-mit-2zu3-meyer-ettel-aw.jpg",
            "publishedAt": "2024-02-28T03:56:19Z",
            "content": "Außerdem geht es um WK Kellogg, iRobot, Zoom, Bitcoin Group, Coinbase, Munich Re, Intuitive Machines, Berkshire Hathaway, Nvidia, Intel, Meta, Adidas und Nike. Hier die aktuelle Folge hören:\r\nAbonnie… [+515 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bohaishibei.com"
            },
            "author": "梁萧",
            "title": "苹果公司终止了长达十年的电动车项目",
            "description": "@宝玉xp：转译自彭博社：苹果公司终止了长达十年的电动车项目 * 公司高层决定放弃名为“泰坦”的电动车研发工作 * 部分汽车项目团队的成员将加入苹果的人工智能部门 据知情人士透露，苹果公司宣布取消已进…",
            "url": "https://www.bohaishibei.com/post/89408/",
            "urlToImage": null,
            "publishedAt": "2024-02-28T01:37:22Z",
            "content": "@xp\r\n* * \r\nMark Gurman \r\n2000 Jeff Williams Kevin Lynch \r\nSPG John Giannandrea AI \r\n182.631%\r\nCEO Elon Musk X \r\n2014\r\n Doug Field []Lynch Williams \r\nApple 2017 Apple Lexus SUV Chrysler \r\nApple \r\n Tes… [+231 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hvg.hu"
            },
            "author": "hvg@hvg.hu",
            "title": "X6 életérzés féláron: teszten a sportos benzines és tisztán elektromos új BMW X2",
            "description": "Ha túl drága, esetleg túl nagy a BMW X6 és még az X4 is, akkor érdemes egy pillantást vetni a teljesen új X2-re, mely egy az elődjétől teljesen eltérő karakterű kupé divatterepjáró lett. Kipróbáltuk a 300 lóerős durrogós M35i és a 313 lovas hangtalan iX2 vált…",
            "url": "https://hvg.hu/cegauto/20240228_x6_eleterzes_felaron_teszten_a_sportos_benzines_es_tisztan_elektromos_uj_bmw_x2",
            "urlToImage": "https://api.hvg.hu/Img/7fcefbf8-ac48-4ee6-aef5-32203afa118c/5dbfda9f-d507-4a30-baee-03860a2beb3c.jpg",
            "publishedAt": "2024-02-28T06:21:00Z",
            "content": "2018-at írtunk, amikor a BMW piacra dobta az els X2-t, ami tulajdonképpen egy kicsit megemelt kasztnis kompakt modell volt. Az azóta eltelt 6 évben 390 ezer X2 talált gazdára világszerte, ami egy ily… [+9817 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "STERN.de"
            },
            "author": "STERN.de",
            "title": "Handwerk: 20.000 Lehrstellen unbesetzt: \"Bildungswende\" gefordert",
            "description": "Deutschlands Handwerkern fehlt eine sechsstellige Zahl von Fachkräften und eine fünfstellige Zahl von Azubis. Dazu beigetragen hat nach Einschätzung des Handwerks die deutsche Bildungspolitik.",
            "url": "https://www.stern.de/gesellschaft/regional/bayern/handwerk--20-000-lehrstellen-unbesetzt---bildungswende--gefordert-34499106.html",
            "urlToImage": "https://image.stern.de/34499108/t/hq/v1/w1440/r1.7778/-/28--urnnewsmldpacom2009010124022899150300v3w800h600l640t425r1920b1278jpeg---b6e00442815a021f.jpg",
            "publishedAt": "2024-02-28T05:25:14Z",
            "content": "Deutschlands Handwerkern fehlt eine sechsstellige Zahl von Fachkräften und eine fünfstellige Zahl von Azubis. Dazu beigetragen hat nach Einschätzung des Handwerks die deutsche Bildungspolitik.\r\nIm de… [+2223 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tweakers.net"
            },
            "author": "Bart van Klaveren",
            "title": "MAME 0.263",
            "description": "Versie 0.263 van MAME is uitgekomen. MAME staat voor Multiple Arcade Machine Emulator en is een programma waarmee het mogelijk is om een grote hoeveelheid klassieke arcadespellen te spelen. MESS staat voor Multi Emulator Super System en emuleert een groot aan…",
            "url": "https://tweakers.net/downloads/67788/mame-0263.html",
            "urlToImage": "https://tweakers.net/i/M4UPgQ3quMdQGC3NerwZ8mkCLFo=/134x134/filters:strip_icc():strip_exif()/i/2004650960.jpeg?f=meta",
            "publishedAt": "2024-02-28T06:16:12Z",
            "content": "Versie 0.263 van MAME is uitgekomen. MAME staat voor Multiple Arcade Machine Emulator en is een programma waarmee het mogelijk is om een grote hoeveelheid klassieke arcadespellen te spelen. MESS staa… [+1636 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Apple abandons electric car plans: media",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_447d8f6f-181f-4267-8707-4569fe629029",
            "urlToImage": null,
            "publishedAt": "2024-02-28T06:28:43Z",
            "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Apple unplugs self-driving electric car project, reports say",
            "description": "The firm never acknowledged the project publicly but had recruited about two thousands workers.",
            "url": "https://www.bbc.com/news/business-68420817",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7ED1/production/_132756423_gettyimages-2009083580.jpg",
            "publishedAt": "2024-02-28T04:18:21Z",
            "content": "By Mariko OiBusiness reporter\r\nApple has reportedly cancelled its plans to build electric vehicles (EV) a decade after the iPhone maker was rumoured to be working on the project.\r\nThe firm has never … [+1715 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Apple unplugs self-driving electric car project, reports say",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_4d506b5b-1d6b-44ec-b628-6f68be476f47",
            "urlToImage": null,
            "publishedAt": "2024-02-28T04:05:15Z",
            "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "The Apple Car is dead, and Elon Musk is speaking at its funeral",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_07ae8ec5-670d-447a-812f-25cbcd8acc80",
            "urlToImage": null,
            "publishedAt": "2024-02-28T04:03:30Z",
            "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Iphon.fr"
            },
            "author": "iPhon.fr",
            "title": "Découvrez si votre iPhone sera compatible avec iOS 18, selon ces fuites",
            "description": "La liste des iPhone qui seront compatibles avec iOS 18 a été révélée par une source souvent bien informée. Apple ne précise pas si ces informations sont correctes ou non.",
            "url": "https://www.iphon.fr/post/decouvrez-si-votre-iphone-sera-compatible-avec-ios-18-selon-ces-fuites",
            "urlToImage": "https://www.iphon.fr/app/uploads/2024/02/ios-18-1.jpg",
            "publishedAt": "2024-02-28T04:54:54Z",
            "content": "Tous les iPhone qui sont compatibles avec iOS 17 devraient aussi pouvoir installer iOS 18, relaie MacRumors.\r\nC’est ce qu’assure un informateur souvent bien avisé sur le réseau social X, auparavant a… [+4369 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Paul Tan's Automotive News"
            },
            "author": "Mick Chan",
            "title": "Apple cancels EV, to work on generative AI projects",
            "description": "The Apple Car project is no more, as the company has decided to pivot towards development of artificial intelligence (AI) projects, Bloomberg has reported. According to Bloomberg sources, Apple made the announcement internally, to the […]\nThe post Apple cance…",
            "url": "https://paultan.org/2024/02/28/apple-cancels-ev-to-work-on-generative-ai-projects/",
            "urlToImage": "https://paultan.org/image/2024/02/apple-titan-render-1200x842.jpg",
            "publishedAt": "2024-02-28T04:40:09Z",
            "content": "The Apple Car project is no more, as the company has decided to pivot towards development of artificial intelligence (AI) projects, Bloomberg has reported.\r\nAccording to Bloomberg sources, Apple made… [+2247 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Paul Tan's Automotive News"
            },
            "author": "Izwaashura Sadali",
            "title": "Peugeot e-2008 EV 2024 dikesan di Malaysia – GT facelift dengan 156PS, jarak 406 km, bakal dilancar?",
            "description": "Nampak gayanya kita memang bakal menerima kehadiran Peugeot e-2008 dalam pasaran tempatan. SUV elektrik buatan Perancis ini baru dikesan sedang dicas di stesen pengecasan di X Park Sunway Serene, seperti yang dimuatnaik di Malaysian Electric Vehicle Owners Cl…",
            "url": "https://paultan.org/2024/02/28/peugeot-e-2008-ev-2024-dikesan-di-malaysia-gt-facelift-dengan-156ps-jarak-406-km-bakal-dilancar/",
            "urlToImage": "https://paultan.org/image/2024/02/Peugeot-e-2008-ev-seen-testing-and-charge-in-gentari-charger-BM-1200x900.jpeg",
            "publishedAt": "2024-02-28T02:14:55Z",
            "content": "Nampak gayanya kita memang bakal menerima kehadiran Peugeot e-2008 dalam pasaran tempatan. SUV elektrik buatan Perancis ini baru dikesan sedang dicas di stesen pengecasan di X Park Sunway Serene, sep… [+1863 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Paul Tan's Automotive News"
            },
            "author": "Izwaashura Sadali",
            "title": "MG ZS EV boleh ditempah di M’sia – 176 PS/280 Nm, 51.1 kWh, jarak gerak 320 km, dijangka dari RM129k",
            "description": "Dua tahun lepas, kenderaan elektrik jenama MG dibawa masuk ke Malaysia oleh sebuah syarikat grey importer terkenal. Walau bagaimana pun, kini jenama yang sama telah pun dibawa masuk secara rasminya ke pasaran tempatan oleh SAIC Motor Malaysia, iaitu bagi mode…",
            "url": "https://paultan.org/2024/02/28/mg-zs-ev-boleh-ditempah-di-msia-176-ps-280-nm-51-1-kwh-jarak-gerak-320-km-dijangka-dari-rm129k/",
            "urlToImage": "https://paultan.org/image/2024/02/2024_MG_Models_Preview_MGZS_EV_Ext-2-BM-1200x801.jpg",
            "publishedAt": "2024-02-28T04:11:34Z",
            "content": "Dua tahun lepas, kenderaan elektrik jenama MG dibawa masuk ke Malaysia oleh sebuah syarikat grey importer terkenal. Walau bagaimana pun, kini jenama yang sama telah pun dibawa masuk secara rasminya k… [+3628 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Paul Tan's Automotive News"
            },
            "author": "Danny Tan",
            "title": "MG4 EV now open for booking in Malaysia – from RM104k, up to 520 km range, 435 PS/600 Nm XPOWER",
            "description": "Welcome to Malaysia, MG. Ladies and gentlemen, say hello to the latest auto brand to hit our shores, MG. The old timers among us would know the English brand from way back, while the middle aged car guys might remember the brief period that MG Rover cars were…",
            "url": "https://paultan.org/2024/02/28/mg4-ev-now-open-for-booking-in-malaysia-from-rm104k-up-to-520-km-range-435-ps-600-nm-xpower/",
            "urlToImage": "https://paultan.org/image/2024/02/2024_MG_Models_Preview_MG4_EV_Ext-3-1200x801.jpg",
            "publishedAt": "2024-02-28T03:53:51Z",
            "content": "Welcome to Malaysia, MG. Ladies and gentlemen, say hello to the latest auto brand to hit our shores, MG. The old timers among us would know the English brand from way back, while the middle aged car … [+7456 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Paul Tan's Automotive News"
            },
            "author": "Danny Tan",
            "title": "MG ZS EV now open for booking in Malaysia – B-SUV, 51 kWh batt, 320 km range, 176 PS/280 Nm, RM129k",
            "description": "Welcome to Malaysia, MG. Ladies and gentlemen, say hello to the latest auto brand to hit our shores, MG. The old timers among us would know the English brand from way back, while the middle aged car guys might remember the brief period that MG Rover cars were…",
            "url": "https://paultan.org/2024/02/28/mg-zs-ev-now-open-for-booking-in-malaysia-b-suv-51-kwh-batt-320-km-range-176-ps-280-nm-rm129k/",
            "urlToImage": "https://paultan.org/image/2024/02/2024_MG_Models_Preview_MGZS_EV_Ext-1-1200x801.jpg",
            "publishedAt": "2024-02-28T03:58:59Z",
            "content": "Welcome to Malaysia, MG. Ladies and gentlemen, say hello to the latest auto brand to hit our shores, MG. The old timers among us would know the English brand from way back, while the middle aged car … [+5295 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Paul Tan's Automotive News"
            },
            "author": "Izwaashura Sadali",
            "title": "MG4 EV dibuka tempahan di Malaysia – 4 varian; hingga 435 PS/600 Nm, 520 km; dijangka dari RM104k",
            "description": "SAIC Motor Malaysia telah memperkenalkan barisan model MG4 EV untuk pasaran tempatan. Hatchback lima-pintu elektrik penuh ini ditawarkan dengan empat varian iaitu Standard dengan harga jangkaan bermula RM104,000 tanpa insurans, Lux berharga RM129,000, RM149,0…",
            "url": "https://paultan.org/2024/02/28/mg4-2024-dibuka-tempahan-di-malaysia/",
            "urlToImage": "https://paultan.org/image/2024/02/2024_MG_Models_Preview_MG4_EV_Ext-1-BM-1200x801.jpg",
            "publishedAt": "2024-02-28T03:57:06Z",
            "content": "SAIC Motor Malaysia telah memperkenalkan barisan model MG4 EV untuk pasaran tempatan. Hatchback lima-pintu elektrik penuh ini ditawarkan dengan empat varian iaitu Standard dengan harga jangkaan bermu… [+5998 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Paul Tan's Automotive News"
            },
            "author": "Mohd Farid Awaludin",
            "title": "Renault 5 EV – hatchback ikonik hidup semula dengan kuasa elektrik, 150 PS/245 Nm, jarak gerak 400 km",
            "description": "Di Jerman ada Volkswagen Golf, manakala di UK ada Ford Fiesta – ini adalah antara hatchback kompak ikonik yang sangat popular di Eropah pada era 70’an dan 80’an. Namun jangan lupa, di Perancis pula ada Renault 5 dengan status ikonik yang sama. Selepas model i…",
            "url": "https://paultan.org/2024/02/28/renault-5-ev-hatchback-ikonik-hidup-semula-dengan-kuasa-elektrik-150-ps-245-nm-jarak-gerak-400-km/",
            "urlToImage": "https://paultan.org/image/2024/02/Renault-5-E-Tech-electric-12_BM-e1709094203668-1200x669.jpg",
            "publishedAt": "2024-02-28T04:39:37Z",
            "content": "Di Jerman ada Volkswagen Golf, manakala di UK ada Ford Fiesta – ini adalah antara hatchback kompak ikonik yang sangat popular di Eropah pada era 70’an dan 80’an. Namun jangan lupa, di Perancis pula a… [+6959 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.nzz.ch"
            },
            "author": "David Vogel (dv), Antonia Moser (ata)",
            "title": "PODCAST - David Horowitz: Dieser Mann könnte Donald Trump zur Wiederwahl verhelfen",
            "description": "Einst war Horowitz Marxist und Wortführer der Linken. Heute ist der Intellektuelle Trump-Anhänger und nimmt bedeutenden Einfluss auf die US-Wahlen.",
            "url": "https://www.nzz.ch/podcast/dieser-mann-kann-trump-zur-wiederwahl-verhelfen-nzz-akzent-ld.1814893",
            "urlToImage": "https://img.nzz.ch/2024/01/25/e5149364-8bff-414a-889d-5d95fb4a16ce.jpeg?width=1200&height=675&fit=bound&quality=75&auto=webp&crop=1200,675,x0,y311&wmark=nzz",
            "publishedAt": "2024-02-28T04:30:00Z",
            "content": "Hören und abonnieren Sie den Podcast «NZZ Akzent» auch auf Spotify,Apple Podcasts oder Castbox.\r\nHaben Sie ein Feedback zum Podcast? Sagen Sie uns Ihre Meinung.\r\nIn dieser Podcast-Episode:\r\n«Präsiden… [+731 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.nzz.ch"
            },
            "author": "Elena Oberholzer (obe)",
            "title": "Shein und Temu schicken täglich Tausende Kleidungsstücke per Flugzeug nach Europa und in die USA – das wird zum Problem für die Luftfracht",
            "description": "Fast Fashion wird immer beliebter. Jede zweite Luftfracht aus China ist voll mit Kleidung. Das fordert die Logistikunternehmen.",
            "url": "https://www.nzz.ch/wirtschaft/shein-und-temu-schicken-taeglich-tausende-kleidungsstuecke-per-flugzeug-nach-europa-und-in-die-usa-das-wird-zum-problem-fuer-die-luftfracht-ld.1815053",
            "urlToImage": "https://img.nzz.ch/2024/02/23/bffaa59b-457f-4935-ab6a-11ac2d307aad.jpeg?width=1200&height=675&fit=bound&quality=75&auto=webp&crop=5404,3040,x0,y710&wmark=nzz",
            "publishedAt": "2024-02-28T04:30:00Z",
            "content": "Tausende Menschen kaufen täglich bei Shein ein.\r\nFünf T-Shirts für fünf Franken, geliefert in fünf Tagen und das direkt aus China. Was absurd klingt, ist das sehr erfolgreiche Geschäftsmodell des chi… [+6145 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ifun.de › Apple-News seit 2001"
            },
            "author": "Nicolas",
            "title": "Projekt Titan ist tot: Apples Auto-Ambitionen verpuffen im Nichts",
            "description": "Apples „Projekt Titan“, der ambitionierte Bau eines selbstfahrenden Elektrofahrzeuges, ist tot. Dies hat Cupertino den am Fahrzeug-Unterfangen beteiligten Mitarbeitern in einem internen Memo am Dienstag mitgeteilt und mit diesem für mehr als 2.000 überraschte…",
            "url": "https://www.ifun.de/projekt-titan-ist-tot-apples-auto-ambitionen-verpuffen-im-nichts-228341/",
            "urlToImage": "https://images.ifun.de/wp-content/uploads/2024/01/apple-auto-feature.jpg",
            "publishedAt": "2024-02-28T05:58:48Z",
            "content": "Apples „Projekt Titan“, der ambitionierte Bau eines selbstfahrenden Elektrofahrzeuges, ist tot. Dies hat Cupertino den am Fahrzeug-Unterfangen beteiligten Mitarbeitern in einem internen Memo am Diens… [+2181 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Bloomberg",
            "title": "Apple to wind down electric car effort after decadelong odyssey",
            "description": "Apple made the disclosure internally Tuesday, surprising the nearly 2,000 employees working on the project, said the people, who asked not to be identified because the announcement wasnât public.",
            "url": "https://www.moneycontrol.com/news/world/apple-to-wind-down-electric-car-effort-after-decadelong-odyssey-12366531.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/02/Apple-770x433.jpg",
            "publishedAt": "2024-02-28T01:37:36Z",
            "content": "Apple Inc. is canceling a decadelong effort to build an electric car, according to people with knowledge of the matter, abandoning one of the most ambitious projects in the history of the company.\r\nA… [+5526 chars]"
        }
    ]

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsBlink - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title}
                                description={element.description} imageUrl={element.urlToImage}
                                newsUrl={element.url} />
                        </div>
                    })}

                </div>
            </div >
        )
    }
}

export default News