const sigupForm = document.querySelector("#login-form");

sigupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#idemail").value;
  const password = document.querySelector("#idpass").value;
  const nombre = document.querySelector("#idname").value;
  const apellido = document.querySelector("#idapellido").value;
  const fecha = document.querySelector("#idfecha").value;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const UID = user.uid;
      db.collection("users").doc(UID).set({
        email,
        nombre,
        apellido,
        fecha,
        UID
      });
    }).then(()=>{
      $("#exampleModal2").modal("hide");
      sigupForm.reset();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      window.alert(errorMessage);
      // ..
    });
});

const signinForm = document.querySelector("#signin-form");
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#loginemail").value;
  const password = document.querySelector("#loginpass").value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      signinForm.reset();
      $("#exampleModal").modal("hide");
      window.location = "productos.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      window.alert(errorMessage);
    });
  signinForm.reset();
});
