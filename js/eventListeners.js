window.addEventListener('keydown', (e) => {
    if(player.preventInput) return
    switch (e.key) {
        case 'w':
            if (player.velocity.y === 0) player.velocity.y = -13
            break;
        case 'a':
            //move player to the left
            keys.a.pressed = true
            break;
        case 'd':
            //move player to the right
            keys.d.pressed = true
            break;
        default:
            break;
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'a':
            //move player to the left
            keys.a.pressed = false
            break;
        case 'd':
            //move player to the right
            keys.d.pressed = false
            break;
        default:
            break;
    }
})