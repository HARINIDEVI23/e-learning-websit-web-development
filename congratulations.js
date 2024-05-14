// Function to generate confetti particles
function generateConfetti(count) {
    const confettiContainer = document.querySelector('.confetti-container');
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        confetti.style.animationDelay = `${Math.random()}s`; // Random animation delay
        confettiContainer.appendChild(confetti);
    }
}

generateConfetti(100); // Generate 100 confetti particles

// Function to generate and download certificate
document.getElementById('downloadCertificate').addEventListener('click', function() {
    const courseName = "Understanding the Brain of Network Neurons";
    const certificateContent = 
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quiz Certificate</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-image: url('networkfinal.jpg');
                background-size: cover;
                background-position: center;
            }
            .container {
                text-align: center;
                margin-top: 100px;
                padding: 50px;
                background-color: rgba(255, 255, 255, 0.7);
                border-radius: 10px;
            }
            h1 {
                color: #2196F3;
                font-size: 56px;
            }
            h2 {
                font-size: 30px;
            }
            p {
                font-size: 25px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Congratulations!</h1>
            <p>This certificate is awarded to</p>
            <h2>Your Name</h2>
            <p>For successfully passing the quiz</p>
            <p>Course: ${courseName}</p>
        </div>
    </body>
    </html>
    `;
    
    const certificateBlob = new Blob([certificateContent], { type: 'text/html' });
    const certificateUrl = URL.createObjectURL(certificateBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = certificateUrl;
    downloadLink.download = 'quiz_certification.html';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});
