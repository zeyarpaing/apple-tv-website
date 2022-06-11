export const UPDATE_ANNOUNCEMENT = '[Announcement] update';

export const updateAnnouncement =
  (message: string) =>
  (dispatch: (arg0: { type: string; message: string }) => any) => {
    return dispatch({ type: UPDATE_ANNOUNCEMENT, message });
  };

export const getNavitems = () => (dispatch: () => any) => {
  return dispatch();
};
