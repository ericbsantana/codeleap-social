import { Fragment } from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  if (props.isShowing) {
    return ReactDOM.createPortal(
      <Fragment>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
            <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-10 py-5 space-y-3">
              <h1 className="w-full text-lg">{props.title}</h1>
              <span>{props.children}</span>
              <div className="flex items-end justify-end content-end space-x-2">
                <button
                  className="border border-black font-bold text-sm px-3 py-1 w-20 hover:border-gray-700 hover:text-gray-700"
                  type="button"
                  onClick={() => props.setIsShowing(false)}
                >
                  Cancel
                </button>
                <button
                  className="border border-black font-bold text-sm px-3 py-1 w-20 hover:border-gray-700 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:border-black disabled:text-black"
                  type="button"
                  onClick={() => {
                    props.action();
                    props.setIsShowing(false);
                  }}
                  disabled={!props.enabled}
                >
                  {props.actionName}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </Fragment>,
      document.querySelector("#modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
