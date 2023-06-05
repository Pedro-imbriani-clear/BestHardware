import "./Logo.css"
import logo from '../../public/img/kisspng-information-computer-hardware-stop-sign-logo-traff-cpu-5b16e5eb7375d7.2187932315282273074729.jpg'
import React from "react"
import { Link } from "react-router-dom"

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo"/>
        </Link>
    </aside>