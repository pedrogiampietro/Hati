import React from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { editPost } from '../../../../actions/ForumActions'

import { getFormData } from '../../../../helpers/FormData'
import TextArea from '../../../../components/TextArea'
import Container from '../../../Layouts/Container'

const EditPost = ({ forum, editPost }) => {
	const { id } = useParams()
	const history = useHistory()

	React.useEffect(() => {
		editPost(id)
	}, [editPost, id])

	const submitHandler = (event) => {
		event.preventDefault()
		const data = getFormData(event)

		editPost(id, data)
		history.goBack()
	}

	if (!forum) history.goBack()

	return (
		<Container>
			<div className="panel panel-default">
				<div className="panel-heading">Edit Post</div>
				<div className="panel-body">
					<form onSubmit={submitHandler}>
						<TextArea
							label="Edit Post"
							name="body_text"
							type="text"
							data={forum}
						/>

						<div align="right">
							<a href="/forum/thread/483/1">
								<button type="button" className="btn btn-outline-primary mr-2">
									Back
								</button>
							</a>

							<button type="submit" className="btn btn-primary">
								Submit Reply
							</button>
						</div>
					</form>
				</div>
			</div>
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		account: state.account.account,
		forum: state.forum.forum,
	}
}

export default connect(mapStateToProps, { editPost })(EditPost)
