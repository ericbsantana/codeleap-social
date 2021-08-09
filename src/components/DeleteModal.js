import Modal from "./Modal";

import { fetchPosts } from "./../actions/post";
import { useDispatch } from "react-redux";

const DeleteModal = (props) => {
  const dispatch = useDispatch();
  const deletePost = async (id) => {
    fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
      method: "DELETE",
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
        title="Are you sure you want to delete this?"
        action={() => {
          deletePost(props.id);
        }}
        actionName="Ok"
        enabled={true}
      ></Modal>
    </div>
  );
};

export default DeleteModal;
