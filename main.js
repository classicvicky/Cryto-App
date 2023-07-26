var menu = document.getElementById('menu');
var link = document.getElementById('link');
var close = document.getElementById('close');;

menu.addEventListener('click', function(){
    link.style.display = 'block';
    menu.style.display = 'none';
    close.style.display = 'block';
})

close.addEventListener('click', function(){
    link.style.display = 'none';
    menu.style.display = 'block';
    close.style.display = 'none';
})



