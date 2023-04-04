import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import MainPage from "../MainPage/MainPage";
import StatusBar from "../StatusBar/StatusBar";
import "./MainContent.css";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid container>

            <Grid item xs={2}>
                
            </Grid>
            <Grid item xs={6}>
                <div>
                    <StatusBar/>
                    <MainPage/>
                </div>
            </Grid>
            <Grid item xs={2}>
                12
            </Grid>
            <Grid item xs={2}>
                fd
            </Grid>
        </Grid>
      </div>
    );
  }
}
export default MainContent;
