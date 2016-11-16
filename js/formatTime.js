function formatTime(mins, secs) {
  const minsStr = padWithZeros('' + mins, 2);
  const secsStr = padWithZeros('' + secs, 2);
  return `${minsStr}:${secsStr}`;
}

function padWithZeros(str, len) {
  if (str.length === len) {
    return str;
  }

  return padWithZeros(`0${str}`, len);
}

module.exports = formatTime;
