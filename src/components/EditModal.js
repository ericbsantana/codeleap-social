import Modal from "./Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "./../actions/post";

const EditModal = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

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
  };

  const validateInput = (title, content) => {
    if (title.trim().length > 0 && content.trim().length > 0) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <Modal
        isShowing={props.isShowing}
        setIsShowing={props.setIsShowing}
        title="Edit item"
        action={() => {
          dispatch(editPost({ id: props.id, title: title, content: content }));
        }}
        actionName="Edit"
        enabled={validateInput(title, content)}
      >
        <form
          className="flex flex-col space-y-5"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <label>Title</label>
            <input
              type="text"
              className="w-full focus:outline-none focus:ring-0 focus:border-gray-700 rounded-md"
              onChange={(e) => handleTitleInput(e)}
              value={title}
            />
          </div>
          <div>
            <label>Content</label>
            <textarea
              type="text"
              rows="4"
              className="w-full resize-none focus:outline-none focus:ring-0 focus:border-gray-700 rounded-md"
              onChange={(e) => handleContentInput(e)}
              value={content}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditModal;
