
import AdComponent from '../Components/AdComponent'
import Catalog from "../Components/Catalog.tsx";
import Footer from "../Components/Footer.tsx";

export default function Main() {
  return (
    <main className="w-full min-h-screen  ">
      <AdComponent/>
      <Catalog/>
        <Footer/>
    </main>
  )
}
