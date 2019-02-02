import React from "react";
import ReactDOM from "react-dom";
import { Grid } from "./Grid";
import { gameOfLife } from "./gameOfLife";

const initialGrid = [[0, 0, 0, 0], [1, 1, 1, 0], [0, 1, 1, 1], [0, 0, 0, 0]];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: props.grid,
      auto: false
    };
    this.updateGeneration = this.updateGeneration.bind(this);
    this.toggleAuto = this.toggleAuto.bind(this);
    this.autoGeneration = this.autoGeneration.bind(this);
  }

  updateGeneration() {
    this.setState(state => ({ grid: gameOfLife(state.grid) }));
  }

  toggleAuto() {
    this.setState(
      ({ auto }) => ({
        auto: !auto
      }),
      () => (this.state.auto ? this.autoGeneration() : undefined)
    );
  }

  autoGeneration() {
    if (this.state.auto) {
      this.setState(
        state => ({ grid: gameOfLife(state.grid) }),
        () => setTimeout(this.autoGeneration, 500)
      );
    }
  }

  render() {
    return (
      <div className="App">
        <Grid grid={this.state.grid} />
        <button disabled={this.state.auto} onClick={this.updateGeneration}>
          Next Generation
        </button>
        <button onClick={this.toggleAuto}>
          {this.state.auto ? "Stop" : "Start"} Auto Generation
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App grid={initialGrid} />, rootElement);
