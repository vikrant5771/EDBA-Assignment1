import React from "react";
import Form from "./form";
function ComponentB() {
  const user = {
    name: "Vikrant",
    email: "vikrant@gmail.com",
  };

  return (
    <div>
      <Form object={user} />
    </div>
  );
}

export default ComponentB;
