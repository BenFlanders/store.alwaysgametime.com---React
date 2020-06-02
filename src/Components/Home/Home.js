// Imports
import React from 'react';
import './Home.css';
import Slider from '../../Containers/Slider/Slider';
import { Link } from 'react-router-dom';

// Functional Home Component
function Home() {
    return(
        <div>
            {/* Slider Component */}
            <Slider />
            <main>
                <div className="container">
                    <div className="section-heading">
                        <div className="line"></div>
                        <h1>BEST SELLERS</h1>
                        <div className="line"></div>
                    </div>
                    {/* Rendered JSX Section */}
                    <div className="product-showcase">
                        <div className="products">
                            <img src={require("../../imgs/fullNewLogoHoodie.png")} alt="New Logo Hoodie"/>
                            <h2>Hoodie | New AGT Logo</h2>
                            <p className="price">$35</p>
                            <p>Show off the NEW AlwaysGametime Logo with this Pull Over Hoodie! Hoodie is made with a 50% cotton, 50% polyester preshrunk fleece</p>
                        </div>
                        <div className="products">
                            <img src={require("../../imgs/whiteOldLogoShirt.png")} alt="White logo shirt"/>
                            <h2>T-Shirt | Retro Logo - White</h2>
                            <p className="price">$20</p>
                            <p>Simple WHITEOUT Retro Logo design. Shirts printed on Bella+ Canvas Unisex Jersey Short Sleeve Tee. Fabric: 100% ring-spun cotton</p>
                        </div>
                        <div className="products">
                            <img src={require("../../imgs/fullOldLogoBeanie.png")} alt="old logo beanie"/>
                            <h2>Beanie | Retro Logo</h2>
                            <p className="price">$15</p>
                            <p>This beanie is a stretchy black beanie with a 3" folded cuff. Embroidered on the center front of the cuff is the Retro Logo.</p>
                        </div>
                        <div className="products">
                            <img src={require("../../imgs/fullOldLogoHoodie.png")} alt="old logo hoodie"/>
                            <h2>Hoodie | Retro Logo</h2>
                            <p className="price">$30</p>
                            <p>Represent the Retro Logo with this Pull Over Hoodie! Hoodie is made with a 50% cotton, 50% polyester preshrunk fleece</p>
                        </div>
                        <div className="products">
                            <img src={require("../../imgs/agtTextHoodie.png")} alt="text logo hoodie"/>
                            <h2>Hoodie | AGT Text</h2>
                            <p className="price">$25</p>
                            <p>New Year New Look! Check out the Text based Logo Pull Over Hoodie! Hoodie is made with a 50% cotton, 50% polyester preshrunk fleece</p>
                        </div>
                        <div className="products">
                            <img src={require("../../imgs/newLogoShirt.png")} alt="new logo shirt"/>
                            <h2>T-Shirt | New AGT Logo</h2>
                            <p className="price">$25</p>
                            <p>NEW Official Channel Logo design. Shirts printed on Bella+ Canvas Unisex Jersey Short Sleeve Tee. Fabric: 100% ring-spun cotton</p>
                        </div>
                        <div className="products">
                            <img src={require("../../imgs/blackOldLogoShirt.png")} alt="black retro logo shirt"/>
                            <h2>T-Shirt | AGT Logo - Black</h2>
                            <p className="price">$20</p>
                            <p>Simple BLACKOUT Retro Logo design. Shirts printed on Bella+ Canvas Unisex Jersey Short Sleeve Tee. Fabric: 100% ring-spun cotton</p>
                        </div>
                        <div className="products">
                            <img src={require("../../imgs/fullOldLogoShirt.png")} alt="retro logo shirt"/>
                            <h2>T-Shirt | Retro Logo</h2>
                            <p className="price">$25</p>
                            <p>Represent the retro logo that got us started! Shirts printed on Bella+ Canvas Unisex Jersey Short Sleeve Tee. Fabric: 100% ring-spun cotton</p>
                        </div>
                    </div>
                    <Link to='/products'><a href="#" className="button">VIEW ALL PRODUCTS</a></Link>
                </div>
            </main>

            <section className="shipping">
                <h3>WE SHIP WORLDWIDE</h3>
                <i className="fas fa-globe-americas"></i>
                <p>FREE SHIPPING ON US ORDERS OVER $75.00</p>
                <p>$10.00 FLAT RATE ON INTERNATIONAL ORDERS OVER $100.00</p>
            </section>

            <section className="new-arrivals">
                <div className="container">
                    <div className="section-heading">
                        <div className="line"></div>
                        <h2>NEW ARRIVALS</h2>
                        <div className="line"></div>
                    </div>
                    <div className="product-showcase">
                        <div className="products">
                            <img src={require("../../imgs/cartoonHoodie.png")} alt="cartoon logo hoodie"/>
                            <h2>Hoodie | Cartoon Logo</h2>
                            <p className="price">$35</p>
                            <p>Get your game on with the NEW 'Achieve' logo design Pull Over Hoodie! Hoodie is made with a 50% cotton, 50% polyester preshrunk fleece</p>
                        </div>
                        <div className="products">
                            <img src={require("../../imgs/cartoonShirt.png")} alt="cartoon logo shirt"/>
                            <h2>T-Shirt | Cartoon Logo</h2>
                            <p className="price">$25</p>
                            <p>Brand NEW 'Achieve' logo design! Shirts printed on Bella+ Canvas Unisex Jersey Short Sleeve Tee. Fabric: 100% ring-spun cotton</p>
                        </div>
                        <div className="products">
                            <img src={require("../../imgs/roscoeShirt.png")} alt="roscoe logo shirt"/>
                            <h2>T-Shirt | Rip Roscoe</h2>
                            <p className="price">$25</p>
                            <p>Gone, but not forgotten. RIP Roscoe. Shirts printed on Bella+ Canvas Unisex Jersey Short Sleeve Tee. Fabric: 100% ring-spun cotton</p>
                        </div>
                        <div className="products">
                            <img src={require("../../imgs/agtTextHoodie.png")} alt="text logo hoodie"/>
                            <h2>Hoodie | AGT Text</h2>
                            <p className="price">$25</p>
                            <p>New Year New Look! Check out the Text based Logo Pull Over Hoodie! Hoodie is made with a 50% cotton, 50% polyester preshrunk fleece</p>
                        </div>
                    </div>
                    <Link to='/products'><a href="#" className="button">VIEW ALL PRODUCTS</a></Link>
                </div>
            </section>

            <section className="accessories-section">
                <div className="container">
                    <div className="section-heading">
                        <div className="line"></div>
                        <h2>ACCESSORIES</h2>
                        <div className="line"></div>
                    </div>
                    <div className="product-showcase">
                        <div className="products">
                            <img src={require("../../imgs/notebook.png")} alt="white logo shirt"/>
                            <h2>Notebook | Retro Logo - Black</h2>
                            <p className="price">$9</p>
                            <p>Take notes in style with this AGT Branded Notebook! Perfect for streamers / content creators to make lists. 6in X 9in 100 sheets of college-ruled lined paper</p>
                        </div>
                        <div className="products">
                            <img src={require("../../imgs/newLogoMug.png")} alt="new logo mug"/>
                            <h2>Mug | New AGT logo</h2>
                            <p className="price">$15</p>
                            <p>Microwave safe Dishwasher safe black ceramic mug featuring the NEW AlwaysGametime Logo. I personally use mine to drink hot chocolate.</p>
                        </div>
                        <div className="products">
                            <img src={require("../../imgs/whiteOldAGTLogoPop.png")} alt="white retro logo popsocket"/>
                            <h2>Pop Socket | Retro Logo - White</h2>
                            <p className="price">$9</p>
                            <p>Get a leg up on the competition while mobile gaming! These AGT branded popsockets are also perfect kickstands for media consumption.</p>
                        </div>
                        <div className="products">
                            <img src={require("../../imgs/newAGTLogoLanyard.png")} alt="new logo lanyard"/>
                            <h2>Lanyard | New AGT Logo</h2>
                            <p className="price">$4</p>
                            <p>Never lose your keys again with the new AGT Lanyard. Show off your keychain collection in style! Lanyard is 12in. in length.</p>
                        </div>
                    </div>
                    <Link to='/products'><a href="#" className="button">VIEW ALL PRODUCTS</a></Link>
                </div>
            </section>

            <section className="trading-cards">
                <h3>NEW MYSTERY TRADING CARD EACH MONTH</h3>
                <p>TRADING CARDS ARE INCLUDED IN EVERY ORDER OVER $5.00 NOT INCLUDING TAX AND SHIPPING</p>
                <div className="card-box">
                    <div className="card card1"></div>
                    <div className="card card2"></div>
                    <div className="card card3"></div>
                    <div className="card card4"></div>
                    <div className="card card5"></div>
                    <div className="card card6"></div>
                    <div className="card card7"></div>
                    <div className="card card8"></div>
                    <div className="card card9"></div>
                    <div className="card card10"></div>
                    <div className="card card11"></div>
                    <div className="card card12"></div>
                </div>
                <p>PLUS BONUS CARDS FOR SPECIAL EVENTS!</p> 
            </section>

            <section className="instagram-section">
                <div className="container">
                    <div className="section-heading">
                        <div className="line"></div>
                        <h2>#AGTstore</h2>
                        <div className="line"></div>
                    </div>
                    <div className="posts">
                        <div className="insta1"></div>
                        <div className="insta2"></div>
                        <div className="insta3"></div>
                        <div className="insta4"></div>
                        <div className="insta5"></div>
                        <div className="insta6"></div>
                        <div className="insta7"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;