import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Edit = ({
  firstName,
  lastName,
  phone,
  handleChange,
  handleSubmit,
  isProcessing,
  error,
  dismissAlert,
}) => {
  const history = useHistory();

  return (
    <Container className="col-md-4">
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Edit Profile
        </Card.Header>
        <Card.Body>
          <Alert
            variant="danger"
            show={error}
            dismissible
            onClose={dismissAlert}
          >
            {error}
          </Alert>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                type="text"
                name="phone"
                value={phone}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <div className="mt-3">
              <Button
                className="me-2"
                variant="success"
                type="submit"
                disabled={isProcessing}
              >
                {isProcessing ? 'Updating...' : 'Update'}
              </Button>
              <Button
                variant="light"
                onClick={() => history.push(ROUTES.PROFILE)}
                disabled={isProcessing}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

Edit.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  error: PropTypes.string,
  dismissAlert: PropTypes.func.isRequired,
};

export default Edit;
