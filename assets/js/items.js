var ids = {
    TIRISFAL_SET: 649,
    TEMPEST_SET: 671,
    SPELLFIRE_SET: 552,
    SPELLSTRIKE_SET: 559,
    SERPENT_COIL: 30720,
    SILVER_CRESCENT: 29370,
    EYE_OF_MAGTHERIDON: 28789,
    RESTRAINED_ESSENCE: 23046,
    QUAGMIRRANS_EYE: 27683,
    UNSTABLE_CURRENTS: 30626,
    LIGHTNING_CAPACITOR: 28785,
    CHAOTIC_SKYFIRE: 34220,
    EMBER_SKYFIRE: 35503,
    INSIGHTFUL_EARTHSTORM: 25901,
    MQG: 19339,
    BLUE_DRAGON: 19288,
    RUNED_LIVING_RUBY: 24030,
    MARK_OF_DEFIANCE: 27924,
    SCRYERS_BLOODGEM: 29132,
    CRYSTAL_TALISMAN: 25620,
    PENDANT_VIOLET_EYE: 28727,
    VENGEANCE_ILLIDARI: 28040,
    ETERNAL_SAGE: 29305,
    SKULL_GULDAN: 32483,
};

var equip = {
    weapon: [
        { id: 32374, title: "Zhar'doom, Greatstaff of the Devourer", int: 47, sp: 259, crit: 36, haste: 55, twohand: true },
        { id: 30910, title: "Tempest of Chaos", int: 22, sp: 259, crit: 24, hit: 17 },
        { id: 32237, title: "The Maelstrom's Fury", int: 21, sp: 236, crit: 22 },
        { id: 30095, title: "Fang of the Leviathan", int: 20, sp: 221, crit: 21 },
        { id: 29988, title: "The Nexus Key", twohand: true, int: 52, sp: 236, crit: 51 },
        { id: 32055, title: "Merciless Gladiator's War Staff", twohand: true, int: 42, sp: 225, crit: 42, hit: 24 },
        { id: 24557, title: "Gladiator's War Staff", twohand: true, int: 35, sp: 199, crit: 36, hit: 21 },
        { id: 32053, title: "Merciless Gladiator's Spellblade", int: 18, sp: 225, hit: 15 },
        { id: 30723, title: "Talon of the Tempest", int: 10, sp: 194, crit: 19, hit: 9, sockets: ["y", "y"], bonus: { int: 3 } },
        { id: 28633, title: "Staff of Infinite Mysteries", twohand: true, int: 51, sp: 185, hit: 23 },
        { id: 28770, title: "Nathrezim Mindblade", int: 18, sp: 203, crit: 23 },
        { id: 28802, title: "Bloodmaw Magus-Blade", int: 15, sp: 203, crit: 25 },
        { id: 22589, title: "Atiesh, Greatstaff of the Guardian", twohand: true, int: 32, spi: 24, sp: 150, crit: 28, hit: 16, q: "legendary" },
        { id: 23554, title: "Eternium Runed Blade", int: 19, sp: 168, crit: 21 },
        { id: 29155, title: "Stormcaller", int: 12, sp: 159, crit: 21 },
        { id: 28935, title: "High Warlord's War Staff", int: 30, sp: 121, crit: 30, hit: 20, q: "rare" },
        { id: 28341, title: "Warpstaff of Arcanum", int: 38, sp: 121, crit: 26, hit: 16, q: "rare" },
        { id: 28188, title: "Bloodfire Greatstaff", int: 42, sp: 121, crit: 28, q: "rare" },
        { id: 27842, title: "Grand Scepter of the Nexus-Kings", int: 43, sp: 121, hit: 19, q: "rare" },
        { id: 27905, title: "Greatsword of Horrid Dreams", int: 14, sp: 130, hit: 14, q: "rare" },
        { id: 27543, title: "Starlight Dagger", int: 15, sp: 121, hit: 16, q: "rare" },
        { id: 27868, title: "Runesong Dagger", int: 11, sp: 121, crit: 20, q: "rare" },
        { id: 27512, title: "The Willbreaker", int: 14, sp: 121, crit: 17, q: "rare" },
        { id: 27899, title: "Mana Wrath", int: 18, sp: 126, q: "rare" },
        { id: 29185, title: "Continuum Blade", int: 11, sp: 121, hit: 8, q: "rare" },
    ],
    off_hand: [
        { id: 30872, title: "Chronicle of Dark Secrets", int: 12, sp: 42, crit: 23, hit: 17 },
        { id: 32361, title: "Blind-Seers Icon", int: 16, sp: 42, crit: 24 },
        { id: 30049, title: "Fathomstone", int: 12, sp: 36, crit: 23 },
        { id: 29271, title: "Talisman of Kalecgos", int: 14, sp_arcane: 50 },
        { id: 28603, title: "Talisman of Nightbane", int: 19, sp: 28, crit: 17 },
        { id: 28734, title: "Jewel of Infinite Possibilities", int: 18, sp: 23, hit: 21 },
        { id: 28781, title: "Karaborian Talisman", int: 23, sp: 35 },
        { id: 28412, title: "Lamp of Peaceful Radiance", int: 14, sp: 21, crit: 13, hit: 12, q: "rare" },
        { id: 29273, title: "Khadgar's Knapsack", sp: 49 },
        { id: 23049, title: "Sapphiron's Left Eye", ínt: 8, sp: 26, crit: 14, hit: 8 },
        { id: 31978, title: "Merciless Gladiator's Endgame", ínt: 19, sp: 33 },
        { id: 28260, title: "Manual of the Nethermancer", ínt: 15, sp: 21, crit: 19, q: "rare" },
        { id: 28187, title: "Star-Heart Lamp", ínt: 18, sp: 22, hjt: 12, q: "rare" },
    ],
    ranged: [
        { id: 29982, title: "Wand of the Forgotten Star", sp: 23, crit: 14, hit: 11 },
        { id: 32343, title: "Wand of Prismatic Focus", sp: 25, hit: 13 },
        { id: 28783, title: "Eredar Wand of Obliteration", int: 11, sp: 16, crit: 14 },
        { id: 28673, title: "Tirisfal Wand of Ascendency", int: 9, sp: 15, hit: 11 },
        { id: 29350, title: "The Black Stalk", sp: 20, crit: 11 },
        { id: 22821, title: "Doomfinger", sp: 16, crit: 14 },
        { id: 28386, title: "Nether Core's Control Rod", int: 10, sp: 13, hit: 8, q: "rare" },
        { id: 25806, title: "Nethekurse's Rod of Torment", int: 10, sp: 11, crit: 10, q: "rare" },
        { id: 25808, title: "Rod of Dire Shadows", int: 10, sp: 11, crit: 10, q: "rare" },
        { id: 32962, title: "Merciless Gladiator's Touch of Defeat", int: 13, sp: 16 },
        { id: 22820, title: "Wand of Fates", int: 7, sp: 12, hit: 8 },
    ],
    head: [
        { id: 32525, title: "Cowl of the Illidari High Lord", int: 31, sp: 64, crit: 47, hit: 21, sockets: ["m", "b"], bonus: { sp: 5 } },
        { id: 31056, itemset: ids.TEMPEST_SET, title: "Cowl of the Tempest", int: 40, spi: 28, sp: 62, crit: 29, hit: 13, sockets: ["m", "y"] },
        { id: 30206, itemset: ids.TIRISFAL_SET, title: "Cowl of Tirisfal", int: 36, spi: 24, sp: 55, crit: 24, sockets: ["m", "y"], bonus: { hit: 4 } },
        { id: 24266, itemset: ids.SPELLSTRIKE_SET, title: "Spellstrike Hood", int: 12, sp: 46, crit: 24, hit: 16, sockets: ["b", "y", "r"] },
        { id: 32494, title: "Destruction Holo-gogs", int: 24, sp: 64, crit: 29, sockets: ["m", "b"], bonus: { sp: 5 } },
        { id: 29986, title: "Cowl of the Grand Engineer", int: 27, sp: 53, crit: 35, hit: 16, sockets: ["y", "y", "b"], bonus: { sp: 5 } },
        { id: 29076, title: "Collar of the Aldor", int: 35, spi: 17, sp: 41, crit: 27, sockets: ["m", "b"], bonus: { sp: 5 } },
        { id: 28744, title: "Uni-Mind Headdress", int: 40, sp: 46, crit: 25, hit: 19 },
        { id: 33758, title: "Vengeful Gladiator's Silk Cowl", int: 23, sp: 47, crit: 23, sockets: ["m", "r"] },
        { id: 32048, title: "Merciless Gladiator's Silk Cowl", int: 26, sp: 42, crit: 20, sockets: ["m", "r"] },
        { id: 31104, title: "Evoker's Helmet of Second Sight", int: 15, spi: 8, sp: 35, crit: 24, sockets: ["b", "b", "y"], bonus: { sp: 5 } },
        { id: 23828, title: "Gnomish Power Goggles", int: 21, sp: 59, crit: 28 },
        { id: 28586, title: "Wicked Witch's Hat", int: 38, sp: 43, crit: 32 },
        { id: 32089, title: "Mana-Binders Cowl", int: 29, sp: 34, crit: 15, sockets: ["m", "y"], bonus: { sp: 5} },
        { id: 28278, title: "Incanter's Cowl", int: 27, spi: 17, sp: 29, crit: 19, sockets: ["m", "y"], bonus: { spi: 4 } },
        { id: 28415, title: "Hood of Oblivion", int: 32, sp: 40, sockets: ["m", "b"], bonus: { sp: 5 } },
        { id: 28169, title: "Mag'hari Ritualist's Horns", int: 16, sp: 50, crit: 15, hit: 12 },
        { id: 22498, title: "Frostfire Circlet", int: 23, sp: 35, crit: 35, hit: 8 },
    ],
    neck: [
        { id: 32349, title: "Translucent Spellthread Necklace", sp: 46, crit: 24, hit: 15 },
        { id: 30015, title: "The Sun King's Talisman", int: 16, sp: 41, crit: 24 },
        { id: 33920, title: "Vindicator's Pendant of Conquest", int: 15, sp: 25, crit: 21, sockets: ["y"] },
        { id: 28762, title: "Adornment of Stolen Souls", int: 20, sp: 28, crit: 23 },
        { id: 33067, title: "Veteran's Pendant of Conquest", int: 12, sp: 21, crit: 18 },
        { id: 28530, title: "Brooch of Unquenchable Fury", int: 21, sp: 26, hit: 15 },
        { id: 28134, title: "Brooch of Heightened Potential", int: 14, sp: 22, crit: 14, hit: 9, q: "rare" },
        { id: 30008, title: "Pendant of the Lost Ages", int: 17, sp: 36 },
        { id: 31692, title: "Natasha's Ember Necklace", int: 15, sp: 29, crit: 10, q: "rare" },
        { id: 29333, title: "Torc of the Sethekk Prophet", int: 18, sp: 19, crit: 21, q: "rare" },
        { id: 24462, title: "Luminous Pearls of Insight", int: 15, sp: 25, crit: 11, q: "rare" },
        { id: 21608, title: "Amulet of Vek'nilash", int: 5, sp: 27, crit: 14 },
        { id: 23057, title: "Gem of Trapped Innocents", int: 7, sp: 15, crit: 28 },
        { id: 18814, title: "Choker of the Fire Lord", int: 7, sp: 34 },
    ],
    shoulder: [
        { id: 30884, title: "Hatefury Mantle", int: 18, sp: 55, crit: 24, sockets: ["b", "y"], bonus: { crit: 3 } },
        { id: 31059, itemset: ids.TEMPEST_SET, title: "Mantle of the Tempest", int: 27, spi: 21, sp: 46, crit: 21, sockets: ["y", "b"], bonus: { sp: 4 } },
        { id: 32338, title: "Blood-cursed Shoulderpads", int: 19, sp: 55, crit: 26, hit: 18 },
        { id: 32587, title: "Mantle of Nimble Thought", int: 26, sp: 44, haste: 38 },
        { id: 30210, itemset: ids.TIRISFAL_SET, title: "Mantle of Tirisfal", int: 24, spi: 24, sp: 40, crit: 17, sockets: ["y", "b"], bonus: { sp: 4 } },
        { id: 30079, title: "Illidari Shoulderpads", int: 23, sp: 39, crit: 16, sockets: ["y", "y"], bonus: { sp: 4 } },
        { id: 30024, title: "Mantle of the Elven Kings", int: 18, spi: 17, sp: 39, crit: 25, hit: 18 },
        { id: 33757, title: "Vengeful Gladiator's Silk Amice", int: 13, sp: 40, crit: 17, sockets: ["b", "y"] },
        { id: 29079, title: "Pauldrons of the Aldor", int: 26, spi: 16, sp: 27, crit: 15, sockets: ["y", "r"], bonus: { sp: 4 } },
        { id: 32047, title: "Merciless Gladiator's Silk Amice", int: 15, sp: 36, crit: 14, sockets: ["b", "y"] },
        { id: 27796, title: "Mana-Etched Spaulders", int: 17, sp: 20, crit: 16, sockets: ["y", "r"], q: "rare" },
        { id: 28866, title: "High Warlord's Silk Amice", int: 16, sp: 25, crit: 8, sockets: ["b", "y"], q: "rare" },
        { id: 27778, title: "Spaulders of Oblivion", int: 17, sp: 29, sockets: ["b", "y"], bonus: { hit: 3 }, q: "rare" },
        { id: 30925, title: "Spaulders of the Torn-heart", int: 7, spi: 8, sp: 40, crit: 18, q: "rare" },
        { id: 22983, title: "Rime Covered Mantle", int: 12, sp: 39, crit: 14 },
    ],
    back: [
        { id: 32331, title: "Cloak of the Illidari Council", int: 16, sp: 42, crit: 25 },
        { id: 32524, title: "Shroud of the Highborne", int: 23, sp: 23, haste: 23 },
        { id: 29992, title: "Royal Cloak of the Sunstriders", int: 22, sp: 44 },
        { id: 30735, title: "Ancient Spellcloak of the Highborne", int: 15, sp: 36, crit: 19 },
        { id: 28766, title: "Ruby Drape of the Mysticant", int: 21, sp: 30, hit: 18 },
        { id: 28797, title: "Brute Cloak of the Ogre-Magi", int: 18, sp: 36 },
        { id: 23050, title: "Cloak of the Necropolis", int: 11, sp: 26, crit: 14, hit: 8 },
        { id: 28570, title: "Shadow-Cloak of Dalaran", int: 16, sp: 21, crit: 22 },
        { id: 29369, title: "Shawl of Shifting Probabilities", int: 16, sp: 21, crit: 22 },
        { id: 25777, title: "Ogre Slayer's Cover", int: 18, sp: 20, crit: 16, q: "rare" },
        { id: 27981, title: "Sethekk Oracle Cloak", int: 18, sp: 22, hit: 12, q: "rare" },
        { id: 22731, title: "Cloak of the Devoured", int: 10, sp: 30, hit: 8 },
        { id: 29813, title: "Cloak of Woven Energy", int: 13, spi: 3, sp: 29, crit: 6, q: "rare" },
    ],
    chest: [
        { id: 31057, itemset: ids.TEMPEST_SET, title: "Robes of the Tempest", int: 39, spi: 31, sp: 62, crit: 23, hit: 13, sockets: ["y", "y", "b"], bonus: { sp: 5 } },
        { id: 30196, itemset: ids.TIRISFAL_SET, title: "Robes of Tirisfal", int: 35, spi: 20, sp: 55, crit: 19, sockets: ["y", "y", "b"], bonus: { sp: 5 } },
        { id: 21848, itemset: ids.SPELLFIRE_SET, title: "Spellfire Robe", int: 17, sp_arcane: 72, sp_fire: 72, crit: 28, sockets: ["y", "b"] },
        { id: 30107, title: "Vestments of the Sea-Witch", int: 28, sp: 57, crit: 31, hit: 27, sockets: ["y", "y", "b"], bonus: { sp: 5 } },
        { id: 30913, title: "Robes of Rhonin", int: 38, sp: 81, crit: 24, hit: 27 },
        { id: 30056, title: "Robe of Hateful Echoes", int: 36, sp: 50, crit: 25, sockets: ["r", "y", "y"] },
        { id: 32327, title: "Robe of the Shadow Council", int: 36, spi: 26, sp: 73, crit: 28 },
        { id: 33760, title: "Vengeful Gladiator's Silk Raiment", int: 15, sp: 39, crit: 33, sockets: ["r", "y", "y"], bonus: { crit: 4 } },
        { id: 29077, title: "Vestments of the Aldor", int: 32, spi: 14, sp: 49, crit: 25, sockets: ["y", "b", "b"], bonus: { sp: 5 } },
        { id: 32050, title: "Merciless Gladiator's Silk Raiment", int: 21, sp: 35, crit: 30, sockets: ["r", "y", "y"], bonus: { crit: 4 } },
        { id: 29341, title: "Auchenai Anchorite's Robe", int: 24, sp: 28, hit: 23, sockets: ["y", "y", "r"], bonus: { crit: 4 }, q: "rare" },
        { id: 25856, title: "Gladiator's Silk Raiment", int: 18, sp: 32, crit: 25, sockets: ["y", "y", "r"], bonus: { crit: 4 } },
        { id: 31340, title: "Will of Edward the Odd", int: 30, sp: 53, crit: 30 },
        { id: 28342, title: "Warp Infused Drape", int: 28, sp: 30, hit: 12, sockets: ["r", "b", "y"], bonus: { crit: 4 }, q: "rare" },
        { id: 28191, title: "Mana-Etched Vestments", int: 25, sp: 29, hit: 17, sockets: ["r", "b", "y"], bonus: { sp: 4 }, q: "rare" },
        { id: 29129, title: "Anchorite's Robes", int: 38, spi: 18, sp: 29, sockets: ["y", "b", "y"], bonus: { mp5: 2 }, q: "rare" },
        { id: 28229, title: "Incanter's Robe", int: 22, spi: 22, sp: 29, crit: 8, sockets: ["y", "y", "r"], bonus: { int: 4 }, q: "rare" },
        { id: 28232, title: "Robe of Oblivion", int: 20, sp: 40, sockets: ["r", "y", "b"], q: "rare" },
        { id: 22496, title: "Frostfire Robe", int: 27, sp: 47, crit: 14, hit: 8 },
    ],
    wrist: [
        { id: 32586, title: "Bracers of Nimble Thought", int: 20, sp: 34, haste: 28 },
        { id: 30870, title: "Cuffs of Devastation", int: 20, spi: 19, sp: 34, crit: 14, sockets: ["y"] },
        { id: 32270, title: "Focused Mana Bindings", int: 20, sp: 42, hit: 19 },
        { id: 33913, title: "Vindicator's Silk Cuffs", int: 22, sp: 27, crit: 15, sockets: ["y"], bonus: { sp: 2 } },
        { id: 29918, title: "Mindstorm Wristbands", int: 13, sp: 36, crit: 23 },
        { id: 32820, title: "Veteran's Silk Cuffs", int: 18, sp: 22, crit: 14, sockets: ["y"], bonus: { sp: 2 } },
        { id: 28411, title: "General's Silk Cuffs", int: 17, sp: 20, crit: 12, sockets: ["y"], bonus: { sp: 2 } },
        { id: 24250, title: "Bracers of Havok", int: 12, sp: 30, sockets: ["y"], bonus: { sp: 2 }, q: "rare" },
        { id: 32811, title: "Veteran's Dreadweave Cuffs", int: 16, sp: 25, sockets: ["y"], bonus: { sp: 2 } },
        { id: 28515, title: "Bands of Nefarious Deeds", int: 22, sp: 32 },
        { id: 27462, title: "Crimson Bracers of Gloom", int: 18, sp: 22, hit: 12, q: "rare" },
        { id: 29240, title: "Bands of Negation", int: 22, sp: 29 },
        { id: 28174, title: "Shattrath Wraps", int: 15, sp: 21, sockets: ["r"], q: "rare" },
        { id: 28477, title: "Harbinger Bands", int: 21, spi: 14, sp: 26 },
        { id: 23021, title: "The Soul Harvester's Bindings", int: 11, sp: 21, crit: 14 },
    ],
    hands: [
        { id: 31055, itemset: ids.TEMPEST_SET, title: "Gloves of the Tempest", int: 26, spi: 21, sp: 46, crit: 19, hit: 20, sockets: ["y"], bonus: { sp: 2 } },
        { id: 30205, itemset: ids.TIRISFAL_SET, title: "Gloves of Tirisfal", int: 27, spi: 18, sp: 41, crit: 27 },
        { id: 21846, itemset: ids.SPELLFIRE_SET, title: "Spellfire Gloves", int: 10, sp_arcane: 50, sp_fire: 50, crit: 23, sockets: ["y", "b"] },
        { id: 29987, title: "Gauntlets of the Sun King", int: 29, spi: 20, sp: 42, crit: 28 },
        { id: 28780, title: "Soul-Eater's Handwraps", int: 24, sp: 36, crit: 21, sockets: ["y", "b"], bonus: { sp: 4 } },
        { id: 30725, title: "Anger-Spark Gloves", sp: 30, crit: 25, hit: 20, sockets: ["r", "r"], bonus: { crit: 3 } },
        { id: 28507, title: "Handwraps of Flowing Thought", int: 22, sp: 35, hit: 14, sockets: ["y", "b"], bonus: { hit: 3 } },
        { id: 29080, title: "Gloves of the Aldor", int: 22, spi: 19, sp: 35, crit: 19, hit: 17 },
        { id: 33759, title: "Vengeful Gladiator's Silk Handguards", int: 18, sp: 40, crit: 22 },
        { id: 27465, title: "Mana-Etched Gloves", int: 17, sp: 20, crit: 16, sockets: ["r", "y"], q: "rare" },
        { id: 29317, title: "Tempest's Touch", int: 20, spi: 6, sp: 27, sockets: ["b", "b"], bonus: { crit: 3 }, q: "rare" },
        { id: 32049, title: "Merciless Gladiator's Silk Handguards", int: 20, sp: 36, crit: 19 },
        { id: 24450, title: "Manaspark Gloves", int: 14, spi: 10, sp: 16, hit: 15, sockets: ["r", "y"], bonus: { crit: 3 }, q: "rare" },
        { id: 27493, title: "Gloves of the Deadwatcher", int: 24, sp: 29, hit: 18, q: "rare" },
        { id: 31149, title: "Gloves of Pandemonium", int: 15, sp: 25, crit: 22, hit: 10, q: "rare" },
        { id: 27508, title: "Incanter's Gloves", int: 24, spi: 12, sp: 29, crit: 14, q: "rare" },
    ],
    waist: [
        { id: 30038, title: "Belt of Blasting", sp: 50, crit: 30, hit: 23, sockets: ["b", "y"], bonus: { sp: 4 } },
        { id: 30888, title: "Anetheron's Noose", int: 23, sp: 55, crit: 24, sockets: ["y", "b"], bonus: { sp: 4 } },
        { id: 21847, itemset: ids.SPELLFIRE_SET, title: "Spellfire Belt", int: 18, sp_arcane: 50, sp_fire: 50, crit: 18, sockets: ["y", "b"] },
        { id: 30064, title: "Cord of Screaming Terrors", int: 15, sp: 50, hit: 24, sockets: ["y", "y"] },
        { id: 32256, title: "Waistwrap of Infinity", int: 22, sp: 56, haste: 32 },
        { id: 24256, title: "Girdle of Ruination", int: 13, sp: 39, crit: 20, sockets: ["r", "y"] },
        { id: 28799, title: "Belt of Divine Inspiration", int: 26, sp: 43, sockets: ["b", "y"], bonus: { sp: 4 } },
        { id: 27843, title: "Glyph-Lined Sash", int: 23, sp: 30, crit: 9, sockets: ["y", "y"], bonus: { sp: 4 }, q: "rare" },
        { id: 32807, title: "Veteran's Silk Belt", int: 27, sp: 32, crit: 27 },
        { id: 28654, title: "Malefic Girdle", int: 26, sp: 37, crit: 21 },
        { id: 31461, title: "A'dal's Gift", int: 25, sp: 34, crit: 21, q: "rare" },
        { id: 29241, title: "Belt of Depravity", int: 27, sp: 34, hit: 17 },
        { id: 24395, title: "Mindfire Waistband", int: 14, spi: 8, sp: 21, hit: 11, sockets: ["y", "b"], bonus: { hit: 3 }, q: "rare" },
        { id: 29257, title: "Sash of Arcane Visions", int: 23, spi: 19, sp: 28, crit: 22 },
        { id: 31283, title: "Sash of Sealed Fate", int: 15, sp: 35, crit: 23, q: "rare" },
        { id: 22730, title: "Eyestalk Waist Cord", int: 9, sp: 41, crit: 14 },
    ],
    legs: [
        { id: 30916, title: "Leggings of Channeled Elements", int: 28, spi: 28, sp: 59, crit: 34, hit: 18, sockets: ["y", "y", "b"], bonus: { sp: 5 } },
        { id: 31058, itemset: ids.TEMPEST_SET, title: "Leggings of the Tempest", int: 47, spi: 29, sp: 62, crit: 29, hit: 20, sockets: ["b"], bonus: { hit: 2 } },
        { id: 32367, title: "Leggings of Devastation", int: 42, sp: 60, hit: 26, sockets: ["y", "y", "b"], bonus: { sp: 5 } },
        { id: 30207, itemset: ids.TIRISFAL_SET, title: "Leggings of Tirisfal", int: 36, spi: 26, sp: 54, crit: 17, hit: 26, sockets: ["y"], bonus: { hit: 2 } },
        { id: 24262, itemset: ids.SPELLSTRIKE_SET, title: "Spellstrike Pants", int: 8, sp: 46, crit: 26, hit: 22, sockets: ["b", "y", "r"] },
        { id: 30734, title: "Leggings of the Seventh Circle", int: 22, sp: 50, crit: 25, hit: 18, sockets: ["r", "y", "y"], bonus: { sp: 5 } },
        { id: 29972, title: "Trousers of the Astromancer", int: 36, spi: 22, sp: 54, sockets: ["b", "y", "b"], bonus: { sp: 5 } },
        { id: 28594, title: "Trial-Fire Trousers", int: 40, sp: 49, sockets: ["y", "y", "y"], bonus: { sp: 5 } },
        { id: 30531, title: "Breeches of the Occultist", int: 22, sp: 36, crit: 23, sockets: ["b", "y", "y"], bonus: { sp: 5 } },
        { id: 29078, title: "Legwraps of the Aldor", int: 40, spi: 23, sp: 49, hit: 24 },
        { id: 30532, title: "Kirin Tor Master's Trousers", int: 29, spi: 25, sp: 36, sockets: ["r", "y", "b"], bonus: { hit: 4 } },
        { id: 32051, title: "Merciless Gladiator's Silk Trousers", int: 36, sp: 49, crit: 29 },
        { id: 28212, title: "Aran's Sorcerous Slacks", int: 28, sp: 23, crit: 21, sockets: ["r", "y", "b"], bonus: { sp : 5 }, q: "rare" },
        { id: 28185, title: "Khadgar's Kilt of Abjuration", int: 22, spi: 15, sp: 36, sockets: ["y", "b", "b"], bonus: { sp: 5 }, q: "rare" },
        { id: 24263, title: "Battlecast Pants", int: 27, sp: 46, sockets: ["r", "b"], bonus: { crit: 3 } },
        { id: 30709, title: "Pantaloons of Flaming Wrath", int: 28, sp: 33, crit: 42, q: "rare" },
        { id: 28338, title: "Devil-Stitched Leggings", int: 28, sp: 29, sockets: ["r", "y", "b"], bonus: { sp: 5 }, q: "rare" },
        { id: 27838, title: "Incanter's Trousers", int: 30, spi: 17, sp: 42, crit: 18, q: "rare" },
    ],
    feet: [
        { id: 32239, title: "Slippers of the Seacaller", int: 18, spi: 18, sp: 44, crit: 29, sockets: ["y", "b"], bonus: { sp: 4 } },
        { id: 30894, title: "Blue Suede Shoes", int: 32, sp: 56, hit: 18 },
        { id: 30067, title: "Velvet Boots of the Guardian", int: 21, sp: 49, crit: 24 },
        { id: 30037, title: "Boots of Blasting", int: 25, sp: 39, crit: 25, hit: 18 },
        { id: 28517, title: "Boots of Foretelling", int: 23, sp: 26, crit: 19, sockets: ["r", "y"], bonus: { int: 3 } },
        { id: 32795, title: "Veteran's Silk Footguards", int: 27, sp: 32, crit: 27 },
        { id: 28406, title: "Sigil-Laced Boots", int: 18, sp: 20, crit: 17, sockets: ["r", "y"], bonus: { int: 3 }, q: "rare" },
        { id: 28585, title: "Ruby Slippers", int: 29, sp: 35, hit: 16 },
        { id: 32787, title: "Veteran's Dreadweave Stalkers", int: 30, sp: 36 },
        { id: 29242, title: "Boots of Blasphemy", int: 29, sp: 36 },
        { id: 27848, title: "Embroidered Spellpyre Boots", int: 21, sp: 41, q: "rare" },
        { id: 29258, title: "Boots of Ethereal Manipulation", int: 27, spi: 21, sp: 33 },
        { id: 25957, title: "Ethereal Boots of the Skystrider", int: 19, spi: 12, sp: 26, crit: 17, q: "rare" },
        { id: 22500, title: "Frostfire Sandals", int: 18, spi: 10, sp: 28, crit: 14 },
        { id: 28179, title: "Shattrath Jumpers", int: 17, sp: 29, sockets: ["b", "y"], bonus: { int: 3 }, q: "rare" },
        { id: 28410, title: "General's Silk Footguards", int: 23, sp: 28, crit: 24 },
        { id: 27821, title: "Extravagant Boots of Malice", int: 24, sp: 30, hit: 14, q: "rare" },
        { id: 28670, title: "Boots of the Infernal Coven", int: 27, spi: 23, sp: 34 },
    ],
    finger: [
        { id: 32527, title: "Ring of Ancient Knowledge", int: 20, sp: 39, haste: 31 },
        { id: 32247, title: "Ring of Captured Storms", sp: 42, crit: 29, hit: 19 },
        { id: ids.ETERNAL_SAGE, title: "Band of the Eternal Sage", int: 25, sp: 34, crit: 24 },
        { id: 29287, title: "Violet Signet of the Archmage", int: 23, sp: 29, crit: 17 },
        { id: 28753, title: "Ring of Recurrence", int: 19, sp: 32, crit: 19 },
        { id: 28793, title: "Band of Crimson Fury", int: 22, sp: 28, hit: 16 },
        { id: 29286, title: "Violet Signet", int: 22, sp: 28, crit: 17 },
        { id: 30109, title: "Ring of Endless Coils", sp: 37, crit: 22 },
        { id: 29922, title: "Band of Al'ar", int: 23, sp: 37 },
        { id: 28227, title: "Sparking Arcanite Ring", int: 14, sp: 22, crit: 14, hit: 10, q: "rare" },
        { id: 21709, title: "Ring of the Fallen God", int: 6, sp: 37, hit: 8 },
        { id: 23062, title: "Frostfire Ring", int: 10, sp: 30, crit: 14 },
        { id: 29367, title: "Ring of Cryptic Dreams", int: 17, sp: 23, crit: 20 },
        { id: 29352, title: "Cobalt Band of Tyrigosa", int: 17, sp: 35 },
        { id: 31075, title: "Evoker's Mark of the Redemption", int: 15, sp: 29, crit: 10, q: "rare" },
        { id: 30366, title: "Manastorm Band", int: 15, sp: 29, crit: 10, q: "rare" },
        { id: 28510, title: "Spectral Band of Innervation", int: 24, sp: 29 },
        { id: 28394, title: "Ryngo's Band of Ingenuity", int: 14, sp: 25, crit: 14, q: "rare" },
        { id: 31290, title: "Band of Dominion", sp: 28, crit: 21, q: "rare" },
        { id: 27784, title: "Scintillating Coral Band", int: 15, sp: 21, crit: 17, q: "rare" },
        { id: 29126, title: "Seer's Signet", sp: 34, crit: 12 },
        { id: 23031, title: "Band of the Inevitable", sp: 36, hit: 8 },
        { id: 29320, title: "Band of the Guardian", int: 11, sp: 23, crit: 17, q: "rare" },
    ],
    trinket: [
        { id: ids.SKULL_GULDAN, title: "The Skull of Gul'dan", sp: 55, hit: 25, use: true },
        { id: ids.UNSTABLE_CURRENTS, title: "Sextant of Unstable Currents", crit: 40 },
        { id: ids.QUAGMIRRANS_EYE, title: "Quagmirran's Eye", sp: 37, q: "rare" },
        { id: ids.SERPENT_COIL, title: "Serpent-Coil Braid", crit: 30, hit: 12 },
        { id: ids.SILVER_CRESCENT, title: "Icon of the Silver Crescent", sp: 43, use: true },
        { id: 19379, title: "Neltharion's Tear", sp: 44, hit: 16 },
        { id: ids.EYE_OF_MAGTHERIDON, title: "Eye of Magtheridon", sp: 54 },
        { id: ids.RESTRAINED_ESSENCE, title: "The Restrained Essence of Sapphiron", sp: 40, use: true },
        { id: ids.LIGHTNING_CAPACITOR, title: "The Lightning Capacitor" },
        { id: 34579, title: "Battlemaster's Audacity", sp: 47 },
        { id: ids.MQG, title: "Mind Quickening Gem", use: true },
        { id: ids.BLUE_DRAGON, title: "Darkmoon Card: Blue Dragon" },
        { id: 26055, title: "Oculus of the Hidden Eye", sp: 33, q: "rare" },
        { id: ids.MARK_OF_DEFIANCE, title: "Mark of Defiance", sp: 32, q: "rare" },
        { id: ids.SCRYERS_BLOODGEM, title: "Scryer's Bloodgem", hit: 32, use: true, q: "rare" },
        { id: 12930, title: "Briarwood Reed", sp: 29, q: "rare" },
        { id: ids.CRYSTAL_TALISMAN, title: "Ancient Crystal Talisman", sp: 26, use: true, q: "uncommon" },
        { id: ids.PENDANT_VIOLET_EYE, title: "Pendant of the Violet Eye", use: true },
        { id: ids.VENGEANCE_ILLIDARI, title: "Vengeance of the Illidari", crit: 26, use: true, q: "rare" },
    ],
};

