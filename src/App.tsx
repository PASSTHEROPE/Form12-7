import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react"; //wtf is this?
import List from "./list";
function App() {
  const arr: string[] = [];
  const [currentItem, setCurrentItem] = useState(String);
  const [itemList, updateItemList] = useState<string[]>([]); //have to define array as string or gg cuz default never or some shit
  const onChangeHandler = (e: {
    target: { value: React.SetStateAction<string> }; //quick fix but idk
  }) => {
    console.log("current value", e.target.value);
    setCurrentItem(e.target.value);
  };

  const addItemToList = () => {
    updateItemList([...itemList, currentItem]);
    setCurrentItem(""); //clears
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="input-wrapper">
            <input value={currentItem} onChange={onChangeHandler} />
            <button onClick={addItemToList}>ADD</button>
          </div>
          <List />
        </div>
      </header>
    </div>
  );
}

export default App;
