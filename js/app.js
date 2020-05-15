console.log(`test`);

$(() => {

  const numOfGifs = 50

  $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?api_key=MaEcz1xz6n3LeO2zH2QTK78RvmKV6aBS&q=The Office&limit=${numOfGifs}&offset=0&rating=G&lang=en`,
    
    "api_key": "MaEcz1xz6n3LeO2zH2QTK78RvmKV6aBS"
  })
    .then((gifs) => {

      const ranGif = Math.floor(Math.random() * 50)

        const $imgGif = $('<img>')
            .attr('src', gifs.data[ranGif].images.downsized.url)
        $('body').append($imgGif)

    }) // end of .then funciton



}) // ON LOAD Closing
