import React, { Component }  from 'react';
import Container  from './Container';
import './App.css';
import { render } from '@testing-library/react';
import {getAllStudents} from './client';
import { Table } from 'antd';

class App extends Component{

  state = {
    students :[]
  }

  componentDidMount () {
    this.fetchStudents(); 

  }
  fetchStudents = () => {
      getAllStudents()
      .then(res => res.json()
      .then(students => {
      console.log(students);
      this.setState({
        students
      });
      }));
  }
    render() {
      const { students } = this.state;
      if (students && students.length){
         
        const columns = [
          {
            title: 'Student Id',
            dataIndex: 'studentId',
            key: 'studentID'
          },
          {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName'
          },
          {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName'
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
          },
          {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender'
          }
        ];
        return(
          <Container>
        <Table 
        dataSource={students}
        columns={columns}
        rowKey='studentId' />
        </Container>
        );
      }
      return <h1>No Students found</h1>
    }
    
 
}

export default App;
