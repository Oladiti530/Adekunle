// for img changing

const defImg = document.getElementById('deImg');

defImg.addEventListener('click', function(){
    document.getElementById('bg').style.backgroundImage = "url(IMG_4834.JPG)";
});


function firstImg(){
    document.getElementById('bg').style.backgroundImage = "url('IMG_4835.JPG')";
}

function secondImg(){
    document.getElementById('bg').style.backgroundImage = "url('IMG_4848.JPG')";
}

// for menu 

function opn(){
    document.getElementById('menu-id').classList.add('is-open');
    document.querySelector('.head-1').classList.add('is-open');
}
function cls(){
    document.getElementById('menu-id').classList.remove('is-open');
    document.querySelector('.head-1').classList.remove('is-open');
}
// Close the menu after tapping a link, and whenever the layout grows past mobile.
document.querySelectorAll('#menu-id li').forEach(function(li){li.addEventListener('click', cls)});
window.addEventListener('resize', function(){ if(window.innerWidth > 768) cls(); });