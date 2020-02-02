import React from "react";
import { saveQrCodeInfos } from "../../actions";
import { connect } from "react-redux";

import "./Form.css";

class Form extends React.Component {
  state = {
    ssid: null,
    authType: "WEP",
    password: null,
    hidden: false
  };

  handleSSIDInput = e => {
    this.setState({ ssid: e.target.value });
  };

  handleAuthInput = e => {
    console.log(e.target.value);
    this.setState({ authType: e.target.value });
  };

  handlePasswordInput = e => {
    this.setState({ password: e.target.value });
  };

  handleHiddenInput = e => {
    this.setState({ hidden: e.target.value });
  };

  generate = e => {
    e.preventDefault();
    this.props.dispatchSaveQrInfos(
      this.state.authType,
      this.state.ssid,
      this.state.password,
      this.state.hidden
    );
  };

  render() {
    return (
      <form className="no-print uk-form-stacked" onSubmit={this.generate}>
        <div>
          <label htmlFor="ssid" className="uk-form-label">
            SSID
          </label>
          <div className="uk-form-controls">
            <input
              id="ssid"
              className="uk-input"
              type="text"
              onChange={this.handleSSIDInput}
            />
          </div>
        </div>
        <div>
          <label htmlFor="auth" className="uk-form-label">
            Authentification type
          </label>
          <div className="uk-form-controls">
            <select
              id="auth"
              onChange={this.handleAuthInput}
              className="uk-select"
            >
              <option value="WPA">WPA/WPA2</option>
              <option value="WEP">WEP</option>
              <option value="nopass">None</option>
            </select>
          </div>
        </div>
        <div>
          <div className="uk-form-controls">
            <label htmlFor="hidden">
              <input
                type="checkbox"
                className="uk-checkbox"
                id="hidden"
                onChange={this.handleHiddenInput}
              />{" "}
              SSID is hidden
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="password" className="uk-form-label">
            Password
          </label>
          <div className="uk-form-controls">
            <input
              type="password"
              className="uk-input"
              onChange={this.handlePasswordInput}
            />
          </div>
        </div>
        <p>
          <input
            className="uk-button uk-button-default full-size"
            type="submit"
            value="Generate QR Code"
          />
        </p>
      </form>
    );
  }
}

const mapDispatchToProps = {
  dispatchSaveQrInfos: (authType, ssid, password, hidden) =>
    saveQrCodeInfos({ authType, ssid, password, hidden })
};

export default connect(null, mapDispatchToProps)(Form);
