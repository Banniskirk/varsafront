import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import pipeline from '../apps/pipeline/reducers/pipelineReducers';

export default combineReducers({
  alert,
  auth,
  pipeline,
});
