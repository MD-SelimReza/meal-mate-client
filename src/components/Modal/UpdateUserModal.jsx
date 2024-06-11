import PropTypes from "prop-types";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

const badges = ["admin", "silver", "gold", "platinum"];

const UpdateUserModal = ({ user, isOpen, onRequestClose, handleBadge }) => {
  const [selected, setSelected] = useState(user.badge);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-25"
        onClick={onRequestClose}
      ></div>
      <div className="relative w-full max-w-md p-4 mx-auto bg-white rounded-2xl shadow-xl">
        <h3 className="text-lg font-medium text-center leading-6 text-gray-900">
          Update User Role
        </h3>
        <div className="mt-4 w-full">
          <div className="relative mt-1">
            <button
              className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="block truncate">{selected}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <AiOutlineDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </button>
            {isDropdownOpen && (
              <ul className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {badges.map((badge, idx) => (
                  <li
                    key={idx}
                    className={`relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 ${
                      selected === badge ? "font-medium" : "font-normal"
                    } hover:bg-amber-100 hover:text-amber-900`}
                    onClick={() => {
                      setSelected(badge);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <span className="block truncate">{badge}</span>
                    {selected === badge ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <BsCheckLg className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <hr className="mt-16" />
        <div className="flex mt-2 justify-center gap-5">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            onClick={() => handleBadge(selected)}
          >
            Update
          </button>
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            onClick={onRequestClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

UpdateUserModal.propTypes = {
  user: PropTypes.object,
  onRequestClose: PropTypes.func,
  isOpen: PropTypes.bool,
  handleBadge: PropTypes.func,
};

export default UpdateUserModal;
