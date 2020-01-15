import React from "react";

export default function(props) {
  return (
    <form action="https://theseniorsoftwareengineer.us7.list-manage.com/subscribe/post?u=ed5431da1419c47c5af5ab594&amp;id=5c630ad24a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <label for="mce-EMAIL" class="sr-only">Email Address </label>
      <input autofocus={props.autofocus ? "true" : null } type="email" value="" placeholder="e.g. pat@example.com" name="EMAIL" class="required email" id="mce-EMAIL" />
      <div style={ { position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_ed5431da1419c47c5af5ab594_5c630ad24a" tabindex="-1" value="" /></div>
      <input type="submit" value="Get Notified" name="subscribe" id="mc-embedded-subscribe" class="button" />
    </form>
  )
}
