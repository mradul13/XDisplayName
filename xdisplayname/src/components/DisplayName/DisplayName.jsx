import {React, useState} from "react";
import Form from "../Form/Form";

const DisplayName = ()=>{
    const [formData, setFormData] = useState({firstName: "", lastName: ""})
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onInputChange = (e)=>{
        setIsSubmitted(false)
        const {name, value} = e.target;
        console.log(e.target)
        setFormData({
            ...formData,
            [name] : value
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        setIsSubmitted(true);
    }

    return (
        <>
            <h1>Full Name Display</h1>
            <Form formData={formData} onInputChange={onInputChange} onSubmitButtonClick={handleSubmit}/>
        {isSubmitted? (
            <p>Full Name: {`${formData.firstName} ${formData.lastName}`}</p>
        ): (<></>)}
        </>
        
    )
}

export default DisplayName;