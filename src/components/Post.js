import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Post = (props) => {
  return (
    <div className="border border-gray-300 m-5 space-y-3">
      <div className="flex justify-between w-full bg-black text-white font-bold text-xl p-6">
        <h1>Title of my post</h1>
        <div className="flex space-x-2">
          <button>
            <FontAwesomeIcon icon={faEdit} size={"sm"} />
          </button>
          <button>
            <FontAwesomeIcon icon={faTrash} size={"sm"} />
          </button>
        </div>
      </div>

      <div className="p-5 space-y-5">
        <div className="flex justify-between text-gray-500">
          <strong>@username</strong> <p>5 minutes ago</p>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          a dictum est. Maecenas nec risus ac erat sagittis viverra eget at
          risus. Suspendisse potenti. Nulla rutrum, dui vel viverra lacinia,
          ante ipsum facilisis sapien, eget viverra nulla turpis luctus massa.
          Aliquam at felis ullamcorper sem pretium hendrerit. Nullam pulvinar
          risus non sapien consequat, vel egestas nibh sodales. Sed vitae neque
          eu risus finibus imperdiet vel a justo. Sed a rutrum quam. Integer
          ullamcorper hendrerit elementum. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Maecenas
          finibus justo eget dolor posuere elementum. Aenean suscipit lorem
          purus, nec accumsan risus tincidunt id. Nulla ut ornare augue. Donec
          vel eros fringilla, pharetra dui imperdiet, condimentum elit. Nulla
          augue lorem, rhoncus ac gravida eu, finibus vel enim.
        </div>
      </div>
    </div>
  );
};

export default Post;
