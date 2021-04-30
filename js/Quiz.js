class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("yellow");
    //write code to show a heading for showing the result of Quiz
    fill("green")
    textSize(30);
    text("Result Of The Quiz", 300,50);
    text("- - - - - - - - - - - - - - -", 300,65)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    if(allContestants != undefined){
      var pos = 230;
      fill("red");
      textSize(20);
      text("NOTE: The CONTESTANT who ANSWERED CORRECTLY is displayed in GREEN!",50,320)
    }
    //write condition to check if contestantInfor is not undefined
    for(var plr in allContestants){
      var correctAnswer = "2"
      if(correctAnswer === allContestants[plr].answer){
        fill("green");
      }
      else{
        fill("red");
      }
      textSize(20);
      text(allContestants[plr].name + ": " + allContestants[plr].answer, 250, pos)
      pos = pos+30
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
