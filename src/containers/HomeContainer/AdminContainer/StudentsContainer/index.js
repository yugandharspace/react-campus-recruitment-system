import React, { Component } from 'react';
import { withFirebase } from '../../../../services/firebase';

import Students from '../../../../components/Home/Admin/Students';

class StudentsContainer extends Component {
  state = { students: [], isProcessing: false, selectedStudentId: '' };

  componentDidMount() {
    this.getStudents();
  }

  getStudents = () => {
    const { firebase } = this.props;

    firebase
      .getStudents()
      .then(querySnapshot => {
        const students = [];

        querySnapshot.forEach(doc => {
          const data = doc.data();
          data.id = doc.id;

          students.push(data);
        });

        this.setState({ students });
      })
      .catch(error => console.log(error.message));
  };

  handleDelete = e => {
    const { firebase } = this.props;
    const id = e.target.dataset.id;

    this.setState({ isProcessing: true, selectedStudentId: id });

    firebase
      .deleteUser(id)
      .then(() => console.log('Student successfully deleted!'))
      .then(() => this.getStudents())
      .catch(error => console.log(error.message));
  };

  render() {
    const { students, isProcessing, selectedStudentId } = this.state;

    return (
      <Students
        students={students}
        handleDelete={this.handleDelete}
        isProcessing={isProcessing}
        selectedStudentId={selectedStudentId}
      />
    );
  }
}

export default withFirebase(StudentsContainer);
