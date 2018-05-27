import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Home extends Component{
  render(){
    return(
      <h4>Hello!!!!!!</h4>
    );
  }
}
export default Home;

ReactDOM.render(<Home/>, document.getElementById("create-article-form"));
