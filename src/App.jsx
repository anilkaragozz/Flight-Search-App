import './index.css'
import { SearchForm } from './components/search-form'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
    <div className="bg-image h-screen">
      <Navbar/>
      <SearchForm/>
    </div>
    </>
  )
}

export default App
