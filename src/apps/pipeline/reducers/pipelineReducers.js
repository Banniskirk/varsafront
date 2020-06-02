import {
  GET_PIPELINE,
  SELECT_PRODUCT,
  GET_PRODUCT,
  PIPELINE_ERROR,
  CLEAR_PIPELINE,
  ADD_PRODUCT,
  UPDATE_PAPERWORK,
  UPDATE_SAMPLE,
  UPDATE_INFOREQUIRED,
  UPDATE_PHASE,
  UPDATE_VENDORPROFILE,
  UPDATE_WEBPO,
  UPDATE_LABEL,
  UPDATE_NTP,
} from '../actions/types';

const initialState = {
  selectedProduct: 0,
  pipeline: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PIPELINE:
      return {
        ...state,
        pipeline: payload,
        loading: false,
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: payload,
        loading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        pipeline: payload,
        loading: false,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        pipeline: [...state.pipeline, payload],
        loading: false,
      };
    case PIPELINE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PIPELINE:
      return {
        ...state,
        pipeline: null,
        loading: false,
      };
    case UPDATE_PAPERWORK:
      return {
        ...state,
        pipeline: state.pipeline.map((pipeline) =>
          pipeline.id === payload.id
            ? { ...pipeline, paperwork: payload.paperwork }
            : pipeline
        ),
        loading: false,
      };
    case UPDATE_SAMPLE:
      return {
        ...state,
        pipeline: state.pipeline.map((pipeline) =>
          pipeline.id === payload.id
            ? { ...pipeline, sample: payload.sample }
            : pipeline
        ),
        loading: false,
      };
    case UPDATE_INFOREQUIRED:
      return {
        ...state,
        pipeline: state.pipeline.map((pipeline) =>
          pipeline.id === payload.id
            ? { ...pipeline, info_required: payload.info_required }
            : pipeline
        ),
        loading: false,
      };
    case UPDATE_PHASE:
      return {
        ...state,
        pipeline: state.pipeline.map((pipeline) =>
          pipeline.id === payload.id
            ? { ...pipeline, phase: payload.phase }
            : pipeline
        ),
        loading: false,
      };
    case UPDATE_VENDORPROFILE:
      return {
        ...state,
        pipeline: state.pipeline.map((pipeline) =>
          pipeline.id === payload.id
            ? { ...pipeline, vendor_profile: payload.vendor_profile }
            : pipeline
        ),
        loading: false,
      };
    case UPDATE_WEBPO:
      return {
        ...state,
        pipeline: state.pipeline.map((pipeline) =>
          pipeline.id === payload.id
            ? { ...pipeline, web_po: payload.web_po }
            : pipeline
        ),
        loading: false,
      };
    case UPDATE_LABEL:
      return {
        ...state,
        pipeline: state.pipeline.map((pipeline) =>
          pipeline.id === payload.id
            ? { ...pipeline, label_review: payload.label_review }
            : pipeline
        ),
        loading: false,
      };
    case UPDATE_NTP:
      return {
        ...state,
        pipeline: state.pipeline.map((pipeline) =>
          pipeline.id === payload.id
            ? { ...pipeline, ntp: payload.ntp }
            : pipeline
        ),
        loading: false,
      };
    default:
      return state;
  }
}
