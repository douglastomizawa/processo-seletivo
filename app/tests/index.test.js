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


describe("- Cada array do conjunto representa uma lista de Jobs a serem executados em sequência:", () => {
    test("Validar se os jobs estão ordenados pela data máxima de conclusão.", () => {
        expect(scheduling({
            range,
            jobsList: [
                {
                    'id': 1,
                    'description': 'Importação de arquivos de fundos',
                    'maxDate': '2019-11-12T12:00:00',
                    'estimatedTime': 2,
                },
                {
                    'id': 2,
                    'description': 'Importação de dados da Base Legada',
                    'maxDate': '2019-11-11T12:00:00',
                    'estimatedTime': 2,
                },
                {
                    'id': 3,
                    'description': 'Importação de dados da Base Legada',
                    'maxDate': '2019-11-10T12:00:00',
                    'estimatedTime': 2,
                }
            ]
        }))
            .toEqual([[3, 2, 1], []]);
    });
});
