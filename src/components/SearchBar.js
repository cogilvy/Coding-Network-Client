import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap'


class SearchBar extends Component {

  render() {
    return (
      <div className="search">
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      </div>
    );
  }

}

export default SearchBar;
