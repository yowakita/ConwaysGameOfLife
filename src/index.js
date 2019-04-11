import React from "react";
import ReactDOM from "react-dom";
import { Grid } from "./Grid";
import { gameOfLife } from "./gameOfLife";
import styled from "styled-components";

const initialGrid = [[0, 0, 0, 0], [1, 1, 1, 0], [0, 1, 1, 1], [0, 0, 0, 0]];
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  margin: 10vh
  align-items: center;
`;
const ControlPanel = styled.div`
  display: inline-flex;
  flex-direction: row;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: initialGrid,
      auto: false
    };
  }

  addRow = () => {
    this.setState(state => ({
      grid: [...state.grid, Array(state.grid[0].length).fill(0)]
    }));
  };

  removeColumn = () => {
    this.setState(state => ({
      grid: state.grid.map(row => {
        const copy = [...row];
        copy.pop();
        return copy;
      })
    }));
  };

  addColumn = () => {
    this.setState(state => ({
      grid: state.grid.map(row => [...row, 0])
    }));
  };

  removeRow = () => {
    const gridCopy = [...this.state.grid];
    gridCopy.pop();
    this.setState(state => ({
      grid: gridCopy
    }));
  };

  handleCellClick = (row, column) => {
    const gridCopy = [...this.state.grid];
    gridCopy[row][column] = gridCopy[row][column] === 0 ? 1 : 0;
    this.setState({
      grid: gridCopy
    });
  };

  updateGeneration = () =>
    this.setState(state => ({ grid: gameOfLife(state.grid) }));

  toggleAuto = () =>
    this.setState(
      ({ auto }) => ({
        auto: !auto
      }),
      () => (this.state.auto ? this.autoGeneration() : undefined)
    );

  autoGeneration = () => {
    if (this.state.auto) {
      this.setState(
        state => ({ grid: gameOfLife(state.grid) }),
        () => setTimeout(this.autoGeneration, 500)
      );
    }
  };

  render() {
    return (
      <Container className="App">
        <Grid grid={this.state.grid} handleCellClick={this.handleCellClick} />
        <ControlPanel>
          <button disabled={this.state.auto} onClick={this.updateGeneration}>
            Next Generation
          </button>
          <button onClick={this.toggleAuto}>
            {this.state.auto ? "Stop" : "Start"} Auto Generation
          </button>
          <button onClick={this.addRow}>Add a row</button>
          <button onClick={this.removeRow}>Remove a row</button>
          <button onClick={this.addColumn}>Add a column</button>
          <button onClick={this.removeColumn}>Remove a column</button>
        </ControlPanel>
      </Container>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
