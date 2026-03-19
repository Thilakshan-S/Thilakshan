// Contact Form Integration with EmailJS
(function () {
    // Initialize EmailJS with Public Key
    emailjs.init("wygUKw4Js5ooNi08q");
})();

document.getElementById("ContactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById("Submit");
    const originalBtnText = submitBtn.innerHTML;

    // UI Feedback: Disable button and show sending state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="flex items-center justify-center gap-2">Connecting... <div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div></span>';

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value
    };

    emailjs.send(
        "service_0f1bxfk",
        "template_8xx4mh8",
        templateParams
    ).then(
        function () {
            alert("Message sent successfully! I will get back to you soon.");
            document.getElementById("ContactForm").reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        },
        function (error) {
            console.error("EmailJS FAILED", error);
            alert("Oops! Something went wrong. Please try again later or reach out directly via WhatsApp.");
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    );
});
