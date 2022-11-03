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


    let byline = (
      <h4 className="mt3 ttu fw4 f5">A Book by <a className="dib f5 link underline blue" href="https://naildrivin5.com">David Bryant Copeland</a></h4>
    )
    let image = (
      <div>
        <div className="db dn-ns w5 center">
          <img src="/images/book-with-tablet-mobile-1000.jpg" alt="picture of the book with a tablet and mobile version"/>
        </div>
        <div className="db-ns dn w5">
          <img src="/images/book-with-tablet-mobile-1000.jpg" className="db fl" alt="picture of the book with a tablet and mobile version"/>
        </div>
      </div>
    )
    let aside = (
      <aside className="db w-100 pv3 ttu tracked tc futura book-blue-glow bg-book-gray">
        <a href="/rails7.html" className="book-blue-glow link">
          <span role="img" aria-label="star">🌟</span> Updated for Rails 7!
        </a>
      </aside>
    )

    let alignment = "tc tl-ns"
    if (this.props.compact) {
      byline    = null
      image     = null
      alignment = "tc"
      aside     = null
    }
    let header = (
      <header className={ "cf mt3 ph3 bg-white black " + alignment }>
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="copyright" href={ "Copyright (c) " + copyright.string + " " + author + ", All Rights Reserved" } />

    <title>{ title }</title>

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
    <a style="display:none" rel="me" href="https://ruby.social/@davetron5000">Mastodon</a>
    { aside }
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

