import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/events');
                setEvents(response.data);
            } catch (err) {
                setError('Failed to fetch events.');
            }
        };

        fetchEvents();
    }, []);

    const handleDelete = async (eventId) => {
        try {
            await axios.delete(`http://localhost:5000/api/events/${eventId}`);
            setEvents(events.filter(event => event.id !== eventId));
        } catch (err) {
            setError('Failed to delete event.');
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>
            {error && <p className="text-red-500">{error}</p>}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none">
                {events.map(event => (
                    <li key={event.id} className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                        <img src={event.imageUrl} alt={event.title} className="w-full h-32 object-cover rounded-t-lg" />
                        <h2 className="text-xl font-semibold mt-2">{event.title}</h2>
                        <p className="text-gray-600">{event.description}</p>
                        <button onClick={() => handleDelete(event.id)} className="mt-2 px-4 py-2 font-bold text-white bg-red-500 rounded-lg hover:bg-red-600">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
