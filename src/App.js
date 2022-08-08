import "./App.css";

function WelcomeBack({ name = "valued customer", adjective = "nice" }) {
  return (
    <p>
      Welcome back, {adjective} {name}!
    </p>
  );
}

function EncouragingWords(props) {
  console.log(props)
  return <p>Believe you can and you’re halfway there.</p>;

}

function DailyTip() {
  return <p>Highlight a whole paragraph by triple-clicking on it.</p>;
}

function App() {
  return (
    <>
      <WelcomeBack name="Joe" adjective="funny" />
      <WelcomeBack name="Anna" adjective="clever" />
      <WelcomeBack />
    </>
  );
}

export default App; 