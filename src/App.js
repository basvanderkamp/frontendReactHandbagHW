import React from 'react';
import './App.css';
import Button from "./component/buttons/Button";
import Article from "./component/articles/Article";
import handyBag from './assets/bag_1.png';
import stylishBag from './assets/bag_2.png';
import simpleBag from './assets/bag_3.png';
import trendyBag from './assets/bag_4.png';
import brandImg from './assets/brand.png';
import storyImg from './assets/our_story.png';
import Tile from "./component/Tiles/Tile";


function App() {
  return (
      <>
        <nav className={"nav"}>
          <Button

              linktext={"to the collection"}/>
          <Button

              linktext={"shop all bags"}/>
          <Button
              disableBut={true}
              linktext={"pre-orders"}/>

        </nav>
        <h1>Handbags & Purses</h1>

        <main className={"main"}>
            <Article
                info="Best seller"
                image={handyBag}
                title="The handy bag"
                price="€400,-"/>
            <Article
                info="Best seller"
                image={stylishBag}
                title="The stylish bag"
                price="€250,-"/>
            <Article
                info="New collection"
                image={simpleBag}
                title="The simple bag"
                price="€300,-"/>
            <Article
                info="New collection"
                image={trendyBag}
                title="The trendy bag"
                price="€150,-"/>

        </main>
        <footer className={"footer"}>
            <Tile

                title="THE BRAND"
                para1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolorem eveniet ut. Animi asperiores autem ipsam molestiae odit optio placeat quasi quisquam ratione veniam! Assumenda consequuntur dignissimos fuga illo molestiae?"
                para2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolorem eveniet ut. Animi asperiores autem ipsam molestiae odit optio placeat quasi quisquam ratione veniam! Assumenda consequuntur dignissimos fuga illo molestiae?"/>
            <Tile
                image={brandImg}/>
            <Tile
                image={storyImg}/>
            <Tile

                title="OUR STORY"
                para1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolorem eveniet ut. Animi asperiores autem ipsam molestiae odit optio placeat quasi quisquam ratione veniam! Assumenda consequuntur dignissimos fuga illo molestiae?"/>
        </footer>

      </>

  );
}

export default App;



