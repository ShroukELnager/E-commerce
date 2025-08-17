import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./breadcrumbs.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  if (paths.length === 0) return null;

  return (
    <nav className="breadcrumbs">
      <Link to="/" className="breadcrumb-link">Home</Link>
      {paths.map((path, index) => {
        const url = `/${paths.slice(0, index + 1).join("/")}`;
        const isLast = index === paths.length - 1;

        return (
          <span key={index} className="breadcrumb-item">
            {" / "}
            <Link to={url} className={`breadcrumb-link ${isLast ? "active" : ""}`}>
              {path.replace("-", " ")}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
