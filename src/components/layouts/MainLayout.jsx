import { HomePage } from '../../pages'
import { Footer, Navbar } from '../ui'

import React from 'react'

console.log(React)

export const MainLayout = () => {
    return (
        <>
            <div>MainLayout</div>

            <nav>
                <Navbar />
            </nav>

            <main>
                <HomePage />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}
