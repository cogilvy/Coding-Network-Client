import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class FollowersContainer extends Component {

  render() {
    return (
      <div className="followers">
        <Table className="followers" striped bordered hover>
          <thead>
            <tr>
              <th className="followers">Followers</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.followers ?
              this.props.followers.map(follower => {
                return (
                  <tr>
                    <td>{follower.username}</td>
                  </tr>
                )
              })
              :
              null
            }
          </tbody>
        </Table>
      </div>
    );
  }

}

export default FollowersContainer;
