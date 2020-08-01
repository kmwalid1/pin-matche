      // Generate pin function
        function generatePin(){
            var pin = Math.floor( 1000 + Math.random() * 9000);
            document.getElementById("generate-pin-output").value = pin;
            
            document.getElementById("pin-output").value='';
            document.getElementById("submit-btn").disabled = false;
            document.getElementById("action-left-id").innerText = "3";
           
            var notifyClass = document.getElementsByClassName("notify");
            for(var i = 0 ; i < notifyClass.length; i++){
                notifyClass[i].style.display="none";}
        }
        


        // Write Pin On Calculator input function
        function putPin(number){
            if(number === 'c'){
                document.getElementById("pin-output").value='';
            }
            else if(number === '<'){
                var string=document.getElementById("pin-output").value;
                document.getElementById("pin-output").value=string.substring(0,string.length-1);
            }
            else{
                document.getElementById("pin-output").value+= number;
            }
        }



        // Submit Button Function
        function submitButton(){
            const generatePinOutput = document.getElementById("generate-pin-output").value;
            const pinOutput = document.getElementById("pin-output").value;

            if(generatePinOutput ===''){
                document.getElementById("error").style.display = "block";
            }
            else if(generatePinOutput === pinOutput){
                document.getElementById("matched").style.display = "block";
                document.getElementById("didn't-matched").style.display = "none";
            }
            else if(pinOutput ===''){
                document.getElementById("enter-pin").style.display = "block";
                document.getElementById("didn't-matched").style.display = "none";
            }
            else{
                document.getElementById("didn't-matched").style.display = "block";
                document.getElementById("matched").style.display = "none";
                document.getElementById("enter-pin").style.display = "none";
                
                var string = document.getElementById("action-left-id").innerText;
                var stringFloat = parseFloat(string);
                if( stringFloat > 0){
                document.getElementById("action-left-id").innerText = stringFloat-1;
               }
               else{
                document.getElementById("generate-pin-again").style.display = "block";
                document.getElementById("didn't-matched").style.display = "none";
                document.getElementById("submit-btn").disabled = true;
               }
            }
        }
