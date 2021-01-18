import React from 'react'
import Footer from './Footer';
import "./Home.css"
import banner_img from './images/amazon_banner_img.jpg'
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src={banner_img} alt=" banner-image"
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="1237845"
                    title="Ninja SS201 Foodi Power Pitcher 4in1 Smoothie Bowl Maker Crushing Blender Dough Mixer Food Processor 1400WP smartTORQUE 6 Auto-iQ presets, with a Stainless Silver Finish"
                    price={109.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81d-keIFqQL._AC_SL1500_.jpg"
                    
                />
                <Product
                    id="25474581"
                    title="QIANZICAI Stopwatch, Smart Sports Watch, Heart Rate GPS Business Intelligence Outdoor, Multi-Function Watch"
                    price={1990.70}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/513m7PAZViL._AC_SL1000_.jpg"
                    
                />
            </div>
            <div className="home__row">
                <Product
                    id="125468"
                    title="All-new Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Glacier White"
                    price={39.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61lHou2GzvL._AC_SL1000_.jpg"
                    
                />
                <Product
                    id="128345"
                    title="A Promised Land Hardcover – November 17, 2020"
                    price={23.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL.jpg"
                    
                />
                <Product
                    id="958214"
                    title="Shoe Bench FENGYANFANG- 3-Layer Solid Wood, Shoe Organizer or Entrance Bench, Perfect for Shoe Cabinet, Bathroom Bench Entrance Organizer Corridor or Living Room (Color : Brown)"
                    price={542.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61%2By1BXvSgL._AC_SL1500_.jpg"
                    
                />
            </div>
            <div className="home__row">
                <Product
                    id="458795"
                    title="Samsung 34 inches QLED incurvé CJ79 Series Thunderbolt 3"
                    price={1250.65}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/914iLnXLtRL._AC_SL1500_.jpg"
                    
                />
            </div>
            <div className="home__row">
                <Product
                    id="1237876"
                    title="Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit Gaming Mouse 3200 DPI for Windows PC Gamers (Black)"
                    price={47.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg"
                    
                />
                <Product
                    id="25744581"
                    title="iBUYPOWER Gaming PC Computer Desktop Element MR 9320 (Intel i7-10700F 2.9GHz, NVIDIA GTX 1660 Ti 6GB, 16GB DDR4 RAM, 240GB SSD, 1TB HDD, Wi-Fi ready, Windows 10 Home)"
                    price={1288.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/715zrA5cmLL._AC_SL1500_.jpg"
                    
                />
            </div>
            <div className="home__row">
                <Product
                    id="4581795"
                    title="HOMES: Inside + Out Frederick Tufted Seat Storage Console Sectional"
                    price={2365.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81CeC179Y8L._AC_UL750_.jpg"
                    
                />
            </div>
        </div>
    );
}

export default Home
