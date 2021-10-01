import React from 'react'
import Hero from '../components/Hero'
import Table from '../components/Table'

const Home = () => {
    return (
        <div class='container mx-auto'>
            <Hero />
            <Table class='border-1 border-gray-50'/>
            <div class='grid grid-cols-4 border border-black p-8 border-3 border-black'>
                <div class='col-span-4 border-2 p-4'>
                    I am the Navigation
                </div>
                <div class='grid col-span-4 md:col-span-1'>
                    I am the sidebar
                </div>
                <div class='grid col-span-3'>
                    I am the content
                </div>
            </div>
        </div>
    )
}

export default Home
