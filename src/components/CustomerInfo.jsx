import React from 'react'
// import axios from 'axios'
const CustomerInfo = () => {
  return (
    <div>
        
      <section>
        <h2>Customer Info</h2>
       
        <label htmlFor="customerName">Customer Name:</label>
        <input type="text" id="customerName" />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" />

        <label htmlFor="installDate">Last Install Date:</label>
        <input type="date" id="installDate" />

        <label htmlFor="reason">Reason for return trip:</label>
        <textarea id="reason"></textarea>

        <label htmlFor="newProduct">Does this return trip require new product?</label>
        <select id="newProduct">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="itemNumbers">Item #'s &amp; Description:</label>
        <textarea id="itemNumbers"></textarea>

        <label htmlFor="photoDefects">Photo of defects required for remakes. Complete?</label>
        <select id="photoDefects">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="signedPaid">Has the customer signed off/paid for job?</label>
        <select id="signedPaid">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="returnDate">Have you given them a return date?</label>
        <select id="returnDate">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        {/* 'Date' field is shown only if returnDate is 'yes' */}
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" />
      </section>
    </div>
  )
}

export default CustomerInfo



    
      

