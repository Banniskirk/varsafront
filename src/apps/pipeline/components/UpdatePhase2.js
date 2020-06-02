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
  updateVendorProfile,
  updateWebPo,
  updateLabel,
  updateNTP,
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

class UpdatePhase2 extends Component {
  render() {
    if (this.props.selectedProduct <= 0) {
      return <div></div>;
    }
    if (this.props.product.phase === 2) {
      return (
        <div className='bg-dark'>
          <div onClick={() => this.props.selectProduct(0)}>
            <h3 className='large py-1 m-1'>
              PHASE 2 UPDATE {this.props.product.name}
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

                <div>
                  <div className='p'>
                    <div>VENDOR PROFILE</div>
                  </div>
                  <div className='grid-4c p'>
                    <button
                      disabled={
                        this.props.product.vendor_profile === 0 ? false : true
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.updateVendorProfile({
                          id: this.props.product.id,
                          vendor_profile: 1,
                        });
                      }}
                      className={
                        this.props.product.vendor_profile > 0 ? 'ph-green' : ''
                      }
                    >
                      Send documents to supplier
                    </button>
                    <button
                      disabled={
                        this.props.product.vendor_profile === 1 ? false : true
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.updateVendorProfile({
                          id: this.props.product.id,
                          vendor_profile: 2,
                        });
                      }}
                      className={
                        this.props.product.vendor_profile > 1 ? 'ph-green' : ''
                      }
                    >
                      Received Form from Supplier
                    </button>
                    <button
                      disabled={
                        this.props.product.vendor_profile === 2 ? false : true
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.updateVendorProfile({
                          id: this.props.product.id,
                          vendor_profile: 3,
                        });
                      }}
                      className={
                        this.props.product.vendor_profile > 2 ? 'ph-green' : ''
                      }
                    >
                      Submitted Vendor Form to LCBO
                    </button>
                    <button
                      disabled={
                        this.props.product.vendor_profile === 3 ? false : true
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.updateVendorProfile({
                          id: this.props.product.id,
                          vendor_profile: 4,
                        });
                      }}
                      className={
                        this.props.product.vendor_profile > 3 ? 'ph-green' : ''
                      }
                    >
                      Vendor Profile Setup
                    </button>
                  </div>
                  {this.props.product.vendor_profile === 4 ? (
                    <div>Vendro Profile section completed</div>
                  ) : (
                    <div className='grid-4c'>
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

                <div>
                  <div className='p'>
                    <div>WEB PO</div>
                  </div>
                  <div className='grid-2c p'>
                    <button
                      disabled={this.props.product.web_po === 0 ? false : true}
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.updateWebPo({
                          id: this.props.product.id,
                          web_po: 1,
                        });
                      }}
                      className={
                        this.props.product.web_po > 0 ? 'ph-green' : ''
                      }
                    >
                      Request submitted
                    </button>
                    <button
                      disabled={this.props.product.web_po === 1 ? false : true}
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.updateWebPo({
                          id: this.props.product.id,
                          web_po: 2,
                        });
                      }}
                      className={
                        this.props.product.web_po > 1 ? 'ph-green' : ''
                      }
                    >
                      Web PO Setup Confirmed
                    </button>
                  </div>
                  {this.props.product.web_po === 2 ? (
                    <div>Web PO section completed</div>
                  ) : (
                    <div className='grid-2c'>
                      <div>
                        <i className='fas fa-arrow-right'></i>
                      </div>
                      <div>
                        <i className='fas fa-arrow-right'></i>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <div className=' p'>
                    <div>Label Review</div>
                  </div>
                  <div className='grid-4c p'>
                    <button
                      disabled={
                        this.props.product.label_review === 0 ? false : true
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.updateLabel({
                          id: this.props.product.id,
                          label_review: 1,
                        });
                      }}
                      className={
                        this.props.product.label_review > 0 ? 'ph-green' : ''
                      }
                    >
                      Send label instructions
                    </button>
                    <button
                      disabled={
                        this.props.product.label_review === 1 ? false : true
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.updateLabel({
                          id: this.props.product.id,
                          label_review: 2,
                        });
                      }}
                      className={
                        this.props.product.label_review > 1 ? 'ph-green' : ''
                      }
                    >
                      Received Labels
                    </button>
                    <button
                      disabled={
                        this.props.product.label_review === 2 ? false : true
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.updateLabel({
                          id: this.props.product.id,
                          label_review: 3,
                        });
                      }}
                      className={
                        this.props.product.label_review > 2 ? 'ph-red' : ''
                      }
                    >
                      Reviewed and Not Approuved
                    </button>
                    <button
                      disabled={
                        this.props.product.label_review === 3 ? false : true
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.updateLabel({
                          id: this.props.product.id,
                          label_review: 4,
                        });
                      }}
                      className={
                        this.props.product.label_review > 3 ? 'ph-green' : ''
                      }
                    >
                      Labels Approuved
                    </button>
                  </div>
                  {this.props.product.label_review === 4 ? (
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
                  <div></div>
                </div>
              </div>
            </div>
            <div></div>
          </form>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

UpdatePhase2.propTypes = {
  selectedProduct: PropTypes.number.isRequired,
  updateVendorProfile: PropTypes.func.isRequired,
  updateWebPo: PropTypes.func.isRequired,
  updateLabel: PropTypes.func.isRequired,
  updateNTP: PropTypes.func.isRequired,
  AllCompleted: PropTypes.func.isRequired,
  updatePhase: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.pipeline.selectedProduct,
  };
};

export default connect(mapStateToProps, {
  updateVendorProfile,
  updateWebPo,
  updateLabel,
  updateNTP,
  AllCompleted,
  updatePhase,
  selectProduct,
})(UpdatePhase2);
