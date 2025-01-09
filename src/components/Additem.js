import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

function Additem({ items, setItems, handleAddItem }) {
  const [new_item, setNew_item] = useState();

  return (
    <div className="additem_container">
      <div className="additem">
        <input
          onKeyPress={(e) => e.key == "Enter" && handleAddItem(new_item)}
          type="text"
          placeholder="Add Items"
          value={new_item}
          onChange={(e) => setNew_item(e.target.value)}
          className="additem_inp"
        />

        <IoAddCircleOutline
          role="button"
          tabIndex="0"
          className="plus_icn"
          onClick={() => {
            // check if the value is exist other wise shows the alert
            if (!new_item) return alert("Please fill the field");
            handleAddItem(new_item);
            // clearing the text input field after add the item
            setNew_item("");
          }}
        />
      </div>
    </div>
  );
}

export default Additem;
