import React from "react";

function Contact(props) {
  return (
    <div
      className="rounded-full h-20 w-20 flex border items-center justify-center bg-gray-100  cursor-pointer hover:shadow"
      onClick={props.onClick}
    >
      {props.name}
    </div>
  );
}

export default Contact;
