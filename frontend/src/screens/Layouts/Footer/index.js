import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="page-footer" role="contentinfo">
      <div className="d-flex align-items-center flex-1 text-muted">
        <span className="hidden-md-down fw-700">
          2020 © Hati by&nbsp;
          <span className="text-primary fw-500" title="hatiaac.com">
            Hatiaac.com
          </span>
        </span>
      </div>
      <div>
        <ul className="list-table m-0">
          <li>
            <Link to="#" className="text-secondary fw-700">
              About
            </Link>
          </li>
          <li className="pl-3">
            <Link to="#" className="text-secondary fw-700">
              License
            </Link>
          </li>
          <li className="pl-3">
            <Link to="#" className="text-secondary fw-700">
              Documentation
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
