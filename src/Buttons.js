import React from "react";
import { useHistory } from "react-router-dom";

function BackButton() {
  const history = useHistory();
  return (
    <button type="button" onClick={() => history.goBack()}>
      Go Back
    </button>
  );
}

function ForwardButton() {
    const history = useHistory();
    return (
      <button type="button" onClick={() => history.goForward()}>
        Go Forward
      </button>
    );
  }

export default Buttons