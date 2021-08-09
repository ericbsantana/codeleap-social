import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../actions/post";

const Form = (props) => {
  const { username } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleInput = (e) => {
    const { value } = e.target;

    setTitle(value);
  };

  const handleContentInput = (e) => {
    const { value } = e.target;

    setContent(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateInput(title, content)) {
      dispatch(
        createPost({ username: username, title: title, content: content })
      );
      setTitle("");
      setContent("");
    }
  };

  const validateInput = (title, content) => {
    if (title.trim().length > 0 && content.trim().length > 0) {
      return true;
    }
    return false;
  };

  return (
    <div className="border border-gray-300 m-5 p-5 space-y-3">
      <h1 className="text-xl font-bold">What's in your mind? </h1>
      <form
        className="flex flex-col space-y-5"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label className="text-lg">Title</label>
          <input
            type="text"
            className="w-full"
            onChange={(e) => handleTitleInput(e)}
            value={title}
          />
        </div>
        <div>
          <label className="text-lg">Content</label>
          <textarea
            type="text"
            rows="5"
            className="w-full resize-none"
            onChange={(e) => handleContentInput(e)}
            value={content}
          />
        </div>
        <button
          type="submit"
          className="w-32 px-1 py-2 bg-gray-800 text-white font-bold uppercase self-end hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-800"
          disabled={!validateInput(title, content)}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
