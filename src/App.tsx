import './App.css'
import { Greet } from './components/Greet'
import { Heading } from './components/Heading'
import { PersonList } from './components/Personlist'
import { Status } from './components/Status'

function App() {


  return (
    <>
      <div className='App'>
        <Status status='loading' />
        <Heading/>
      </div>
    </>
  )
}

export default App
