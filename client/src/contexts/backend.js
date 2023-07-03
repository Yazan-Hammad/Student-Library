import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BackendContext = createContext();

function BackendProvider({ children }) {
  const [token, setToken] = useState("");

  const notifyError = (message) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notifySuccess = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const makeRequest = async (
    method,
    url,
    message,
    data = {},
    headers = {},
    todo = () => {}
  ) => {
    try {
      let response;
      if (method === "post" || method === "patch")
        response = await axios[method](url, data, { headers });
      else response = await axios[method](url, { headers });

      if (response.data.token) {
        setToken(response.data.token);
      }
      notifySuccess(message);

      todo();
    } catch (error) {
      notifyError(error.response.data.message);
    }
  };

  return (
    <BackendContext.Provider
      value={{ token, notifySuccess, notifyError, makeRequest }}
    >
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BackendContext.Provider>
  );
}

export { BackendProvider };
export default BackendContext;
