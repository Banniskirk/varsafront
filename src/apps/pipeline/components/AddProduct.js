import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getPipeline,
  addProduct,
  selectProduct,
} from '../actions/pipelineActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const initialState = {
  name: '',
  supplier: '',
  niss: '',
  department: '',
  channel: '',
  phase: '',
  status: '',
  paperwork: '',
  paperwork_date: '',
  sample: '',
  sample_date: '',
  vendor_profile: '',
  web_po: '',
  label_review: '',
  ntp: '',
};

const AddProduct = ({
  addProduct,
  selectedProduct,
  selectProduct,
  getPipeline,
  pipeline,
  nextId,
}) => {
  const [formData, setFormData] = useState({ initialState });
  const {
    id,
    name,
    supplier,
    niss,
    channel,
    status,
    phase,
    paperwork,
    paperwork_date,
    sample,
    sample_date,
    info_required,
    info_required_date,
    vendor_profile,
    web_po,
    label_review,
    ntp,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onPaperworkDateChange = (date) =>
    setFormData({ ...formData, paperwork_date: date });

  const onSampleDateChange = (date) =>
    setFormData({ ...formData, sample_date: date });

  const onInfoDateChange = (date) =>
    setFormData({ ...formData, info_required_date: date });

  const selectProductHandler = (e) => {
    e.preventDefault();
    console.log('running sP Handler');
    selectProduct(-1);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    selectProduct(0);
    addProduct({
      id: nextId,
      name,
      supplier,
      niss,
      channel,
      phase: 1,
      status,
      paperwork,
      paperwork_date,
      sample,
      sample_date,
      info_required,
      info_required_date,
      vendor_profile: 0,
      web_po: 0,
      label_review: 0,
      ntp: 0,
    });
  };

  if (selectedProduct >= 0) {
    return (
      <div className='text-center m-2'>
        <button
          className='large btn-primary p-1'
          onClick={selectProductHandler}
        >
          Add New Product
        </button>
      </div>
    );
  }
  return (
    <Fragment>
      <h1 className='large text-primary'>
        Enter the information for the product
      </h1>
      <form
        className='form group m-1 bg-dark'
        onSubmit={onSubmit}
        autoComplete='off'
      >
        <input type='hidden' name='id' value={nextId} onChange={onChange} />
        <div>
          <div className='grid-3c'>
            <div className='form=group m-1'>
              <input
                type='text'
                placeholder='Product Name'
                name='name'
                value={name || ''}
                onChange={onChange}
              />
            </div>
            <div className='form=group m-1'>
              <input
                type='text'
                placeholder='Supplier Name'
                name='supplier'
                value={supplier || ''}
                onChange={onChange}
              />
            </div>
            <div className='form=group m-1'>
              <input
                type='text'
                placeholder='NISS Number'
                name='niss'
                value={niss || ''}
                onChange={onChange}
              />
            </div>
          </div>
          <div className='grid-3c'>
            <div className='form=group m-1'>
              <select name='channel' value={channel || ''} onChange={onChange}>
                <option className='red-text'>
                  *** Select Sales Channel ***
                </option>
                <option value='Vintages'>Vintages</option>
                <option value='Classics'>Classics</option>
                <option value='Wines'>LCBO Wines</option>
                <option value='Spirits'>Spirits</option>
              </select>
              <input type='hidden' name='phase' value={1} onChange={onChange} />
            </div>
            <div className='form=group m-1'>
              <select name='status' value={status || ''} onChange={onChange}>
                <option>*** Set Initial Status ***</option>
                <option value='1'>Accepted for Tasting</option>
                <option value='2'>Accepted to Proceed</option>
                <option value='3'>Other Notification</option>
              </select>
            </div>
          </div>
          <div className='grid-3c'>
            {' '}
            <div className='form=group m-1'>
              <select
                name='paperwork'
                value={paperwork || ''}
                onChange={onChange}
              >
                <option>*** Paperwork Required? ***</option>
                <option value='1'>PaperWork Required</option>
                <option value='0'>PaperWork Not Required</option>
              </select>
              <div>
                <DatePicker
                  selected={paperwork_date}
                  name='paperwork_date'
                  value={paperwork_date || ''}
                  onChange={onPaperworkDateChange}
                />
              </div>
            </div>
            <div className='form=group m-1'>
              <select name='sample' value={sample} onChange={onChange}>
                <option>*** Sample Required? ***</option>
                <option value='1'>Sample Required</option>
                <option value='0'>Sample Not Required</option>
              </select>
              <div>
                <DatePicker
                  selected={sample_date}
                  name='sample_date'
                  value={sample_date}
                  onChange={onSampleDateChange}
                />
              </div>
            </div>
            <div className='form=group m-1'>
              <select
                name='info_required'
                value={info_required}
                onChange={onChange}
              >
                <option>*** Info Required? ***</option>
                <option value='1'>Additional Information is Required</option>
                <option value='0'>No Additional Information is Required</option>
              </select>
              <div>
                <DatePicker
                  selected={info_required_date}
                  name='info_required_date'
                  value={info_required_date}
                  onChange={onInfoDateChange}
                  placeholder='Select Date'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='grid-2c'>
          <button
            onClick={(e) => {
              e.preventDefault();
              selectProduct(0);
            }}
            className='lead btn btn-primary my-1'
          >
            Cancel
          </button>
          <input
            type='submit'
            value='Submit New Product'
            className='lead btn btn-primary my-1'
          ></input>
        </div>
      </form>
    </Fragment>
  );
};

AddProduct.propTypes = {
  selectedProduct: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.pipeline.selectedProduct,
    pipeline: state.pipeline.pipeline,
  };
};

export default connect(mapStateToProps, {
  addProduct,
  selectProduct,
  getPipeline,
})(AddProduct);
