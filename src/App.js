import React, { useState } from "react";
import "./App.css";
import GroceryList from "./listAndTables";
import WelcomeBack from "./WelcomeBack";
import Header from "./header";
import Content from "./Content";

import Quote from "./Quote";

function EncouragingWords(props) {
  console.log(props);
  return <p>Believe you can and you’re halfway there.</p>;
}

function DailyTip() {
  return <p>Highlight a whole paragraph by triple-clicking on it.</p>;
}

const quote = {
  text: "I am great believer in luck, and I find the harder I work, the more I have of it.",
  author: "Thomas Jefferson",
};

const handleSubscribe = (e) => console.log("User has been subscribed...");

function App() {
  const [subscribed, setSubscribed] = useState(false);
  const [alerts, setAlerts] = useState(false);


  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  
  return (
    <>
      <WelcomeBack name="Joe" />
      <Quote quote={quote} />
      <section>
        <p>Please click to subscribe to my updates!</p>
        <button onClick={() => setSubscribed(!subscribed)}>
          {subscribed ? "Unsubscribe" : "Subscribe"}
        </button>
        <button onClick={() => setAlerts(!alerts)}>
        {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
      </button>
      </section>
      <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} />
      <Content loggedIn={loggedIn} />
    </div>
      
    </>
  );
}

export default App;
