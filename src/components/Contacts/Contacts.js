import React from 'react'


function Contacts() {
  return (
    <div className="card">
    <div className="card-header">
      <h3>
        <i className="fa-regular fa-address-book"></i>Contacts
      </h3>
    </div>
    <div className="card-body">
      <ul>
        <li>
          <span>
            quliyev20@gmail.com
            <br />
          </span>
          <small>E-mail</small>
        </li>
        <li>
          <span>
            +994 55 474-98-99
            <br />
          </span>
          <small>Mobile</small>
        </li>
      </ul>
    </div>
  </div>
  )
}
export default Contacts;