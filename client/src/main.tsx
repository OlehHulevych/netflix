import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createContext} from "react";
import UserStore from "./store/UserStore.ts";
import {RegProvider} from "./context/RegContext.tsx";

type ContextType = {
    user: UserStore | null;
};

export const Context = createContext<ContextType|null>(null);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RegProvider>
    <Context.Provider value={{
        user:new UserStore()

    }}>
            <App/>

    </Context.Provider>
      </RegProvider>
  </React.StrictMode>,
)
