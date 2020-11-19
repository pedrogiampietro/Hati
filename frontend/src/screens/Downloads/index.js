import React from 'react'
import { Link } from 'react-router-dom'
import { GrPersonalComputer } from 'react-icons/gr'
import { ImHappy } from 'react-icons/im'
import { MdSpeakerNotes } from 'react-icons/md'
import { GrDocumentZip } from 'react-icons/gr'
import Container from '../Layouts/Container'
import './styles.css'

const Downloads = () => {
	return (
		<Container>
			<div className="panel panel-default">
				<div className="panel-heading">
					<Link to="/downloads">Download</Link>
				</div>
				<div className="panel-body">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="downloads__title">
									<div className="downloads-title">
										<span>Our downloads</span>
										<h2>What We do?</h2>
									</div>
									<p>
										we bring the best customer in the community, with a very low
										fps, minimum level of debugs, always focusing on
										improvements.
									</p>
									<Link to="/" className="primary-btn">
										Download
									</Link>
								</div>
							</div>
							<div className="col-lg-8">
								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-6">
										<div className="downloads__item">
											<div className="downloads__item__icon">
												<GrPersonalComputer size={36} />
											</div>
											<h4>Requirements</h4>
											<p>Minimum: OS: Windows 7 </p>
											<p>
												Processor: 2.0 GHz Pentium 4 or equivalent with SSE2
												instruction set support
											</p>
											<p>
												Memory: 4GB RAM Graphics: 128MB; if DirectX 9c or OpenGL
												2.1 are not supported, only software renderer mode is
												available (no light effects)
											</p>
											<p> Hard Drive: min. 150 MB</p>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6">
										<div className="downloads__item">
											<div className="downloads__item__icon">
												<ImHappy size={36} />
											</div>
											<h4>Recommended</h4>
											<p>OS: Windows 7, 10 or newer</p>
											<p>
												Processor: 2.5 GHz Intel Core i3 processor or equivalent
											</p>
											<p>Memory: 8GB RAM Graphics: 512MB; OpenGL 2.1 support</p>
											<p> Hard Drive: min. 150 MB</p>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6">
										<div className="downloads__item">
											<div className="downloads__item__icon">
												<GrDocumentZip size={36} />
											</div>
											<h4>Variable distribution</h4>
											<p>
												ZIP download or no shortcut to the client: You need to
												execute Launcher.exe inside the /bin/ folder to open the
												client. If it fail, execute the Tibia.exe inside the
												/bin/ folder as administrator.
											</p>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6">
										<div className="downloads__item">
											<div className="downloads__item__icon">
												<MdSpeakerNotes size={36} />
											</div>
											<h4>Note!</h4>
											<p>
												You can find HERE some tips like improving FPS, client
												freezing and not responding, importing map, hotkeys,
												configurations and etc.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default Downloads
