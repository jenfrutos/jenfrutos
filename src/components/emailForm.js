import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EmailMe = ({ handleClose }) => {
    const [validated, setValidated] = useState(false);
    const [sent, setSent] = useState(false);
    const form = useRef();

    const handleAlert = () => {
        setSent(true);
        setTimeout(() => {
            handleClose();
            setSent(false);
        }, 3000);
    }

    const sendEmail = (e) => {
        if (form.current.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);

        if (form.current.checkValidity() === true) {
            e.preventDefault();
            emailjs.sendForm("contact_service", "contact_form", form.current, "S5TPJ8dB3tPwR6FB7")
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            handleAlert();
        }
    }
    console.log(validated);

    return (
        <>
            <Form noValidate validated={validated} ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="user_name" placeholder="Jane Doe" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide your name.
                    </Form.Control.Feedback>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="user_email" placeholder="janedoe@gmail.com" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" required />
                    <Form.Control.Feedback type="invalid">
                        Message cannot be empty.
                    </Form.Control.Feedback>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button type="submit" className="email-btn">{sent ? "Message Sent!" : "Send"}</Button>
                </div>
            </Form>
        </>
    )
}

export default EmailMe;