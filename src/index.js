import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// class WhoAmI extends Component {
//     constructor (props) {
//         super (props)
//         this.state = {
//             years: 29
//         }
//         this.nextYear = this.nextYear.bind(this)
//         this.prevYear = this.prevYear.bind(this)
//     }
//     nextYear () {
//         // this.state.years++
//         this.setState(state => ({
//             years: ++state.years
//         }))
//     }
//     prevYear () {
//         this.setState (state => ({
//             years: --state.years
//         }))
//     }
//     render () {
//         const {name, surname, link} = this.props
//         const {years} = this.state
//         return (
//             <>
//                 <button onClick={this.nextYear}> ++ </button>
//                 <button onClick={this.prevYear}> -- </button>
//                 <h1> My name is {name}, surname - {surname}, years - {years} </h1>
//                 <a href={link}>My profile</a>
//             </>
//         )
//     }

// }






// const All = () => {
//     return (
//         <>
//             <WhoAmI name = 'Elisei' surname = 'Trifan' link = 'google.com' />
//             <WhoAmI name = 'Alina' surname = 'Trifan' link = 'google.com' />
//             <WhoAmI name = 'Tima' surname = 'Trifan' link = 'google.com' />
//         </>
//     )
// }

// ReactDOM.render(<All/> , document.getElementById('root'))