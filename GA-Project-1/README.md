# GA-Project1

For my project, I decided to build The Office TV show trivia game. My API of choice was the Giphy API.

I opted for a simple/minimal design and mainly styled using CSS. To make things easier, I built the logo and edited the alter ego photos in Photoshop. I could not find an API that had trivia questions and/or answers related to The Office so I had to program the questions, answers, and multiple choice options into three separate arrays.

When the user clicks on the Start button, the first trivia question, multiple choice options for the question, and a "Next Question" and "Show Answer" button options are initialized and displayed on the screen.  

The user can then answer the question by clicking on one of the multiple choice options, reveal the answer to the question if they are unsure, or skip to the next question without picking one of the multiple choice options.

The complex UI I built was a modal message that appears after every multiple choice answer is clicked to reveal whether or not the choice picked was correct or incorrect. The modal also displays a randomly generated gif using the Giphy API. There is also a modal message at the very end to reveal the game has ended, as well as the number of correct questions answered.


Challenges:

The biggest challenge I had was getting the multiple choice options to display whether or not the choice picked was correct or incorrect. The problem ended up being an issue with scope, so I ended up creating a function that passed values through to other functions and I was able to get the desired outcome. Another challenge I experienced was the responsive design. I started out using px and because most phones nowadays have higher pixel density, the text, images, etc. were all showing up small on newer phones.


Lessons learned:

One thing technical thing I taught myself (or W3 Schools taught me if we're being honest) is how to use a combination of opacity, transition: ease, and hover to reveal the names of the Michael Scott alter egos. In terms of mental lessons learned, I definitely learned patience and going through and tackling one thing at a time instead of trying to solve the end game first.


Features for the future:

Some features that I hope to incorporate in the future are: {
[Randomizing the questions that appear.],
[Changing the name on the last modal message to match the alter ego selected by the user.],
[Have the gif generator be more specific to match if it's a right or wrong answer, ie. if it's a wrong answer, have a sad/upset gif.],
[Incorporating better responsive design.],
[Have the questions appear in a carousel with text (not sure if that's possible but hope to find out!).]
}