var gems = [
    { id: ids.CHAOTIC_SKYFIRE, title: "Chaotic Skyfire Diamond", color: "m", crit: 12, desc: "+3% crit dmg" },
    { id: ids.EMBER_SKYFIRE, title: "Ember Skyfire Diamond", color: "m", sp: 14, desc: "+2% int" },
    { id: ids.INSIGHTFUL_EARTHSTORM, title: "Insightful Earthstorm Diamond", color: "m", int: 12, desc: "Chance to restore mana" },
    { id: 25890, title: "Destructive Skyfire Diamond", color: "m", sp: 14, desc: "1% Spell reflect" },
    { id: 32641, title: "Imbued Unstable Diamond", color: "m", sp: 14, desc: "5% stun resist" },
    { id: 28557, title: "Swift Skyfire Diamond", color: "m", sp: 12, desc: "Minor run speed" },
    { id: 33133, title: "Don Julio's Heart", color: "r", sp: 14, unique: true },
    { id: 28118, title: "Runed Ornate Ruby", color: "r", sp: 12, unique: true },
    { id: 32196, title: "Runed Crimson Spinel", color: "r", sp: 12 },
    { id: ids.RUNED_LIVING_RUBY, title: "Runed Living Ruby", color: "r", sp: 9 },
    { id: 32221, title: "Veiled Pyrestone", color: "o", sp: 6, hit: 5 },
    { id: 32218, title: "Potent Pyrestone", color: "o", sp: 6, crit: 5 },
    { id: 30551, title: "Infused Fire Opal", color: "o", int: 4, sp: 6 },
    { id: 30564, title: "Shining Fire Opal", color: "o", sp: 6, hit: 5 },
    { id: 30588, title: "Potent Fire Opal", color: "o", sp: 6, crit: 4 },
    { id: 28123, title: "Potent Ornate Topaz", color: "o", sp: 6, crit: 5, unique: true },
    { id: 31867, title: "Veiled Noble Topaz", color: "o", sp: 5, hit: 4 },
    { id: 24059, title: "Potent Noble Topaz", color: "o", sp: 5, crit: 4 },
    { id: 32638, title: "Unstable Topaz", color: "o", sp: 5, int: 4, unique: true },
    { id: 33140, title: "Blood of Amber", color: "y", crit: 12, unique: true },
    { id: 32210, title: "Great Lionseye", color: "y", hit: 10 },
    { id: 32207, title: "Gleaming Lionseye", color: "y", crit: 10 },
    { id: 28120, title: "Gleaming Ornate Dawnstone", color: "y", crit: 10, unique: true },
    { id: 31861, title: "Great Dawnstone", color: "y", hit: 8 },
    { id: 24050, title: "Gleaming Dawnstone", color: "y", crit: 8 },
    { id: 24047, title: "Brilliant Dawnstone", color: "y", int: 8 },
    { id: 30600, title: "Fluorescent Tanzanite", color: "p", spi: 4, sp: 6 },
    { id: 30555, title: "Glowing Tanzanite", color: "p", sp: 6 },
    { id: 24056, title: "Glowing Nightseye", color: "p", sp: 5 },
];

