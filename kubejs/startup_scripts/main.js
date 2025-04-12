// kubejs/startup_scripts/custom_item.js
StartupEvents.registry('item', event => {
    event.create('cold_core')
      .displayName('Cold Core')
      .texture('kubejs:item/cold_core')
      .maxStackSize(1)
      .tooltip('§1Right Click to enter The Cold.')
  })
  StartupEvents.registry('item', event => {
    event.create('green_cube')
      .displayName('Green Cube')
      .texture('kubejs:item/green_cube')
      .maxStackSize(64)
      .glow(true)
      .hunger(3)
    		.saturation(6)//This value does not directly translate to saturation points gained
      		//The real value can be assumed to be:
      		//min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
      		.removeEffect('poison')
      		.alwaysEdible()//Like golden apples
      		.fastToEat()//Like dried kelp
      //.throwable() // Makes it act like a snowball
  })
  