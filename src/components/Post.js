import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Fragment, useState } from "react";

import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

const Post = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  dayjs.extend(relativeTime);

  const date = dayjs(props.date).fromNow();
  const isEditable = props.isEditable;

  return (
    <Fragment>
      <DeleteModal
        isShowing={isDeleting}
        setIsShowing={setIsDeleting}
        id={props.id}
      />
      <EditModal
        isShowing={isEditing}
        setIsShowing={setIsEditing}
        id={props.id}
      />

      <div className="border border-gray-300 m-5 space-y-3">
        <div className="flex justify-between w-full bg-black text-white font-bold text-xl p-6">
          <h1>{props.title}</h1>
          {isEditable && (
            <div className="flex space-x-2">
              <button>
                <FontAwesomeIcon
                  icon={faEdit}
                  size={"sm"}
                  onClick={() => {
                    setIsEditing(true);
                    setIsDeleting(false);
                  }}
                />
              </button>
              <button>
                <FontAwesomeIcon
                  icon={faTrash}
                  size={"sm"}
                  onClick={() => {
                    setIsEditing(false);
                    setIsDeleting(true);
                  }}
                />
              </button>
            </div>
          )}
        </div>

        <div className="p-5 space-y-5">
          <div className="flex justify-between text-gray-500">
            <strong>@{props.username}</strong> <p>{date}</p>
          </div>
          <div>{props.content}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Post;
