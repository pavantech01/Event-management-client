import React from 'react';

function Account() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 p-10">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-center text-gray-800">Account Management</h1>
            </header>
            <main className="flex flex-col space-y-12">
                {/* Login Section */}
                <section className="bg-white shadow-md rounded-lg p-10">
                    <h2 className="text-2xl font-semibold mb-4">Secure Login</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Username:</label>
                            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Password:</label>
                            <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">Login</button>
                    </form>
                </section>

                {/* Signup Section */}
                <section className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Username:</label>
                            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email:</label>
                            <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Password:</label>
                            <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">Signup</button>
                    </form>
                </section>

                {/* Profile Management Section */}
                <section className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
                    <p className="text-gray-600">Manage your account details and preferences.</p>
                    <button className="mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">Edit Profile</button>
                </section>

                {/* Bookings Section */}
                <section className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Booking History</h2>
                    <p className="text-gray-600">View your past and upcoming bookings.</p>
                    <button className="mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">View Bookings</button>
                </section>

                {/* Reviews Section */}
                <section className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Reviews and Ratings</h2>
                    <p className="text-gray-600">Check reviews you've given and received.</p>
                    <button className="mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">View Reviews</button>
                </section>
            </main>
        </div>
    );
}

export default Account;