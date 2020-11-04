import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFormData } from '../../../../helpers/form'
import { forumNewThread } from '../../../../actions/ForumActions'

const CreateThread = ({ forumNewThread }) => {
	const subbmitHandle = (event) => {
		event.preventDefault()

		const data = getFormData(event)
		forumNewThread(data)
	}

	return (
		<form onSubmit={subbmitHandle}>
			<div
				id="panel-compose"
				className="panel w-100 position-fixed pos-bottom pos-right mb-0 z-index-cloud mr-lg-4 shadow-3 border-bottom-left-radius-0 border-bottom-right-radius-0 expand-full-height-on-mobile expand-full-width-on-mobile shadow "
				style={{ maxWidth: '40rem', height: '35rem', display: '' }}
			>
				<div className="position-relative h-100 w-100 d-flex flex-column">
					{/* desktop view */}
					<div className="panel-hdr bg-fusion-600 height-4 d-none d-sm-none d-lg-flex">
						<h4 className="flex-1 fs-lg color-white mb-0 pl-3">New Thread</h4>
						<div className="panel-toolbar pr-2">
							<Link
								to="fullscren"
								className="btn btn-icon btn-icon-light fs-xl mr-1 waves-effect waves-themed"
								data-action="panel-fullscreen"
								data-toggle="tooltip"
								data-offset="0,10"
								data-original-title="Fullscreen"
								data-placement="bottom"
							>
								<i className="fal fa-expand-alt" />
							</Link>
							<Link
								to="saveandclose"
								className="btn btn-icon btn-icon-light fs-xl waves-effect waves-themed"
								data-action="toggle"
								data-class="d-flex"
								data-target="#panel-compose"
								data-toggle="tooltip"
								data-original-title="Save & Close"
								data-placement="bottom"
							>
								<i className="fal fa-times" />
							</Link>
						</div>
					</div>
					{/* end desktop view */}
					{/* mobile view */}
					<div className="d-flex d-lg-none align-items-center px-3 py-3 bg-faded  border-faded border-top-0 border-left-0 border-right-0 flex-shrink-0">
						{/* button for mobile */}
						{/* end button for mobile */}
						<h3 className="subheader-title">New message</h3>
						<div className="ml-auto">
							<button
								type="button"
								className="btn btn-outline-danger waves-effect waves-themed"
								data-action="toggle"
								data-class="d-flex"
								data-target="#panel-compose"
							>
								Cancel
							</button>
						</div>
					</div>
					{/* end mobile view */}
					<div className="panel-container show rounded-0 flex-1 d-flex flex-column">
						<div className="px-3">
							<input
								type="text"
								name="character_name"
								placeholder="Character"
								className="form-control border-top-0 border-left-0 border-right-0 px-0 rounded-0 fs-md mt-2 pr-5"
								tabIndex={2}
							/>

							<input
								type="text"
								name="title"
								placeholder="Title"
								className="form-control border-top-0 border-left-0 border-right-0 px-0 rounded-0 fs-md mt-2"
								tabIndex={4}
							/>
						</div>
						<div className="flex-1" style={{ overflowY: 'auto' }}>
							<textarea
								className="form-control"
								name="post_text"
								rows="15"
								required
							></textarea>
						</div>
						<div className="px-3 py-4 d-flex flex-row align-items-center flex-wrap flex-shrink-0">
							<button
								type="submit"
								className="btn btn-info mr-3 waves-effect waves-themed"
							>
								Send
							</button>
							<a
								href="javascript:void(0);"
								className="btn btn-icon fs-xl mr-1 waves-effect waves-themed"
								data-toggle="tooltip"
								data-original-title="Formatting options"
								data-placement="top"
							>
								<i className="fas fa-font color-fusion-300" />
							</a>
							<a
								href="javascript:void(0);"
								className="btn btn-icon fs-xl mr-1 waves-effect waves-themed"
								data-toggle="tooltip"
								data-original-title="Attach files"
								data-placement="top"
							>
								<i className="fas fa-paperclip color-fusion-300" />
							</a>
							<a
								href="javascript:void(0);"
								className="btn btn-icon fs-xl mr-1 waves-effect waves-themed"
								data-toggle="tooltip"
								data-original-title="Insert photo"
								data-placement="top"
							>
								<i className="fas fa-camera color-fusion-300" />
							</a>
							<div className="ml-auto">
								<a
									href="javascript:void(0);"
									className="btn btn-icon fs-xl waves-effect waves-themed"
									data-toggle="tooltip"
									data-original-title="Disregard draft"
									data-placement="top"
								>
									<i className="fas fa-trash color-fusion-300" />
								</a>
								<a
									href="javascript:void(0);"
									className="btn btn-icon fs-xl width-1 waves-effect waves-themed"
									data-toggle="tooltip"
									data-original-title="More options"
									data-placement="top"
								>
									<i className="fas fa-ellipsis-v-alt color-fusion-300" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}
const mapStateToProps = (state) => {
	return {
		account: state.account.account,
		post: state.post.post,
	}
}

export default connect(mapStateToProps, { forumNewThread })(CreateThread)
