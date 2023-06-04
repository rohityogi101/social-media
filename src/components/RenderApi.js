import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../Services/Action/action";
import { useParams } from "react-router-dom";
import CardData from "./CardData";
import "../App.css";
import Navbar from "./Navbar";

const RenderApi = () => {
 
  const dispatch = useDispatch();
  const { page } = useParams();
  const { posts, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="App">
        {isLoading && <h1 className="loading">Loading...</h1>}
        {error && <h1 className="errorMsg">{error}</h1>}
        <div className="container-fluid mt-5">
          <div className="wrapper row">
            {posts.map((data) => {
              return <CardData e={data} key={data.id} />;
            })}
          </div>
        </div>

        <div className="text-center">
        </div>
      </div>
    </>
  );
};

export default RenderApi;
