import { Route,Routes } from "react-router-dom";
import './App.css';
import UserList from "./UserList";
import UserDetails from "./UserDetails";

function App() {
  return (
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
  );
}

export default App;
