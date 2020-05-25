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
})