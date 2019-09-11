import React, { Component } from "react";
import data from "../db/data";
import TechCard from "./TechCard";
import Grid from "@material-ui/core/Grid";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";

const _ = require("lodash");

export default class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { project: {} };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    var project = _.find(data, { projectID: params.projectID });
    this.setState({ project: project });
  }
  render() {
    return (
      <div style={{ margin: "3rem" }}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={12}>
            <h1
              style={{ textAlign: "center", color: "white", fontWeight: "800" }}
            >
              {this.state.project.title}
            </h1>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div
              style={{
                backgroundImage: this.state.project.css
              }}
            />
            <img
              src={this.state.project.css}
              alt={this.state.project.title}
              style={{
                width: "330px",
                borderRadius: "4rem",
                marginBottom: "1rem"
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TechCard description={this.state.project.tech} TITLE="TECH" />
          </Grid>
          <Grid item xs={11} sm={10}>
            <TechCard
              TITLE="INFORMATION"
              description={this.state.project.description}
              author={this.state.project.author}
              date={this.state.project.date}
            />
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Fab
              variant="extended"
              aria-label="delete"
              onClick={() => {
                window.location.replace(`${this.state.project.urls[0].demo}`);
              }}
            >
              <NavigationIcon />
              Demo
            </Fab>
          </Grid>
        </Grid>
      </div>
    );
  }
}
