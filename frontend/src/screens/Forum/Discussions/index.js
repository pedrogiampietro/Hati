import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { forumSection } from '../../../actions/ForumActions'
import { getAvatarUrl } from '../../../helpers/api'
import { groups_ID } from '../../../config'
import { convertTimestempToDate } from '../../../helpers/datetime'
import Container from '../../Layouts/Container'

import noneAvatar from '../../../assets/img/none_avatar.png'

const Discussions = ({ forumSection }) => {
	const [discussionPost, setDiscussionPost] = React.useState([])
	const { section, id } = useParams()
	const convertToVerify = parseInt(id)

	React.useEffect(() => {
		forumSection(section)
			.then(({ payload }) => {
				const newData = payload.data.data
				setDiscussionPost(newData)
			})
			.catch((err) => {
				alert('error!')
				console.log(err)
			})
	}, [forumSection, section])

	return (
		<Container>
			<div className="row">
				<div className="col-xl-12">
					<div className="input-group input-group-lg mb-g">
						<input
							type="text"
							className="form-control shadow-inset-2"
							placeholder="Search Discussion"
						/>
						<div className="input-group-append">
							<span className="input-group-text">
								<i className="fal fa-search" />
							</span>
						</div>
					</div>

					{discussionPost.map((props, index) => {
						return props.first_post === convertToVerify ? (
							<div key={props.id} className="card mb-g border shadow-0">
								<div className="card-header bg-white p-0">
									<div className="p-3 d-flex flex-row">
										<div className="d-block flex-shrink-0">
											{props.player &&
											props.player.account &&
											props.player.account.avatar ? (
												<img
													src={getAvatarUrl(props.player.account.avatar)}
													className="profile-image rounded-circle"
													alt=""
												/>
											) : (
												<img
													src={noneAvatar}
													className="profile-image rounded-circle"
													alt=""
												/>
											)}
										</div>
										<div className="d-block ml-2">
											<span className="h6 font-weight-bold text-uppercase d-block m-0">
												<Link to="#">{props.player.name}</Link>
											</span>
											<Link
												to="#"
												className="fs-sm text-info h6 fw-500 mb-0 d-block"
											>
												{groups_ID[props.player.group_id]}
											</Link>
											{/* <div className="d-flex mt-1 text-black align-items-center">


											</div> */}
										</div>
									</div>
								</div>
								<div
									className="card-body"
									dangerouslySetInnerHTML={{ __html: props.post_text }}
								></div>
								<div className="card-footer">
									<div className="d-flex align-items-center">
										<span className="text-sm text-muted font-italic">
											<i className="fal fa-clock mr-1" />
											{convertTimestempToDate(props.post_date)}
										</span>
										<Link to="#" className="flex-shrink-0 ml-auto">
											Reply <i className="fal fa-reply ml-2" />{' '}
										</Link>
									</div>
								</div>
							</div>
						) : null
					})}

					<ul className="pagination mt-3">
						<li className="page-item disabled">
							<Link className="page-link" to="#" aria-label="Previous">
								<span aria-hidden="true">
									<i className="fal fa-chevron-left" />
								</span>
							</Link>
						</li>
						<li className="page-item active" aria-current="page">
							<span className="page-link">
								1<span className="sr-only">(current)</span>
							</span>
						</li>
						<li className="page-item">
							<Link className="page-link" to="#">
								2
							</Link>
						</li>
						<li className="page-item">
							<Link className="page-link" to="#">
								3
							</Link>
						</li>
						<li className="page-item">
							<Link className="page-link" to="#" aria-label="Next">
								<span aria-hidden="true">
									<i className="fal fa-chevron-right" />
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		account: state.account.account,
	}
}

export default connect(mapStateToProps, { forumSection })(Discussions)