var enchants = {
    weapon: [
        { id: 46540, title: "Sunfire", sp_arcane: 50, sp_fire: 50 },
        { id: 46533, title: "Major Spellpower", sp: 40 },
    ],
    head: [
        { id: 35447, title: "Glyph of Power", sp: 22, hit: 14 },
        { id: 24164, title: "Presence of Sight", sp: 18, hit: 8, q: "rare" },
    ],
    shoulder: [
        { id: 35406, title: "Greater Inscription of Discipline (Aldor)", sp: 18, crit: 10, q: "rare" },
        { id: 35437, title: "Greater Inscription of the Orb (Scryer)", sp: 15, crit: 12, q: "rare" },
        { id: 29467, title: "Power of the Scourge", sp: 15, crit: 14, q: "epic" },
        { id: 35405, title: "Inscription of the Orb (Aldor)", sp: 15 },
        { id: 35436, title: "Inscription of the Orb (Scryer)", crit: 13 },
    ],
    chest: [
        { id: 46502, title: "Exceptional Stats", int: 6, spi: 6 },
        { id: 46504, title: "Major Spirit", spi: 15 },
    ],
    wrist: [
        { id: 46498, title: "Spellpower", sp: 15 },
        { id: 46496, title: "Major Intellect", int: 12 },
        { id: 46497, title: "Restore Mana Prime", mp5: 6 },
    ],
    hands: [
        { id: 46514, title: "Major Spellpower", sp: 20 },
        { id: 46516, title: "Spell Strike", hit: 15 },
        { id: 46512, title: "Blasting", crit: 10 },
    ],
    legs: [
        { id: 31372, title: "Runic Spellthread", sp: 35, q: "epic" },
        { id: 31371, title: "Mystic Spellthread", sp: 25, q: "rare" },
        { id: 24164, title: "Presence of Sight", sp: 18, hit: 8, q: "epic" },
    ],
    feet: [
        { id: 46470, title: "Boar's Speed", q: "rare" },
        { id: 32399, title: "Magister's Armor Kit", mp5: 3, q: "common" },
        { id: 20024, title: "Spirit", spi: 5 },
    ],
    finger: [
        { id: 46518, title: "Spellpower", sp: 12 },
    ],
};

