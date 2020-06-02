import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Phase1Titles, Phase2Titles } from '../layout/Sections';
import { getPipeline, selectProduct } from '../actions/pipelineActions';
import AddProduct from '../components/AddProduct';
import ProductsPhase1 from '../components/ProductsPhase1';
import UpdatePhase1 from '../components/UpdatePhase1';
import UpdatePhase2 from '../components/UpdatePhase2';
import ProductsPhase2 from '../components/ProductsPhase2';
import ProductsPhase3 from '../components/ProductsPhase3';

class Pipeline extends Component {
  componentDidMount() {
    this.props.getPipeline();
  }

  render() {
    // Determine the id of the last item to identify the id that the next added item will have
    // This will allow to update state with id without fetching from MYSQL
    // If we impelment active toggle will need to update this functionality

    const pipeline = this.props.pipeline;
    const pipelength = pipeline.length;
    const nextId = pipelength === 0 ? 0 : pipeline[pipelength - 1].id + 1;

    const product = pipeline.filter(
      (pipeline) => pipeline.id === this.props.selectedProduct
    )[0];

    return (
      <Fragment>
        <div>
          <AddProduct nextId={nextId} />
        </div>
        <div>
          <h3 className='lead m-1'>Products in Phase 1</h3>
          <div>
            <Phase1Titles />
          </div>
          <div>
            <ProductsPhase1 products={pipeline} />
          </div>
          <UpdatePhase1 product={product} />
        </div>
        <div>
          <div>
            <Phase2Titles />
          </div>
          <div>
            <ProductsPhase2 products={pipeline} />
          </div>
          <UpdatePhase2 product={product} />
          <div className='profiles'></div>
        </div>
      </Fragment>
    );
  }
}

Pipeline.propTypes = {
  pipeline: PropTypes.array.isRequired,
  getPipeline: PropTypes.func.isRequired,
  selectedProduct: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  pipeline: state.pipeline.pipeline,
  selectedProduct: state.pipeline.selectedProduct,
});

export default connect(mapStateToProps, { getPipeline, selectProduct })(
  Pipeline
);
