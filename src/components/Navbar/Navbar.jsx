import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        // className="max-w-full mx-auto p-4 md:p-6 lg:p-8"
        <nav className="bg-blue-500 text-white p-4 flex justify-between items-center max-w-full mx-auto md:p-6 lg:p-8">
            <div className="text-2xl font-bold">Event Management</div>
            <ul className="list-none flex gap-4">
                <li><Link to="/" className="text-white text-base hover:underline decoration-transparent hover:decoration-underline">Home</Link></li>
                <li><Link to="/services" className="text-white text-base hover:underline decoration-transparent hover:decoration-underline">Our Service</Link></li>
                <li><Link to="/events" className="text-white text-base hover:underline decoration-transparent hover:decoration-underline">Events</Link></li>
                <li><Link to="/gallery" className="text-white text-base hover:underline decoration-transparent hover:decoration-underline">Gallery</Link></li>
                <li><Link to="/about" className="text-white text-base hover:underline decoration-transparent hover:decoration-underline">About</Link></li>
                <li><Link to="/contact" className="text-white text-base hover:underline decoration-transparent hover:decoration-underline">Contact Us</Link></li>
                <li><Link to="/account" className="text-white text-base hover:underline decoration-transparent hover:decoration-underline">Account</Link></li>

                {/* Temp Button */}
                <li><Link to="/login" className="text-white text-base hover:underline decoration-transparent hover:decoration-underline bg-red-500 p-2 rounded">Login</Link></li>
                <li><Link to="/signup" className="text-white text-base hover:underline decoration-transparent hover:decoration-underline bg-green-500 p-2 rounded">Signup</Link></li>
                <li>
                    <Link to="/profile" className="text-white text-base hover:underline decoration-transparent hover:decoration-underline bg-yellow-500 p-2 rounded">Profile</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;