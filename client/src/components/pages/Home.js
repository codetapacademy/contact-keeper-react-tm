import React from 'react'
import Contacts from '../contacts/Contacts'
import contactContext from '../../context/contact/contactContext'

const Home = () => {
    return (
        <div className="grid-2">
            <div>{/* ContactForm */}</div>
            <div>
                <Contacts />
            </div>
        </div>
    )
}

export default Home
