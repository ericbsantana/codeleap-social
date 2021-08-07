import Form from "../components/Form";
import Post from "../components/Post";

const Dashboard = () => {
  return (
    <div className="lg:w-1/2 bg-white">
      <div className="w-full bg-black text-white font-bold text-xl p-6">
        <h1>CodeLeap Network</h1>
      </div>
      <Form />
      <Post />
    </div>
  );
};

export default Dashboard;
