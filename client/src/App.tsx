import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputPage, { ScrumAIDetails } from "./pages/InputPage";
import OutputPage, { Schedule } from "./pages/OutputPage";

function App() {
  const [page, setPage] = useState<number>(0);
  const [generatedSchedule, setGeneratedSchedule] = useState<Schedule>([]);

  function onSubmit(data: ScrumAIDetails) {
    fetch(`${import.meta.env.BACKEND_URL}/plan_calendar`, {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      res
        .json()
        .then((json) => setGeneratedSchedule(json))
        .then(() => setPage(1));
    });
  }

  return (
    <>
      {page === 0 ? (
        <InputPage onSubmit={onSubmit} />
      ) : (
        <OutputPage schedule={generatedSchedule} />
      )}
    </>
  );
}

export default App;
