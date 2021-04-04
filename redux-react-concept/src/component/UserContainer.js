import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

function UserContainer({ fetchUser, user }) {
  useEffect(() => {
    fetchUser();
  }, []);
  return user.loading ? (
    <p>Loading...</p>
  ) : user.error ? (
    <p>{user.error}</p>
  ) : (
    <div>
      <p>User List:</p>
      {user && user.users && user.users.map((item) => <p>{item.name}</p>)}
      {/* <p>{JSON.stringify(user.users)}</p> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
