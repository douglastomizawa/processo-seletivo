const range = require('../common/data/range');
const jobsList = require('../common/data/jobsList');

const scheduling = ({ range, jobsList }) => {

    jobsList.sort((a, b) => new Date(a.maxDate) - new Date(b.maxDate))

    const days = new Array(new Date(range.finalDate).getDate() - new Date(range.startDate).getDate() + 1);

    const schedule = [];

    console.log(days);
    console.log(schedule)

}
console.log(jobsList);
module.exports = scheduling;
