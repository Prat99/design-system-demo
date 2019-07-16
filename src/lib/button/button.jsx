import React from 'react'
import PropTypes from 'prop-types';


const Button = ({onclickHandler, children}) => {
    return <button className='btn btn-default'>{children}</button>
}

Button.propTypes = {
 children : PropTypes.string.isRequired,
 onclickHandler : PropTypes.func
}

Button.defaultProps = {
    children : 'Button'
} 


export default Button;