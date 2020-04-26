import React from "react"

export default class TOC extends React.Component {
  render() {
    return(
      <React.Fragment>
        <ol className="mh2 lh-copy measure">
          <li className="f5 fw5">
            <a href="chapter1.html">Why This Book Exists (read full chapter)</a>
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
            Business Logic (Does Not Go in Active Records)
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
              <li className="f6 normal">Disable Turbolinks and Remote-Forms-By-Default</li>
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
        </ol>
          <div className="bb ma0 ph3 tc tl-ns w-100 w-50-ns fw5 f5 dark-red nowrap">
            <span role="img" aria-label="construction-barrier">🚧</span>{ " "}
            Beta Currently Stops Here{ " "}
            <span role="img" aria-label="construction-barrier">🚧</span>{ " "}
          </div>
        <ol className="mh2 lh-copy measure" start="16">
          <li className="f5 fw5">
            Business Logic Class Design
            <ol>
              <li className="f6 normal">Stateless, Isolated Classes</li>
              <li className="f6 normal">Rich Result Objects</li>
              <li className="f6 normal">Query Logic is Business Logic</li>
            </ol>
          </li>
          <li className="f5 fw5">
            Models, Part 2
            <ol>
              <li className="f6 normal">Validations Don’t Provide Data Integrity</li>
              <li className="f6 normal">How to (Barely) Use Callbacks</li>
              <li className="f6 normal">Model Testing Strategy</li>
            </ol>
          </li>
          <li className="f5 fw5">
            Controllers
            <ol>
              <li className="f6 normal">Controllers are where HTTP Terminates</li>
              <li className="f6 normal">Controllers are an Antifragile Layer</li>
              <li className="f6 normal">Beware Before Actions and Global Variables</li>
              <li className="f6 normal">Don’t Over Test</li>
            </ol>
          </li>
          <li className="f5 fw5">
            Authentication and Authorization
            <ol>
              <li className="f6 normal">When in Doubt, Use Devise</li>
              <li className="f6 normal">Authorization and Role-based Access Controls</li>
              <li className="f6 normal">System Test Access Controls</li>
            </ol>
          </li>
          <li className="f5 fw5">
            Jobs
            <ol>
              <li className="f6 normal">Jobs Must Be Idempotent</li>
              <li className="f6 normal">Understand How Your Job System Works</li>
              <li className="f6 normal">Safely Modify Job APIs</li>
            </ol>
          </li>
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
