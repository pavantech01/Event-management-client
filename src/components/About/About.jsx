import React from 'react';

function About() {
    return (
        <div className="about-page max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <section className="hero-section text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-gray-600">
                    We are dedicated to making your events unforgettable with our expertise and passion.
                </p>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card bg-white shadow-lg rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50">
                        <img src="https://picsum.photos/300/200" alt="Why Choose Us" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                        <p className="text-gray-600">
                            Our team of professionals has years of experience in event planning and execution.
                        </p>
                    </div>
                    <div className="card bg-white shadow-lg rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-yellow-50">
                        <img src="https://picsum.photos/300/201" alt="Why Choose Us" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                        <p className="text-gray-600">
                            We tailor our services to meet your unique needs and preferences.
                        </p>
                    </div>
                    <div className="card bg-white shadow-lg rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50">
                        <img src="https://picsum.photos/300/202" alt="Why Choose Us" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Attention to Detail</h3>
                        <p className="text-gray-600">
                            Every detail is meticulously planned to ensure a flawless event.
                        </p>
                    </div>
                </div>
            </section>

            {/* Previous Clients Section */}
            <section className="previous-clients mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Previous Clients</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="client-card bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        <img src="https://picsum.photos/150/150" alt="Client 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Client A</h3>
                        <p className="text-gray-600">"Amazing service and attention to detail!"</p>
                    </div>
                    <div className="client-card bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        <img src="https://picsum.photos/151/151" alt="Client 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Client B</h3>
                        <p className="text-gray-600">"Highly recommend for any event!"</p>
                    </div>
                    <div className="client-card bg-white shadow-lg rounded-lg p- 6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        <img src="https://picsum.photos/152/152" alt="Client 3" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Client C</h3>
                        <p className="text-gray-600">"Professional and reliable service!"</p>
                    </div>
                    <div className="client-card bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        <img src="https://picsum.photos/153/153" alt="Client 4" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Client D</h3>
                        <p className="text-gray-600">"They made our event a huge success!"</p>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="our-team mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        <img src="https://picsum.photos/200/200" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">John Doe</h3>
                        <p className="text-gray-600">Event Planner</p>
                    </div>
                    <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        <img src="https://picsum.photos/201/201" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Jane Smith</h3>
                        <p className="text-gray-600">Catering Specialist</p>
                    </div>
                    <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        <img src="https://picsum.photos/202/202" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Mike Johnson</h3>
                        <p className="text-gray-600">Decor Expert</p>
                    </div>
                    <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        <img src="https://picsum.photos/203/203" alt="Team Member 4" className="w-32 h-32 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Emily Davis</h3>
                        <p className="text-gray-600">Logistics Coordinator</p>
                    </div>
                </div>
            </section>

            {/* Policies Section */}
            <section className="policies mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Our Policies</h2>
                <p className="text-gray-600 text-center">
                    We prioritize transparency and reliability in all our dealings. Our policies are designed to ensure that our clients are informed and satisfied at every step of the event planning process.
                </p>
            </section>

           
        </div>
    );
}

export default About;