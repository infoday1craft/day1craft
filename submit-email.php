<?php

// Check if the form was submitted using the POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // DEFINE YOUR EMAIL ADDRESS HERE
    $to = "planning@day1craft.com";

    // Sanitize and get the form data
    $fullName = htmlspecialchars(trim($_POST['fullName']));
    $emailAddress = htmlspecialchars(trim($_POST['emailAddress']));
    $phoneNumber = htmlspecialchars(trim($_POST['phoneNumber']));
    $yourMessage = htmlspecialchars(trim($_POST['yourMessage']));
    
    // Email subject
    $subject = "Bagong Inquiry mula sa Contact Form";

    // Build the email content
    $email_content = "Name: $fullName\n";
    $email_content .= "Email: $emailAddress\n";
    $email_content .= "Phone: $phoneNumber\n\n";
    $email_content .= "Message:\n$yourMessage";

    // Set the email headers
    $email_headers = "From: $fullName <$emailAddress>\r\n";
    $email_headers .= "Reply-To: $emailAddress\r\n";

    // Send the email
    if (mail($to, $subject, $email_content, $email_headers)) {
        // If the email is sent successfully, redirect to a "thank you" page
        header("Location: thank-you.html");
        exit;
    } else {
        // If there's an error, show a message
        echo "Oops! May nagkamali sa pagpapadala ng iyong mensahe. Paki-ulit muli.";
    }
} else {
    // If the request is not a POST request, redirect back to the form page
    header("Location: contact.html");
    exit;
}
?>