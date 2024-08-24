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
}

export type Schedule = Event[];

export default function OutputPage({
  schedule,
  description,
}: {
  schedule: Schedule;
  description: string;
}) {
  return (
    <div className={styles.outputPage}>
      <div className={styles.left}>
        <div className={join(styles.top, styles.columnLayout)}>
          <h1>Goal Description</h1>
          <div className={styles.scrollableContent}>{description}</div>
        </div>
        <div className={join(styles.bottom, styles.columnLayout)}>
          <h1>Sprint Tasks (List View)</h1>
          <div className={styles.scrollableContent}>
            <ul>
              {schedule.map((task) => (
                <li>
                  <b>
                    {task.start} - {task.end}
                  </b>
                  : {task.title}
                </li>
              ))}
            </ul>
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
