import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { forumBoard } from '../../actions/ForumActions'
import { formatDate } from '../../helpers/datetime'
import { groups_ID } from '../../config'
import Container from '../Layouts/Container'
import LikeDeslikes from '../../components/LikeDeslikes'
import { getAvatarUrl } from '../../helpers/api'

import { FaNewspaper } from 'react-icons/fa'
import { BiTimeFive } from 'react-icons/bi'

const Home = ({ forumBoard }) => {
	const [newsPost, setNewsPost] = useState([])
	const [postInteraction, setPostInteraction] = useState(false)
	const news = 'last-news'

	function interaction() {
		setPostInteraction(!postInteraction)
	}

	useEffect(() => {
		forumBoard(news)
			.then(({ payload }) => {
				const newData = payload.data.data
				setNewsPost(newData)
			})
			.catch((err) => {
				alert('posts não foram carregados.')
				console.log(err)
			})
	}, [forumBoard, postInteraction])

	return (
		<Container>
			{/* {newsPost && newsPost.length
				? removeDuplicity(newsPost).map((news) => {
						return (
							<div key={news.id} className="card mb-g">
								<div className="card-body pb-0 px-4">
									<div className="d-flex flex-row pb-3 pt-2  border-top-0 border-left-0 border-right-0">
										<div className="d-inline-block align-middle status status-success mr-3">
											<img
												src={getAvatarUrl(news.player.account.avatar)}
												className="profile-image rounded-circle"
												alt="AvatarProfile"
											/>
										</div>
										<h5 className="mb-0 flex-1 text-dark fw-500">
											{news.player.name}
											<small className="m-0 l-h-n">
												{groups_ID[news.player.group_id]}
											</small>
										</h5>

										<span className="js-get-date">
											<BiTimeFive size={20} className="mr-1" />
											{formatDate(news.createdAt)}
										</span>
									</div>
									<hr className="m-0 w-100" />
									<br />
									<h1 className="subheader-title">
										<FaNewspaper size={20} className="mr-2" />
										{news.post_topic}
									</h1>
									<div
										className="pb-3 pt-2 border-top-0 border-left-0 border-right-0 text-muted"
										dangerouslySetInnerHTML={{ __html: news.post_text }}
									/>
									<LikeDeslikes
										id={news.id}
										likes_count={news.likes_count}
										interaction={interaction}
									/>
								</div>
								<div className="card-body py-0 px-4 border-faded border-right-0 border-bottom-0 border-left-0">
									<div className="d-flex flex-column align-items-center">
										<hr className="m-0 w-100" />
									</div>
								</div>
							</div>
						)
				  })
				: null} */}
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		forum: state.forum.forum,
	}
}

export default connect(mapStateToProps, { forumBoard })(Home)
