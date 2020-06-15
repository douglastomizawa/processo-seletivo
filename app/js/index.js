const range = require('../common/data/range');
const jobsList = require('../common/data/jobsList');

jobsList.sort((a, b) => new Date(a.maxDate) - new Date(b.maxDate))


const scheduling = ({ range, jobsList }) => {

    const days = new Array(new Date(range.finalDate).getDate() - new Date(range.startDate).getDate() + 1);
    console.log(days);
     
}
console.log(jobsList);
module.exports = scheduling;
