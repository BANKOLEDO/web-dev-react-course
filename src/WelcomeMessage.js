// function Component - stateless 
// function WelcomeMessage(props) {
//     return <h1>Welcome to the , {props.name}</h1>
// }
// Class Component -> stateful
import React from 'react';
class WelcomeMessage extends React.Component {
    render() {
        return (
            <div>
                <First />
                <Second />
            </div>
        );
    }
}

class First extends React.Component {
    render() {
        return (
            <div>
                <h1> Code Point</h1>
            </div>
        );
    }
}

class Second extends React.Component {
    render() {
        return (
            <div>
                <h2> Code Point</h2>
                <p>Best way to learn how to code </p>
            </div>
        )
    }
}

export default WelcomeMessage;