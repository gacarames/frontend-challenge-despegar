import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/Layout/Layout";
import "./NoMatch.scss";

const NoMatch = () => (
  <Section>
    <div className="no-match">
      <span className="no-match__icon"></span>
      <h1 className="no-match__message">Ops, algo funcionó mal!</h1>
      <Link to="/" className="no-match__link">
        Intenta nuevamente
      </Link>
    </div>
  </Section>
);

export default NoMatch;
