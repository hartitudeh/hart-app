import "@/styles/globals.css";
import { createContext, useState } from "react";
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import {Home} from '@/pages/Home';
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export const AppContext = createContext({});

export default function App({ Component, pageProps }) {
  const [username, setUsername] = useState("Hartitudeh");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <div className="App">
        <Component {...pageProps} />
      </div>
    </AppContext.Provider>
  );
}
