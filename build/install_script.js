export function installApp() {
    window.addEventListener('beforeinstallprompt', event => {
        console.log('beforeinstallprompt event was fired');

        // Prevent Chrome <= 67 from automatically showing the prompt
        event.preventDefault();

        // Stash the event so it can be triggered later.
        this.installPromptEvent = event;
        console.log('this: ' + this)

        // Update the install UI to notify the user app can be installed
        btnInstall.disabled = false;
    });

    const btnInstall = document.querySelector('#btnInstall');

    btnInstall.addEventListener('click', function () {
        console.log('click')
        // Update the install UI to remove the install button
        btnInstall.disabled = true;

        // Show the modal add to home screen dialog
        // installPromptEvent.prompt();
        //
        // // Wait for the user to respond to the prompt
        // installPromptEvent.userChoice.then(choice => {
        //     if (choice.outcome === 'accepted') {
        //         console.log('User accepted the A2HS prompt');
        //     } else {
        //         console.log('User dismissed the A2HS prompt');
        //     }
        //     // Clear the saved prompt since it can't be used again
        //     this.installPromptEvent = null;
        // });
    });
}
