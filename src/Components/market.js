import News1 from '../img/7th-July-6.jpg'
import IndianNews from '../img/india-bill1.jpg'
import ChinaNews from '../img/china-flag-and-bitcoin.jpg'



export default function Market() {
    return (
      <div>
      
        <div className="d-flex justify-content-center news-container">
          
            <div className="card cards">
              <div className="card-header">
                <img src={News1} alt="img" className="card-img" />
              </div>
              <div className="card-body">
                <h2>
                  {" "}
                  Bitcoin’s Net Exchange Flows Flip Bearish as
                  Cryptocurrency Struggles for Directional Bias
                </h2>
              </div>
            </div>
      

            <div className="card cards">
              <div className="card-header">
                <img src={IndianNews} alt="img" className="card-img" />
              </div>
              <div className="card-body">
                <h2>
                  {" "}
                  Indian Government to Make Additional Changes to Crypto
                  Bill: Report
                </h2>
              </div>

            </div>
        

      
            <div className="card cards">
              <div className="card-header">
                <img
                  src={ChinaNews}
                  alt="img"
                  className="card-img"
                />
              </div>
              <div className="card-body">
                <h2>
                  {" "}
                  China vows to crack down on bitcoin mining, trading
                  activities
                </h2>
              </div>

            </div>
       
        </div>
       
      </div>
    );
  }