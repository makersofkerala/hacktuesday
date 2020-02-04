const calcAge = (dateString) => {

  const birthday = new Date(dateString).getTime();

  const msInYear = 365.25*24*60*60*1000;

  return parseInt((Date.now() - birthday) / msInYear);

}
