// CONTACT FORM

import React, {useState} from 'react';

// this is the useState hook
// initilize the state of the hook by passing in blank user input fields
const [formState, setFormState ] = useState({name: '', email: '', message: ''});

function ContactForm() {
    return(
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="text" name="email" defaultValue={formState.name} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
        );
}

export default ContactForm