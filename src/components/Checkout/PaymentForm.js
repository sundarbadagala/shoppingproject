import React, { useState } from 'react'
import {Card, Accordion, Button} from 'react-bootstrap'

function PaymentForm({send}) {
    const [paymentMethod, setPaymentMethod]= useState('')
    const [cardNumber, setCardNumber]= useState('')
    const [cardCvv, setCardCvv]= useState('')
    //console.log(paymentMethod, cardNumber, cardCvv)
    return (
        <Card>
            <Card.Header className='text-center'>
                <h4>Payment Form</h4>
            </Card.Header>
            <Card.Body>    
                <form onSubmit={(e)=>send(paymentMethod,cardNumber, cardCvv, e)}>
                <Accordion>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Cash On Devlivery
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        
                        <div onChange={e=>setPaymentMethod(e.target.value)}>
                        <input type="radio" id="cod" name="payment" value="COD" className='mr-2'/>
                        <label htmlFor="cod">Cash On Deliver</label>
                        </div>
                        
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Online Payment
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        
                        <div onChange={e=>setPaymentMethod(e.target.value)}>
                        <input type="radio" id="online" name="payment" value="ONLINE" className='mr-2'/>
                        <label htmlFor="onlie">ONLINE PAYMENT</label>
                        </div>
                        <div>
                            <label htmlFor='card'>Enter Card Details</label><br/>
                            <input 
                                type='number' 
                                id='card' 
                                name='payment' 
                                value={paymentMethod==='ONLINE' ? cardNumber : ''} 
                                onChange={e=>setCardNumber(e.target.value)}
                                className='border p-1'
                                style={{width:'60%'}}
                                required
                                disabled= {paymentMethod === 'ONLINE' ? false : true}
                                maxLength='3'
                            />
                            <input 
                                type='number' 
                                id='card' 
                                name='payment' 
                                value={paymentMethod==='ONLINE' ? cardCvv : ''} 
                                onChange={e=>setCardCvv(e.target.value)}
                                className='border m-2 p-1'
                                style={{width:'20%'}}
                                placeholder='CVV'
                                required
                                disabled= {paymentMethod === 'ONLINE' ? false : true}
                                maxLength={3}
                            />
                        </div>

                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Button block type='submit' variant='dark'>Submit</Button>
                </form>
            </Card.Body>
        </Card>
    )
}

export default PaymentForm
