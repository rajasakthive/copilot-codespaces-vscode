<script>
    document.getElementById("donationForm").addEventListener("submit", async function(event) {
        event.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            bloodType: document.getElementById("bloodType").value,
            contact: document.getElementById("contact").value,
            location: document.getElementById("location").value
        };

        try {
            const response = await fetch("https://your-api.onrender.com/donate", { // Replace with your backend URL
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert("Thank you for registering as a donor!");
                document.getElementById("donationForm").reset();
            } else {
                alert("Error submitting the form. Please try again.");
            }
        } catch (error) {
            alert("Network error. Check your connection.");
            console.error(error);
        }
    });
</script>
