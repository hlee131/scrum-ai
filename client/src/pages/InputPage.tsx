import { ChangeEvent, useState } from "react";
import './InputPage.css'

export type Person = {
  name: string;
  position: string;
}
export type ScrumAIDetails = {
  task: string;
  desc: string;
  deadline: string;
  numOfSprints: string;
  lenOfSprints: string;
  people: Person[];
}
export default function InputPage() {
  const [task, setTask] = useState('');
  const [desc, setDesc] = useState('');
  const [deadline, setDeadline] = useState('');
  const [numOfSprints, setNumOfSprints] = useState('');
  const [lenOfSprints, setLenOfSprints] = useState('');
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
  return <div>
    <div className="container-left">
  <h3>Scrum-AI</h3>
  <label htmlFor="Task">Task: </label>
  <input type="text" id="event" onChange={doTaskChange}></input>
  <br></br>
  <label htmlFor="Description">Description: </label>
  <input type="text" id="event" onChange={doDescChange}></input>
  <br></br>
  <label htmlFor="Deadline">Deadline: </label>
  <input type="text" id="event" onChange={doDeadlineChange}></input>
  <br></br>
  <label htmlFor="numOfSprints">Number of Sprints: </label>
  <input type="number" id="event" onChange={doNumberOfSprintsChange}></input>
   <br></br>
  <label htmlFor="lenOfSprints">Length of Sprints: </label>
  <input type="number" id="event" onChange={doLengthOfSprintsChange}></input>
  </div>
  <div className="container-right"></div>
    </div>
}



