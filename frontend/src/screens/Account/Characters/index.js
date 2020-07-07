import React from 'react';
import { Link } from 'react-router-dom'
import Layout from '../../Layouts/Account'

const Characters = () => {
    return (
        <Layout>
        <div className="row">
            <div className="col">
                <h1>Characters</h1>
            </div>
            <div className="col text-right align-self-bottom pt-2">
                <Link to="/account/characters/create" className="btn btn-dark">
                    Create Character
                </Link>
            </div>
            </div>
            <div className="pb-2 pt-2 p1-3 pr-3 d-flex flex-row justify-content-between">
                <div className="pr-3">
                    <img src="https://via.placeholder.com/100" alt="Characters Icon"/>
                </div>
                <div className="align-self-center">
                    <span className="text-dark clearfix">Name</span>
                    <span className="text-dark clearfix">Vocation, Level</span>
                </div>
                <div className="ml-auto p-2 clearfix">
                    <span>Edit</span>
                    <br />
                    <span>Delete</span>
                </div>
            </div>
        </Layout>
    )
}


export default Characters