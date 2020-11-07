import React from 'react'
import JoditEditor from '../../components/Jodit'

const TextArea = (props) => {
	const { data, name, label, type } = props
	const [value, setValue] = React.useState('')

	React.useEffect(() => {
		const initialValue = data && data[name] ? data[name] : undefined
		if (initialValue !== undefined) setValue(initialValue)
	}, [name, data])

	const handleChange = (event) => {
		if (value === event.target.value) return
		setValue(event.target.value)
	}

	return (
		<div className="form-group">
			<label>{label}</label>
			<JoditEditor
				type={type}
				className="form-control"
				name={name}
				value={value || ''}
				onChange={handleChange}
			/>
		</div>
	)
}

export default TextArea
