const dog = {
    mood: 5,
    satiety: 5,
    cleanliness: 5,
    bathroom: 0,
    pettable: false,
    tired: false,

    petCount: 0,
    playCount: 0,
    feedCount: 0,
    limit: 2
}

setInterval(function statDecrement(){

    for(let i = 0; i < 3; i++){
        dog[Object.keys(dog)[i]] > 0 && dog[Object.keys(dog)[i]]--
    }
    dog.bathroom<5 && (dog.bathroom++)
    dog.tired = false;
    dog.pettable = false;
    dog.petCount = 0
    dog.playCount = 0
    dog.feedCount = 0
}, 60000) //per minute just for testing reasons

function pet(msg){
    if(dog.mood >= 3 ){
        dog.pettable = true
    } 
    if (dog.pettable && dog.petCount < dog.limit){
        msg.reply("Dog loves being pet")
        dog.mood<5 && (dog.mood++)
        dog.petCount++
    }
    else if(dog.mood < 3){
        msg.reply("Dog is growling and showing teeth")
    } else {
        msg.reply("Dog doesnt want to be pet right now")
    }
}

function play(msg){
    if (dog.tired == false && dog.satiety >= 3 && dog.playCount < dog.limit) {
        msg.reply("Dog has gone out to play")
        dog.mood<5 && (dog.mood++)
        dog.tired = true;
        dog.playCount++
        dog.satiety>=0 && (dog.satiety--)
        dog.cleanliness>=0 && (dog.cleanliness--)
    } else {
        msg.reply("Dog is too hungry or tired to play right now")
    }
}

function feed(msg){
    if (dog.satiety >= 5) {
        msg.reply("Dog is bloated")
    } else if (dog.feedCount < dog.limit){
        msg.reply("Dog is GRUBBING")
        dog.satiety<5 && (dog.satiety++)
        dog.mood<5 && (dog.mood++)
        dog.feedCount++
    }
}

function bathroom(msg){
    if (dog.bathroom > 3){
        msg.reply("Dog uses your bathroom and leaves the seat down for you. \nHow polite. ")
        dog.bathroom = 0;
    } else {
        msg.reply("Dog doesnt have to go")
    }
}

function wash(msg){
    if (dog.cleanliness > 3 ){
        msg.reply("Dog doesnt have to be washed")
    } else{
        msg.reply("Dog is clean. He doesnt like it")
        dog.cleanliness = 5;
    }
}

function stats(msg){
    msg.reply(`${JSON.stringify(dog)}`)
}

function status(msg){
    let count = 0
    if (Object.values(dog)[0] < 3){
        msg.reply(`The dog is unhappy`)
        count++
    }
    if (Object.values(dog)[1] < 3){
        msg.reply(`The dog is hungry`)
        count++
    }
    if (Object.values(dog)[2] < 3){
        msg.reply(`The dog is dirty`)
        count++
    }
    if (Object.values(dog)[3] > 3){
        msg.reply(`The dog needs to use the bathroom`)
        count++
    }
    else if (count == 0) msg.reply("Dog is just chillin rn") 

}

module.exports = {pet, play, feed, stats, bathroom, wash, status}