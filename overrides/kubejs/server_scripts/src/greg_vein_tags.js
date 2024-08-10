let gregVeinz = global.gregVeins

const addGregVeinsToTags = (event) => {
    gregVeinz.forEach((vein) => {
        event.add("tfc:in_biome/veins", 'gtceu:vein/${vein.name}')
    })
}