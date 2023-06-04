import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const CardDetails = () => {
  const location = useLocation();
  const val = location.state.data;
  return (
    <>
      <Navbar />
      <div className="App">
        <h1 className="text-center px-4">Details Page For Post With ID : {val.id}</h1>
        <div className="border-secondary p-3 mt-5">
          <img src={`https://picsum.photos/200?random=${val.id}`} className="" alt="..." />
          <div className="mt-3">
            <h5>User ID : {val.id}</h5>
            <p className="card-text">Title : {val.title}</p>
            <p className="card-text">Body : {val.body}</p>
          </div>
        </div>
        <Link to={`/`} className="btn mx-3">
          Back to HOMEPAGE
        </Link>
      </div>
    </>
  );
};

export default CardDetails;
