import React from 'react'
import Navbar from './Navbar'
import LeftSideBar from './LeftSideBar'
import RightSideArea from './RightSideArea'

export default function Home() {



    return (
        <>
            <Navbar />

            <div className='d-flex'>
                <LeftSideBar />
                <RightSideArea/>
            </div >

        </>
    )
}
// -------------------------------------\\

