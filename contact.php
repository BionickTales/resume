<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $budget = $_POST['budget'];
    $message = $_POST['message'];

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Invalid email format']);
        exit();
    }

    // Prepare email content
    $to = "bionictales@gmail.com";
    $subject = "New Contact Form Submission: " . $subject;
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; }
            .data { margin: 10px 0; }
            .label { font-weight: bold; }
        </style>
    </head>
    <body>
        <h2>New Contact Form Submission</h2>
        <div class='data'><span class='label'>Name:</span> $name</div>
        <div class='data'><span class='label'>Email:</span> $email</div>
        <div class='data'><span class='label'>Phone:</span> $phone</div>
        <div class='data'><span class='label'>Subject:</span> $subject</div>
        <div class='data'><span class='label'>Budget:</span> $budget</div>
        <div class='data'><span class='label'>Message:</span><br>$message</div>
    </body>
    </html>
    ";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send message']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>