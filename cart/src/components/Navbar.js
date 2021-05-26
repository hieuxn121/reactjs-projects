import React from 'react'

const Navbar = ({nbProducts}) => {
    return (
        <nav>
            <div className="menu">
                <h1>Use Reducer</h1>
                <div className="nbItems">
                   Items: {nbProducts}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
