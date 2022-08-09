import "./App.css";
import GroceryList from "./listAndTables";
import WelcomeBack from "./WelcomeBack";

import Quote from "./Quote";

function EncouragingWords(props) {
  console.log(props)
  return <p>Believe you can and you’re halfway there.</p>;

}

function DailyTip() {
  return <p>Highlight a whole paragraph by triple-clicking on it.</p>;
}


const quote = {
  text:
    "I am great believer in luck, and I find the harder I work, the more I have of it.",
  author: "Thomas Jefferson",
};

function App() {
  return (
    <>
      <WelcomeBack name="Joe" />
      <Quote quote={quote} />
    </>
  );
}



export default App; 