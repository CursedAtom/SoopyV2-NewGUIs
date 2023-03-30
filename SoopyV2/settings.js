import {
    @Vigilant,
    @SwitchProperty,
    @SelectorProperty,
    @ButtonProperty,
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
    config_configItem = true
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
}

export default new Settings();