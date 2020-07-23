document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');    
    form.addEventListener('submit', sendMessage);                
})
function sendMessage(e) {    
    e.preventDefault();        
    let URL = "http://www.codacad.com/message" || 'http://localhost:5000/message';
    let nameInput = document.querySelector('#name')
    let emailInput = document.querySelector('#email')
    let textInput = document.querySelector('#text')    
    const formData = new FormData(form)
    const name = formData.get("name");
    const email = formData.get("email");
    const text = formData.get("text");
    const message = {
        name,
        email,
        text            
    }

    if(!nameInput.value || !emailInput.value || !textInput.value){
        console.log('Please fill all fields')
    }else{
        fetch(URL, {
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(message)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error =>  console.log(error));

        document.querySelector('form div.success').classList.add('show-success')        
        nameInput.value = "";
        emailInput.value= ""
        textInput.value = ""
    }             
    if(document.querySelector('form div.success').classList.contains("show-success")){
        setTimeout(() => {
            document.querySelector('form div.success').classList.remove('show-success');
        }, 5000)
    }
}