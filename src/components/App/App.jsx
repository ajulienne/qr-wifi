import React from "react";

import Form from "../Form/Form";
import Summary from "../Summary/Summary";
import "./App.css";

const App = props => {
  return (
    <div className="container">
      <h1 class="no-print">Wifi QR Code generator</h1>
      <Form />
      <Summary />
    </div>
  );
};

export default App;
