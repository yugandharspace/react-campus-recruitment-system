import React, { Component } from 'react';
import { withAPI } from '../../../../services/api';

import Students from '../../../../components/Home/Admin/Students';

class StudentsContainer extends Component {
  state = { students: [] };

  componentDidMount() {
    this.getStudents();
  }

  getStudents = () => {
    const { api } = this.props;

    api
      .getStudents()
      .then(response => {
        this.setState({ students: response.data });
      })
      .catch(error => console.log(error.response.data.message));
  };

  handleDelete = e => {
    const { api } = this.props;

    api
      .deleteStudent(e.target.dataset.id)
      .then(() => this.getStudents())
      .catch(error => console.log(error.response.data.message));
  };

  render() {
    return (
      <Students
        students={this.state.students}
        handleDelete={this.handleDelete}
      />
    );
  }
}

export default withAPI(StudentsContainer);