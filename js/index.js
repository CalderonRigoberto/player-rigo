const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $adelante = document.querySelector('#adelante');
const $atras = document.querySelector('#atras');

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$adelante.addEventListener('click', handleAdelante)
$atras.addEventListener('click', handleAtras)

function handleAtras() {
    $video.currentTime -= 10;
    console.log($video.currentTime)
}

function handleAdelante() {
    $video.currentTime += 10;
    console.log($video.currentTime)
}

function handlePlay() {
    $video.play()
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePause() {
    $video.pause()
    $pause.hidden = true;
    $play.hidden = false;
}
const $pros = document.querySelector('input[type=range]')
$video.addEventListener('loadedmetadata', handleProgress)

$video.addEventListener('timeupdate', handleUpdate)


function handleProgress() {
    $pros.max = $video.duration
}

function handleUpdate() {
    $pros.value = $video.currentTime
}

$pros.addEventListener('input', handleRecorrer)

function handleRecorrer() {
    $video.currentTime = $pros.value
}


$pros.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $pros.value
    console.log($pros.value)
}