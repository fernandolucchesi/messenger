import React from "react";

function Contact(props) {
  return (
    <div
      class="rounded-full h-20 w-20 flex border items-center justify-center bg-gray-100 cursor-pointer"
      onClick={props.onClick}
    >
      {props.name}
    </div>
  );
}

export default Contact;
