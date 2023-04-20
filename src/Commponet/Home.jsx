import React from 'react'
import Login from '../pages/Login'
import "./Home.css"
import Register from '../pages/Register'
const Home = () => {
    return (
        <>
            <div className="container-fluid main-bg">
                <div className="row wrapper ">
                   <Register/>
                </div>
            </div>
        </>
    )
}

export default Home