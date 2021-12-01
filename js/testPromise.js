console.log('checking if we have promise polyfill');
console.log(Promise);
debug = true;

	const ScriptLoader = {
		DefaultTimeoutSeconds: 60,
		load: function (url) {
			return new Promise( function (resolve, reject)  {
				const timeStarted = Date.now();
				let loaded = false;

				console.log('Loading ' + url);
				let script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = url;
				script.async = true;
				script.addEventListener('load', function () {
					if (debug)
						console.log('Loaded ' + url + ' in ' + (Date.now() - timeStarted) + ' ms');
					resolve(script);
				}, false);
				script.addEventListener('error', function (error) {
					if (debug)
						console.log('Failed to load ' + url);

					const e = error;
					e.scriptUrl = url;
					reject(e);
				}, false);
				document.head.appendChild(script);

				//note: if we reach a timeout in the code, the browser won't actually stop attempting to load it.
				//but in any event, we should detect that something is wrong and report it back to the user.
				setTimeout(function () {
					if (!loaded) {
						const e = new Error('Timeout loading ' + url);
						e.scriptUrl = url;
						reject(e);
					}
				}, ScriptLoader.DefaultTimeoutSeconds * 1000);
			});
		},
		loadAll: function (urls) {
			return Promise.all(urls.map(ScriptLoader.load));
		}
	};


(function () {
	var urlsToLoad = ['js/loadable.js'];
	ScriptLoader.loadAll(urlsToLoad).then(function () {
		console.log(window.fakeCache);
	});
	ScriptLoader.loadAll(['js/notLoadable.js']).then(function () {
		console.log(window.fakeCache);
	});
})();