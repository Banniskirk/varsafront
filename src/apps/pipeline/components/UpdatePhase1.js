import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import {
  updatePaperwork,
  updateSample,
  updateInfoRequired,
  updatePhase,
  selectProduct,
} from '../actions/pipelineActions';
import {
  StatusTitles,
  PaperworkTitles,
  SampleTitles,
  Info_RequiredTitles,
  PaperworkClass,
  Info_RequiredClass,
  SampleClass,
  AllCompleted,
} from '../layout/Labels';

class UpdatePhase1 extends Component {
  render() {
    if (this.props.selectedProduct <= 0) {
      return <div></div>;
    }

    if (this.props.product.phase === 1) {
      return (
        <div className='bg-dark'>
          <div onClick={() => this.props.selectProduct(0)}>
            <h3 className='large py-1 m-1'>
              PHASE 1 UPDATE {this.props.product.name}
            </h3>
          </div>

          <form className='profiles form'>
            <div>
              <div className='bg-blue text-center'>
                <div className='grid-3c m-1 p'>
                  <h3>NISS: {this.props.product.niss}</h3>
                  <h3>CHANNEL: {this.props.product.channel}</h3>
                  <h3>STATUS:{this.props.product.status}</h3>
                </div>
                {this.props.product.paperwork === 0 ? (
                  <div className='grid-3c p'>
                    <div>NO PAPERWORK REQUIRED</div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <div>
                    <div className='grid-3c p'>
                      <div>PAPERWORK IS REQUIRED</div>
                      <div>
                        Date required by:{' '}
                        {
                          <Moment format='MM/DD'>
                            {this.props.product.paperwork_date}
                          </Moment>
                        }
                      </div>
                      <div></div>
                    </div>
                    <div className='grid-3c p'>
                      <button
                        disabled={
                          this.props.product.paperwork === 1 ? false : true
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.updatePaperwork({
                            id: this.props.product.id,
                            paperwork: 2,
                          });
                        }}
                        className={
                          this.props.product.paperwork > 1 ? 'ph-green' : ''
                        }
                      >
                        Requested Paperwork
                      </button>
                      <button
                        disabled={
                          this.props.product.paperwork === 2 ? false : true
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.updatePaperwork({
                            id: this.props.product.id,
                            paperwork: 3,
                          });
                        }}
                        className={
                          this.props.product.paperwork > 2 ? 'ph-green' : ''
                        }
                      >
                        Received Paperwork
                      </button>
                      <button
                        disabled={
                          this.props.product.paperwork === 3 ? false : true
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.updatePaperwork({
                            id: this.props.product.id,
                            paperwork: 4,
                          });
                        }}
                        className={
                          this.props.product.paperwork > 3 ? 'ph-green' : ''
                        }
                      >
                        Delivered Paperwork
                      </button>
                    </div>
                    {this.props.product.paperwork === 0 ||
                    this.props.product.paperwork === 4 ? (
                      <div>Paperwork section completed</div>
                    ) : (
                      <div className='grid-3c'>
                        <div>
                          <i className='fas fa-arrow-right'></i>
                        </div>
                        <div>
                          <i className='fas fa-arrow-right'></i>
                        </div>
                        <div>
                          <i className='fas fa-arrow-right'></i>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {this.props.product.sample === 0 ? (
                  <div className='grid-3c p'>
                    <div>NO SAMPLES REQUIRED</div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <div>
                    <div className='grid-3c p'>
                      <div>SAMPLES ARE REQUIRED</div>
                      <div>
                        Date required by:{' '}
                        {
                          <Moment format='MM/DD'>
                            {this.props.product.sample_date}
                          </Moment>
                        }
                      </div>
                    </div>
                    <div className='grid-5c p'>
                      <button
                        disabled={
                          this.props.product.sample === 1 ? false : true
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.updateSample({
                            id: this.props.product.id,
                            sample: 2,
                          });
                        }}
                        className={
                          this.props.product.sample > 1 ? 'ph-green' : ''
                        }
                      >
                        Request Samples
                      </button>
                      <button
                        disabled={
                          this.props.product.sample === 2 ? false : true
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.updateSample({
                            id: this.props.product.id,
                            sample: 3,
                          });
                        }}
                        className={
                          this.props.product.sample > 2 ? 'ph-green' : ''
                        }
                      >
                        Confirmed sending
                      </button>
                      <button
                        disabled={
                          this.props.product.sample === 3 ? false : true
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.updateSample({
                            id: this.props.product.id,
                            sample: 4,
                          });
                        }}
                        className={
                          this.props.product.sample > 3 ? 'ph-green' : ''
                        }
                      >
                        Confirmed sent
                      </button>
                      <button
                        disabled={
                          this.props.product.sample === 4 ? false : true
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.updateSample({
                            id: this.props.product.id,
                            sample: 5,
                          });
                        }}
                        className={
                          this.props.product.sample > 4 ? 'ph-green' : ''
                        }
                      >
                        Received Samples
                      </button>
                      <button
                        disabled={
                          this.props.product.sample === 5 ? false : true
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.updateSample({
                            id: this.props.product.id,
                            sample: 6,
                          });
                        }}
                        className={
                          this.props.product.sample > 5 ? 'ph-green' : ''
                        }
                      >
                        Delivered Samples
                      </button>
                    </div>
                    {this.props.product.sample === 0 ||
                    this.props.product.sample === 6 ? (
                      <div>Paperwork section completed</div>
                    ) : (
                      <div className='grid-5c'>
                        <div>
                          <i className='fas fa-arrow-right'></i>
                        </div>
                        <div>
                          <i className='fas fa-arrow-right'></i>
                        </div>
                        <div>
                          <i className='fas fa-arrow-right'></i>
                        </div>
                        <div>
                          <i className='fas fa-arrow-right'></i>
                        </div>
                        <div>
                          <i className='fas fa-arrow-right'></i>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {this.props.product.info_required === 0 ? (
                  <div className='grid-3c p'>
                    <div>NO ADDITINOAL INFORMATION REQUIRED</div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <div>
                    <div className='grid-3c p'>
                      <div>ADDITIONAL INFORMATION IS REQUIRED</div>
                      <div>
                        Date required by:{' '}
                        {
                          <Moment format='MM/DD'>
                            {this.props.product.info_required_date}
                          </Moment>
                        }
                      </div>
                    </div>
                    <div className='grid-3c p'>
                      <button
                        disabled={
                          this.props.product.info_required === 1 ? false : true
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.updateInfoRequired({
                            id: this.props.product.id,
                            info_required: 2,
                          });
                        }}
                        className={
                          this.props.product.info_required > 1 ? 'ph-green' : ''
                        }
                      >
                        Request Information
                      </button>
                      <button
                        disabled={
                          this.props.product.info_required === 2 ? false : true
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.updateInfoRequired({
                            id: this.props.product.id,
                            info_required: 3,
                          });
                        }}
                        className={
                          this.props.product.info_required > 2 ? 'ph-green' : ''
                        }
                      >
                        Received Information
                      </button>
                      <button
                        disabled={
                          this.props.product.info_required === 3 ? false : true
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.updateInfoRequired({
                            id: this.props.product.id,
                            info_required: 4,
                          });
                        }}
                        className={
                          this.props.product.info_required > 3 ? 'ph-green' : ''
                        }
                      >
                        Updated Information
                      </button>
                    </div>
                    {this.props.product.info_required === 0 ||
                    this.props.product.info_required === 4 ? (
                      <div>Additional Info section completed</div>
                    ) : (
                      <div className='grid-3c'>
                        <div>
                          <i className='fas fa-arrow-right'></i>
                        </div>
                        <div>
                          <i className='fas fa-arrow-right'></i>
                        </div>
                        <div>
                          <i className='fas fa-arrow-right'></i>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div>
              {' '}
              <div className='btn-wide'>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.updatePhase({
                      id: this.props.product.id,
                      phase: 2,
                    });
                    this.props.selectProduct(0);
                  }}
                  className={AllCompleted(
                    this.props.product.paperwork,
                    this.props.product.sample,
                    this.props.product.info_required
                  )}
                >
                  ALL COMPLETED MOVE TO PHASE 2
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

UpdatePhase1.propTypes = {
  selectedProduct: PropTypes.number.isRequired,
  updatePaperwork: PropTypes.func.isRequired,
  updateSample: PropTypes.func.isRequired,
  updateInfoRequired: PropTypes.func.isRequired,
  AllCompleted: PropTypes.func.isRequired,
  updatePhase: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.pipeline.selectedProduct,
  };
};

export default connect(mapStateToProps, {
  updatePaperwork,
  updateSample,
  updateInfoRequired,
  AllCompleted,
  updatePhase,
  selectProduct,
})(UpdatePhase1);
