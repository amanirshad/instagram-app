import Avatar from "@material-ui/core/Avatar";
import React, { Component } from "react";
import "./StatusBar.css";
import statusimg from '../../images/pp1.png'
import statusimg2 from '../../images/pp2.png'
import uploadImage from '../../images/statusadd.png'

class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        statusList: []
    };
  }

  componentDidMount(){
    this.getData();
  }

  getData=()=>{
    let data=[
        {"username":"amanirshad7",
        "imageUrl":"../../images/pp1.png"
        },{"username":"rukaiyak_",
        "imageUrl":"../../images/pp2.png"
        },{"username":"amanirshad7",
        "imageUrl":"../../images/pp1.png"
        },{"username":"amanirshad7",
        "imageUrl":"../../images/pp2.png"
        },{"username":"rukaiyak_",
        "imageUrl":"../../images/pp1.png"
        },{"username":"amanirshad7",
        "imageUrl":"../../images/pp2.png"
        }, {"username":"amanirshad7",
        "imageUrl":"../../images/pp1.png"
        },{"username":"rukaiyak_",
        "imageUrl":"../../images/pp2.png"
        },{"username":"amanirshad7",
        "imageUrl":"../../images/pp1.png"
        },{"username":"amanirshad7",
        "imageUrl":"../../images/pp2.png"
        },{"username":"rukaiyak_",
        "imageUrl":"../../images/pp1.png"
        },{"username":"amanirshad7",
        "imageUrl":"../../images/pp2.png"
        }
    ]

    this.setState({statusList: data});
  }

  render() {
    return (
      <div>
        <div className="statusbar_container">
          <img className="statusbar_upload" width="55px" height="55px" src={uploadImage}/>
            {
                this.state.statusList.map((item,index)=>(
                    <div className="status">
                    <Avatar className="statusbar_status" src={statusimg}/>
                    <div className="statusbar_text">{item.username}</div>
                </div>
                    ))
            }


            
            
        </div>
      </div>
    );
  }
}
export default StatusBar;
