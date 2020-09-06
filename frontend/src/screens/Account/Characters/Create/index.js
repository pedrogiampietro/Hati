import React from 'react';
import { connect } from 'react-redux'
import { getFormData } from '../../../../helpers/form'
import { playerCreate } from '../../../../actions/PlayerActions'

const CreateCharacter = ({ playerCreate }) => {

    const submitHandler = (e) => {
        e.preventDefault()
        const data = getFormData(e)
        playerCreate(data)
    }

    return (
        <div>
            <h1>Create Character</h1>
        <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" required />
                    </div>
          
                    <div className="form-check form-check-radio">
                        <p className="category">Sex</p>
                        <div className="form-check form-check-radio">
                            <label className="form-check-label">
                            <input className="form-check-input" type="radio" name="sex" id="sex" value="male" defaultChecked />
                            <span className="form-check-sign"></span>
                            Male
                            </label>
                        </div>
                        <div className="form-check form-check-radio">
                            <label className="form-check-label">
                            <input className="form-check-input" type="radio" name="sex" id="sex" value="female" />
                            <span className="form-check-sign"></span>
                            Female
                            </label>
                        </div>
                    </div>
          
                    <div>
                        <button className="btn btn-dark btn-round">Submit</button>
                    </div>
                </form>
            </div>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        player: state.player.player
    }
}


export default connect(mapStateToProps, { playerCreate })(CreateCharacter)