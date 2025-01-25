import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/events');
                if (isMounted) {
                    setEvents(response.data.events);
                }
            } catch (err) {
                if (isMounted) {
                    setError('Failed to fetch events.');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        const user = localStorage.getItem('user');
        if (user) {
            const parsedUser = JSON.parse(user);
            setIsAdmin(parsedUser.role === 'admin');
        }

        fetchEvents();

        return () => {
            isMounted = false;
        };
    }, []);

    const handleUpdateEvent = (eventId) => {
        navigate(`/events/add?id=${eventId}`);
    };

    const handleDeleteEvent = async (eventId) => {
        try {
            await axios.delete(`/api/events/${eventId}`);
            setEvents(events.filter(event => event._id !== eventId));
        } catch (err) {
            setError('Failed to delete event.');
        }
    };

    if (loading) {
        return (
            <div className="events-page min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Events</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="bg-white shadow-md rounded overflow-hidden animate-pulse">
                                <div className="w-full h-48 bg-gray-300"></div>
                                <div className="p-4">
                                    <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                                    <div className="h-4 bg-gray-300 mb-4 rounded"></div>
                                    <div className="flex space-x-2">
                                        <div className="h-8 w-20 bg-gray-300 rounded"></div>
                                        <div className="h-8 w-20 bg-gray-300 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="events-page min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Events</h1>
                {isAdmin && (
                    <div className="flex justify-center mb-6">
                        <Link to="/events/add">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                                Create Event
                            </button>
                        </Link>
                    </div>
                )}
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <div key={event._id} className="bg-white shadow-md rounded overflow-hidden">
                            {event.image && event.image.url ? (
                                <img
                                src={event.image.url}
                                alt={event.title}
                                    className="w-full h-48 object-cover"
                                />
                            ) : (
                                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                                    <h2 className="text-lg font-semibold text-gray-600">
                                        {/* {event.title} */}
                                        No image
                                    </h2>
                                </div>
                            )}
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h2>
                                <p className="text-gray-600 mb-4">{event.description}</p>
                                {isAdmin && (
                                    <div className="flex justify-between">
                                        <button
                                            onClick={() => handleUpdateEvent(event._id)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDeleteEvent(event._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;