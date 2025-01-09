import { useEffect, useState } from "react";
import "./App.css";
import Additem from "./components/Additem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Searchbox from "./components/Searchbox";
function App() {
  const [items, setItems] = useState([
    { id: 1, action: "studying", checked: false },
    { id: 2, action: "coding and sleeping", checked: true },
  ]);

  const [search, setSearch] = useState("");

  // const [listitems,setListItems]=useState([]);

  const storeItems = (items = []) => {
    setItems(items);
    localStorage.setItem("todo_list", JSON.stringify(items));
  };

  const handleAddItem = (action) => {
    let duplicate = items.find((item) => item.action == action);

    // avoid the duplicate actions
    if (duplicate) return alert(`${action} is already exists`);

    const listitems = {
      id: items.length + 1,
      action,
      checked: false,
    };
    storeItems([...items, listitems]);
  };

  const hanleDelete = (id) => {
    console.log(id);
    const listitems = items.filter((item) => item.id !== id);
    storeItems(listitems);
    // localStorage.setItem("todo_list", JSON.stringify(listitems));
  };

  const handleCheck = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    storeItems(listitems);
    // localStorage.setItem("todo_list", JSON.stringify(listitems));
  };

  useEffect(() => {
    let items = localStorage.getItem("todo_list");
    if (items) {
      try {
        let data = JSON.parse(items);
        setItems(data);
      } catch (error) {
        console.log("can't able to conver the data to json");
      }
    }
  }, []);

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ height: "80vh" }}>
        <Header title="To do List" />
        <Additem handleAddItem={handleAddItem} /> <br></br>
        <Searchbox search={search} setSearch={setSearch} />
        <Content
          handleCheck={handleCheck}
          hanleDelete={hanleDelete}
          items={items?.filter((item) =>
            search ? item.action.includes(search) : true
          )}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;


// import React from 'react'
// import { useEffect } from 'react'

// import { useState } from 'react'

// function App() {
//    const [num,setNum]=useState(100)
//    const [num1,setNum1]=useState(1000)
//    const [num2,setNum2]=useState(500)
//    console.log(num)
//    useEffect(()=>{
//     setNum(200);
//     console.log("from useEffect")
//   },[num,num1])

//   return (
//     <div>
//     {num}
//     <button onClick={()=>setNum((cur)=>cur+1)}>add</button>
//     {num1}
//     <button onClick={()=>setNum1((cur)=>cur+1)}>add</button>
//     </div>
//   )
// }

// export default App
