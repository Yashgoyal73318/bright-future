function sendMail() {
    var parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_e1gkqib";
    const templateID = "template_w3lpffp"; // Corrected 'templateID' typo

    emailjs.send(serviceID, templateID, parms)
    .then((res) => {
        // // Clear form fields
        // document.getElementById("name").value = "";
        // document.getElementById("email").value = "";
        // document.getElementById("message").value = "";
        // console.log(res);

        // Success message
        console.log("Your message was sent successfully!",res);
    })
    .catch((err) => {
        console.error("Error sending email: ", err);
        // alert("An error occurred while sending your message. Please try again.");
    });
}
