const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// TODO Point this at wherever the BCR distribution index is actually hosted. The
// launcher cannot start until this URL serves a valid distribution.json.
exports.REMOTE_DISTRO_URL = 'https://files.blackcloverrepublic.com/launcher/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api