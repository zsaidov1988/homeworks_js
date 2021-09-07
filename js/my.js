
alert("Saytga xush kelibsiz!!!\nIltimos, so`rovnomani to`ldiring.");
var firstName = prompt("Ismingizni kiriting", "Zafar");
var lastName = prompt("Sharifingizni kiriting", "Saidov");
var male = (lastName.endsWith("va")) ? "famale" : "male";
var bornYear = prompt("Tug`ilgan yilingizni kiriting", "1988");
var currentYear = 2021;
var age = currentYear - bornYear;
if (age < 18) {
  alert(`Xurmatli ${lastName} ${firstName}. Sizning yoshingiz ${age} da ekan. O'zbekiston Respublikasi Mehnat Kodeksiga muvofiq sizning yoshingiz ishga kirish uchun kichiklik qiladi`);
}
else if (age > 50) {
  alert(`Xurmatli ${lastName} ${firstName}. Sizning yoshingiz ${age} da ekan. Bizga yosh xodimlar kerak`);
}
else {
  var phoneNumber = prompt("Telefon raqamingizni kiriting", "+998998789878");
  var message = "Kiritilgan ma'lumotlar to'g'ri ekanligini tekshiring\n" + lastName + " " + firstName + ", " + bornYear + " yilda tug`ilgan\nTelefon raqam: " + phoneNumber;
  var infoCorrect = confirm(message);
  if (infoCorrect) {
    alert(`Xurmatli ${lastName} ${firstName}. Murojaatingiz uchun rahmat.\nSiz bilan ${phoneNumber} raqami orqali bog'lanamiz.`);
  }
  else {
    alert("Sahifani yangilang va ma'lumotlarni qayta kiriting");
  }
}