// CONTACT FORM

import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';



function ContactForm() {

    // this is the useState hook
    // initilize the state of the hook by passing in blank user input fields
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // this sets useState of errorMessage to an empty string
    const [errorMessage, setErrorMessage] = useState('');
    // these can be used to define the initial state which are empty strings
    const { name, email, message } = formState;

    // console.log(formState);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }

   const handleChange = (e) => {
        // checking if email is a valid format 
        // if the input is 'email', assign it to isValid variable and check with validateEmail helper function
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
       
        // this if statement will only run if there isn't an error message
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
        // console.log('this is error message', errorMessage);
    }


    return (
        <section>
            <h1 data-testid="h1tag">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="text" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text"> {errorMessage}</p>
                    </div>
                )}
                <button data-testid="submitbtn" type="submit" >Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;