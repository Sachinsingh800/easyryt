import React, { useState, useEffect } from 'react';

export const Counter1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < 8) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const formattedCount = count.toLocaleString(); // Add comma every three digits

  return <div>{formattedCount}</div>;
};



export const Counter2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < 150) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const formattedCount = count.toLocaleString(); // Add comma every three digits

  return <div>{formattedCount}</div>;
};




export const Counter3 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < 200) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const formattedCount = count.toLocaleString(); // Add comma every three digits

  return <div>{formattedCount}</div>;
};




export const Counter4 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < 80) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const formattedCount = count.toLocaleString(); // Add comma every three digits

  return <div>{formattedCount}</div>;
};


export const Counter5 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < 90) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const formattedCount = count.toLocaleString(); // Add comma every three digits

  return <div>{formattedCount}</div>;
};


export const RatingCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < 800) {
        setCount((prevCount) => prevCount + 10);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const formattedCount = count.toLocaleString(); // Add comma every three digits

  return <div>{formattedCount}</div>;
};
export const RatingCounter2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < 400) {
        setCount((prevCount) => prevCount + 10);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const formattedCount = count.toLocaleString(); // Add comma every three digits

  return <div>{formattedCount}</div>;
};