var quicksets = {
    t5bis: {
        title: "T5 All-round",
        equip: {
            weapon: 30095,
            off_hand: 30049,
            ranged: 29982,
            head: 30206,
            neck: 30015,
            shoulder: 30210,
            back: 29992,
            chest: 30196,
            wrist: 29918,
            hands: 29987,
            waist: 30038,
            legs: 30207,
            feet: 30067,
            finger1: 29287,
            finger2: 28753,
            trinket1: 27683,
            trinket2: 30626,
        },
        enchants: {
            weapon: 46540,
            head: 35447,
            shoulder: 35406,
            chest: 46502,
            wrist: 46498,
            hands: 46514,
            legs: 31372,
            feet: 46470,
            finger1: 46518,
            finger2: 46518,
        },
        gems: {
            back: [ null, null, null ],
            chest: [ 30551, 30551, 30600 ],
            feet: [ null, null, null ],
            hands: [ null, null, null ],
            head: [ 25901, 30551, null ],
            legs: [ 28123, null, null ],
            shoulder: [ 30551, 30600, null ],
            waist: [ 30600, 32638, null ],
            weapon: [ null, null, null ],
            wrist: [ null, null, null ],
        }
    },
    t4sf: {
        title: "T4 Spellfire",
        equip: {
            back: 30735,
            chest: 21848,
            feet: 28517,
            finger1: 29287,
            finger2: 28753,
            hands: 21846,
            head: 29076,
            legs: 29078,
            neck: 28762,
            off_hand: 28734,
            ranged: 28673,
            shoulder: 29079,
            trinket1: 27683,
            trinket2: 29370,
            waist: 21847,
            weapon: 28770,
            wrist: 28411
        },
        enchants: {
            back: null,
            chest: 46502,
            feet: 46470,
            finger1: 46518,
            finger2: 46518,
            hands: 46514,
            head: 35447,
            legs: 31372,
            main_hand: 27891,
            shoulder: 35406,
            weapon: 46540,
            wrist: 46498
        },
        gems: {
            back: [ null, null, null ],
            chest: [ 30551, 30551, null ],
            feet: [ 30551, 30551, null ],
            hands: [ 30551, 30551, null ],
            head: [ 25901, 30600, null ],
            legs: [ null, null, null ],
            shoulder: [ 30551, 24030, null ],
            waist: [ 30551, 30551, null ],
            weapon: [ null, null, null ],
            wrist: [ 30551, null, null ],
        }
    },
    spsf: {
        title: "Spellstrike + Spellfire",
        equip: {
            back: 30735,
            chest: 21848,
            feet: 28517,
            finger1: 29287,
            finger2: 28753,
            hands: 21846,
            head: 24266,
            legs: 24262,
            neck: 28762,
            off_hand: 28734,
            ranged: 28783,
            shoulder: 29079,
            trinket1: 27683,
            trinket2: 29370,
            waist: 21847,
            weapon: 28770,
            wrist: 28411,
        },
        enchants: {
            back: null,
            chest: 46502,
            feet: 46470,
            finger1: 46518,
            finger2: 46518,
            hands: 46514,
            head: 35447,
            legs: 31372,
            shoulder: 35406,
            weapon: 46540,
            wrist: 46498,
        },
        gems: {
            back: [ null, null, null ],
            chest: [ 24030, 24030, null ],
            feet: [ 30551, 30551, null ],
            hands: [ 30551, 30551, null ],
            head: [ 30551, 28118, 33133 ],
            legs: [ 30551, 30551, 30551 ],
            shoulder: [ 30551, 24030, null ],
            waist: [ 30551, 30551, null ],
            weapon: [ null, null, null ],
            wrist: [ 24030, null, null ],
        }
    }
};

export default { ids, equip, gems, enchants, quicksets };