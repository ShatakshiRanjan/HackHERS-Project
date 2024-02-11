// Simulate loading delay (remove this in production)
setTimeout(function() {
    // Hide loading page
    document.getElementById('loading-page').style.display = 'none';
    // Show main content
    document.getElementById('main-content').style.display = 'block';
}, 3000); // Change the delay time as needed
