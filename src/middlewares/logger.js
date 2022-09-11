export const logger = store => next => action => {
  console.log('action:', action.type);
  next(action);
};
