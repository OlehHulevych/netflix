
import './App.css'
import Layout from './Layout.tsx'
import Main from './pages/Main.tsx'
// @ts-ignore
import UserStore from './store/UserStore.ts'



function App() {
  

  return (
        <Layout>
            <Main/>
        </Layout>
  )
}

export default App
