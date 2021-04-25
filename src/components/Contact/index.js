// CONTACT FORM

import React, {useState} from 'react';



function ContactForm() {
    
    // this is the useState hook
    // initilize the state of the hook by passing in blank user input fields
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // these can be used to define the initial state which are empty strings
    const {name, email, message} = formState;

    function handleChange (e) {
        // spread operator so that only the name value gets assigned
        setFormState({...formState, [e.target.name]: e.target.value })
        
    }
    // console.log(formState);
    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue = {name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="text"  defaultValue={email} onChange ={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue= {message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit" >Submit</button>
            </form>
        </section>
        );
}

export default ContactForm