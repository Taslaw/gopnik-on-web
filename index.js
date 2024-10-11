// Array containing target URLs
const targetUrls = [
    'https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D0%BF%D0%BD%D0%B8%D0%BA%D0%B8',
    'https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D0%BF%D0%BD%D0%B8%D0%BA%D0%B8',
    'https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D0%BF%D0%BD%D0%B8%D0%BA%D0%B8'

];

// Function to open a link based on device type
const openLink = (index) => {
    const url = targetUrls[index];
    const userAgent = navigator.userAgent;

    // Detect if the user is on an Android device
    const isAndroid = /Android/i.test(userAgent);
    // Detect if the user is on an iOS device
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);

    if (isAndroid) {
        // Create an intent URL for Android devices
        let androidUrl = url;
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            androidUrl = 'https://' + url;
        }
        window.location.replace('intent://' + androidUrl.replace('https://', '') + '#Intent;scheme=https;package=com.android.chrome;end');
    } else if (isIOS) {
        // Handle iOS devices
        window.location.replace('x-safari-https://' + url.replace('https://', ''));
    } else {
        // Default behavior for other devices
        window.location.href = url;
    }
};

// Function to copy a link to the clipboard
const copyLink = (index) => {
    const url = targetUrls[index];
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard!');
    }).catch((error) => {
        console.error('Failed to copy link: ', error);
    });
};
