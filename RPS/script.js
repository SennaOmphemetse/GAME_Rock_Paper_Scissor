'use strict';

let yrValue = 2;
let myValue = 2;

document.getElementById(`current--0`).textContent = yrValue;
document.getElementById(`current--1`).textContent = myValue;

function RockBtn()
{
  //set/ overwrite content
  document.getElementById(`score--0`).textContent = "Rock";
}

function PaperBtn()
{
  //set/ overwrite content
  document.getElementById(`score--0`).textContent = "Paper";
}

function ScissorBtn()
{
  //set/ overwrite content
  document.getElementById(`score--0`).textContent = "Scissor";
}



function PlayBtn()
{
  /*
  rock = 1
  paper = 2
  scissor = 3
  */

  let rand = Math.trunc(Math.random() * 3 )+ 1;
  let numb = Number(rand);

  let comp = "";

  const readValue = document.getElementById(`score--0`).textContent;

  let myScore = 0;
  let yrScore = 0;

  myScore = myValue;
  yrScore = yrValue;

  if(readValue === "?")
  {
    document.querySelector(".dice").textContent = "Choose option to play ➡️";
  }
  else
  {

    if(myScore < 1 || yrScore < 1)
    {
      document.querySelector(".dice").textContent = "GAME-OVER..Press NEW GAME";
    }
    else
    {

      if(numb === Number(1))
      {
        comp = "Rock";
        document.getElementById(`score--1`).textContent = comp;
      }
      else if(numb === Number(2))
      {
        comp = "Paper";
        document.getElementById(`score--1`).textContent = comp;
      }
      else
      {
        comp = "Scissor";
        document.getElementById(`score--1`).textContent = comp;
      }

      if(comp == readValue)
      {
        document.querySelector(".dice").textContent = "Draw";
      }
      else if((readValue == "Paper" && comp == "Rock") || (readValue == "Rock" && comp == "Scissor") || (readValue == "Scissor" && comp == "Paper"))
      {
        myScore++;
        yrScore--;

        myValue = myScore;
        yrValue = yrScore;
        
        document.getElementById(`current--0`).textContent = myScore;
        document.getElementById(`current--1`).textContent = yrScore;

        document.querySelector(".dice").textContent = "You have won the game!! 😂😂";
      }
      else
      {
        myScore--;
        yrScore++;

        myValue = myScore;
        yrValue = yrScore;

        document.getElementById(`current--0`).textContent = myScore;
        document.getElementById(`current--1`).textContent = yrScore;
        
        document.querySelector(".dice").textContent = "You have lost the game!! 😡😡";
      }

    }

  }
}


function NewGame()
{

  document.getElementById(`current--0`).textContent = 5;
  document.getElementById(`current--1`).textContent = 5;
  document.querySelector(".dice").textContent = "results";
  document.getElementById(`score--1`).textContent = "?";
  document.getElementById(`score--0`).textContent = "?";

}

function boost()
{

  let check = document.getElementById(`current--0`).textContent;
  const incre = 1;

  if(check < 1)
  {
    document.getElementById(`current--0`).textContent = incre;
    document.querySelector(".dice").textContent = "points given😁";
  }
  else
  {
    document.querySelector(".dice").textContent = "You have points available😒😒";
  }

}

//Choose buttons
document.querySelector('.rock').addEventListener('click', RockBtn);
document.querySelector('.paper').addEventListener('click', PaperBtn);
document.querySelector('.scissor').addEventListener('click', ScissorBtn);
document.querySelector('.btn--roll').addEventListener('click', PlayBtn);

document.querySelector('.btn--new').addEventListener('click', NewGame);
//document.querySelector('.btn--hold').addEventListener('click', boost);