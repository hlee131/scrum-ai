import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import styles from "../styles/OutputPage.module.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function join(...classes: string[]) {
  return classes.join(" ");
}

export default function OutputPage() {
  return (
    <div className={styles.outputPage}>
      <div className={styles.left}>
        <div className={join(styles.top, styles.columnLayout)}>
          <h1>Goal Description</h1>
          <div className={styles.scrollableContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            faucibus eros tortor, et placerat massa facilisis ac. Nullam finibus
            sapien a ante fermentum luctus. Morbi pellentesque, nisi eget rutrum
            bibendum, libero libero aliquam lorem, et rhoncus arcu quam sit amet
            nisl. Etiam euismod porttitor tortor. Integer iaculis tempor odio,
            ut euismod velit vehicula sed. Morbi mollis ex in tortor pulvinar
            finibus. Nunc molestie eros et interdum vestibulum. Aliquam posuere
            est tincidunt neque ornare, eu sodales felis fermentum. Etiam
            accumsan, massa sed gravida porttitor, mauris leo pulvinar sapien,
            aliquet commodo nunc libero nec leo. Aliquam sed metus vestibulum,
            pulvinar lectus ut, egestas urna. Aenean augue risus, tincidunt ut
            libero non, congue efficitur sem. Suspendisse non auctor leo. Morbi
            felis ligula, consequat ut justo eget, tempor mattis nisl. Aliquam
            tortor nunc, blandit nec quam sit amet, aliquam elementum erat.
            Nulla nibh ante, faucibus et libero sit amet, aliquet dapibus
            ligula. Nullam fermentum at erat in vehicula. Cras ex risus, varius
            lobortis efficitur eu, blandit et sem. Vivamus ac feugiat justo.
            Integer ut justo dictum, condimentum libero non, molestie dui.
            Vivamus pretium posuere purus, eget cursus mi viverra sit amet.
            Vestibulum fermentum imperdiet lorem, in porta tellus bibendum sed.
            In mattis efficitur magna, vel dictum odio egestas eget. Quisque
            egestas orci id vehicula sollicitudin. Suspendisse a dignissim
            lacus, malesuada sagittis magna. Nullam fermentum at erat in
            vehicula. Cras ex risus, varius lobortis efficitur eu, blandit et
            sem. Vivamus ac feugiat justo. Integer ut justo dictum, condimentum
            libero non, molestie dui. Vivamus pretium posuere purus, eget cursus
            mi viverra sit amet. Vestibulum fermentum imperdiet lorem, in porta
            tellus bibendum sed. In mattis efficitur magna, vel dictum odio
            egestas eget. Quisque egestas orci id vehicula sollicitudin.
            Suspendisse a dignissim lacus, malesuada sagittis magna.
          </div>
        </div>
        <div className={join(styles.bottom, styles.columnLayout)}>
          <h1>Sprint Tasks (List View)</h1>
          <div className={styles.scrollableContent}>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                faucibus eros tortor, et placerat massa facilisis ac. Nullam
                finibus sapien a ante fermentum luctus.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                faucibus eros tortor, et placerat massa facilisis ac. Nullam
                finibus sapien a ante fermentum luctus.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                faucibus eros tortor, et placerat massa facilisis ac. Nullam
                finibus sapien a ante fermentum luctus.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                faucibus eros tortor, et placerat massa facilisis ac. Nullam
                finibus sapien a ante fermentum luctus.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                faucibus eros tortor, et placerat massa facilisis ac. Nullam
                finibus sapien a ante fermentum luctus.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={join(styles.right, styles.columnLayout)}>
        <h1>Sprint Tasks (Calendar View)</h1>
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor={"start"}
          endAccessor={"end"}
          className={styles.calendar}
        />
      </div>
    </div>
  );
}
