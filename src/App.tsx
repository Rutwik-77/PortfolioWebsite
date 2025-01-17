 
/** @format */
import "@mantine/core/styles.css";
import {  MantineProvider } from "@mantine/core";
import HomePage from "./Components/HomePage";
import { pdfjs } from "react-pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <h1>
      <MantineProvider>
        <HomePage></HomePage>
      </MantineProvider>
    </h1>
  );
};

export default App;
