document.querySelectorAll('a').forEach(LINK => {
    LINK.addEventListener('click', function(){
        this.parentElement.classList.add('visited');
    });
});