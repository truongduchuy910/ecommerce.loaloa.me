import React, { Component } from "react";
import { FacebookProvider, Like } from "react-facebook";
export default () => {
  return (
    <FacebookProvider appId="335701763968445">
      <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
    </FacebookProvider>
  );
};
