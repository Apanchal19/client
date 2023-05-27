import React from 'react'

const AdditionalInfo = () => {
  return (
    <div>
        <section>
        <h2>Additional Information</h2>
        <label htmlFor="installerInstructions">Additional Instructions for Installer:</label>
        <textarea id="installerInstructions"></textarea>

        <label htmlFor="completionNotes">Completion Notes if needed:</label>
        <textarea id="completionNotes"></textarea>
      </section>

    </div>
  )
}

export default AdditionalInfo