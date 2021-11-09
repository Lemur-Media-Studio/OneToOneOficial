const taskName = document.getElementById("nombre_usua");
const taskNamepro = document.getElementById("producto");
const taskPrecio = document.getElementById("precio");
const taskMarca = document.getElementById("marca");
const taskEstado = document.getElementById("estado");
const taskqr = document.getElementById("qr");
const taskbot1 = document.getElementById("bot1");
const card = document.getElementById("card")

auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ');
    const userdata = db.collection('users').doc(user.uid).get().then(doc => {
      const data = db.collection('tasks').get().then(snapshot => {

        console.log(doc.data().apellido)
        console.log(doc.data().fecha)
        console.log(doc.data().email)
        const uid = (doc.data().UID)
        console.log(uid);
        cositas(snapshot.docs)






        taskName.innerHTML += `<div class="container usuario text-end">Bienvenido, ${doc.data().nombre}<img src="img/usuario-predeterminado.png"
            class="mx-1" height="35" alt="imagen de perfil del usuario"><button class="btn btn-dark boton-logout"
            type="button" id="logout">LOG OUT</button></div>`;

      })

    });


    const cositas = (data) => {
      data.forEach(doc => {
        const guide = doc.data().uid;
        console.log(guide)

        if (doc.data().uid == user.uid) {
          console.log(guide);

          card.innerHTML += `<div class="card mb-3 card-productos shadow p-3 mb-5 bg-body rounded" style="max-width: 1100px;">
            <div class="row g-0 align-items-center">
            <div class="col-md-2 linea-blanco-right">
              <p class="titulo-trayecto"><strong>EN CAMINO</strong></p>
            </div>
            <div class="col">
              <div class="card-body">
                <h6 class="card-title producto-card">${doc.data().producto}</h6>
                <p class="card-text producto-card">${doc.data().marca}</p>
              </div>
            </div>
            <div class="col">
              <div class="card-body">
                <h6 class="card-title producto-card">$ ${doc.data().valor}</h6>
              </div>
            </div>
            <div class="col">
              <div class="d-grid gap-2 col-6 mx-auto" id="bot1">
                <button class="btn btn-dark boton-azul-productos" type="button">Ver factura</button>
                <button class="btn boton-beige-productos" type="button">Ayuda</button>
              </div>
            </div>
          </div>
          <div class="row"> 
          <div class="col-12">
               <a href="tracking.html" target="_blank">tracking</a>
          </div>
          </div>
            </div>
            `
        }

      });
    }

  } else {
    console.log('user logged out');
  }
})




/*
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e)=>{
  e.preventDefault();
  auth.signOut().then()
})
*/