import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row>
        <Col xs={9} md={10}>
          <Form.Control
            type="text"
            placeholder="Search for a card..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col xs={3} md={2}>
          <Button variant="primary" type="submit" className="w-100">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;
