import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/product">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div>HomePage</div>
        </div>
    )
}

export default HomePage