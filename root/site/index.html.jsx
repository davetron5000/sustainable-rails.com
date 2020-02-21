import React from "react";

import Layout from "./components/Layout";
import EmailForm from "./components/EmailForm";
import UpdateItem from "./components/UpdateItem";
import TOC from "./components/TOC";

import SiteData from "./derived_site_data.js"

export default function(props) {
  const updates = SiteData.updates.map( (update) => {
    return (
      <UpdateItem date={ update.date } iconName={update.iconName} icon={update.icon}>
        <div dangerouslySetInnerHTML={ { __html: update.content } } />
      </UpdateItem>
    );
  })
  return(
    <Layout>
    <EmailForm autofocus={true} />
    <section className="pa3 ma0 bt">
      <p className="lh-copy measure">
        I will be working on this book over the next several months. If you are interested in getting early access, updates, or any other news about this subject, sign up below  The mailing list should be low-traffic, but will allow you to review in-development parts of the book and even get a discount when the book goes on sale.
      </p>
    </section>
    <section className="pa3">
      <h1 className="f3 mt0">Updates</h1>
      <ol className="list pa0 ma0 measure">
        {updates}
      </ol>
    </section>
    <section className="outline">
      <a name="outline">&nbsp;</a>
      <h1 className="f3 pv3 tc tl-ns w-100 bg-near-black near-white ph2-ns">Table of Contents</h1>
      <section>
        <h2 className="f5 mt0 ph3 tc tl-ns dib">Got feedback?</h2>
        <ul className="ma0 pa0 dib">
          <li className="dib-ns db pl3 pl0-ns pr3 pt1 pt0-ns f6"><a className="link underline blue" href="mailto:davetron5000+sustainablerails@gmail.com"><span role="img" aria-label="email">📧</span> Email me</a></li>
          <li className="dib-ns db pl3 pl0-ns pt2 pt0-ns f6"><a className="link underline blue" href="https://docs.google.com/forms/d/e/1FAIpQLScN1Oze7aw0PtREuph909ZWYy_ZFPCzkLZKJvlY1BodwIuBTQ/viewform?usp=sf_link"><span role="img" aria-label="note">📝</span> Submit via Google Form</a></li>
        </ul>
      </section>
      <section className="ph4-ns">
        <TOC />
      </section>
      <p className="pa2 tc tl-ns">
        <a className="link underline blue f4" href="mailto:davetron5000+sustainablerails@gmail.com">Email me some feedback</a>
      </p>
    </section>
    </Layout>
  )
};
