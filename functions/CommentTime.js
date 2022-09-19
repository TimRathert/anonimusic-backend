function CommentTime(past){
    //let past = comment.timestamp
    //console.log(typeof past)
    //console.log((typeof past == String) ? '' : past)
    if (typeof past == "undefined"){
        past = new Date(2022,8,3) 
    }
    //console.log(typeof past)
    let date = new Date();
    let day = 86400000 //1000*60*60*24
    let second = 1000
    let minute = 60000
    let hour = 3600000
    let diff = Math.floor(date.getTime()-past.getTime())
    let days = Math.floor(diff/day);
    let years = Math.floor(days/365.25);
    let months = Math.floor((days/30.4375) - (years*12));
    days = Math.floor(days-((years*365.25)+(months*30.4375)))
    let hours = Math.floor((diff/hour) - ((years*8760) + (months*730.5) + (days*24)))
    let minutes = Math.floor(diff/minute) - ((hours*60)+(days*1440))
    let seconds = Math.floor(diff/second) -((minutes*60)+(hours*3600)+(days*86400))
    if (years > 0){
        console.log(`${years} year${(years>1) ? 's' : ''} ago`)
    } else if (months > 0) {
        console.log(`${months} month${(months>1) ? 's' : ''} ago`)
    } else if (days > 0) {
        console.log(`${days} day${(days>1) ? 's' : ''} ago`)
    } else if  (hours > 0) {
        console.log(`${hours} hour${(hours>1) ? 's' : ''} ago`)
    } else if (minutes > 0) {
        console.log(`${minutes} minute${(minutes>1) ? 's' : ''} ago`)
    } else if (seconds > 0) {
        console.log(`${seconds} second${(seconds>1) ? 's' : ''} ago`)
    } else {
        console.log(`Just now`)
    }
}

let date = new Date(2022,8,3) 
CommentTime(date)