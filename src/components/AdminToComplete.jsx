import React from 'react'

const AdminToComplete = () => {
  return (
    <div>
      <section>
        <h2>Admin To Complete</h2>
        <label htmlFor="productOrderedDate">Product Ordered Date:</label>
        <input type="date" id="productOrderedDate" required />

        <label htmlFor="expectedArrivalDate">Expected Arrival Date:</label>
        <input type="date" id="expectedArrivalDate" required />

        <label htmlFor="arrangedReturnDate">Arranged Return Date:</label>
        <input type="date" id="arrangedReturnDate" required />

        <label htmlFor="attachRemakeForm">Attach Remake Form:</label>
        <select id="attachRemakeForm">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="confirmedArrivalDate">Confirmed Arrival Date:</label>
        <select id="confirmedArrivalDate">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="productInStock">Product in Stock:</label>
        <select id="productInStock">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="jobCompletedBy">Job Completed By:</label>
        <select id="jobCompletedBy" required>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          {/* Add more options as needed */}
        </select>

        <label htmlFor="jobCompletedDate">Job Completed Date:</label>
        <input type="date" id="jobCompletedDate" required />
      </section>

    </div>
  )
}

export default AdminToComplete