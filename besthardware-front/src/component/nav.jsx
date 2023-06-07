import "./Nav.css"
import React from "react"

export default props =>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Besthardware</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                      <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="/catalogo">Catalogo</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="/sobre">Sobre Nós</a>
                  </li>
              </ul>
              <form className="search">
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              </form>
          </div>

          
      </nav>
