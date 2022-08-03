import './App.css';
import React from 'react';
import './App.css'
import About from './Components/about';
import Market from './Components/market';
import News1 from './Components/news/news1';
import News2 from './Components/news/news3';
import News3 from './Components/news/news3';
import Main from './main';
import { Routes, Route, Link,Outlet } from "react-router-dom";

const mocked = {
  time: {
    updated: "Jan 6, 2022 12:41:00 UTC",
    updatedISO: "2022-01-06T12:41:00+00:00",
    updateduk: "Jan 6, 2022 at 12:41 GMT",
  },
  disclaimer:
    "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
  chartName: "Bitcoin",
  bpi: {
    USD: {
      code: "USD",
      symbol: "&#36;",
      rate: "42,795.5183",
      description: "United States Dollar",
      rate_float: 42795.5183,
    },
    GBP: {
      code: "GBP",
      symbol: "&pound;",
      rate: "31,614.5900",
      description: "British Pound Sterling",
      rate_float: 31614.59,
    },
    EUR: {
      code: "EUR",
      symbol: "&euro;",
      rate: "37,827.3438",
      description: "Euro",
      rate_float: 37827.3438,
    },
  },
};

// ReactDOM.render(<MountLifeCycle />, document.getElementById("root"));
const COLORS = {
  true: "green",
  false: "red",
  null: "gray",
};

const useCurrency = (currency) => {
  const [isGrowing, setIsGrowing] = React.useState(null);
  // const [oldRate, setOldRate] = React.useState(null);
  const [rate, setRate] = React.useState(null);

  React.useEffect(() => {
    // latest state of server
    async function grabData() {
      const data = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      ).then((res) => res.json());

      const serverRate = data.bpi[currency].rate_float;

      if (!rate) setRate(serverRate);
      // no rate not isGrowing
      else if (rate !== serverRate) {
        if (serverRate < rate) setIsGrowing(false);
        else setIsGrowing(true);

        setRate(serverRate);
      }
    }

    let timer = setInterval(grabData, 1000);
    return () => clearInterval(timer);
  }, [rate]);

  return [isGrowing, rate];

  // {}
};

const App = () => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <a className="navbar-brand brand" href="#">
            BIT MARK
          </a>
          <Link to='/' className="nav-link n_link">
            Home
          </Link>
          <Link to='/marketNews' className="nav-link n_link" href="market.html">
            Market News
          </Link>
          <Link to='/about' className="nav-link n_link" href="about.html">
            About us
          </Link>
        </div>
      </nav>
     
     
      <footer className="foot"></footer>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/marketnews" element={<Market/>} />
      
       
      </Routes>
    </div>
  );
};

export default App;
