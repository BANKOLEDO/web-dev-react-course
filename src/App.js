// import logo from './logo.svg';
// import './App.css';
import WelcomeMessage from './WelcomeMessage';
import MainPage from './MainPage';
import SuperHeroes from './SuperHeroes';

function App() {
  return (
    <div className="App">
    <WelcomeMessage />
    <MainPage />
    <SuperHeroes />
    </div>
  );
}

// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: 0
//     }
//     this.setNewNumber = this.setNewNumber.bind(this)
//   };
//   setNewNumber() {
//     this.setState({data: this.state.data + 1})
//   }

//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.setNewNumber}>INCREMENT</button>
//         <Content myNumber = {this.state.data}></Content>
//       </div>
//     );
//   }
// }

// class Content extends React.Component {
//   componentWillMount() {
//     console.log("COMPONENT WILL MOUNT!")
//   }
//   componentDidMount() {
//     console.log("COMPONENT DID MOUNT!")
//   }
//   componentWillReceiveProps(newProps) {
//     console.log("COMPONENT WILL RECEIVE PROPS!")
//   }
//   shouldComponentUpdate(newProps, newState) {
//     return true;
//   }
//   componentWillUpdate(nextProps, nextState) {
//     console.log("COMPONENT WILL UPDATE!")
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log("COMPONENT DID UPDATE!")
//   }
//   componentWillUnmount() {
//     console.log("COMPONENT WILL UNMOUNT!")
//   }

//   render() {
//     return (
//       <div>
//         <h3>{this.props.myNumber}</h3>
//       </div>
//     )
//   }
// }

export default App;
