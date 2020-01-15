import React from "react";

export default function(props) {
  return (
    <form 
      className="pa3"
      action="https://theseniorsoftwareengineer.us7.list-manage.com/subscribe/post?u=ed5431da1419c47c5af5ab594&amp;id=5c630ad24a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <label htmlFor="mce-EMAIL" className="dn">Email Address </label>
      <input
        autofocus={props.autofocus ? "true" : null } 
        type="email" 
        value="" 
        placeholder="e.g. pat@example.com" i
        name="EMAIL" 
        className="pa2 bg-white b--near-black f4 w-100 required email w-25-ns di-ns"
        id="mce-EMAIL" 
      />
      <div style={ { position: "absolute", left: "-5000px" }} aria-hidden="true">
        <input type="text" name="b_ed5431da1419c47c5af5ab594_5c630ad24a" tabindex="-1" value="" />
      </div>
      <input 
        type="submit" 
        value="Get Notified" 
        name="subscribe" 
        id="mc-embedded-subscribe" 
        className="w-100 f4 fw7 br3 mt2 ph2 pv3 grow bg-near-black near-white pointer ml3-ns w-25-ns di-ns" 
      />
    </form>
  )
}
