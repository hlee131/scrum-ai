import { useState } from "react";
import "./App.css";
import InputPage, { ScrumAIDetails } from "./pages/InputPage";
import OutputPage, { Schedule } from "./pages/OutputPage";

import styles from "./styles/App.module.css";

function App() {
  const [page, setPage] = useState<number>(0);
  const [generatedSchedule, setGeneratedSchedule] = useState<Schedule>([]);
  const [loading, setLoading] = useState(false);

  function onSubmit(data: ScrumAIDetails) {
    setLoading(true);
    fetch(`${import.meta.env.BACKEND_URL}/plan_calendar`, {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      res
        .json()
        .then((json) => setGeneratedSchedule(json))
        .then(() => setPage(1))
        .then(() => setLoading(false));
    });
  }

  return (
    <>
      {loading && (
        <div>
          <span className={styles.loader}></span>
        </div>
      )}
      {page === 0 && !loading ? (
        <InputPage onSubmit={onSubmit} />
      ) : (
        <OutputPage schedule={generatedSchedule} />
      )}
    </>
  );
}

export default App;
