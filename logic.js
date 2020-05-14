function image_generator() {
  var one="https://images.unsplash.com/photo-1523478016374-2a27cc521718?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
  var two="https://images.unsplash.com/photo-1566833769731-c1aeddf0f3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
  var three="https://images.unsplash.com/photo-1584625881399-60d94b0e8890?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
  var four="https://images.unsplash.com/photo-1586017073264-9128a0e03489?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
  var five="https://images.unsplash.com/photo-1456534231849-7d5fcd82d77b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
  var six="https://images.unsplash.com/photo-1551818567-d49550a81408?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  var random_image=Math.floor(Math.random()*(6)+1);
  if (random_image==1) {
    document.getElementById("opening_image").src=one;
    document.getElementById("tab_opening_image").src=one;
  }
  else if (random_image==2) {
    document.getElementById("opening_image").src=two;
    document.getElementById("tab_opening_image").src=two;
  }
  else if (random_image==3) {
    document.getElementById("opening_image").src=three;
    document.getElementById("tab_opening_image").src=three;
  }
  else if (random_image==4) {
    document.getElementById("opening_image").src=four;
    document.getElementById("tab_opening_image").src=four;
  }
  else if (random_image==5) {
    document.getElementById("opening_image").src=five;
    document.getElementById("tab_opening_image").src=five;
  }
  else {
    document.getElementById("opening_image").src=six;
    document.getElementById("tab_opening_image").src=six;
  }
}

function congratulation_image_generator() {
  var one="https://thumbs.gfycat.com/DearestFantasticAtlasmoth-size_restricted.gif";
  var two="https://media.tumblr.com/3002b399fc3e38436ccca055d1860930/tumblr_inline_mk0khoi0FI1qz4rgp.gif";
  var three="https://i.imgur.com/cXQvCI6.gif?1";
  var four="https://thumbs.gfycat.com/DrearyWelltodoAlpineroadguidetigerbeetle-size_restricted.gif";
  var five="https://i.imgur.com/TTuvBnz.gif";
  var six="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif";
  var random_image_congratulations=Math.floor(Math.random()*(6)+1);
  if (random_image_congratulations==1) {
    document.getElementById("result_image").src=one;
  }
  else if (random_image_congratulations==2) {
    document.getElementById("result_image").src=two;
  }
  else if (random_image_congratulations==3) {
    document.getElementById("result_image").src=three;
  }
  else if (random_image_congratulations==4) {
    document.getElementById("result_image").src=four;
  }
  else if (random_image_congratulations==5) {
    document.getElementById("result_image").src=five;
  }
  else {
    document.getElementById("result_image").src=six;
  }
}

function sorry_image_generator() {
  var one="https://media.giphy.com/media/NTY1kHmcLsCsg/giphy.gif";
  var two="https://media.giphy.com/media/3o6wrebnKWmvx4ZBio/giphy.gif";
  var three="https://i.gifer.com/14bo.gif";
  var four="https://media.giphy.com/media/mBjW9bfJeLLwu6Fhyl/giphy.gif";
  var five="https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif";
  var six="https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif";
  var random_image_sorry=Math.floor(Math.random()*(6)+1);
  if (random_image_sorry==1) {
    document.getElementById("result_image").src=one;
  }
  else if (random_image_sorry==2) {
    document.getElementById("result_image").src=two;
  }
  else if (random_image_sorry==3) {
    document.getElementById("result_image").src=three;
  }
  else if (random_image_sorry==4) {
    document.getElementById("result_image").src=four;
  }
  else if (random_image_sorry==5) {
    document.getElementById("result_image").src=five;
  }
  else {
    document.getElementById("result_image").src=six;
  }
}

function displayer(){
  document.getElementById("challenge_description").style.display="block";
}
function challenge_displayer(){
  document.getElementById("the_challenge").style.display="block";
}
var chances_left=5;
var final_score=0;
var diff;
var min_diff=100;

function chances_counter() {
  chances_left=chances_left-1;
  document.getElementById("text_chances_left").innerHTML="Chances Left: "+chances_left;
}

var generated_number=Math.floor((Math.random()*100)+1);

