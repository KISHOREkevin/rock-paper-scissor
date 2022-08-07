let contains = document.getElementById("contains");
let line1 = document.getElementById("line1");
let player_score_display = document.getElementById("playerscore");
let computer_score_display=document.getElementById("computerscore");
let line2=document.getElementById("line2");
let result=document.getElementById("result");

let play_list=["Rock","Paper","Scissor"];
let player_score=0;
let computer_score=0;



function rock(){
    
    
    let player_mark="Rock";
    if(player_mark=="Rock"){
        let computer_mark=play_list[Math.floor(Math.random()*3)];
        line1.innerHTML="Computer : "+computer_mark+"<br>Player : "+player_mark;
       if(computer_mark=="Paper"){
            line2.innerHTML="Paper folded the Rock<br>AI wins 🤖";
            computer_score+=1;
            computer_score_display.innerHTML="Computer Score : "+computer_score;
        }else if(computer_mark=="Scissor"){
            line2.innerHTML="Scissor is hitted by Rock<br>You win 😎";
            player_score+=1;
            player_score_display.innerHTML="Player Score : "+player_score;

        }else if(computer_mark==player_mark){
            line2.innerHTML="Both are same<br>Its a tie 😂"
        }
        result.innerHTML=" ";
    }
    
    if(computer_score==10){
        result.innerHTML="😥 A.I WON THE MATCH 😥";
        computer_score_display.innerHTML="Computer Score : "+computer_score;
        player_score_display.innerHTML="Player Score : "+player_score;
        computer_score=0;
        player_score=0;
        
        
        
        
    }else if(player_score==10){
        result.innerHTML="✌ YOU WON THE MATCH ✌";
        computer_score_display.innerHTML="Computer Score : "+computer_score;
        player_score_display.innerHTML="Player Score : "+player_score;
        computer_score=0;
        player_score=0;
        
    }
    

}
function paper(){
    
    let player_mark="Paper";
    if(player_mark=="Paper"){
        let computer_mark=play_list[Math.floor(Math.random()*3)];
        line1.innerHTML="Computer : "+computer_mark+"<br>Player : "+player_mark;
       if(computer_mark=="Rock"){
            line2.innerHTML="Paper folded the Rock<br>You win 😎";
            player_score+=1;
            player_score_display.innerHTML="Player Score : "+player_score;
        }else if(computer_mark=="Scissor"){
            line2.innerHTML="Paper is teared by Scissor<br>AI wins 🤖";
            computer_score+=1;
            computer_score_display.innerHTML="Computer Score : "+computer_score;
        }else if(computer_mark==player_mark){
            line2.innerHTML="Both are same<br>Its a tie 😂"
        }
        result.innerHTML=" ";
        
    }
    
    if(computer_score==10){
        result.innerHTML="😥 A.I WON THE MATCH 😥";
        computer_score_display.innerHTML="Computer Score : "+computer_score;
        player_score_display.innerHTML="Player Score : "+player_score;
        computer_score=0;
        player_score=0;
        
    }else if(player_score==10){
        result.innerHTML="✌ YOU WON THE MATCH ✌";
        computer_score_display.innerHTML="Computer Score : "+computer_score;
        player_score_display.innerHTML="Player Score : "+player_score;
        player_score=0;
        computer_score=0;
        
    }

}
function scissor(){
    let player_mark="Scissor";
    
    if(player_mark=="Scissor"){
        let computer_mark=play_list[Math.floor(Math.random()*3)];
        line1.innerHTML="Computer : "+computer_mark+"<br>Player : "+player_mark;
       if(computer_mark=="Paper"){
            line2.innerHTML="Paper is teared by Scissor<br>You win 😎";
            player_score+=1;
            player_score_display.innerHTML="Player Score : "+player_score;
        }else if(computer_mark=="Rock"){
            line2.innerHTML="Scissor is hitted by Rock<br>AI wins 🤖";
            computer_score+=1;
            computer_score_display.innerHTML="Computer Score : "+computer_score;
        }else if(computer_mark==player_mark){
            line2.innerHTML="Both are same<br>Its a tie 😂"
        }
        result.innerHTML=" ";
        
    }
    
    if(computer_score==10){
        result.innerHTML="😥 A.I WON THE MATCH 😥";
        computer_score_display.innerHTML="Computer Score : "+computer_score;
        player_score_display.innerHTML="Player Score : "+player_score;
        computer_score=0;
        player_score=0;
        
    }else if(player_score==10){
        result.innerHTML="✌ YOU WON THE MATCH ✌";
        computer_score_display.innerHTML="Computer Score : "+computer_score;
        player_score_display.innerHTML="Player Score : "+player_score;
        computer_score=0;
        player_score=0;
        
    }

}


