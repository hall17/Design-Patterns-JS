// Singleton Pattern is used when you only want a single instance of a class
// example use case is : Settings/Environmental Variables Accessor


class Settings {
    // if you call settings, you will get exact same settings instance each time
    constructor() {

        if (Settings.instance instanceof Settings) {
            return Settings.instance
        }

        this.settingsObject = {
            'background': '#ff0000',
            'version': Math.floor(Math.random() * 4000)
        }

        Object.freeze(this.settingsObject)
        Object.freeze(this)
        Settings.instance = this
    }

    get(key) {
        return this.settingsObject[key]
    }
}

const settings = new Settings()

console.log(settings.get('background'))