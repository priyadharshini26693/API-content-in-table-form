import { useNavigate } from "react-router-dom";

function UserTable({ users }) {
  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <table border={1}>
      <thead>
        <tr>
          <th> Id </th>
          <th> Email </th>
          <th> FirstName </th>
          <th> LastName </th>
          <th> Avatar </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} onClick={() => handleRowClick(user.id)}>
            {/* <td>
      <Link to={`/user/${user.id}`}>{user.id}</Link>
    </td> */}
            <td> {user.id}</td>
            <td> {user.email} </td>
            <td> {user.first_name} </td>
            <td> {user.last_name} </td>
            <td>
              <img
                src={user.avatar}
                alt={`${user.frist_name}${user.last_name}`}
                width="50"
                height="50"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;