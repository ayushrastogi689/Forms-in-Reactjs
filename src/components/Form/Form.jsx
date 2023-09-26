import React, { useState } from "react";
import "../../App.css";

function Form() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    address: "",
    state: "",
    preferredTime: "",
    terms: false,
  });

  const getFormData = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const [formError, setFormError] = useState();

  const validateForm = () => {
    const errors = {};

    if (!nameValidation(formData.fullname)) {
      errors.fullname = "Full Name length is not valid";
    }

    if (!emailValidation(formData.email)) {
      errors.email = "Email id is not valid";
    }

    if (!formData.state) {
      errors.state = "State is not selected";
    }

    if (!formData.preferredTime) {
      errors.preferredTime = "Preferred Time not selected";
    }

    if (!formData.terms) {
      errors.terms = "Terms & Condition not accepted";
    }

    setFormError({ ...errors });
    return errors;
  };

  const nameValidation = (fullname) => {
    return fullname.length > 3 && fullname.length < 30;
  };

  const emailValidation = (email) => {
    return (
      /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,4}$/.test(email) &&
      email.length > 5
    );
  };

  const submitForm = (event) => {
    event.preventDefault();

    const isFormEntryValid = validateForm();
    if (Object.keys(isFormEntryValid).length === 0) {
      console.log("Form is valid and submitted successfully");
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <div>
      {JSON.stringify(formData)}
      <form>
        <div>
          <label>Full Name:</label>
          <input
            onChange={getFormData}
            type="text"
            name="fullname"
            value={formData.fullname}
            placeholder="Ex: John Doe"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            onChange={getFormData}
            type="text"
            name="email"
            value={formData.email}
            placeholder="someone@example.com"
            required
          />
        </div>
        <div>
          <label>Address:(optional)</label>
          <input
            onChange={getFormData}
            type="text"
            name="address"
            value={formData.address}
            placeholder="Address"
            required
          />
        </div>
        <div>
          <label>State:</label>
          <select
            onChange={getFormData}
            name="state"
            value={formData.state}
            placeholder="State"
          >
            <option value="">Select</option>
            <option value="dl">Delhi</option>
            <option value="hr">Haryana</option>
            <option value="up">Uttar Pradesh</option>
            <option value="mp">Madhya Pradesh</option>
            <option value="rj">Rajasthan</option>
          </select>
        </div>
        <div>
          <label>Select a prefer time to call: </label>
          <label>Morning</label>
          <input
            type="radio"
            name="preferredTime"
            value="morning"
            onChange={getFormData}
          />
          <label>Evening</label>
          <input
            type="radio"
            name="preferredTime"
            value="evening"
            onChange={getFormData}
          />
        </div>
        <div>
          <label>
            Do you agree to accept out <a href="/">T&C</a>
          </label>
          <input
            onChange={getFormData}
            type="checkbox"
            name="terms"
            checked={formData.terms}
          />
        </div>
        <button onClick={submitForm}>Submit</button>
      </form>
      {formError && <h5>{JSON.stringify(formError)}</h5>}
    </div>
  );
}

export default Form;
