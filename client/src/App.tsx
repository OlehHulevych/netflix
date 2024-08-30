
import './App.css'
// @ts-ignore
import UserStore from './store/UserStore.ts'
import {observer} from "mobx-react-lite";

import AppRoutes from "./AppRouters.tsx";
import {BrowserRouter} from "react-router-dom";




const App=observer(()=> {




  return (
      <>
          <BrowserRouter>
            <AppRoutes/>

          </BrowserRouter>

      </>
  )
})

export default App
