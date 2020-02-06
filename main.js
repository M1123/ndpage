document.addEventListener('DOMContentLoaded', function() { 
    let tabs = document.querySelectorAll('.list__item');
    let contentItems = document.querySelectorAll('.content__item');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].onclick = function(){
        contentItems.forEach(n=>n.className ='content__item');
        contentItems[i].className += ' content__item--active';
        tabs.forEach(n=>n.className='list__item');
        tabs[i].className+=' list__item--active';
       }
    }}
);
