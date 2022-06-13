import { NavItem } from './state';

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
  return state;
};
