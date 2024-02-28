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
        }
    ]

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8261cbfa5baf424b9c15ab5b99958959";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsBlink - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""}
                                description={element.description ? element.description.length >= 60 ? element.description.slice(0, 60) + "..." : element.description : ""}
                                imageUrl={element.urlToImage ? element.urlToImage : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=740"} newsUrl={element.url} />
                        </div>
                    })}

                </div>
            </div >
        )
    }
}

export default News