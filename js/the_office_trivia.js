


$(() => {

  // $('#next-question').hide()
  // $('#show-answer').hide()

  const triviaQuestions = ["What type of farm does Dwight own?", "How long were Pam and Roy engaged?", "What tattoo is Andy forced to get?", "What is Michael's username for online dating websites?", `Who bought Michael the "Best Boss" mug?`]
  const triviaAnswers = ["Beet farm", "3-4 years", "A nard dog", "Little kid lover", "Himself"]

  const numOfGifs = 25

  $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?api_key=MaEcz1xz6n3LeO2zH2QTK78RvmKV6aBS&q=The Office&limit=${numOfGifs}&offset=0&rating=G&lang=en`,

    "api_key": "MaEcz1xz6n3LeO2zH2QTK78RvmKV6aBS"

  })
    .then((gifs) => {


      const modalMessage = () => {
        const $endGame = $('<h3>').text('Great job! Prison Mike is proud of you.')
        const ranGif = Math.floor(Math.random() * 50)
        const $imgGif = $('<img>')
            .attr('src', gifs.data[ranGif].images.downsized.url)
            .css({'width':'160px', 'height':'130px'})
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
        $('#start').hide()

            const checkAnswers = () => {
              if (triviaQuestions.length === 0) {
                modalMessage()
              }
            }

            const $displayQuestion = $('<div>')
                .text(triviaQuestions[0])
                .addClass('questions')
            const $displayAnswer = $('<div>')
                .text(triviaAnswers[0])
                .addClass('answers')

            $displayQuestion
                .appendTo('#answer-container')
            $displayAnswer
                .appendTo('#answer-container')
                .hide()


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

            $('#show-answer-btn').on('click', (event) => {
                showAnswer()
            })

            $('#next-question-btn').on('click', (event) => {
                  nextQuestion()
              })





//////////////////// WORK ON THIS ///////////////////////
          // grab input value in submit field

          // make if statement (if value == displayanswer.text())
          // answer correct ++
          // show answers correct in Modal


          // once game is done, have a restart button in modal or main screen
          // or automatically have page refresh after modal is closed


        })   // end of .then funciton

      }) // end #start onclick


}) // ON LOAD Closing
