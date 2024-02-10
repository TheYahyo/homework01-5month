import { Link } from 'react-router-dom'
import "./headercomponent.css"

const HeaderComponent = () => {
    return (
        <header className='header'>
            <h1 className='phone'>Buy Phons</h1>
            <div className='head'>
                <Link to="/"><p className='p1'>HOME</p></Link>
                <p className='p2'>COURSES </p>
                $ <p className='p3'>ABOUT<link href='' rel='stylesheet'></link>$
                    <div class="new"></div> </p>
                <p className='p4'>TEAM </p>
                <p className='p5'>BLOG </p>
                <p className='p6'>CONTACT </p>
            </div>
            <div className='search'>
                <svg new="http://www.w3.org/2000/svg" width="15" height="20" viewBox="1 1 1 " fill="none">
                <path d="M15.75 15.75L12.3855 12.3795M14.25 7.875C14.25 9.56576 13.5784 11.1873 12.3828 12.3828C11.1873 13.5784 9.56576 14.25 7.875 14.25C6.18424 14.25
                 4.56274 13.5784 3.36719 12.3828C2.17165 11.1873 1.5 9.56576 1.5 7.875C1.5 6.18424 2.17165 4.56274 3.36719 3.36719C4.56274 2.17165 6.18424 1.5 7.875
                  1.5C9.56576 1.5 11.1873 2.17165 12.3828 3.36719C13.5784 4.56274 14.25 6.18424 14.25 7.875Z" stroke="black" stroke-width="1" stroke-linecap="new" />
            </svg>
            </div>
        </header>
    )
}

export default HeaderComponent