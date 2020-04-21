import React from "react";

export default ({review}) => {
  return (
    <>
      <p>Written By: {review.author}  </p>
      <p>{review.content} </p>
    </>
  );
};