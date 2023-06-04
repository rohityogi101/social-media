import React, { useState, useEffect } from "react";
import axios from "axios";
export const POSTS_REQUEST = "POSTS_REQUEST";
export const POSTS_SUCCESS = "POSTS_SUCCESS";
export const POSTS_FAILURE = "POSTS_FAILURE";

export const POST_REQUEST = "POST_REQUEST";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const fetchPostsRequest = () => {
  return {
    type: POSTS_REQUEST,
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: POSTS_FAILURE,
    payload: error,
  };
};

export const fetchPostRequest = () => {
  return {
    type: POST_REQUEST,
  };
};

export const fetchPostSuccess = (post) => {
  return {
    type: POST_SUCCESS,
    payload: post,
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: POST_FAILURE,
    payload: error,
  };
};

const getData = async (page) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const user = await response.json();
  return user;
};

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const posts = await getData();
      dispatch(fetchPostsSuccess(posts));
    } catch (error) {
      const errorMsg = error.message;
      dispatch(fetchPostsFailure(errorMsg));
    }
  };
};

export const fetchPost = (id) => {
  return (dispatch) => {
    dispatch(fetchPostRequest());
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        const post = response.data;
        dispatch(fetchPostSuccess(post));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPostFailure(errorMsg));
      });
  };
};
