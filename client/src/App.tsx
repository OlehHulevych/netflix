
import './App.css'
// @ts-ignore
import UserStore from './store/UserStore.ts'
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import AppRoutes from "./AppRouters.tsx";
import {BrowserRouter} from "react-router-dom";
import {Context} from './main.tsx'
import {useEffect} from "react";
import {check} from "./http/userAPI.ts";



const App=observer(()=> {
    // @ts-ignore
    const {user} = useContext(Context);

    // useEffect(()=>{
    //     check().then((data)=>{
    //         user.setUser(true)
    //         user.setIsAuth(true)
    //     })
    // })
  return (
      <>
          <BrowserRouter>
            <AppRoutes/>
          </BrowserRouter>

      </>
  )
})

export default App
