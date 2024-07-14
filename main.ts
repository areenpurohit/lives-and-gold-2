function Quest_2 () {
    adventure.clearTextLog()
    music.stopAllSounds()
    music.play(music.createSong(assets.song`quest_from_the_king0`), music.PlaybackMode.LoopingInBackground)
    mySprite = sprites.create(img`
        ..........666666666666..........
        ........6667777777777666........
        ......66677777777777777666......
        .....6677777779999777777766.....
        ....667777779966669977777766....
        ....677777799668866117777776....
        ...66777779966877861197777766...
        ...66777799668677686699777766...
        ...88777796688888888669777788...
        ...88777788888888888888777788...
        ...88977888679999997688877988...
        ...88977886777777777768877988...
        ...88997777777777777777779988...
        ...88799777777777777777711788...
        ...88679997777777777779117688...
        ..cc866679999999999999976668cc..
        .ccbc6666679999999999766666cbcc.
        .fcbcc66666666666666666666ccbcf.
        .fcbbcc666666666666666666ccbdcf.
        .f8bbbccc66666666666666cccbddcf.
        .f8cbbbbccccccccccccccccbdddbcf.
        .f8ccbbbbbccccccccccccb111ddccf.
        .f6ccccbbbddddddddddddd111dcccf.
        .f6ccccccbbddddddddddddddbbcccf.
        .f6cccccccccccccbbbbbbbbbdbcccf.
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..ff6ccccccccbbbbbbbbbbbddbcff..
        ...ff6cccccccbbbbbbbbbbbddbff...
        ....ffcccccccbbbbbbbbbbbdbff....
        ......ffccccbbbbbbbbbbbbff......
        ........ffffffffffffffff........
        `, SpriteKind.Player)
    mySprite.setPosition(49, 28)
    animation.runImageAnimation(
    mySprite,
    [img`
        ..........666666666666..........
        ........6667777777777666........
        ......66677777777777777666......
        .....6677777779999777777766.....
        ....667777779966669977777766....
        ....677777799668866117777776....
        ...66777779966877861197777766...
        ...66777799668677686699777766...
        ...88777796688888888669777788...
        ...88777788888888888888777788...
        ...88977888679999997688877988...
        ...88977886777777777768877988...
        ...88997777777777777777779988...
        ...88799777777777777777711788...
        ...88679997777777777779117688...
        ..cc866679999999999999976668cc..
        .ccbc6666679999999999766666cbcc.
        .fcbcc66666666666666666666ccbcf.
        .fcbbcc666666666666666666ccbdcf.
        .f8bbbccc66666666666666cccbddcf.
        .f8cbbbbccccccccccccccccbdddbcf.
        .f8ccbbbbbccccccccccccb111ddccf.
        .f6ccccbbbddddddddddddd111dcccf.
        .f6ccccccbbddddddddddddddbbcccf.
        .f6cccccccccccccbbbbbbbbbdbcccf.
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..ff6ccccccccbbbbbbbbbbbddbcff..
        ...ff6cccccccbbbbbbbbbbbddbff...
        ....ffcccccccbbbbbbbbbbbdbff....
        ......ffccccbbbbbbbbbbbbff......
        ........ffffffffffffffff........
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ..........888888888888..........
        ........8887777777777888........
        ......88877666666666677888......
        .....8877666667777666667788.....
        ....887666667788887766666788....
        ....866666677888888996666678....
        ...88666667788877889976666688...
        ...88666677888677688877666688...
        ...88666778888888888887766688...
        ...88667788888888888888776688...
        ..cc866788866777777668887668cc..
        .ccbc8668866666666666688668cbcc.
        .fcbcc86666666666666666668ccbcf.
        .fcbbcc886666666666666688ccbdcf.
        .f8bbbccc88888888888888cccbddcf.
        .f8cbbbbccccccccccccccccbdddbcf.
        .f8ccbbbbbccccccccccccb11dddccf.
        .f6ccccbbbdddddddddddd111ddcccf.
        .f6ccccccbbddddddddddd11dbbcccf.
        .f6cccccccccccccbbbbbbbbbdbcccf.
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..ff6ccccccccbbbbbbbbbbbddbcff..
        ...ff6cccccccbbbbbbbbbbbddbff...
        ....ffcccccccbbbbbbbbbbbdbff....
        ......ffccccbbbbbbbbbbbbff......
        ........ffffffffffffffff........
        `],
    500,
    true
    )
    adventure.addToTextlog("The climbing will be difficult, so always be cautious and connected through your walkies")
    adventure.addToTextlog("Oh no, there is a rock falling!")
    adventure.addToTextlog("Press (A) to dodge")
    adventure.addToTextlog("Press (B) to turn back ")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Dodge! We did it!")
        Quest_3()
    } else {
        music.stopAllSounds()
        adventure.addToTextlog("Ahhhhhhhhhhhhha,")
        music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        game.gameOver(false)
    }
}
function Quest_4 () {
    adventure.clearTextLog()
    music.stopAllSounds()
    music.play(music.createSong(assets.song`a_fairy_and_an_ogre0`), music.PlaybackMode.LoopingInBackground)
    mySprite.setImage(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `)
    scaling.scaleToPixels(mySprite, 32, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    mySprite.setPosition(49, 28)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    500,
    true
    )
    adventure.addToTextlog("We have reached the end of the cave ")
    adventure.addToTextlog("There people said that rare gold and diamonds are hidden")
    adventure.addToTextlog("Press (A) to mine and find the treasure ")
    adventure.addToTextlog("Press (B) to turn back")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Lets start to dig!")
        adventure.addToTextlog("1 hour later, We found it! It is gold and rubies!")
        Going_back()
    } else {
        music.stopAllSounds()
        adventure.addToTextlog("Lets go back, oh oh")
        music.play(music.createSoundEffect(WaveShape.Sine, 5000, 1, 208, 0, 3545, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        game.gameOver(false)
    }
}
function Quest_3 () {
    adventure.clearTextLog()
    music.stopAllSounds()
    music.play(music.createSong(assets.song`to_the_ballroom0`), music.PlaybackMode.LoopingInBackground)
    adventure.addToTextlog("We have reached the top and on the entry to the caves")
    adventure.addToTextlog("Always remember to keep your torch light on low to avoid running out of light and not to disturb creatures like bates ")
    adventure.addToTextlog("Oh, great, there is lava")
    adventure.addToTextlog("Press (A) to go over")
    adventure.addToTextlog("Press (B) to turn back")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Hop, 1,2,3, Hop,1,2,3,  we did it again!")
        Quest_4()
    } else {
        adventure.addToTextlog("Run! Ahhhhhhhhhhhhhhhhhhhhhhh,")
        music.stopAllSounds()
        music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        game.gameOver(false)
    }
}
function Quest_1 () {
    music.play(music.createSong(assets.song`going_on_an_adventure`), music.PlaybackMode.LoopingInBackground)
    adventure.addImageToTextLog(img`
        . . f f f f f f . . . 
        . f f c b f f f f f . 
        f f f c f f c b b f f 
        f b f f f f f c c b f 
        f c c f f b f f f c f 
        f c c f f c c c c c f 
        f c f f f f f f f f f 
        f f f b c f f f b f f 
        f f f c b f c c f f f 
        . f f c c f f f f b f 
        . . f f f f f f f f . 
        `)
    adventure.addToTextlog("A group of people approaches you and asks you to join the group ")
    adventure.addToTextlog("If you join, you will get to go to the mines")
    adventure.addToTextlog("Press (A) to join the fun.")
    adventure.addToTextlog("Press (B) to go ahead and away ")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! Enjoy your adventure.")
        Quest_2()
        adventure.changeScoreOverride(adventure.Currency.Coins, 5)
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun.")
        game.gameOver(false)
    }
}
function Going_back () {
    adventure.clearTextLog()
    music.stopAllSounds()
    music.play(music.createSong(hex`0078000408040100001c00010a006400f4016400000400000000000000000000000000050000049b0004000800030a122008000c00020f2a1000140003051d2714001800011118001c0002142220002400012a240028000211202c0030000205273000340002121e3400380001063c00400002122944004800011248004c00030c19255000540003050f1958005c00020d295c006000011e6400680002061168006c0001246c007000010870007400040f181e2a78007c00020c247c0080000408161b2a`), music.PlaybackMode.LoopingInBackground)
    adventure.addToTextlog("Lets carry our treasure and go back the way we came ")
    adventure.addToTextlog("Several hours later, We did it, we found a treasure at the caves!")
    adventure.addToTextlog("Lets all divide it and take it home!")
    game.gameOver(true)
}
let mySprite: Sprite = null
Quest_1()
