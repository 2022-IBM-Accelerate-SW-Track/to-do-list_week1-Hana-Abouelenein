import React, { Component } from 'react';
  
import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_pic_name}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Hana Abouelenein</div>
            <div className="brief_description">
              <p>Hello! My name is Hana Abouelenein and I am a Computer Science student
                at the University of Maryland.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}