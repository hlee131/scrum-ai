import { useState } from "react";
import "./App.css";
import InputPage, { ScrumAIDetails } from "./pages/InputPage";
import OutputPage, { Schedule } from "./pages/OutputPage";

import styles from "./styles/App.module.css";

function App() {
  const [page, setPage] = useState<number>(0);
  const [generatedSchedule, setGeneratedSchedule] = useState<Schedule>([]);
  const [loading, setLoading] = useState(false);
  const [desc, setDesc] = useState("");

  function onSubmit(data: ScrumAIDetails) {
    setLoading(true);
    fetch(`https://scrum-ai.onrender.com/plan_calendar`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      res
        .json()
        .then((json) => setGeneratedSchedule(JSON.parse(json)))
        .then(() => setPage(1))
        .then(() => setLoading(false));
    });
  }

  return (
    <>
      {loading && (
        <div className={styles.spinner}>
          Generating schedule...
          <span className={styles.loader}></span>
        </div>
      )}
      {page === 0 && !loading ? (
        <InputPage onSubmit={onSubmit} desc={desc} setDesc={setDesc} />
      ) : (
        <OutputPage schedule={generatedSchedule} description={desc} />
      )}
    </>
  );
}

export default App;
