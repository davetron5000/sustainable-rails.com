import React from "react"

export default class TOC extends React.Component {
  render() {
    return(
      <React.Fragment>
        <ol className="mh2 lh-copy measure">
          <li className="f5 fw5">
            Why This Book Exists <div className="db f6 i"><a href="chapter1.html">[read full chapter online]</a>{ " " }
            <a href="/assets/sustainable-rails-sample.pdf">[as PDF]</a></div>
            <ol>
              <li className="f6 normal">What is Sustainability?</li>
              <li className="f6 normal">Why Care About Sustainability?</li>
              <li className="f6 normal">How to Value Sustainability?</li>
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
            Setting Up For This Book
            <ol>
              <li className="f6 normal">What You’ll Need To Follow Along</li>
              <li className="f6 normal">Setting up Docker for Local Development</li>
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
              <li className="f6 normal">Business Logic is What Makes Your App Special…and Complex</li>
              <li className="f6 normal">Bugs in Commonly-Used Classes Have Wide Effects</li>
              <li className="f6 normal">Business Logic in Active Records Puts Churn and Complexity in Critical Classes</li>
              <li className="f6 normal">Example Design of a Feature</li>
            </ol>
          </li>
          <li className="f5 fw5">
            The View Layer
          </li>
          <li className="f5 fw5">
            Routes and URLs
            <ol>
              <li className="f6 normal">Always Use Canonical Routes that Conform to Rails’ Defaults</li>
              <li className="f6 normal">Never Configure Routes That Aren’t Being Used</li>
              <li className="f6 normal">Vanity URLs Should Redirect to a Canonical Route</li>
              <li className="f6 normal">Don’t Create Custom Actions, Create More Resources</li>
              <li className="f6 normal">Be Wary of Nested Routes</li>
            </ol>
          </li>
          <li className="f5 fw5">
            HTML Templates
            <ol>
              <li className="f6 normal">Use Semantic HTML</li>
              <li className="f6 normal">Build Templates Around Their Controller’s Resource as a Single Instance Variable</li>
              <li className="f6 normal">Think of Partials as Re-usable Components</li>
              <li className="f6 normal">Just Use ERB</li>
            </ol>
          </li>
          <li className="f5 fw5">
            Helpers
            <ol>
              <li className="f6 normal">Don’t Conflate Helpers with Your Domain</li>
              <li className="f6 normal">Helpers Are Best At Markup and Formatting</li>
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
              <li className="f6 normal">Disable Remote-Forms-By-Default and Tweak Turbolinks</li>
            </ol>
          </li>
          <li className="f5 fw5">
            Carefully Manage the JavaScript You Need
            <ol>
              <li className="f6 normal">Embrace Plain JavaScript for Basic Interactions</li>
              <li className="f6 normal">Carefully Choose One Framework When You Need It</li>
              <li className="f6 normal">Unit Test As Much of Your JavaScript as You Can</li>
            </ol>
          </li>
          <li className="f5 fw5">
            Testing The View
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
            Business Logic Code Should Be Thought of as a Seam
            <ol>
              <li className="f6 normal">Business Logic Code Must Reveal Behavior</li>
              <li className="f6 normal">Services are Stateless, Explicitly-Named Classes with Explicitly-Named Methods</li>
              <li className="f6 normal">Alternate Implementation Patterns You Might Want to Avoid</li>
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
              <li className="f6 normal">Controller Code Should be Thought of as Configuration</li>
              <li className="f6 normal">Don’t Over-use Callbacks</li>
              <li className="f6 normal">Controllers Often Convert Parameters to Richer Types</li>
              <li className="f6 normal">Don’t Over Test</li>
            </ol>
          </li>
          <li className="f5 fw5">
            Authentication and Authorization
            <ol>
              <li className="f6 normal">When in Doubt Use Devise or OmniAuth</li>
              <li className="f6 normal">Authorization and Role-based Access Controls</li>
              <li className="f6 normal">Test Access Controls In System Tests</li>
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
        </ol>
          <div className="bb ma0 ph3 tc tl-ns w-100 w-50-ns fw5 f5 dark-red nowrap">
            <span role="img" aria-label="construction-barrier">🚧</span>{ " "}
            Beta Currently Stops Here{ " "}
            <span role="img" aria-label="construction-barrier">🚧</span>{ " "}
          </div>
        <ol className="mh2 lh-copy measure" start="22">
          <li className="f5 fw5">
            Other Boundary Classes
            <ol>
              <li className="f6 normal">Mailers</li>
              <li className="f6 normal">Mailboxes</li>
              <li className="f6 normal">Rake Tasks</li>
            </ol>
          </li>
          <li className="f5 fw5">
            Production-Safe Database Changes
          </li>
          <li className="f5 fw5">
            Sustainable Process and Workflows
            <ol>
              <li className="f6 normal">Continuous Integration</li>
              <li className="f6 normal">Leverage Generators and Templates over Documentation</li>
              <li className="f6 normal">Frequent Dependency Updates</li>
              <li className="f6 normal">Railties Can Distribute Shared Configuration</li>
            </ol>
          </li>
          <li className="f5 fw5">
            Operations
            <ol>
              <li className="f6 normal">Why Observability Matters</li>
              <li className="f6 normal">Logging is Powerful</li>
              <li className="f6 normal">Monitor Things You Want To Know About</li>
              <li className="f6 normal">Managing Unhandled Exceptions</li>
              <li className="f6 normal">Measure Performance</li>
              <li className="f6 normal">Managing Secrets, Keys, and Passwords</li>
            </ol>
          </li>
          <li className="f5 fw5">
            API Endpoints
            <ol>
              <li className="f6 normal">A JSON Strategy</li>
              <li className="f6 normal">Understand How to_json Works</li>
              <li className="f6 normal">Middleware vs. Before Actions</li>
            </ol>
          </li>
          <li className="f5 fw5">
            Scalability Patterns
            <ol>
              <li className="f6 normal">Database Transactions</li>
              <li className="f6 normal">Asynchronous Transaction</li>
              <li className="f6 normal">Sagas / Step Functions</li>
              <li className="f6 normal">Monoliths, Microservices, and Shared Databases</li>
            </ol>
          </li>
        </ol>
      </React.Fragment>
    )
  }
}
