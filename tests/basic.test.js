const xlsxUtil = require('xlsx-util')

describe('xlsx-util', () => {
    it('basic test', () => {
        const something = xlsxUtil.parseXlsx(1, 2)
        expect(something).toBeTruthy()
    })
})
