// Imports
import React from 'react';
import './Contact.css';

// Function Contact Component
function Contact() {
    return (
        <div>
            {/* Contact Form */}
            <form>
                <h1>CONTACT US</h1>
                <div className="form-field">
                    <label for="name">FULL NAME :</label>
                    <input type="text" id="name" required />
                </div>
                <div className="form-field">
                    <label for="e-mail">EMAIL :</label>
                    <input type="email" id="e-mail" required />
                </div>
                <div className="form-field">
                    <label for="order">ORDER NUMBER :</label>
                    <input type="text" id="order" required />
                </div>
                <div className="form-field">
                    <label for="message">MESSAGE :</label>
                    <textarea id="message" required></textarea>>
        </div>
                <div id="error_message"></div>
                <button type="submit" className="submit">SUBMIT</button>
            </form>

            {/* Rendered JSX Page section */}
            <section id="FAQ">
                <h2>FREQUENTLY ASKED QUESTIONS</h2>
                <h3 className="heading">PROCESSING AND SHIPPING</h3>
                <div>
                    <p className="question">How long will it take for my order to be processed?</p>
                    <p className="answer">ORDERS ARE GENERALLY PROCESSED IN 24-48 HOURS. DURING HIGH VOLUME TIMES LIKE HOLIDAYS OR SPECIAL EVENTS, PROCESSING MAY TAKE AN EXTRA DAY.</p>
                </div>
                <div>
                    <p className="question">How long will it take for me to get my order?</p>
                    <p className="answer">SHIPPING TIMES VARY BASED ON WHERE YOU ARE. DOMESTIC ORDERS SHOULD ARRIVE IN 3-7 DAYS, WHILE INTERNATIONAL ORDERS MAY TAKE UP TO 14 DAYS. PLEASE CHECK YOUR TRACKING INFORMATION FOR THE MOST UP TO DATE INFORMATION. PLEASE KNOW SOME INTERNATIONAL ORDERS MAY BE DELAYED IN CUSTOMS AND THERE IS NOTHING WE CAN DO TO EXPEDITE THAT PROCESS.</p>
                </div>
                <div>
                    <p className="question">How do I see the current status of my order?</p>
                    <p className="answer">ONCE YOUR ORDER IS SENT OUT, AN EMAIL WILL BE SENT TO THE EMAIL ADDRESS USED TO CHECKOUT.</p>
                </div>
                <div>
                    <p className="question">I was charged Customs Fees or Duties! Why?</p>
                    <p className="answer">UNFORTUNATELY, ADDITIONAL CUSTOMS AND DUTIES CHARGES ARE OUTSIDE OF OUR CONTROL. WE APOLOGIZE FOR ANY INCONVENIENCE THIS MAY CAUSE BUT THERE IS NOTHING WE CAN DO. WE ARE UNABLE TO REFUND ANY CHARGES IN REGARDS TO CUSTOMS AND DUTIES.</p>
                </div>
                <h3 className="heading">PAYMENT, RETURNS, & REFUNDS</h3>
                <div>
                    <p className="question">What payment methods do you support?</p>
                    <p className="answer">WE CURRENTLY ACCEPT ALL MAJOR CREDIT CARDS, PAYPAL, AND APPLE PAY.</p>
                </div>
                <div>
                    <p className="question">You all messed up, I received the wrong item, what should I do?</p>
                    <p className="answer">WHOOPS! PLEASE CONTACT US AT SUPPORT@ALWAYSGAMETIME. PLEASE INCLUDE YOUR ORDER #, A SUMMARY OF THE ISSUE AND ANY RELEVANT PHOTOS.</p>
                </div>
                <div>
                    <p className="question">What is the policy on returns?</p>
                    <p className="answer">WE HAVE A 14 DAY RETURN POLICY. PLEASE CONTACT US AT SUPPORT@ALWAYSGAMETIME.COM TO DISCUSS ANY REFUND. YOU ARE RESPONSIBLE FOR SHIPPING CHARGES ON RETURNS AND WE STRONGLY RECOMMEND GETTING TRACKING ON ANY PACKAGE YOU RETURN. PLEASE NOTE THAT SOME RETURNS/REFUNDS - SUCH AS DAMAGED PRODUCTS - MAY REQUIRE PHOTO PROOF BEFORE A REFUND IS PROCESSED. FOR MORE INFORMATION ON RETURNS PLEASE SEE OUR REFUND AND RETURN POLICY.</p>
                </div>
                <div>
                    <p className="question">Oh shucks, my items arrived and it's damaged, what should I do?</p>
                    <p className="answer">OH NO! WE'RE SORRY ABOUT THAT. PLEASE CONTACT US AT SUPPORT@ALWAYSGAMETIME.COM. PLEASE INCLUDE YOUR ORDER #, A SUMMARY OF THE ISSUE AND ANY RELEVANT PHOTOS.</p>
                </div>
                <div>
                    <p className="question">Uh, my order is missing an item, what happened?</p>
                    <p className="answer">YIKES! THAT'S NOT GOOD, PLEASE EMAIL US AT SUPPORT@ALWAYSGAMETIME.COM AND WE WILL FIGURE OUT WHAT HAPPENED! PLEASE NOTE SOME LARGE ORDERS MAYBE SHIPPED IN TWO PACKAGES. IF THIS HAPPENS YOU SHOULD RECEIVE AN EMAIL ABOUT BOTH SHIPMENTS!</p>
                </div>
                <div>
                    <p className="question">You all set me the wrong size/color/product, what should I do?</p>
                    <p className="answer">OUR BAD! PLEASE EMAIL US AT SUPPORT@ALWAYSGAMETIME.COM SO THAT WE CAN FIX THIS.</p>
                </div>
                <div>
                    <p className="question">Do you guys ship to ______________?</p>
                    <p className="answer">WE WILL SHIP ANYWHERE WE CAN! FOR INFORMATION ON WHAT COUNTRIES WE ARE UNABLE TO SHIP TO, PLEASE CHECK OUT THIS LIST.</p>
                </div>
                <h3 className="heading">STOCK AND SALES</h3>
                <div>
                    <p className="question">How often are items restocked?</p>
                    <p className="answer">WE TRY AND RESTOCK ITEMS ON A MONTHLY BASES. SOME HIGH DEMAND ITEMS, LIKE PURPLE HOODIES, MAY TAKE LONGER. PLEASE FOLLOW OUR TWITTER AND INSTAGRAM FOR UPDATES ON RESTOCKS. FINAL SALE ITEMS ARE GENERALLY BEING DISCONTINUED AND WILL NOT BE RESTOCKED.</p>
                </div>
                <div>
                    <p className="question">Do you have bulk discounts?</p>
                    <p className="answer">PLEASE NOTE THAT NONE OF OUR ITEMS ARE FOR AVAILABLE FOR RE-SALE. HOWEVER, IF YOU'RE LOOKING TO PLACE A LARGE ORDER, 25 SHIRTS OR MORE, YOU CAN CONTACT US AT SUPPORT@ALWAYSGAMETIME.COM TO DISCUSS DISCOUNTS AND OPTIONS.</p>
                </div>
                <div>
                    <p className="question">How often do you all do sales?</p>
                    <p className="answer">HOLIDAYS. PLEASE NOTE WE DO NOT PRICE ADJUST FOR SALE PRICES. PLEASE FOLLOW OUT TWITTER AND INSTAGRAM FOR UPDATES ON ANY AND ALL SALES WE HAVE.</p>
                </div>
            </section>
        </div>
    );
}

// Export Contact Component
export default Contact;