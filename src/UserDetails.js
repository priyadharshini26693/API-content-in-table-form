import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function UserDetails() {  //initialize navigate
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    setLoading(true); //load the api, fetch the id using (json.data) & store it in setUser
    fetch(`https://reqres.in/api/users/${id}`)
      .then((response) => response.json())
      .then((json) => setUser(json.data))
      .finally(() => {
        setLoading(false); //stop loading
      });
  }, [id]); //store the id in array format

  const handleBack=()=>{
    navigate(-1); //navigate to the previous page
  }

  return (
    <div>
      {loading ? (
        <div> Loading... </div>
      ) : user ? (
        <div
          className="card"
          style={{ width: "18rem", margin: "auto", marginTop: "20px" }}
        >
          <img
            src={user.avatar}
            className="card-img-top"
            alt={`${user.first_name}${user.last_name}`}
          />
          <div className="card-body">
            <h5 className="carrd-title">
              {user.first_name}
              {user.last_name}
            </h5>
            <p className="card-text">Email:{user.email}</p>
          </div>
        </div>
      ) : (
        <div> User not found </div>

      )}

      <button onClick={handleBack} className="btn btn-secondary back-button"> BACK
      </button>

    </div>
  );
}

export default UserDetails;
