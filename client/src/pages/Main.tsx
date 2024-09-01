
import AdComponent from '../Components/AdComponent'
import Catalog from "../Components/Catalog.tsx";
import Footer from "../Components/Footer.tsx";
import Layout from "../Layout.tsx";
import {useContext, useEffect} from "react";
import {Context} from "../main.tsx";
import {useNavigate} from "react-router-dom";
import {check} from "../http/userAPI.ts";

export default function Main() {
    // @ts-ignore
    const {user} = useContext(Context);
    const navigate = useNavigate();


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

