import React from "react";

import Layout from "./components/Layout";
import EmailForm from "./components/EmailForm";

import SiteData from "./derived_site_data.js"

function P(props) {
  return (
    <p className={ props.className + " lh-copy measure ph3" }>
      { props.children }
    </p>
  )
}
export default function(props) {
  return(
    <Layout compact={ true }>
      <article className="">
      <a name="main"></a>
      <h1 className="tc tl-ns ph2 ph2 pl3-ns f3" id="why-this-book-exists">Chapter 1 - Why This Book Exists <small>(excerpt)</small></h1>
      <P>Rails can scale.  But what does that actually mean?  And how do we do it? This book is the answer to both of these questions, but instead of using &quot;scalable&quot;, which many developers equate with &quot;fast performance&quot;, I&#39;m using the word &quot;sustainable&quot;, because this is really what we want out of our software: the ability to sustain it over time.</P>
      <P>Rails itself is an important component in sustainable web development, since it provides common solutions to common problems and has reached a significant level of maturity.  But it&#39;s not the complete picture.</P>
      <P>Rails has a lot of features and we may not need them all, or we may need to take some care in how we use them.  Rails also leaves gaps in your application&#39;s architecture that you&#39;ll have to fill (which makes sense, since Rails can&#39;t possibly provide <em>everything</em> your app will need).</P>
      <P>This book will help you navigate all of that.</P>
      <P>Before we begin, I want to be clear about what <em>sustainability</em> means and why it&#39;s important. I also want to state the assumptions I&#39;m making in writing this, because there is no such thing as universal advice—there&#39;s only recommendations that apply in a given context.</P>
      <h2 className="tc tl-ns ph2 pl3-ns f4" id="what-is-sustainability-">1.2 What is Sustainability?</h2>
      <P>The literal interpretation of sustainable web development is web development that can be sustained.  As silly as that definition is, I find it an illuminating restatement.</P>
      <P>To <em>sustain</em> the development of our software is to ensure that it can continue to meet its needs. A sustainable web app can easily suffer new requirements, increased demand for its resources, and an increasing (or changing) team of developers to maintain it.</P>
      <P>A system that is hard to change is hard to sustain. A system that can&#39;t avail itself of the resources it needs to function is hard to sustain.  A system that only <em>some</em> developers can work on is hard to sustain.</P>
      <P>Thus, a sustainable application is one in which changes we make tomorrow as as easy as changes are today, for whatever the application might need to do and whoever might be tasked with working on it.</P>
      <P>So this defines <em>sustainability</em>, but why is it important?</P>
      <h2 className="tc tl-ns ph2 pl3-ns f4" id="why-care-about-sustainability-">1.3 Why Care About Sustainability?</h2>
      <P>Most software exists to meet some need, and if that need will persist over time, so must the software.  <em>Needs</em> are subjective and vague, while software must be objective and specific.  Thus, building software is often a matter of continued refinement as the needs are slowly clarified.  And, of course, needs have a habit of changing along the way.</P>
      <P>Software is expensive, mostly owing to the expertise required to build and maintain it.  The ability to write software is one of the most in-demand skills, garnering some of the highest wages in the world, even at entry levels.  It stands to reason that if a piece of software requires more effort to enhance and maintain over time, it will cost more and more and deliver less and less.</P>
      <P>In an economic sense, sustainable software minimizes the cost of the software over time.  But there is a human cost to working on software.  Working on sustainable software is, well, more enjoyable.  They say employees quit managers, but I&#39;ve known developers that quit codebases.  Working on unsustainable software just plain sucks, and I think there&#39;s value in having a job that doesn&#39;t suck…at least not all of the time.</P>
      <P>Of course, it&#39;s one thing to care about sustainability in the abstract, but how does that translate into action?</P>
      <h2 className="tc tl-ns ph2 pl3-ns f4" id="how-to-value-sustainability-">1.4 How to Value Sustainability?</h2>
      <P>Sustainability is like an investment.  It necessarily won&#39;t pay off in the short term and, if the investment isn&#39;t sound, it won&#39;t ever pay off.  So it&#39;s really important to understand the value of sustainability to your given situation and to have access to as much information as possible to know exactly how to invest in it.</P>
      <P>Predicting the future is dangerous for programmers.  It can lead to over-engineering, which makes certain classes of changes more difficult in the future. To combat this urge, developers often look to the tenets of agile software development, which have many cute aphorisms that boil down to &quot;don&#39;t build software that you don&#39;t know you need&quot;.</P>
      <P>If you are a hired consultant, this is excellent advice. It gives you a framework to be successful and manage change when you are in a situation where you have very little access to information.  The strategy of &quot;build for only what you 100% know you need&quot; works great to get software shipped with confidence, but it doesn&#39;t necessarily lead to a sustainable outcome.</P>
      <P>For example, no business person is going to ask you to write log statements so you can understand your code in production.  No product owner is going to ask you to create a design system to facilitate building user interfaces more quickly.  And no one is going to require that your database has referential integrity.</P>
      <P>The features of the software are merely one input into what software gets built.  They are a significant one, to be sure, but not the only one.  To make better technical decisions, you need access to more information than simply what someone wants the software to do.</P>
      <P>Do you know what economic or behavioral output the software exists to produce?  In other words, how does the software make money for the people paying you to write it?  What improvements to the business is it expected to make?  What is the medium or long-term plan for the business?  Does it need to grow significantly?  Will there need to be increased traffic? Will there be an influx of engineers?  Will they be very senior, very junior, or a mix?  When will they be hired and when will they start?</P>
      <P>The more information you can get access to, the better, because all of this feeds into your technical decision-making and can tell you just how sustainable your app needs to be.  If there will be an influx of less experienced developers, you might make different decisions than if the team is only hiring one or two experienced specialists.</P>
      <P>Armed with this sort of information, you can make technical decisions as part of an overall <em>strategy</em>.  For example, you may want to spend several days setting up a more sustainable development environment.  By pointing to the company&#39;s growth projections and your teams hiring plans, that work can be easily justified (see the sidebar <a href="#stitch-fix-growth">&quot;Understanding Growth At Stitch Fix&quot;</a> for a specific example of this).</P>
      <a name="stitch-fix-growth"></a>
      <aside className="bt bb ph3 baskerville bg-light-gray near-black measure-ns ba-ns br2-ns mh3-ns">
        <h1 className="f4 baskerville">
          Understanding Growth at Stitch Fix
        </h1>
        <P className="baskerville">
          During my first few months at Stitch Fix, I was asked to help improve the operations of our warehouse. There were many different processes and we had a good sense of which ones to start automating.  At the time, there was only one application—called <span className="sc">Hellblazer</span>—and it served up <code>stitchfix.com</code>.
        </P>
        <P className="baskerville">
          If I hadn&#39;t been told anything else, the simplest thing to do would&#39;ve been to make a <code>/warehouse</code> route in <span className="sc">Hellblazer</span> and slowly add features for the associates there. But I <em>had</em> been told something else.
        </P>
        <P className="baskerville">
          Like almost everyone at the company, the engineering team was told—very transparently—what the growth plans for the business were. It needed to grow in a certain way or the business would fail.  It was easy to extrapolate from there what that would mean for the size of the engineering team, and for the significance of the warehouse&#39;s efficiency.  It was clear that a single codebase everyone worked in would be a nightmare, and migrating away from it later would be difficult and expensive.
        </P>
        <P className="baskerville">
          So, we created a new application that shared <span className="sc">Hellblazer</span>&#39;s database.  It would&#39;ve certainly been faster to add code to <span className="sc">Hellblazer</span> directly, but we knew doing so would burn us long-term.  As the company grew, the developers working on warehouse software were fairly isolated since they worked in a totally different codebase.  We replicated this pattern and, after six years of growth, it was clearly the right decision.
        </P>
        <P className="baskerville">
          But we never could&#39;ve known that without a full understanding of the company&#39;s growth plans, and long-term vision for the problems we were there to solve.
        </P>
      </aside>

      <P>If you don&#39;t have the information about the business, the team, or anything other than what some user wants the software to do, you aren&#39;t set up to do sustainable development. But it doesn&#39;t mean you shouldn&#39;t ask anyway.</P>
      <P>People who don&#39;t have experience writing software won&#39;t necessarily intuit that such information is relevant, so they might not be forthcoming.  But you&#39;d be surprised just how much information you can get from someone by just asking.</P>
      <P>Whatever the answers are, you can use this as part of an overall technical strategy, of which sustainability is a part.  As you read this book, I&#39;ll talk about the considerations around the various recommendations and techniques.  They might not all apply to your situation, but many of them will.</P>
      <P>Which brings us to the set of assumptions that this book is based on.  In other words, what <em>is</em> the situation in which sustainability is important and in which this book&#39;s recommendations apply?</P>
      <h2 className="tc tl-ns ph2 pl3-ns f4" id="assumptions">1.5 Assumptions</h2>
      <P>This book is pretty prescriptive, but each prescription comes with an explanation, and <em>all</em> of the book&#39;s recommendations are based on some key assumptions that I would like to state explicitly.  If your situation differs wildly from the one described below, you might not get that much out of this book.  My hope—and belief—is that the assumptions below are common, and that the situation you find yourself in writing software is similar to situations I have faced.  Thus, this book will help you.</P>
      <P>In case it&#39;s not, I want to state my assumptions up front, right here in this free chapter.</P>
      <h3 className="tc tl-ns ph2 pl3-ns f5 lh-title" id="the-software-has-a-clear-purpose">1.5.1 The Software Has a Clear Purpose</h3>
      <P>This might seem like nonsense, but there are times when we don&#39;t exactly know what the software is solving for, yet need to write some software to explore the problem space.</P>
      <P>Perhaps some venture capitalist has given us some money, but we don&#39;t yet know the exact market for our solution. Maybe we&#39;re prototyping a potentially complex UI to do user testing.  In these cases we need to be nimble and try to figure out what the software should do.</P>
      <P>So the assumption here is that that has happened.  We know generally what problem we are solving, and we aren&#39;t going to have to pivot from selling shoes to providing AI-powered podiatrist back-office enterprise software.</P>
      <h3 className="tc tl-ns ph2 pl3-ns f5 lh-title" id="the-software-needs-to-exist-for-years">1.5.2 The Software Needs To Exist For Years</h3>
      <P>This book is about how to sustain development over a longer period of time than a few months, so a big assumption is that the software actually <em>needs</em> to exist that long!</P>
      <P>A lot of software falls into this category.  If you are automating a business process, building a customer experience, or integrating some back-end systems, it&#39;s likely that software will continue to be needed for quite a while.</P>
      <h3 className="tc tl-ns ph2 pl3-ns f5 lh-title" id="the-software-will-evolve">1.5.3 The Software Will Evolve</h3>
      <P>Sometimes we write code that solves a problem and that problem doesn&#39;t change, so the software is stable.  That&#39;s not an assumption I am making here.  Instead, I&#39;m assuming that the software will be subject to changes big and small over the years it will exist.</P>
      <P>I believe this is more common than not.  Software is notoriously hard to get right the first time, so it&#39;s common to change it iteratively over a long period to arrive at optimal functionality.  Software that exists for years also tends to need to change to keep up with the world around it.</P>
      <h3 className="tc tl-ns ph2 pl3-ns f5 lh-title" id="the-team-will-change">1.5.4 The Team Will Change</h3>
      <P>The average tenure of a software engineer at any given company is pretty low, so I&#39;m assuming that the software will outlive the team, and that the group of people charged with the software&#39;s maintenance and enhancement will change over time.  I&#39;m also assuming the experience levels and skill-sets will change over time as well.</P>
      <h3 className="tc tl-ns ph2 pl3-ns f5 lh-title" id="you-value-sustainability-consistency-and-quality">1.5.5 You Value Sustainability, Consistency, and Quality</h3>
      <P>Values are fundamental beliefs that drive actions.  While the other assumptions might hold for you, if you don&#39;t actually value sustainability, consistency, and quality, this book isn&#39;t going to help you.</P>
      <h4 className="f6 ttu tracked ph2 ph3-ns" id="sustainability">Sustainability</h4>
      <P>If you don&#39;t value sustainability as I&#39;ve defined it, you likely didn&#39;t pick up this book or have stopped reading by now.  You&#39;re here because you think sustainability is important, thus you <em>value</em> it.</P>
      <h4 className="f6 ttu tracked ph2 ph3-ns" id="consistency">Consistency</h4>
      <P>Valuing consistency is hugely important as well.  Consistency means that things should not be arbitrarily different.  Same problems should have same solutions, and there should not be many ways to do something.  It also means being explicit that personal preferences are not critical inputs to decision-making.</P>
      <P>A team that values consistency is a sustainable team and will produce sustainable software.  When code is consistent, it can be confidently abstracted into shared libraries.  When processes are consistent, they can be confidently automated to make everyone more productive.</P>
      <P>When architecture and design are consistent, knowledge can be transferred, and the team, the systems, and even the business itself can survive potentially radical change (see the sidebar <a href="#aws-migration">&quot;Our Uneventful Migration to AWS&quot;</a> for how Stitch Fix capitalized on consistency to migrate from Heroku to AWS with no downtime or outages).</P>
      <h4 className="f6 ttu tracked ph2 ph3-ns" id="quality">Quality</h4>
      <P>Quality is a vague notion, but it&#39;s important to both understand it and to value it.  In a sense, valuing quality means doing things right the first time.  But &quot;doing things right&quot; doesn&#39;t mean over-engineering, gold-plating, or doing something fancy that&#39;s not called for.</P>
      <P>Valuing quality is to acknowledge the reality that we aren&#39;t going to be able to go back and clean things up after they have been shipped.  There is this fantasy developers engage in that they can simply &quot;acquire technical debt&quot; and someday &quot;pay it down&quot;.</P>
      <P>I have never seen this happen in the way developers think.  It is extremely difficult to make a business case to modify working software simply to make it &quot;higher quality&quot;.  Usually, there must be some catastrophic failure to get the resources to clean up a previously-made mess. It&#39;s simpler and easier to manage a process by which messes don&#39;t get made as a matter of course.</P>
      <a name="aws-migration"></a>
      <aside className="bt bb ph3 baskerville bg-light-gray near-black measure-ns ba-ns br2-ns mh3-ns">
        <h1 className="f4 baskerville">Our Uneventful Migration to AWS</h1>
        <P className="baskerville">
          For several years, Stitch Fix used the platform-as-a-service Heroku. We were consistent in how we used it, as well as in how our applications were designed. We used one type of relational database, one type of cache, one type of CDN, etc.
        </P>
        <P className="baskerville">
          In our run-up to going public, we needed to migrate to AWS, which is <em>very</em> different from Heroku.  We had a team of initially two people and eventually three to do the migration for the 100+ person engineering team.  We didn&#39;t want downtime, outages, or radical changes in the developer experience.
        </P>
        <P className="baskerville">
          Because everything was so consistent, the migration team was able to quickly build a deployment pipeline and command-line tool to provide a Heroku-like experience to the developers.  Over several months we migrated one app and one database at a time.  Developers barely noticed, and our users and customers had no idea.
        </P>
        <P className="baskerville">
          The project lead was so confident in the approach and the team that he kept his scheduled camping trip to an isolated mountain in Colorado, unreachable by the rest of the team as they moved <code>stitchfix.com</code> from Heroku to AWS to complete the migration.  Consistency was a big part of making this a non-event.
        </P>
      </aside>
      <P>Roll quality into the everyday process.  Doing this consistently will result in predictable output, which is what managers really want to see.  On the occasion when a date must be hit, cut scope, not corners.  Only the developers know what scope to cut in order to get meaningfully faster delivery, but this requires having as much information about the business strategy as possible.</P>
      <P>When you value sustainability, consistency, and quality, you will be unlikely to find yourself in a situation where you must undo a technical decision you made at the cost of shipping more features.  Business people may want software delivered as fast as possible, but they <em>really</em> don&#39;t want to go an extended period without any features so that the engineering team can &quot;pay down&quot; technical debt.</P>
      <P>The last bit of information I want to share is about me.  This book amounts to my advice based on my experience, and you need to know about that, because, let&#39;s face it, the field of computer programming is pretty far away from science, and most of the advice we get is nicely-formatted survivorship bias.</P>
      <h2 className="tc tl-ns ph2 pl3-ns f4" id="why-should-you-trust-me-">1.6 Why should you trust me?</h2>
      <P>Software engineering is notoriously hard to study and most of what exists about how to write software is anecdotal evidence or experience reports.  This book is no different, but I do believe that if you are facing problems similar to those I have faced, there is value in here.</P>
      <P>So I want to outline what my experience is that has led to me recommend what I do in this book.</P>
      <P>The most important thing to know about me is that I&#39;m not a software consultant, nor have I been in a very long time.  For the past ten years I have been a product engineer, working for companies building one or more products designed to last. I was a rank and file engineer at times, a manager on occasion, and most recently, an architect (meaning I was responsible for technical strategy, but I assure you I wrote a <em>lot</em> of code).</P>
      <P>What this means is that the experience upon which this book is based comes from actually building software meant to be sustained.  I have actually done—and seen the long-term results of doing—pretty much everything in this book.  I&#39;ve been responsible for sustainable software several times over my career.</P>
      <ul>
        <li><P>I spent four years at an energy startup that sold enterprise software. I saw the product evolve from almost nothing to a successful company with many clients and over 100 engineers. While the software was Java-based, much of what I learned about sustainability applies to the Rails world as well.</P></li>
        <li><P>I spent the next year and half at an e-commerce company that had reached what would be the peak of its success. I joined a team of almost 200 engineers, many of whom were working in a huge Rails monolith that contained thousands of lines of code, all done &quot;The Rails Way&quot;. The team had experienced massive growth and this growth was not managed. The primary application we all worked in was wholly unsustainable and had a massive carrying cost simply existing.</P></li>
        <li><P>I then spent the next six and half years at Stitch Fix, where I was the third engineer and helped set the technical direction for the team. By the time I left, the team was 200 engineers, collectively managing a microservices-based architecture of over 50 Rails applications, many of which I contributed to. At that time I was responsible for the overall technical strategy for the team and was able to observe which decisions we made in 2013 ended up being good (or bad) by 2019.</P></li>
      </ul>
      <P>What I don&#39;t have much experience with is working on short-term greenfield projects, or being dropped into a mess to help clean it up (so-called &quot;Rails Rescue&quot; projects).  There&#39;s nothing wrong with this kind of experience, but that&#39;s not what this book is about.</P>
      <P>So what follows is what I tried to take away from the experience above, from the great decisions my colleges and I made, to the unfortunate ones as well (I pushed hard for both Coffeescript and Angular 1 and we see how those turned out).</P>
      <P>But, as they say, your mileage may vary, &quot;it depends&quot;, and everything is a trade-off.  Hopefully, I can at least clarify the trade-offs and how to think about them, so if you aren&#39;t in the same exact situation as me, you can still get value from my experience.</P>
      <h2 className="tc tl-ns ph2 pl3-ns f4" id="up-next">1.7 Up Next</h2>
      <P>Hopefully this chapter has given you a sense of what you&#39;re in for and whether or not this book is for.  I hope it is!</P>
      <P>So, let&#39;s move on.  Because this book is about Ruby on Rails, I want to give an overview of the application architecture Rails provides by default, and how those pieces relate to each other.  From that basis, we can then deep dive into each part of Rails and learn how to use it sustainably.</P>
    </article>
      <footer className="bt mt2 pt2">
    <div className="pa3 tc ma3">
      <a href={ SiteData.buy_now_link } className="link f4-ns f5 nowrap fw7 br3 mt2 ph4 pv2 w-25-ns grow bg-dark-green near-white pointer di">
        { "Buy Beta Now "  + SiteData.beta_price }
      </a>
    </div>
      </footer>
  </Layout>
  );
}
