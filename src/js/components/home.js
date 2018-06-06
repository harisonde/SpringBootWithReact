import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Input, Grid, Button, Label} from 'semantic-ui-react';
import MenuComponent from './menuComponent';
import Axios from 'axios';

class Home extends Component{
  constructor(props){
    super(props);
      this.state={
        firstName:'',
        lastName:'',
        id:'',
        addStudentLoading:false,
        studentAddedMessage: false
      };
      this.addStudent = this.addStudent.bind(this);
  }

 addStudent(){
  const params = {
     firstName: this.state.firstName,
     lastName: this.state.lastName,
     id: this.state.id
   };
   this.setState({addStudentLoading: true, studentAddedMessage: false});
    Axios.get('/api/student/add',{params})
     .then((response) => {
       if(response.status === 200){
          this.setState({studentAddedMessage: true, addStudentLoading: false});
       }
     }).catch((error) => {
       console.log('an error occured!!', error)
      this.setState({addStudentLoading: false});
     });
  };

  render(){
    return(
      <div style={{width:'100%', height: '610px'}}>
        <MenuComponent/>
        <br/>
        <center><h4>Welcome to Student DashBoard!</h4></center>
        <br/>

        <hr/>
        <br/>
        <Input type='text'
          placeholder='First Name'
          value={this.state.firstName}
          onChange={(event) => this.setState({firstName: event.target.value})}
        />

        <Input type='text'
          placeholder='Last Name'
          value={this.state.lastName}
          onChange={(event) => this.setState({lastName: event.target.value})}
        />

        <Input type='text'
          placeholder='Student Id'
          value={this.state.id}
          onChange={(event) => this.setState({id: event.target.value})}
        />

        <Button
          loading={this.state.addStudentLoading}
          onClick={() => {this.addStudent()}}
          primary>Add Student
        </Button>

        {this.state.studentAddedMessage &&
          <div>
            <br/>
            <center><Label size='large'>Student information successfully added!!!</Label></center>
          </div>
        }
        <br/>
        <br/>
        <hr/>

      </div>
    );
  }
}
export default Home;

ReactDOM.render(<Home/>, document.getElementById("mainDiv"));
