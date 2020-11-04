import React from "react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 inset-x-0">
      <nav className="container m-auto flex items-center h-16 sm:px-0">
        <div className="ml-6 pt-1">
          <h1 className="text-2xl text-black-700">Messenger App</h1>
        </div>
      </nav>
    </header>
  );
}
