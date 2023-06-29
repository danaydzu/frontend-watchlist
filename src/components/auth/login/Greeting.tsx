import React from 'react';
interface IGreeting {
    name: string
}
const Greeting = ({name}: IGreeting) => {
    return (
        <div>
            <h1>Hi, {name}</h1>
        </div>
    );
};

export default Greeting;