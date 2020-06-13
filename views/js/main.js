document.addEventListener('DOMContentLoaded', function(){
    const sidenav =  document.querySelector('#sidenav');
    const close = sidenav.querySelector('a.close');
    const hamburger = document.querySelector('.hamburger');
    const sidenavWrapper = document.querySelector('div.sidenav-wrapper');
    hamburger.addEventListener('click', function(e){
        e.preventDefault();
        sidenavWrapper.classList.toggle('toggle-sidenav-wrapper')
        sidenav.classList.toggle('toggle-sidenav');
    })
    close.addEventListener('click', function(e){
        e.preventDefault();
        sidenav.classList.remove('toggle-sidenav');
        sidenavWrapper.classList.remove('toggle-sidenav-wrapper')
    })

    window.onclick = function(e){
        if(sidenav.classList.contains('toggle-sidenav')){
            if(e.target.id == 'sidenav-wrapper' || e.target.id == "navbar"){
                sidenav.classList.remove('toggle-sidenav');
                sidenavWrapper.classList.remove('toggle-sidenav-wrapper')
            }
        }
    }
    const coursesSubmenu = sidenav.querySelector('a.courses');
    const coursesAfter = sidenav.querySelector('a.courses::after');
    const sidenavdropdown = sidenav.querySelector('li ul');
    coursesSubmenu.addEventListener('click', function(){
        sidenavdropdown.classList.toggle('show-submenu')
        coursesSubmenu.classList.toggle('up');        
    })
    
})
    const underDev = document.querySelector('div.under-development-inform');
    const label = document.querySelector('div.under-development-inform div.label');
    const closeLabel = document.querySelector('div.under-development-inform div.label div.contents a');          
    
    window.addEventListener('load', (e) => {
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
    window.onclick = (e) => {        
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
        console.log(button)

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
