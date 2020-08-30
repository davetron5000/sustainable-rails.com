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
        <a href={ SiteData.buy_now_link } className="futura link f4-ns f5 nowrap fw7 br3 mt2 ph4 pv2 w-25-ns grow book-gray-gradient bg-book-blue book-blue pointer di">
          { "Buy Now "  + SiteData.price }
        </a>
      </div>
      <section className="pa3 ma0 bt mw6-ns center-ns">
        <ul>
          <li>
            Tired of bloated models that won't stop growing?
          </li>
          <li>
            Development slowed to a crawl due to ever-increasing complexity?
          </li>
          <li>
            Bogged down by an ever-growing list of gems you think will solve your problems?
          </li>
          <li>
            Determined that next time, you'll “do it right”?
          </li>
        </ul>
        <p className="measure lh-copy fwb f3 tc">
          This book can help.
        </p>
      </section>
      <section className="bg-book-gray near-white ma0 pa2">
        <div className="center-ns mw6-ns mt3-ns">
        <ul className="list ph3 ma0">
          <li className="tl tc-ns futura lh-title mb3 ph0 mh0">Practical tips for each part of Rails (with examples)</li>
          <li className="tc futura lh-title mb3 ph0 mh0">Learn to <strong>use</strong> Rails, not abstract it away</li>
          <li className="tr tc-ns futura lh-title mb3 ph0 mh0"><p className="measure-narrow-ns center-ns">Manage and isolate your business logic without fancy patterns or libraries</p></li>
        </ul>
        <p className="lh-copy f6 tc mt4">
          <a href={ SiteData.buy_now_link } className="bright-blue fwb">
          { "Buy Now for "  + SiteData.price }
          </a>,{ " " }
          <a className="dib bright-blue" href="/assets/sustainable-rails-sample.pdf">read a Sample</a>, or <a className="dib bright-blue" href="#outline">see the full Table of Contents</a>.
        </p>
        </div>
      </section>
      <section>
        <p className="lh-copy measure measure-narrow-ns f4 ph3 tc center">
          Learn how to manage <strong>carrying costs</strong> in your app by strategically incurring <strong>opportunity costs</strong>.
        </p>
        <ul className="list ph3 ma0 center-ns mw6-ns">
          <li className="lh-copy mb2">
          <strong>Messy models with entangled dependencies and confusing callbacks?</strong> Instead, put business logic in plain Ruby classes that use your models to access the database.
          </li>
          <li className="lh-copy mb2">
            <strong>Trying to fit functionality into resources based on your database tables?</strong>{ " " }
              Try using custom resources with canonical and Active Models instead of tons of custom routes.
          </li>
          <li className="lh-copy mb2">
            <strong>Fighting with JavaScript, APIs, and Source Maps?</strong>{ " " }
            Embrace server-rendered views.
          </li>
          <li className="lh-copy mb2">
            <strong>Slow test suite?</strong>{ " " }
            Don't over test. Controllers don't need a test if you have a system test. Simple validations don't need tests. If your jobs are a single-line delegation to business logic, why test them?
          </li>
        </ul>
        <div className="ph3">
          <p className="lh-copy measure ph3 pt2 mt2 bt futura center-ns mw6-ns">
            <a href={ SiteData.buy_now_link }>Buy Now</a> and learn more of these tips. The book has extended examples and detailed, pragmatic explanations for <strong>when</strong> to use—or not use—each technique, all based on my real-world experience.

          </p>
        </div>
      </section>
      <section className="pa3 book-gray-gradient near-white ma0">
        <div className="center-ns mw6-ns">
          <h1 className="f3">What You Get</h1>
          <ul>
            <li className="lh-copy measure">Over 450 Pages of practical tips on building Rails apps</li>
            <li className="lh-copy measure">A beautifully typeset PDF for reading on any device, replete with an index for quick reference.</li>
            <li className="lh-copy measure">EPUB, Kindle, and Markdown versions</li>
          </ul>
        </div>
      </section>
      <section className="pa3 ma0">
        <div className="center-ns mw6-ns">
          <h1 className="f3">About Me (the Author)</h1>
          <p className="lh-copy measure">
            My name is David Bryant Copeland and I've spent the last eight years working on long-lived Rails apps. I've worked on a huge monolith whose construction was not managed as well as greenfield apps that evolved over many years from monoliths to a microservices architecture.
          </p>
          <p className="lh-copy measure">13 years prior to that I worked on various technologies and apps both for consulting clients and startups.  Lastly, I've advised several startups using Rails and seen first-hand how small mistakes made early on can have a cascading effect on team sustainabilty.
          </p>
          <p className="lh-copy measure">
            The content of this book is based on my actual experience—I've really done everything in the book. I've seen (and made) decisions that both lead to great sustianbility as well as harmed it. There's nothing theoretical about what's in the book.
          </p>
          <p className="lh-copy measure">
            Feel free to look at <a className="blue link underline" href="https://www.linkedin.com/in/davidcopeland">my resume</a> to see what my experience is. I've also authored several technical books, including <a className="blue link underline" href="https://pragprog.com/book/rails6">Agile Web Development with Rails 6</a>, <a className="blue link underline" href="http://www.theseniorsoftwareengineer.com/">The Senior Software Engineer</a>, and <a className="blue link underline" href="https://solid-is-not-solid.com">SOLID is not Solid</a>. I'm <a className="blue link underline" href="https://twitter.com/davetron5000">@davetron5000 on Twitter</a>
          </p>
        </div>
      </section>
      <section>
        <h1 className="f3 pv3 tc tl-ns mv0 w-100 bg-book-gray near-white ph3-ns">
          <div className="mw7-ns center-ns">
            Table of Contents
          </div>
        </h1>
        <a className="ma0 pa0" name="outline">&nbsp;</a>
        <section className="ph4-ns pl2 mw7-ns center-ns">
          <TOC />
        </section>
      </section>
      <section className="bg-bright-blue near-black pa3 pt4-ns">
        <div className="mw6-ns center-ns tc-ns">
        <h2 className="f5 mt0 ph3 tc dib">Got feedback?</h2>
        <ul className="ma0 pa0 dib">
          <li className="dib-ns db pl3 pl0-ns pr3 pt1 pt0-ns f6"><a className="link underline" href="mailto:davetron5000+sustainablerails@gmail.com"><span role="img" aria-label="email">📧</span> Email me</a></li>
          <li className="dib-ns db pl3 pl0-ns pt2 pt0-ns f6"><a className="link underline" href="https://docs.google.com/forms/d/e/1FAIpQLScN1Oze7aw0PtREuph909ZWYy_ZFPCzkLZKJvlY1BodwIuBTQ/viewform?usp=sf_link"><span role="img" aria-label="note">📝</span> Submit via Google Form</a></li>
        </ul>
        </div>
      </section>
      <section>
        <div className="ma1 pa3 pt2 tc center mw6-ns">
          <a href={ SiteData.buy_now_link } className="futura link f4-ns f5 nowrap fw7 br3 mt2 ph4 pv2 book-gray-gradient pointer db"><span className="near-white">{ "Buy Now "  + SiteData.price }</span></a>
        </div>
      </section>
    </Layout>
  )
};
