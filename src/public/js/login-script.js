gapi.load("auth2", () => {
  const auth2 = gapi.auth2.init({
    clientId: "330525107358-sbt74gl2r9e92ng2jpchj37here0vnin.apps.googleusercontent.com"
  });

  auth2.isSignedIn.listen(status => {
    console.log(status);
  });

  auth2.currentUser.listen(user => {
    const profile = user.getBasicProfile();

    console.log(profile.getName());
    console.log(profile.getEmail());
    console.log(profile.getImageUrl());
  });

  document.querySelector("#login")
    .addEventListener("click", function() {
      auth2.signIn();
    });

  document.querySelector("#logout")
    .addEventListener("click", function() {
      auth2.signOut();
    });
});