import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
    const LogOut=()=>{
        sessionStorage.clear()
        navigate("/")
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-warning">
                <div class="container-fluid">
                    <Link class="navbar-brand" href="#">BLOG</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/add">ADD POST</Link>
                            <Link class="nav-link" to="/viewall">VIEW ALL</Link>
                            <Link class="nav-link" to="/mypost">MY POST</Link>
                            <li class="nav-link">
                               <button onClick={LogOut} className="btn btn-success">LOG OUT</button> 
                            </li> 
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar