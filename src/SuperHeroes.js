import React from "react";
import SuperHero from "./SuperHero";
// class SuperHeroes extends React.Component {
//     render() {
//         return <ul>
//             <li>
//                 <h1>Superman</h1>
//             </li>
//             <li>
//                 <h1>Batman</h1>
//             </li>
//             <li>
//                 <h1>Spiderman</h1>
//             </li>
//         </ul>
//     }
// }
class SuperHeroes extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
            [
                {
                    "name":"Superman"
                },
                {
                    "name":"Batman"
                },
                {
                    "name":"Spiderman"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.data.map((item) => <SuperHero data = {item} />)}
                </ul>
            </div>
        )
    }
}

export default SuperHeroes