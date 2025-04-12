// kubejs/server_scripts/teleport_logic.js

const teleportData = {};

ItemEvents.rightClicked(event => {
   const { player, item } = event;

   if (item.id != 'kubejs:cold_core') return; // Check if the item is the cold core
  if (player.level.dimension != 'moss:the_cold') {
    // Save current location before teleporting
    teleportData[player.uuid] = {
      x: player.x,
      y: player.y,
      z: player.z,
      dimension: player.level.dimension,
    };
    player.server.runCommandSilent(`execute in moss:the_cold run tp ${player.username} 0 -53 0`);
    player.server.runCommandSilent(`execute as @a unless entity @s run title @s times 20 20 20`)
    player.server.runCommandSilent(`execute as @a unless entity @s run title @s actionbar {"text":"Another Enters..","color":"green"}`)
  } else {
    const loc = teleportData[player.uuid];
    if (loc) {
      player.server.runCommandSilent(`execute in ${loc.dimension} run tp ${player.username} ${loc.x} ${loc.y} ${loc.z}`);

    } else {
      // If no previous location saved, just send to overworld spawn
      player.server.runCommandSilent(`execute in minecraft:overworld run tp ${player.username} 0 100 0`);

    }
  }

  event.cancel(); // Prevent item from swinging
});
