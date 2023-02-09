let sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

 


sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })
// The appendChild method is used to add a new child node to the end of the selected element. In this case, it's adding a button element as a new child node to the element with the id 'buttons'.

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}