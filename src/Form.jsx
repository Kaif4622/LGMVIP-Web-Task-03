import { useRef , useState } from "react";
import PropTypes from "prop-types";
import { initial } from "./initial";

const Form = ({ users, setUsers }) => {
const [data, SetData] = useState(initial);
  const inputRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(...users);
    setUsers([...users, data]);
    console.log(data);
    console.log(users);
  };

  const handleClear = (e) => {
    e.preventDefault();
    inputRef.current.reset();
    SetData(initial);
  };

  return (
    <div className="mt-10">
      <h1 className="my-5 flex justify-center py-2 text-2xl font-bold text-center bg-blue-900 text-white">
        Registration Form
      </h1>
      <form ref={inputRef}>
        <table className="" cellPadding={15}>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  className="border-black border-2 rounded-md px-2"
                  onChange={(e) => SetData({ ...data, name: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  className="border-black border-2 rounded-md px-2"
                  onChange={(e) => SetData({ ...data, email: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>
                <input
                  type="tel"
                  className="border-black border-2 rounded-md px-2"
                  onChange={(e) => SetData({ ...data, phone: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>Image Link</td>
              <td>
                <input
                  type="text"
                  className="border-black border-2 rounded-md px-2"
                  onChange={(e) => SetData({ ...data, link: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td className="flex">
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={(e) =>
                      SetData({ ...data, gender: e.target.value })
                    }
                  />
                  <label htmlFor="male" className="px-1">
                    Male
                  </label>
                </div>
                <div className="mx-5">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={(e) =>
                      SetData({ ...data, gender: e.target.value })
                    }
                  />
                  <label htmlFor="female" className="px-1">
                    Female
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="w-full flex justify-evenly ">
          <button
            className="bg-indigo-700 rounded-md px-2 py-1 my-3 text-center text-white"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
          <button
            className="bg-gray-700 rounded-md px-2 py-1 my-3 text-center text-white"
            onClick={(e) => handleClear(e)}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  setUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default Form;
