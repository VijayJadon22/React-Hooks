import React, { useEffect, useState } from "react";

function Input() {
  const [name, setName] = useState("Vijay");
  const [lastName, setLastName] = useState("Jadon");

  useEffect(() => {
    console.log("Inside useEffect");
  },[name]);
  return (
    <div>
      <Row label={"Name"}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Row>
      <Row label={"Lastname"}>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Row>
      <h2>
        Hello {name} {lastName}
      </h2>
    </div>
  );
}

const Row = (props) => {
  return (
    <>
      <label>{props.label}</label>
      {props.children}
    </>
  );
};

export default Input;
