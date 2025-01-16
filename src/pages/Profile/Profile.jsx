import React from 'react';

const Profile = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-700">Profile</h2>
                <div className="mt-4 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value="John Doe"
                            readOnly
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value="johndoe@example.com"
                            readOnly
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg"
                        />
                    </div>
                    <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;