function checker() {
  var enter_input=document.getElementById("guessed_number");
  enter_input.addEventListener("keyup",function(event){
    if(event.keyCode===13){
      document.getElementById("check_button").click();
    }
  });
  var guessed_number=document.getElementById("guessed_number").value;
  if (guessed_number=="") {
    guessed_number=0;
  }
  diff=Math.floor(Math.abs(generated_number-guessed_number));
    if (diff<min_diff) {
      min_diff=diff;
    }
  var greater_than="The number is greater than ";
  var smaller_than="The number is smaller than ";
  if (guessed_number<generated_number) {
    if (chances_left==4) {
      document.getElementById("first_attempt").innerHTML=greater_than+guessed_number;
    }
    else if (chances_left==3) {
        document.getElementById("second_attempt").innerHTML=greater_than+guessed_number;
    }
    else if (chances_left==2) {
        document.getElementById("third_attempt").innerHTML=greater_than+guessed_number;
    }
    else if (chances_left==1) {
        document.getElementById("fourth_attempt").innerHTML=greater_than+guessed_number;
    }
  }
  else if (guessed_number>generated_number) {
      if (chances_left==4) {
          document.getElementById("first_attempt").innerHTML=smaller_than+guessed_number;
      }
      else if (chances_left==3) {
          document.getElementById("second_attempt").innerHTML=smaller_than+guessed_number;
      }
      else if (chances_left==2) {
          document.getElementById("third_attempt").innerHTML=smaller_than+guessed_number;
      }
      else if (chances_left==1) {
          document.getElementById("fourth_attempt").innerHTML=smaller_than+guessed_number;
      }
  }
  else if (guessed_number==generated_number) {
    document.getElementById("input_number").style.display='none';
    document.getElementById("chances_left").style.display='none';
    document.getElementById("result_descrption").style.display='none';
    document.getElementById("result_score").style.display='block';
    document.getElementById("result_image").style.display='block';
    document.getElementById("written_result").innerHTML="Hurray! You got it";
    document.getElementById("correct_answer").innerHTML="";
    score=200+((chances_left)*100);
    document.getElementById("final_score").innerHTML="Final Score: "+score;
    congratulation_image_generator();
    document.getElementById("share_feedback").style.display='block';
    document.getElementById("challenge_container").style.height='100%';
  }
  if (chances_left==0&&guessed_number!=generated_number)
  {
    document.getElementById("input_number").style.display='none';
    document.getElementById("chances_left").style.display='none';
    document.getElementById("result_descrption").style.display='none';    document.getElementById("result_score").style.display='block';
    document.getElementById("result_image").style.display='block';
    document.getElementById("written_result").innerHTML="Oops! You are out of chances";
    document.getElementById("correct_answer").innerHTML="The correct answer is "+generated_number;
    score=Math.floor(100/min_diff);
    document.getElementById("final_score").innerHTML="Final Score: "+score;
    sorry_image_generator();
    document.getElementById("share_feedback").style.display='block';
    document.getElementById("challenge_container").style.height='100%';
  }
}

function reset_variable() {
  chances_left=5;
  min_diff=100;
  score=0;
  document.getElementById("input_number").style.display='block';
  document.getElementById("chances_left").style.display='block';
  document.getElementById("result_descrption").style.display='block';
  document.getElementById("result_score").style.display='none';
  document.getElementById("result_image").style.display='none';
  document.getElementById("first_attempt").innerHTML="";
  document.getElementById("second_attempt").innerHTML="";
  document.getElementById("third_attempt").innerHTML="";
  document.getElementById("fourth_attempt").innerHTML="";
  generated_number=Math.floor((Math.random()*100)+1);
  document.getElementById("text_chances_left").innerHTML="Chances Left: "+chances_left;
  document.getElementById("guessed_number").value="";
  document.getElementById("challenge_container").style.height='1100px';
}
function formvalidation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;
  var error;
    if(name.length==0){
      error = "Please enter your Name.";
      alert(error);
      return false;
    }
    if(msg.length==0){
      error="Please enter a Message";
      alert(error);
      return false;
    }
    alert("The form is Submitted Successfully");
    return true;
}
