document.body.style.backgroundColor = "#C1EEFD";


function findAge(born, current) {
  return current - born;
}

function bornYear(message) {
  var year = Number(prompt(message, "1988").trim());
  if (!isNaN(year)) {
    return year;
  }
  else {
    return bornYear("Tug`ilgan yilingizni qayta kiriting.\nRaqamlardan foydalaning!!!");
  }
}

function createTableRow(name, value) {
  var tableRow = document.createElement('tr');
  var tableHead = document.createElement('th');
  var tableSell = document.createElement('td');
  tableHead.textContent = name;
  tableSell.textContent = value;
  tableRow.append(tableHead);
  tableRow.append(tableSell);
  tableBody.append(tableRow);
}

var ageRestrictionHeading = "Yosh bo`yicha cheklov mavjud";
var successHeading = "Ma'lumotlarni tekshiring";
var heading = document.querySelector(".heading");
heading.classList.add("text-center");
var contentDiv = document.querySelector(".content");
var paragraph = document.createElement('p');
paragraph.classList.add("text-center");
paragraph.classList.add("border");
paragraph.classList.add("border-2");
contentDiv.append(paragraph);
var tableContent = document.createElement('table');
tableContent.classList.add("table");
tableContent.classList.add("table-success");
tableContent.classList.add("table-striped");
tableContent.style.width = "500px";
var tableBody = document.createElement('tbody');
tableContent.append(tableBody);
var sendButton = document.createElement('button');
sendButton.textContent = "Yuborish";
sendButton.classList.add("btn");
sendButton.classList.add("btn-success");



alert("Saytga xush kelibsiz!!!\nIltimos, so`rovnomani to`ldiring.");
var firstName = prompt("Ismingizni kiriting", "Zafar").trim();
var lastName = prompt("Sharifingizni kiriting", "Saidov").trim();
var male = (lastName.endsWith("va")) ? "famale" : "male";
var bornYear = bornYear("Tug`ilgan yilingizni kiriting");
var currentYear = 2021;
var age = findAge(bornYear, currentYear);
if (age < 18 || age > 50) {
  heading.textContent = ageRestrictionHeading;
  paragraph.classList.add("border-danger");
  var ageMessage = (age < 18) ? `Xurmatli ${lastName} ${firstName}. Sizning yoshingiz ${age} da ekan. O'zbekiston Respublikasi Mehnat Kodeksiga muvofiq sizning yoshingiz ishga kirish uchun kichiklik qiladi` : `Xurmatli ${lastName} ${firstName}. Sizning yoshingiz ${age} da ekan. Bizga yosh xodimlar kerak`;
  paragraph.textContent = ageMessage;
}
else {
  heading.textContent = successHeading;
  var phoneNumber = prompt("Telefon raqamingizni kiriting", "+998998789878").trim();
  var email = prompt("Email kiriting", "zsaidov1988@gmail.com").trim();
  paragraph.classList.add("border-success");
  var successMessage = "Kiritilgan ma'lumotlar to`g`ri ekanligini tekshirib, \"Yuborish\" tugmasini bosing.";
  paragraph.textContent = successMessage;

  contentDiv.append(tableContent);
  var tableBody = document.createElement('tbody');
  tableContent.append(tableBody);
  createTableRow("Ismingiz", firstName);
  createTableRow("Familiyangiz", lastName);
  createTableRow("Yoshingiz", age);
  createTableRow("Telefon raqamingiz", phoneNumber);
  createTableRow("Email", email);
  contentDiv.append(sendButton);

}