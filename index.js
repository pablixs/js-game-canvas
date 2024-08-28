const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const parsedCollisions = collisionMap.parse2D();
// const parsedCollisions = testCollisions.parse2D();

const collisionBlocks = parsedCollisions.createObjectsFrom2D();
console.log(collisionBlocks)

// console.log('COLLISION BLOCKS',collisionBlocks)
const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './img/background.png'

})
const player = new Player({
    collisionBlocks,
    imageSrc: './img/sarabot-alpha.png',
    frameRate: 8,
    imageColumnsNumber: 4,
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
}


function animate(){
    window.requestAnimationFrame(animate);

    background.draw()
    // collisionBlocks.forEach((collisionBlock) => {
    //     collisionBlock.draw()
    // })
    
    
    player.handleInput(keys);
    player.draw();
    player.update();
  

}

animate();