import React from 'react'
import './App.css';
import About from './Components/about';
import Market from './Components/market';
import Bit12 from './img/بیتکوین-12.jpg'
import Bithack from './img/bitcoin-hack-photo.jpg'
import Chart from './img/OlGR8c.jpg'
import Bitchash from './img/bitcoin-btc-cash-euro-bills_89378-569.jpg'
import special from './img/https___specials-images.forbesimg.com_imageserve_869259640_0x0.jpg'
import pound from './img/_116329010_tv064829922.jpg'
import { Routes, Route, Link } from "react-router-dom";
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
  
  const Main = () => {
    const [usdGrowing, usdRate] = useCurrency("USD");
  
    const [gbpGrowing, gbpRate] = useCurrency("GBP");
    const [eurGrowing, eurRate] = useCurrency("EUR");
    return (
      <div>
      
        <div id="demo" className="carousel slide" data-ride="carousel">
        
          <div className="carousel-inner">
            <div className="carousel-item">
              <img
                src={Bit12}
                alt="New York"
                className="c_img"
              />
            </div>
            <div className="carousel-item active">
              <img
                src={Bithack}
                alt="Los Angeles"
                className="c_img"
              />
            </div>
            <div className="carousel-item">
              <img src={Chart} alt="Chicago" className="c_img" />
            </div>
          </div>
  
          <div>
            <div className="ui segment">
              <p/>
              <div className="ui active dimmer">
                <div className="ui loader">
                  <div className="spinner-grow text-dark spinner"/>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"/>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"/>
          </a>
        </div>
  
        <div className="card-container">
          <div className="card cards">
            <div className="card-header">
              <img
                src={Bitchash}
                alt="img"
                className="card-img"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">EUR/BIT</h4>
              price:
              <p style={{ color: COLORS[eurGrowing] }}> {eurRate}&euro; </p>
              <div>
                {" "}
                <a href="chart2.html" className="mylink">
                  see price chart
                </a>
              </div>
            </div>
          </div>
          <div className="card cards">
            <div className="card-header">
              <img
                src={special}
                alt="img"
                className="card-img"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">USD/BIT</h4>
              price:{" "}
              <p style={{ color: COLORS[usdGrowing] }}> {usdRate}&#36;</p>
              <div>
                {" "}
                <a href="chart.html" className="mylink">
                  see price chart
                </a>
              </div>
            </div>
          </div>
          <div className="card cards">
            <div className="card-header">
              <img
                src={pound}
                alt="img"
                className="card-img"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">GBP/BIT</h4>
              price:
              <p style={{ color: COLORS[gbpGrowing] }}>
                {" "}
                {gbpRate}&pound;{" "}
              </p>
              <div>
                <a href="chart3.html" className="mylink">
                  see price chart
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="foot"></footer>
        
      </div>
    );
  };
  
  export default Main;
