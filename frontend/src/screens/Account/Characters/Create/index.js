import React from 'react';
import Menu from '../../../Layouts/Menu'

const CreateCharacter = () => {
    return (
        <Menu>
            <h1>Create Character</h1>
        <div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" />
                    </div>
          
                    <div class="form-check form-check-radio">
                        <p class="category">Sex</p>
                        <div class="form-check form-check-radio">
                            <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <span class="form-check-sign"></span>
                            Male
                            </label>
                        </div>
                        <div class="form-check form-check-radio">
                            <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked />
                            <span class="form-check-sign"></span>
                            Female
                            </label>
                        </div>
                    </div>
          
                    <div>
                        <button className="btn btn-dark btn-round">Submit</button>
                    </div>
                </form>
            </div>
        </Menu>
    )
}


export default CreateCharacter