import {
    @Vigilant,
    @SwitchProperty,
    @SelectorProperty,
    @ButtonProperty,
    @TextProperty,
    Color 
} from 'Vigilance';


@Vigilant("SoopyV2", "§6Soopy Settings", {
    getCategoryComparator: () => (a, b) => {
        const categories = [
        "Bestiary",
        "BetterGuis",
        "Change Log",
        "Cosmetics",
        "Dungeon Solvers",
        "Events",
        "Frag Bot",
        "Friends",
        "Global Settings",
        "Guild",
        "Hud",
        "Locked Features",
        "Minings",
        "Special Mining",
        "Nether",
        "Networth",
        "Senither",
        "rngMeter",
        "Slayers",
        "Spam Hider",
        "Stat Next To Name",
        "Stats History",
        "Streams",
        "Suggestions",
        "Waypoints"
    
    ];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class Settings {
    constructor() {
        this.initialize(this);
    }
    // Bestiary
    @SwitchProperty({
        name: "Main Toggle",
        description: "Enable the Category",
        category: "Bestiary",
        subcategory: "Bestiary"
    })
    config_bestiary_mainToggle = true;

        @SwitchProperty({
            name: "Box Around Bestiary Mobs",
            description: "",
            category: "Bestiary",
            subcategory: "Bestiary"
        })
        config_bestiary_boxAroundMobsToggle = true;

        @SwitchProperty({
            name: "Bestiary Slot #1",
            description: "Allows you to render a custom bestiary kills on your Hud",
            category: "Bestiary",
            subcategory: "Bestiary"
        })
        config_bestiary_slot1Toggle = true;
        
        @SelectorProperty({
            name: "Bestiary Slot #1 Type",
            description: "Mob for the bestiary slot",
            category: "Bestiary",
            subcategory: "Bestiary",
            options: ["Barbarian Duke X"]
        })
        config_bestiary_slot1MobTypeDropdown = 0;

        @ButtonProperty({
            name: "Bestiary Slot #1 Location",
            description: "Allows you to edit the location of the bestiary stat",
            category: "Bestiary",
            subcategory: "Bestiary",
            placeholder: "Move"
        })
        config_bestiary_slot1Move = true; /**@todo change this later, crashes game */

        @SwitchProperty({
            name: "Bestiary Slot #2",
            description: "Allows you to render a custom bestiary kills on your Hud",
            category: "Bestiary",
            subcategory: "Bestiary"
        })
        config_bestiary_slot2Toggle = true;
        
        @SelectorProperty({
            name: "Bestiary Slot #2 Type",
            description: "Mob for the bestiary slot",
            category: "Bestiary",
            subcategory: "Bestiary",
            options: ["Barbarian Duke X"]
        })
        config_bestiary_slot2MobTypeDropdown = 0;

        @ButtonProperty({
            name: "Bestiary Slot #2 Location",
            description: "Allows you to edit the location of the bestiary stat",
            category: "Bestiary",
            subcategory: "Bestiary",
            placeholder: "Move"
        })
        config_bestiary_slot2Move = true; /**@todo change this later, crashes game */

        //End Bestiary

    //BetterGUIS
    @SwitchProperty({
        name: "Main Toggle",
        description: "Enable the Category",
        category: "BetterGuis",
        subcategory: "BetterGuis"
    })
    config_betterGuis_MainToggle = true;

        @SwitchProperty({
            name: "Improve Clicks in SB Menu",
            description: "Changes clicks to middle clicks AND uses some commands (eg. /pets, /wardrobe)",
            category: "BetterGuis",
            subcategory: "BetterGuis"
        })
        config_betterGuis_ImproveClicks = true;

        @SwitchProperty({
            name: "Custom Museum GUI",
            description: "Custom GUI for the Museum",
            category: "BetterGuis",
            subcategory: "BetterGuis"
        })
        config_betterGuis_CustomMuseum = true;

        @SwitchProperty({
            name: "Custom Dungeon Ready-Up GUI",
            description: "Custom GUI for the dungeon ready-up menu",
            category: "BetterGuis",
            subcategory: "BetterGuis"
        })
        config_betterGuis_customReadyUp = true;

        @SwitchProperty({
            name: "Inventory Search Bar",
            description: "Use & to filter by multiple parameters",
            category: "BetterGuis",
            subcategory: "BetterGuis"
        })
        config_betterGuis_inventorySearch = true;

        @SwitchProperty({
            name: "Custom HP and Mana bar",
            description: "WARNING: must disable the \"Hide Food & Armor Bar\"",
            category: "BetterGuis",
            subcategory: "BetterGuis"
        })
        config_betterGuis_customHpMana = true;

        // End BetterGUIs
    
    // Change Log

    // Cosmetics
    @SwitchProperty({
        name: "Main Toggle",
        description: "NOTE: Only some players have this",
        category: "Cosmetics",
        subcategory: "Cosmetics"
    })
    config_cosmetics_mainToggle = true;

        @SwitchProperty({
            name: "Cosmetics Visible in First Person",
            description: "",
            category: "Cosmetics",
            subcategory: "Cosmetics"
        })
        config_cosmetics_visibleFirstPerson = true;

        @SwitchProperty({
            name: "Audio for own Cosmetics",
            description: "",
            category: "Cosmetics",
            subcategory: "Cosmetics"
        })
        config_cosmetics_audio = true;

        @SwitchProperty({
            name: "Dragon Wings Toggle",
            description: "",
            category: "Cosmetics",
            subcategory: "Cosmetics"
        })
        config_cosmetics_dragonWingsToggle = true;

        // End Cosmetics

    //Dungeon Solvers
    @SwitchProperty({
        name: "Main Toggle",
        description: "Enable the Category",
        category: "Dungeon Solvers",
        subcategory: "Dungeon Solvers"
    })
    config_dungeonSolvers_mainToggle = true;

        @SwitchProperty({
            name: "Correct Livid Finder",
            description: "Finds the correct livid to kill on f5/m5",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_lividFinder = true;

        @SwitchProperty({
            name: "Show Livid HP",
            description: "Renders the HP of the correct livid on screen",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_showLividHp = true;

        @ButtonProperty({
            name: "Move Livid HP Hud Element",
            description: "Allows you to edit the location of the correct livid hp text",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers",
            placeholder: "Move"
        })
        config_dungeonSolvers_moveLividHp = true; /**@todo change this later, crashes game */

        @SwitchProperty({
            name: "Box Around Correct Livid",
            description: "Helps to locate it within the group",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_boxAroundLivid = true;

        @SwitchProperty({
            name: "Hide Nametags of Incorrect Livids",
            description: "Helps to locate it within the group",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_hideIncorrectLividNametags = true;

        @SwitchProperty({
            name: "Timer for Spirit Bow Self Destruct",
            description: "",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_spiritBowTimer = true;

        @ButtonProperty({
            name: "Move Spirit Bow Self Destruct Hud Element",
            description: "Allows you to edit the location of the timer",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers",
            placeholder: "Move"
        })
        config_dungeonSolvers_moveSpiritBowTimer = true; /**@todo change this later, crashes game */

        @SwitchProperty({
            name: "Timer for Spirit Bear Spawn",
            description: "",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_spiritBearSpawnTimer = true;

        @ButtonProperty({
            name: "Move Timer for Spirit Bear Spawn Hud Element",
            description: "Allows you to edit the location of the timer",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers",
            placeholder: "Move"
        })
        config_dungeonSolvers_moveSpiritBearSpawnTimer = true; /**@todo change this later, crashes game */

        @SwitchProperty({
            name: "Timer for Fire Freeze Staff on f3/m3",
            description: "",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_fireFreezeTimer = true;

        @ButtonProperty({
            name: "Move Timer for Fire Freeze Staff",
            description: "Allows you to edit the location of the timer",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers",
            placeholder: "Move"
        })
        config_dungeonSolvers_moveFireFreezeTimer = true; /**@todo change this later, crashes game */

        @SwitchProperty({
            name: "Assist Blood Camp",
            description: "Renders a guess for the blood mob spawn location",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_assistBloodCamp = true;

        @SwitchProperty({
            name: "Show Run Speed and EXP rates",
            description: "Includes downtime between runs, only visible after completing at least 1 run",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_showRunSpeed = true;

        @ButtonProperty({
            name: "Move Run Speed and EXP Rates Hud Element",
            description: "Allows you to edit the location of the information",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers",
            placeholder: "Move"
        })
        config_dungeonSolvers_moveShowRunSpeed = true; /**@todo change this later, crashes game */

        @SwitchProperty({
            name: "Show Score Calculation",
            description: "",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_showScoreCalc = true;

        @ButtonProperty({
            name: "Move Score Calculation Hud Element",
            description: "Allows you to edit the location of the information",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers",
            placeholder: "Move"
        })
        config_dungeonSolvers_moveShowScoreCalc = true; /**@todo change this later, crashes game */

        @SwitchProperty({
            name: "Blaze Puzzle Solver",
            description: "Shows the correct order for the \"Higher or Lower\" puzzle",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_blazeSolver = true;

        @SwitchProperty({
            name: "Terracotta Respawn Timer",
            description: "",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_terracottaRespawn = true;

        @SwitchProperty({
            name: "Timer for Bonzo/Spirit Mask Cooldown",
            description: "Renders cooldown for Bonzo and Spirit mask",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_maskCooldown = true;

        @ButtonProperty({
            name: "Move Bonzo/Spirit Mask Cooldown Timer",
            description: "Allows you to edit the location of the timer",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers",
            placeholder: "Move"
        })
        config_dungeonSolvers_moveMaskCooldown = true; /**@todo change this later, crashes game */

        @SwitchProperty({
            name: "Spirit Mask Timer OUTSIDE Dungeons",
            description: "Render the timer for Spirit mask even when not in a dungeon",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_spiritMaskOutside = true;

        @SwitchProperty({
            name: "Bonzo Mask Proc'ed Alert",
            description: "Show a message on screen when Bonzo Mask is used",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_bonzoMaskUsedAlert = true;

        @TextProperty({
            name: "Message Shown on Bonzo Mask Used",
            description: "",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers",
            placeholder: "Bonzo Mask Used"
        })
        config_dungeonSolvers_bonzoMaskUsedMessage = "";

        @SwitchProperty({
            name: "Spirit Mask Proc'ed Alert",
            description: "Show a message on screen when Spirit Mask is used",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_spiritMaskUsedAlert = true;

        @TextProperty({
            name: "Message Shown on Spirit Mask Used",
            description: "",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers",
            placeholder: "Spirit Mask Used"
        })
        config_dungeonSolvers_spiritMaskUsedMessage = "";

        @SwitchProperty({
            name: "Change Withermancer Death Message to \"Forgor\"",
            description: "",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_withermancerForgor = true;

        @SwitchProperty({
            name: "Terminal, Device, and Lever Waypoints for f7/m7",
            description: "Hides waypoint if the terminal/device/lever is finished",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_f7Waypoints = true;

        @SwitchProperty({
            name: "Show how many terms/devices people did",
            description: "Shows at end of p3",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_showTermsCompleted = true;

        @SwitchProperty({
            name: "Ice Spray Drop Ping",
            description: "Renders a large title so you don't miss ice sprays",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_iceSprayPing = true;

        @SwitchProperty({
            name: "Guardian HP for f3/m3",
            description: "Enlarges the HP of guardians on f3/m3",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_guardianHp = true;

        @SwitchProperty({
            name: "Stair Stonk Helper",
            description: "Renders a red line on stonkable blocks",
            category: "Dungeon Solvers",
            subcategory: "Dungeon Solvers"
        })
        config_dungeonSolvers_stonkHelper = true;

        // End Dungeon Solvers

    // Events
    @SwitchProperty({
        name: "Main Toggle",
        description: "Enable the Category",
        category: "Events",
        subcategory: "Events"

    })
    config_events_mainToggle = true

        @SwitchProperty({
            name: "",
            description: "",
            category: "Events",
            subcategory: "Events",
        })
        config_events_ = true;

}

export default new Settings();

/*
    @ButtonProperty({
        name: "",
        description: "",
        category: "",
        subcategory: "",
        placeholder: ""
    })
    action() {
        ChatLib.command("", true);
    }
    Buttons, mostly for moving GUI elements
    
    @SwitchProperty({
        name: "",
        description: "",
        category: "",
        subcategory: ""

    })
    config_configItem = true;
    Switches, mostly for toggles

    @SelectorProperty({
        name: "",
        description: "",
        category: "",
        subcategory: "",
        options: ["","","","","","","","","","","","","",""]
    })
    config_configItem = int;
    Dropdown menus
    */