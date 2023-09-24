import React, { useState } from "react";

function ToDoItems(props) {
  return (
    <div
      onClick={() => {
        props.onChacked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItems;
