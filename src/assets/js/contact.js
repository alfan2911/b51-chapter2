function submitData() {
  const name = document.getElementById("input-name").value;
  const email = document.getElementById("input-email").value;
  const phoneNumber = document.getElementById("input-number").value;
  const subject = document.getElementById("input-subject").value;
  const message = document.getElementById("input-message").value;

  if (!name) {
    return alert("Please input a name");
  } else if (!email) {
    return alert("Please input an email");
  } else if (!phoneNumber) {
    return alert("Please input a phone number");
  } else if (!subject) {
    return alert("Please select a subject");
  } else if (!message) {
    return alert("Please select a message");
  }

  let emailReceiver = "alfansyuriziaulhaq11@gmail.com";

    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. Tolong hubungi saya di nomor ${phoneNumber} atau email saya di ${email}`;
    a.click();

    let messagers = {
        nama: name,
        email: email,
        number: phoneNumber,
        subject: subject,
        message: message,
    }
    console.log(messagers);

}



