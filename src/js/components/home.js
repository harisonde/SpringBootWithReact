import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Input, Grid, Button, Label, Table} from 'semantic-ui-react';
import MenuComponent from './menuComponent';
import DisplayStudentDetails from './displayStudentDetails';
import Axios from 'axios';

class Home extends Component{
  constructor(props){
    super(props);
      this.state={
        firstName:'',
        lastName:'',
        id:'',
        searchKeyFname:'',
        addStudentLoading:false,
        searchStudentLoading:false,
        studentAddedMessage: false,
        studentDetails:[]
      };
      this.addStudent = this.addStudent.bind(this);
      this.searchStudentDetails = this.searchStudentDetails.bind(this);
      this.displayStudentDetails = this.displayStudentDetails.bind(this);
  }

 addStudent(){
  const params = {
     firstName: this.state.firstName,
     lastName: this.state.lastName,
     id: this.state.id
   };

   this.setState({
     addStudentLoading: true,
     studentAddedMessage: false
   });

    Axios.get('/api/student/add',{params})
         .then((response) => {
           if(response.status === 200){
              this.setState({studentAddedMessage: true, addStudentLoading: false});
           }})
         .catch((error) => {
           console.log('an error occured!!', error)
          this.setState({addStudentLoading: false});
         });
  };

  searchStudentDetails(){
    const params = {
       firstName: this.state.searchKeyFname
     };
    const responseDataArray = [];
    this.setState({searchStudentLoading: true});
    console.log(this.state.searchKeyFname);
    Axios.get('/api/student/retrieveByFirstName', {params})
            .then((response) => {
                response.data.map((data) => {
                  responseDataArray.push(data);
                });
            this.setState({
              searchStudentLoading: false,
              studentDetails: responseDataArray
            });})
            .catch((error) => {
              console.log(error);
              this.setState({searchStudentLoading: false});
            })
    };

    displayStudentDetails(){
      return this.state.studentDetails.map((data, index) => {
        console.log(data);
        return <DisplayStudentDetails studentData={data} key={index}/>;
      });
    }

  render(){
    return(
      <div style={{width:'100%', height: '610px'}}>
        <MenuComponent/>
        <br/>
        <center><h4>Welcome to Student DashBoard!</h4></center>
        <br/>

        <hr/>
        <br/>

        <Grid container>
          <Grid.Row>
            <Grid.Column width={3}>
              <Input type='text'
                placeholder='First Name'
                value={this.state.firstName}
                onChange={(event) => this.setState({firstName: event.target.value})}
              />
            </Grid.Column>

            <Grid.Column width={3}>
              <Input type='text'
                placeholder='Last Name'
                value={this.state.lastName}
                onChange={(event) => this.setState({lastName: event.target.value})}
              />
            </Grid.Column>

            <Grid.Column width={3}>
              <Input type='text'
                placeholder='Student Id'
                value={this.state.id}
                onChange={(event) => this.setState({id: event.target.value})}
              />
            </Grid.Column>

            <Grid.Column width={3}>
              <Button
                loading={this.state.addStudentLoading}
                onClick={() => {this.addStudent()}}
                primary
              >Add Student</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {this.state.studentAddedMessage &&
              <div>
                <br/>
                <center><Label size='large'>Student information successfully added!!!</Label></center>
              </div>
            }
          </Grid.Row>
        </Grid>

        <br/><hr/><br/>

        <Grid container>
          <Grid.Row>
            <Grid.Column width={3}>
              <Input
                placeholder='Enter First Name'
                onChange={(event) => this.setState({searchKeyFname: event.target.value})}
              />
            </Grid.Column>
            <Grid.Column width={3}>
              <Button
                primary
                loading={this.state.searchStudentLoading}
                onClick={() => this.searchStudentDetails()}
               >Seach Student Details
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>


        {this.state.studentDetails && this.state.studentDetails.length > 0 &&
          <div>
            <br/>
            <Table textAlign='center' size='small' striped compact celled selectable>
                 <Table.Header>
                   <Table.Row>
                     <Table.HeaderCell>
                       First Name
                     </Table.HeaderCell>
                     <Table.HeaderCell>
                       Last Name
                     </Table.HeaderCell>
                     <Table.HeaderCell>
                       Student Id
                     </Table.HeaderCell>
                   </Table.Row>
                 </Table.Header>
                 <Table.Body>
                   {this.displayStudentDetails()}
                 </Table.Body>
             </Table>
          </div>
        }
      </div>
    );
  }
}
export default Home;

ReactDOM.render(<Home/>, document.getElementById("mainDiv"));
