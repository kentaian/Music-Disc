/**
 * @type {import('./src/@types/index.js').Config} - Bot config
 */
const config = {
    // Lavalink node list
    nodeList: [
        {
            id: 'Singapore Horizxon',
            hostname: 'lava1.horizxon.studio',
            port: 80,
            password: 'horizxon.studio'
        },
        {
            id: 'Singapore NyxBot 2',
            hostname: 'sg2-nodelink.nyxbot.app',
            port: 3000,
            password: 'nyxbot.app/support'
        },
        {
            id: 'Global Jirayu',
            hostname: 'lavalink.jirayu.net',
            port: 13592,
            password: 'youshallnotpass'
        }
    ],

    spotify: {
        clientId: 'ef5e97b3b86d4faf8d9bc6c0b5e56fbc',               // If you want to use Spotify to play songs, you need to set up Spotify credentials.
        clientSecret: '34bca4a43f0446f1af069e5eec93a27c'            // https://developer.spotify.com/documentation/web-api
    },

    bot: {
        textCommand             : true,                 // Whether to enable text command
        slashCommand            : true,                 // Whether to enable slash command

        // OAUTH2 mode requires setting 'admin', 'clientSecret' value
        admin                   : ['636022477797064727'],                   // Admin users, It must be the user ID (string[])

        /**
         * DYNAMIC mode: The first user to execute a command becomes the DJ
         * STATIC mode: The DJ is determined by the config file
         */
        djMode                  : 'DYNAMIC',            // DJ mode: 'STATIC' (config.js based) or 'DYNAMIC' (first user to execute command based)
        dj                      : [],                   // DJ users, It must be the user ID (string[])
        djRoleId                : '1521205232653177063',                   // DJ role ID, members with this role have DJ permissions (string)
        djLeave: {
            mode: 'PLAY',       // 'PLAY' = next DJ on successful /play; 'COOLDOWN' = auto-assign after cooldown
            cooldown: 5000,     // Cooldown in ms, only used in COOLDOWN mode (default: 5000ms)
        },

        clientSecret            : '',

        name                    : 'Music Disc',
        prefix                  : '+',                  // Text command prefix
        status                  : 'idle',             // 'online' | 'idle' | 'dnd'
        activity: {
            type                : 1,                    // https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-types
            name                : 'music you might like',
            // state               : '',
            url                 : 'https://twitch.tv/nocopyrightsounds',                // The streaming type currently only supports Twitch and YouTube. Only https://twitch.tv/ and https://youtube.com/ urls will work.
        },
        embedsColors: {
            message             : '#ec6c06',            // Message embed color
            success             : '#ec6c06',            // Success embed color
            error               : '#FF0000',            // Error embed color
            warning             : '#FFFF00',            // Warning embed color
        },
        volume: {
            default             : 100,
            max                 : 200,
        },
        // Auto leave channel settings
        autoLeave: {
            enabled             : false,
            cooldown            : 5000,         // ms
        },

        // Show voice channel updates
        displayVoiceState       : true,

        // Specify the text channel for receiving commands.
        // If this value is set, text messages from other channels will not be processed.
        specifyMessageChannel   : '',           // Text channel ID

        // Specify the voice channel to join.
        // If this value is set, other voice channels will not be joined.
        specifyVoiceChannel     : '',           // Vioce channel ID

        // After starting the Bot, it will automatically join the specified voice channel and wait.
        // The specifyVoiceChannel value needs to be set, otherwise it will be invalid.
        startupAutoJoin         : false,

        // Language settings
        i18n: {
            localePath          : '../../locales',
            defaultLocale       : 'en-US'
        },

        // Max queued songs per user settings
        maxQueuedSongs: {
            enabled             : true,         // Enable/disable this feature
            global              : 100,          // Global maximum queue size for the bot (absolute limit)
            default             : 5,            // Default limit for users without special roles
            djs                 : 10,           // Limit for DJ role users
            roles: {                            // Custom limits per role ID
                // "123456789012345678": 10,
                // "987654321098765432": 20,
            }
        },

        // Fair queue rotation (round-robin)
        fairQueue               : false,        // When enabled, rotates queue to play songs from different users in turn

        // Voice channel status emojis (standard or custom Discord emojis)
        // Set to [] to disable emoji. If multiple provided, a random one is picked each time.
        // Custom emojis: use format '<:name:id>' or '<a:name:id>' for animated
        voiceStatusEmojis       : ['🎵'],

        // Voice channel status idle text (shown when bot is in channel but nothing is playing)
        // Set to '' to disable idle status. Supports standard or custom Discord emojis in the text.
        // Example: '🎵 Use /play to jam!'
        voiceStatusIdleText     : '🎵 Use /play to jam!'
    },

    blacklist                   : [],           // It must be the user ID (string[])

    // Web dashboard settings
    webDashboard: {
        enabled                 : true,
        port                    : 33333,
        loginType               : 'USER',       // 'USER' | 'OAUTH2'

        // USER mode settings
        user: {
            username            : 'admin',
            password            : 'password',
        },

        // OAUTH2 mode settings
        oauth2: {
            link                : '',
            redirectUri         : 'http://localhost:33333/login',
        },

        // SessionManager config
        sessionManager: {
            validTime           : 10 * 60 * 1000,           // Session validity time (ms) (default: 10 minutes)
            cleanupInterval     : 5 * 60 * 1000             // Timing cleaner time (ms) (default: 5 minutes)
        },
        // IPBlocker config
        ipBlocker: {
            retryLimit              : 5,                    // Maximum number of retries (default: 5)
            unlockTimeoutDuration   : 5 * 60 * 1000,        // Blocking time (ms) (default: 5 minutes)
            cleanupInterval         : 5 * 60 * 1000         // Timing cleaner time (ms) (default: 5 minutes)
        }
    },

    // Local Lavalink node
    localNode: {
        enabled             : false,
        autoRestart         : true,
        // downloadLink        : 'https://github.com/lavalink-devs/Lavalink/releases/download/4.1.1/Lavalink.jar'
    },

    // Command permission settings
    command: {
        disableCommand: [],                                 // Disabled commands, all enabled by default
        adminCommand: ['blacklist','server', 'status'],     // Admin commands, only Admin role user can use
        djCommand: ['dj', 'filter'],                        // DJ commands, only DJ role user can use
        // Supported commands: 'skip', 'seek', 'pause'
        // When a command name is listed here, only the requester of the currently playing song may use it.
        // Admins can always bypass this restriction regardless.
        requesterOnly: ['skip', 'seek', 'pause'],

        // DJs (both role-based and dynamic) can bypass 'requesterOnly' for commands listed here.
        // Only effective for commands that are also listed in requesterOnly.
        // Supported commands: 'skip', 'seek', 'pause'
        requesterDjBypass: ['skip', 'seek', 'pause']
    },

    // Queue persistence settings
    queuePersistence: {
        enabled             : false             // Enable/disable persistent queue storage
    },

    // SQLite database settings
    database: {
        path                : './data/database.db' // Path to SQLite database file
    }
};

export { config };
