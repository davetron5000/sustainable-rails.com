import React from "react";

import Layout from "./components/Layout";

import SiteData from "./derived_site_data.js"

export default function(props) {
  const P  = function(props) { return (<p className="lh-copy measure center">{ props.children }</p>) }
  const LI = function(props) { return (<li className="center measure"><p className="lh-copy">{ props.children }</p></li>) }

  return(
    <Layout compact={ true }>
      <header className="bg-book-gray book-blue-glow pa3 mt4">
        <h1 className="f2 tc ma0">What's New For Rails7?</h1>
      </header>
      <main className="pa3">
        <P>
          <em>Sustainable Web Development with Ruby on Rails</em> is not a Rails tutorial, so don't buy it thinking you'll be learning about the new features of Rails 7.  I don't have much more experience with them than you do! But it's been about two years since the original came out so the book benefits from an update.
        </P>
        <P>
          The Rails 7 version of the book is pretty similar to the original, however here is what has changed:
        </P>
        <ul>
          <LI>
              All code samples are updated to use Rails features that are not deprecated in Rails 7.  There weren't a lot of these.
          </LI>
          <LI>
            Removed guidance to skip the listen and spring gems as Rails 7 no longer includes them by default.
          </LI>
          <LI>
            Added guidance around using instance variables from controllers to help manage UI state.
          </LI>
          <LI>
            You no longer need to disable remote forms by default as they are no longer the default in Rails 7.
          </LI>
          <LI>
            The way to configure Postgres to use <code>TIMESTAMP WITH TIME ZONE</code> has changed and is more of a first-class API in Rails 7.
          </LI>
          <LI>
            Removed all use of Node and Yarn.  The JavaScript needed for the book works with Rails 7's new import maps feature, along with the asset pipeline.
          </LI>
          <LI>
            While the overall guidance around JavaScript is still the same, I removed the section on setting up unit tests for JavaScript.  The amount of JavaScript in the book doesn't warrant the massive tooling debt of Babel, Webpack, Jest, and all the rest.  The nuances and trade-offs around this decision are discussed in more detail in the book.
          </LI>
          <LI>
            Softer guidance around using React and a bit stronger suggestion to consider Hotwire.  While I don't have experience with Hotwire, I no longer think "just use React" is universally good advice for a Rails app. Hotwire is likely to be well-supported by the Rails team and have better compatibility with Rails than React, even though React is more widely understood.
          </LI>
          <LI>
            More nuanced guidance around nested routes, in particular acknowledging that specialized content-only pages might benefit from a nested route namespace.
          </LI>
          <LI>
            I created several gems based on some code in the book.  Those gems are referenced when the concepts are discussed, but the full code for stuff like <code>with_clues</code> and <code>confidence_check</code> is still there in the book.  The gems are:
            <ul>
              <LI><a href="https://github.com/sustainable-rails/confidence-check">confidence-check</a></LI>
              <LI><a href="https://github.com/sustainable-rails/log_method">log_method</a></LI>
              <LI><a href="https://github.com/sustainable-rails/tachyonscss-rails">tachyonscss-rails</a></LI>
              <LI><a href="https://github.com/sustainable-rails/trace_id">trace_id</a></LI>
              <LI><a href="https://github.com/sustainable-rails/with_clues">with_clues</a></LI>
            </ul>
          </LI>
        </ul>
      </main>
    </Layout>
  )
};
