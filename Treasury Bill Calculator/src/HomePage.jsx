import React, { useState } from "react";
import Result from "./result";
import Help from "./HelpComponent";

const HomePage = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [billType, setBillType] = useState("");
  const [bank, setBank] = useState("");
  const [date, setDate] = useState("");
  const [interest, setInterest] = useState("");
  const [grossReturn, setGrossReturn] = useState("");

  const [isCalculate, setIsCAlcultate] = useState("false");
  const [help, setHelp] = useState(false);
  const sendPrincipal = (e) => {
    e.preventDefault();
    if (principal && rate && billType && date) {
      let int = (
        principal *
        ((1 + rate / 100) ** (billType / 364) - 1)
      ).toFixed(2);

      setInterest(int);
      let total = (Number(int) + Number(principal)).toFixed(2);
      setGrossReturn(total);
      setIsCAlcultate(!isCalculate);
    } else {
      alert("Some fields are empty. Please Fill them");
    }
  };

  const removeIscalculate = () => {
    setIsCAlcultate(!isCalculate);
  };

  const funSetHelp = () => {
    setHelp(!help);
  };

  const unfocus = () => {
    setHelp(false);
  };
  // const calculateResult = (principal, rate, date, billType, bank) => {
  //   const grossReturn = (principal * (rate / 100)) / (365 * billType);
  // };
  return (
    <div>
      <div className="main-container">
        <div className="container-wrapper">
          {!isCalculate && (
            <Result
              interest={interest}
              total={grossReturn}
              date={date}
              setcalculate={removeIscalculate}
              duration={billType}
            />
          )}
          {help && <Help click={funSetHelp} focus={unfocus} />}
          <div className="col-5 col title-finance col-s-5 col-x-5">
            <div>Finance</div>
            <div
              className="helpBtn faq-heading"
              onClick={() => funSetHelp(!help)}
            >
              FAQ
            </div>
          </div>
        </div>
        <div className="container title">
          <div className="col col-3 heading-1 col-s-3 col-x-4">
            Treasury Bill Calculator
          </div>
        </div>
        <div className="container container-sm container-xl">
          <div className="col col-3 col-s-3 col-x-3">
            <form className=" form-container" onSubmit={sendPrincipal}>
              <div className="col-4 col left col-s-4 col-x-4">
                <input
                  type="number"
                  className="input-mediun col-x-4"
                  id="principal"
                  placeholder="Issued Price"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                />
                <input
                  type="number"
                  className="input-mediun col-x-4"
                  id="Rate"
                  placeholder="Rate"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>
              <div className="col-4 col left col-s-4 col-x-4">
                <select
                  name="Bill Type"
                  id="Bill type"
                  className="input-mediun left col-x-4"
                  value={billType}
                  onChange={(e) => setBillType(e.target.value)}
                >
                  <option value="">Duration</option>
                  <option value="91">91 days</option>
                  <option value="182">182 days</option>
                  <option value="364">364 days</option>
                  <option value="728">2 Years</option>
                  <option value="1092">3 Years</option>
                  <option value="1820">5 Years</option>
                  <option value="3640">10 Years</option>
                </select>
                <input
                  type="text"
                  className="input-mediun col-x-4"
                  placeholder="Bank of purchase"
                  value={bank}
                  onChange={(e) => setBank(e.target.value)}
                />
              </div>
              <div className="col col-4 col-s-4 col-x-4 ">
                <input
                  type="text"
                  className="input-large col-x-4"
                  placeholder="
                  Purchasing Date  **format: mm/dd/yy**"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <button className="btn col">Calculate</button>
            </form>
          </div>
          <div className="col col-3 col-s-2 col-x-2">
            <img src="gallery/Investment.png" />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-item col-5 col-no-margin">
          <div className="creator">
            <a href="#" className="footerInfo">
              Creator
            </a>
            <a href="#" className="footerInfo">
              Portfolio
            </a>
          </div>

          <div className="icons">
            <a href="https://www.instagram.com/easy_blend93/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-kumah-692431224/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.twitter.com/easyblend85" target="_blank">
              <i className="fa-brands fa-square-twitter"></i>
            </a>
            <a href="https://github.com/Easyblend/" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
