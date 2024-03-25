function azertyuiop() {
    var imgAccueilElements = document.querySelectorAll('.img_accueil');
    for (var i = 0; i < imgAccueilElements.length; i++) {
        imgAccueilElements[i].onclick = e => {
            if (e.target.style.filter === 'blur(0px)' || !e.target.style.filter) {
                e.target.style.filter = 'blur(1.5rem)';
            } else {
                e.target.style.filter = 'blur(0px)';
            }
        }
    }   
}
azertyuiop();