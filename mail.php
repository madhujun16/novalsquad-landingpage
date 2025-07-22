<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = htmlspecialchars($_POST["name"]);
  $email = htmlspecialchars($_POST["email"]);
  $message = htmlspecialchars($_POST["message"]);

  $to = "Madhujun16@gmail.com","contact@novalsquad.com"; // Replace this with your email
  $subject = "New Contact Submission from NovalSquad";
  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  if (mail($to, $subject, $body, $headers)) {
    http_response_code(200); // Tell JS it succeeded
    echo "Message sent.";
  } else {
    http_response_code(500); // Internal error
    echo "Mail sending failed.";
  }
} else {
  http_response_code(405); // Invalid method
  echo "Method not allowed";
}
?>
