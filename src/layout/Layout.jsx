import { Outlet } from 'react-router-dom'
import Header from '../componentes/Header'
import NavBar from '../componentes/NavBar'
import Footer from '../componentes/Footer'

const Layout = () => {
    return (
        <>
            <Header />
            <NavBar />
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>

    )
}

export default Layout