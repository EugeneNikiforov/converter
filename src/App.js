import React from 'react';
import { Block } from "./Block";
import './App.css';

function App() {
  const [currencyOne, setCurrencyOne] = React.useState("UAH");
  const [currencyTwo, setCurrencyTwo] = React.useState("USD");
  const [rates, setRates] = React.useState({});
  const [fromCourse, setFromCourse] = React.useState(0);
  const [toCourse, setToCourse] = React.useState(0);

  React.useEffect(() => {
    fetch("https://cdn.cur.su/api/latest.json").then(res => res.json()).then((json) => {setRates(json.rates)}).catch((err) => {
      console.warn(err)});
  }, []);

  const onChangeFromCourse = (value) => {
    const course = value / rates[currencyOne];
    const result = course * rates[currencyTwo];
    setToCourse(result);
    setFromCourse(value);
  }

  const onChangeToCourse = (value) => {
    const result = rates[currencyOne] / rates[currencyTwo] * value;
    setFromCourse(result);
    setToCourse(value);
  }
  return (
    <div className="App">
      <Block value={fromCourse} currency={currencyOne} onChangeCurrency={setCurrencyOne} onChangeValue={onChangeFromCourse} />
      <Block value={toCourse} currency={currencyTwo} onChangeCurrency={setCurrencyTwo} onChangeValue={onChangeToCourse} />
    </div>
  );
}

export default App;
