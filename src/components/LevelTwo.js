import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";

const styles = {
  avatar: {
    margin: 10
  },
  redAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: red[600]
  },
  greenAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: green[500]
  },
  blueAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: blue[500]
  },
  row: {
    display: "flex",
    justifyContent: "center"
  }
};

function LetterAvatars({ classes, levelTwoRed, levelTwoBlue, levelTwoGreen }) {
  return (
    <div className={classes.row}>
      <Avatar className={levelTwoRed ? classes.redAvatar : classes.avatar}>
        R
      </Avatar>
      <Avatar className={levelTwoGreen ? classes.greenAvatar : classes.avatar}>
        G
      </Avatar>
      <Avatar className={levelTwoBlue ? classes.blueAvatar : classes.avatar}>
        B
      </Avatar>
    </div>
  );
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LetterAvatars);
