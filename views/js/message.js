document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');    
    form.addEventListener('submit', sendMessage);                    
})
function sendMessage(e) {    
    e.preventDefault();        
    let URL;
    if(location.hostname == "localhost"){
        URL = "http://localhost:5000/message";        
    }else{
        URL = "http://www.codacad.com/message";
    }
    console.log(URL)

    // let localURL = "http://localhost:5000/message";
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
        document.querySelector('form div.success').classList.add('show-fail')        
        let fail = document.querySelector('form div.success.show-fail');
        fail.querySelector('span').textContent = "Please fill all fields..."

    }else{
        fetch('/message', {
            method:'POST',            
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(message)
        }).then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
        }).catch(error =>  {
            console.log(error)
        });
        document.querySelector('form div.success').classList.add('show-success')        
        let success = document.querySelector('form div.success.show-success');
        success.querySelector('span').textContent = "Message sent successfully..."
        nameInput.value = "";
        emailInput.value= ""
        textInput.value = ""
    }             
    if(document.querySelector('form div.success').classList.contains("show-success")){
        setTimeout(() => {
            document.querySelector('form div.success').classList.remove('show-success');
        }, 5000)
    }
    if(document.querySelector('form div.success').classList.contains("show-fail")){
        setTimeout(() => {
            document.querySelector('form div.success').classList.remove('show-fail');
        }, 5000)
    }
}