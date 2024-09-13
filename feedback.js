function validateForm() {
    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let rating = document.querySelector('input[name="rating"]:checked');
    let commentCategory = document.getElementById("comment-category").value;
    let comment = document.getElementById("comment").value;

    // Validate name
    if (name.trim() === "") {
        alert("Name must be filled out");
        return false; // Prevent form submission
    }

    // Validate email
    if (email.trim() === "") {
        alert("Email must be filled out");
        return false; 
    }
    if (email.indexOf('@') === -1) {
        alert("Entered email does not have an '@' symbol. Please enter a valid email address");
        return false; 
    }
    if (email.indexOf('.') === -1) {
        alert("Entered email does not have any dots. Please enter a valid email address");
        return false; 
    }
    if (email.includes(' ')) {
        alert("Entered email has spaces. Please enter a valid email address");
        return false; 
    }

    // Validate rating
    if (!rating) {
        alert("Please rate your satisfaction");
        return false; 
    }

    // Display the preview modal with the entered values
    document.getElementById("previewName").innerText = "Name: " + name;
    document.getElementById("previewEmail").innerText = "Email: " + email;
    document.getElementById("previewRating").innerText = "Rating: " + rating.value + "/10";
    if (!(comment.trim() === "")) {
        document.getElementById("previewCommentCategory").innerText = "Comment Category: " + commentCategory;
        document.getElementById("previewComments").innerText = "Comments: " + comment;
    }
    document.getElementById("previewModal").style.display = "block";

    // Prevent the form from submitting
    return false;
}

function goBackToEdit() {
    // Hide the preview modal
    document.getElementById("previewModal").style.display = "none";
}

function sendEmail() {
    // Get form values again
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let rating = document.querySelector('input[name="rating"]:checked');
    let commentCategory = document.getElementById("comment-category").value;
    let comment = document.getElementById("comment").value;

    // Define email subject
    const subject = 'Feedback Form Received';
    let body;

    // Create email body based on whether comments are provided
    if (comment.trim() === "") {
        body = `Dear ${name},\n
        We have received your feedback. Below are the details of your feedback submission.
        1. Rating: ${rating.value + "/10"}
        2. Comments were not posted.\n
        Thank you for your time :)`;
    } else {
        body = `Dear ${name},\n
        We have received your feedback. Below are the details of your feedback submission. 
        1. Rating: ${rating.value + "/10"}
        2. Comment Category: ${commentCategory}
        3. Comments: ${comment}\n
        Thank you for your time :)`;
    }

    // Create a mailto link to send the email
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mailto link to send the email
    window.location.href = mailtoLink;

    // Close the modal after sending the email
    document.getElementById("previewModal").style.display = "none";

    // Display feedback received message
    alert("Your feedback has been received");
}
