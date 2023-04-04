import React, { Component } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import pp from "../../images/pp2.png";
import postimage from "../../images/post.jpg";
import love from "../../images/love.svg";
import comment from "../../images/comment.svg";
import share from "../../images/share.svg";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    let data = [
      {
        username: "ladka_bawaal",
        commentId: "123",
        timeStamp: "12345556",
        description: "Bawaaal tabahhii ekdm",
      }, {
        username: "irfanashraf",
        commentId: "123",
        timeStamp: "12345556",
        description: "Nice photo",
      }, {
        username: "sinharitesh567",
        commentId: "123",
        timeStamp: "12345556",
        description: "Mast photo",
      }, {
        username: "dm._mallick",
        commentId: "123",
        timeStamp: "12345556",
        description: "Photography!!",
      }
    ];

    this.setState({ commentList: data });
  };

  render() {
    return (
      <div className="post_container">
        {/* Header */}
        <div className="post_header">
          <Avatar className="post_image" src="" />
          <div className="post_username">{this.props.userName}</div>
        </div>

        {/* Image */}
        <div>
          <img src={this.props.postImage} width="615px" />
        </div>

        {/* Analytics */}
        <div>
          <div style={{ marginLeft: "10px" }}>
            <img src={love} className="post_reactimage" />
            <img src={comment} className="post_reactimage" />
            <img src={share} className="post_reactimage" />
          </div>
          <div style={{ fontWeight: "bold", marginLeft: "20px" }}>
            {this.props.likes} likes
          </div>
        </div>

        {/* Comment Section */}
        <div>
            {
                this.state.commentList.map((item,index)=>(
                    <div className="post_comment">{item.username}: {item.description}</div>
                ))
            }
          
          <input
            type="text"
            className="post_commentbox"
            placeholder="Add a comment..."
          />
        </div>
      </div>
    );
  }
}
export default Post;
