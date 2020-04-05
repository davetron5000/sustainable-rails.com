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
    <div className="pa3-ns pa0 tc tl-ns ma3-ns ma0 mb3">
      <a href={ SiteData.buy_now_link } className="link f4-ns f5 nowrap fw7 br3 mt2 ph4 pv2 w-25-ns grow bg-dark-green near-white pointer di">
        { "Buy Beta Now "  + SiteData.beta_price }
      </a>
    </div>
    <section className="pa3 ma0 bt">
      <p className="lh-copy measure">
        I will be releasing new chapters on a regular basis. If you purchase the beta, you will be notified via email when new versions are available.  If you have purchased the beta and have feedback, please use <a className="link underline blue" href="https://docs.google.com/forms/d/e/1FAIpQLScN1Oze7aw0PtREuph909ZWYy_ZFPCzkLZKJvlY1BodwIuBTQ/viewform?usp=sf_link">this form</a>.
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
