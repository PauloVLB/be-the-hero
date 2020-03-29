const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generete Unique ID', () => {
    it('should generate a unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});