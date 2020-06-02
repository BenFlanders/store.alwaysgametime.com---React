// Imports
import React from 'react';
import './Footer.css';

// Functional Footer Component
function Footer() {
    // Rendered JSX Page
    return (
        <footer>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-third">
                        <div className="top">
                            <h3>STAY CONNECTED WITH ALWAYSGAMETIME</h3>
                            <p>MAIL: 1732 UPTOWN DRIVE, CHARLOTTE NC 28243</p>
                            <p>EMAIL: SUPPORT@ALWAYSGAMETIME.COM</p>
                        </div>
                        <div className="middle">
                            <h5>@ALWAYSGAMETIME</h5>
                            <a aria-label="twitter" href="https://twitter.com/always_gametime"><i className="fab fa-twitter"></i></a>
                            <a aria-label="youtube" href="https://youtube.com/alwaysgametime"><i className="fab fa-youtube"></i></a>
                            <i className="fab fa-facebook"></i>
                            <a aria-label="instagram" href="https://instagram.com/alwaysgametime"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="footer-third">
                        <h3>LINKS</h3>
                        <ul>
                            <li><a href="index.html">HOME</a></li>
                            <li><a href="products.html">APPAREL</a></li>
                            <li><a href="products.html">HATS</a></li>
                            <li><a href="products.html">ACCESSORIES</a></li>
                            <li><a href="products.html">SALE</a></li>
                        </ul>
                    </div>
                    <div className="footer-third">
                        <h3>CUSTOMER CARE</h3>
                        <ul>
                            <li><a href="contact.html">CONTACT US</a></li>
                            <li><a href="#">TRACK MY ORDER</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border"></div>
                <div className="wrap">
                    <div className="footer-bottom">
                        <ul className="footer-bottom__links">
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">Shipping Policy</a></li>
                            <li><a href="#">Returns and Exchanges Policy</a></li>
                        </ul>
                        <p>&copy; 2020 AlwaysGametime | All Rights Reserved</p>
                        <ul className="footer-bottom__icons">
                            <li><i className="fab fa-cc-visa"></i></li>
                            <li><i className="fab fa-cc-stripe"></i></li>
                            <li><i className="fab fa-cc-paypal"></i></li>
                            <li><i className="fab fa-cc-mastercard"></i></li>
                            <li><i className="fab fa-cc-discover"></i></li>
                            <li><i className="fab fa-cc-apple-pay"></i></li>
                            <li><i className="fab fa-cc-amex"></i></li>
                            <li><i className="fab fa-cc-amazon-pay"></i></li>
                        </ul>
                    </div>
                    <div className="bottom">
                        <h5>NEWSLETTER</h5>
                        <label for="email"></label>
                        <input type="email" id="email" placeholder="Enter your email address . . ." />
                        <a href="#" className="email-button">SUBMIT</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;