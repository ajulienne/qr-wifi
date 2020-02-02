import { SAVE_QR_CODE_INFOS } from "../actions";

const initialState = {
  qrCode: null
};

export const reducers = (state = initialState, action) => {
  if (action.type === SAVE_QR_CODE_INFOS) {
    return {
      ...state,
      qrCode: action.payload
    };
  } else {
    return initialState;
  }
};
