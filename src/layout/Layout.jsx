import { Outlet } from 'react-router-dom'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
import NavBar from '../componentes/NavBar'

const Layout = () => {
    return (
        <>
            <Header />
            <main className='flex'>
                <NavBar/>
                <Outlet/>
            </main>
            <Footer/>
        </>

    )
}

export default Layout