import React, { useState } from 'react';

const Tab = ({ children }) => {
  const [highlightSyle, setHighlightStyle] = useState({
    left: 0,
    opacity: 0,
  });

  const moveHighlight = (e) => {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
    });
  };

  const hideHighlight = (e) => {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
      opacity: 0,
    });
  };

  return (
    <div className="tab" onMouseOut={hideHighlight} onMouseMove={moveHighlight}>
      <div className="highlight" style={highlightSyle} />
      {children}
    </div>
  );
};

export default Tab;
