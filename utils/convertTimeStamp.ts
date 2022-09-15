//function for converting a timestamp into a string that reflects the time passed since posting
export function convertTimestamp(timestamp) {
  const dayPosted = new Date(timestamp);
  const today = new Date();
  const yearDifference = today.getFullYear() - dayPosted.getFullYear();
  const monthDifference = today.getMonth() - dayPosted.getMonth();
  const dayDifference = today.getDate() - dayPosted.getDate();
  const hourDifference = today.getHours() - dayPosted.getHours();
  const minuteDifference = today.getMinutes() - dayPosted.getMinutes();
  if (yearDifference >= 1) {
    return yearDifference === 1
      ? yearDifference + " year ago"
      : yearDifference + " years ago"; //used ternary operators to add an 's' at the end if its more than single unit
  } else if (monthDifference >= 1) {
    return monthDifference === 1
      ? monthDifference + " month ago"
      : monthDifference + " months ago";
  } else if (dayDifference >= 1) {
    return dayDifference === 1
      ? dayDifference + " day ago"
      : dayDifference + " days ago";
  } else if (hourDifference >= 1) {
    return hourDifference === 1
      ? hourDifference + " hour ago"
      : hourDifference + " hours ago";
  } else if (minuteDifference >= 1) {
    return minuteDifference === 1
      ? minuteDifference + " minute ago"
      : minuteDifference + " minutes ago";
  } else {
    return "just now";
  }
}
