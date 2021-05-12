import React, { useState, useEffect } from "react";

import Results from "./Results.js";
import fetchAnimals from "../hooks/fetchAnimals";
import Spinner from "./items/Spinner.js";
import ViewToggle from "./items/ViewToggle.js";
import checkInput from "../utilities/checkInput.js";
import ErrorModal from "./ErrorModal.js";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({ type: "", location: "" });
  const [error, setError] = useState({ show: false, message: "" });
  const [type, setType] = useState("");
  const [data, setData] = useState([]);
  const [view, setView] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (params.type !== "" && params.location !== "") {
      setLoading(true);
      fetchAnimals(params.type, params.location, page).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    }
  }, [params, page]);

  const ref = React.createRef();

  function toggleView() {
    setView(!view);
  }

  function handleSelect(event) {
    setType(event.target.value);
  }

  function handleSearch() {
    let zip = ref.current.value;
    setError(checkInput(type, zip));
    if (!error.show) {
      setParams({ type: type, location: zip });
    }
  }

  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function nextPage() {
    if (page < data.pagination.total_pages) {
      setPage(page + 1);
    }
  }

  function closeModal() {
    setError({ show: false, message: "" });
  }

  const TypeSelector = () => {
    return (
      <select
        key={1}
        value={type}
        className="border border-gray-300 rounded-md text-gray-600 h-10 px-5 bg-gray hover:border-gray-400 focus:outline-none "
        onChange={handleSelect}
      >
        <option>Select an Animal</option>
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Rabbit">Rabbit</option>
        <option value="Bird">Bird</option>
        <option value="Horse">Horse</option>
        <option value="Barnyard">Barnyard</option>
        <option value="Small & Furry">{"Small & Furry"}</option>
        <option value="Scales, Fins & Other">{"Scales, Fins & Other"}</option>
      </select>
    );
  };

  const ControlBar = React.forwardRef((props, ref) => {
    return (
      <div className="flex bg-white shadow-lg">
        <div className="container flex justify-center p-2">
          <div>
            <TypeSelector />
            <input
              key={2}
              ref={ref}
              className="border border-gray-300 mr-1 lg:mx-4 rounded-md text-gray-600 h-10 px-5 my-1 bg-white"
              id="zip"
              type="text"
              placeholder="Enter Zipcode"
              name="zip"
            />
            <button
              onClick={handleSearch}
              className="items-center px-8 py-2 ml-auto font-semibold text-white bg-purple-500 rounded-lg"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  });

  const PageButtons = () => {
    return (
      <div className="flex justify-center py-2">
        <button
          onClick={prevPage}
          className="items-center px-4 py-2 mr-1 font-semibold text-white bg-purple-500 rounded-lg"
        >
          Prev
        </button>
        <button
          onClick={nextPage}
          className="items-center px-4 py-2 ml-1 font-semibold text-white bg-purple-500 rounded-lg"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div>
      <ControlBar ref={ref} />
      <div className="flex justify-between py-2 px-4">
        {error.show && (
          <ErrorModal onClick={closeModal} message={error.message} />
        )}
        <div>
          {data.pagination && (
            <p>{`Results: ${data.pagination.total_count} Page: ${data.pagination.current_page} of ${data.pagination.total_pages}`}</p>
          )}
        </div>
        <ViewToggle view={view} onClick={toggleView} />
      </div>
      <div className="min-h-1/2">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {data.length === 0 ? (
              <h1 className="m-6 text-4xl font-bold text-gray-700 text-center ">
                Search to find a new pet!
              </h1>
            ) : (
              <>
                <Results view={view} animals={data.animals} />
                <PageButtons />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Feed;
