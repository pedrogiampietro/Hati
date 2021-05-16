import React from 'react';
import { genders, characterVocations, towns } from '../../config';
import { convertTimestempToDate } from '../../helpers/DateTime';

const Profile = ({ characterPage }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-condensed">
        <tbody>
          <tr>
            <td width="200px">Name: </td>
            <td>{characterPage.name} </td>
          </tr>
          <tr>
            <td>Sex:</td>
            <td>{genders[characterPage.sex]} </td>
          </tr>
          <tr>
            <td>Level:</td>
            <td>{characterPage.level}</td>
          </tr>
          <tr>
            <td>Vocation: </td>
            <td>{characterVocations[characterPage.vocation]}</td>
          </tr>
          {/* Achievement start */}
          <tr>
            <td>Achievement Points: </td>
            <td>104</td>
          </tr>
          <tr>
            <td>Achievement Rank: </td>
            <td>Novice</td>
          </tr>
          {/* Achievement end */}
          {/* Display house start */}
          {/* Display house end */}
          <tr>
            <td>Status:</td>
            <td>
              <font color="green">
                <b>ONLINE</b>
              </font>
            </td>
          </tr>
          <tr>
            <td>Residence:</td>
            <td>{towns[characterPage.town_id]}</td>
          </tr>
          <tr>
            <td>Created at:</td>
            <td>{convertTimestempToDate(characterPage.create_date)}</td>
          </tr>
          <tr>
            <td>Account Status:</td>
            <td>Free Premium Account</td>
          </tr>
          <tr>
            <td>Ban Status:</td>
            <td>
              <b>
                <b
                  style={{
                    color: 'rgb(79, 136, 56)',
                    fontWeight: 'bold',
                  }}
                >
                  None
                </b>
              </b>
            </td>
          </tr>
          <tr>
            <td>
              <font className="profile_font" name="profile_font_comment">
                Comment:
              </font>{' '}
              <br />
            </td>
            <td>- </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
