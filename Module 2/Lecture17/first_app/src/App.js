import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  name = "Sujal";
  render() {
    return (
      <>
        <div>
          <h1>Hello {this.name}</h1>
        </div>
        <div>
          <p>This is first paragraph</p>
        </div>
      </>
    );
  }
}

// function App() {
//   const name="Sujal"
//   return (
//     <div>
//       <h1 style={{
//         color:'red',
//         textAlign: "center"
//         }}>
//         Hello from {name}
//       </h1>
//     </div>

//   );
// }

export default App;
