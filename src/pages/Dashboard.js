import Form from "../components/Form";
import Post from "../components/Post";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

import { fetchPosts } from "./../actions/post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { posts, isLoading, isError } = useSelector(
    (state) => state.postReducer
  );

  const { username } = useSelector((state) => state.userReducer);

  return (
    <div className="lg:w-1/2 bg-white">
      <div className="w-full bg-black text-white font-bold text-xl p-6">
        <h1>CodeLeap Network</h1>
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
      {isLoading ? (
        <div className="flex flex-col items-center justify-center mt-auto w-full h-70 text-3xl bg-white font-bold space-y-5">
          <FontAwesomeIcon
            icon={faCircleNotch}
            className="animate-spin"
            size={"lg"}
          />
          <p>Loading...</p>
        </div>
      ) : (
        posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            username={post.username}
            date={post.created_datetime}
            isEditable={username === post.username}
          />
        ))
      )}
    </div>
  );
};

export default Dashboard;
