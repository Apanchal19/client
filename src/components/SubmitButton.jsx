import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import emailjs from 'emailjs-com';
// import axios from 'axios'


const SubmitButton = () => {
    
    const formRef = useRef(null);

    const generatePDF = () => {
        const pdf = new jsPDF();

    // Get form fields and values
    const form = formRef.current;
    const formElements = form.elements;
    const formData = new FormData();

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];

      if (element.type !== 'button' && element.name) {
        const fieldName = element.name;
        const fieldValue = element.value;

        formData.append(fieldName, fieldValue);
      }
    }

    // Generate PDF content
    let pdfContent = '';
    formData.forEach((value, key) => {
      pdfContent += `${key}: ${value}\n`;
    });

    // Set PDF content and save
    pdf.text(pdfContent, 10, 10);
    pdf.save('return_trip_checklist.pdf');

    // Send email with PDF attachment
    const emailData = {
    //   to_email: 'VKhatri@centra.ca, mxu@centra.ca',
    to_email: 'akshay.panchalhp@gmail.com',  
    subject: `W/O# ${formData.get('workOrder')} - Return Trip Checklist`,
      body: pdfContent,
      attachment: pdf.output('blob'),
    };

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully!', response.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div>
      <h1>Return Trip Checklist</h1>

      {/* ...existing form sections and fields... */}

      {/* Submit Button */}
      <button onClick={generatePDF}>Submit</button>

      {/* Hidden form for generating PDF */}
      <form ref={formRef} style={{ display: 'none' }}>
        {/* ...copy all form fields here... */}
      </form>
    </div>
  );
};


export default SubmitButton;