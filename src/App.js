import React from 'react';
import { Block } from "./Block";
import './App.css';

function App() {
  const [currencyOne, setCurrencyOne] = React.useState("UAH");
  const [currencyTwo, setCurrencyTwo] = React.useState("USD");
  const [rates, setRates] = React.useState({});

  React.useEffect(() => {
    fetch("https://cdn.cur.su/api/latest.json").then(res => res.json()).then((json) => {setRates(json.rates)}).catch((err) => {
      console.warn(err)});
  }, []);
  return (
    <div className="App">
      <Block value={0} currency={currencyOne} onChangeCurrency={setCurrencyOne} />
      <Block value={0} currency={currencyTwo} onChangeCurrency={setCurrencyTwo} />
    </div>
  );
}

export default App;
