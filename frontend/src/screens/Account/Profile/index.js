import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../Layouts/Container'
// import Error from '../../../helpers/error'

const ProfileInfo = () => {
	return (
		<Container>
			<div id="contentBody" className="col-sm-9">
				<div className="panel panel-default">
					<div className="panel-heading">Update Profile Information</div>
					<div className="panel-body">
						<form method="post" action="/account/profile_info">
							<div className="form-group">
								<label for="rlname">Real Name:</label>
								<input
									className="form-control"
									id="rlname"
									name="rlname"
									value=""
								/>
							</div>
							<div className="form-group">
								<label for="location">Location:</label>
								<input
									className="form-control"
									id="location"
									name="location"
									value=""
								/>
							</div>
							<div className="form-group">
								<label for="country">Country:</label>
								<br />
								<select name="country">
									<option value="af">Afghanistan</option>
									<option value="ax">Aland Islands</option>
									<option value="al">Albania</option>
									<option value="dz">Algeria</option>
									<option value="ad">Andorra</option>
									<option value="ao">Angola</option>
									<option value="ai">Anguilla</option>
									<option value="ag">Antigua and Barbuda</option>
									<option value="ar">Argentina</option>
									<option value="am">Armenia</option>
									<option value="aw">Aruba</option>
									<option value="ap">Asia/Pacific Region</option>
									<option value="au">Australia</option>
									<option value="at">Austria</option>
									<option value="az">Azerbaijan</option>
									<option value="bs">Bahamas</option>
									<option value="bh">Bahrain</option>
									<option value="bd">Bangladesh</option>
									<option value="bb">Barbados</option>
									<option value="by">Belarus</option>
									<option value="be">Belgium</option>
									<option value="bz">Belize</option>
									<option value="bj">Benin</option>
									<option value="bm">Bermuda</option>
									<option value="bt">Bhutan</option>
									<option value="bo">Bolivia</option>
									<option value="ba">Bosnia and Herzegovina</option>
									<option value="bw">Botswana</option>
									<option value="br" selected="">
										Brazil
									</option>
									<option value="bn">Brunei</option>
									<option value="bg">Bulgaria</option>
									<option value="bf">Burkina Faso</option>
									<option value="kh">Cambodia</option>
									<option value="cm">Cameroon</option>
									<option value="ca">Canada</option>
									<option value="cv">Cape Verde</option>
									<option value="ky">Cayman Islands</option>
									<option value="cl">Chile</option>
									<option value="cn">China</option>
									<option value="co">Colombia</option>
									<option value="cr">Costa Rica</option>
									<option value="ci">Cote D'Ivoire</option>
									<option value="hr">Croatia</option>
									<option value="cy">Cyprus</option>
									<option value="cz">Czech Republic</option>
									<option value="dk">Denmark</option>
									<option value="dj">Djibouti</option>
									<option value="dm">Dominica</option>
									<option value="do">Dominican Republic</option>
									<option value="ec">Ecuador</option>
									<option value="eg">Egypt</option>
									<option value="sv">El Salvador</option>
									<option value="ee">Estonia</option>
									<option value="et">Ethiopia</option>
									<option value="eu">Europe</option>
									<option value="fo">Faroe Islands</option>
									<option value="fj">Fiji</option>
									<option value="fi">Finland</option>
									<option value="fr">France</option>
									<option value="gf">French Guiana</option>
									<option value="pf">French Polynesia</option>
									<option value="ga">Gabon</option>
									<option value="ge">Georgia</option>
									<option value="de">Germany</option>
									<option value="gh">Ghana</option>
									<option value="gi">Gibraltar</option>
									<option value="gr">Greece</option>
									<option value="gl">Greenland</option>
									<option value="gd">Grenada</option>
									<option value="gp">Guadeloupe</option>
									<option value="gu">Guam</option>
									<option value="gt">Guatemala</option>
									<option value="gg">Guernsey</option>
									<option value="gy">Guyana</option>
									<option value="hm">Heard Island and McDonald Islands</option>
									<option value="hn">Honduras</option>
									<option value="hk">Hong Kong</option>
									<option value="hu">Hungary</option>
									<option value="is">Iceland</option>
									<option value="in">India</option>
									<option value="id">Indonesia</option>
									<option value="iq">Iran, Islamic Republic of</option>
									<option value="iq">Iraq</option>
									<option value="ie">Ireland</option>
									<option value="im">Isle of Man</option>
									<option value="il">Israel</option>
									<option value="it">Italy</option>
									<option value="jm">Jamaica</option>
									<option value="jp">Japan</option>
									<option value="je">Jersey</option>
									<option value="jo">Jordan</option>
									<option value="kz">Kazakhstan</option>
									<option value="ke">Kenya</option>
									<option value="kw">Kuwait</option>
									<option value="kg">Kyrgyzstan</option>
									<option value="la">Lao People's Democratic Republic</option>
									<option value="lv">Latvia</option>
									<option value="lb">Lebanon</option>
									<option value="ly">Libya</option>
									<option value="li">Liechtenstein</option>
									<option value="lt">Lithuania</option>
									<option value="lu">Luxembourg</option>
									<option value="mo">Macau</option>
									<option value="mk">
										Macedonia, the Former Yugoslav Republic of
									</option>
									<option value="mg">Madagascar</option>
									<option value="mw">Malawi</option>
									<option value="my">Malaysia</option>
									<option value="mv">Maldives</option>
									<option value="mt">Malta</option>
									<option value="mh">Marshall Islands</option>
									<option value="mq">Martinique</option>
									<option value="mr">Mauritania</option>
									<option value="mu">Mauritius</option>
									<option value="yt">Mayotte</option>
									<option value="mx">Mexico</option>
									<option value="md">Moldova</option>
									<option value="mc">Monaco</option>
									<option value="mn">Mongolia</option>
									<option value="me">Montenegro</option>
									<option value="ma">Morocco</option>
									<option value="mz">Mozambique</option>
									<option value="mm">Myanmar</option>
									<option value="na">Namibia</option>
									<option value="np">Nepal</option>
									<option value="nl">Netherlands</option>
									<option value="an">Netherlands Antilles</option>
									<option value="nc">New Caledonia</option>
									<option value="nz">New Zealand</option>
									<option value="ni">Nicaragua</option>
									<option value="ne">Niger</option>
									<option value="ng">Nigeria</option>
									<option value="mp">Northern Mariana Islands</option>
									<option value="no">Norway</option>
									<option value="om">Oman</option>
									<option value="pk">Pakistan</option>
									<option value="ps">Palestinian Territory Occupied</option>
									<option value="pa">Panama</option>
									<option value="pg">Papua New Guinea</option>
									<option value="py">Paraguay</option>
									<option value="pe">Peru</option>
									<option value="ph">Philippines</option>
									<option value="pl">Poland</option>
									<option value="pt">Portugal</option>
									<option value="pr">Puerto Rico</option>
									<option value="qa">Qatar</option>
									<option value="re">Reunion</option>
									<option value="ro">Romania</option>
									<option value="ru">Russian Federation</option>
									<option value="bl">Saint Barthelemy</option>
									<option value="kn">Saint Kitts and Nevis</option>
									<option value="lc">Saint Lucia</option>
									<option value="mf">Saint Martin</option>
									<option value="pm">Saint Pierre and Miquelon</option>
									<option value="vc">Saint Vincent and the Grenadines</option>
									<option value="ws">Samoa</option>
									<option value="sm">San Marino</option>
									<option value="sa">Saudi Arabia</option>
									<option value="sn">Senegal</option>
									<option value="rs">Serbia</option>
									<option value="sc">Seychelles</option>
									<option value="sg">Singapore</option>
									<option value="sk">Slovakia</option>
									<option value="si">Slovenia</option>
									<option value="za">South Africa</option>
									<option value="kr">South Korea</option>
									<option value="es">Spain</option>
									<option value="lk">Sri Lanka</option>
									<option value="sd">Sudan</option>
									<option value="sr">Suriname</option>
									<option value="sz">Swaziland</option>
									<option value="se">Sweden</option>
									<option value="ch">Switzerland</option>
									<option value="sy">Syrian Arab Republic</option>
									<option value="tw">Taiwan</option>
									<option value="tj">Tajikistan</option>
									<option value="tz">Tanzania, United Republic of</option>
									<option value="th">Thailand</option>
									<option value="tg">Togo</option>
									<option value="tt">Trinidad and Tobago</option>
									<option value="tn">Tunisia</option>
									<option value="tr">Turkey</option>
									<option value="tc">Turks and Caicos Islands</option>
									<option value="ug">Uganda</option>
									<option value="ua">Ukraine</option>
									<option value="ae">United Arab Emirates</option>
									<option value="gb">United Kingdom</option>
									<option value="us">United States</option>
									<option value="uy">Uruguay</option>
									<option value="uz">Uzbekistan</option>
									<option value="vu">Vanuatu</option>
									<option value="ve">Venezuela</option>
									<option value="vn">Vietnam</option>
									<option value="vi">Virgin Islands, U.S.</option>
									<option value="vg">Virgin Islands, British</option>
									<option value="ye">Yemen</option>
									<option value="zm">Zambia</option>
									<option value="zw">Zimbabwe</option>
								</select>
							</div>
							<button type="submit" className="btn btn-primary">
								Update Profile
							</button>
							<Link to="/account/characters">
								<button type="button" className="btn btn-inverse">
									Return
								</button>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default ProfileInfo
