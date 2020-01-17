import React, { useState } from "react";
import "./Tooltip.scss";

function Tooltip(props) {
  const [showTooltip, setShowTooltio] = useState(false);

  function handleShow() {
    setShowTooltio(!showTooltip);
  }

  const {info} = props

  return (
    <span className="tooltip" onMouseMove={handleShow} onMouseLeave={handleShow}>
      {showTooltip && <span className="tooltip__content tooltip--bottom">{info}</span>}
      <span className="tooltip__trigger">i</span>
    </span>
  );
}

export default Tooltip;
