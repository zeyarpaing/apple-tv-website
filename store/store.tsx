import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './states/navigation/reducer';
import { createWrapper } from 'next-redux-wrapper';

// @ts-ignore
const initStore = (initialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware()),
  );
};

export const wrapper = createWrapper(initStore);
