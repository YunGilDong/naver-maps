import React from "react"
import MainIndex from './components/mainview/mainindex'
import "./css/App.css";
import './css/style.scss'

class App extends React.Component {
  constructor(props){
    super(props);
  }
 
  render() {
    return(
      <div
        id="approot"
        className="approot"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <MainIndex />
      </div>
    )
  }
}

export default App;
