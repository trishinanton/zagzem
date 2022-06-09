// Register service worker to control making site work offline

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('sw.js')
//     .then(() => { console.log('Service Worker Registered'); });
// }

// Code to handle install prompt on desktop

// let deferredPrompt;
// const addBtn = document.querySelector('.add-button');
// addBtn.style.display = 'none';
//
// window.addEventListener('beforeinstallprompt', (e) => {
//   // Prevent Chrome 67 and earlier from automatically showing the prompt
//   e.preventDefault();
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;
//   // Update UI to notify the user they can add to home screen
// //  addBtn.style.display = 'block';
//   showInstallPromotion();
// })
//
// buttonInstall.addEventListener('click', async () => {
//   // Hide the app provided install promotion
//   hideInstallPromotion();
//   // Show the install prompt
//   deferredPrompt.prompt();
//   // Wait for the user to respond to the prompt
//   const { outcome } = await deferredPrompt.userChoice;
//   // Optionally, send analytics event with outcome of user choice
//   console.log(`User response to the install prompt: ${outcome}`);
//   // We've used the prompt, and can't use it again, throw it away
//   deferredPrompt = null;
// });
//
// window.addEventListener('appinstalled', () => {
//   // Hide the app-provided install promotion
//   hideInstallPromotion();
//   // Clear the deferredPrompt so it can be garbage collected
//   deferredPrompt = null;
//   // Optionally, send analytics event to indicate successful install
//   console.log('PWA was installed');
// });


/*
  addBtn.addEventListener('click', () => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});
*/
