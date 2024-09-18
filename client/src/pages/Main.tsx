
import AdComponent from '../Components/AdComponent'
import Catalog from "../Components/Catalog.tsx";
import Footer from "../Components/Footer.tsx";
import Layout from "../Layout.tsx";
import {useContext, useEffect} from "react";
import {ListContext} from "../context/ListContext.tsx";
import {jwtDecode} from "jwt-decode";
import {getListById} from "../http/MovieAPI.ts";

export default function Main() {
    // @ts-ignore

    const {listId, setListId} = useContext(ListContext);
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            const decodedToken:any = jwtDecode(token)
            getListById(decodedToken.id).then((data)=>{
                console.log(data)
                setListId(data.id)
            })
        }
        else{
            console.log("no token")
        }
    },[])




  return (
      <Layout>
        <main className="w-full min-h-screen  ">
          <AdComponent/>
          <Catalog/>
            <Footer/>
        </main>
      </Layout>
  )
}

