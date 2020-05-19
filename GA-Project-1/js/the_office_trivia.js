$(() => {

  const triviaQuestions = [`Who pushed Phyllis' dad down the aisle at her wedding?`, `What type of farm does Dwight own?`, `How long were Pam and Roy engaged?`, `What tattoo is Andy forced to get?`, `What is Michael's username for online dating websites?`, `Who bought Michael the "Best Boss" mug?`, `What is the name of the award given out at the Dunder Mifflin awards banquet?`, `What is Dwight's nickname for Angela?`, `What is the name of the criminal terrorizing Scranton?`, `Who calls Jim the "Big Tuna"?`, `Where does Jim propose to Pam?`, `Who is Michael's best alter ego?`]

  const triviaAnswers = [`Michael`, `Beets`, `3-4 years`, `A nard dog`, `LittleKidLover`, `He bought it himself`, `The Dundies`, `Monkey`, `The Scranton Strangler`, `Andy`, `A gas station`, `idk, you tell me. I promise I won't judge`]

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
    [`At Pam's desk`, `At the holiday party`, `A gas station`],
  ]

  const numOfGifs = 40
  let score = 0

  $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?api_key=MaEcz1xz6n3LeO2zH2QTK78RvmKV6aBS&q=The Office&limit=${numOfGifs}&offset=0&rating=G&lang=en`,
    "api_key": "MaEcz1xz6n3LeO2zH2QTK78RvmKV6aBS"
  })
    .then((gifs) => {

    $('#start').on('click', (event) => {
        $('#next-question-btn').toggle()
        $('#show-answer-btn').toggle()
        $('#question-container').toggle()
        $('#answer-container').toggle()
        $('#answer-container').empty()
        $('#start').hide()

        const $displayQuestion = $('<div>')
            .text(triviaQuestions[0])
            .addClass('questions')
        const $displayAnswer = $('<div>')
            .text(`The answer is: ${triviaAnswers[0]}`)
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

        const closeModal = () => {
          $('#modal').css('display', 'none')
            window.location.reload()
        } // end of closeModal function

        const closeContinue = () => {
          $('#modal').css('display', 'none')
        }

        const newModal = (modalText) => {
          const $newModalMessage = $('<h4>').text(modalText)
          const ranGif = Math.floor(Math.random() * numOfGifs)
          const $imgGif = $('<img>')
              .attr('src', gifs.data[ranGif].images.downsized.url)
              .css({'width':'200px', 'height':'150px', 'margin':'auto'})
          $('#modal-message').append($imgGif)
          $('#modal-message').append($newModalMessage).css({'display':'flex', 'flex-direction':'column'})
          $('#modal').css('display', 'block')
          setTimeout(closeContinue, 4000)
          if (triviaQuestions.length === 1) {
            setTimeout(closeModal, 4000)
          }
        }

        // This function displays the possible answers for each question as a list item from the MultipleChoice array
        const rotateMultipleChoice = () => {
          if (multipleChoice.length > 1) {
            multipleChoice.shift()
          for (let options in multipleChoice[0]) {
            const $showMultipleChoice = $('<li>')
                .text(multipleChoice[0][options])
                .addClass('options')
                .appendTo('#multiple-choice')
                console.log(multipleChoice.length);
            }
          } else if (multipleChoice.length === 1 ) {
                $('#multiple-choice-bonus').toggle()
                multipleChoice.shift()
              }
            }

        const nextQuestion = () => {
          if (triviaQuestions.length === 1) {
                $('#modal-message').empty()
                const modalText = `Great job! You got ${score} question(s) right! Prison Mike would be proud of you.`
                newModal(modalText)
          } else {
                $('#multiple-choice').empty()
                $displayAnswer.hide()
                triviaQuestions.shift()
                triviaAnswers.shift()

                $displayQuestion.text(triviaQuestions[0])
                $displayAnswer.text(`The answer is: ${triviaAnswers[0]}`)

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

        $('.alterEgo').on('click', () => {
            const egoPicked = $(event.target).text()
            console.log(egoPicked);
            //take event.target value and pass through to modal message
            nextQuestion()
        })

        const optionFunction = () => {
          $('.options').on('click', (event) => {
              $('#modal-message').empty()
                const choiceText = $(event.target).text();
                if (choiceText === triviaAnswers[0]) {
                    score++
                    console.log(score);
                    const modalText = `Correct answer!`
                    newModal(modalText)
                    nextQuestion()
              } else if (choiceText !== triviaAnswers[0]) {
                    const modalText = `Aw man! Wrong answer...`
                    newModal(modalText)
                    nextQuestion()
              } // end of else
            }) // end of click event
          }
          optionFunction()
      })   // end of .then funciton
      .error((gifs) => {
        console.log(gifs);
      }) // end .error function
    }) // end #start onclick
}) // ON LOAD Closing
