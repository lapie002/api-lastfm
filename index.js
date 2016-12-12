// J'appelle l'url qui va me renvoyer un JSON avec la méthode get de jquery
// l'url -> http://API_URL/API_VERSION/?method=METHOD&artist=ARTIST_NAME&api_key=API_KEY&format=json
$.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=bob+marley&api_key=81b851def420eaf86acaeb639dcc1464&format=json')
      // Lorsque l'url renvoie le JSON elle exécute cette fonction de callback (rappel)
      .then(function (data) {

        // Affiche mes données
        console.log(data);
        // Je me ballade dans mon objet pour récupérér la biographie de mon artiste.
        $('#wrapper').html(data.artist.bio.content);

      });