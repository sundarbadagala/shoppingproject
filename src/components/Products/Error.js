import React from 'react'
import logo from '../../images/frown-regular.svg'


function Error({error}) {
    return (
        <div className='error'>
            <img src={logo} alt='' className='error-logo'/>
            <h3 className='error-message'>{error}</h3>
        </div>
    )
}

export default Error
