import vtb from "./assets/images/bankLogos/vtb.png";
import alfa from "./assets/images/bankLogos/alfa.png";
import tinkoff from "./assets/images/bankLogos/tinkoff.png";
import sber from "./assets/images/bankLogos/sber.png";

export default {
  login: "anrand@gmail.com",
  personalData: { firstName: "Анастасия", secondName: "Рандомова" },
  currentLoans: [
    {
      bankName: "Альфа",
      bankColor: "#ff0000",
      bankLogo: alfa,
      loanSize: 350000,
      monthlyPayment: 14350,
      loanDuration: 30,
      completedPayments: 3,
    },
    {
      bankName: "ВТБ",
      bankColor: "#08239c",
      bankLogo: vtb,
      loanSize: 300000,
      monthlyPayment: 12350,
      loanDuration: 30,
      completedPayments: 4,
    },
    {
      bankName: "Тинькофф",
      bankColor: "#fddd2d",
      bankLogo: tinkoff,
      loanSize: 155000,
      monthlyPayment: 8350,
      loanDuration: 24,
      completedPayments: 8,
    },
    {
      bankLogo: sber,
      bankName: "Сбербанк",
      bankColor: "#00a101",
      loanSize: 900000,
      monthlyPayment: 18350,
      loanDuration: 60,
      completedPayments: 55,
    },
  ],
  auth: {
    hasCode: false,
    codeConfirmed: false,
  },
};
