import React, { useEffect, useState } from 'react'
import { getPlayerName } from '../../helpers/account'
import { connect } from 'react-redux'

const LikeDeslikes = props => {
	const { id, likes_count } = props.propriety
	const [characterLogged, setCharacterLogged] = useState(
		getPlayerName()[0].name
	)

	const [Likes, setLikes] = useState(0)
	const [Liked, setLiked] = useState(false)

	const onLike = () => {
		if (Liked === false) {
			setLikes(Likes + 1)
			setLiked(true)

			console.log('-- likes', Likes)
			console.log('-- likes', Liked)
		} else {
			setLikes(Likes - 1)
			setLiked(false)
			console.log('-- dislike', Likes)
			console.log('-- dislike', Liked)
		}
	}

	const handleClick = e => {
		console.log(e.currentTarget.id)
	}

	return (
		<div>
			<div className="d-flex align-items-center demo-h-spacing py-3">
				<span
					id={`data-post-${id}`}
					className="d-inline-flex align-items-center text-dark"
					onClick={onLike}
				>
					{likes_count.includes(characterLogged) ? (
						<i className="fas fa-heart fs-xs mr-1 text-danger"></i>
					) : (
						<i className="fas fa-heart fs-xs mr-1"></i>
					)}

					{likes_count.length > 1 ? (
						<span id={`likes-count-${id}`}>{likes_count.length} Likes</span>
					) : likes_count.length ? (
						<span id={`likes-count-${id}`}>{likes_count.length} Like</span>
					) : null}
				</span>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		post: state.post.post,
	}
}

export default connect(mapStateToProps, {})(LikeDeslikes)
