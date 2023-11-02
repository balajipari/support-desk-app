import Button from '../../components/Button';
import Search from '../../components/Search';
import User from '../../components/User';
import users from '../../mock/user';
import './index.css';

const Users = () => {
  return (
    <div className="content-container">
      <div className="m-8 flex justify-end">
        <Search placeholder={`Search user using title...`} />
        <Button label="Search" type="create" />
      </div>
      <div className="user-list">
        {users.map((user) => (
          <User
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
            role={user.role}
            department={user.department}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
