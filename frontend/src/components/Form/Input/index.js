import React from 'react'
import { useForm } from 'react-hook-form'

const Input = ({ name, type, value, onChange, onBlur, register }) => {
	const { register, handleSubmit } = useForm()
	return (
		<>
			<input
				id={name}
				name={name}
				className="form-control"
				type={type}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				ref={register}
			/>
			{/* {error && <p>{error}</p>} */}
		</>
	)
}

export default Input
