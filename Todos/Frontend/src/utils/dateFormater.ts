function dateFormater(fullDate: string) {
  const dateTrim: string[] = fullDate.slice(0, 10).split("-");
  const monthCalander = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = monthCalander[+dateTrim[1] - 1];

  const formatedDate = month + " " + dateTrim[2] + ", " + dateTrim[0];

  return formatedDate;
}

export default dateFormater;
