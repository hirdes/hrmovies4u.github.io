    $(document).ready(function(){
        $('.menu-toggle').click(function () {
            $('.menu-toggle').toggleClass('active')
            $('.navigation').toggleClass('active')
        })
    })

const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLenght = menuItem.length
for (let i=0; i<menuLenght; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = "active"
    }
}