export const SAVE_QR_CODE_INFOS = "[QR CODE] Save infos";

export const saveQrCodeInfos = payload => {
  return {
    type: SAVE_QR_CODE_INFOS,
    payload
  };
};
