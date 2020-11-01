import React, { useEffect, useState } from 'react'
import { getPlayerName } from '../../helpers/account'
import { upLike, unLike } from '../../actions/ForumActions'
import { connect } from 'react-redux'

import { ImHeart } from 'react-icons/im'

const LikeDeslikes = ({ upLike, account, id, likes_count, interaction }) => {
	// const { id, likes_count, interaction } = props.propriety

	const [characterLogged, setCharacterLogged] = useState()

	useEffect(() => {
		if (account) setCharacterLogged(getPlayerName())
	}, [account])

	async function likeANews() {
		await upLike(id)
		interaction()
	}

	async function unlikeANews() {
		await unLike(id)
		interaction()
	}

	return (
		<div>
			<div className="d-flex align-items-center demo-h-spacing py-3">
				{account ? (
					<span
						id={`data-post-${id}`}
						className="d-inline-flex align-items-center text-dark"
					>
						{likes_count?.includes(characterLogged) ? (
							<span className="width-3 height-2 d-inline-flex align-items-center justify-content-center position-relative h1 ">
								<ImHeart
									className="text-danger"
									onClick={() => {
										unlikeANews()
									}}
								/>
								<span className="badge badge-icon pos-top pos-right">
									{likes_count?.length}
								</span>
							</span>
						) : (
							<span className="width-3 height-2 d-inline-flex align-items-center justify-content-center position-relative h1 ">
								<ImHeart
									onClick={() => {
										likeANews()
									}}
								/>

								<span className="badge badge-icon pos-top pos-right">
									{likes_count?.length}
								</span>
							</span>
						)}
					</span>
				) : (
					<span className="width-3 height-2 d-inline-flex align-items-center justify-content-center position-relative h1 ">
						<ImHeart />
						<span className="badge badge-icon pos-top pos-right">
							{likes_count?.length}
						</span>
					</span>
				)}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		post: state.post.post,
		account: state.account.account,
	}
}

export default connect(mapStateToProps, { upLike, getPlayerName })(LikeDeslikes)
