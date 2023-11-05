import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import bgImg from './assets/images/background.png'

const background = {
  backgroundImage: `url(${bgImg}) norepeat center fixed`,
  backgroundSize: 'cover',
  height: '100vh'
}


function App() {

  return (
    <>
      <div style={background}>
        <Nav />
        <main className='mx-5'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App;
