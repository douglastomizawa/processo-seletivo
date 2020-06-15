const scheduling = require('../js/index');
const range = require('../common/data/range');
const jobsList = require('../common/data/jobsList');

describe("- O output deve ser [[1, 3], [2]]", () => {
    test('Verificar se o retorno é de acordo com o esperado', () => {
        expect(scheduling({
            range,
            jobsList
        }))
            .toEqual([[1, 3], [2]]);
    });
});
