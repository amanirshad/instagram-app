import React, { Component } from "react";
import Post from "../Post/Post";
import "./MainPage.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: []
    };
  }

  componentDidMount(){
    this.getPosts();
  }

  getPosts=()=>{
    let data = [
      {
        "postId":"12345",
        "userName":"amanirshad7",
        "postImageUrl":"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2866&q=80",
        "timeStamp":"123124",
        "likes":"7852"
      },{
        "postId":"12345",
        "userName":"rukaiyak_",
        "postImageUrl":"https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3686&q=80",
        "timeStamp":"123124",
        "likes":"1781"
      },{
        "postId":"12345",
        "userName":"amanirshad7",
        "postImageUrl":"https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2579&q=80",
        "timeStamp":"123124",
        "likes":"1781"
      },{
        "postId":"12345",
        "userName":"rukaiyak_",
        "postImageUrl":"https://images.unsplash.com/photo-1544038659-12337883d216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2351&q=80",
        "timeStamp":"123124",
        "likes":"21313"
      }
    ];
    this.setState({postList:data});
  }

  render() {
    return (
      <div>
        {
          this.state.postList.map((item,index)=>(
            <Post
            id={item.postId}
            userName={item.userName}
            postImage={item.postImageUrl}
            likes={item.likes}
          />
          ))
        }
        
      </div>
    );
  }
}
export default MainPage;
