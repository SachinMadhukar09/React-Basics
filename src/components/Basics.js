import React , {useState} from "react";
import Classcomponents from "./Classcomponents";
import Functionalcomponents from "./Functionalcomponenets";

const quotes = [
  "Investing in urself is the best investment you will ever make . It will not only improve your life, it will improve the lives of all those arround you.",
  "Happiness comes through good judgement , good judgement comes through experience , experience comes through bad judgement.",
  "We don't laugh because we are happy. We are happy because we laugh.",
  "Tumhara competition sirf khud se hona chaiye , Throughout to urself every fucking time",
  "In the end of this year I will learn that love urself and that is it In the end all I know is to Love myself",
  "You are born alone and you die alone and this world just wrap some bunch of rules on top of you to make you forgot those facts but I never forget.I'm living like this there is no tomorrow because there isn't one.",
];

function Basics() {
  const [age, setAge] = useState(12);
  const [counter, setCounter] = useState(0);
  const [quote, setQuote] = useState(quotes[0]);
  function renderFunctionalComponent() {
    setAge(15);
    console.log("renderFunctional");
  }
  function renderClassComponent() {
    setAge(10);
  }
  function increase() {
    // setCounter(counter+1);
    setCounter(function (oldCounterValue) {
      return oldCounterValue + 1;
      return 200;
    });
    console.log("Increasing");
  }
  function decrease() {
    // setCounter(counter-1);
    setCounter((oldCounterValue) => oldCounterValue - 1);
  }
  function changeQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  }
  return (
    <div className="App">
      {/* <Whizlabs/> */}
      <button onClick={renderFunctionalComponent}>
        Click Me To render Functional Components
      </button>
      <button onClick={renderClassComponent}>
        Click Me To render Class Components
      </button>
      {age > 14 && <Functionalcomponents name="Raj" age="15" />}
      {age < 12 && <Classcomponents name="Sachin" age="20" />}
      <h1>Counter : {counter}</h1>
      <button onClick={increase}>Increase Counter</button>
      <button onClick={decrease}>Decrease Counter</button>
      <h4>{quote}</h4>
      <button onClick={changeQuote}>Change Quote</button>
      {age > 14 ? (
        <p>This is the true statement</p>
      ) : (
        <p>This is the false statement</p>
      )}
    </div>
  );
}

export default Basics;
