(function () {
    var togglers = document.querySelectorAll('.toggler'),
    icon = document.querySelector('.hamburger'),
    navbars = document.querySelector('.navmenu'),
    jumptoGrid = document.querySelector('#jumptoGrid'),
    jumptoLogo = document.querySelector('#jumptoLogo'),
    jumptoColor = document.querySelector('#jumptoColor'),
    jumptoTypography = document.querySelector('#jumptoTypography'),
    jumptoNavigation = document.querySelector('#jumptoNavigation'),
    jumptoComponents = document.querySelector('#jumptoComponents')

    function transformFormat() {
        togglers[0].classList.toggle('animation0');
        togglers[1].classList.toggle('hide');
        togglers[2].classList.toggle('animation2');
        navbars.classList.toggle('show');
    }
    icon.addEventListener('click', transformFormat);
    jumptoGrid.addEventListener('click', transformFormat);
    jumptoLogo.addEventListener('click', transformFormat);
    jumptoColor.addEventListener('click', transformFormat);
    jumptoTypography.addEventListener('click', transformFormat);
    jumptoNavigation.addEventListener('click', transformFormat);
    jumptoComponents.addEventListener('click', transformFormat);

})();

// Parallax effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelectorAll('.parallax');
    // const parallax2 = document.querySelectorAll('.parallax2');
    let scrollPosition = window.pageYOffset;

    // console.log(scrollPosition);

    parallax[0].style.transform = 'translateY(' + scrollPosition * 0.15 + 'px)';
    parallax[1].style.transform = 'translateY(' + scrollPosition * 0.1 + 'px)';
    parallax[2].style.transform = 'translateY(' + scrollPosition * 0.1 + 'px)';
    parallax[3].style.transform = 'translateY(' + scrollPosition * 0.1 + 'px)';
    parallax[4].style.transform = 'translateY(' + scrollPosition * 0.09 + 'px)';
    parallax[5].style.transform = 'translateY(' + scrollPosition * 0.09 + 'px)';



});


// Change Background color

function bgChanger() {
    if(this.scrollY > this.innerHeight / 1.2) {
        document.body.classList.add("bg-white");
    }else{
        document.body.classList.remove("bg-white");
    }
}

window.addEventListener("scroll", bgChanger);



// increment form

function up(max) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
    if (document.getElementById("myNumber").value >= parseInt(max)) {
        document.getElementById("myNumber").value = max;
    }
}
function down(min) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= parseInt(min)) {
        document.getElementById("myNumber").value = min;
    }
}

