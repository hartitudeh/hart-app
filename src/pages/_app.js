import "@/styles/globals.css";
import { createContext, useState } from "react";
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import {Home} from '@/pages/Home';

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
