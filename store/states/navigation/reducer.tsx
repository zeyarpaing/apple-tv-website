import { NavItem } from './state';
import * as announcementActions from './actions';

const initialState: NavItem[] = [
  {
    label: 'Store',
    route: 'https://www.apple.com/us/shop/goto/store',
  },
  {
    label: 'Store',
    route: 'https://www.apple.com/us/shop/goto/store',
  },
];

export const reducer = (
  state = initialState,
  action: { type: any; message: any },
) => {
  switch (action.type) {
    case announcementActions.UPDATE_ANNOUNCEMENT:
      return Object.assign({}, state, { message: action.message });
    default:
      return state;
  }
};
