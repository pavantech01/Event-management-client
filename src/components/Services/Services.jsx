import React from 'react';

function Services() {
    return (
        <div className="max-w-6xl mx-auto p-6">
    <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none">
    <li className="bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
        <img src="https://picsum.photos/200/300" alt="Decoration" className="w-full h-48 object-cover mb-4 rounded-lg" />
        <h2 className="text-xl font-semibold">Decoration</h2>
        <p className="text-gray-600">Beautiful and elegant decorations for your events.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 hover:scale-110">
            Learn More
        </button>
    </li>
    <li className="bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
        <img src="https://picsum.photos/200/301" alt="Food & Catering" className="w-full h-48 object-cover mb-4 rounded-lg" />
        <h2 className="text-xl font-semibold">Food & Catering</h2>
        <p className="text-gray-600">Delicious food options tailored to your needs.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 hover:scale-110">
            Learn More
        </button>
    </li>
    <li className="bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
        <img src="https://picsum.photos/200/302" alt="Cinematography" className="w-full h-48 object-cover mb-4 rounded-lg" />
        <h2 className="text-xl font-semibold">Cinematography</h2>
        <p className="text-gray-600">Capturing your moments with stunning visuals.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 hover:scale-110">
            Learn More
        </button>
    </li>
    <li className="bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
        <img src="https://picsum.photos/200/303" alt="AV & Lighting" className="w-full h-48 object-cover mb-4 rounded-lg" />
        <h2 className="text-xl font-semibold">AV & Lighting</h2>
        <p className="text-gray-600">Professional audio and lighting solutions for events.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 hover:scale-110">
            Learn More
        </button>
    </li>
</ul>
</div>
    );
}

export default Services;