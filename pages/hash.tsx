import { TopBar } from "../components/Topbar";
import { useAppSelector } from "../store/storeHooks";
import Head from "next/head";
import {
  useEffect,
  useRef,
  useState,
  FormEventHandler,
  MouseEventHandler,
} from "react";
import { ToastContainer, toast } from "react-toastify";
import { themeChange } from "theme-change";
import { BsCheckCircle } from "react-icons/bs";
import axios from "axios";
import React from "react";
const Hash = () => {
  const [hash, setHash] = useState("");
  const queryRef = useRef<HTMLInputElement>(null);
  const algoRef = useRef<HTMLSelectElement>(null);
  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "/api/hash",
      data: {
        algorithm: algoRef.current?.value,
        query: queryRef.current?.value,
      },
    })
      .then((res) => setHash(res.data.hash))
      .then(() => {
        toast.success("Hash copied!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((res) => console.log(res.data, algoRef.current?.value));
  };

  const darkTheme = useAppSelector((store) => store.theme.darkTheme);
  return (
    <div
      className={`App container absolute top-0 left-0 bottom-0 right-0 flex transition duration-500 flex-col justify-center ${
        darkTheme ? "bg-black text-white" : ""
      }`}
    >
      <ToastContainer />

      <Head>
        <title>Hash string</title>
      </Head>
      <TopBar />

      <div className="flex flex-col justify-center items-center mt-2">
        <form action="" className="-ml-1 md:pr-2 md:w-96" onSubmit={submitHandler}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Query</span>
            </label>
            <label className="input-group">
              <span>Query</span>
              <input
                ref={queryRef}
                type="text"
                placeholder="Enter query to hash..."
                className="input input-bordered"
                required
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Algorithm</span>
            </label>
            <label className="input-group">
              <span>Algo</span>
              <select
                id="countries"
                defaultValue={"md5"}
                className="select select-bordered"
                ref={algoRef}
              >
                <option value="md5">MD5</option>
                <option value="sha1">SHA1</option>
                <option value="sha256">SHA256</option>
                <option value="sha512">SHA512</option>
                <option value="sha224">SHA224</option>
                <option value="sha384">SHA384</option>
                <option value="blake2s">BLAKE2S</option>
                <option value="blake2b">BLAKE2B</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-success mt-3 w-72 overflow-auto"
          >
            Get hash
          </button>
          {hash && (
            <div className="w-{84px} px-1/2 md:px-3 relative mt-3 alert alert-success">
              <div>
                <BsCheckCircle size={20} className="mr-2 hidden md:block" />
                {hash ? (
                  <>
                    <span className="break-words w-60">Hash: {hash}</span>
                  </>
                ) : (
                  ""
                )}
              </div>

            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Hash;
