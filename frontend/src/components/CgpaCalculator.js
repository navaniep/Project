import axios from "axios";
import React, { useEffect } from "react";

export default function CgpaCalculator({ token }) {
  useEffect(() => {
    if (token) {
      fetchData(token);
    }
  }, [token]);
  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/CgpaCalculator", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(res.data);
  };

  return (
    <>
      <h1>Cgpa Calculator</h1>
      <button>Submit</button>
    </>
  );
}
