import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const InstructorsDetail = () => {
  const [inst, setInst] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getInstructors = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setInst(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInstructors();
  }, [id]);
  return (
    <div className="container text-center">
      <h3>{inst.name}</h3>
      <img
        className="w-50"
        src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
        alt=""
      />
      <h4>{inst.email}</h4>
      <h4>{inst.phone}</h4>
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success">
          {" "}
          Go Home
        </button>
        <button
          onClick={() => navigate("/instructors")}
          className="btn btn-danger"
        >
          {" "}
          Go Back
        </button>
      </div>
    </div>
  );
};

export default InstructorsDetail;
