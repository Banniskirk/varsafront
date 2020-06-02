import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { selectProduct } from '../actions/pipelineActions';
import {
  StatusTitles,
  VendorProfileTitles,
  WebpoTitles,
  LabelTitles,
  NTPTitles,
  VendorProfileClass,
  WebpoClass,
  LabelClass,
} from '../layout/Labels';

class ProductsPhase1 extends Component {
  render(pipeline) {
    const products = this.props.products;

    return (
      <div>
        <div className='profiles'>
          {products !== undefined ? (
            products
              .filter((products) => products.phase === 2)
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
                    <div
                      className={`${VendorProfileClass(
                        product.vendor_profile
                      )}`}
                    >
                      <VendorProfileTitles
                        vendor_profile={product.vendor_profile}
                      />
                    </div>

                    <div className={`${WebpoClass(product.web_po)}`}>
                      <WebpoTitles web_po={product.web_po} />
                    </div>
                    <div className={`${LabelClass(product.label_review)}`}>
                      <LabelTitles label_review={product.label_review} />
                    </div>
                    <div>
                      <NTPTitles ntp={product.ntp} />
                    </div>
                    <div>
                      {product.ntp === 0 ? (
                        '---'
                      ) : (
                        <Moment format='MM/DD'>{product.ntp_date}</Moment>
                      )}
                    </div>
                    <div>
                      {product.ntp === 0 ? '---' : product.ntp_quantity}
                    </div>
                    <div>
                      {product.ntp === 0 ? (
                        '---'
                      ) : (
                        <Moment format='MM/DD'>
                          {product.ntp_release_date}
                        </Moment>
                      )}
                    </div>
                    <p>{<Moment format='MM/DD'>{product.updatedAt}</Moment>}</p>
                  </div>
                </div>
              ))
          ) : (
            <h4> There are No Products in Phase 2</h4>
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
