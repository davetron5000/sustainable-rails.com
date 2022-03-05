import React from "react"

export default class TOC extends React.Component {
  render() {
    return(
      <React.Fragment>
        <ol className="mh2 lh-copy measure" type="I">
          <li className="f4 fw5">
            Introduction
            <ol start="1">
            <li className="f5 fw5">
            Why This Book Exists <div className="db f6 i"><a href="chapter1.html">[read full chapter online]</a>{ " " }
            <a href="/assets/sustainable-rails-sample.pdf">[as PDF]</a></div>
            <ol>
              <li className="f6 normal">What is Sustainability?</li>
              <li className="f6 normal">Why Care About Sustainability?</li>
              <li className="f6 normal">How to Value Sustainability</li>
              <li className="f6 normal">Assumptions</li>
              <li className="f6 normal">Opportunity and Carrying Costs</li>
              <li className="f6 normal">Why should you trust me?</li>
            </ol>
            </li>
            <li className="f5 fw5">
            The Rails Application Architecture
            <ol>
              <li className="f6 normal">Boundaries</li>
              <li className="f6 normal">Views</li>
              <li className="f6 normal">Models</li>
              <li className="f6 normal">Everything Else</li>
              <li className="f6 normal">The Pros and Cons of the Rails Application Architecture</li>
              <li className="f6 normal">Where We Go From Here</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Following Along in This Book
            <ol>
              <li className="f6 normal">Typographic Conventions</li>
              <li className="f6 normal">Software Versions</li>
              <li className="f6 normal">Sample Code</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Start Your App Off Right
            <ol>
              <li className="f6 normal">Creating a Rails App</li>
              <li className="f6 normal">Using The Environment for Runtime Configuration</li>
              <li className="f6 normal">Configuring Local Development Environment with dotenv</li>
              <li className="f6 normal">Automating Application Setup with bin/setup</li>
              <li className="f6 normal">Running the Application Locally with bin/run</li>
              <li className="f6 normal">Putting Tests and Other Quality Checks in bin/ci</li>
              <li className="f6 normal">Improving Production Logging with lograge</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Business Logic (Does Not Go in Active Records) <div className="db f6 i"><a href="/assets/sustainable-rails-sample.pdf">[read full chapter as PDF]</a></div>
            <ol>
              <li className="f6 normal">Business Logic Makes Your App Special…and Complex</li>
              <li className="f6 normal">Bugs in Commonly-Used Classes Have Wide Effects</li>
              <li className="f6 normal">Business Logic in Active Records Puts Churn and Complexity in Critical Classes</li>
              <li className="f6 normal">Example Design of a Feature</li>
            </ol>
            </li>
            </ol>
          </li>
          <li className="f4 fw5">
            Deep Dive into Rails
            <ol start="6">
            <li className="f5 fw5">
            Routes and URLs
            <ol>
              <li className="f6 normal">Always Use Canonical Routes that Conform to Rails’ Defaults</li>
              <li className="f6 normal">Never Configure Routes That Aren’t Being Used</li>
              <li className="f6 normal">Vanity URLs Should Redirect to a Canonical Route</li>
              <li className="f6 normal">Don’t Create Custom Actions, Create More Resources</li>
              <li className="f6 normal">Use Nested Routes Strategically</li>
              <li className="f6 normal">Nested Routes Can Organize Content Pages</li>
            </ol>
            </li>
            <li className="f5 fw5">
            HTML Templates
            <ol>
              <li className="f6 normal">Use Semantic HTML</li>
              <li className="f6 normal">Ideally, Expose One Instance Variable Per Action</li>
              <li className="f6 normal">Think of Partials as Re-usable Components</li>
              <li className="f6 normal">Just Use ERB</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Helpers
            <ol>
              <li className="f6 normal">Don’t Conflate Helpers with Your Domain</li>
              <li className="f6 normal">Helpers are Best at Exposing Global UI State and Generating Markup</li>
              <li className="f6 normal">Define Helpers in As Few Locations as Possible</li>
              <li className="f6 normal">Presenters, Decorators, and View Models Have Their Own Problems</li>
              <li className="f6 normal">Use Rails’ APIs to Generate Markup</li>
              <li className="f6 normal">Helpers Should Be Tested and Thus Testable</li>
            </ol>
            </li>
            <li className="f5 fw5">
            CSS
            <ol>
              <li className="f6 normal">Adopt a Design System</li>
              <li className="f6 normal">Adopt a CSS Strategy</li>
              <li className="f6 normal">Create a Living Style Guide to Document Your Design System and CSS Strategy</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Minimize JavaScript
            <ol>
              <li className="f6 normal">How and Why JavaScript is a Serious Liability</li>
              <li className="f6 normal">Embrace Server-Rendered Rails Views</li>
              <li className="f6 normal">Tweak Turbo to Provide a Slightly Better Experience</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Carefully Manage the JavaScript You Need
            <ol>
              <li className="f6 normal">Embrace Plain JavaScript for Basic Interactions</li>
              <li className="f6 normal">Carefully Choose One Framework When You Need It</li>
              <li className="f6 normal">Ensure System Tests Fail When JavaScript is Broken</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Testing the View
            <ol>
              <li className="f6 normal">Understand the Value and Cost of Tests</li>
              <li className="f6 normal">Use :rack_test for non-JavaScript User Flows</li>
              <li className="f6 normal">Test Against Default Markup and Content Initially</li>
              <li className="f6 normal">Cultivate Explicit Diagnostic Tools to Debug Test Failures</li>
              <li className="f6 normal">Fake The Back-end To Get System Tests Passing</li>
              <li className="f6 normal">Test JavaScript Interactions with a Real Browser</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Models, Part 1
            <ol>
              <li className="f6 normal">Active Record is for Database Access</li>
              <li className="f6 normal">Active Model is for Resource Modeling</li>
            </ol>
            </li>
            <li className="f5 fw5">
            The Database
            <ol>
              <li className="f6 normal">Logical and Physical Data Models</li>
              <li className="f6 normal">Create a Logical Model to Build Consensus</li>
              <li className="f6 normal">Planning the Physical Model to Enforce Correctness</li>
              <li className="f6 normal">Creating Correct Migrations</li>
              <li className="f6 normal">Writing Tests for Database Constraints</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Business Logic Code is a Seam
            <ol>
              <li className="f6 normal">Business Logic Code Must Reveal Behavior</li>
              <li className="f6 normal">Services are Stateless, Explicitly-Named Classes with Explicitly-Named Methods</li>
              <li className="f6 normal">Implementation Patterns You Might Want to Avoid</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Models, Part 2
            <ol>
              <li className="f6 normal">Validations Don’t Provide Data Integrity</li>
              <li className="f6 normal">Validations Are Awesome For User Experience</li>
              <li className="f6 normal">How to (Barely) Use Callbacks</li>
              <li className="f6 normal">Scopes are Often Business Logic and Belong Elsewhere</li>
              <li className="f6 normal">Model Testing Strategy</li>
            </ol>
            </li>
            <li className="f5 fw5">
            End-to-End Example
            <ol>
              <li className="f6 normal">Example Requirements</li>
              <li className="f6 normal">Building the UI First</li>
              <li className="f6 normal">Writing a System Test</li>
              <li className="f6 normal">Sketch Business Logic and Define the Seam</li>
              <li className="f6 normal">Fully Implement and Test Business Logic</li>
              <li className="f6 normal">Finished Implementation</li>
              <li className="f6 normal">Reflecting on What We’ve Built</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Controllers
            <ol>
              <li className="f6 normal">Controller Code is Configuration</li>
              <li className="f6 normal">Don’t Over-use Callbacks</li>
              <li className="f6 normal">Controllers Should Convert Parameters to Richer Types</li>
              <li className="f6 normal">Don’t Over Test</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Jobs
            <ol>
              <li className="f6 normal">Use Jobs To Defer Execution or Increase Fault-Tolerance</li>
              <li className="f6 normal">Understand How Your Job Backend Works</li>
              <li className="f6 normal">Sidekiq is The Best Job Backend for Most Teams</li>
              <li className="f6 normal">Queue Jobs Directly, and Have Them Defer to Your Business Logic Code</li>
              <li className="f6 normal">Job Testing Strategies</li>
              <li className="f6 normal">Jobs Will Get Retried and Must Be Idempotent</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Other Boundary Classes <div className="db f6 i"><a href="/assets/sustainable-rails-sample.pdf">[read full chapter as PDF]</a></div>
            <ol>
              <li className="f6 normal">Mailers</li>
              <li className="f6 normal">Rake Tasks</li>
              <li className="f6 normal">Mailboxes, Cables, and Active Storage</li>
            </ol>
            </li>
            </ol>
          </li>
          <li className="f4 fw5">
            Beyond Rails
            <ol start="21">
            <li className="f5 fw5">
            Authentication and Authorization
            <ol>
              <li className="f6 normal">When in Doubt Use Devise or OmniAuth</li>
              <li className="f6 normal">Authorization and Role-based Access Controls</li>
              <li className="f6 normal">Test Access Controls In System Tests</li>
            </ol>
            </li>
            <li className="f5 fw5">
            API Endpoints
            <ol>
              <li className="f6 normal">Be Clear About What—and Who—Your API is For</li>
              <li className="f6 normal">Write APIs the Same Way You Write Other Code</li>
              <li className="f6 normal">Use the Simplest Authentication System You Can</li>
              <li className="f6 normal">Use the Simplest Content Type You Can</li>
              <li className="f6 normal">Just Put The Version in the URL</li>
              <li className="f6 normal">Use .to_json to Create JSON</li>
              <li className="f6 normal">Test API Endpoints</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Sustainable Process and Workflows
            <ol>
              <li className="f6 normal">Use Continuous Integration To Deploy</li>
              <li className="f6 normal">Frequent Dependency Updates</li>
              <li className="f6 normal">Leverage Generators and Templates over Documentation</li>
              <li className="f6 normal">RubyGems and Railties Can Distribute Configuration</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Operations
            <ol>
              <li className="f6 normal">Why Observability Matters</li>
              <li className="f6 normal">Monitor Business Outcomes</li>
              <li className="f6 normal">Logging is Powerful</li>
              <li className="f6 normal">Manage Unhandled Exceptions</li>
              <li className="f6 normal">Measure Performance</li>
              <li className="f6 normal">Managing Secrets, Keys, and Passwords</li>
            </ol>
            </li>
            </ol>
          </li>
          <li className="f4 fw5">
            Appendices
            <ol start="25">
            <li className="f5 fw5">
            Setting Up Docker for Local Development
            <ol>
              <li className="f6 normal">Installing Docker</li>
              <li className="f6 normal">What is Docker?</li>
              <li className="f6 normal">Creating a Docker Image to Work In</li>
              <li className="f6 normal">Making Sure Everything Works</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Monoliths, Microservices, and Shared Databases
            <ol>
              <li className="f6 normal">Monoliths Get a Bad Rap</li>
              <li className="f6 normal">Microservices Are Not a Panacea.</li>
              <li className="f6 normal">Sharing a Database Is Viable</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Technical Leadership is Critical
            <ol>
              <li className="f6 normal">Leadership Is About Shared Values</li>
              <li className="f6 normal">Leaders Can be Held Accountable</li>
              <li className="f6 normal">Accountability Can be Implicit</li>
            </ol>
            </li>
            <li className="f5 fw5">
            Colophon
            </li>
            </ol>
          </li>
        </ol>
      </React.Fragment>
    )
  }
}
