import React from "react";

import Layout from "./components/Layout";

import SiteData from "./derived_site_data.js"

export default function(props) {
  return(
    <Layout compact={ true }>
      <header className="pa3">
        <h1 className="f1 tc tl-ns">Thanks for buying!</h1>
        <p className="lh-copy measure">
          An email is on its way to you right now with a link where you can download the book.  I hope you enjoy it!  I'd love to hear your feedback or thoughts, so please use <a className="link underline blue" href="https://docs.google.com/forms/d/e/1FAIpQLScN1Oze7aw0PtREuph909ZWYy_ZFPCzkLZKJvlY1BodwIuBTQ/viewform?usp=sf_link">this form</a> to send any feedback my way.
        </p>
        <p className="lh-copy measure">
          <strong>Note:</strong> If you used a credit card or Apple Pay, you will see a charge from "Third Tank, LLC".  That is me.  It's an LLC I use to manage money I make from these book, so don't be alarmed!
        </p>
        <p className="lh-copy measure">
          As a thank-you for supporting my work, here is a code you can use to get a discount on my other works, if you are interested.
          <div className="flex items-start">
            <div className="w-third w-20-ns mr3 mt3">
              <a href={ SiteData.tss.link }>
                <img src="/images/tss.png" alt="Image of the cover for 'The Senior Software Engineer'"/>
              </a>
            </div>
            <div className="w-two-thirds">
              <p className="lh-copy measure">
                <span className="dib b">"The Senior Software Engineer: 11 Practices of an Effective Technical Leader"</span> can be yours for just <strike>$25</strike> $20 with code:
              </p>
              <p className="lh-copy measure">
                <span className="db pa2 bg-near-white-title-purple tc ba br2 courier">SUSRAILS</span>
              </p>
              <p className="lh-copy measure">
                Just copy that code, <a className="link underline blue" href={ SiteData.tss.link}>click here</a>, click "Checkout", then click "Got Code?", enter the code <code>SUSRAILS</code>, click "update", and then "Pay" (Whew!).
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-third w-20-ns mr3 mt3">
              <a href={ SiteData.solid_not_solid.link }>
                <img src="/images/solid-not-solid.png" alt="Image of the cover for 'SOLID is not Solid'"/>
              </a>
            </div>
            <div className="w-two-thirds">
              <p className="lh-copy measure">
                <span className="dib b">"SOLID is not Solid: Five Object-Oriented Principles to Create a Codebase Everyone will Hate"</span> can be yours for just <strike>$5.99</strike> $4.99 with code:
              </p>
              <p className="lh-copy measure">
                <span className="db pa2 bg-near-white-title-purple tc ba br2 courier">SRNOTSOLID</span>
              </p>
              <p className="lh-copy measure">
                Just copy that code, <a className="link underline blue" href={ SiteData.solid_not_solid.link}>click here</a>, click "Checkout", then click "Got Code?", enter the code <code>SRNOTSOLID</code>, click "update", and then "Pay" (Whew!).
              </p>
            </div>
          </div>
          <span className="i dark-gray">
            Note that you in order to get both discounts you have to buy both books separately. Sorry :(
        </span>
        </p>
      </header>
    </Layout>
  )
};
