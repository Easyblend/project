import React from "react";

function result(props) {
  const purchaseDate = new Date(props.date);

  let time = new Date(props.date).getTime();
  const duration = props.duration * 86400000 + time;
  const dueDate = new Date(duration);

  console.log(dueDate);
  return (
    <div className="sub-container">
      <h1>RESULTS</h1>
      <div className="container">
        <p className="col-2 col-s-2 col-x-2"> Purchased On</p>
        <p className="col-2 col-s-2 col-x-2">{purchaseDate.toDateString()}</p>
      </div>
      <div className="container ">
        <p className="col-2 col-s-2 col-x-2">Will Mature On</p>
        <p className="col-2 col-s-2 col-x-2">{dueDate.toDateString()}</p>
      </div>
      <div className="container ">
        <p className="col- col-s-2 col-x-2"> Interest Accrues</p>
        <p className="col-2 col-s-2 col-x-2">GHC {props.interest}</p>
      </div>
      <div className="container ">
        <p className="col-3 col-s-2 col-x-2 total "> Total Value</p>
        <p className="col-3 col-s-2 col-x-2 total">GHC {props.total}</p>
      </div>
      <button className="btn-sm" onClick={props.setcalculate}>
        Got that
      </button>
    </div>
  );
}

export default result;
