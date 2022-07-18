import React from "react";
import "./error-message.scss";

function ErrorMessage({ errorDescription }) {
  return (
    <div>
      <h2>Ошибка</h2>
      {/* TODO: show only in develop mode*/}
      <h3>{errorDescription}</h3>
    </div>
  );
}

export default ErrorMessage;
