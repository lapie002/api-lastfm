$.get("http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=radiohead&api_key=ca4936af041dedab136adc74d1ba1af2&format=json")
    .then( function (donnees) {
        // Ici j'utilise mes données
        console.log(donnees);
    });
