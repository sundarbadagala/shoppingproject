import React from 'react'
import {Card, Row, Col, Button} from 'react-bootstrap'
import {Formik, Form, Field, ErrorMessage} from 'formik'

const initialValues={
    firstName:'',
    lastName:'',
    address1:'',
    mail:'',
    city:'',
    pin:''
}


const validate=(data)=>{
    const errors={}

    if(!data.firstName){
        errors.firstName = 'Enter Your First Name'
    }else if(!data.lastName){
        errors.lastName = 'Enter Your lastName'
    }else if(!data.mail){
        errors.mail= 'Enter Your Mail'
    }else if(!/^([a-z0-9._-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/i.test(data.mail)){
        errors.mail='Invalid mail'
    }else if(!data.city){
        errors.city= 'Enter Your City'
    }else if(!data.pin){
        errors.pin = 'Enter Your Pin'
    }else if(!data.address1){
        errors.address1='Enter Your address'
    }

    return errors
}
function AddressForm({sendAddress}) {
    

   
   
    return (
        
        <Card>
        <Card.Header className='text-center p-1'><h4>Form submision</h4></Card.Header>
        <Card.Body>
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={(values)=>sendAddress(values)}
        >
            <Form>
            <Row className='text-left'>
                <Col className='p-1' md={6} xs={6}>
                <label htmlFor='firstName'>
                    First Name
                </label>
                <Field 
                    type='text' 
                    name='firstName' 
                    placeholder='first Name' 
                    className='p-1 border rounded' 
                    style={{width:'100%'}}
                />
                </Col>
                <Col className='p-1' md={6}  xs={6}>
                <label htmlFor='lastName'>
                    Last Name
                </label>
                <Field 
                    type='text' 
                    name='lastName' 
                    placeholder='Last Name'  
                    className='p-1 border rounded' 
                    style={{width:'100%'}}
                />
                </Col>
            </Row>
            <Row className='text-left'>
                <Col className='p-1' md={12}>
                <label htmlFor='mail'>
                    Mail
                </label>
                <Field 
                    type='text' 
                    name='mail' 
                    placeholder='Mail' 
                    className='p-1 border rounded' 
                    style={{width:'100%'}}
                />
                </Col>
                
            </Row>
            <Row className='text-left'>
                <Col className='p-1' md={6} xs={6} >
                <label htmlFor='city'>
                    City
                </label>
                <Field 
                    type='text' 
                    name='city' 
                    placeholder='City' 
                    className='p-1 border rounded' 
                    style={{width:'100%'}}
                />
                </Col>
                <Col className='p-1' md={6} xs={6}>
                <label htmlFor='pin'>
                    Pin
                </label>
                <Field 
                    type='number' 
                    name='pin' 
                    placeholder='Pin'  
                    className='p-1 border rounded' 
                    style={{width:'100%'}}
                />
                </Col>
            </Row>
            <Row className='text-left'>
                <Col className=' p-1' md={12}>
                <label htmlFor='address1'>
                    Address
                </label><br/>
                <Field 
                    type='text' 
                    name='address1' 
                    placeholder='Address' 
                    className='p-1 border rounded' 
                    style={{width:"100%"}}
                />
            </Col>
            </Row>
           
            <Row>
                <Col className='text-danger font-weight-bold text-center'>
                    <ErrorMessage name='firstName'/>
                    <ErrorMessage name='lastName'/>
                    <ErrorMessage name='mail'/>
                    <ErrorMessage name='city'/>
                    <ErrorMessage name='pin'/>
                    <ErrorMessage name='address1'/>
                </Col>
            </Row>
            <Row>
                <Col className='m-1 p-0'>
                <Button block type='submit' variant='dark'>
                    Submit
                </Button>
                </Col>
            </Row>
            </Form>
        </Formik>
        </Card.Body>
        </Card>
        
        )
    }
    
export default AddressForm