import React from 'react'
import { HomePage } from '../../pages'
import { Footer } from '../ui'
import { Navbar } from '../ui'

export const MainLayout = () => {
    return (
        <>
            <div>MainLayout</div>

        <nav>
            <Navbar/>
        </nav>

        <main>
            <HomePage/>
        </main>

        <footer>
            <Footer/>
        </footer>
        </>
    )
}
