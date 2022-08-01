
import React from "react";
import "./style.css";
import { render } from 'react-dom';
import { LoremIpsum } from 'react-lorem-ipsum';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers:[],
      clientTxt:"",
      text:"",
      errors: []
      
    }

  }

  

  click1() {
    let ers = []
    if (this.state.clientTxt === "") {
      ers.push("please write some things.")
    }

    this.setState({ errors: ers })

      if (this.state.clientTxt !== "") {
        this.setState({text: this.state.clientTxt })
        this.setState({clientTxt : "" })
      }
    
  }

  change1(event) {
    let ans= []
    this.setState({clientTxt: event.target.value })
    ans.push(event.target.value)
    this.setState({answers:ans})
  }

  

  render() {
    return (
      <>
      <h1>Persian Eliza</h1>
      <div className="scrollable-div">
          <>
          <ul>
          {
            this.state.errors.map((v, i) => (
              <>
                <li>{v}</li>
              </>

            ))

          }
        </ul>
        </>
           {/* <LoremIpsum p={12} />  */}
        <>
        {
          <>
            <table border="1">
              <tr>
                <th>:</th>
                <th>{this.state.text}</th>
              </tr>
            </table>
          </>
        }
        </>
      </div>
      <div className="b-div">
        <>
        <input  className="t-size" type="text" value={this.state.clientTxt} onChange={this.change1.bind(this)} />
        <input className="b-size" type="button" value="send" onClick={this.click1.bind(this)}></input>
        </>
      </div>
      </>
    )
  }
}

export default App;
