
import AdComponent from '../Components/AdComponent'
import Catalog from "../Components/Catalog.tsx";
import Footer from "../Components/Footer.tsx";
import Layout from "../Layout.tsx";


export default function Main() {
    // @ts-ignore




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

