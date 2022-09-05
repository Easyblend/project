import React from "react";

function Help(props) {
  return (
    <div className="faq-container" onClick={props.focus}>
      <h1 className="faq-heading">FAQ</h1>
      <div className="faq">
        <p className="col-5 col-s-5 col-x-5 question">
          What is A Treasury Bill
        </p>
        <p className="col-5 col-s-5 col-x-5 answer">
          Treasury bills are issued when the government needs money for a short
          period. These bills are issued only by the central government, and the
          interest on them is determined by market forces. What are maturity
          period of treasury bills? Treasury bills, or T-bills, have a maximum
          maturity period of 364 days.
        </p>
      </div>
      <div className="faq">
        <p className="col-5 col-s-5 col-x-5 question">
          What is Interest and How is it Calculated
        </p>
        <p className="col-5 col-s-5 col-x-5 answer">
          Interest is the amount of profit you gain on your treasury bill after
          it's maturity.It is Calculated using the Compound interest formla.
          Roll Over treasury Bill
        </p>
      </div>
      <div className="faq">
        <p className="col-5 col-s-5 col-x-5 question">What is Issue Price</p>
        <p className="col-5 col-s-5 col-x-5 answer">
          An issue price refers to the initial cost of a Treasury bill. In other
          words, its the starting Capital you used to initiate the treasury bill
        </p>
      </div>
      <div className="faq">
        <p className="col-5 col-s-5 col-x-5 question">What is Rate</p>
        <p className="col-5 col-s-5 col-x-5 answer">
          Rate is a Measured percentage of the proportion of your Capital.It
          shows how much Interest will be gained on your capital after a a year.
          Rate is entered as Percentage over a period of a year
        </p>
      </div>
      <div className="faq ">
        <p className="col-5 col-s-5 col-x-5 question">What is duration</p>
        <p className="col-5 col-s-5 col-x-5 answer">
          This is how long you plan to keep the purchased bill. The longer the
          duration, the higher interest it accrues
        </p>
      </div>
      <div className="faq ">
        <p className="col-5 col-s-5 col-x-5 question">
          What is the purchasing date
        </p>
        <p className="col-5 col-s-5 col-x-5 answer">
          This is Simply the day you plan on buying the treasury bill. Feel Free
          to enter past date for bills you have already purchased
        </p>
      </div>
      <button className="btn-sm" onClick={props.click}>
        Got that
      </button>
    </div>
  );
}

export default Help;
