import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      status: "ok",
      totalResults: 36,
      articles: [
        {
          source: {
            id: "al-jazeera-english",
            name: "Al Jazeera English",
          },
          author: "Al Jazeera",
          title:
            "Massive crowds rally in Israel as vote on judicial overhaul looms - Al Jazeera English",
          description:
            "Protesters set up camp outside Israeli parliament as hundreds of thousands rally in Tel Aviv against judicial changes.",
          url: "https://www.aljazeera.com/news/2023/7/23/huge-crowds-march-in-israel-as-vote-on-judicial-overhaul-nears",
          urlToImage:
            "https://www.aljazeera.com/wp-content/uploads/2023/07/2023-07-23T064830Z_1780380827_RC2U82AP1V5K_RTRMADP_3_ISRAEL-POLITICS-JUDICIARY-1690103905.jpg?resize=1920%2C1440",
          publishedAt: "2023-07-23T09:30:04Z",
          content:
            "Tens of thousands of Israelis have marched into Jerusalem and more protesters took to the streets in Tel Aviv in a last-ditch show of force aimed at blocking Prime Minister Benjamin Netanyahus conten… [+6375 chars]",
        },
        {
          source: {
            id: "independent",
            name: "Independent",
          },
          author: "Andrea Blanco",
          title:
            "Woman claiming to be $1bn Powerball winner seen screaming and running from Skid Row store that sold the ticket - The Independent",
          description:
            "‘I can’t even ... I can’t,’ the unidentified woman said as she fought tears of joy. ‘I’m scared right now, I’m so scared’",
          url: "https://www.independent.co.uk/news/world/americas/powerball-jackpot-lottery-winner-b2380378.html",
          urlToImage:
            "https://static.independent.co.uk/2023/07/21/16/newFile.jpg?quality=75&width=1200&auto=webp",
          publishedAt: "2023-07-23T09:21:57Z",
          content:
            "Sign up to our Evening Headlines email for your daily guide to the latest news\r\nSign up to our free US Evening Headlines email\r\nA woman claiming to be the winner of the $1.08bn Powerball jackpot was … [+3479 chars]",
        },
        {
          source: {
            id: "reuters",
            name: "Reuters",
          },
          author: "Horaci Garcia, Guillermo Martinez",
          title:
            "Spain election: Voting starts in poll that could see Socialists lose power - Reuters",
          description:
            'Spaniards began voting on Sunday in a potentially close-run <a href="/world/europe/spains-snap-election-what-you-need-know-2023-07-14/">general election</a> that could see Prime Minister Pedro Sanchez\'s governing Socialists lose power and a far-right party ma…',
          url: "https://www.reuters.com/world/europe/spain-heads-close-run-polls-marked-by-spectre-far-right-2023-07-23/",
          urlToImage:
            "https://www.reuters.com/resizer/L6uN511TOOI3liS0cSdfp9NshHU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Z3K376JIKNJ2RBYXY7FBCJHGRM.jpg",
          publishedAt: "2023-07-23T07:28:00Z",
          content:
            "MADRID, July 23 (Reuters) - Spaniards began voting on Sunday in a potentially close-run general election that could see Prime Minister Pedro Sanchez's governing Socialists lose power and a far-right … [+3989 chars]",
        },
        {
          source: {
            id: null,
            name: "Kyiv Post",
          },
          author: "Kyiv Post",
          title:
            "ISW Russian Offensive Campaign Assessment, July 22, 2023 - Kyiv Post",
          description: "Latest from the Institute for the Study of War.",
          url: "https://www.kyivpost.com/post/19749",
          urlToImage:
            "https://static.kyivpost.com/storage/2023/07/23/305d67347cf8c6c88d9d368c5e79d465.png?w=1200&q=90&f=jpg",
          publishedAt: "2023-07-23T07:25:02Z",
          content:
            "All materials, including photographs, contained on this site are protected by copyright law and may\r\n not be reproduced without the prior written permission of BIZNESGRUPP TOV at [email protected].\r\n… [+138 chars]",
        },
        {
          source: {
            id: "cnn",
            name: "CNN",
          },
          author: "Josh Pennington, Maria Kostenko, Heather Chen",
          title:
            "Overnight Russian strikes on Odesa cause significant structural damage, destroy church - CNN",
          description:
            "Russian strikes on Odesa overnight damaged at least six residential buildings, a Ukrainian Orthodox Church and “architectural monuments,” according to Ukraine’s southern Operational Command.",
          url: "https://www.cnn.com/2023/07/23/world/odesa-attacks-saturday-russia-ukraine-intl-hnk/index.html",
          urlToImage:
            "https://media.cnn.com/api/v1/images/stellar/prod/230723005945-03-odessa-attacks-russia-ukraine-intl-hnk.jpg?c=16x9&q=w_800,c_fill",
          publishedAt: "2023-07-23T07:23:00Z",
          content:
            "Russian strikes on Odesa overnight damaged at least six residential buildings, a Ukrainian Orthodox Church and architectural monuments, according to Ukraines southern Operational Command.\r\nDozens of … [+2520 chars]",
        },
        {
          source: {
            id: null,
            name: "CNBC",
          },
          author: "Reuters",
          title:
            "Netanyahu in hospital as Israeli judicial crisis flares - CNBC",
          description:
            "The pacemaker procedure went smoothly and Netanyahu was expected to be discharged later on Sunday, his office said.",
          url: "https://www.cnbc.com/2023/07/23/israels-netanyahu-in-hospital-after-getting-pacemaker.html",
          urlToImage:
            "https://image.cnbcfm.com/api/v1/image/107275205-1690093960202-gettyimages-1473939936-sg013921_2c4e11c5-fd24-4a20-b1af-74ec83953467.jpeg?v=1690094029&w=1920&h=1080",
          publishedAt: "2023-07-23T06:33:49Z",
          content:
            "Israel's Prime Minister Benjamin Netanyahu was in hospital after being fitted with a pacemaker on Sunday, as tens of thousands of people converged on Jerusalem to protest a planned overhaul of the Su… [+3326 chars]",
        },
        {
          source: {
            id: null,
            name: "New York Post",
          },
          author: "Reuters",
          title:
            "Nova Scotia floods cause 'unimaginable' damage; four people missing - New York Post ",
          description:
            "The storm, which started on Friday, dumped more than 10 inches on some parts in just 24 hours – the same amount that usually lands in three months.",
          url: "https://nypost.com/2023/07/23/nova-scotia-historic-rain-floods-province-four-people-missing/",
          urlToImage:
            "https://nypost.com/wp-content/uploads/sites/2/2023/07/newspress-collage-78y1h4t45-1690087845996.jpg?quality=75&strip=all&1690074842&w=1024",
          publishedAt: "2023-07-23T05:14:00Z",
          content:
            "The heaviest rain to hit the Atlantic Canadian province of Nova Scotia in more than 50 years triggered floods causing “unimaginable” damage, and four people are missing, including two children, offic… [+3646 chars]",
        },
        {
          source: {
            id: "reuters",
            name: "Reuters",
          },
          author: "Reuters",
          title:
            "Elon Musk says Twitter to change logo, adieu to 'all the birds' - Reuters",
          description:
            'Elon Musk said on Sunday he was looking to change Twitter\'s logo, tweeting: "And soon we shall bid adieu to the twitter brand and, gradually, all the birds".',
          url: "https://www.reuters.com/technology/elon-musk-says-twitter-change-logo-adieu-all-birds-2023-07-23/",
          urlToImage:
            "https://www.reuters.com/resizer/xEWF4xDImxRmO1-RC7SCNYNsm2w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BX55WK3FCFIE7AMJW4NKLVTB3I.jpg",
          publishedAt: "2023-07-23T04:56:17Z",
          content:
            'July 23 (Reuters) - Elon Musk said on Sunday he was looking to change Twitter\'s logo, tweeting: "And soon we shall bid adieu to the twitter brand and, gradually, all the birds".\r\nIn a post on the sit… [+1625 chars]',
        },
        {
          source: {
            id: null,
            name: "Android Police",
          },
          author: "Rajesh Pandey",
          title:
            "Samsung's MultiStar Good Lock module update adds a Flip 5 cover widget - Android Police",
          description:
            "Samsung has already started updating its apps for its upcoming foldables",
          url: "https://www.androidpolice.com/samsung-multistar-good-lock-module-adds-flip-5-cover-widget/",
          urlToImage:
            "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/04/galaxy-flip-5-renders-onleaks-4.png",
          publishedAt: "2023-07-23T04:24:00Z",
          content:
            'Based on all the leaks, the highlight of the upcoming Samsung Galaxy Z Flip 5 should be the bigger cover display. While the Flip 4 has a 1.9" outer screen, the 2023 Flip foldable is rumored to pack a… [+1691 chars]',
        },
        {
          source: {
            id: null,
            name: "nj.com",
          },
          author: "Holiday Mathis",
          title: "Today’s daily horoscope for July 23, 2023 - NJ.com",
          description:
            "Zodiac signs and horoscopes on 7/23/2023 for Aquarius, Pisces, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn.",
          url: "https://www.nj.com/advice/2023/07/todays-daily-horoscope-for-july-23-2023.html",
          urlToImage:
            "https://www.nj.com/resizer/y0GkxcEcKp6NoyUc0LAtx7APmMY=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SAGJVB5QCZCNFBN2U2NE2O4GTE.png",
          publishedAt: "2023-07-23T04:01:00Z",
          content:
            "Feeling the Retrograde\r\nWe may be surprised by the feelings that come up in the early moments of a Venus retrograde. Each person inhabits their own unique sensory world and processes information dist… [+4302 chars]",
        },
        {
          source: {
            id: null,
            name: "New York Post",
          },
          author: "Georgett Roberts, Tina Moore",
          title:
            "Cops seen carrying evidence bags from alleged Gilgo Beach killer's home after tearing up backyard deck, tiles - New York Post ",
          description:
            "Three brown paper bags of evidence, their contents unknown, were also carried out to a police vehicle.",
          url: "https://nypost.com/2023/07/22/cops-seen-carrying-mysterious-bags-as-evidence-from-alleged-gilgo-beach-killers-home-after-tearing-up-backyard-deck-tiles/",
          urlToImage:
            "https://nypost.com/wp-content/uploads/sites/2/2023/07/NYPICHPDPICT000014480788.jpg?quality=75&strip=all&w=1024",
          publishedAt: "2023-07-23T03:24:00Z",
          content:
            "A police dog was brought in to nose around the Long Island backyard of accused Gilgo Beach serial killer Rex Heuermann Saturday, while investigators dismantled a wooden deck, removed cement tiles fro… [+5687 chars]",
        },
        {
          source: {
            id: null,
            name: "INSIDER",
          },
          author: "Hannah Getahun",
          title:
            "Jason Aldean's music video full of protest footage from outside the US - Insider",
          description:
            'Aldean\'s music video for "Try That in a Small Town" features clips from protests in Ukraine and Canada and stock footage from Germany, reports say.',
          url: "https://www.insider.com/jason-aldean-music-video-small-town-protest-foreign-footage-2023-7",
          urlToImage:
            "https://i.insider.com/64bc8003bea34400195f47e2?width=1200&format=jpeg",
          publishedAt: "2023-07-23T03:07:00Z",
          content:
            "Jason Aldean's newest music video, praising American small towns, features multiple clips of protests outside of the US, including Canada and Ukraine, TikTok sleuths discovered. \r\nAldean's \"Try That … [+2902 chars]",
        },
        {
          source: {
            id: null,
            name: "DW (English)",
          },
          author: "Deutsche Welle",
          title:
            "Greece: Rhodes wildfire forces thousands to flee - DW (English)",
          description:
            "Greek coastguard vessels were dispatched to rescue tourists and residents trapped on the holiday island of Rhodes, where a wildfire has been raging for several days.",
          url: "https://www.dw.com/en/greece-rhodes-wildfire-forces-thousands-to-flee/a-66320563",
          urlToImage: "https://static.dw.com/image/66319824_6.jpg",
          publishedAt: "2023-07-23T03:03:16Z",
          content:
            "Thousands of people were evacuated on Saturday from homes and hotels on the Greek Island of Rhodes, authorities said. \r\nA large wildfire that has been raging for five days forced several people to fl… [+2197 chars]",
        },
        {
          source: {
            id: null,
            name: "SciTechDaily",
          },
          author: null,
          title:
            "Warning: Marijuana Use May Alter Your DNA Methylation - SciTechDaily",
          description:
            "Recent and long-term marijuana use is linked to changes in the human epigenome, a new Northwestern Medicine study published in the journal Molecular Psychiatry has found. Marijuana ranks as the most widely used drug in the United States. Data from the Centers…",
          url: "https://scitechdaily.com/warning-marijuana-use-may-alter-your-dna-methylation/",
          urlToImage:
            "https://scitechdaily.com/images/Marijuana-Body-Effects-Art-Concept.jpg",
          publishedAt: "2023-07-23T02:33:02Z",
          content:
            "ByNorthwestern UniversityJuly 22, 2023\r\nA study by Northwestern Medicine links recent and long-term marijuana use to changes in the human epigenome. The research identified significant epigenetic cha… [+5543 chars]",
        },
        {
          source: {
            id: null,
            name: "YouTube",
          },
          author: null,
          title:
            "Jamie Foxx speaks publicly for first time since hospitalized due to illness - NBC News",
          description:
            "Jamie Foxx has spoken publicly for the first time since the actor was hospitalized in April for an unspecified medical emergency. In an Instagram video, Foxx...",
          url: "https://www.youtube.com/watch?v=N8rRM1tnL8c",
          urlToImage: "https://i.ytimg.com/vi/N8rRM1tnL8c/maxresdefault.jpg",
          publishedAt: "2023-07-23T02:00:07Z",
          content: null,
        },
        {
          source: {
            id: "the-hill",
            name: "The Hill",
          },
          author: "Greg Mocker",
          title:
            "Tony Bennett: New Yorkers remember singer’s passion for the arts, frequent order at Italian restaurant - The Hill",
          description:
            "Tony Bennett sang about leaving his heart in San Francisco, but he never left New York City.",
          url: "https://thehill.com/blogs/in-the-know/4112376-tony-bennett-new-yorkers-remember-singers-passion-for-the-arts-frequent-order-at-italian-restaurant/",
          urlToImage:
            "https://thehill.com/wp-content/uploads/sites/2/2023/07/bennetttony_01042007ap.jpg?w=1280",
          publishedAt: "2023-07-23T01:21:00Z",
          content:
            "Skip to content\r\nNEW YORK (WPIX) – Tony Bennett sang about leaving his heart in San Francisco, but he never left New York City.\r\nFrom Central Park to Ditmars Boulevard, people from New York are remem… [+1879 chars]",
        },
        {
          source: {
            id: "cnn",
            name: "CNN",
          },
          author: "Andy Rose",
          title:
            "Texas A&M University president resigns following controversy over failed plans to hire journalism professor - CNN",
          description:
            "Texas A&M University president M. Katherine Banks resigned Thursday amid controversy over the school’s failed attempt to hire a new professor to lead its journalism program.",
          url: "https://www.cnn.com/2023/07/22/us/texas-am-university-president-resigns/index.html",
          urlToImage:
            "https://media.cnn.com/api/v1/images/stellar/prod/230722203828-m-katherine-banks-texas-am.jpg?c=16x9&q=w_800,c_fill",
          publishedAt: "2023-07-23T00:57:00Z",
          content:
            "Texas A&amp;M University president M. Katherine Banks resigned Thursday amid controversy over the schools failed attempt to hire a new professor to lead its journalism program.\r\nBanks decision came a… [+3258 chars]",
        },
        {
          source: {
            id: "usa-today",
            name: "USA Today",
          },
          author: "Farah Hannoun",
          title:
            "UFC Fight Night 224 winner Tom Aspinall: Jon Jones knowing I exist is 'a win itself' - MMA Junkie",
          description:
            "Tom Aspinall is glad he got UFC heavyweight champion Jon Jones’ attention.",
          url: "https://mmajunkie.usatoday.com/2023/07/ufc-fight-night-224-london-video-tom-aspinall-callout-jon-jones-knows-i-exist-win-heavyweight-title-shot",
          urlToImage:
            "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2023/07/Tom-Aspinall-UFC-Fight-Night-224-London-post-fight-3.jpg?w=1000&h=576&crop=1",
          publishedAt: "2023-07-23T00:45:00Z",
          content:
            "LONDON Tom Aspinall is glad he got UFC heavyweight champion Jon Jones’ attention.\r\nAspinall (13-3 MMA, 6-2 UFC) ran through Marcin Tybura (24-8 MMA, 11-7 UFC) for a first-round TKO Saturday in the UF… [+1596 chars]",
        },
        {
          source: {
            id: null,
            name: "The Athletic",
          },
          author: "Gregg Evans and Dan Sheldon",
          title:
            "Can anyone catch Brian Harman at The Open Championship? - The Athletic",
          description:
            "Harman has five shots on the field with 18 holes to play, but Jon Rahm and Cameron Young lead the list of guys who'll chase him on Sunday.",
          url: "https://theathletic.com/4712727/2023/07/22/brian-harman-open-championship-predictions/",
          urlToImage:
            "https://cdn.theathletic.com/app/uploads/2023/07/22165130/GettyImages-1563268250-scaled.jpg",
          publishedAt: "2023-07-22T23:58:37Z",
          content:
            "HOYLAKE, England Brian Harman showed his survival skills to overcome a bumpy start and the odd rain shower to solidify his position at the top of The Open Championships leaderboard going into Sundays… [+7017 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "https://www.facebook.com/bbcnews",
          title:
            "Wagner mutiny: Junior commander reveals his role in the challenge to Putin - BBC",
          description:
            "A junior commander says lower-ranking mercenaries had no idea what was happening during the rebellion.",
          url: "https://www.bbc.com/news/world-europe-66247915",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/78DE/production/_130424903_pic3.jpg",
          publishedAt: "2023-07-22T23:22:29Z",
          content:
            'A mercenary who took part in the attempted mutiny against Russian President Vladimir Putin says he and his fellow fighters "didn\'t have a clue" what was going on.\r\nIn the space of just 24 hours, the … [+5558 chars]',
        },
      ],
    },
  ];
  constructor() {
    super();
    console.log("hello i am object");

    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsDonkey- Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
