import React from 'react';
import { Block } from "./Block";
import './App.css';

function App() {
  const [currencyOne, setCurrencyOne] = React.useState("UAH");
  const [currencyTwo, setCurrencyTwo] = React.useState("USD");
  // const [rates, setRates] = React.useState({});
  const [fromCourse, setFromCourse] = React.useState(0);
  const [toCourse, setToCourse] = React.useState(1);

  const ratesRef = React.useRef({});

  React.useEffect(() => {
    fetch("https://cdn.cur.su/api/latest.json").then(res => res.json()).then((json) => {
      // setRates(json.rates);
      ratesRef.current = json.rates;
      onChangeToCourse(1);
    }).catch((err) => {
      console.warn(err)});
  }, []);

  const onChangeFromCourse = (value) => {
    const course = value / ratesRef.current[currencyOne];
    const result = course * ratesRef.current[currencyTwo];
    setToCourse(result);
    setFromCourse(value);
  }

  const onChangeToCourse = (value) => {
    const result = ratesRef.current[currencyOne] / ratesRef.current[currencyTwo] * value;
    setFromCourse(result);
    setToCourse(value);
  }

  React.useEffect(() => {
    onChangeFromCourse(fromCourse);
  }, [currencyOne]);

  React.useEffect(() => {
    onChangeToCourse(toCourse);
  }, [currencyTwo]);
  return (
    <div className="App">
      <Block value={fromCourse} currency={currencyOne} onChangeCurrency={setCurrencyOne} onChangeValue={onChangeFromCourse} />
      <Block value={toCourse} currency={currencyTwo} onChangeCurrency={setCurrencyTwo} onChangeValue={onChangeToCourse} />
    </div>
  );
}

export default App;
