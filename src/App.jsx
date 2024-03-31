import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Users from "./Users";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      {/* navbar starts here */}
      <header className="bg-slate-900 w-full h-14 flex justify-center items-center">
        <h3 className="text-white text-2xl font-semibold">
          Students Enrollment Form
        </h3>
      </header>
      {/* navbar ends here */}

      <div className="flex md:justify-around flex-col md:flex-row ">
       <Form users={users} setUsers={setUsers}/>
          <Users users={users}/>
      </div>
    </div>
  );
}

export default App;
