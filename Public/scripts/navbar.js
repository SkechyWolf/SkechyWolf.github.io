document.getElementById('navbar-toggle').addEventListener("pointerdown", function() {
    console.log('euhe')
    if(!document.querySelector('.navbar').classList.contains('responsive')) {
        document.querySelector('.navbar').classList.add('responsive')
    } else {
        document.querySelector('.navbar').classList.remove('responsive')
    }
})