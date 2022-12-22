import React from "react";


function PersonalInfo() {
  return (
    <div>
      <div className="sidebar">
        
          <h3 className="title">Quliyev Alyar</h3>
          <div className="info">
            <p className="header">About</p>
            <ul>
              <li>Age : 32</li>
              <li>Address : Sumgait,Azerbaijan</li>
            </ul>
          </div>
          <div className="info">
            <p className="header">Links</p>
            <ul>
              <li>
                <i className="fa-brands fa-github"></i>
                <a href="https://github.com/AlyarQuliyev">GitHub</a>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>
                <a href="https://github.com/AlyarQuliyev">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}
export default PersonalInfo;
