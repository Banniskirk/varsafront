import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { selectProduct } from '../actions/pipelineActions';

<div className='profiles'>
  {pipeline !== undefined ? (
    pipeline
      .filter((pipeline) => pipeline.phase === 1)
      .map((pipeline) => (
        <div>
          {/* {props.selectedProduct} */}
          <div className='pipeline bg-light text-center'>
            <div className='text-left'>{this.props.pipeline.name}</div>
            <p>{this.props.pipeline.niss}</p>
            <p>{this.props.pipeline.channel}</p>
            <p>{this.props.pipeline.status}</p>
            <p>{this.props.pipeline.paperwork}</p>
            <p>
              {
                <Moment format='MM/DD'>
                  {this.props.pipeline.paperwork_date}
                </Moment>
              }
            </p>
            <p>{this.props.pipeline.sample}</p>
            <p>
              {
                <Moment format='MM/DD'>
                  {this.props.pipeline.sample_date}
                </Moment>
              }
            </p>
            <p>{this.props.pipeline.info_required}</p>
            <p>
              {
                <Moment format='MM/DD'>
                  {this.props.pipeline.info_required_date}
                </Moment>
              }
            </p>
            <p>
              {<Moment format='MM/DD'>{this.props.pipeline.updatedAt}</Moment>}
            </p>
            <button onClick={selectHandler} type='button'>
              MOD
            </button>
          </div>
        </div>
      ))
  ) : (
    <h4> There are No Products in Phase 1</h4>
  )}
</div>;

const ProductsPhase1 = ({
  props,
  selectProduct,
  pipeline: {
    id,
    name,
    niss,
    channel,
    status,
    paperwork,
    paperwork_date,
    sample,
    sample_date,
    info_required,
    info_required_date,
    updatedAt,
  },
}) => {
  let selector = '';
  const selectHandler = async (e) => {
    selector = id;
    // if (this.props.selectedconst selectedProduct = props.selectedProduct;
    console.log(selector);
    console.log(props);
    console.log(id);
    e.preventDefault();
    await selectProduct(selector);
  };
  let that = this;
  if (selector !== id) {
    return (
      <div>
        {/* {props.selectedProduct} */}
        <div className='pipeline bg-light text-center'>
          <div className='text-left'>{name}</div>
          <p>{niss}</p>
          <p>{channel}</p>
          <p>{status}</p>
          <p>{paperwork}</p>
          <p>{<Moment format='MM/DD'>{paperwork_date}</Moment>}</p>
          <p>{sample}</p>
          <p>{<Moment format='MM/DD'>{sample_date}</Moment>}</p>
          <p>{info_required}</p>
          <p>{<Moment format='MM/DD'>{info_required_date}</Moment>}</p>
          <p>{<Moment format='MM/DD'>{updatedAt}</Moment>}</p>
          <button onClick={selectHandler} type='button'>
            MOD
          </button>
        </div>
      </div>
    );
  } else if (selector === id) {
    return (
      <form>
        <div>{name}</div>
        Nothing returned
      </form>
    );
  }
};

ProductsPhase1.propTypes = {
  pipeline: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  selectedProduct: state.selectedProduct,
});

export default connect(mapStateToProps, { selectProduct })(ProductsPhase1);
