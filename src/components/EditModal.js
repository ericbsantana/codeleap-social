import Modal from "./Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./../actions/post";

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

  const editPost = async (id) => {
    fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
      method: "PATCH",
      body: JSON.stringify({
        title: title,
        content: content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.text())
      .then((res) => {
        dispatch(fetchPosts());
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Modal
        isShowing={props.isShowing}
        setIsShowing={props.setIsShowing}
        title="Edit item"
        action={() => {
          editPost(props.id);
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
              className="w-full"
              onChange={(e) => handleTitleInput(e)}
              value={title}
            />
          </div>
          <div>
            <label>Content</label>
            <textarea
              type="text"
              rows="4"
              className="w-full resize-none"
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
