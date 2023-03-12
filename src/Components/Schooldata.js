import React, { Component } from 'react'
import axios from 'axios'
import { Card,Container, Row, Col } from 'react-bootstrap';

export default class Schooldata extends Component {
    state = {
        School: []
    }

    componentDidMount() {
        console.log('http://localhost:5555/schools');
        axios.get(`http://localhost:5555/schools`)
            .then(res => {
                console.log(res)
                return res;
            })
            .then(res => {
                const School = res.data;
                console.log(res.data)
                this.setState({ School });
            })
    }
  render() {
    return (
      <div>
        <h1>School Data</h1>
            {this.state.School.map(Sch => {
                return (
                    <p>{Sch.school_name}</p>)
                }
            )} 
      </div>
    )
  }
}
