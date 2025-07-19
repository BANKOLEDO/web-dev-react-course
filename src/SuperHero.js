import React from "react";

class SuperHero extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <h1>{this.props.data.name}</h1>
                </li>
            </ul>
        );
    }
}

export default SuperHero;