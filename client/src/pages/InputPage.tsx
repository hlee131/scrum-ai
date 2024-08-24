import { ChangeEvent, MouseEvent, useState } from "react";
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
}
export default function InputPage( { onSubmit }: { onSubmit: ScrumAIDetails }) {
  
  const [task, setTask] = useState('');
  const [desc, setDesc] = useState('');
  const [deadline, setDeadline] = useState('');
  const [numOfSprints, setNumOfSprints] = useState('');
  const [lenOfSprints, setLenOfSprints] = useState('');
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
      <h3>Scrum-AI</h3>
        <label htmlFor="Task">Task: </label>
        <input style={{'border':'solid 2px grey'}} type="text" id="event" onChange={doTaskChange}></input>
        <br></br>
        <label htmlFor="Description">Description: </label>
        <input style={{'border':'solid 2px grey'}} type="text" id="event" onChange={doDescChange}></input>
        <br></br>
        <label htmlFor="Deadline">Deadline: </label>
        <input style={{'border':'solid 2px grey'}}type="text" id="event" onChange={doDeadlineChange}></input>
        <br></br>
        <label htmlFor="numOfSprints">Number of Sprints: </label>
        <input style={{'border':'solid 2px grey'}} type="number" id="event" onChange={doNumberOfSprintsChange}></input>
        <br></br>
        <label htmlFor="lenOfSprints">Length of Sprints: </label>
        <input style={{'border':'solid 2px grey'}} type="number" id="event" onChange={doLengthOfSprintsChange}></input>
        <button className="add" type="submit"
        style={{
          color: 'black',
          width: '150px',    // Set the width
          height: '25px',
          fontSize: '15px',
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          verticalAlign: 'middle',
          backgroundColor: "white",
        }}
        onClick={() => onSubmit}>Submit</button>
      </div>
      <div className="container-right">
        <h4>Add People</h4>
        <label htmlFor="Person">Person Name: </label>
        <input style={{'border':'solid 2px grey'}}type="text" id="event" onChange={doDeadlineChange}></input>
        <br></br>
        <label htmlFor="Position">Position: </label>
        <input style={{'border':'solid 2px grey'}} type="number" id="event" onChange={doNumberOfSprintsChange}></input>
        <button className="add"
        style={{
          position: 'absolute',
          bottom: '100px',  // Distance from the top
          right: '50px', // Distance from the left
          color: 'black',
          width: '150px',    // Set the width
          height: '25px',
          fontSize: '15px',
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          verticalAlign: 'middle',
          backgroundColor: "white",
        }}
      >
        Add Person
      </button>
      </div>
    </div>
  ;
}
