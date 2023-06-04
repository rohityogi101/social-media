import React from "react";
import { useNavigate } from "react-router-dom";

const CardData = ({ e }) => {
  const navigate = useNavigate();

  function goto() {
    navigate(`/card-details/${e.id}`, { state: { data: e } });
  }

  return (
    <>
      <div className="card border-secondary p-3 mt-5 " key={e.id} >
        <img src={`https://picsum.photos/200?random=${e.id}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            User ID: <span>{e.id}</span>
          </h5>
          <p className="card-text">Title : {e.title.slice(0, 10)}...</p>
          <p className="card-text">Body : {e.body.slice(0, 50)}... </p>
        </div>
        <div className="card-footer">
          <div className="d-grid gap-2">
          <h5 id="r-m" onClick={goto}>Read More...</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardData;
