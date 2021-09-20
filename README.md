# Character Creator

# Bootstrapper Development Notes

## Overview

In general, we are creating something like this: https://readyplayer.me/avatar

This character creator will be made in a modular fashion with the following structure:

* React UI Front-End
* Three.JS Display and Editor
* Back-End Processing Modules
  * Texture Baker
* Plugins
  * MSA Module
    * Player Stats Module (generates a player look and stats based on varying factors involving rarity)
    * Player Name Functionality (gets a random player name)
    * NFT Module & Service (...)

### React UI Front-End

#### Overall Requirements
* The UI must have dynamic controls and inputs defined by passed in parameters. This is to allow for different rigs as well as modules to offer different options.

#### Reference

Examples:

https://www.google.com/search?q=apb+character+creator&tbm=isch&ved=2ahUKEwiW8d-ejY3zAhVQ61MKHbtnDcAQ2-cCegQIABAA&oq=apb+character+creator&gs_lcp=CgNpbWcQAzoECAAQQzoFCAAQgAQ6CAgAELEDEIMBOggIABCABBCxAzoGCAAQCBAeOgQIABAYOgYIABAKEBhQy_8BWPONAmDYjgJoAHAAeACAAVSIAegKkgECMjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=LkJIYZaiFtDWzwK7z7WADA&bih=955&biw=1920&client=firefox-b-1-d

https://www.google.com/search?q=sansar+character+creator&client=firefox-b-1-d&channel=cus5&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-hKK2jY3zAhUCQTABHcOwArsQ_AUoAnoECAEQBA&biw=1920&bih=955&dpr=1

### Three.JS Display and Editor

...

### Back-End Processing Modules

...
