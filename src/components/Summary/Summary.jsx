import React from "react";
import { connect } from "react-redux";
import NetworkQrCode from "../NetworkQrCode/NetworkQrCode";
import { createQrCode, createNetworkString } from "../../utils/qrcode";

class Summary extends React.Component {
  state = {};

  /**
   * Generate a PDF file containing the QRCode
   */
  downloadPdf = () => {
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:application/pdf;base64," +
        btoa(
          createQrCode(
            createNetworkString(
              this.props.qrCode.ssid,
              this.props.qrCode.authType,
              this.props.qrCode.password,
              this.props.qrCode.hidden
            ),
            "pdf"
          )
        )
    );
    element.setAttribute("download", `${this.props.qrCode.ssid}.pdf`);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  render() {
    return (
      this.props.qrCode && (
        <div className="summary">
          <hr className="uk-divider-icon no-print" />
          <NetworkQrCode />
          <p className="only-print centered">
            <strong>SSID:</strong> {this.props.qrCode.ssid}
            <br />
            <strong>Password:</strong> {this.props.qrCode.password}
          </p>
          <p className="no-print">
            <button
              className="uk-button uk-button-default half-size"
              onClick={this.downloadPdf}
            >
              Download PDF
            </button>
            <button
              className="uk-button uk-button-primary half-size"
              onClick={() => window.print()}
            >
              Print
            </button>
          </p>
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Summary);
