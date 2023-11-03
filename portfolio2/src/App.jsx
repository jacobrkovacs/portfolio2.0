import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import bgImg from './assets/images/pexels-abdullah-ghatasheh-1631677.jpg'


function App() {

  return (
    <>
      <div style={{backgroundImage: `url(${bgImg})`, height: '100vh'}}>
        <Nav />
        <main className='mx-5'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App;
