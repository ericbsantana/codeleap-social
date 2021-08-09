import Modal from "./Modal";

import { deletePost } from "./../actions/post";
import { useDispatch } from "react-redux";

const DeleteModal = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        isShowing={props.isShowing}
        setIsShowing={props.setIsShowing}
        title="Are you sure you want to delete this?"
        action={() => {
          dispatch(deletePost(props.id));
        }}
        actionName="Ok"
        enabled={true}
      ></Modal>
    </div>
  );
};

export default DeleteModal;
