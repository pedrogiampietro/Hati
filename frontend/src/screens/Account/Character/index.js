import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Layouts/Account'

const AccountCharacters = () => {
    return (
        <Layout>
        <div className="row">
         <div className="col">
            <h1>Characters</h1>
        </div>
        <div className="col text-right align-self-bottom pt-2">
            <Link to="/account/character/create" className="btn btn-primary">
                Create
            </Link>
        </div>
        </div>
        <div className="pb-2 pt-2 p1-3 pr-3 d-flex flex-row justify-content-between">
            <div className="pr-3">
                <img src="https://via.placeholder.com/100" alt="Link Icon"/>
            </div>
            <div className="align-self-center">
                <span className="text-primary clearfix">Name</span>
                <span className="text-primary clearfix">Vocation, Level</span>
            </div>
            <div className="ml-auto p-2 clearfix">
                <span>Edit</span>
                <span>Delete</span>
            </div>
        </div>

        <div className="pb-2 pt-2 p1-3 pr-3 d-flex flex-row justify-content-between">
            <div className="pr-3">
                <img src="https://via.placeholder.com/100" alt="Link Icon"/>
            </div>
            <div className="align-self-center">
                <span className="text-primary clearfix">Name</span>
                <span className="text-primary clearfix">Vocation, Level</span>
            </div>
            <div className="ml-auto p-2 clearfix">
                <span>Edit</span>
                <span>Delete</span>
            </div>
        </div>

        <div className="pb-2 pt-2 p1-3 pr-3 d-flex flex-row justify-content-between">
            <div className="pr-3">
                <img src="https://via.placeholder.com/100" alt="Link Icon"/>
            </div>
            <div className="align-self-center">
                <span className="text-primary clearfix">Name</span>
                <span className="text-primary clearfix">Vocation, Level</span>
            </div>
            <div className="ml-auto p-2 clearfix">
                <span>Edit</span>
                <span>Delete</span>
            </div>
        </div>
    </Layout>
    )
}

export default AccountCharacters