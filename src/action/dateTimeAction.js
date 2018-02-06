import moment from 'moment';

export function getWeek(currentWeek){
    return function(dispatch) {

        let currentDay = moment().format('DD-MM-YYYY'),
            numersOfDays = 7,
            weekDaysArray = [],
            newArray = [];

        moment.updateLocale( 'en', { week : { dow : 1 }});

        let dateRange = `${moment().weekday(0).add(currentWeek, 'weeks').format('DD-MM-YYYY')}  ${moment().weekday(6).add(currentWeek, 'weeks').format('DD-MM-YYYY')}`;

        for(var i = 0; i < numersOfDays; i++) {
            weekDaysArray.push({
                dayName: moment().weekday(i).add(currentWeek, 'weeks').format('dddd'),
                dayDate: moment().weekday(i).add(currentWeek, 'weeks').format('DD-MM-YYYY'),
                isCurrentDay: currentDay == moment().weekday(i).add(currentWeek, 'weeks').format('DD-MM-YYYY') ? true : false
            });
        }
        dispatch({ type: 'FETCH_DATE_TIME', payload: { currenDay: currentDay, weekDays: weekDaysArray, dateRange: dateRange }});
    }
}

export function setCurrentWeek(currentWeek){
    return function(dispatch) {

        dispatch({ type: 'SET_CURRENT_WEEK', payload: currentWeek});
    }
}