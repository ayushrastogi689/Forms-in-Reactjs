import React, { useState } from "react";
import Input from "./Input";
import Label from "./Label";
import Button from "./Button";
import { validateForm } from "../../utils/Validation";
import "../../App.css";

function OptimizedForm() {
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

  const submitForm = (event) => {
    event.preventDefault();

    const isFormEntryValid = validateForm(formData);

    setFormError({ ...isFormEntryValid });

    if (Object.keys(isFormEntryValid).length === 0) {
      console.log("Form is valid and submitted successfully");
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <div>
      <div>
        <h3>Final Optimized form</h3>
      </div>
      {JSON.stringify(formData)}
      <form>
        <div>
          <Label labelName="Full Name:"></Label>
          <Input
            onChange={getFormData}
            type="text"
            name="fullname"
            value={formData.fullname}
            placeholder="Ex: John Doe"
            required
          />
        </div>
        <div>
          <Label labelName="Email:" />
          <Input
            onChange={getFormData}
            type="text"
            name="email"
            value={formData.email}
            placeholder="someone@example.com"
            required
          />
        </div>
        <div>
          <Label labelName="Address:(optional)" />
          <Input
            onChange={getFormData}
            type="text"
            name="address"
            value={formData.address}
            placeholder="Address"
            required
          />
        </div>
        <div>
          <Label labelName="State:" />
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
          <Label labelName="Select a prefer time to call:" />
          <Label labelName="Morning" />
          <Input
            type="radio"
            name="preferredTime"
            value="morning"
            onChange={getFormData}
          />
          <Label labelName="Evening" />
          <Input
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
          <Input
            onChange={getFormData}
            type="checkbox"
            name="terms"
            checked={formData.terms}
          />
        </div>
        <Button onClick={submitForm} buttonLabel="Submit" />
      </form>
      {formError && <h5>{JSON.stringify(formError)}</h5>}
    </div>
  );
}

export default OptimizedForm;
