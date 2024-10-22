// src/About.js
import React from 'react';

export const About = () => {
    return (
        <section className="p-6 max-w-2xl mx-auto rounded-lg shadow-md">
            <h2 className="text-3xl font-bold  text-center">About Me</h2>
            <p className="mt-4  text-lg">
                Hello! I'm [Your Name], a [Your Title] specializing in [Your Specialization].
            </p>
            <p className="mt-4  text-lg">
                With a background in [Your Educational Background], I've had the opportunity to work on [Key Projects or Achievements].
            </p>
            <p className="mt-4  text-lg">
                I'm passionate about [Your Interests] and believe in [Your Professional Philosophy or Motivation].
            </p>
            <p className="mt-4  text-lg text-center">
                Feel free to reach out or check out my work!
            </p>
        </section>
    );
};

