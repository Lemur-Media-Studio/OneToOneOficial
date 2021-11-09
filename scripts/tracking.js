const tracking = document.getElementById("track")
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ');
    const userdata = db.collection('users').doc(user.uid).get().then(doc => {
      const data = db.collection("tasks").get().then(snapshot => {

        console.log(doc.data().apellido)
        console.log(doc.data().fecha)
        console.log(doc.data().email)
        const idu = (doc.data().UID)
        console.log(idu);
        cositas(snapshot.docs)
      })

    });
    const cositas = (data) => {
      data.forEach(doc => {
        const guide = doc.data();
        const guide1 = doc.data().estado;


        if (doc.data().uid == user.uid) {
          console.log(guide1);

          if (guide1 == 'Buenos Aires') {
            tracking.innerHTML += `<hr>
            <p data-aos="fade-left">${doc.data().producto}</p>
          <div data-aos="fade-left" class="row">
            <div class="col text-left">
              En proceso
            </div>
            <div class="col text-center">
              Los Angeles
            </div>
            <div class="col text-right">
              Buenos Aires
            </div>
          </div>
            <progress data-aos="fade-left" class="progress-bar1" id="file" max="100" value="100"></progress>`

          }else{tracking.innerHTML += `<hr>
          <p data-aos="fade-left">${doc.data().producto}</p>
        <div data-aos="fade-left" class="row">
          <div class="col text-left">
            En proceso
          </div>
          <div class="col text-center">
            Los Angeles
          </div>
          <div class="col text-right">
            Buenos Aires
          </div>
        </div>
          <progress data-aos="fade-left" class="progress-bar1" id="file" max="100" value="50"></progress>`
          }



          
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