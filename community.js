document.addEventListener("DOMContentLoaded", () => {
    loadThreads();
});

function loadThreads() {
    let threads = JSON.parse(localStorage.getItem("threads")) || [];
    let threadContainer = document.getElementById("threads");
    threadContainer.innerHTML = "";
    
    threads.forEach((thread, index) => {
        let div = document.createElement("div");
        div.innerHTML = `<strong>${thread.title}</strong> <br> ${thread.content}`;
        threadContainer.appendChild(div);
    });
}

function createThread() {
    let title = prompt("Enter Thread Title:");
    let content = prompt("Enter Thread Content:");
    
    if (title && content) {
        let threads = JSON.parse(localStorage.getItem("threads")) || [];
        threads.push({ title, content });
        localStorage.setItem("threads", JSON.stringify(threads));
        loadThreads();
    }
}

function sendMessage() {
    let message = document.getElementById("message").value;
    if (message.trim() !== "") {
        let chatWindow = document.getElementById("chat-window");
        let p = document.createElement("p");
        p.textContent = "You: " + message;
        chatWindow.appendChild(p);
        document.getElementById("message").value = "";
    }
}
