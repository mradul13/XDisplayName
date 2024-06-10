import React from "react";

const Form = ({formData, onInputChange, onSubmitButtonClick})=>{
    return (
        <form onSubmit={onSubmitButtonClick}>
            <label style={{"display": "block"}}>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={onInputChange}
                    required
                />
            </label>
            <label style={{"display": "block"}}>
                Last Name:
                <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={onInputChange}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;