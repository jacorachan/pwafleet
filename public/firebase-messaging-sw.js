importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyA8d5LLqU78O4JCA_9PDDNQhPjudTTxG_Q",
    authDomain: "pwafleet.firebaseapp.com",
    databaseURL: "https://pwafleet.firebaseio.com",
    projectId: "pwafleet",
    storageBucket: "",
    messagingSenderId: "608299607553"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	const title = 'PWFleet';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});
