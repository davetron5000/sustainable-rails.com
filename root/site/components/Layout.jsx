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
      <h4 className="mt3 ttu fw4 f4">A Book by <a className="dib f4 link underline blue" href="https://naildrivin5.com">David Bryant Copeland</a></h4>
    )
    let status = (
      <React.Fragment>
        <h5 className="mt0 lh-title">Current Status as of { formattedDate } - { " " }
          <span className="normal mb3 db">
            <div dangerouslySetInnerHTML={ { __html: latestUpdate.content } } />
          </span>
        </h5>
        <h6 className="f5 ma0 normal i">What's inside?</h6>
        <ul className="list mt0">
          <li>
            <a className="link underline blue f6 db mt2 normal" href="#outline">View the Table of Contents…</a>
          </li>
          <li>
            <a className="link underline blue f6 db mt2 normal" href="chapter1.html">Read all of Chapter 1: "Why this book exists"</a>
          </li>
        </ul>
      </React.Fragment>
    )
    let image = (
      <img src="/images/cover.png" className="fl pr2 dn di-ns" width="287" />
    )

    if (this.props.compact) {
      byline = null
      status = null
      image  = null
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
    <header className="cf mt3 ph3 tc tl-ns">
      { image }
      <h1 className="mt3 mb0 f3 f2-ns">
        <a href="/" className="link black f3 f2-ns">
          Sustainable Web Development
        </a>
      </h1>
      <h2 className="mt0 mb0 f3 f2-ns">with Ruby on Rails</h2>
      <h3 className="mt2 mb0 fw4 f4 fw3-ns f3-ns">Practical Tips for Building Web Applications that Last</h3>
      { byline }
      { status }
    </header>

    <main>
      { this.props.children }
    </main>
    <footer className="tc bg-black pb4 pa2">
      <a name="about"></a>
      <p className="lh-copy white">
        Copyright &copy; { copyright.string } by { author }, All Rights Reserved.
      </p>
    </footer>
  </body>
</html>
    );
  }
}

