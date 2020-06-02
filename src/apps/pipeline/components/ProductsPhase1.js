import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { selectProduct } from '../actions/pipelineActions';
import {
  StatusTitles,
  PaperworkTitles,
  SampleTitles,
  Info_RequiredTitles,
  PaperworkClass,
  Info_RequiredClass,
  SampleClass,
} from '../layout/Labels';

class ProductsPhase1 extends Component {
  render(pipeline) {
    const products = this.props.products;

    return (
      <div>
        <div className='profiles'>
          {products !== undefined ? (
            products
              .filter((products) => products.phase === 1)
              .map((product) => (
                <div
                  key={product.id}
                  onClick={() => this.props.selectProduct(product.id)}
                >
                  <div className='pipeline bg-light text-center'>
                    <div className='text-left'>{product.name}</div>
                    <div>{product.niss}</div>
                    <div>{product.channel}</div>
                    <div>
                      <StatusTitles status={product.status} />
                    </div>
                    <div className={`${PaperworkClass(product.paperwork)}`}>
                      <PaperworkTitles paperwork={product.paperwork} />
                    </div>
                    <div>
                      {product.paperwork === 0 ? (
                        '---'
                      ) : (
                        <Moment format='MM/DD'>{product.paperwork_date}</Moment>
                      )}
                    </div>
                    <div className={`${SampleClass(product.sample)}`}>
                      <SampleTitles sample={product.sample} />
                    </div>
                    <div>
                      {product.sample === 0 ? (
                        '---'
                      ) : (
                        <Moment format='MM/DD'>{product.sample_date}</Moment>
                      )}
                    </div>
                    <div
                      className={`${Info_RequiredClass(product.info_required)}`}
                    >
                      <Info_RequiredTitles
                        info_required={product.info_required}
                      />
                    </div>
                    <div>
                      {product.info_required === 0 ? (
                        '---'
                      ) : (
                        <Moment format='MM/DD'>
                          {product.info_required_date}
                        </Moment>
                      )}
                    </div>
                    <p>{<Moment format='MM/DD'>{product.updatedAt}</Moment>}</p>
                  </div>
                </div>
              ))
          ) : (
            <h4> There are No Products in Phase 1</h4>
          )}
        </div>
      </div>
    );
  }
}

ProductsPhase1.propTypes = {
  selectedProduct: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.pipeline.selectedProduct,
  };
};

export default connect(mapStateToProps, { selectProduct })(ProductsPhase1);
