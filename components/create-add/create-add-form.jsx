import React, { Fragment, useRef, useState } from "react";

const CreateAddForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Apartment");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState();
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState("available");
  const [details, setDetails] = useState("");
  const [message, setMessage] = useState("");

  const clearInputs = () => {
    setTitle("");
    setCategory("Apartment");
    setAddress("");
    setPrice("");
    setContact("");
    setStatus("available");
    setDetails("");
  };

  const createAddHandler = async (event) => {
    event.preventDefault();

    const advertise = {
      title: title,
      category: category,
      image: image,
      address: address,
      price: price,
      contact: contact,
      details: details,
      status: status,
      isFeatured: true,
    };

    console.log(advertise);
    try {
      const post = await fetch("http://localhost:5000/post/add-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(advertise),
      });
      console.log(`Posted.... ${post}`);
      clearInputs();
    } catch (error) {
      console.log(`Error Occured!!! ${error}`);
    }
    clearInputs();
    // console.log(advertise);
  };
  return (
    <Fragment>
      <div className="w-full max-w-sm bg-gray-800  p-5 rounded-md mt-10 mb-10">
        <form className="  rounded  p-5 mb-4" onSubmit={createAddHandler}>
          <h1 className="font-semibold mb-4 text-xl text-pink-500">
            Create Advertise
          </h1>

          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-700"
              id="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <p className="text-red-500 text-xs italic"></p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <div className="inline-block relative  w-full">
              <select
                className="block appearance-none w-full bg-gray-300 border border-gray-400  px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-purple-700"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Apartment">Apartment</option>
                <option value="Studio">Studio</option>
                <option value="Office-space">Office Space</option>
                <option value="Condo">Condo</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
              <p className="text-red-500 text-xs italic"></p>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="image"
            >
              ImageURL
            </label>
            <input
              className="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-700"
              id="image"
              type="text"
              onChange={(e) => setImage(e.target.value)}
            />
            <p class="text-red-500 text-xs italic"></p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-700"
              id="address"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <p className="text-red-500 text-xs italic"></p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-700"
              id="price"
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <p className="text-red-500 text-xs italic"></p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="contact"
            >
              Contact
            </label>
            <input
              className="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-700"
              id="contact"
              type="text"
              placeholder="Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <p className="text-red-500 text-xs italic"></p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="Status"
            >
              Status
            </label>
            <div className="inline-block relative  w-full">
              <select
                className="block appearance-none w-full bg-gray-300 border border-gray-400  px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-purple-700"
                id="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="available">Available</option>
                <option value="rented">Rented</option>
                <option value="unavailable">Unavailable</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
              <p className="text-red-500 text-xs italic"></p>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="details"
            >
              Details
            </label>
            <textarea
              rows="4"
              cols="50"
              className="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-700"
              id="details"
              type="text"
              placeholder="Details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
            <p className="text-red-500 text-xs italic"></p>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus-within:bg-pink-500"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateAddForm;
