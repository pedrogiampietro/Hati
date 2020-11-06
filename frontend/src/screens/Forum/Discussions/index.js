import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { forumDiscussion } from '../../../actions/ForumActions'
import { getAvatarUrl } from '../../../helpers/api'

import { formatDate } from '../../../helpers/datetime'
import Container from '../../Layouts/Container'
import LikeDeslikes from '../../../components/LikeDeslikes'
import { BsFillReplyFill } from 'react-icons/bs'
import noneAvatar from '../../../assets/img/none_avatar.png'

const Discussions = ({ forumDiscussion }) => {
	const [discussionPost, setDiscussionPost] = React.useState([])
	const [postInteraction, setPostInteraction] = React.useState(false)
	const { board_id, discussion } = useParams()

	function interaction() {
		setPostInteraction(!postInteraction)
	}

	React.useEffect(() => {
		forumDiscussion(board_id, discussion)
			.then(({ payload }) => {
				const newData = payload.data.data
				setDiscussionPost(newData)
			})
			.catch((err) => {
				alert('error!')
				console.log(err)
			})
	}, [forumDiscussion, postInteraction, board_id, discussion])

	console.log(discussionPost)

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

					<div className="panel panel-default hidden-xs hidden-sm">
						<div className="panel-heading">
							{formatDate(discussionPost.createdAt)}
						</div>
						<div className="panel-body forum-content-body">
							<div className="row">
								<div className="col-md-2" align="center">
									<Link
										className="forum-profilename forum-profilename-color7 notranslate"
										to={`/character/${discussionPost.character_name}`}
									>
										{discussionPost.character_name}
									</Link>
									<br />
									{discussionPost.player &&
									discussionPost.player.account &&
									discussionPost.player.account.avatar ? (
										<img
											src={getAvatarUrl(discussionPost.player.account.avatar)}
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
									<br />
									<br />
									Posts: 221
									<br />
									Likes: <span id="like_count_150">135</span>
									<br />
									Country: BR
									<br />
									Member since: 10/12/2019
									<br />
									Discord: Pedro#6666
									<br />
								</div>
								<div className="col-md-10">{discussionPost.body_text}</div>
							</div>

							<br />
							<div className="row">
								<div className="col-md-2">Administrador// IMG LATER</div>
								<div className="col-md-4"></div>
								<div className="col-md-6" align="right">
									<LikeDeslikes
										id={discussionPost.id}
										likes_count={discussionPost.likes_count}
										interaction={interaction}
									/>
									<a href="/forum/post/reply/150">
										<button className="btn btn-sm btn-default">
											<BsFillReplyFill size={20} /> Reply
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>

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

export default connect(mapStateToProps, { forumDiscussion })(Discussions)
