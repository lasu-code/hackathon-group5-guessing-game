var trials=document.getElementById("trials");
		var guessNum= document.getElementById("myText");
		guessNum.value="";
		var myButton= document.getElementById("myButton");
		var trial=0;
		var maxTrial= 5;
		var myrandom=document.getElementById("random");
		var mydiff=document.getElementById("diff");
		var label = document.getElementById("label");
		var output = document.getElementById("prompt");
		var mycard= document.getElementById("mycard");
		var messg= document.getElementById("messg");
		myButton.onclick= function(){
			var myGuessNum= guessNum.value;
			if(myGuessNum==""){
				// alert("field can't be empty");
				output.innerHTML = "THIS FIELD CANNOT BE EMPTY";

			}
			else if(isNaN(myGuessNum)){
				// alert("NUMBERS ONLY");
				output.innerHTML = "SORRY, NUMBERS ONLY";
				guessNum.value="";
			}
			else{
				var randomNum=Math.floor(Math.random()*100+1);
				var diff=myGuessNum-randomNum;
				if(diff==0){
					//alert("you guessed right");
					output.innerHTML = "YOU GUESSED RIGHT";
					trials.innerHTML="YOU WON"
					guessNum.style.display="none";
					myButton.style.display="none";
					label.style.display="none";
					mycard.style.display="none";
					messg.innerHTML="CONGRATULATIONS"

				}
				else
				{
					if(diff>=1 && diff<=10){
						// alert("THE NUMBER IS HIGH...");
						output.innerHTML = "THE NUMBER IS HIGH";
					}
					else if(diff>=11){
						// alert("THE NUMBER IS TOO HIGH... ");
						output.innerHTML = "THE NUMBER IS TOO HIGH";
					}
					else if(diff<0 && diff>=-10){
						// alert("THE NUMBER IS TOO HIGH...");
						output.innerHTML = "THE NUMBER IS LOW";
					}
					else if(diff<=-11){
						// alert("THE NUMBER IS TOO LOW");
						output.innerHTML = "THE NUMBER IS TOO LOW";

					}

					trial++;
					var rem= maxTrial-trial;
					myrandom.innerHTML="The random number is: " + randomNum;
					mydiff.innerHTML="The difference is: " +  diff;
					trials.innerHTML= rem + "  TRIALS REMAINING";
					guessNum.value=""; 
					if(trial>=5){
						trials.innerHTML="MAXIMUM TRIALS EXCEEDED";
						guessNum.style.display="none";
						myButton.style.display="none";
						label.style.display="none";
						mycard.style.display="none";
						

					}

				}
				




			}

		};
