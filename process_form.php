<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Recipient email address
    $to = "kouradjiguy.m.savane@gmail.com";

    // Subject
    $subject = "New Contact Form Submission from $name";

    // Compose the email message
    $message = "Name: $name\n";
    $message .= "Email: $email\n\n";
    $message .= "Message:\n$message";

    // Set additional headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send the email
    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        echo "Thank you for your message. We will get back to you shortly.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    // Handle the case when the form is accessed directly
    echo "Access denied.";
}
?>



