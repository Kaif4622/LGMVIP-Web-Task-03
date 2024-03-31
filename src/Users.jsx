import PropTypes from "prop-types";

const Users = ({users}) => {
  return (
<div className="flex flex-col mt-10 ">
          <h1 className="my-5 text-2xl font-bold text-center py-2 px-28 bg-blue-900 text-white">
            Students Enrolled
          </h1>      {Array.isArray(users) &&
            users.map((user, index) => (
              <div
                className="bg-gray-800 w-30 h-auto flex p-5 rounded-xl mb-8"
                key={index}
              >
                <div className="mr-8 flex justify-center items-center">
                  <img src={user.link} alt="" className="w-24 h-24" />
                </div>
                <div className=" text-white flex flex-col">
                  <p className="mt-2 font-bold">{user.name}</p>
                  <p className="mt-2  text-white  text-sm">{user.email}</p>
                  <p className="mt-2 text-white  text-sm">{user.phone}</p>
                  <p className="mt-1 text-white text-sm">{user.gender}</p>
                </div>
              </div>
            ))}
    </div>
  )
}
Users.propTypes = {
    users: PropTypes.array.isRequired,
  };

export default Users
