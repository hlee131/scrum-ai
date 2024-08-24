import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputPage from "./pages/InputPage";
import OutputPage from "./pages/OutputPage";

function App() {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/flask").then(res => res.json()).then(
      data => {
        setData(data)
        console.log(data);
      })
  }, [])



  return <>{page === 0 ? <InputPage /> : <OutputPage /> }</>;
}

export default App;
