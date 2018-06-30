// @flow
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavBar from "./components/NavBar";
import LevelOne from "./components/LevelOne";
import LevelTwo from "./components/LevelTwo";
import LevelThree from "./components/LevelThree";
import LevelFour from "./components/LevelFour";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./styles.css";

type Props = {
  classes: string
};
type State = {
  visible: boolean,
  levelOneRed: boolean,
  levelOneGreen: boolean,
  levelOneBlue: boolean
};

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  root: {
    mulMuiModal: {
      scrollPaper: {
        alignItems: "flex-start"
      }
    }
  }
});

class App extends Component<Props, State> {
  constructor(props) {
    super();
    this.state = {
      level: [],
      color: [],
      visible: false,
      levelOneRed: false,
      levelOneGreen: false,
      levelOneBlue: false,
      levelTwoRed: false,
      levelTwoGreen: false,
      levelTwoBlue: false,
      levelThreeRed: false,
      levelThreeGreen: false,
      levelThreeBlue: false,
      levelFourRed: false,
      levelFourGreen: false,
      levelFourBlue: false
    };
  }
  checkState = color => {
    // ["11", "21", "31"]
    // 0: "11"
    // 1: "21"
    // 2: "31"
    switch (color) {
      // level1
      case "11":
        this.setState({
          levelOneRed: true
        });
        break;
      case "21":
        this.setState({
          levelOneGreen: true
        });
        break;
      case "31":
        this.setState({
          levelOneBlue: true
        });
        break;
      // level2
      case "12":
        this.setState({
          levelTwoRed: true
        });
        break;
      case "22":
        this.setState({
          levelTwoGreen: true
        });
        break;
      case "32":
        this.setState({
          levelTwoBlue: true
        });
        break;
      // level3
      case "13":
        this.setState({
          levelThreeRed: true
        });
        break;
      case "23":
        this.setState({
          levelThreeGreen: true
        });
        break;
      case "33":
        this.setState({
          levelThreeBlue: true
        });
        break;
      // level4
      case "14":
        this.setState({
          levelFourRed: true
        });
        break;
      case "24":
        this.setState({
          levelFourGreen: true
        });
        break;
      case "34":
        this.setState({
          levelFourBlue: true
        });
        break;
      default:
    }
  };
  handleLevelChange = name => event => {
    const Number = this.state.level.slice();
    this.setState({
      [name]: Number.concat(event.target.value),
      appendLevel: event.target.value
    });
    console.log(event.target.value);
  };
  handleColorChange = name => event => {
    const Number = this.state.color.slice();
    const theColor = Number.concat(event.target.value);
    this.checkState(event.target.value);
    this.setState({ [name]: theColor });
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const {
      level,
      visible,
      color,
      appendLevel,
      levelOneRed,
      levelOneBlue,
      levelOneGreen,
      levelTwoRed,
      levelTwoBlue,
      levelTwoGreen,
      levelThreeRed,
      levelThreeBlue,
      levelThreeGreen,
      levelFourRed,
      levelFourBlue,
      levelFourGreen
    } = this.state;
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <h2>Ava Twiss</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="90"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <div>
            <Button onClick={this.handleClickOpen}>Select Badges</Button>
            <Dialog
              disableBackdropClick
              disableEscapeKeyDown
              open={this.state.open}
              onClose={this.handleClose}
            >
              <DialogTitle>Select Level</DialogTitle>
              <DialogContent>
                <form className={classes.container}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Level</InputLabel>
                    <Select
                      native
                      value={level}
                      onChange={this.handleLevelChange("level")}
                      input={<Input id="age-native-simple" />}
                    >
                      <option value="" />
                      <option value={1}>Level 1</option>
                      <option value={2}>Level 2</option>
                      <option value={3}>Level 3</option>
                      <option value={4}>Level 4</option>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Color</InputLabel>
                    <Select
                      native
                      value={color}
                      onChange={this.handleColorChange("color")}
                      input={<Input id="age-simple" />}
                    >
                      <option value="" />
                      <option value={1 + `${Number(appendLevel)}`}>Red</option>
                      <option value={2 + `${Number(appendLevel)}`}>
                        Green
                      </option>
                      <option value={3 + `${Number(appendLevel)}`}>Blue</option>
                    </Select>
                  </FormControl>
                </form>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={this.handleClose} color="primary">
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-center">
              <Typography
                variant="title"
                gutterBottom
                style={{ alignSelf: "center" }}
              >
                Level 1
              </Typography>
              <LevelOne
                levelOneRed={levelOneRed}
                levelOneBlue={levelOneBlue}
                levelOneGreen={levelOneGreen}
              />
            </div>
            <div className="col-sm-12 d-flex justify-content-center">
              <Typography
                variant="title"
                gutterBottom
                style={{ alignSelf: "center" }}
              >
                Level 2
              </Typography>
              <LevelTwo
                levelTwoRed={levelTwoRed}
                levelTwoBlue={levelTwoBlue}
                levelTwoGreen={levelTwoGreen}
              />
            </div>
            <div className="col-sm-12 d-flex justify-content-center">
              <Typography
                variant="title"
                gutterBottom
                style={{ alignSelf: "center" }}
              >
                Level 3
              </Typography>
              <LevelThree
                levelThreeRed={levelThreeRed}
                levelThreeBlue={levelThreeBlue}
                levelThreeGreen={levelThreeGreen}
              />
            </div>
            <div className="col-sm-12 d-flex justify-content-center">
              <Typography
                variant="title"
                gutterBottom
                style={{ alignSelf: "center" }}
              >
                Level 4
              </Typography>
              <LevelFour
                levelFourRed={levelFourRed}
                levelFourBlue={levelFourBlue}
                levelFourGreen={levelFourGreen}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
