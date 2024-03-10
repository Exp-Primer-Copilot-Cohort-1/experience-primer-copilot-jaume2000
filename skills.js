function calculateDaysBetweenDates(begin,end){
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var timeDifference = endDate.getTime() - beginDate.getTime();
    var daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    return daysDifference;
}

calculateDaysBetweenDates('2019-01-01','2019-01-31'); // 30