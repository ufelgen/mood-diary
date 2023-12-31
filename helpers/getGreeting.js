import format from "date-fns/format";

export function getGreeting(userBirthday) {
  const today = format(new Date(), "MM-dd");
  if (today === userBirthday) {
    const greeting = "Alles Gute zum Geburtstag";
    return greeting;
  } else if (new Date().getHours() >= 6 && new Date().getHours() < 12) {
    const greeting = "Guten Morgen";
    return greeting;
  } else if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
    const greeting = "Hallo";
    return greeting;
  } else if (new Date().getHours() >= 18 && new Date().getHours() < 22) {
    const greeting = "Einen wunderschönen guten Abend";
    return greeting;
  } else {
    const greeting = "Gute Nacht";
    return greeting;
  }
}
