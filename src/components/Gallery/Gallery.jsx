import React from 'react';

function Gallery() {
    return (
        <div>
            <h1>Gallery</h1>
            <section>
                <h2>Images</h2>
                {/* Replace with dynamic image rendering */}
                <img src="https://via.placeholder.com/150" alt="Sample Event" />
                <img src="https://via.placeholder.com/150" alt="Sample Event" />
            </section>
            <section>
                <h2>Videos</h2>
                {/* Replace with dynamic video rendering */}
                <video width="320" height="240" controls>
                    <source src="sample.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
            <section>
                <h2>Client Reviews</h2>
                <blockquote>
                    "Amazing service and attention to detail!" - Client A
                </blockquote>
                <blockquote>
                    "Highly recommend for any event!" - Client B
                </blockquote>
            </section>
        </div>
    );
}

export default Gallery;
