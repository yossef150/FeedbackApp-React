import React from 'react'
import PropTypes from 'prop-types'
function Button({children, type = 'button', version = 'primary', isDisabled = false}) {
  return (
    <button type={type} className = {`btn btn-${version}`} disabled = {isDisabled}>
      {children}
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    version: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button
