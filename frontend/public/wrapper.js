var wrapper;

function initializeWrapper() {
  ADL.launch(function (err, launchdata, xAPIWrapper) {
    if (!err) {
      wrapper = ADL.XAPIWrapper = xAPIWrapper;
      console.log(
        "--- content launched via xAPI Launch ---\n",
        wrapper.lrs,
        "\n",
        launchdata
      );
    } else {
      wrapper = ADL.XAPIWrapper;
      fetch("http://localhost:3001/getCredentials")
        .then((response) => response.json())
        .then((data) => {
          wrapper.changeConfig({
            endpoint: data.endpoint,
            auth: data.auth,
          });
        })
        .catch((error) => {
          console.log("Error fetching credentials:", error);
        });

      console.log("--- content statically configured ---\n", wrapper.lrs);
    }
    $("#endpoint").text(wrapper.lrs.endpoint);
  }, true);
}

// Call the function to initialize your wrapper
initializeWrapper();
