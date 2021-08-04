
import React, { useEffect, useState } from 'react';
import {Spinner} from 'react-bootstrap'

const DelayedSpinner = ({ size }) => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(true), 750);

    return () => clearTimeout(timer);
  });

  return (
      showSpinner && <Spinner animation='border'
  role='status'
  style={{
    width: '100px',
    height: '100px',
    margin: 'auto',
    display: 'block',
  }} />);
};

export default DelayedSpinner;
