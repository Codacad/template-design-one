
document.addEventListener('DOMContentLoaded', function(){
    const hamburgerIcon = document.querySelector('div.nav-left-menus span.hamburger-icon');    

    hamburgerIcon.addEventListener('click', function(e){
        e.preventDefault()
        document.querySelector('div#sidenav-wrapper').classList.add('sidenav-wrapper-toggle')
        document.querySelector('nav.sidenav').classList.add('sidenav-toggle');
        document.querySelector('body').classList.add("overflow-hidden");
        document.querySelector('body').style.transition= "400ms ease-in-out";        
    })
    
    document.querySelector('nav.sidenav div.header span.close').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('div#sidenav-wrapper').classList.remove('sidenav-wrapper-toggle')
        document.querySelector('nav.sidenav').classList.remove('sidenav-toggle');
        document.querySelector('body').classList.remove("overflow-hidden");
    }) 

    const caret = document.querySelector('ul.user-menus li span.caret')
    let trueOrFalse = false;
    caret.addEventListener('click', (e) => {        
        e.preventDefault();       
        trueOrFalse = !trueOrFalse                
        if(trueOrFalse){
            document.querySelector('ul.user-menus li ul').classList.add('toggle-user-menus')
            document.querySelector('div#dropdown-wrapper').classList.add('toggle-dropdown')
        }else{
            document.querySelector('ul.user-menus li ul').classList.remove('toggle-user-menus')
            document.querySelector('div#dropdown-wrapper').classList.remove('toggle-dropdown')
        }
    }) 
    const underDev = document.querySelector('div.under-development-inform');
    const label = document.querySelector('div.under-development-inform div.label');
    const closeLabel = document.querySelector('div.under-development-inform div.label div.contents a');          
    let title = document.querySelector('title').innerHTML;
    if(title == 'CodAcad'){
        underDev.classList.add('show-under-development')    
        label.classList.add('show-label')    
        closeLabel.addEventListener('click', (e) => {
            e.preventDefault()
            underDev.classList.remove('show-under-development')
            label.classList.remove('show-label')
        })            
    }    

    if(title == "Resume"){
        window.onscroll = function(e){        
            const resume = document.getElementById('resume');
            const resumeCords = resume.getBoundingClientRect();
            const navbar = document.querySelector("nav#navbar");        
            if(resumeCords.y <= -10){
                navbar.style.boxShadow = "0px 1px 10px rgba(0,0,0,.5)";
            }else if(resumeCords.y == 55){
                navbar.style.boxShadow = "none";
            }
        }
    }   
    window.onclick = (e) => {
        if(e.target.id == "sidenav-wrapper"){
            document.querySelector('div#sidenav-wrapper').classList.remove('sidenav-wrapper-toggle');
            document.querySelector('nav.sidenav').classList.remove('sidenav-toggle');
            document.querySelector('body').classList.remove("overflow-hidden");
        }        
        if(e.target.id == 'dropdown-wrapper'){
            document.querySelector('ul.user-menus li ul').classList.remove('toggle-user-menus')
            document.querySelector('div#dropdown-wrapper').classList.remove('toggle-dropdown')
        }
         if(e.target.id == 'under-development'){
            underDev.classList.remove('show-under-development')
            label.classList.remove('show-label')
        }              
    }
    document.querySelectorAll('div.frequency span.bar').forEach(function(progress){
        const span = document.createElement('span');
        span.className = 'progress';
        progress.append(span);
        const percentage = progress.nextElementSibling.innerHTML;
        progress.querySelector('span.progress').style.width = `${percentage}`       ;
        
    })            
    document.querySelector('div.page1').style.display = "block";
    function showPage(page){
        document.querySelectorAll('div.page').forEach(div => {
            div.style.display = 'none'
        })                
        document.querySelector(`#${page}`).style.display = 'block';            

    }    
    function addActiveClass(button){
        document.querySelectorAll('a.btn').forEach(btn => {
            btn.classList.remove('active');
        })
        document.querySelector(`#${button}`).classList.add('active');        
    }
    const primaryTitle = document.querySelector('title').innerHTML
    document.querySelector('title').innerHTML = `${primaryTitle} (${document.querySelector('a.btn').innerHTML})`
    document.querySelectorAll('a.btn').forEach(function(btn){        
        btn.onclick = function(){                                     
            showPage(this.dataset.page);                              
            document.querySelector('title').innerHTML = `${primaryTitle} (${this.innerHTML})`                                                               
            addActiveClass(this.id);
        }                  
    })            
})
             
    