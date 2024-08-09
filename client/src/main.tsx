import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import SignPage from './pages/SignPage.tsx'
import './index.css'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import RegPage from "./pages/RegPage/RegPage.tsx";




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/login" element={<SignPage/>}/>
                <Route path={"/reg"} element={<RegPage/>} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>,
)
