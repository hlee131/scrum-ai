import React, { ChangeEvent, MouseEvent, useState } from "react";

import logoUrl from "../assets/image.jpg";

import "../styles/InputPage.css";

export type Person = {
  name: string;
  position: string;
};
export type ScrumAIDetails = {
  task: string;
  desc: string;
  deadline: string;
  numOfSprints: string;
  lenOfSprints: string;
  people: Person[];
};
export default function InputPage({
  onSubmit,
  desc,
  setDesc,
}: {
  onSubmit: (d: ScrumAIDetails) => void;
  desc: string;
  setDesc: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [numOfSprints, setNumOfSprints] = useState("");
  const [lenOfSprints, setLenOfSprints] = useState("1");
  // const [person, setPerson] = useState(0);
  const [persons, setPersons] = useState<Person[]>([]);

  function doTaskChange(evt: ChangeEvent<HTMLInputElement>) {
    setTask(evt.target.value);
  }
  function doDescChange(evt: ChangeEvent<HTMLInputElement>) {
    setDesc(evt.target.value);
  }
  function doDeadlineChange(evt: ChangeEvent<HTMLInputElement>) {
    setDeadline(evt.target.value);
  }
  function doNumberOfSprintsChange(evt: ChangeEvent<HTMLInputElement>) {
    setNumOfSprints(evt.target.value);
  }
  function doLengthOfSprintsChange(evt: ChangeEvent<HTMLInputElement>) {
    setLenOfSprints(evt.target.value);
  }
  function doPersonChange(evt: ChangeEvent<HTMLInputElement>, index: number) {
    setPersons((prev) => {
      const newPersons = [...prev];
      newPersons[index].name = evt.target.value;
      return newPersons;
    });
  }

  function doPositionChange(evt: ChangeEvent<HTMLInputElement>, index: number) {
    setPersons((prev) => {
      const newPersons = [...prev];
      newPersons[index].position = evt.target.value;
      return newPersons;
    });
  }

  return (
    <div className="output">
      <div className="container-left">
        <div className="blo">
          <img src={logoUrl}></img>
          <h3>Scrum AI</h3>
        </div>
        <div className="boxes">
          <label htmlFor="Task">Task: </label>
          <input
            className="box"
            type="text"
            id="event"
            onChange={doTaskChange}
          ></input>

          <label htmlFor="Description">Description: </label>
          <input
            className="box"
            type="text"
            id="event"
            onChange={doDescChange}
          ></input>

          <label htmlFor="Deadline">Deadline (weeks): </label>
          <input
            className="box"
            type="text"
            id="event"
            onChange={doDeadlineChange}
          ></input>

          <label htmlFor="numOfSprints">Number of Sprints: </label>
          <input
            className="box"
            type="number"
            id="event"
            onChange={doNumberOfSprintsChange}
          ></input>

          <label htmlFor="lenOfSprints">Length of Sprints (weeks): </label>
          <input
            className="box"
            type="number"
            id="event"
            onChange={doLengthOfSprintsChange}
          ></input>
        </div>
        <button
          className="add"
          type="submit"
          onClick={() =>
            onSubmit({
              task: task,
              desc: desc,
              deadline: deadline,
              numOfSprints: numOfSprints,
              lenOfSprints: lenOfSprints,
              people: persons,
            })
          }
        >
          Submit
        </button>
      </div>
      <div className="container-right">
        <h3>Add People</h3>
        {persons.map((person, index) => (
          <div key={index}>
            <label htmlFor="Person">Person Name {index + 1}: </label>
            <input
              className="box"
              type="text"
              id="event"
              onChange={(event) => doPersonChange(event, index)}
              value={person.name}
            ></input>
            <label htmlFor="Position">Position {index + 1}: </label>
            <input
              className="box"
              type="text"
              id="event"
              onChange={(event) => doPositionChange(event, index)}
              value={person.position}
            ></input>
          </div>
        ))}
        <div className="buttons">
          <button
            className="add"
            onClick={() =>
              setPersons((prev) => [...prev, { name: "", position: "" }])
            }
          >
            Add Person
          </button>
          <button
            className="add"
            onClick={() => setPersons((prev) => prev.slice(0, -1))}
          >
            Delete Person
          </button>
        </div>
      </div>
    </div>
  );
}
