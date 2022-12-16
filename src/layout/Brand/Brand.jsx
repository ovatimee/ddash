import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
const Brand = ({ asideStatus, setAsideStatus }) => {
  return (
    <div className="brand">
      <div className="brand-logo">
        <h1 className="brand-title ">
          <Link to="/" aria-label="Logo">
            h
          </Link>
        </h1>
      </div>
      <button
        type="button"
        className="btn brand-aside-toggle "
        aria-label="Toggle Aside"
        onClick={() => setAsideStatus(!asideStatus)}
      >
        <ArrowLeftIcon className="brand-aside-toggle-close h-4 w-4" size={20} />
        <ArrowRightIcon className="brand-aside-toggle-open h-4 w-4 text-white" size={50} />
      </button>
    </div>
  );
};
Brand.propTypes = {
  asideStatus: PropTypes.bool.isRequired,
  setAsideStatus: PropTypes.func.isRequired,
};
export default Brand;
