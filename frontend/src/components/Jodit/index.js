import React, { useRef } from 'react'
import JoditEditor from 'jodit-react'

const TextEditor = ({ name }) => {
	const editor = useRef(null)
	const config = {
		readonly: false,
		height: 300,
	}
	return (
		<div>
			<JoditEditor
				ref={editor}
				config={config}
				name={name}
				tabIndex={1} // tabIndex of textarea
			/>
		</div>
	)
}

export default TextEditor
