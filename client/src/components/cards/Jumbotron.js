import React from 'react';
import Typewriter from 'typewriter-effect';

const Jumbotron = ({ text }) => (
    <Typewriter
        options={{
            strings: text, // text: array of strings
            autoStart: true,
            loop: true,
        }}
    />
);


export default Jumbotron;
