import { useContext } from 'react'
import './App.css'
import { ThemeContext, ThemeContextComponent,  } from './components/myContext/ThemeProvider'
function App() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div className='App' style={{background:theme.dark,height:'100vh',width:'100vw'}}>
        <ThemeContext.Provider value={'dark'} >

          <ThemeContextComponent />
     
        </ThemeContext.Provider>
         
        
      </div>
    </>
  )
}

export default App
