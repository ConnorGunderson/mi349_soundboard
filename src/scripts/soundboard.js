soundboard.onclick = e => {
    if (e.target.nodeName !== 'BUTTON') return;
    
    e.target.querySelector("audio").play()
}