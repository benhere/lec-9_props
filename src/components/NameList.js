import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["David", "Gray", "Martin", "David"];

  const persons = [
    {
      id: 1,
      name: "Peter",
      age: 31,
      skill: "React",
    },
    {
      id: 2,
      name: "David",
      age: 30,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Mike",
      age: 29,
      skill: "Vue",
    },
    {
      id: 4,
      name: "Henary",
      age: 33,
      skill: "MongoDB",
    },
  ];

  // eslint-disable-next-line
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));

  return (
    <div>
      {/* <div>{personList}</div>; */}
      <div>{nameList}</div>;
    </div>
  );
}

export default NameList;
