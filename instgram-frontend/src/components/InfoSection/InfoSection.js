import React, { Component } from "react";
import "./InfoSection.css";
import Avatar from "@material-ui/core/Avatar";
import imageSrc from '../../images/pp1.png'

class InfoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="info_container">
            <Avatar src={imageSrc} className="info_image"/>
            <div className="info_content">
                <div className="info_username">amanirshad7</div>
                <div className="info_description">Aman Irshad</div>
            </div>
        </div>

      </div>
    );
  }
}
export default InfoSection;
