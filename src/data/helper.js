function formatMinutesToHours(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const hoursText = hours > 0 ? `${hours}h` : "";
  const minutesText = remainingMinutes > 0 ? `${remainingMinutes}m` : "";
  return `${hoursText} ${minutesText}`.trim();
}

export { formatMinutesToHours };
