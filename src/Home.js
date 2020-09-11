import React from 'react'; 
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className ="home">
            <div className="home__container">
                <img 
                className='home__image'
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" 
                alt=""
                />

                <div className="home__row">
                    <Product 
                    id = "12321341"
                    title='The lean startup' 
                    price = {297.99}
                    image="https://images-eu.ssl-images-amazon.com/images/I/81gobGaNBEL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL270_SR184,270_.jpg"
                    rating = {5}
                    />
                    <Product 
                    id = "15321341"
                    title='ikigai' 
                    price = {129.99}
                    image="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL.__BG0,0,0,0_FMpng_AC_UL270_SR194,270_.jpg"
                    rating = {4}
                    />
                    {/* Product */}
                    {/* Product */}
                </div>

                <div className="home__row">
                    {/* Product */}
                    <Product 
                    id = "12326341"
                    title='Me: Elton John Office' 
                    price = {259.99}
                    image="https://m.media-amazon.com/images/I/411MP+izNRL.jpg"
                    rating = {5}
                    />
                    <Product 
                    id = "19321341"
                    title='The Alchemist' 
                    price = {529.99}
                    image="https://images-eu.ssl-images-amazon.com/images/I/81ioPZFMeUL.__BG0,0,0,0_FMpng_AC_UL320_SR212,320_.jpg"
                    rating = {4}
                    />
                    <Product 
                    id = "15371341"
                    title='The monk who sold his ferrari' 
                    price = {729.99}
                    image="https://images-eu.ssl-images-amazon.com/images/I/71AiT9UlPyL.__BG0,0,0,0_FMpng_AC_UL320_SR206,320_.jpg"
                    rating = {4}
                    />
                    {/* Product */}
                    {/* Product */}
                </div>

                <div className="home__row">
                    {/* Product */}
                    <Product 
                    id = "15921341"
                    title='The subtle art of not giving a fuck' 
                    price = {171.99}
                    image="https://images-eu.ssl-images-amazon.com/images/I/71QKQ9mwV7L.__BG0,0,0,0_FMpng_AC_UL320_SR214,320_.jpg"
                    rating = {5}
                    />
                </div>


            </div>
        </div>
    );
}
export default Home;