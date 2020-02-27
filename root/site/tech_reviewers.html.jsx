import React from "react";

import Layout from "./components/Layout";

import SiteData from "./derived_site_data.js"

const P = function(props) {
  return (
    <p className="lh-copy measure">
      { props.children }
    </p>
  )
}
const LI = function(props) {
  return (
    <li className="lh-copy measure">
      { props.children }
    </li>
  )
}

const Emoji = function(props) {
  return (
    <span role="img" aria-label={ props.name }>{ props.children }</span>
  )
}


export default function(props) {
  return(
    <Layout compact={ true }>
      <section className="pa3 bt mt3">
        <h1 className="f3">
          Tech Reviewer Information
        </h1>
        <P>
          Thanks for agreeing to help me with this book. { " " }
          <Emoji name="thanks">🙏</Emoji>{ " " }
          This page should have information and resources you need to be the most helpful to me while also not making you spend a ton of time.
        </P>
        <h2 className="f4"><span className="normal">Important Date</span>: March 16, 2020 you have <a href="mailto:davec@naildrivin5.com">feedback for me</a></h2>
        <nav>
          [ <a className="link underline f6 blue" href="#getting">Getting the Book</a> |{" "}
          <a className="link underline f6 blue" href="#feedback">Feedback I Want</a> |{" "}
          <a className="link underline f6 blue" href="#giving-feedback">How to Give Feedback</a> |{" "}
          <a className="link underline f6 blue" href="#responding">How I'll Respond</a> |{" "}
          <a className="link underline f6 blue" href="#guide">Guidelines for Feedback</a> |{" "}
          <a className="link underline f6 blue" href="#non-feedback">Feedback I Don't Need</a> ]
        </nav>
        <hr />
        <a name="getting">&nbsp;</a>
        <h2 className="f4">Getting the Book <Emoji name="book">📕</Emoji></h2>
        <P>
          You should have been given a link and a code to "buy" the book for free.  To use it:
        </P>
        <ol>
          <LI>Go <a href="https://transactions.sendowl.com/products/78209878/C293F8D6/add_to_cart">here</a> to add the book to your cart.</LI>
          <LI>Click “Checkout”.</LI>
          <LI>Click “Got a code”.</LI>
          <LI>Enter the code I gave you.</LI>
          <LI>Click “update”.</LI>
          <LI>Enter your email and click “Continue”.</LI>
        </ol>
        <P>
          This should download a <space className="courier">.zip</space> file that contains the book.  There is a PDF, an EPUB, a Kindle version, and a text version.
        </P>
        <a name="feedback">&nbsp;</a>
        <h2 className="f4">Reviewing/Feedback <Emoji name="thinking-face">🧐</Emoji></h2>
        <P>
          The most important question I need answered is: <strong>is the code and text technically correct?</strong>  To the extent that any objective statement exists in the book, <strong>is that objectively correct?</strong>
        </P>
        <P>
          Also of note is that the book is strongly opinionated and prescriptive and this is on purpose. I'm not trying to make a book for all people and all situations. I am totally fine if you do not agree with some of the advice in the book, and if you want to tell me about that disagreement, that's fine :)
        </P>
        <P>
          Given that, the following are some guidelines to help you help me.
        </P>
        <a name="giving-feedback">&nbsp;</a>
        <h3 className="f5">How to Give feedback</h3>
        <ul>
          <LI>Try to read the PDF version if you can.</LI>
          <LI>You can <a href="mailto:davec@naildrivin5.com">email me feedback</a> any time and in any form if that works for you.</LI>
          <LI>You can <a href="https://join.slack.com/t/slacktron5000/shared_invite/enQtOTcwOTEwMjgzNzUxLTU5NTIxNWZiM2Q2MTEzZjA3YWM2M2U4NzNkMzhlYjdmNzQwZjMyOGRmYmUzOTg3YWM4MGM5YzBkZGRmNzZhNzc">contact me on Slack</a> if you like.</LI>
          <LI>
            Try to indicate the page number or section heading of the area about which you have feedback. { " " }
            <span className="gray f6">Reference points in EPUB or Kindle won't translate for me in all likelihood.</span>
          </LI>
          <LI>Don't feel like you have to read it all. If you scan the table of contents and decide you only have time to focus on, say, the section on Helpers, that's cool.</LI>
          <LI>If you have opinions about what <strong>should</strong> be in the chapters you haven't read, that's cool, too.</LI>
        </ul>
        <a name="responding">&nbsp;</a>
        <h3 className="f5">How I'll Respond</h3>
        <ul>
          <LI>If I don't hear from you at all, I will ask for feedback one time, as a reminder.  No offense will be taken if you don't respond and/or can't get to it.</LI>
          <LI>I may have questions about your feedback.  I will ask those questions once. You should not feel obligated to respond and I won't be offended if you don't. I will not hound you for answers.</LI>
          <LI>When all is said and done and the book is complete, I'll ask for your mailing address to send you a physical copy of the book. I'll just ask once and won't hassle you.</LI>
          <LI>If I can help you in the future in any way, please ask.  Not sure <strong>what</strong> I can help with, but I will try.</LI>
        </ul>
        <a name="guide">&nbsp;</a>
        <h3 className="f5">Questions to Guide Feedback</h3>
        <P>
          I don't need these answered, but if you need some structure on  how to give me feedback, these might help.
        </P>
        <ul>
          <LI>Can you follow the book and understand the advice it's imparting?</LI>
          <LI>Is any of the code, statements about code, or statements about Rails that are incorrect?</LI>
          <LI>Are there any points that land particularly strongly or that don't land that well?</LI>
          <LI>Does any of the advice seem particularly apt and track with your experience?</LI>
          <LI>Does any of the advice seem counter to your experience?</LI>
          <LI>What situations have you experienced where some of the book's advice doesn't apply or should not be followed?</LI>
          <LI>Of what the current version of the book covers, is anything missing?</LI>
        </ul>
        <a name="non-feedback">&nbsp;</a>
        <h3 className="f5">Things I Don't Need Feedback On <Emoji name="nope-lady">🙅‍♀️</Emoji></h3>
        <P>
          This book is a work in progress, and I'm aware of some of the issues that exist, so you don't have to give me feedback on:
        </P>
        <ul>
          <LI>The browser screenshots  missing a border or being too big</LI>
          <LI>Code running into the margins</LI>
          <LI>Multiple code snippets on the same file when one will do. I'll be improving my ability to reference code to be better.</LI>
          <LI>Code snippets missing filenames.  I'll be adding those eventually.</LI>
          <LI>Typos.  I know some of you process writing by pointing out typos and that's totally fine if you want to pass them along, but don't look for them if it's not natural to you.</LI>
          <LI>An excess of commas. I use too many, I know.  I'll sort it out :)</LI>
        </ul>
      </section>
    </Layout>
  )
};
