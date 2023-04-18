import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import {
    Form,
    Button,
}
    from "react-bootstrap";
function Contacts() {

    const [email, setEmail] = useState('')
    const [response, setResponse] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [responseDirty, setResponseDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email не може бути порожнім')
    const [responseError, setResponseError] = useState('Пароль не може бути порожнім')
    const [formValid, setFormValid] = useState(false)
    const emailHandler = (e) => {
      setEmail(e.target.value)
      const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!re.test(String(e.target.value.toLowerCase()))) {
        setEmailError('Некоректний email')
      } else {
        setEmailError('')
      }
    }

    const responseHandler = (e) => {
      setResponse(e.target.value)
      if (!e.target.value) {
        setResponseError('Відгук не може бути порожнім')
      } else {
        setResponseError('')
      }
    }
  
    const blurHandler = (e) => {
      switch (e.target.name) {
        case 'email':
          setEmailDirty(true)
          break
        case 'response':
          setResponseDirty(true)
          break
      }
    }
  
    useEffect ( () => {
      if (emailError || responseError) {
          setFormValid(false)
      } else {
          setFormValid(true)
      }
  },[emailError, responseError])

    return (
        <div class="p-5">
            <Form >
                <Form.Group controlId="fromBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    {(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
                    <Form.Control onChange={e => emailHandler(e)} name="email" value={email} onBlur={e => blurHandler(e)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="fromBasicResponse" >
                    <Form.Label>Відгук</Form.Label>
                    {(responseError && responseDirty) && <div style={{ color: "red" }}>{responseError}</div>}
                    <Form.Control as="textarea" onChange={e => responseHandler(e)} name="response" value={response} onBlur={e => blurHandler(e)} type="text" placeholder="Enter response">
                    </Form.Control>
                    
                </Form.Group>
                <Form.Group controlId="fromBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Button disabled={!formValid} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
    );
}

export default Contacts;
