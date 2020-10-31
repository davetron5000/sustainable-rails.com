import React from "react"
import SiteIcons from "./SiteIcons"
import SocialMediaCardMetadata from "./SocialMediaCardMetadata"
import Copyright from "./Copyright"

import SiteData from "../derived_site_data.js"

export default class Layout extends React.Component {
  render() {
    const copyright   = new Copyright()
    const title       = SiteData.title       || "Set the title in site_data.json"
    const author      = SiteData.author      || "Set the author in site_data.json"
    const description = SiteData.description || "Set the description in site_data.json"
    const twitter     = SiteData.twitter     || "Set your twitter handle in site_data.json"
    const url         = SiteData.url         || "Set the url in site_data.json"
    const latestUpdate = SiteData.updates[0];
    const formattedDate = latestUpdate.date


    let byline = (
      <h4 className="mt3 ttu fw4 f5">A Book by <a className="dib f5 link underline blue" href="https://naildrivin5.com">David Bryant Copeland</a></h4>
    )
    let image = (
      <div>
        <div class="db dn-ns w5 center">
          <img src="/images/book-with-tablet-mobile.png" />
        </div>
        <div class="db-ns dn w5">
          <img src="/images/book-with-tablet-mobile.png" className="db fl" />
        </div>
      </div>
    )

    if (this.props.compact) {
      byline = null
      image  = null
    }
    let header = (
      <header className="cf mt3 ph3 tc tl-ns">
        { image }
        <h1 className="mt3 mb0 f3 f2-ns">
          <a href="/" className="link book-gray f3 f2-ns">
            <span className="book-gray">
              Sustainable Web Development
            </span>
          </a>
        </h1>
        <h2 className="mt0 mb0 f3 f2-ns">with Ruby on Rails</h2>
        <h3 className="mt2 mb0 fw4 f4 fw3-ns f3-ns">Over 450 Pages of Practical Tips for Building Rails Apps that Last</h3>
        { byline }
      </header>
    )

    if (this.props.suppressHeader) {
      header = null
    }

    return(
<html lang="en">
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <link rel="copyright" href={ "Copyright (c) " + copyright.string + " " + author + ", All Rights Reserved" } />

    <title></title>

    <SocialMediaCardMetadata
      description={ description }
      author={ author }
      twitter_handle={ twitter }
      title={ title }
      url={ url }
    />
    <SiteIcons />
  </head>
  <body className="ma0 pa0">
    <aside className="bg-black white tc f4 pa3">
      <p className="pa0 ma0 mb1">
      #BlackLivesMatter
      </p>
      <p className="pa0 ma0 mb1 f5">
      50% of all profits until end of 2020 go to <a className="link underline white" href={ SiteData.donations.link }><span className="light-gray">{ SiteData.donations.name }</span></a>.
      </p>
      <p className="pa0 ma0 f6">
        <a href="https://naildrivin5.com/blm.html" className="i underline link white"><span class="white">Read More</span></a>
      </p>
    </aside>
    { header }
    <main>
      { this.props.children }
    </main>
    <footer className="tc bg-near-black pb4 pa2">
      <a name="about"></a>
      <p className="lh-copy white">
        Copyright &copy; { copyright.string } by{ " " }<span className="dib">{ author }</span>, All Rights Reserved.
      </p>
    </footer>
  </body>
</html>
    );
  }
}

