import Avatar from "@material-ui/core/Avatar";
import React, { Component } from "react";
import "./Suggestion.css";
import imageSrc from '../../images/pp2.png'

class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="suggestions_container">
            <div className="suggestions_header">
                <div>Suggestions For You</div>
            </div>
            <div className="suggestions_body">
                <div className="suggestions_friends">
                    <Avatar src={imageSrc} className="suggestions_image"/>
                    <div className="suggestions_username">rukaiyak_</div>
                </div>
                <div className="suggestions_friends">
                    <Avatar src={imageSrc} className="suggestions_image"/>
                    <div className="suggestions_username">sinharitesh567</div>
                </div>
                <div className="suggestions_friends">
                    <Avatar src={imageSrc} className="suggestions_image"/>
                    <div className="suggestions_username">dm._.mallick</div>
                </div>
                <div className="suggestions_friends">
                    <Avatar src={imageSrc} className="suggestions_image"/>
                    <div className="suggestions_username">irfanashraf405</div>
                </div>
                <div className="suggestions_friends">
                    <Avatar src={imageSrc} className="suggestions_image"/>
                    <div className="suggestions_username">nabaratanpatra</div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
export default Suggestion;
