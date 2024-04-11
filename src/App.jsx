import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <form name="contact v1" method="post" onSubmit="submit" netlify>
        <div>
          <label>
            First Name:
            <input type="text" name="first-name" />
          </label>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" />
        </div>

        <div>
          <label>
            Comments?
            <textarea name="comments" cols="30" rows="10"></textarea>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
