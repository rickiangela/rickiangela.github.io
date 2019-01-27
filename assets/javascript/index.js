var type = document.getElementById('type-here');

var typewriter = new Typewriter(type, {
    loop: false
});

typewriter.typeString('\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+'<h2')
    .pauseFor(1000)
    .deleteChars(1)
    .typeString('1>Helllo ')
    .pauseFor(1000)
    .deleteChars(3)
    .typeString('o World!</h1>')
    .pauseFor(2500)
    .start();