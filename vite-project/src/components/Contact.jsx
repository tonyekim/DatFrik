import React from "react";

const Contact = () => {
  return (
    <div className=" md:mt-48 max-w-[1100px] px-3 md:px-20 mx-auto" id="contact">
      <h1 className=" font-semibold text-xl text-left py-10">Contact</h1>

      <h1 className="py-6 text-sm text-center">
        Fill out this form to reach us.
      </h1>
      <div className="">
        <div className="flex items-center justify-center flex-col max-w-lg mx-auto">
          <div className="flex gap-2 w-full">
            <input
              type="text"
              className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="First name"
            />
            <input
              type="text"
              className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Lat name"
            />
          </div>
          <input
            type="email"
            className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
          />
          <input
            type="text"
            className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone (optional)"
          />
          <textarea
            type="text"
            className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Message"
          />

          <button
            type="submit"
            className="text-black font-medium bg-[#91D2F7] fo hover:opacity-50 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm w-full sm:w-auto px-12 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
