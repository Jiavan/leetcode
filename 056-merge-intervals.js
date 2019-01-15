/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    var res = [];

    intervals.sort((a, b) => a.start - b.start);
    
    if (intervals.length <= 1) {
        return intervals;
    }

    var l = intervals[0].start;
    var h = intervals[0].end;

    for (var i = 1; i < intervals.length; i++) {
        if (intervals[i].start - h <= 0) {
            h = Math.max(h, intervals[i].end);
        } else {
            res.push(new Interval(l, h));
            l = intervals[i].start;
            h = intervals[i].end;
        }
    }
    res.push(new Interval(l, h));

    return res;
};