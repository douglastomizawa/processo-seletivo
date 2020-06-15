const range = require('../common/data/range');
const jobsList = require('../common/data/jobsList');

const scheduling = ({ range, jobsList }) => {
    jobsList.sort((a, b) => new Date(a.maxDate) - new Date(b.maxDate))
    const days = new Array(
        new Date(range.finalDate).getDate() - new Date(range.startDate).getDate() + 1
    );

    const schedule = [];

    for (let i = 0; i < days.length; i++) {
        days[i] = new Array(24);
        schedule.push({
            hours: 0,
            jobsList: new Array()
        });
    }

    days[0][new Date(range.startDate).getHours()] = '-';
    days[days.length - 1][new Date(range.finalDate).getHours()] = '-';
    days.forEach((day) => {
        for (hour = 0; hour < day.length; hour++) {
            if (count != 0) {
                day[hour] = 0;
            } else if (day[hour] === '-') {
                count++;
            } else if (count >= 2) {
                break;
            }
        }
    })
    
    for (let i = 0; i < jobsList.length; i++) {
        const element = jobsList[i];
        const estimatedTime = element.estimatedTime;
        console.log(element);
        console.log(estimatedTime)
        let next = false;

        if (next) {
            break;
        }

        for (let index = 0; index < days.length; index++) {
            let scheduledTime = schedule[index].hours;
            let day = days[index];
            for (let hour = 0; hour < day.length; hour++) {
                if (day[hour] === 0 && 8 >= (scheduledTime + estimatedTime)) {
                    scheduledTime += estimatedTime;
                    day.fill(1, hour, hour + estimatedTime);
                    const insert = schedule[index];
                    insert.hours = scheduledTime;
                    insert.jobsList.push(element.id);
                    console.log(insert);
                    next = true;
                }
            }

        }

    }
    console.log(days);
    console.log(schedule)

}
console.log(jobsList);
module.exports = scheduling;
