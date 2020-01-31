import React from "react";

import Layout from "./components/Layout";
import EmailForm from "./components/EmailForm";
import UpdateItem from "./components/UpdateItem";

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
      <a name="outline"></a>
      <h1 className="f3 pv3 tc tl-ns w-100 bg-near-black near-white ph2-ns">Proposed Outline</h1>
      <section>
        <h2 className="f5 mt0 ph3 tc tl-ns dib">Got feedback?</h2>
        <ul className="ma0 pa0 dib">
          <li className="dib-ns db pl3 pl0-ns pr3 pt1 pt0-ns f6"><a className="link underline blue" href="mailto:davetron5000+sustainablerails@gmail.com"><span role="img" aria-label="email">📧</span> Email me</a></li>
          <li className="dib-ns db pl3 pl0-ns pt2 pt0-ns f6"><a className="link underline blue" href="https://docs.google.com/forms/d/e/1FAIpQLScN1Oze7aw0PtREuph909ZWYy_ZFPCzkLZKJvlY1BodwIuBTQ/viewform?usp=sf_link"><span role="img" aria-label="note">📝</span> Submit via Google Form</a></li>
        </ul>
      </section>
      <ol className="mh2 lh-copy measure">
        <li><a href="chapter1.html">Intro - what is this book for and why</a></li>
        <li>The Rails Application Architecture<ol>
          <li>Boundaries</li>
          <li>Views</li>
          <li>Models</li>
          <li>EverythingElse</li>
          <li>The Pros and Cons of the Rails Application Architecture</li>
        </ol></li>
        <li>Setting Up For This Book<ol>
          <li>What You’ll Need To Follow Along</li>
          <li>Setting up Docker for Local Development</li>
        </ol></li>
        <li>Start Your App Off Right<ol>
          <li>Creating a Rails App</li>
          <li>Using The Environment for Runtime Configuration</li>
          <li>Configuring Local Development Environment with dotenv</li>
          <li>Automating Application Setup with <code>bin/setup</code></li>
          <li>Running the Application Locally with <code>bin/run</code></li>
          <li>Putting Tests and Other Quality Checks in <code>bin/ci</code></li>
          <li>Improving Production Logging with lograge</li>
        </ol></li>
        <li>The View<ol>
          <li>Routes and URLs<ol>
            <li>Always Use Canonical Routes that Conform to Rails’ Defaults</li>
            <li>Never Configure Routes That Aren’t Being Used</li>
            <li>Vanity URLs Should Redirect to a Canonical Route</li>
            <li>Don’t Create Custom Actions, Create More Resources</li>
            <li>Be Wary of Nested Routes<ol>
              <li>Create Sub-Resources Judiciously</li>
              <li>Namespacing Might be an Architecture Smell</li>
            </ol></li>
          </ol></li>
          <li>HTML Templates<ol>
            <li>Use Semantic HTML<ol>
              <li>Build Views by Applying Meaningful Tags to Content</li>
              <li>Use &lt;div&gt; and &lt;span&gt; for Styling</li>
            </ol></li>
            <li>Build Templates Around Their Controller’s Resource as a Singleivar<ol>
              <li>Expose a Single ivar, Named for the Resource</li>
              <li>Judiciously Expose Authentication Details and Reference Data Separately</li>
            </ol></li>
            <li>Think of Partials as Re-usable Components<ol>
              <li>Don’t Use Layouts or Helpers for Re-usable Components</li>
              <li>Use Partials for Reusable Components Only</li>
              <li>Use Locals to Pass Parameters to Partials, not ivars</li>
            </ol></li>
            <li>Just Use ERB </li>
          </ol></li>
          <li>Helpers<ol>
            <li>Don’t Conflate Helpers with Your Domain</li>
            <li>Helpers Are Best At Markup and Formatting<ol>
              <li>Wrapping Complex Partials</li>
              <li>Small, Inline Components</li>
            </ol></li>
            <li>Presenters, Decorators, and View Models Have Their Own Problems<ol>
              <li>Overview of the Presenter Pattern</li>
              <li>Problems with Presenters</li>
              <li>Taming Problems with Presenters</li>
            </ol></li>
            <li>Use Rails’ APIs to Generate Markup</li>
            <li>Helpers Should Be Tested and Thus Testable</li>
          </ol></li>
            <li>CSS<ol>
              <li>Adopt a Design System</li>
              <li>Adopt a CSS Strategy<ol>
                <li>Using a Framework</li>
                <li>Object-Oriented CSS</li>
                <li>Functional CSS</li>
              </ol></li>
              <li>Create a Living Style Guide to Document Your Design System and CSS Strategy</li>
            </ol></li>
            <li>JavaScript<ol>
                <li>Beware Rails&#39; ajaxy defaults</li>
                <li>Risks with the way Rails handles Ajax and JavaScript</li>
                <li>Use React for Interactive Stuff</li>
              </ol>
            </li>
            <li>Testing<ol>
                <li>Techniques for taming coupling of markup and tests</li>
                <li>Test happy paths and major sad paths</li>
                <li>Test react component behavior, not snapshots</li>
                <li>The abililty to test your app should drive its design - how to have a conversation with a product manager</li>
                <li>System tests should break if your JS is broken</li>
                <li>Hard-code everything in the view to get your test working, then use it to validate your back-end</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>The Controller<ol>
            <li>The purpose of controllers<ol>
                <li>anti-fragile layer of user input</li>
                <li>orchestrate the user experience</li>
                <li>authenticate/authorize resources</li>
              </ol>
            </li>
            <li>All<ol>
                <li>Avoid non-standard controller actions</li>
                <li>Do not use hooks that don&#39;t apply to everyone</li>
                <li>Do not use ivars to pass params</li>
              </ol>
            </li>
            <li>Web Views<ol>
                <li>One ivar per view, named for the controller</li>
                <li>additional ivars for reference data</li>
                <li>Don&#39;t set ivars if you aren&#39;t rendering a view</li>
                <li>Skipping CSRF is usually a bad idea</li>
              </ol>
            </li>
            <li>API Endpoints<ol>
                <li>Understand how <code>to_json</code> works - JBuiler is a smell</li>
                <li>How to serialize JSON (top level object, pagination, etc.)</li>
              </ol>
            </li>
            <li>Testing<ol>
                <li>Use functional tests</li>
                <li>Don&#39;t over-test.  Your system tests test happy paths, so functional tests can assert strong params, cross-cutting concerns, etc.</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>Logging In<ol>
            <li>Use Devise</li>
            <li>Set this up early</li>
            <li>System tests should exercise login</li>
            <li>All controller actions should default to requiring auth</li>
            <li>The dangers of users and admins sharing an auth system</li>
            <li>The dangers of multiple auth systems</li>
          </ol>
        </li>
        <li>Models<ol>
            <li>Accept that in Rails, &quot;model&quot; is an active record</li>
            <li>Database Design<ol>
                <li>Data is most important</li>
                <li>Normalization</li>
                <li>Constraints, foreign keys, etc.</li>
                <li>Indexes</li>
              </ol>
            </li>
            <li>Managing Data<ol>
                <li>Migrations</li>
                <li>Seed Data</li>
                <li>Rake Tasks</li>
              </ol>
            </li>
            <li>What goes in a ApplicationModel?<ol>
                <li>Relations</li>
                <li>JSON serialization</li>
                <li>Not much else</li>
              </ol>
            </li>
            <li>A non-active record Model<ol>
                <li>ActiveModel</li>
                <li>This is a databag designed for views or JSON</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>Wait, where is all the business logic?<ol>
            <li><code>app/services</code></li>
            <li>Why?</li>
            <li>How to design these classes</li>
            <li>When I need one?<ol>
                <li>Schools of thought: always, if logic needs re-use, or if logic is more than a few lines of code</li>
              </ol>
            </li>
            <li>Scopes vs. where</li>
            <li>Validations</li>
            <li>Callbacks</li>
          </ol>
        </li>
        <li>Other Boundary Classes<ol>
            <li>Mail<ol>
                <li>Mailers</li>
                <li>Mailboxes</li>
                <li>mailcatcher</li>
              </ol>
            </li>
            <li>Rake Tasks</li>
            <li>Jobs<ol>
                <li>Designing Jobs</li>
                <li>Managing Jobs in Production</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>Operations<ol>
            <li>Logging</li>
            <li>Monitoring</li>
            <li>Error Reporting</li>
            <li>Performance</li>
          </ol>
        </li>
        <li>Scalability Patterns<ol>
            <li>Async Transaction</li>
            <li>Sagas/Breaking down jobs into re-triggerable steps</li>
            <li>Background Jobs</li>
            <li>Database Transactions</li>
            <li>Monolith vs Shared Database vs Microservices Considerations</li>
          </ol>
        </li>
      </ol>
      <p className="pa2 tc tl-ns">
        <a className="link underline blue f4" href="mailto:davetron5000+sustainablerails@gmail.com">Email me some feedback</a>
      </p>
    </section>
    </Layout>
  )
};
