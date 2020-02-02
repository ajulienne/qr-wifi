import qr from "qr-image";

export const createNetworkString = (ssid, authType, password, hidden) => {
  return `WIFI:T:${authType};S:${ssid};P:${password};${
    hidden ? "H:true" : ""
  };`;
};

export const createQrCode = (content, fileType) => {
  return qr.imageSync(content, {
    type: fileType
  });
};
