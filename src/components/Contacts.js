import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from "../assets/img/Internet.png";



export const Contacts = () => {
    const [state, handleSubmit] = useForm("mzzbgbdj");
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = async (event) => {
        await handleSubmit(event);
        if (state.succeeded) {
            setSubmitted(true);
        }
    };

    const resetForm = () => {
        setSubmitted(false);
        state.succeeded = false;
    };

    return (
        <section className="contact" id="connect">
            <Container className='bxcontact'>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                    <img src={contactImg} alt='contImg'></img>
                    </Col>

                    <Col size={12} >
                        <h2>Contact</h2>

                                {submitted ? (
                                <div>
                                    <p>Message sent successfully!</p>
                                    <button onClick={resetForm}>Send Another Message</button>
                                    </div>
                                ) : (
                            <form   onSubmit={onSubmit} action="https://formspree.io/f/mzzbgbdj" method="POST">
                                <Row className='contbx'> 
                                    <Col size={12} className="px-1">
                                        <label htmlFor="email">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email" 
                                            name="email"
                                            placeholder='Your email...'
                                        />
                                        <ValidationError 
                                            prefix="Email" 
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </Col>
                                    <Col size={12} className="px-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder='Type your message...'
                                        />
                                        <ValidationError 
                                            prefix="Message" 
                                            field="message"
                                            errors={state.errors}
                                        />
                                        <button type="submit"><span>Send</span></button>
                                    </Col>
                                    
                                </Row>    
                            </form>
                        )}
                    </Col>
                </Row>
        </Container>
    </section>
);
}