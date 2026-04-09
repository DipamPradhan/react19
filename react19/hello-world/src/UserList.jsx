export const UserList = ({ users }) => {
  const usersData = users
    .filter((user) => {
      return user.age > 10;
    })
    .map((user) => {
      return (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h3>Age: {user.age}</h3>
          <h4>Qualification: {user.qualification}</h4>
        </div>
      );
    });
  return (
    <div>
      <h2>Users</h2>
      {usersData}
    </div>
  );
};
