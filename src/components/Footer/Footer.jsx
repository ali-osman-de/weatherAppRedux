import React from 'react'
import { MdSunnySnowing } from "react-icons/md";
import { BsTwitterX, BsFacebook, BsInstagram } from "react-icons/bs";



function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1 fs-2">
            <MdSunnySnowing />
          </a>
          <span className="mb-3 mb-md-0 text-light">© 2023 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex fs-3">
          <li className="ms-3"><a className="text-light" href="#"><BsTwitterX /></a></li>
          <li className="ms-3"><a className="text-light" href="#"><BsFacebook /></a></li>
          <li className="ms-3"><a className="text-light" href="#"><BsInstagram /></a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer