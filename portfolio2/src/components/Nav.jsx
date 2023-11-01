import {Link, useLocation} from 'react-router-dom';

function Nav() {
    const currentTab = useLocation().pathname;

    return (
        <>
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <Link
                    to='/about'
                    className={currentTab === '/about' ? 'nav-link active' : 'nav-link'}
                    >
                    About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                    to='/projects'
                    className={currentTab === '/projects' ? 'nav-link active' : 'nav-link'}
                    >
                    Projects
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                    to='/contact'
                    className={currentTab === '/contact' ? 'nav-link active' : 'nav-link'}
                    >
                    Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                    to='/resume'
                    className={currentTab === '/resume' ? 'nav-link active' : 'nav-link'}
                    >
                    Resume
                    </Link>
                </li>
            </ul>
        </>
    )
}
export default Nav;