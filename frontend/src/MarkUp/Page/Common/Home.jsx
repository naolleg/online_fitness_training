import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import ExplorChategories from './ExplorChategories'
import TopTrainers from './TopTrainers'
import Advice from './Advice'
import Footer from './Footer'
import ContactPage from './ContactPage'

function Home() {
    return (
        <>
            <div className='bg-black'>
                <Nav />
                <hr className='text-white bg-white' />
                <Hero />
                <hr className='text-gray-600 bg-gray-600' />
                <ExplorChategories />
                <hr className='text-gray-600 bg-gray-600' />
                <TopTrainers />
                <hr className='text-gray-600 bg-gray-600' />
                <Advice />
                <hr className='text-gray-600 bg-gray-600' />
                <ContactPage />
                <hr className='text-gray-600 bg-gray-600' />

                <Footer />
            </div>

        </>
    )
}

export default Home