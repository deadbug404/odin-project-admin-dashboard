dirs = document.querySelectorAll(".dir");

dirs.forEach((dir) => {
    dir.addEventListener('mouseover', function(){
        dir.setAttribute('style', 'background-color: white;')
    });
    dir.addEventListener('mouseout', function(){
        dir.setAttribute('style', 'background-color: ;')
    });
});