import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import {
	forumList,
	forumCreateBoard,
	setBoardToRemove,
	boardRemove,
} from '../../actions/ForumActions'
import { showNewThread } from '../../assets/js/scripts'
import { getFormData } from '../../helpers/form'
import Container from '../Layouts/Container'
import HatiBoard from './HatiBoard/index'
import CreateThread from './Threads/Create'
import noneAvatar from '../../assets/img/none_avatar.png'
import { closeModalAvatar } from '../../assets/js/scripts'

const Forum = ({
	forumList,
	forumCreateBoard,
	setBoardToRemove,
	boardToRemove,
	boardRemove,
}) => {
	const [categoryLists, setCategoryLists] = React.useState([])
	const history = useHistory()

	React.useEffect(() => {
		forumList().then(({ payload }) => {
			const newData = payload.data.data
			setCategoryLists(newData)
		})
	}, [forumList])

	const cancelDelete = (e) => setBoardToRemove(null)
	const confirmDelete = (e) =>
		boardToRemove ? boardRemove(boardToRemove) : null

	const submitHandler = (event) => {
		event.preventDefault()

		const data = getFormData(event)
		forumCreateBoard(data)
			.then(() => {
				closeModalAvatar()
				history.push('/forum')
			})
			.catch((err) => {
				console.error(err)
			})
	}

	return (
		<Container>
			<div className="row">
				<div className="col-xl-12">
					<div className="input-group input-group-lg mb-g">
						<input
							type="text"
							className="form-control shadow-inset-2"
							placeholder="Search topics"
						/>
						<div className="input-group-append">
							<span className="input-group-text">
								<i className="fal fa-search" />
							</span>
						</div>
					</div>

					<HatiBoard />

					<div className="card mb-g border shadow-0">
						<div className="card-header bg-white p-0">
							<div className="card-header bg-white">
								<div className="row no-gutters align-items-center">
									<div className="col">
										<span className="h6 font-weight-bold text-uppercase">
											General
										</span>
									</div>
									<div className="col d-flex">
										<button
											type="button"
											className="btn btn-outline-primary btn-sm ml-auto mr-2 flex-shrink-0 waves-effect waves-themed"
											data-toggle="modal"
											data-target=".example-modal-centered-transparent"
										>
											Add new Category
										</button>

										<span
											className="btn btn-primary btn-sm flex-shrink-0 waves-effect waves-themed ml-2"
											onClick={() => showNewThread()}
										>
											New Thread
										</span>
									</div>
								</div>
							</div>
							<div className="row no-gutters row-grid align-items-stretch">
								<div className="col-12 col-md">
									<div className="text-uppercase text-muted py-2 px-3">
										Title
									</div>
								</div>
								<div className="col-sm-6 col-md-2 col-xl-1 hidden-md-down">
									<div className="text-uppercase text-muted py-2 px-3">
										Status
									</div>
								</div>

								<div className="col-sm-6 col-md-3 hidden-md-down">
									<div className="text-uppercase text-muted py-2 px-3">
										Last posts
									</div>
								</div>
							</div>
						</div>

						<div
							className="modal fade example-modal-centered-transparent"
							tabIndex={-1}
							role="dialog"
							style={{ display: 'none' }}
							aria-hidden="true"
						>
							<div
								className="modal-dialog modal-dialog-centered modal-transparent"
								role="document"
							>
								<div className="modal-content">
									<form onSubmit={submitHandler}>
										<div className="modal-header">
											<h4 className="modal-title text-white">
												Add new Category
											</h4>
											<button
												type="button"
												className="close text-white"
												data-dismiss="modal"
												aria-label="Close"
											>
												<span aria-hidden="true">
													<i className="fal fa-times" />
												</span>
											</button>
										</div>
										<div className="modal-body">
											<div className="form-group">
												<label
													htmlFor="title"
													className="form-label text-white"
												>
													Title
												</label>
												<input
													type="text"
													id="title"
													name="title"
													className="form-control form-control-lg rounded-pill"
													placeholder="Category Title"
												/>
											</div>

											<div className="form-group">
												<label
													htmlFor="description"
													className="form-label text-white"
												>
													Description
												</label>
												<input
													type="text"
													id="description"
													name="description"
													className="form-control form-control-lg rounded-pill"
													placeholder="Category Description"
												/>
											</div>
										</div>
										<div className="modal-footer">
											<button
												type="button"
												className="btn btn-secondary waves-effect waves-themed"
												data-dismiss="modal"
											>
												Close
											</button>
											<button
												type="submit"
												className="btn btn-primary waves-effect waves-themed"
											>
												Add new Category!
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>

						<div className="card-body p-0">
							<div className="row no-gutters row-grid">
								{categoryLists.map((boards) => {
									const deleteClick = (e) => setBoardToRemove(boards)
									return (
										<div key={boards.id} className="col-12">
											<div className="row no-gutters row-grid align-items-stretch">
												<div className="col-md">
													<div className="p-3">
														<div className="d-flex">
															<div className="d-inline-flex flex-column">
																<Link
																	to={`/forum/${boards.id}`}
																	className="fs-lg fw-500 d-block"
																>
																	{boards.title}
																</Link>

																<div className="d-block text-muted fs-sm">
																	{boards.description}
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-md">
													<div className="p-3">
														<div className="d-flex">
															<div className="d-inline-flex flex-column">
																<span
																	className="btn btn-outline-danger btn-xs waves-effect waves-themed"
																	title="Delete Board"
																	onClick={deleteClick}
																>
																	<i className="fal fa-times" />
																</span>
															</div>
														</div>
													</div>
												</div>
												<div className="col-4 col-md-2 col-xl-1 hidden-md-down">
													<div className="p-3 p-md-3">
														<span className="d-block text-muted">
															{boards.topics} <i>Topics</i>
														</span>
														<span className="d-block text-muted">
															{boards.posts} <i>Posts</i>
														</span>
													</div>
												</div>
												<div className="col-8 col-md-3 hidden-md-down">
													<div className="p-3 p-md-3">
														<div className="d-flex align-items-center">
															<div className="d-inline-block align-middle status status-success status-sm mr-2">
																<img
																	src={noneAvatar}
																	className="profile-image-md rounded-circle d-block"
																	alt=""
																/>
															</div>
															<div className="flex-1 min-width-0">
																<Link
																	to="/last-news"
																	className="d-block text-truncate"
																>
																	Integer id eros vitae leo semper sodales vel a
																	est.
																</Link>
																<div className="text-muted small text-truncate">
																	Today, 02:25{' '}
																	<Link to="/:name" className="text-info">
																		pedro
																	</Link>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									)
								})}

								{boardToRemove ? (
									<div className="alert alert-danger rounded shadow-bold col-xl-6 ml-auto mr-auto pl-3 pr-3">
										<h4 className="alert-heading">Delete Confirmation!</h4>
										<p>
											Are you sure you want to delete, this action cannot be
											undone.
										</p>
										<hr />
										<div className="d-flex justify-content-between">
											<button
												className="btn btn-outline-dark"
												onClick={cancelDelete}
											>
												Cancel
											</button>
											<button
												className="btn btn-outline-danger"
												onClick={confirmDelete}
											>
												Delete
											</button>
										</div>
									</div>
								) : null}

								<CreateThread />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		account: state.account.account,
		forum: state.forum.forums,
		boardToRemove: state.forum.boardToRemove,
	}
}

export default connect(mapStateToProps, {
	forumList,
	forumCreateBoard,
	setBoardToRemove,

	boardRemove,
})(Forum)
