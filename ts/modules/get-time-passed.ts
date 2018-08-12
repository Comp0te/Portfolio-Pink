import {SecondIn} from "./enums";

export default function getTimePassed(date: string): string {
  const currentDate = new Date();
  const postDate = new Date(date);
  const secondPassed = Math.round((+currentDate - +postDate) / 1000);
  let timePassed: string = "";

  if (secondPassed < 5) {
    timePassed = `(только что)`;
  } else if (secondPassed < SecondIn.Min) {
    timePassed = `(${secondPassed} секунд назад)`;
  } else if (secondPassed < SecondIn.Hour) {
    timePassed = `(${Math.round(secondPassed / SecondIn.Min)} минут назад)`;
  } else if (secondPassed < SecondIn.Day * 4.5) {
    timePassed = `(${Math.round(secondPassed / SecondIn.Hour)} часов назад)`;
  } else if (secondPassed < SecondIn.Year) {
    timePassed = `(${Math.round(secondPassed / SecondIn.Day)} дней назад)`;
  } else if (secondPassed < SecondIn.Year * 1.5) {
    timePassed = `(${Math.round(secondPassed / SecondIn.Year)} год назад)`;
  } else if (secondPassed < SecondIn.Year * 4.5) {
    timePassed = `(${Math.round(secondPassed / SecondIn.Year)} года назад)`;
  } else  {
    timePassed = `(${Math.round(secondPassed / SecondIn.Year)} лет назад)`;
  }

  return timePassed;
}
