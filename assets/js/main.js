$(document).ready(function(){
    var navButtons = document.getElementsByClassName('nav-btn');
    $('section.course').css({"display": "none"});
    navButtons[0].onclick = function() {
        var currentState = this.getAttribute('data-state');
        if(currentState === "inactive"){
            $('section').css({"display": "none"});
            for(var i=0; i<navButtons.length; i++){
                if(navButtons[i].getAttribute('data-state') === "active" && i != 0){
                    navButtons[i].setAttribute('data-state', 'inactive');
                }
            }
            document.getElementsByClassName('header-title')[0].innerHTML = "RPI / HOME";
            var btnID = this.id;
            var searchID = btnID.substring(0, 4);
            var section = document.getElementById(searchID);
            section.style = "display: block";
            currentState = "active";
            this.setAttribute('data-state', "active");
        }
    }
    navButtons[1].onclick = function() {
        var currentState = this.getAttribute('data-state');
        if(currentState === "inactive"){
            $('section').css({"display": "none"});
            for(var i=0; i<navButtons.length; i++){
                if(navButtons[i].getAttribute('data-state') === "active" && i != 1){
                    navButtons[i].setAttribute('data-state', 'inactive');
                }
            }
            document.getElementsByClassName('header-title')[0].innerHTML = "RPI / MGMT-2430";
            var btnID = this.id;
            var searchID = btnID.substring(0, 9);
            var section = document.getElementById(searchID);
            section.style = "display: block";
            currentState = "active";
            this.setAttribute('data-state', "active");
        }
    }
    navButtons[2].onclick = function() {
        var currentState = this.getAttribute('data-state');
        if(currentState === "inactive"){
            $('section').css({"display": "none"});
            for(var i=0; i<navButtons.length; i++){
                if(navButtons[i].getAttribute('data-state') === "active" && i != 2){
                    navButtons[i].setAttribute('data-state', 'inactive');
                }
            }
            document.getElementsByClassName('header-title')[0].innerHTML = "RPI / PHIL-2140";
            var btnID = this.id;
            var searchID = btnID.substring(0, 9);
            var section = document.getElementById(searchID);
            section.style = "display: block";
            currentState = "active";
            this.setAttribute('data-state', "active");
        }
    }
    navButtons[3].onclick = function() {
        var currentState = this.getAttribute('data-state');
        if(currentState === "inactive"){
            $('section').css({"display": "none"});
            for(var i=0; i<navButtons.length; i++){
                if(navButtons[i].getAttribute('data-state') === "active" && i != 3){
                    navButtons[i].setAttribute('data-state', 'inactive');
                }
            }
            document.getElementsByClassName('header-title')[0].innerHTML = "RPI / PHYS-4810";
            var btnID = this.id;
            var searchID = btnID.substring(0, 9);
            var section = document.getElementById(searchID);
            section.style = "display: block";
            currentState = "active";
            this.setAttribute('data-state', "active");
        }
    }
    $('.close').click(function(){
        this.parentNode.style = "display: none;";
    })
})
