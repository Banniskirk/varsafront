import axios from 'axios';
import { setAlert } from '../../../actions/alert';

import {
  GET_PIPELINE,
  SELECT_PRODUCT,
  GET_PRODUCT,
  UPDATE_PIPELINE,
  ADD_PRODUCT,
  PIPELINE_ERROR,
  CLEAR_PIPELINE,
  UPDATE_PAPERWORK,
  UPDATE_SAMPLE,
  UPDATE_INFOREQUIRED,
  UPDATE_PHASE,
  UPDATE_VENDORPROFILE,
  UPDATE_WEBPO,
  UPDATE_LABEL,
  UPDATE_NTP,
} from './types';

// Get all active pipeline items

export const getPipeline = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/pipeline');

    dispatch({
      type: GET_PIPELINE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PIPELINE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Select one product to update it

export const selectProduct = (id) => async (dispatch) => {
  console.log('select product');
  try {
    dispatch({
      type: SELECT_PRODUCT,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: PIPELINE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add product

export const addProduct = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify(formData);
    const res = await axios.post('api/pipeline', body, config);
    dispatch({
      type: ADD_PRODUCT,
      payload: formData,
    });
  } catch (err) {
    dispatch({
      type: PIPELINE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update paperwork

export const updatePaperwork = (formData) => async (dispatch) => {
  console.log('Action upPaper');

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(`api/pipeline/`, formData, config);
    dispatch({
      type: UPDATE_PAPERWORK,
      payload: { id: formData.id, paperwork: formData.paperwork },
    });
  } catch (err) {
    dispatch({
      type: PIPELINE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update sample

export const updateSample = (formData) => async (dispatch) => {
  console.log('Action upPaper');

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(`api/pipeline/`, formData, config);
    dispatch({
      type: UPDATE_SAMPLE,
      payload: { id: formData.id, sample: formData.sample },
    });
  } catch (err) {
    dispatch({
      type: PIPELINE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update info required

export const updateInfoRequired = (formData) => async (dispatch) => {
  console.log('Action upPaper');

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(`api/pipeline/`, formData, config);
    dispatch({
      type: UPDATE_INFOREQUIRED,
      payload: { id: formData.id, info_required: formData.info_required },
    });
  } catch (err) {
    dispatch({
      type: PIPELINE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update phase

export const updatePhase = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(`api/pipeline/`, formData, config);
    dispatch({
      type: UPDATE_PHASE,
      payload: { id: formData.id, phase: formData.phase },
    });
  } catch (err) {
    dispatch({
      type: PIPELINE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update Vendor Profile

export const updateVendorProfile = (formData) => async (dispatch) => {
  console.log('Action upPaper');

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(`api/pipeline/`, formData, config);
    dispatch({
      type: UPDATE_VENDORPROFILE,
      payload: { id: formData.id, vendor_profile: formData.vendor_profile },
    });
  } catch (err) {
    dispatch({
      type: PIPELINE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update sample

export const updateWebPo = (formData) => async (dispatch) => {
  console.log('Action upPaper');

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(`api/pipeline/`, formData, config);
    dispatch({
      type: UPDATE_WEBPO,
      payload: { id: formData.id, web_po: formData.web_po },
    });
  } catch (err) {
    dispatch({
      type: PIPELINE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update Label

export const updateLabel = (formData) => async (dispatch) => {
  console.log('Action upPaper');

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(`api/pipeline/`, formData, config);
    dispatch({
      type: UPDATE_LABEL,
      payload: { id: formData.id, label_review: formData.label_review },
    });
  } catch (err) {
    dispatch({
      type: PIPELINE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update NTP

export const updateNTP = (formData) => async (dispatch) => {
  console.log('Action upPaper');

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(`api/pipeline/`, formData, config);
    dispatch({
      type: UPDATE_NTP,
      payload: { id: formData.id, ntp: formData.ntp },
    });
  } catch (err) {
    dispatch({
      type: PIPELINE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
