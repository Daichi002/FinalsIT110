function showAlert(message, type) {
    // Create a div element for the notification
    const notification = document.createElement('div');

    // Add styles to the notification
    notification.style.position = 'fixed';
    notification.style.top = '0';
    notification.style.width = '50%';
    notification.style.padding = '10px';
    notification.style.textAlign = 'center';
    notification.style.fontWeight = 'bold';
    notification.style.marginLeft = '400px';
    notification.style.zIndex = '9999'; 

    // Apply styles based on the notification type
    if (type === 'success') {
        notification.style.backgroundColor = '#4BB543';
        notification.style.color = '#fff';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#f44336';
        notification.style.color = '#fff';
    }else if (type === 'info') {
      notification.style.backgroundColor = '#ecf0f1';
      notification.style.color = '#3498db';
  }

    // Set the notification message
    notification.innerText = message;

    // Append the notification to the document body
    document.body.appendChild(notification);

    // Remove the notification after 3000 milliseconds (3 seconds)
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

export { showAlert };