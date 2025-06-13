'use client'
import "./mainGenerator.css";
import Image from "next/image";
import MyButton from './mybutton'
import MyButton2 from './mybutton2'
import Head from 'next/head'
import Link from "next/link";
import datas from './../data.json';
interface DataItem {
  h1: string;
  // 在这里添加你的数据对象中的其他属性
}
interface DatasObj {
  [key: string]: DataItem; // 或者更具体地指定键的类型
}

export default function Example() {
  const arr = [];
  const datasObj: DatasObj = datas
  for (const key in datasObj) {
    if (datasObj.hasOwnProperty(key)) {
      arr.unshift(key)
    }
  }
  const openPopup = () => {
    if (typeof window !== 'undefined') {
      window.open("https://neal.fun/internet-roadtrip/", "popupWindow", "width=1300,height=700");
    }
  }
  return (
    <div>
      {/* <div className="main" id="games">
        <div className="left">
        </div>
      </div> */}
      <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-1PPX0HM5S3`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-1PPX0HM5S3');
              `,
          }}
        />
        <meta name="google-adsense-account" content="ca-pub-1232219942277862"></meta>
      </Head>
      <div className="main">
        <div className="left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Merge Rot</h1>
          <p className="mt-4 text-2xl text-gray-500">
            Merge Rot: Drop items, watch them collide and evolve into absurd, funny forms!  Experience unique physics-driven chaos and endless bizarre transformations. Play today!
          </p>
          <div className="btn-block"  id="games"> 
            <MyButton></MyButton>
          </div>
        </div>
      </div>
      {/* <h2 className="order-tt tracking-tight">Games</h2> */}
      <div className="game">
        <iframe 
            className="game-iframe"
            src="https://game.azgame.io/merge-brainrot/" 
            allow="fullscreen"  
            scrolling="no"  
            loading="eager"
        ></iframe>
      </div>
      <div className="overview" id="overview">
        <h2 className="tt">
          Merge Rot Overview
        </h2>
        <div>
          <div>Merge Rot is a hilariously chaotic physics-based merging game where your sole mission is to drop items into a cup and watch the delightful pandemonium unfold. This isn't your average match-three – every dropped item collides, merges, and evolves into increasingly bizarre and comical forms.</div>
          <div>Witness a surreal evolution where capybaras might become gigantic 'chads,' or brainrot emojis spiral into the ultimate meme. It's a game of unpredictable transformations and pure, physics-driven amusement.</div>
        </div>
        <h2 className="tt">
          Merge Rot Game Features
        </h2>
        <div>
          <div>Physics-Based Merging: Experience dynamic collisions and merges as items realistically tumble in the cup.</div>
          <div>Hilarious & Bizarre Evolutions: Discover an endless chain of increasingly weird and comical transformations.</div>
          <div>Unpredictable Chaos: Every drop creates unique, physics-driven interactions.</div>
          <div>Iconic 'Brainrot' Elements: Witness familiar internet culture elements evolve into absurd new forms.</div>
          <div>Endless Discovery: Continuously unlock new and stranger items and fusions.</div>
          <div>Satisfying Visuals & Sounds: Enjoy the delightful chaos with expressive animations and humorous effects.</div>
          <div>Simple One-Touch Gameplay: Easy to play, just drop and watch the fun</div>
        </div>
        <h2 className="tt">
          How to Play Merge Rot
        </h2>
        <div>
          <div>Tap or click at the top of the screen to drop items into the cup.</div>
          <div>Watch as dropped items collide, bounce, and settle at the bottom.</div>
          <div>When identical items touch, they will merge and evolve into a new, often larger and stranger, item.</div>
          <div>Continue dropping and merging items, aiming to create higher-level evolutions.</div>
          <div>The goal is often to prevent the cup from overflowing, or to reach specific ultimate evolutions.</div>
          <div>Strategically drop items to influence their collisions and optimize merges.</div>
          <div>Experiment with different drop timings and locations to control the chaotic flow</div>
        </div>
        <div className="tt">
          Why Merge Rot is So Addictive
        </div>
        <div>
          <div>The Unpredictable Physics Fun: The sheer joy of watching items tumble and interact in hilarious ways.</div>
          <div>The Thrill of Evolution: Always wondering what bizarre, new form will emerge from the next merge.</div>
          <div>The Satisfaction of Discovery: Unlocking increasingly weird and funny creations is incredibly rewarding.</div>
          <div>The Simple Yet Deep Engagement: Easy to play, but offers endless visual surprises and strategic dropping.</div>
          <div>The 'Brainrot' Humor: Tapping into internet culture for absurd and relatable transformations.</div>
          <div>The Endless Replayability: No two drops or merges are exactly alike, ensuring fresh chaos</div>
          <div>So, Let's try this <MyButton2 /> game.</div>
        </div>

      </div>
      {/* <h2 className="order-tt tracking-tight">Hot Game</h2>
      <div className="order">
        {
          arr.map((item, index) => (
            <Link key={index} href={{ pathname: item }}>
              <div className="game2" >
                <Image className="img dark:invert" src={`/${item}.png`} alt={datasObj[item].h1} width={322} height={38} priority />
                <h3 className="game2-tt">{datasObj[item].h1}</h3>
                <div className="game2-btn">play</div>
              </div>
            </Link>
          ))
        }
      </div> */}

      <div className="footer">
        <Link href={{ pathname: '/privacy-policy' }}>
          <div className="btn">Privacy Policy</div>
        </Link>
        <div className="line">|</div>
        <Link href={{ pathname: '/terms-of-service' }}>
          <div className="btn">Terms of Service</div>
        </Link>
      </div>
    </div>
  )
}