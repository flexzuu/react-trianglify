import { expect } from 'chai';

import removeUndefined from './utils';

describe('utils', () => {
  describe('removeUndefined', () => {
    it('should remove all undefinded fields from an objekt without changing the objekt', () => {
      const removed = removeUndefined({
        string: 'string',
        bool: true,
        null: null,
        toRemove: undefined,
      });
      expect(removed).to.deep.equal({
        string: 'string',
        bool: true,
        null: null,
      });
    });
  });
});
