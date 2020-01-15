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

    let header = (
      <header class="cf">
        <img src="/images/cover.png" />
        <h1>Sustainable Web Development</h1>
        <h2>with Ruby on Rails</h2>
        <h3>Practical Tips for Building Web Applications that Last</h3>
        <h4>A Book by <a href="https://naildrivin5.com">David Bryant Copeland</a></h4>
        <h5>Current Status as of Jan 14, 2020 - <a href="chapter1.html">Chapter 1 Available</a></h5>
      </header>
    )

    if (this.props.compact) {
      header = (
        <header class="cf">
          <h1><a href="/">Sustainable Web Development</a></h1>
          <h2>with Ruby on Rails</h2>
          <h3>Practical Tips for Building Web Applications that Last</h3>
          <hr />
        </header>
      )
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
    { header }
    <main>
      { this.props.children }
    </main>
    <footer className="tc bg-black white pb4 pa2">
      <a name="about"></a>
      <p className="lh-copy">
        Copyright &copy; { copyright.string } by { author }, All Rights Reserved.
      </p>
    </footer>
  </body>
</html>
    );
  }
}

