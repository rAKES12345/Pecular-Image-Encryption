"use client"
import React from 'react';

const ValidationMsg = ({ msg, flag }) => {
  return (
    <div>
      {flag && <div>{msg}</div>}
    </div>
  );
};

export default ValidationMsg;
