require("unload").when(function(reason) {
  if (reason == "uninstall" || reason == "disable") {
    uninstallCleanup();
  }
})

function initialize() {
 
	var pipe = "network.http.pipelining";
	var pipe2 = "network.http.proxy.pipelining";
	var pipe3 = "nglayout.initialpaint.delay";
	require("preferences-service").set(pipe, true);
	require("preferences-service").set(pipe2, true);
	require("preferences-service").set(pipe3, 0);
}

function uninstallCleanup() {
	var pipe = "network.http.pipelining";
	var pipe2 = "network.http.proxy.pipelining";
	var pipe3 = "nglayout.initialpaint.delay";
	require("preferences-service").set(pipe, false);
	require("preferences-service").set(pipe2, false);
	require("preferences-service").reset(pipe3);
}


initialize();


