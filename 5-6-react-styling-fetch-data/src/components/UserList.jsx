import React from "react";
import { Row, Col, Alert } from "react-bootstrap";
import UserCard from "./UserCard";

function UserList({ users, onUserClick }) {
  // TODO 1.3: Empty state
  if (users.length === 0) {
    return (
      <Alert variant="info">
        No users found matching your search criteria.
      </Alert>
    );
  }

  return (
    <Row>
      {/* TODO 1.3: Grid layout */}
      {users.map((user) => (
        <Col key={user.id} md={6} lg={4} className="mb-4">
          <UserCard user={user} onUserClick={onUserClick} />
        </Col>
      ))}
    </Row>
  );
}

export default UserList;