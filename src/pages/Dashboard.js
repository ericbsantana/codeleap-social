import Form from "../components/Form";
import Post from "../components/Post";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faTimesCircle,
  faAngleDoubleUp,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import { fetchPosts } from "./../actions/post";
import { Logout } from "../actions/user";
import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { posts, isLoading, isError, next } = useSelector(
    (state) => state.postReducer
  );

  const { username } = useSelector((state) => state.userReducer);

  return (
    <Fragment>
      <div className="lg:w-1/2 bg-white">
        <div className="flex justify-between w-full bg-black text-white font-bold text-xl p-6">
          <h1>CodeLeap Network</h1>
          <button
            onClick={() => {
              dispatch(Logout());
              history.push("/");
            }}
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              size={"lg"}
              className="hover:text-gray-50"
            />
          </button>
        </div>
        <Form />
        {isError && (
          <div className="flex flex-col items-center justify-center mt-auto w-full h-70 text-3xl bg-white font-bold space-y-5">
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="text-red-600"
              size={"lg"}
            />
            <p className="text-red-600">Error!</p>
          </div>
        )}
        {isLoading && (
          <div className="flex flex-col items-center justify-center mt-auto w-full h-70 text-3xl bg-white font-bold space-y-5">
            <FontAwesomeIcon
              icon={faCircleNotch}
              className="animate-spin"
              size={"lg"}
            />
            <p>Loading...</p>
          </div>
        )}
        <div>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              username={post.username}
              date={post.created_datetime}
              isEditable={username === post.username}
            />
          ))}

          {next ? (
            <button
              className="w-full py-2 bg-gray-800 text-white font-bold uppercase self-end hover:bg-black space-x-2"
              onClick={() => {
                dispatch(fetchPosts());
              }}
            >
              <span>Load more...</span>
              {isLoading && (
                <FontAwesomeIcon
                  icon={faCircleNotch}
                  className="animate-spin"
                  size={"sm"}
                />
              )}
            </button>
          ) : (
            <button
              className="w-full py-2 bg-gray-800 text-white font-bold uppercase self-end hover:bg-black space-x-2"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <span>Scroll back to top!</span>
              <FontAwesomeIcon icon={faAngleDoubleUp} size={"sm"} />
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
