import React from 'react';
import "../../App.css";

function SimpleForm() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        address: "",
        state: "",
        preferredTime: "",
        terms: false,

    })

    const getFormData = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    return (
        <div>
            {JSON.stringify(formData)}
            <form >
                <div>
                    <label htmlFor="">Full Name:</label>
                    <input onChange={getFormData}
                        type="text" name="fullname" value={formData.fullname} placeholder="Ex: John Doe" required />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input onChange={getFormData}
                        type="text" name="email" value={formData.email} placeholder="someone@example.com" required />
                </div>
                <div>
                    <label htmlFor="">Address:</label>
                    <input onChange={getFormData}
                        type="text" name="address" value={formData.address} placeholder="Address" required />
                </div>
                <div>
                    <label htmlFor="">State:</label>
                    <select onChange={getFormData} name="state" value={formData.state} placeholder='State'>
                        <option value="">Select</option>
                        <option value="dl">Delhi</option>
                        <option value="hr">Haryana</option>
                        <option value="up">Uttar Pradesh</option>
                        <option value="mp">Madhya Pradesh</option>
                        <option value="rj">Rajasthan</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Select a prefer time to call: </label>
                    <label>Morning</label>
                    <input type="radio" name='preferredTime' value="morning" onChange={getFormData} />
                    <label >Evening</label>
                    <input type="radio" name='preferredTime' value="evening" onChange={getFormData} />
                </div>
                <div>
                    <label htmlFor="">Do you agree to accept out <a href='/'>T&C</a></label>
                    <input onChange={getFormData} type="checkbox" name="terms" checked={formData.terms} />
                </div>
            </form>

        </div>
    )
}

export default SimpleForm
