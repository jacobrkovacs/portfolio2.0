import {Link, useLocation} from 'react-router-dom';
import '../styles/Nav.css'

function Nav() {
    const currentTab = useLocation().pathname;

    return (
        <>
            <div className='navbar d-flex align-items-center'>
                <div>

                </div>
                <Link className={currentTab === '/' ? 'nav-link glow justify-content-start' : 'nav-link justify-content-start'}>
                    My website
                </Link>
            <div className='d-flex justify-content-end'>
            <ul className='custom-nav'>
                <li className='nav-item'>
                    <Link
                    to='/about'
                    className={currentTab === '/about' ? 'my-3 nav-link glow' : 'my-3 nav-link'}
                    >
                    About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                    to='/projects'
                    className={currentTab === '/projects' ? 'nav-link glow my-3 ' : 'nav-link my-3 '}
                    >
                    Projects
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                    to='/contact'
                    className={currentTab === '/contact' ? 'nav-link glow my-3 ' : 'nav-link my-3 '}
                    >
                    Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                    to='/resume'
                    className={currentTab === '/resume' ? 'nav-link glow my-3 ' : 'nav-link my-3 '}
                    >
                    Resume
                    </Link>
                </li>
            </ul>
            </div>
            </div>
        </>
    )
}
export default Nav;