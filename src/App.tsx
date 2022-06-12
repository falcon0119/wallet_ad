import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Datatable from "./components/data-table";
import { TableCell } from "@mui/material";
import Header from "./components/header";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows1 = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const rows2 = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice creamうんこ", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Header />
      <Datatable
        name1="hoge"
        name2="田畑"
        name3="早くしろ"
        color="white"
        fingers={rows1}
        names={["timeStamp", "hash", "blockHash", "isError", "from", "to"]}
      />
    </div>
  );
}

export default App;
