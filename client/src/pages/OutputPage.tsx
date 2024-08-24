import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import styles from "../styles/OutputPage.module.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function join(...classes: string[]) {
  return classes.join(" ");
}

interface Event {
  title: string;
  description: string;
  start: string;
  end: string;
  dependencies: string[];
  assignee: string;
  storyPoints: number;
}

export type Schedule = Event[];

export default function OutputPage({
  schedule,
  description,
}: {
  schedule: Schedule;
  description: string;
}) {

  const tasksByAssignee = schedule.reduce((acc, task) => {
    if (!acc[task.assignee]) {
      acc[task.assignee] = [];
    }
    acc[task.assignee].push(task);
    return acc;
  }, {} as Record<string, Event[]>);

  return (
    <div className={styles.outputPage}>
      <div className={styles.left}>
        <div className={join(styles.top, styles.columnLayout)}>
          <h1>Goal Description</h1>
          <div className={styles.scrollableContent}>{description}</div>
        </div>
        <div className={join(styles.bottom, styles.columnLayout)}>
          <h1>Tasks by Person</h1>
          <div className={styles.scrollableContent}>
            {Object.entries(tasksByAssignee).map(([assignee, tasks]) => (
              <div key={assignee} className={styles.assigneeSection}>
                <h2>{assignee}</h2>
                <ul>
                  {tasks.map((task, index) => (
                    <li key={index}>
                      <b>{task.title}</b> ({task.start} - {task.end})
                      <br />
                      Description: {task.description}
                      <br />
                      Story Points: {task.storyPoints}
                      {task.dependencies.length > 0 && (
                        <>
                          <br />
                          Dependencies: {task.dependencies.join(", ")}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={join(styles.right, styles.columnLayout)}>
        <h1>Sprint Tasks (Calendar View)</h1>
        <Calendar
          localizer={localizer}
          events={schedule.map((event) => ({
            title: event.title + ` (${event.assignee})`,
            start: event.start,
            end: event.end,
          }))}
          startAccessor={"start"}
          endAccessor={"end"}
          className={styles.calendar}
        />
      </div>
    </div>
  );
}
