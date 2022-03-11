import React from "react";

import Layout from "./components/Layout";
import EmailForm from "./components/EmailForm";
import TOC from "./components/TOC";

import SiteData from "./derived_site_data.js"

export default function(props) {
  const hardcover_info = (
    <li class="lh-copy">
      <span className="db tc tl-ns book-gray">Hardcover edition coming soon!</span>
    </li>
  )
  const real_hc = (
    <li class="lh-copy">
      <a className="db tc tl-ns link underline book-gray" href={ SiteData.buy_print_hc_link }>{ SiteData.print_hc_price } from Amazon (hard cover)</a>
    </li>
  )
  return(
    <Layout>
      <div className="pa2-ns pa0 tc ma1-ns ma0 mt2 mb2">
        <a href={ SiteData.buy_now_link } className="futura link f4-ns f5 nowrap fw7 br3 mt2 ph4 pv2 book-gray-gradient pointer dib book-blue-glow tracked">
          { "Buy e-Book "  + SiteData.price }
        </a>
        <div className="pa0 tc ma3-ns mt4 mt3-ns mb4">
          <a href={ SiteData.buy_print_link } className="link underline book-gray">
            { "or Buy in Print from "  + SiteData.print_price }
          </a>
        </div>
        <div className="pa0 tc ma3-ns mt4 mt3-ns mb4">
          <a href="#pricing" className="db d-ns mh3 mt3 ma0-ns link underline book-gray f7">
            Not from the USA? You may be able to get a discount!
          </a>
        </div>
      </div>
      <section className="pa3 ma0 bt mw6-ns center-ns">
        <ul>
          <li className="lh-title mb2">
            Tired of bloated models that won't stop growing?
          </li>
          <li className="lh-title mb2">
            Development slowed to a crawl due to ever-increasing complexity?
          </li>
          <li className="lh-title mb2">
            Bogged down by an ever-growing list of gems you think will solve your problems?
          </li>
          <li className="lh-title mb2">
            Determined that next time, you'll “do it right”?
          </li>
        </ul>
        <p className="measure lh-copy fwb f3 tc mb0">
          This book can help.
        </p>
      </section>
      <section className="bg-book-gray book-gray-gradient near-white ma0 pa2 pt4 pt2-ns">
        <div className="center-ns mw6-ns mt3-ns">
        <ul className="list ph3 ma0">
          <li className="tl tc-ns futura lh-title mb3 ph0 mh0">Practical tips for each part of Rails…with examples</li>
          <li className="tl tc-ns futura lh-title mb3 ph0 mh0">Learn to <strong>use</strong> Rails, not abstract it away</li>
          <li className="tl tc-ns futura lh-title mb3 ph0 mh0"><p className="measure-narrow-ns center-ns">Manage and isolate your business logic without fancy patterns or libraries</p></li>
        </ul>
        <p className="lh-copy f6 tc mt4">
          <a href={ SiteData.buy_now_link } className="b book-blue-glow-muted">
          { "Buy Now for "  + SiteData.price }
          </a>,{ " " }
          <a className="dib bright-blue" href="/assets/sustainable-rails-sample.pdf">read a Sample</a>, or <a className="dib bright-blue" href="#outline">see the full Table of Contents</a>.
        </p>
        </div>
      </section>
      <section className="ma0 pa0 pv3 bg-light-gray">
        <p className="lh-copy measure measure-narrow-ns f4 ph3 tc center">
          Learn how to manage <strong className="db">carrying costs</strong> in your app by strategically incurring <strong className="db">opportunity costs</strong>
        </p>
        <ul className="list ph3 ma0 center-ns mw6-ns">
          <li className="lh-copy mb3">
          <strong>Messy models with entangled dependencies and confusing callbacks?</strong> Instead, put business logic in plain Ruby classes that use your models to access the database.
          </li>
          <li className="lh-copy mb3">
            <strong>Trying to fit functionality into resources based on your database tables?</strong>{ " " }
              Try using custom resources with standard routes and Active Models instead of tons of custom routes.
          </li>
          <li className="lh-copy mb3">
            <strong>Fighting with JavaScript, APIs, and Source Maps?</strong>{ " " }
            Embrace server-rendered views.
          </li>
          <li className="lh-copy mb3">
            <strong>Slow test suite?</strong>{ " " }
            Don't over test. Controllers don't need a test if you have a system test. Simple validations don't need tests. If your jobs are a single-line delegation to business logic, why test them?
          </li>
        </ul>
        <div className="ph3">
          <p className="lh-copy measure ph3 pt3 mt2 bt futura center tc mw6-ns">
            <a href={ SiteData.buy_now_link }>Buy Now</a> and learn more of these tips. The book has extended examples and detailed, pragmatic explanations for <strong>when</strong> to use—or not use—each technique, all based on real-world experience.

          </p>
        </div>
      </section>
      <section className="pa3 pb0 pb3-ns bg-white near-black ma0">
        <div className="center-ns mw6-ns cf">
          <h2 className="f3 tc">What You Get</h2>
          <div className="w4 center tc dn-ns">
            <img src="/images/tablet.jpg" alt="Picture of the book as shown on a tablet"/>
          </div>
          <div className="w4 fr dn db-ns ml4">
            <figure class="pa2 br3 ma0 bg-white">
            <img src="/images/tablet.jpg" className="db" alt="Picture of the book as shown on a tablet"/>
            </figure>
          </div>
          <ul>
            <li className="lh-copy measure">Over 450 Pages of practical tips on building Rails apps</li>
            <li className="lh-copy measure">A beautifully typeset, DRM-free PDF for reading on any device, replete with an index for quick reference.</li>
            <li className="lh-copy measure">DRM-free EPUB and Kindle versions</li>
            <li className="lh-copy measure">A plain text Markdown version for all the grepping your heart desired</li>
          </ul>
        </div>
      </section>
      <section className="pa3 pt0 pt3-ns bg-white near-black ma0">
        <div className="center-ns mw6-ns cf">
          <h2 className="f3 tc">Prefer it in print?</h2>
          <div className="w5 center tc dn-ns">
            <img src="/images/book.jpg" alt="Picture of the book"/>
          </div>
          <div className="w5 dn db-ns fl">
            <img src="/images/book.jpg" alt="Picture of the book"/>
          </div>
          <div className="mt5-ns">
            <ul class="list ma0 pa0">
              <li class="lh-copy">
                <a className="db tc tl-ns link underline book-gray" href={ SiteData.buy_print_link }>{ SiteData.print_price } from Amazon (soft cover)</a>
              </li>
              { hardcover_info }
            </ul>
            <a name="both">
            <p className="lh-copy f7 i ph3 tc tl-ns mt3">
              <strong class="dib">Why no package on print and electronic?</strong> Due to the realities of self-publishing, I can't offer you a package deal on both the ebook and the print version.  My recommendation is to buy the version that you find most comfortable for reading.
            </p>
            </a>
          </div>
        </div>
        <a name="versions">
        <div className="tc mt5-ns">
          <h3>Versions</h3>
          <ul className="list pa0 ma0">
            <li className="lh-copy di">Rails 7</li>
            <li ariaRole="non" className="lh-copy di ph3">&middot;</li>
            <li className="lh-copy di">Ruby 3.1.0</li>
          </ul>
          <p className="lh-copy measure center f6">
            The book's guidance can be applied to <strong>any</strong> version of Rails, but the code samples use the non-deprecated APIs for Rails 7. <a href="/rails7.html">See what's changed since the Rails 6 version</a>.
          </p>
        </div>
        </a>
        <a name="pricing">
        <div className="tc mt5-ns">
          <h3>International Pricing</h3>
          <p className="lh-copy measure center f6 tl">
            I realize the cost of living outside the United States can be wildly different from living in the U.S. and that a $50 book can be a big investment.  I have created several discount codes that will bring the price down to a level that's more in line with the purchasing power in your country.
          </p>
          <p className="lh-copy measure center f6 tl">
            It's not perfect, and you are on your honor to choose the best discount for where you live.  Visit <a href="https://naildrivin5.com/books/index.html#pricing" target="_new">my website</a> for more info and then use the best code <a className="link underline" href={ SiteData.buy_now_link }>at checkout</a> for the eBook.  If you are buying the <a className="link underline" href={ SiteData.buy_print_link }>print book from Amazon</a>, I have adjusted the pricing in Amazon already, though Amazon only allows me to set pricing for certain countries.
          </p>
        </div>
        </a>
      </section>
      <section className="pa3 ma0 bg-near-black near-white">
        <div className="center-ns mw6-ns cf">
          <h2 className="f3 lh-title">About Me <span class="dib">(the Author)</span></h2>
          <img src="/images/DavidCopeland.jpg" className="fl mt2 mr3 mb2 br3 mw-2 w-25" alt="Photo of David Copeland, the author"/>
          <p className="lh-copy measure">
            My name is David Bryant Copeland and I've spent the last nine years working on long-lived Rails apps. I've worked on a huge monolith whose construction was not managed as well as greenfield apps that evolved over many years from monoliths to a microservices architecture.
          </p>
          <p className="lh-copy measure">13 years prior to that I worked on various technologies and apps both for consulting clients and startups.  Lastly, I've advised several startups using Rails and seen first-hand how small mistakes made early on can have a cascading effect on team sustainabilty.
          </p>
          <p className="lh-copy measure">
            The content of this book is based on my actual experience—I've really done everything in the book. I've seen (and made) decisions that both lead to great sustianbility as well as harmed it. There's nothing theoretical about what's in the book.
          </p>
          <p className="lh-copy measure">
            Feel free to look at <a className="light-blue link underline" href="https://www.linkedin.com/in/davidcopeland">my resume</a> to see what my experience is. I've also authored several technical books, including <a className="light-blue link underline" href="https://pragprog.com/book/rails6">Agile Web Development with Rails 6</a>, <a className="light-blue link underline" href="http://www.theseniorsoftwareengineer.com/">The Senior Software Engineer</a>, and <a className="light-blue link underline" href="https://solid-is-not-solid.com">SOLID is not Solid</a>. I'm <a className="light-blue link underline" href="https://twitter.com/davetron5000">@davetron5000 on Twitter</a>
          </p>
        </div>
      </section>
      <section className="mt5">
        <h2 className="f3 pv1 tc tl-ns mv0 w-100 ph3-ns">
          <div className="mw7-ns center-ns">
            Table of Contents
          </div>
        </h2>
        <a className="ma0 pa0" name="outline">&nbsp;</a>
        <section className="ph4-ns pl2 mw7-ns center-ns">
          <TOC />
        </section>
      </section>
      <section className="bg-light-gray near-black pa3 pt4-ns">
        <div className="mw6-ns center-ns tc-ns">
        <h2 className="f5 mt0 ph3 tc dib">Got feedback?</h2>
        <ul className="ma0 pa0 dib">
          <li className="dib-ns db pl3 pl0-ns pr3 pt1 pt0-ns f6"><a className="link underline black" href="mailto:davetron5000+sustainablerails@gmail.com"><span role="img" aria-label="email">📧</span> Email me</a></li>
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
