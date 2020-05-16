
$(() => {

  const triviaQuestions = ["What type of farm does Dwight own?", "How long were Pam and Roy engaged?", "What tattoo is Andy forced to get?", "What is Michael's username for online dating websites?", `Who bought Michael the "Best Boss" mug?`]
  const triviaAnswers = ["Beet farm", "3-4 years", "A nard dog", "Little kid lover", "Himself"]

  const numOfGifs = 25

  $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?api_key=MaEcz1xz6n3LeO2zH2QTK78RvmKV6aBS&q=The Office&limit=${numOfGifs}&offset=0&rating=G&lang=en`,

    "api_key": "MaEcz1xz6n3LeO2zH2QTK78RvmKV6aBS"

  })
    .then((gifs) => {


      const modalMessage = () => {
        const $endGame = $('<h1>').text('Great job! Prison Mike is proud of you.')
        const ranGif = Math.floor(Math.random() * 50)
        const $imgGif = $('<img>')
            .attr('src', gifs.data[ranGif].images.downsized.url)
        $('#modal-message').append($imgGif)
        $('#modal-message').append($endGame)
        $('#modal').css('display', 'block')
        $('#modal-close-button').on('click', closeModal)


      }

      const closeModal = () => {
        $('#modal').css('display', 'none')
          window.location.reload()
      }


      $('#start').on('click', (event) => {
        $('#answer-container').empty()
        $('#start').text('restart')


            const checkAnswers = () => {
              if (triviaQuestions.length === 0) {
                modalMessage()
              }
            }


            const $displayQuestion = $('<div>').text(triviaQuestions[0])
            const $displayAnswer = $('<div>').text(triviaAnswers[0])

            $displayQuestion.appendTo('#answer-container')
            $displayAnswer.appendTo('#answer-container').hide()


            const nextQuestion = () => {
                $displayAnswer.hide()
                triviaQuestions.shift()
                triviaAnswers.shift()
                $displayQuestion.text(triviaQuestions[0])
                $displayAnswer.text(triviaAnswers[0])
                checkAnswers()
            }

            const showAnswer = () => {
                $displayQuestion.siblings().toggle()

            }

            $('#show-answer').on('click', (event) => {
                showAnswer()
            })

            $('#next-question').on('click', (event) => {
                  nextQuestion()
              })





//////////////////// WORK ON THIS ///////////////////////
          // grab input value in submit field

          // make if statement (if value == displayanswer.text())
          // answer correct ++
          // show answers correct in Modal


        })   // end of .then funciton

      }) // end #start onclick


}) // ON LOAD Closing
