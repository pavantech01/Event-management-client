import React from 'react';

function Contact() {
    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Help & Support</h2>
                <p className="text-lg">For any assistance, reach out to us via the methods below:</p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Email</h2>
                <p className="text-lg">Email us at <a href="mailto:support@eventmanagement.com" className="text-blue-600 hover:text-blue-800">support@eventmanagement.com</a></p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-2">Social Media</h2>
                <ul className="flex flex-wrap justify-center mb-4">
                    <li className="mr-4 mb-2">
                        <a href="#facebook" className="text-blue-600 hover:text-blue-800">
                            <i className="fab fa-facebook fa-lg mr-2"></i> Facebook
                        </a>
                    </li>
                    <li className="mr-4 mb-2">
                        <a href="#twitter" className="text-blue-600 hover:text-blue-800">
                            <i className="fab fa-twitter fa-lg mr-2"></i> Twitter
                        </a>
                    </li>
                    <li className="mr-4 mb-2">
                        <a href="#instagram" className="text-blue-600 hover:text-blue-800">
                            <i className="fab fa-instagram fa-lg mr-2"></i> Instagram
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Contact;