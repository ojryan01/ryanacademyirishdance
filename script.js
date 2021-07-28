// form validation

function validate(event) {
    //prevent default was used to keep the submit button from redirecting to index.html. will want to remove that when I have a back end
    event.preventDefault();
    // Validation fails if name is blank
if (document.registration_form.name.value === "") {
    alert('Please enter your name')
    // Validation fails if email is blank
    } else if (document.registration_form.email.value === "") {
      alert('Please enter your email address.')
        } 
        else results();      
}

// Display form results
 
function results() {

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var type = document.getElementById('type').value;
  var question = document.getElementById('question').value;
  
  console.log(name, email, type, question);

  document.getElementById('display').innerHTML = 
  
    `<h2 class="thanks">THANKS FOR GETTING IN TOUCH!</h2> 
    <h2>NAME:</h2><p>${name}</p>
    <h2>EMAIL:</h2><p>${email}</p>
    <h2>SUBJECT:</h2><p>${type}</p>
    <h2>QUESTION:</h2>
    <p>${question}</p>
    <h2 class="thanks">WE RECEIVED YOUR MESSAGE AND WILL CONTACT YOU SOON!</h2>`;

}

 //hide and show links when clicking hamburger icon

function myFunctionleft() {
  var x = document.getElementById("mylinksleft");
  if (x.style.display === "flex") {
    x.style.display = "none";
      } else {
    x.style.display = "flex";
      }
}

function myFunctionright() {
  var x = document.getElementById("mylinksright");
  if (x.style.display === "flex") {
    x.style.display = "none";
      } else {
    x.style.display = "flex";
      }
}


