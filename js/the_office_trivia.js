$(() => {

  const triviaQuestions = [`Who pushed Phyllis' dad down the aisle at her wedding?`, `What type of farm does Dwight own?`, `How long were Pam and Roy engaged?`, `What tattoo is Andy forced to get?`, `What is Michael's username for online dating websites?`, `Who bought Michael the "Best Boss" mug?`, `What is the name of the award given out at the Dunder Mifflin awards banquet?`, `What is Dwight's nickname for Angela?`, `What is the name of the criminal terrorizing Scranton?`, `Who calls Jim the "Big Tuna"?`, `Where does Jim propose to Pam?`]

  const triviaAnswers = [`Michael`, `Beets`, `3-4 years`, `A nard dog`, `LittleKidLover`, `He bought it himself`, `The Dundies`, `Monkey`, `The Scranton Strangler`, `Andy`, `A gas station`]


  const multipleChoice = [
    [`Dwight`, `Michael`, `Jim`],
    [`Bears`, `Beets`, `Battlestar Galactica`],
    [`1 year`, `6 years`, `3-4 years`, `Who's Roy?`],
    [`A Butterfly`, `Angela's face`, `A nard dog`],
    [`LittleKidLover`, `BestBestEver`, `ReadyForMarriage`],
    [`Dwight`, `Pam`, `Holly`, `He bought it himself`],
    [`Michael Scott Award`, `Employee of the Year`, `The Dundies`],
    [`Babe`, `Honey`, `Monkey`, `Kitten`],
    [`The Scranton Strangler`, `The Scrantonizer`, `Scranton Terrorizer`],
    [`Dwight`, `Michael`, `Andy`, `Stanley`],
    [`At Pam's desk`, `At the holiday party`, `A gas station`]
  ]

  const numOfGifs = 40

  $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?api_key=MaEcz1xz6n3LeO2zH2QTK78RvmKV6aBS&q=The Office&limit=${numOfGifs}&offset=0&rating=G&lang=en`,

    "api_key": "MaEcz1xz6n3LeO2zH2QTK78RvmKV6aBS"

  })
    .then((gifs) => {


    $('#start').on('click', (event) => {
        console.log(gifs);
        $('#next-question-btn').toggle()
        $('#show-answer-btn').toggle()
        $('#question-container').toggle()
        $('#answer-container').toggle()

        $('#answer-container').empty()
        $('#start').hide()


        const closeModal = () => {
          $('#modal').css('display', 'none')
            window.location.reload()
        } // end of closeModal function

        const closeContinue = () => {
          $('#modal').css('display', 'none')
        }

        const rightAnswerModal = () => {
          const $rightAnswerMessage = $('<h4>').text('Correct!')
          const ranGif = Math.floor(Math.random() * numOfGifs)
          const $imgGif = $('<img>')
              .attr('src', gifs.data[ranGif].images.downsized.url)
              .css({'width':'160px', 'height':'130px', 'margin':'auto'})
          $('#modal-message').append($imgGif)
          $('#modal-message').append($rightAnswerMessage).css({'display':'flex', 'flex-direction':'column'})
          $('#modal').css('display', 'block')
          setTimeout(closeContinue, 3000)
        }

        const wrongAnswerModal = () => {
          const $wrongAnswerMessage = $('<h4>').text('Wrong!')
          const ranGif = Math.floor(Math.random() * numOfGifs)
          const $imgGif = $('<img>')
              .attr('src', gifs.data[ranGif].images.downsized.url)
              .css({'width':'160px', 'height':'130px', 'margin':'auto'})
          $('#modal-message').append($imgGif)
          $('#modal-message').append($wrongAnswerMessage).css({'display':'flex', 'flex-direction':'column'})
          $('#modal').css('display', 'block')
          setTimeout(closeContinue, 3000)
        }

        const endGameMessage = () => {
          $('#modal-message').empty()
          const $endGame = $('<h3>').text('Great job! Prison Mike is proud of you.')
          const ranGif = Math.floor(Math.random() * numOfGifs)
          const $imgGif = $('<img>')
              .attr('src', gifs.data[ranGif].images.downsized.url)
              .css({'width':'160px', 'height':'130px', 'margin':'auto'})
          $('#modal-message').append($imgGif)
          $('#modal-message').append($endGame).css({'display':'flex', 'flex-direction':'column'})
          $('#modal').css('display', 'block')
          setTimeout(closeModal, 5000)
        }

        const $displayQuestion = $('<div>')
            .text(triviaQuestions[0])
            .addClass('questions')
        const $displayAnswer = $('<div>')
            .text(triviaAnswers[0])
            .addClass('answers')

        for (let options in multipleChoice[0]) {
          const $showMultipleChoice = $('<li>')
              .text(multipleChoice[0][options])
              .addClass('options')
              .appendTo('#multiple-choice')
        }

        $displayQuestion
            .appendTo('#question-container')
        $displayAnswer
            .appendTo('#answer-container')
            .hide()

        // This function displays the possible answers for each question as a list item from the MultipleChoice array
        const rotateMultipleChoice = () => {
          if (multipleChoice[0].length > 0) {
            multipleChoice.shift()
          for (let options in multipleChoice[0]) {
            const $showMultipleChoice = $('<li>')
                .text(multipleChoice[0][options])
                .addClass('options')
                .appendTo('#multiple-choice')
            }
          }
        }
        const nextQuestion = () => {
          if (triviaQuestions.length === 1) {
                endGameMessage()
          } else {
                $('#multiple-choice').empty()
                $displayAnswer.hide()
                triviaQuestions.shift()
                triviaAnswers.shift()

                $displayQuestion.text(triviaQuestions[0])
                $displayAnswer.text(triviaAnswers[0])

                rotateMultipleChoice()
                optionFunction()
          }
        } // end of nextQuestion function

        $('#logo').on('click', closeModal)

        $('#show-answer-btn').on('click', (event) => {
              $displayAnswer.toggle()
        }) // end of show-answer-btn on click

        $('#next-question-btn').on('click', (event) => {
              $('.options').empty()
              nextQuestion()
              console.log($('.options').text());
        }) // end of next-question-btn on click

        const optionFunction = () => {
          $('.options').on('click', (event) => {
              $('#modal-message').empty()
                const choiceText = $(event.target).text();
                if (choiceText === triviaAnswers[0]) {
                    rightAnswerModal()
              } else {
                    wrongAnswerModal()
              }
          })
        }
          optionFunction()
      })   // end of .then funciton

    }) // end #start onclick

}) // ON LOAD Closing
