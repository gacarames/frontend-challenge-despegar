import React from "react";
import { Link } from "react-router-dom";
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper'
import "./NoMatch.scss";

const NoMatch = () => (
  <SectionWrapper>
  <div className="no-match">
    <span className="no-match__icon"></span>
    <h1 className="no-match__message">Ops, algo funcionó mal!</h1>
    <Link to="/" className="no-match__link">Intenta nuevamente</Link>
  </div>
  </SectionWrapper>
)

export default NoMatch;
