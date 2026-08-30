const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzwxYWz8evs5oPUpn_7a4lEQhfea4DE7mZYPNSeZoVkOvMPiyeGo8ozO-LYXmtpZvY6/exec"; 

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".attendance-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const submitBtn = form.querySelector(".submit-btn");
            if (submitBtn) {
                submitBtn.textContent = "Submitting...";
                submitBtn.disabled = true;
            }

            // Safely retrieve inputs
            const fullnameVal = document.getElementById("fullname") ? document.getElementById("fullname").value : "";
            const statusInput = document.querySelector('input[name="status"]:checked');
            const statusVal = statusInput ? statusInput.value : "";
            const dateVal = document.getElementById("attendance-date") ? document.getElementById("attendance-date").value : "";

            const formData = new URLSearchParams();
            formData.append("fullname", fullnameVal);
            formData.append("status", statusVal);
            formData.append("date", dateVal);

            // Fetch with mode: "no-cors" to pass browser security checks
            fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: formData
            })
            .then(() => {
                alert("Attendance recorded successfully!");
                form.reset();
            })
            .catch(error => {
                console.error("Submission Error:", error);
                alert("Failed to submit.");
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.textContent = "Submit";
                    submitBtn.disabled = false;
                }
            });
        });
    }
});