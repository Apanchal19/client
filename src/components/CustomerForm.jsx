import React, { useState } from "react";

const CustomerForm = () => {
  let [requestState, setRequestState] = useState("IDLE"); // IDLE, PENDING, SUCCESS, ERROR

  let requestStatusSpan = undefined;
  if (requestState === "IDLE") {
    requestStatusSpan = <span></span>;
  } else if (requestState === "PENDING") {
    requestStatusSpan = <span>Loading...</span>;
  } else if (requestState === "ERROR") {
    requestStatusSpan = <span>Please Try Again Later...</span>;
  } else {
    requestStatusSpan = <span>Done.</span>;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const customerData = {
      name: event.target[0].value,
      age: Number(event.target[1].value),
    };

    console.log(customerData);
    setRequestState("PENDING");
    let response = await fetch("http://localhost:4000/customer-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerData),
    });

    if (!response.ok) {
      setRequestState("ERROR");
    } else {
      setRequestState("SUCCESS");
    }
    console.log(response);
  };
  return (
    <>
      <form
        method="POST"
        onSubmit={handleSubmit}
        action="localhost:4000/customer-data"
      >
        <div>
          <label htmlFor="customerName">Customer Name</label>
          <input id="customerName" name="customerName"></input>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input id="age" name="age" type="number" />
        </div>

        {requestStatusSpan}
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
};

export default CustomerForm;
