import { ObjectId } from 'mongodb';

/**
 * The basicUtils object contains
 * a method to check if an ID is valid for MongoDB.
 */

const basicUtils = {
  /**
   * Checks if Id is Valid for Mongo
   * @id {string|number} id to be evaluated
   * @return {boolean} true if valid, false if not
   */
  isValidId(id) {
    try {
      ObjectId(id);
    } catch (err) {
      return false;
    }
    return true;
  },
};

export default basicUtils;
