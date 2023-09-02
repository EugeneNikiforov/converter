import React from 'react';
import { Block } from "./Block";
import './App.css';

function App() {
  const [rates, setRates] = React.useState({});

  React.useEffect(() => {
    fetch("https://cdn.cur.su/api/latest.json").then(res => res.json()).then((json) => {setRates(json.rates)}).catch((err) => {
      console.warn(err)});
  }, []);
  return (
    <div className="App">
      <Block value={0} currency="UAH" />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default App;
