import React from "react";

export default function App() {
  const onClickSignout = () => {
    console.log("Sign out");
  };
  return (
    <div className="text-center py-4">
      <h1>Authentication</h1>
      <h3>Protected Page</h3>
      <button
        onClick={onClickSignout}
        className="my-6 py-2 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Logout
      </button>
    </div>
  );
}
