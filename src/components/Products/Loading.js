import React from 'react'
import {Spinner} from 'react-bootstrap'

function Loading() {
    return (
        <div className='spin-loading'>
            <Spinner 
                animation="border" 
                variant='light' 
                size='lg' 
                style={{width:'100px', height:'100px'}}
            />
        </div>
    )
}

export default Loading
