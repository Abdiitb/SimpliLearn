async function sendMessage(message){
    try {
        const response = await fetch('/api/v1/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        });

        if (!response.ok) throw new Error("Failed to send message");

        return { success: true };

    } catch (error) {
        console.error("Error sending message:", error);
        return { success: false };
    }
}

export { sendMessage };