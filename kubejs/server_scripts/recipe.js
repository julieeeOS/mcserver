ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:cold_core', 1), // arg 1: output
        [
          'III',
          'IDI', // arg 2: the shape (array of strings)
          'III'
        ],
        {
          I: 'minecraft:blue_ice',
          D: 'minecraft:diamond_block'
        }
      ).id('kubejs:cold_core') // Optional: Set a custom ID for the recipe
      
      event.shaped(
        Item.of('kubejs:green_cube', 1), // arg 1: output
        [
          'II',
          'II', // arg 2: the shape (array of strings)
        ],
        {
          I: 'minecraft:moss_block'
        }
      ).id('kubejs:green_cube') // Optional: Set a custom ID for the recipe
  })