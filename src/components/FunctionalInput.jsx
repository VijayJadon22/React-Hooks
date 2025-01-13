import React, { useEffect, useState } from "react";

export const FunctionalInput = () => {
  const [name, setName] = useState("Harry");
  const [lastName, setLastName] = useState("Potter");

  useEffect(() => {
    document.title = lastName;
  },[lastName]);
  return (
    <div>
      <div>
        <Row label={"First Name"}>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Row>
        <Row label={"First Name"}>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Row>
      </div>
      <h1>
        Hello {name} {lastName}
      </h1>
    </div>
  );
};

const Row = (props) => {
  return (
    <div>
      <label style={{ margin: "10px" }}>{props.label}</label>
      {props.children}
    </div>
  );
};
