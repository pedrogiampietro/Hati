import React from 'react'

const Button = ({ children, disabled, ...props }) => {
	return (
		<button {...props} disabled={disabled}>
			{children}
		</button>
	)
}

export default Button
