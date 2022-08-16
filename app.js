const player = {
  name: 'nico',
  sayHello: function (otherPersonsName) {
    console.log('Hello! ' + otherPersonsName + ' nice to meet you!')
  },
}

console.log(player.name)
player.sayHello('lynn')
player.sayHello('nico')

function plus(a, b) {
  console.log(a + b)
}

plus(5, 5)
