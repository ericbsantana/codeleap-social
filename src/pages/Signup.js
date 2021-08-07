import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");

  const handleInput = (e) => {
    const { value } = e.target;

    setUsername(value);
  };

  return (
    <div className="flex flex-col space-y-5 w-1/2 lg:w-1/3 px-10 py-5 bg-white self-center">
      <h1 className="font-bold text-xl lg:text-2xl">
        Welcome to CodeLeap network!
      </h1>
      <div>
        <h2> Please enter your username: </h2>
        <input
          type="text"
          placeholder="John Doe"
          className="rounded-md w-full"
          onChange={(e) => {
            handleInput(e);
          }}
          value={username}
        />
      </div>
      <button
        type="button"
        className="w-32 px-1 py-2 bg-gray-800 text-white font-bold uppercase self-end hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!username.trim().length > 0}
      >
        Enter
      </button>
    </div>
  );
};

export default Signup;
