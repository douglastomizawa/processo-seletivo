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


describe("- Cada array deve conter jobs que sejam executados em no máximo 8h:", () => {
    test("Quando a soma das horas de execução forem igual ou menor que 8, os jobs devem estar no mesmo array", () => {
        expect(scheduling({
            range,
            jobsList: [
                {
                    'id': 1,
                    'description': 'Importação de arquivos de fundos',
                    'maxDate': '2019-11-10T12:00:00',
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
                    'maxDate': '2019-11-12T12:00:00',
                    'estimatedTime': 4,
                }
            ]
        }))
            .toEqual([[1, 2, 3], []]);
    });
    test("Quando a soma das horas de execução passarem de 8, o job deve retornar no próximo array", () => {
        expect(scheduling({
            range: {
                'startDate': '2019-11-10T09:00:00',
                'finalDate': '2019-11-12T12:00:00'
            },
            jobsList: [
                {
                    'id': 1,
                    'description': 'Importação de arquivos de fundos',
                    'maxDate': '2019-11-10T12:00:00',
                    'estimatedTime': 5,
                },
                {
                    'id': 2,
                    'description': 'Importação de dados da Base Legada',
                    'maxDate': '2019-11-11T12:00:00',
                    'estimatedTime': 5,
                },
                {
                    'id': 3,
                    'description': 'Importação de dados da Base Legada',
                    'maxDate': '2019-11-12T12:00:00',
                    'estimatedTime': 5,
                }
            ]
        }))
            .toEqual([[1], [2], [3]]);
    });
});