import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function UsersList() {
  let [users, setUsers] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      try {
        let res = await fetch("http://localhost:4000/user-api/users", {
          method: "GET",
        });

        if (res.status === 200) {
          //extract json data
          let resObj = await res.json();
          //update the state
          setUsers(resObj.payload);
        } else {
        }
      } catch (err) {
        //set error
      }
    }

    getUsers();
  }, []);

  //go to user
  const gotoUser = (userObj) => {
    navigate("/user", { state: { user: userObj } });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-10 py-12">
      <h1 className="text-4xl font-semibold text-gray-800 text-center mb-12">
        List of Users
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {users?.map((userObj) => (
          <div
            key={userObj.email}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer border border-gray-200"
            onClick={() => gotoUser(userObj)}
          >
            <p className="text-xl font-semibold text-gray-900 mb-2">
              {userObj.name}
            </p>
            <p className="text-gray-600">{userObj.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersList;