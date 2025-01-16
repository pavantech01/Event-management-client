import React from 'react';

function Events() {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>
            <p className="text-center text-lg text-gray-600 mb-6">
                Join us for a variety of exciting events tailored to your needs. Whether it's a corporate gathering, a social celebration, or a cultural festival, we have something for everyone!
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none">
                <li className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                    <img src="https://picsum.photos/200/305" alt="Corporate Event" className="w-full h-32 object-cover rounded-t-lg" />
                    <h2 className="text-xl font-semibold mt-2">Corporate Events</h2>
                    <p className="text-gray-600">Professional gatherings that inspire collaboration and innovation.</p>
                </li>
                <li className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                    <img src="https://picsum.photos/200/306" alt="Social Event" className="w-full h-32 object-cover rounded-t-lg" />
                    <h2 className="text-xl font-semibold mt-2">Social Events</h2>
                    <p className="text-gray-600">Celebrate milestones and create memories with friends and family.</p>
                </li>
                <li className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                    <img src="https://picsum.photos/200/307" alt="Cultural Event" className="w-full h-32 object-cover rounded-t-lg" />
                    <h2 className="text-xl font-semibold mt-2">Cultural Events</h2>
                    <p className="text-gray-600">Experience the richness of diverse cultures through art, music, and food.</p>
                </li>
                <li className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                    <img src="https://picsum.photos/200/308" alt="Upcoming Event" className="w-full h-32 object-cover rounded-t-lg" />
                    <h2 className="text-xl font-semibold mt-2">Upcoming Events</h2>
                    <p className="text-gray-600">Stay tuned for our exciting upcoming events and activities!</p>
                </li>
            </ul>
        </div>
    );
}

export default Events;