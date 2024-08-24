import { ChangeEvent, MouseEvent, useState } from "react";

import logoUrl from "../assets/image.jpg"

import '../styles/InputPage.css'

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
}: {
  onSubmit: (d: ScrumAIDetails) => void;
}) {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [deadline, setDeadline] = useState("");
  const [numOfSprints, setNumOfSprints] = useState("");
  const [lenOfSprints, setLenOfSprints] = useState("");
  const [numOfPeople, setNumOfPeople] = useState(0);

  function onButtonClick(evt: MouseEvent<HTMLButtonElement>) {
    // const details: ScrumAIDetails =
  }
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
  return <div className="output">
    <div className="container-left">
      <div className="blo">
        <img src={logoUrl}></img>
        <h3>Scrum AI</h3>
      </div>
      <div className="boxes">
        <label htmlFor="Task">Task: </label>
          <input className="box" type="text" id="event" onChange={doTaskChange}></input>
          
          <label htmlFor="Description">Description: </label>
          <input className="box" type="text" id="event" onChange={doDescChange}></input>
          
          <label htmlFor="Deadline">Deadline (weeks): </label>
          <input className="box"type="text" id="event" value="10"  onChange={doDeadlineChange}></input>
          
          <label htmlFor="numOfSprints">Number of Sprints: </label>
          <input className="box" type="number" id="event" onChange={doNumberOfSprintsChange}></input>
          
          <label htmlFor="lenOfSprints">Length of Sprints (weeks): </label>
          <input className="box" type="number" id="event" value="1" onChange={doLengthOfSprintsChange}></input>
          
      </div>
      <button className="add" type="submit" onClick={() => onSubmit}>Submit</button>
      </div>
      <div className="container-right">
        <h2 className="secondary">Add People</h2>
        <div className="boxes">
        <label htmlFor="Person">Person Name: </label>
        <input className="box" type="text" id="event" onChange={doDeadlineChange}></input>
        
        <label htmlFor="Position">Position: </label>
        <input className="box" type="number" id="event" onChange={doNumberOfSprintsChange}></input>
        <button className="add">Add Person</button>
        </div>
      </div>
    </div>
  ;
}
