import React from "react";
import Axios from 'axios';
import "./styles.css";

class Quotes extends React.Component{
    constructor(props){
      super(props)
      this.state={
        quote:null,
        randomQuote:null
      }

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      let url = "https://type.fit/api/quotes";

      Axios.get(url)
      .then((response)=>{
        let quote = response.data;
          this.setState({
            quote
          })
      })
      .catch((e)=>{
        console.log(e)
      })
    }

    handleSubmit(){
        let dataNum = Math.floor(Math.random(this.state.quote.length)*this.state.quote.length)
        this.setState(state=>({
          randomQuote: state.quote[dataNum]
        }))
    }
    render(){
      console.log(this.state.randomQuote);
      let random = this.state.randomQuote ? this.state.randomQuote:{text: "Everything in life is luck.", author: "Donald Trump"};
      return (
        <div>
          <ul>
              <li><p className="quote">{random.text}</p></li>
              <li><p className="author">--{random.author}</p></li>
            </ul>
           <div>
           <button onClick={this.handleSubmit}>Next</button>
           </div> 
          </div>
      )
    }
}
export default Quotes