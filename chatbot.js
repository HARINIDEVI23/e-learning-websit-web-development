document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");

    // Function to add a message to the chat box
    function addMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", sender);
        messageElement.innerText = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat box
    }

    // Function to handle user input and display response
    function handleUserInput() {
        const input = userInput.value.trim();
        if (input !== "") {
            addMessage(input, "user");
            const response = chatbot(input);
            addMessage(response.message, "bot");
            userInput.value = ""; // Clear the input field
        }
    }

    // Add event listener to send button
    sendButton.addEventListener("click", handleUserInput);

    // Handle Enter key press in the input field
    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });

    // Greet the user and introduce the chatbot
    addMessage("Hi, my name is NetTalk! Welcome to the Networking Chatbot! Ask me anything about networking.", "bot");
});

// Define a function to handle user input and provide responses
function chatbot(input) {
    input = input.toLowerCase(); // Convert input to lowercase

    // Define a set of responses based on keywords in the user input
    const responses = {
        "hi": { message: "Hello! How can I assist you today?" },
        "can u help me": { message: "Absolutely! I'm here to help. What do you need assistance with?" },
        "what is a network?": { message: "A network is a collection of computers, servers, mainframes, network devices, or other devices connected to one another to allow for data exchange. 😊" },
        "what is an IP address?": { message: "An IP address is a unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. 🌐" },
        "what is a router?": { message: "A router is a networking device that forwards data packets between computer networks. It connects multiple networks together and routes data between them. 🚀" },
        "what is a firewall?": { message: "A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external networks, such as the Internet. 🔒" },
        "what is a switch?": { message: "A switch is a networking device that connects devices together on a computer network by using packet switching to forward data to the destination device. It operates at the data link layer (Layer 2) of the OSI model. 🔄" },
        "what is a subnet mask?": { message: "A subnet mask is a 32-bit number used in IPv4 networking to divide an IP address into two parts: network address and host address. It helps determine which part of an IP address belongs to the network and which part belongs to the host. 🔍" },
        "what is DHCP?": { message: "DHCP stands for Dynamic Host Configuration Protocol. It is a network management protocol used to automatically assign IP addresses and other network configuration parameters to devices on a network. 🤖" },
        "what is DNS?": { message: "DNS stands for Domain Name System. It is a hierarchical decentralized naming system for computers, services, or other resources connected to the Internet or a private network. It translates domain names into IP addresses. 🌐" },
        "what is NAT?": { message: "NAT stands for Network Address Translation. It is a method used in IPv4 networks to map private IP addresses to public IP addresses, allowing multiple devices on a local network to share a single public IP address. 🔄" },
        "thank you": { message: "You're welcome! 😊❤️" }, // Response with a happy message and hearts
        // Add more responses for other networking questions here
        "default": { message: "I'm sorry, I'm not sure how to answer that question. Could you please ask something else? 😅" }
    };

    // Check if the user input matches any predefined question
    for (const question in responses) {
        if (input.includes(question.toLowerCase())) {
            return responses[question]; // Return the corresponding response
        }
    }

    // If no predefined question matches, return a default response
    return responses["default"];
}