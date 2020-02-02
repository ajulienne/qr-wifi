import React from "react";
import htmlToReactParser from "html-to-react";
import { connect } from "react-redux";
import { createQrCode, createNetworkString } from "../../utils/qrcode";

const NetworkQrCode = props => {
  const parser = new htmlToReactParser.Parser();

  return (
    props.qrCode && (
      <div style={{ width: "300px", height: "300px", margin: "auto" }}>
        {parser.parse(
          createQrCode(
            createNetworkString(
              props.qrCode.ssid,
              props.qrCode.authType,
              props.qrCode.password,
              props.qrCode.hidden
            ),
            "svg"
          )
        )}
      </div>
    )
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(NetworkQrCode);
