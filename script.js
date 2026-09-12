/* ========================================= */
/* LEVELS */
/* ========================================= */

const levels = {

    1: {
        name: "Beginner",
        sentences: [
            "The sun is bright today.",
            "I like reading books.",
            "Practice makes us better.",
            "Every day brings new hope.",
            "Small steps lead to success.",
            "The sky looks beautiful.",
            "Keep learning every day.",
            "Good habits take time.",
            "Always believe in yourself.",
            "Hard work brings good results."
        ]
    },

    2: {
        name: "Easy",
        sentences: [
            "Learning new skills can be exciting.",
            "A calm mind helps us think clearly.",
            "Regular practice improves our ability.",
            "Kind words can make someone happy.",
            "Time becomes valuable when we use it wisely.",
            "Reading regularly improves our knowledge.",
            "A positive attitude can change your day.",
            "Good preparation makes difficult tasks easier.",
            "Patience helps us overcome many challenges.",
            "Success usually comes from consistent effort."
        ]
    },

    3: {
        name: "Normal",
        sentences: [
            "Learning becomes easier when we practice something every day.",
            "People often achieve great results through patience and determination.",
            "The best way to improve a skill is to practice it consistently.",
            "Technology has changed the way people communicate with each other.",
            "A clear goal gives us direction when we face difficult situations.",
            "Good communication helps people understand different ideas and opinions.",
            "Taking small steps every day can create meaningful progress over time.",
            "Experience teaches valuable lessons that cannot always be learned from books.",
            "Staying focused becomes easier when we remove unnecessary distractions.",
            "Confidence grows when we continue working despite occasional mistakes."
        ]
    },

    4: {
        name: "Intermediate",
        sentences: [
            "Although progress may seem slow at first, consistent effort eventually produces excellent results.",
            "When people learn from their mistakes, they become better prepared for future challenges.",
            "Managing time effectively allows us to complete important tasks without unnecessary stress.",
            "A person who remains patient during difficult situations can often find better solutions.",
            "Modern technology provides many useful opportunities for education, communication, and creativity.",
            "Developing strong habits requires discipline, patience, and a willingness to improve.",
            "Clear thinking becomes especially important when several problems need to be solved at once.",
            "Successful people understand that meaningful progress rarely happens without continuous effort.",
            "Good decisions are usually based on careful observation rather than quick assumptions.",
            "The ability to adapt to changing situations is an important skill in everyday life."
        ]
    },

    5: {
        name: "Advanced",
        sentences: [
            "When circumstances become unexpectedly difficult, maintaining concentration can help us respond more effectively.",
            "People who consistently challenge themselves often discover abilities they never realized they possessed.",
            "Understanding complex information requires patience, careful observation, and the ability to connect different ideas.",
            "Even when immediate results are disappointing, continued effort can eventually lead to significant improvement.",
            "Effective communication depends not only on speaking clearly but also on listening carefully to others.",
            "A thoughtful approach to problem solving allows us to examine possibilities before making important decisions.",
            "The ability to remain calm under pressure often determines how successfully a challenging situation is handled.",
            "Continuous learning helps individuals remain adaptable in a world that changes faster than ever before.",
            "Developing expertise in any field requires curiosity, discipline, practical experience, and long-term commitment.",
            "Careful planning can reduce mistakes while providing a clearer path toward achieving ambitious goals."
        ]
    },

    6: {
        name: "Expert",
        sentences: [
            "When unexpected obstacles interrupt a carefully planned process, adaptability becomes essential for maintaining progress.",
            "Complex problems often require individuals to examine multiple perspectives before choosing the most appropriate solution.",
            "Although advanced knowledge can provide significant advantages, practical experience frequently determines how effectively it is applied.",
            "Successful communication becomes increasingly challenging when people have different expectations, experiences, and interpretations.",
            "The ability to distinguish reliable information from misleading assumptions is particularly valuable in the modern digital environment.",
            "Long term improvement depends upon recognizing weaknesses, evaluating mistakes honestly, and deliberately developing better strategies.",
            "Individuals who remain curious throughout their lives are more likely to discover opportunities hidden within unfamiliar situations.",
            "Effective decision making requires balancing available evidence, potential consequences, personal priorities, and changing circumstances.",
            "Meaningful achievements are rarely the result of a single moment; they usually emerge from countless deliberate actions.",
            "Maintaining accuracy while gradually increasing speed requires concentration, coordination, patience, and repeated exposure to challenging tasks."
        ]
    },

    7: {
        name: "Master",
        sentences: [
            "Exceptional performance emerges when concentration, experience, discipline, and adaptability operate together without unnecessary hesitation.",
            "When faced with incomplete information and competing priorities, a thoughtful individual must evaluate consequences before committing to a decision.",
            "The continuous development of expertise requires not merely repetition, but also reflection, experimentation, correction, and deliberate refinement.",
            "People frequently underestimate how much progress can be achieved when seemingly insignificant improvements are maintained consistently over an extended period.",
            "In an environment characterized by rapid technological advancement, the ability to learn unfamiliar concepts independently has become increasingly important.",
            "Complex challenges become more manageable when they are divided into smaller components that can be analyzed systematically and solved independently.",
            "Precision becomes particularly valuable when a minor misunderstanding can influence an entire sequence of decisions and produce unexpectedly significant consequences.",
            "True mastery involves maintaining accuracy and composure even when circumstances become unfamiliar, demanding, unpredictable, or mentally exhausting.",
            "The most effective learners continuously compare their current performance with previous results, identify weaknesses, and adjust their approach accordingly.",
            "Developing exceptional typing ability requires more than speed; it demands consistent accuracy, sustained concentration, efficient movement, and confidence."
        ]
    },

    8: {
        name: "Legend",
        sentences: [
            "Extraordinary results are usually created through countless deliberate decisions that appear insignificant individually but become powerful when accumulated over time.",
            "When complex circumstances demand immediate attention, maintaining clarity of thought while evaluating competing possibilities can significantly influence the eventual outcome.",
            "The pursuit of excellence requires individuals to recognize their limitations without allowing those limitations to prevent them from attempting increasingly difficult challenges.",
            "Advanced problem solving involves identifying relationships between seemingly unrelated pieces of information and transforming those observations into practical strategies.",
            "A highly skilled typist must coordinate visual recognition, mental processing, and precise finger movement while simultaneously maintaining consistent rhythm and accuracy.",
            "Regardless of how sophisticated a particular skill becomes, meaningful improvement remains possible whenever a person approaches practice with curiosity and deliberate attention.",
            "In situations where uncertainty cannot be completely eliminated, effective decision makers focus on available evidence, probable consequences, and the information that remains unknown.",
            "Long term mastery is achieved when correct performance becomes reliable even under pressure, distraction, fatigue, unfamiliar conditions, and increasingly demanding expectations.",
            "The difference between temporary improvement and genuine expertise often depends upon whether a person continues refining fundamental abilities after achieving an apparently satisfactory level of performance.",
            "Exceptional typing speed combined with outstanding accuracy is ultimately the result of thousands of carefully practiced movements becoming increasingly automatic through sustained and purposeful repetition."
        ]
    },

    9: {
        name: "Grandmaster",
        sentences: [
            "Grandmaster level typists demonstrate an almost effortless synchronization between perception, cognition, and motor execution, even when confronted with unfamiliar vocabulary, irregular punctuation, or unexpectedly long compound sentences.",
            "Sustaining flawless accuracy across paragraphs filled with technical terminology, nested clauses, and abrupt shifts in subject matter separates genuinely elite performers from those who merely type quickly.",
            "When a challenging passage contains numerals, symbols, capitalized abbreviations, and unusual proper nouns, disciplined preparation matters far more than raw, unrefined mechanical speed.",
            "Consistent, deliberate practice under realistic pressure gradually transforms hesitant, error prone typing into a fluid, almost subconscious skill that withstands fatigue and distraction.",
            "The most demanding typing challenges intentionally combine lengthy sentences, subordinate clauses, and infrequent letter combinations to test whether accuracy degrades as fatigue accumulates.",
            "Exceptional composure under a strict time constraint, rather than isolated bursts of speed, ultimately determines whether a typist can be considered a genuine grandmaster.",
            "Recognizing subtle patterns in awkward phrasing, unconventional capitalization, and inconsistent spacing allows an experienced typist to maintain rhythm where others would inevitably stumble.",
            "A true grandmaster treats every difficult passage as an opportunity to refine timing, correct micro hesitations, and eliminate unnecessary corrective keystrokes entirely.",
            "Even brief lapses in concentration during unusually long, information dense sentences can quietly erode both measured speed and overall accuracy across an entire session.",
            "Mastery at this level requires unwavering focus, refined finger placement, and the mental endurance to remain precise long after less experienced typists would have already slowed down."
        ]
    },

    10: {
        name: "Immortal",
        sentences: [
            "Immortal tier challenges deliberately merge extraordinarily long, densely structured sentences with irregular vocabulary, uncommon punctuation, and abrupt tonal shifts that punish even momentary lapses in concentration.",
            "Only a typist who has internalized rhythm, timing, and accuracy so completely that conscious thought about individual keystrokes has essentially disappeared can reliably conquer passages of this extreme difficulty.",
            "At the highest conceivable level of mastery, sustained precision across hundreds of consecutive characters becomes indistinguishable from instinct, requiring years of deliberate, uncompromising, and reflective practice.",
            "The difference between a merely advanced typist and an immortal one lies in the ability to remain composed while a sentence grows increasingly convoluted, unpredictable, and demanding without warning.",
            "Extreme endurance, unshakable concentration, and an almost mechanical consistency across long, uninterrupted stretches of unfamiliar and syntactically complex text define genuinely immortal typing performance.",
            "When every remaining error threatens to undo an otherwise flawless run, an immortal typist calmly maintains the exact rhythm established many sentences earlier without a single hesitation.",
            "Passages engineered for immortal difficulty intentionally avoid predictable patterns, forcing the fingers to react instantly to unusual letter sequences rather than relying on memorized habits.",
            "True immortals treat fatigue, distraction, and mounting pressure as irrelevant variables, because their accuracy and rhythm remain essentially unaffected regardless of how demanding the surrounding circumstances become.",
            "Achieving this level of consistency demands relentless self correction, brutally honest review of every mistake, and the patience to rebuild fundamentals long after most typists would consider themselves finished improving.",
            "Ultimately, immortal status is earned not through a single extraordinary performance but through the quiet, repeated demonstration of flawless composure across countless demanding and unforgiving sentences."
        ]
    }

};


/* ========================================= */
/* LEVEL DISPLAY DATA */
/* ========================================= */

const levelDisplayData = {

    1: {
        name: "Beginner",
        image: "🌱"
    },

    2: {
        name: "Easy",
        image: "📘"
    },

    3: {
        name: "Normal",
        image: "⚡"
    },

    4: {
        name: "Intermediate",
        image: "🔥"
    },

    5: {
        name: "Advanced",
        image: "🚀"
    },

    6: {
        name: "Expert",
        image: "💎"
    },

    7: {
        name: "Master",
        image: "👑"
    },

    8: {
        name: "Legend",
        image: "🏆"
    },

    9: {
        name: "Grandmaster",
        image: "🌌"
    },

    10: {
        name: "Immortal",
        image: "♾️"
    }

};


/* ========================================= */
/* SETTINGS */
/* ========================================= */

const DAILY_GOAL = 20;
const TOTAL_LEVELS = 100;


/* ========================================= */
/* NEW FEATURE: PROCEDURAL LEVELS 11-100 */
/* ========================================= */

/*
 * Levels 1-10 stay exactly as hand-written above. Levels
 * 11-100 are generated here so the level count can scale up
 * to 100 without needing hundreds of manually typed
 * sentences. Sentences get longer and pull from a bigger mix
 * of connecting words the higher the level number is, so
 * difficulty still climbs steadily all the way to level 100.
 */

const EXTENDED_TIERS = [
    { name: "Elite", image: "🔷" },
    { name: "Champion", image: "⚔️" },
    { name: "Mythic", image: "🐉" },
    { name: "Ascendant", image: "🌠" },
    { name: "Celestial", image: "☄️" },
    { name: "Ethereal", image: "🌈" },
    { name: "Sovereign", image: "👁️" },
    { name: "Transcendent", image: "🌀" },
    { name: "Eternal", image: "🕊️" }
];

const ROMAN_NUMERALS =
    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const CLAUSE_BANK = [
    "the dedicated typist warms up with a few slow, careful lines",
    "skilled programmers debug tricky problems with patience and focus",
    "a confident writer revises every paragraph until it reads smoothly",
    "steady practice turns hesitant keystrokes into a fluid rhythm",
    "the curious student researches unfamiliar words before typing them",
    "an experienced coach reminds beginners to keep their wrists relaxed",
    "quick fingers mean little if the accuracy keeps slipping",
    "a calm mind helps the hands move without unnecessary tension",
    "every champion typist once struggled through the very first lesson",
    "long training sessions build muscle memory over many quiet weeks",
    "the determined athlete tracks small improvements after every attempt",
    "reliable habits matter more than any single burst of speed",
    "a careful proofreader catches mistakes that quick typists often miss",
    "modern keyboards reward light, even pressure across every finger",
    "the night shift editor finishes each article without wasting a second",
    "clear thinking under pressure separates good typists from great ones",
    "regular breaks keep the fingers fresh during a long practice session",
    "an ambitious learner sets a slightly higher goal after every round",
    "the seasoned professional never looks down at the keyboard while typing",
    "steady breathing keeps the shoulders loose during a difficult passage",
    "a thoughtful mentor explains why rhythm matters more than raw speed",
    "the patient student repeats the same drill until it feels effortless",
    "well organized practice turns a difficult skill into a natural habit",
    "a sharp memory helps recall tricky spelling without slowing down",
    "the focused competitor blocks out every distraction in the room",
    "small corrections early on prevent much bigger habits later",
    "a graceful typist barely seems to move while flying across the keys",
    "honest self review reveals exactly which fingers need more practice",
    "the diligent apprentice studies every mistake from the previous test",
    "consistent daily practice beats a single long session every time",
    "a resourceful learner finds new drills whenever progress slows down",
    "the observant teacher notices tension building in a tired student",
    "every difficult sentence becomes easier after a dozen repetitions",
    "a disciplined routine keeps bad habits from creeping back in",
    "the enthusiastic beginner celebrates even the smallest improvement",
    "careful posture prevents strain during especially long sessions",
    "a determined mind pushes through frustration toward real mastery",
    "the meticulous editor double checks every line before submitting it",
    "fresh eyes often catch errors that tired ones read straight past",
    "a confident competitor trusts months of quiet preparation"
];

const CONNECTOR_BANK = [
    "because",
    "while",
    "although",
    "since",
    "so that",
    "even though",
    "whenever",
    "provided that",
    "as soon as",
    "given that",
    "before",
    "after"
];

function capitalizeFirst(str) {

    return (
        str.charAt(0).toUpperCase() +
        str.slice(1)
    );

}


function seededRandomValue(seed) {

    let t =
        seed += 0x6D2B79F5;

    t =
        Math.imul(
            t ^ (t >>> 15),
            t | 1
        );

    t ^=
        t + Math.imul(
            t ^ (t >>> 7),
            t | 61
        );

    return (
        (t ^ (t >>> 14)) >>> 0
    ) / 4294967296;

}


function buildGeneratedSentence(level, index) {

    const clauseCount =
        Math.min(
            6,
            1 + Math.floor((level - 11) / 15)
        );

    const seedBase =
        (level * 97) + (index * 13);

    const usedClauses = [];

    let sentence = "";

    for (
        let c = 0;
        c < clauseCount;
        c++
    ) {

        const rand =
            seededRandomValue(
                seedBase + (c * 7)
            );

        let clauseIndex =
            Math.floor(
                rand * CLAUSE_BANK.length
            );

        let attempts = 0;

        while (
            usedClauses.includes(clauseIndex) &&
            attempts < 5
        ) {

            clauseIndex =
                (clauseIndex + 1) % CLAUSE_BANK.length;

            attempts++;

        }

        usedClauses.push(clauseIndex);

        const clause =
            CLAUSE_BANK[clauseIndex];

        if (c === 0) {

            sentence +=
                capitalizeFirst(clause);

        }

        else {

            const connectorIndex =
                Math.floor(
                    seededRandomValue(seedBase + (c * 3) + 1) *
                    CONNECTOR_BANK.length
                );

            sentence +=
                " " +
                CONNECTOR_BANK[connectorIndex] +
                " " +
                clause;

        }

    }

    return sentence + ".";

}


function generateExtendedLevels() {

    for (
        let level = 11;
        level <= TOTAL_LEVELS;
        level++
    ) {

        const tierIndex =
            Math.floor((level - 11) / 10);

        const subIndex =
            (level - 11) % 10;

        const tier =
            EXTENDED_TIERS[
                Math.min(
                    tierIndex,
                    EXTENDED_TIERS.length - 1
                )
            ];

        const displayName =
            `${tier.name} ${ROMAN_NUMERALS[subIndex]}`;

        const sentences = [];

        for (
            let i = 0;
            i < 10;
            i++
        ) {

            sentences.push(
                buildGeneratedSentence(level, i)
            );

        }

        levels[level] = {
            name: displayName,
            sentences: sentences
        };

        levelDisplayData[level] = {
            name: displayName,
            image: tier.image
        };

    }

}


generateExtendedLevels();


/* ========================================= */
/* DOM ELEMENTS */
/* ========================================= */

const textElement =
    document.getElementById("text");

const input =
    document.getElementById("input");

const sentenceBox =
    document.getElementById("sentenceBox");

const wpmElement =
    document.getElementById("wpm");

const accuracyElement =
    document.getElementById("accuracy");

const streakElement =
    document.getElementById("streak");

const timerElement =
    document.getElementById("timer");

const bigWpmElement =
    document.getElementById("bigWpm");

const levelElement =
    document.getElementById("level");

const levelDifficultyElement =
    document.getElementById("levelDifficulty");

const bigStreakElement =
    document.getElementById("bigStreak");

const challengeElement =
    document.getElementById("challenge");

const progressElement =
    document.getElementById("progress");

const sentenceNumberElement =
    document.getElementById("sentenceNumber");

const totalSentencesElement =
    document.getElementById("totalSentences");

const rightCurrentStreak =
    document.getElementById("rightCurrentStreak");

const rightCurrentTest =
    document.getElementById("rightCurrentTest");

const dailyStreakElement =
    document.getElementById("dailyStreak");

const dailyCompletedElement =
    document.getElementById("dailyCompleted");

const dailyProgressElement =
    document.getElementById("dailyProgress");

const dailyGoalText =
    document.getElementById("dailyGoalText");

const achievementList =
    document.getElementById("achievementList");

const achievementCount =
    document.getElementById("achievementCount");

const achievementPopup =
    document.getElementById("achievementPopup");

const achievementName =
    document.getElementById("achievementName");

const results =
    document.getElementById("results");

const finalWpm =
    document.getElementById("finalWpm");

const finalAccuracy =
    document.getElementById("finalAccuracy");

const finalStreak =
    document.getElementById("finalStreak");

const finalCharacters =
    document.getElementById("finalCharacters");

const finalTime =
    document.getElementById("finalTime");

const finalDailyGoal =
    document.getElementById("finalDailyGoal");

const performanceMessage =
    document.getElementById("performanceMessage");

const restartButton =
    document.getElementById("restartButton");

const tryAgainButton =
    document.getElementById("tryAgainButton");


/* ========================================= */
/* NEW FEATURE ELEMENTS */
/* ========================================= */

const bestWpmElement =
    document.getElementById("bestWpm");

const totalTestsCompletedElement =
    document.getElementById("totalTestsCompleted");

const rightBestWpm =
    document.getElementById("rightBestWpm");

const rightTotalTests =
    document.getElementById("rightTotalTests");

const topLevelNameElement =
    document.getElementById("topLevelName");

const levelImageElement =
    document.getElementById("levelImage");

/* NEW FEATURE: the roadmap cards are now generated dynamically
   (see populateLevelRoadmap) since there can be up to 100 of
   them, so this is re-queried fresh instead of being a single
   snapshot taken before they exist. */
function getLevelCards() {

    return document.querySelectorAll(".level-card");

}


const levelScrollElement =
    document.getElementById("levelScroll");


function populateLevelRoadmap() {

    if (!levelScrollElement) {

        return;

    }

    levelScrollElement.innerHTML = "";

    for (
        let level = 1;
        level <= TOTAL_LEVELS;
        level++
    ) {

        const data =
            levelDisplayData[level];

        if (!data) {

            continue;

        }

        const card =
            document.createElement("div");

        card.className = "level-card";

        card.dataset.level = level;


        const image =
            document.createElement("div");

        image.className =
            "level-card-image";

        image.textContent =
            data.image;


        const info =
            document.createElement("div");

        info.className =
            "level-card-info";

        const strong =
            document.createElement("strong");

        strong.textContent =
            `Level ${level}`;

        const span =
            document.createElement("span");

        span.textContent =
            data.name;

        info.appendChild(strong);
        info.appendChild(span);


        const status =
            document.createElement("div");

        status.className =
            "level-status";

        status.textContent =
            level === 1 ?
                "▶" :
                "🔒";


        card.appendChild(image);
        card.appendChild(info);
        card.appendChild(status);

        levelScrollElement.appendChild(card);

    }

}


populateLevelRoadmap();

const weeklyChartElement =
    document.getElementById("weeklyChart");

const weeklySummaryElement =
    document.getElementById("weeklySummary");

const leaderboardListElement =
    document.getElementById("leaderboardList");

const progressChartElement =
    document.getElementById("progressChart");

const progressTrendElement =
    document.getElementById("progressTrend");

const monthlyReportLabelElement =
    document.getElementById("monthlyReportLabel");

const virtualKeyboard =
    document.getElementById("virtualKeyboard");


/* ========================================= */
/* BEST STREAK ELEMENTS */
/* ========================================= */

const bestStreakTopElement =
    document.getElementById("bestStreakTop");

const rightBestStreak =
    document.getElementById("rightBestStreak");


/* ========================================= */
/* INTRO SCREEN ELEMENTS */
/* ========================================= */

const introScreen =
    document.getElementById("introScreen");

const introTextBlock =
    document.getElementById("introText");

const introContinueButton =
    document.getElementById("introContinueButton");

const introMotivationElement =
    document.getElementById("introMotivation");

const levelSelectScreen =
    document.getElementById("levelSelectScreen");

const levelSelectGrid =
    document.getElementById("levelSelectGrid");

const modeSelectGrid =
    document.getElementById("modeSelectGrid");

const backToSelectButton =
    document.getElementById("backToSelectButton");


/* ========================================= */
/* MIDDLE CARD MAXIMIZE / MINIMIZE ELEMENTS */
/* ========================================= */

const appContainer =
    document.getElementById("appContainer");

const mainPanelToggleButton =
    document.getElementById("mainPanelToggleButton");


/* ========================================= */
/* PLAYER PROFILE ELEMENTS */
/* ========================================= */

const openProfileButton =
    document.getElementById("openProfileButton");

const openProfileButtonSide =
    document.getElementById("openProfileButtonSide");

const profileModal =
    document.getElementById("profileModal");

const closeProfileButton =
    document.getElementById("closeProfileButton");

const profileAvatarPreview =
    document.getElementById("profileAvatarPreview");

const profileAvatarInput =
    document.getElementById("profileAvatarInput");

const profileNameInput =
    document.getElementById("profileNameInput");

const profileNameWrap =
    document.querySelector(".profile-name-wrap");

const profileNameEditButton =
    document.getElementById("profileNameEditButton");

const profileNameSaveButton =
    document.getElementById("profileNameSaveButton");

const profileEmailDisplay =
    document.getElementById("profileEmailDisplay");

const profileLevelElement =
    document.getElementById("profileLevel");

const profileBestWpmElement =
    document.getElementById("profileBestWpm");

const profileBestStreakElement =
    document.getElementById("profileBestStreak");

const profileTotalTestsElement =
    document.getElementById("profileTotalTests");

const profileTotalTimeElement =
    document.getElementById("profileTotalTime");


/* ========================================= */
/* KEYBOARD THEME ELEMENTS */
/* ========================================= */

const themeSwatches =
    document.querySelectorAll(".theme-swatch");

const DEFAULT_AVATAR_IMAGE =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
        '<rect width="100" height="100" rx="50" fill="#334155"/>' +
        '<circle cx="50" cy="38" r="18" fill="#cbd5e1"/>' +
        '<path d="M18 88c4-22 24-32 32-32s28 10 32 32" fill="#cbd5e1"/>' +
        '</svg>'
    );


/* ========================================= */
/* TEST VARIABLES */
/* ========================================= */

let currentLevel = 1;

let levelSentenceIndex = 0;

let typedCharacters = 0;

let correctCharacters = 0;

let currentStreak = 0;

let highestStreak = 0;

let testStartTime = null;

let timer = null;

let testRunning = false;

let sentenceCompleted = false;

let nextSentenceTimer = null;

let previousTypedLength = 0;

let totalCorrectCharacters = 0;

let sentenceStats = [];

/* NEW FEATURE: active practice mode (15/30/60/120 Sec, Endless,
   word-count modes, Zen) chosen from the level select screen.
   null means the classic level-by-level mode. */
let currentTestMode = null;


/* ========================================= */
/* ACHIEVEMENTS */
/* ========================================= */

const achievements = [];

for (
    let i = 1;
    i <= 100;
    i++
) {

    achievements.push({

        id: i,

        name:
            i <= 20
                ? `Sentence Explorer ${i}`
                : i <= 40
                    ? `Typing Champion ${i - 20}`
                    : i <= 60
                        ? `Speed Builder ${i - 40}`
                        : i <= 80
                            ? `Accuracy Master ${i - 60}`
                            : `TypeRush Legend ${i - 80}`,

        requirement: i

    });

}


/* ========================================= */
/* STORAGE KEY */
/* ========================================= */

function getStorageKey() {

    return "typeRushData";

}


/* ========================================= */
/* LOCAL STORAGE */
/* ========================================= */

function defaultSavedData() {

    return {

        unlockedAchievements: [],

        bestAccuracy: 0,

        bestWpm: 0,

        /* NEW FEATURE: persisted best streak */
        bestStreak: 0,

        totalSentences: 0,

        totalCharacters: 0,

        totalTests: 0,

        /* NEW FEATURE: total time spent practicing overall,
           in seconds, shown in the player profile. */
        totalTimeSeconds: 0,

        dailyStreak: 0,

        lastActiveDate: "",

        dailyCompleted: 0,

        weeklyActivity: {},

        leaderboard: [],

        /* NEW FEATURE: recent test-by-test performance,
           used to draw the "Your Progress" line chart. */
        progressHistory: [],

        /* BUG FIX: level + sentence progress is now saved
           so the app no longer resets to Level 1 on reload */
        currentLevel: 1,

        levelSentenceIndex: 0,

        /* NEW FEATURE: highest level ever unlocked, used to
           decide which levels are open on the level select
           screen - kept separate from currentLevel so
           replaying an earlier level never locks progress. */
        highestLevelReached: 1,

        /* NEW FEATURE: player profile personal details */
        profileName: "",

        profileAvatar: ""

    };

}


/* ========================================= */
/* STORAGE SAFETY */
/* ========================================= */

function sanitizeSavedData(data) {

    if (!Number.isFinite(Number(data.bestWpm))) {

        data.bestWpm = 0;

    }


    if (!Number.isFinite(Number(data.bestStreak))) {

        data.bestStreak = 0;

    }


    if (!Number.isFinite(Number(data.totalTests))) {

        data.totalTests = 0;

    }


    if (!Number.isFinite(Number(data.totalTimeSeconds))) {

        data.totalTimeSeconds = 0;

    }


    if (!Array.isArray(data.unlockedAchievements)) {

        data.unlockedAchievements = [];

    }


    if (
        typeof data.weeklyActivity !== "object" ||
        data.weeklyActivity === null ||
        Array.isArray(data.weeklyActivity)
    ) {

        data.weeklyActivity = {};

    }


    if (!Array.isArray(data.leaderboard)) {

        data.leaderboard = [];

    }


    if (!Array.isArray(data.progressHistory)) {

        data.progressHistory = [];

    }


    if (
        !Number.isFinite(Number(data.currentLevel)) ||
        Number(data.currentLevel) < 1 ||
        Number(data.currentLevel) > TOTAL_LEVELS
    ) {

        data.currentLevel = 1;

    }


    if (
        !Number.isFinite(Number(data.levelSentenceIndex)) ||
        Number(data.levelSentenceIndex) < 0
    ) {

        data.levelSentenceIndex = 0;

    }


    if (
        !Number.isFinite(Number(data.highestLevelReached)) ||
        Number(data.highestLevelReached) < Number(data.currentLevel) ||
        Number(data.highestLevelReached) > TOTAL_LEVELS
    ) {

        data.highestLevelReached =
            Number(data.currentLevel) || 1;

    }


    if (typeof data.profileName !== "string") {

        data.profileName = "";

    }


    if (typeof data.profileAvatar !== "string") {

        data.profileAvatar = "";

    }


    return data;

}


function loadSavedDataForKey(key) {

    let parsed = null;

    try {

        parsed =
            JSON.parse(
                localStorage.getItem(key)
            );

    }

    catch (e) {

        parsed = null;

    }


    if (!parsed || typeof parsed !== "object") {

        parsed = defaultSavedData();

    }


    return sanitizeSavedData(parsed);

}


let savedData =
    loadSavedDataForKey(
        getStorageKey()
    );


saveData();


/* ========================================= */
/* SAVE DATA */
/* ========================================= */

function saveData() {

    localStorage.setItem(
        getStorageKey(),
        JSON.stringify(savedData)
    );

}


/* ========================================= */
/* BUG FIX: RESTORE LEVEL PROGRESS */
/* ========================================= */

/*
 * Previously currentLevel / levelSentenceIndex only ever
 * lived in memory, so refreshing the page (or coming back
 * later) silently reset the player back to Level 1. They
 * are now restored from savedData here.
 */

currentLevel =
    Number(savedData.currentLevel) || 1;

if (!levels[currentLevel]) {

    currentLevel = 1;

}


levelSentenceIndex =
    Number(savedData.levelSentenceIndex) || 0;

if (
    levelSentenceIndex >=
    levels[currentLevel].sentences.length
) {

    levelSentenceIndex = 0;

}


function saveLevelProgress() {

    savedData.currentLevel =
        currentLevel;

    savedData.levelSentenceIndex =
        levelSentenceIndex;

    savedData.highestLevelReached =
        Math.max(
            Number(savedData.highestLevelReached) || 1,
            currentLevel
        );

    saveData();

}


/* ========================================= */
/* PLAYER SUMMARY */
/* ========================================= */

function updatePlayerSummary() {

    const best =
        Number(savedData.bestWpm) || 0;

    const tests =
        Number(savedData.totalTests) || 0;

    const bestStreakValue =
        Number(savedData.bestStreak) || 0;


    if (bestWpmElement) {

        bestWpmElement.textContent =
            best;

    }


    if (totalTestsCompletedElement) {

        totalTestsCompletedElement.textContent =
            tests;

    }


    if (rightBestWpm) {

        rightBestWpm.textContent =
            best;

    }


    if (rightTotalTests) {

        rightTotalTests.textContent =
            tests;

    }


    /* NEW FEATURE: BEST STREAK DISPLAY */

    if (bestStreakTopElement) {

        bestStreakTopElement.textContent =
            bestStreakValue;

    }


    if (rightBestStreak) {

        rightBestStreak.textContent =
            bestStreakValue;

    }


    updateLevelDisplay();

}


/* ========================================= */
/* UPDATE LEVEL DISPLAY */
/* ========================================= */

function updateLevelDisplay() {

    const data =
        levelDisplayData[currentLevel];

    if (!data) {

        return;

    }


    /* TOP LEVEL */

    if (topLevelNameElement) {

        topLevelNameElement.textContent =
            `Level ${currentLevel} — ${data.name}`;

    }


    /* TOP IMAGE */

    if (levelImageElement) {

        levelImageElement.textContent =
            data.image;

    }


    /* LEVEL CARDS */

    getLevelCards().forEach(
        card => {

            const cardLevel =
                Number(
                    card.dataset.level
                );


            card.classList.remove(
                "active",
                "unlocked",
                "locked"
            );


            if (
                cardLevel ===
                currentLevel
            ) {

                card.classList.add(
                    "active"
                );

            }

            else if (
                cardLevel <=
                Number(savedData.highestLevelReached)
            ) {

                card.classList.add(
                    "unlocked"
                );

            }

            else {

                card.classList.add(
                    "locked"
                );

            }

        }
    );


    /* SCROLL CURRENT LEVEL */

    const activeCard =
        document.querySelector(
            `.level-card[data-level="${currentLevel}"]`
        );


    if (activeCard) {

        activeCard.scrollIntoView({

            behavior: "smooth",

            block: "nearest"

        });

    }

}


/* ========================================= */
/* DATE */
/* ========================================= */

function getDateString(
    date = new Date()
) {

    return date
        .toISOString()
        .split("T")[0];

}


function getYesterdayString() {

    const yesterday =
        new Date();

    yesterday.setDate(
        yesterday.getDate() - 1
    );

    return getDateString(
        yesterday
    );

}


/* ========================================= */
/* DAILY DATA */
/* ========================================= */

function loadDailyData() {

    const today =
        getDateString();


    if (
        savedData.lastActiveDate !==
        today
    ) {

        if (
            savedData.lastActiveDate !==
            getYesterdayString()
        ) {

            savedData.dailyCompleted =
                0;

        }

        saveData();

    }


    dailyStreakElement.textContent =
        savedData.dailyStreak;

    dailyCompletedElement.textContent =
        savedData.dailyCompleted;

    updateDailyProgress();

    updateWeeklyReport();

    updateLeaderboard();

    updateProgressChart();

}


/* ========================================= */
/* REGISTER DAILY ACTIVITY */
/* ========================================= */

function registerDailyActivity() {

    const today =
        getDateString();


    if (
        savedData.lastActiveDate !==
        today
    ) {

        if (
            savedData.lastActiveDate ===
            getYesterdayString()
        ) {

            savedData.dailyStreak++;

        }

        else {

            savedData.dailyStreak = 1;

        }


        savedData.lastActiveDate =
            today;

        savedData.dailyCompleted = 0;

    }


    savedData.dailyCompleted++;


    if (
        savedData.dailyCompleted >
        DAILY_GOAL
    ) {

        savedData.dailyCompleted =
            DAILY_GOAL;

    }


    saveData();


    dailyStreakElement.textContent =
        savedData.dailyStreak;

    dailyCompletedElement.textContent =
        savedData.dailyCompleted;


    updateDailyProgress();

    checkDailyGoal();

}


/* ========================================= */
/* DAILY PROGRESS */
/* ========================================= */

function updateDailyProgress() {

    const percent =
        Math.min(
            100,
            (
                savedData.dailyCompleted /
                DAILY_GOAL
            ) * 100
        );


    dailyProgressElement.style.width =
        percent + "%";


    if (
        savedData.dailyCompleted >=
        DAILY_GOAL
    ) {

        dailyGoalText.textContent =
            "🎉 Daily goal completed!";

    }

    else {

        dailyGoalText.textContent =
            `${DAILY_GOAL - savedData.dailyCompleted} sentences remaining today.`;

    }

}


/* ========================================= */
/* WEEKLY REPORT */
/* ========================================= */

function updateWeeklyReport() {

    if (
        !weeklyChartElement ||
        !weeklySummaryElement
    ) {

        return;

    }


    const dayLabels =
        [
            "S", "M", "T", "W",
            "T", "F", "S"
        ];

    const todayKey =
        getDateString();

    let weekTotal = 0;

    let maxCount = 1;

    const days = [];


    for (
        let i = 6;
        i >= 0;
        i--
    ) {

        const d =
            new Date();

        d.setDate(
            d.getDate() - i
        );

        const key =
            getDateString(d);

        const count =
            Number(
                savedData.weeklyActivity[key]
            ) || 0;

        days.push({

            key: key,

            label:
                dayLabels[d.getDay()],

            count: count,

            isToday:
                key === todayKey

        });


        weekTotal += count;


        if (
            count > maxCount
        ) {

            maxCount = count;

        }

    }


    weeklyChartElement.innerHTML = "";


    days.forEach(
        day => {

            const column =
                document.createElement(
                    "div"
                );

            column.className =
                "weekly-bar-column" +
                (
                    day.isToday
                        ? " is-today"
                        : ""
                );


            const track =
                document.createElement(
                    "div"
                );

            track.className =
                "weekly-bar-track";


            const fill =
                document.createElement(
                    "div"
                );

            fill.className =
                "weekly-bar-fill";

            fill.style.height =
                Math.max(
                    4,
                    (
                        day.count /
                        maxCount
                    ) * 100
                ) + "%";


            track.appendChild(fill);


            const label =
                document.createElement(
                    "div"
                );

            label.className =
                "weekly-bar-label";

            label.textContent =
                day.label;


            const count =
                document.createElement(
                    "div"
                );

            count.className =
                "weekly-bar-count";

            count.textContent =
                day.count;


            column.appendChild(track);
            column.appendChild(label);
            column.appendChild(count);


            weeklyChartElement.appendChild(
                column
            );

        }
    );


    weeklySummaryElement.textContent =
        `${weekTotal} sentence${weekTotal === 1 ? "" : "s"} this week`;

}


/* ========================================= */
/* NEW FEATURE: "YOUR PROGRESS" LINE CHART */
/* ========================================= */

/*
 * Tracks a composite performance score after every finished
 * test - built from WPM, accuracy, and total achievements
 * unlocked - so the chart's line visibly rises or falls with
 * how the player is actually doing overall, not just one stat.
 */

const PROGRESS_HISTORY_LIMIT = 12;

function computeProgressScore(wpmValue, accuracyValue) {

    const achievementBonus =
        savedData.unlockedAchievements.length * 5;

    return Math.round(
        wpmValue +
        accuracyValue +
        achievementBonus
    );

}


function recordProgressPoint(wpmValue, accuracyValue) {

    if (!Array.isArray(savedData.progressHistory)) {

        savedData.progressHistory = [];

    }


    savedData.progressHistory.push({

        score:
            computeProgressScore(
                wpmValue,
                accuracyValue
            ),

        wpm: wpmValue,

        accuracy: accuracyValue,

        date: getDateString()

    });


    savedData.progressHistory =
        savedData.progressHistory.slice(
            -PROGRESS_HISTORY_LIMIT
        );

}


/*
 * NEW FEATURE: this used to draw a "Your Progress" line chart
 * from progressHistory. It's now replaced with a Monthly Report
 * calendar that colors each day of the current month green
 * (a test was completed that day) or red (it wasn't), reusing
 * the same activity map the Weekly Report already tracks. The
 * function name and DOM elements are kept as-is so every
 * existing call site still works unchanged.
 */
function updateProgressChart() {

    if (
        !progressChartElement ||
        !progressTrendElement
    ) {

        return;

    }


    const now =
        new Date();

    const year =
        now.getFullYear();

    const month =
        now.getMonth();

    const monthNames =
        [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];


    if (monthlyReportLabelElement) {

        monthlyReportLabelElement.textContent =
            `${monthNames[month]} ${year}`;

    }


    const daysInMonth =
        new Date(year, month + 1, 0).getDate();

    const firstWeekday =
        new Date(year, month, 1).getDay();

    const todayKey =
        getDateString();

    const activity =
        savedData.weeklyActivity || {};


    progressChartElement.innerHTML = "";


    const weekdayLabels =
        ["S", "M", "T", "W", "T", "F", "S"];

    weekdayLabels.forEach(
        label => {

            const head =
                document.createElement("div");

            head.className =
                "monthly-day-head";

            head.textContent =
                label;

            progressChartElement.appendChild(head);

        }
    );


    for (
        let i = 0;
        i < firstWeekday;
        i++
    ) {

        const blank =
            document.createElement("div");

        blank.className =
            "monthly-day-cell empty";

        progressChartElement.appendChild(blank);

    }


    let completedCount = 0;

    let missedCount = 0;


    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const cellDate =
            new Date(year, month, day);

        const key =
            getDateString(cellDate);

        const completed =
            Number(activity[key]) > 0;

        const isToday =
            key === todayKey;

        const isFuture =
            cellDate > now && !isToday;


        const cell =
            document.createElement("div");

        cell.className =
            "monthly-day-cell" +
            (
                isFuture ?
                    " future" :
                    (
                        completed ?
                            " completed" :
                            " missed"
                    )
            ) +
            (
                isToday ?
                    " today" :
                    ""
            );

        cell.textContent =
            day;

        cell.title =
            isFuture ?
                key :
                (
                    completed ?
                        `${key}: completed` :
                        `${key}: missed`
                );


        if (!isFuture) {

            if (completed) {

                completedCount++;

            }

            else {

                missedCount++;

            }

        }


        progressChartElement.appendChild(cell);

    }


    progressTrendElement.textContent =
        `${completedCount} day${completedCount === 1 ? "" : "s"} completed, ` +
        `${missedCount} missed this month`;

    progressTrendElement.className =
        "progress-trend-text";

}


/* ========================================= */
/* LEADERBOARD */
/* ========================================= */

function updateLeaderboard() {

    if (!leaderboardListElement) {

        return;

    }


    leaderboardListElement.innerHTML =
        "";


    const entries =
        savedData.leaderboard;


    if (
        !entries ||
        entries.length === 0
    ) {

        const empty =
            document.createElement(
                "div"
            );

        empty.className =
            "leaderboard-empty";

        empty.textContent =
            "Finish a full test to enter the leaderboard.";

        leaderboardListElement.appendChild(
            empty
        );

        return;

    }


    entries.forEach(
        (entry, index) => {

            const rank =
                index + 1;

            const item =
                document.createElement(
                    "div"
                );

            const isCurrentPlayerRow =
                (entry.name || "Guest") ===
                getProfileDisplayName();

            item.className =
                "leaderboard-item" +
                (
                    rank <= 3
                        ? " rank-" + rank
                        : ""
                ) +
                (
                    isCurrentPlayerRow
                        ? " leaderboard-item-you"
                        : ""
                );


            const rankBadge =
                document.createElement(
                    "div"
                );

            rankBadge.className =
                "leaderboard-rank";

            rankBadge.textContent =
                rank;


            const info =
                document.createElement(
                    "div"
                );

            info.className =
                "leaderboard-info";


            const nameEl =
                document.createElement(
                    "strong"
                );

            const isCurrentPlayer =
                (entry.name || "Guest") ===
                getProfileDisplayName();

            nameEl.textContent =
                (entry.name || "Guest") +
                (
                    isCurrentPlayer
                        ? " (You)"
                        : ""
                );


            const dateEl =
                document.createElement(
                    "span"
                );

            dateEl.textContent =
                entry.date || "";


            info.appendChild(nameEl);
            info.appendChild(dateEl);


            const wpmBox =
                document.createElement(
                    "div"
                );

            wpmBox.className =
                "leaderboard-wpm";


            const wpmValue =
                document.createElement(
                    "strong"
                );

            wpmValue.textContent =
                entry.wpm + " WPM";


            const accValue =
                document.createElement(
                    "span"
                );

            accValue.textContent =
                entry.accuracy + "% acc";


            wpmBox.appendChild(wpmValue);
            wpmBox.appendChild(accValue);


            item.appendChild(rankBadge);
            item.appendChild(info);
            item.appendChild(wpmBox);


            leaderboardListElement.appendChild(
                item
            );

        }
    );

}


/* ========================================= */
/* DAILY GOAL */
/* ========================================= */

function checkDailyGoal() {

    if (
        savedData.dailyCompleted ===
        DAILY_GOAL
    ) {

        challengeElement.textContent =
            "🎉 Daily goal completed! Amazing work!";

    }

}


/* ========================================= */
/* TIMER FORMAT */
/* ========================================= */

function formatTimer(
    totalSeconds
) {

    const hours =
        Math.floor(
            totalSeconds / 3600
        );


    const minutes =
        Math.floor(
            (
                totalSeconds % 3600
            ) / 60
        );


    const seconds =
        totalSeconds % 60;


    return (

        String(hours)
            .padStart(2, "0") +

        ":" +

        String(minutes)
            .padStart(2, "0") +

        ":" +

        String(seconds)
            .padStart(2, "0")

    );

}


/* ========================================= */
/* LOAD SENTENCE */
/* ========================================= */

function loadSentence() {

    sentenceCompleted =
        false;

    previousTypedLength =
        0;


    levelElement.textContent =
        currentLevel;

    levelDifficultyElement.textContent =
        levels[currentLevel].name;


    updateLevelDisplay();


    input.value = "";

    textElement.innerHTML = "";


    const levelSentences =
        levels[currentLevel].sentences;


    const sentence =
        levelSentences[
            levelSentenceIndex
        ];


    /* CREATE CHARACTER SPANS */

    for (
        let i = 0;
        i < sentence.length;
        i++
    ) {

        const span =
            document.createElement(
                "span"
            );


        span.textContent =
            sentence[i];

        textElement.appendChild(
            span
        );

    }


    /* CURRENT CHARACTER */

    const firstCharacter =
        textElement.querySelector(
            "span"
        );


    if (firstCharacter) {

        firstCharacter.classList.add(
            "current"
        );

    }


    /* PROGRESS */

    sentenceNumberElement.textContent =
        levelSentenceIndex + 1;

    totalSentencesElement.textContent =
        levelSentences.length;

    rightCurrentTest.textContent =
        `${levelSentenceIndex + 1} / ${levelSentences.length}`;


    const progress =
        (
            levelSentenceIndex /
            levelSentences.length
        ) * 100;


    progressElement.style.width =
        progress + "%";


    if (currentTestMode) {

        const modeMessages = {
            time: `⏱️ ${currentTestMode.value} Sec Mode — type as much as you can!`,
            words: `🔤 ${currentTestMode.value} Word Mode — reach the target!`,
            endless: "♾️ Endless Mode — keep going as long as you like!",
            zen: "🧘 Zen Mode — relax and type at your own pace."
        };

        challengeElement.textContent =
            modeMessages[currentTestMode.type] ||
            "⌨️ Type correctly to build your streak.";

    }

    else {

        challengeElement.textContent =
            "⌨️ Type correctly to build your streak.";

    }


    streakElement.textContent =
        currentStreak;

    bigStreakElement.textContent =
        currentStreak;

    rightCurrentStreak.textContent =
        currentStreak;


    setTimeout(
        () => {

            input.focus();

        },
        50
    );


    highlightNextKey();

}


/* ========================================= */
/* START TIMER */
/* ========================================= */

function startTimer() {

    if (testRunning) {

        return;

    }


    testRunning = true;

    testStartTime =
        Date.now();


    timer =
        setInterval(
            updateTimer,
            100
        );

}


/* ========================================= */
/* UPDATE TIMER */
/* ========================================= */

function updateTimer() {

    if (!testStartTime) {

        return;

    }


    const elapsed =
        Math.floor(
            (
                Date.now() -
                testStartTime
            ) / 1000
        );


    timerElement.textContent =
        formatTimer(elapsed);


    updateWPM();


    /* NEW FEATURE: practice modes with a time or word target
       end the test automatically once that target is hit. */
    if (currentTestMode) {

        if (
            currentTestMode.type === "time" &&
            elapsed >= currentTestMode.value
        ) {

            showFinalResults();

            return;

        }


        if (currentTestMode.type === "words") {

            const wordsTyped =
                totalCorrectCharacters / 5;

            if (wordsTyped >= currentTestMode.value) {

                showFinalResults();

                return;

            }

        }

    }

}


/* ========================================= */
/* GET ELAPSED TIME */
/* ========================================= */

function getElapsedSeconds() {

    if (!testStartTime) {

        return 0;

    }


    return (
        Date.now() -
        testStartTime
    ) / 1000;

}


/* ========================================= */
/* UPDATE WPM */
/* ========================================= */

function updateWPM() {

    if (
        !testStartTime ||
        !testRunning
    ) {

        wpmElement.textContent =
            "0";

        bigWpmElement.textContent =
            "0";

        return;

    }


    const elapsedSeconds =
        getElapsedSeconds();


    if (
        elapsedSeconds < 1
    ) {

        wpmElement.textContent =
            "0";

        bigWpmElement.textContent =
            "0";

        return;

    }


    const minutes =
        elapsedSeconds / 60;


    const wpm =
        Math.round(
            (
                totalCorrectCharacters / 5
            ) / minutes
        );


    wpmElement.textContent =
        wpm;

    bigWpmElement.textContent =
        wpm;

    /*
     * NOTE: Best WPM is intentionally NOT updated here.
     * See evaluateBestWpm() - it is only checked at stable
     * checkpoints (when a sentence or the full test
     * completes) so a short early burst of typing can't
     * permanently inflate the saved Best WPM.
     */

}


/* ========================================= */
/* BUG FIX: BEST WPM CHECKPOINT */
/* ========================================= */

function evaluateBestWpm(wpm) {

    if (!Number.isFinite(wpm)) {

        return false;

    }


    if (
        wpm >
        Number(savedData.bestWpm)
    ) {

        savedData.bestWpm =
            wpm;

        saveData();

        updatePlayerSummary();

        return true;

    }


    return false;

}


/* ========================================= */
/* UPDATE ACCURACY */
/* ========================================= */

function updateAccuracy() {

    if (
        typedCharacters <= 0
    ) {

        accuracyElement.textContent =
            "100%";

        return;

    }


    const accuracy =
        Math.round(
            (
                correctCharacters /
                typedCharacters
            ) * 100
        );


    accuracyElement.textContent =
        accuracy + "%";

}


/* ========================================= */
/* INPUT HANDLING */
/* ========================================= */

input.addEventListener(
    "input",
    function () {

        startTimer();


        const typed =
            input.value;


        const sentence =
            levels[currentLevel]
                .sentences[
                    levelSentenceIndex
                ];


        const spans =
            textElement.querySelectorAll(
                "span"
            );


        /* PREVENT EXTRA CHARACTERS */

        if (
            typed.length >
            sentence.length
        ) {

            input.value =
                typed.substring(
                    0,
                    sentence.length
                );

            return;

        }


        /* REMOVE OLD CLASSES */

        spans.forEach(
            span => {

                span.classList.remove(
                    "correct",
                    "wrong",
                    "current"
                );

            }
        );


        let currentCorrect = 0;


        /* CHECK CHARACTERS */

        for (
            let i = 0;
            i < typed.length;
            i++
        ) {

            if (
                typed[i] ===
                sentence[i]
            ) {

                spans[i].classList.add(
                    "correct"
                );

                currentCorrect++;

            }

            else {

                spans[i].classList.add(
                    "wrong"
                );

            }

        }


        /* CURRENT CURSOR */

        if (
            typed.length <
            sentence.length
        ) {

            spans[
                typed.length
            ].classList.add(
                "current"
            );

        }


        /* SENTENCE TOTALS */

        let previousTyped = 0;

        let previousCorrect = 0;


        for (
            let i = 0;
            i < sentenceStats.length;
            i++
        ) {

            previousTyped +=
                sentenceStats[i].typed;

            previousCorrect +=
                sentenceStats[i].correct;

        }


        typedCharacters =
            previousTyped +
            typed.length;


        correctCharacters =
            previousCorrect +
            currentCorrect;


        totalCorrectCharacters =
            correctCharacters;


        /* RUNNING STREAK */

        if (
            typed.length >
            previousTypedLength
        ) {

            const newIndex =
                typed.length - 1;


            if (
                typed[newIndex] ===
                sentence[newIndex]
            ) {

                currentStreak++;

            }

            else {

                currentStreak = 0;

            }

        }


        previousTypedLength =
            typed.length;


        /* HIGHEST STREAK */

        if (
            currentStreak >
            highestStreak
        ) {

            highestStreak =
                currentStreak;

        }


        /* NEW FEATURE: BEST STREAK (persisted) */

        if (
            currentStreak >
            Number(savedData.bestStreak)
        ) {

            savedData.bestStreak =
                currentStreak;

            saveData();

            updatePlayerSummary();

        }


        /* DISPLAY STREAK */

        streakElement.textContent =
            currentStreak;

        bigStreakElement.textContent =
            currentStreak;

        rightCurrentStreak.textContent =
            currentStreak;


        /* UPDATE STATS */

        updateWPM();

        updateAccuracy();

        updateChallenge();


        /* COMPLETE SENTENCE */

        if (
            typed.length ===
            sentence.length
        ) {

            if (
                !sentenceCompleted
            ) {

                completeSentence();

            }

        }

    }
);


/* ========================================= */
/* CHALLENGE MESSAGE */
/* ========================================= */

function updateChallenge() {

    const accuracy =
        parseInt(
            accuracyElement.textContent
        );


    if (
        currentStreak >= 20
    ) {

        challengeElement.textContent =
            "🔥 Amazing streak! Keep going!";

    }

    else if (
        currentStreak >= 5
    ) {

        challengeElement.textContent =
            "⚡ Great streak! Keep typing correctly.";

    }

    else if (
        accuracy < 75
    ) {

        challengeElement.textContent =
            "💪 Slow down and focus on accuracy.";

    }

    else if (
        accuracy < 90
    ) {

        challengeElement.textContent =
            "🎯 Try to improve your accuracy.";

    }

    else {

        challengeElement.textContent =
            "⌨️ Type correctly to build your streak.";

    }

}


/* ========================================= */
/* COMPLETE SENTENCE */
/* ========================================= */

function completeSentence() {

    sentenceCompleted =
        true;


    const sentence =
        levels[currentLevel]
            .sentences[
                levelSentenceIndex
            ];


    const typed =
        input.value;


    let correct = 0;


    for (
        let i = 0;
        i < sentence.length;
        i++
    ) {

        if (
            typed[i] ===
            sentence[i]
        ) {

            correct++;

        }

    }


    /* SAVE SENTENCE STATS */

    sentenceStats.push({

        typed:
            typed.length,

        correct:
            correct

    });


    totalCorrectCharacters =
        correctCharacters;


    /* BUG FIX: BEST WPM CHECKPOINT */

    const bestWpmElapsedSeconds =
        getElapsedSeconds();

    if (
        bestWpmElapsedSeconds >=
        3
    ) {

        const bestWpmMinutes =
            bestWpmElapsedSeconds / 60;

        const checkpointWpm =
            Math.round(
                (
                    totalCorrectCharacters / 5
                ) / bestWpmMinutes
            );

        evaluateBestWpm(
            checkpointWpm
        );

    }


    /* LIFETIME STATISTICS */

    savedData.totalSentences++;

    savedData.totalCharacters +=
        typed.length;


    /* ========================================= */
    /* FIX 2: TESTS COMPLETED */
    /* ========================================= */

    savedData.totalTests++;


    /* WEEKLY REPORT TRACKING */

    const activityKey =
        getDateString();

    savedData.weeklyActivity[activityKey] =
        (
            Number(
                savedData.weeklyActivity[activityKey]
            ) || 0
        ) + 1;


    saveData();

    updatePlayerSummary();

    updateWeeklyReport();


    registerDailyActivity();


    /* ACHIEVEMENTS */

    const completed =
        savedData.totalSentences;


    if (
        completed >= 5
    ) {

        checkAchievements(
            completed
        );

    }


    challengeElement.textContent =
        "✅ Sentence completed!";


    /* PROGRESS */

    const levelTotal =
        levels[currentLevel]
            .sentences.length;


    progressElement.style.width =
        (
            (
                levelSentenceIndex + 1
            ) /
            levelTotal
        ) * 100 + "%";


    streakElement.textContent =
        currentStreak;

    bigStreakElement.textContent =
        currentStreak;

    rightCurrentStreak.textContent =
        currentStreak;


    /* NEXT SENTENCE */

    nextSentenceTimer =
        setTimeout(
            () => {

                nextSentenceTimer =
                    null;

                nextSentence();

            },
            600
        );

}


/* ========================================= */
/* NEXT SENTENCE */
/* ========================================= */

function nextSentence() {

    const levelSentences =
        levels[currentLevel]
            .sentences;


    /* NEW FEATURE: practice modes (timed, word-count, endless,
       zen) never run out of sentences or advance a level - they
       just loop the current level's sentences until the mode's
       own end condition fires, or the player hits Restart. */
    if (currentTestMode) {

        levelSentenceIndex =
            (levelSentenceIndex + 1) %
            levelSentences.length;

        saveLevelProgress();

        loadSentence();

        return;

    }


    /* NEXT SENTENCE */

    if (
        levelSentenceIndex <
        levelSentences.length - 1
    ) {

        levelSentenceIndex++;

        saveLevelProgress();

        loadSentence();

        return;

    }


    /* NEXT LEVEL */

    if (
        currentLevel <
        TOTAL_LEVELS
    ) {

        currentLevel++;

        levelSentenceIndex = 0;

        saveLevelProgress();

        updateLevelDisplay();

        loadSentence();

        return;

    }


    /* ALL LEVELS FINISHED */

    showFinalResults();

}


/* ========================================= */
/* ACHIEVEMENT CHECK */
/* ========================================= */

function checkAchievements(
    completedSentences
) {

    if (
        completedSentences % 5 !== 0
    ) {

        return;

    }


    const milestone =
        completedSentences / 5;


    const achievementIndex =
        Math.min(
            milestone - 1,
            achievements.length - 1
        );


    const achievement =
        achievements[
            achievementIndex
        ];


    if (
        savedData.unlockedAchievements
            .includes(
                achievement.id
            )
    ) {

        updateAchievementList();

        return;

    }


    savedData.unlockedAchievements.push(
        achievement.id
    );


    saveData();


    updateAchievementList();


    showAchievement(
        achievement.name
    );

}


/* ========================================= */
/* SHOW ACHIEVEMENT */
/* ========================================= */

function showAchievement(
    name
) {

    achievementName.textContent =
        name;


    achievementPopup.style.display =
        "flex";


    setTimeout(
        () => {

            achievementPopup.style.display =
                "none";

        },
        2500
    );

}


/* ========================================= */
/* ACHIEVEMENT LIST */
/* ========================================= */

function updateAchievementList() {

    achievementList.innerHTML =
        "";


    const unlocked =
        savedData.unlockedAchievements;


    achievementCount.textContent =
        unlocked.length;


    achievements.forEach(
        achievement => {

            const div =
                document.createElement(
                    "div"
                );


            const isUnlocked =
                unlocked.includes(
                    achievement.id
                );


            if (isUnlocked) {

                div.className =
                    "achievement unlocked";

                div.textContent =
                    "🏆 " +
                    achievement.name;

            }

            else {

                div.className =
                    "achievement locked";

                div.textContent =
                    "🔒 " +
                    achievement.name;

            }


            achievementList.appendChild(
                div
            );

        }
    );

}


/* ========================================= */
/* FINAL RESULTS */
/* ========================================= */

function showFinalResults() {

    clearInterval(timer);

    timer = null;

    testRunning = false;

    input.blur();


    const elapsed =
        getElapsedSeconds();


    const minutes =
        elapsed / 60;


    let finalWpmValue = 0;


    if (
        minutes > 0
    ) {

        finalWpmValue =
            Math.round(
                (
                    totalCorrectCharacters / 5
                ) / minutes
            );

    }


    let finalAccuracyValue = 0;


    if (
        typedCharacters > 0
    ) {

        finalAccuracyValue =
            Math.round(
                (
                    correctCharacters /
                    typedCharacters
                ) * 100
            );

    }

    else {

        finalAccuracyValue =
            100;

    }


    /* RESULTS */

    finalWpm.textContent =
        finalWpmValue;

    finalAccuracy.textContent =
        finalAccuracyValue +
        "%";

    finalStreak.textContent =
        highestStreak;

    finalCharacters.textContent =
        typedCharacters;

    finalTime.textContent =
        formatTimer(
            Math.floor(elapsed)
        );


    /* TOTAL TIME SPENT (OVERALL, ACROSS ALL TESTS) */

    savedData.totalTimeSeconds =
        (Number(savedData.totalTimeSeconds) || 0) +
        Math.floor(elapsed);


    finalDailyGoal.textContent =
        `${savedData.dailyCompleted} / ${DAILY_GOAL}`;


    /* BEST ACCURACY */

    if (
        finalAccuracyValue >
        savedData.bestAccuracy
    ) {

        savedData.bestAccuracy =
            finalAccuracyValue;

    }


    /* BEST WPM */

    const newBestWpm =
        evaluateBestWpm(
            finalWpmValue
        );


    /*
     * TOTAL TESTS IS UPDATED IN completeSentence()
     * SO IT IS NOT UPDATED HERE AGAIN.
     */


    /* LEADERBOARD ENTRY
     *
     * The leaderboard is shared across every player who uses this
     * app/device, keyed by their profile name. Each player only ever
     * occupies ONE row - their personal best run - so the board is
     * a true "who is the top player" ranking instead of a history of
     * a single player's last few runs. A new run only replaces that
     * player's row when it beats their existing best WPM.
     */

    const leaderboardPlayerName =
        getProfileDisplayName();

    const existingPlayerEntry =
        savedData.leaderboard.find(
            (entry) =>
                (entry.name || "Guest") ===
                leaderboardPlayerName
        );

    if (!existingPlayerEntry) {

        savedData.leaderboard.push({

            name: leaderboardPlayerName,

            wpm: finalWpmValue,

            accuracy: finalAccuracyValue,

            date: getDateString()

        });

    }

    else if (
        finalWpmValue >
        existingPlayerEntry.wpm
    ) {

        existingPlayerEntry.wpm =
            finalWpmValue;

        existingPlayerEntry.accuracy =
            finalAccuracyValue;

        existingPlayerEntry.date =
            getDateString();

    }


    /* Rank every player by best WPM so the top performer always
     * shows first. Nothing is sliced off here anymore - the whole
     * board is kept and the card itself scrolls instead of growing,
     * so adding more players never changes the leaderboard card's
     * size. */
    savedData.leaderboard.sort(
        (a, b) => b.wpm - a.wpm
    );


    /* YOUR PROGRESS ENTRY */

    recordProgressPoint(
        finalWpmValue,
        finalAccuracyValue
    );


    saveData();


    /* UPDATE TOP DISPLAY */

    updatePlayerSummary();

    updateLeaderboard();

    updateProgressChart();


    /* NEW BEST MESSAGE */

    if (newBestWpm) {

        challengeElement.textContent =
            `🏆 New Best WPM: ${finalWpmValue}!`;

    }


    /* PERFORMANCE MESSAGE */

    if (
        finalWpmValue >= 60 &&
        finalAccuracyValue >= 95
    ) {

        performanceMessage.textContent =
            "🔥 Incredible! You are a typing master!";

    }

    else if (
        finalWpmValue >= 40 &&
        finalAccuracyValue >= 90
    ) {

        performanceMessage.textContent =
            "⚡ Excellent performance!";

    }

    else if (
        finalAccuracyValue >= 90
    ) {

        performanceMessage.textContent =
            "🎯 Great accuracy! Keep building speed.";

    }

    else {

        performanceMessage.textContent =
            "💪 Keep practicing. You will improve!";

    }


    results.style.display =
        "flex";

}


/* ========================================= */
/* RESTART TEST */
/* ========================================= */

function restartTest() {

    clearInterval(timer);

    timer = null;


    clearTimeout(
        nextSentenceTimer
    );

    nextSentenceTimer =
        null;


    currentTestMode = null;

    currentLevel = 1;

    levelSentenceIndex = 0;

    saveLevelProgress();

    typedCharacters = 0;

    correctCharacters = 0;

    currentStreak = 0;

    highestStreak = 0;

    testStartTime = null;

    testRunning = false;

    sentenceCompleted = false;

    previousTypedLength = 0;

    totalCorrectCharacters = 0;

    sentenceStats = [];


    input.value = "";


    results.style.display =
        "none";


    timerElement.textContent =
        "00:00:00";


    wpmElement.textContent =
        "0";


    accuracyElement.textContent =
        "100%";


    streakElement.textContent =
        "0";


    bigWpmElement.textContent =
        "0";


    bigStreakElement.textContent =
        "0";


    rightCurrentStreak.textContent =
        "0";


    progressElement.style.width =
        "0%";


    challengeElement.textContent =
        "⌨️ Type correctly to build your streak.";


    updatePlayerSummary();


    loadSentence();


    setTimeout(
        () => {

            input.focus();

        },
        100
    );

}


/* ========================================= */
/* CLICK TYPING AREA */
/* ========================================= */

sentenceBox.addEventListener(
    "click",
    () => {

        if (
            results.style.display !==
            "flex"
        ) {

            input.focus();

        }

    }
);


/* ========================================= */
/* KEYBOARD FOCUS */
/* ========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            results.style.display ===
            "flex"
        ) {

            return;

        }


        /* BUG FIX: don't steal focus while the player is
           typing into the Profile modal (name field, etc.)
           or into any other text input/textarea on the
           page - only the game's own hidden input should
           get auto-refocused. */

        if (
            profileModal &&
            profileModal.classList.contains("show")
        ) {

            return;

        }


        /* Same fix as above, but for the new theme/font picker
           modals - don't steal focus back to the game while
           either of them is open. */

        if (
            (
                themeModal &&
                themeModal.classList.contains("show")
            ) ||
            (
                fontModal &&
                fontModal.classList.contains("show")
            )
        ) {

            return;

        }


        const target =
            event.target;

        if (
            target &&
            target !== input &&
            (
                target.tagName === "INPUT" ||
                target.tagName === "TEXTAREA" ||
                target.isContentEditable
            )
        ) {

            return;

        }


        if (
            event.ctrlKey ||
            event.altKey ||
            event.metaKey
        ) {

            return;

        }


        input.focus();

    }
);


/* ========================================= */
/* PREVENT PASTE */
/* ========================================= */

input.addEventListener(
    "paste",
    function (event) {

        event.preventDefault();

    }
);


input.addEventListener(
    "drop",
    function (event) {

        event.preventDefault();

    }
);


input.addEventListener(
    "cut",
    function (event) {

        event.preventDefault();

    }
);


/* ========================================= */
/* BUTTONS */
/* ========================================= */

restartButton.addEventListener(
    "click",
    restartTest
);


tryAgainButton.addEventListener(
    "click",
    restartTest
);


/* ========================================= */
/* VIRTUAL KEYBOARD */
/* ========================================= */

const kbKeyElements =
    virtualKeyboard
        ? virtualKeyboard.querySelectorAll(".kb-key")
        : [];

const kbKeyMap = {};

kbKeyElements.forEach(
    keyEl => {

        const keyName =
            keyEl.dataset.key;

        if (!kbKeyMap[keyName]) {

            kbKeyMap[keyName] = [];

        }

        kbKeyMap[keyName].push(keyEl);

    }
);


function getKeyboardLookup(
    rawKey
) {

    if (rawKey === " ") {

        return " ";

    }


    if (rawKey.length === 1) {

        return rawKey.toLowerCase();

    }


    return rawKey;

}


function highlightNextKey() {

    if (!virtualKeyboard) {

        return;

    }


    kbKeyElements.forEach(
        keyEl => {

            keyEl.classList.remove(
                "kb-next"
            );

        }
    );


    if (
        results.style.display ===
        "flex"
    ) {

        return;

    }


    const levelData =
        levels[currentLevel];

    if (!levelData) {

        return;

    }


    const sentence =
        levelData.sentences[
            levelSentenceIndex
        ];

    if (!sentence) {

        return;

    }


    const typedLength =
        input.value.length;

    if (
        typedLength >=
        sentence.length
    ) {

        return;

    }


    const nextChar =
        sentence[typedLength];

    const lookupKey =
        getKeyboardLookup(nextChar);

    const matches =
        kbKeyMap[lookupKey];

    if (matches) {

        matches.forEach(
            keyEl => {

                keyEl.classList.add(
                    "kb-next"
                );

            }
        );

    }


    if (
        nextChar !== " " &&
        nextChar !==
            nextChar.toLowerCase()
    ) {

        const shiftKeys =
            kbKeyMap["Shift"];

        if (shiftKeys) {

            shiftKeys.forEach(
                keyEl => {

                    keyEl.classList.add(
                        "kb-next"
                    );

                }
            );

        }

    }

}


function pressVirtualKey(
    rawKey
) {

    if (!virtualKeyboard) {

        return;

    }


    const matches =
        kbKeyMap[
            getKeyboardLookup(rawKey)
        ];

    if (matches) {

        matches.forEach(
            keyEl => {

                keyEl.classList.add(
                    "kb-active"
                );

            }
        );

    }

}


function releaseVirtualKey(
    rawKey
) {

    if (!virtualKeyboard) {

        return;

    }


    const matches =
        kbKeyMap[
            getKeyboardLookup(rawKey)
        ];

    if (matches) {

        matches.forEach(
            keyEl => {

                keyEl.classList.remove(
                    "kb-active"
                );

            }
        );

    }

}


if (virtualKeyboard) {

    input.addEventListener(
        "keydown",
        function (event) {

            pressVirtualKey(
                event.key
            );

        }
    );


    input.addEventListener(
        "keyup",
        function (event) {

            releaseVirtualKey(
                event.key
            );

        }
    );


    document.addEventListener(
        "keyup",
        function (event) {

            releaseVirtualKey(
                event.key
            );

        }
    );


    input.addEventListener(
        "input",
        function () {

            highlightNextKey();

        }
    );

}


/* ========================================= */
/* NEW FEATURE: INTRO / SPLASH SCREEN */
/* ========================================= */

/*
 * Shows the phoenix image first, then - half a second
 * later - smoothly fades/slides the "Pheonix Type" title,
 * subtitle, and greeting up from the bottom. The main app
 * stays hidden behind this screen (and then behind the level
 * select screen) until a level is chosen - there is no
 * automatic timeout.
 */

const MOTIVATIONAL_SLOGANS = [
    "Every keystroke brings you closer to mastery.",
    "Speed is earned one accurate letter at a time.",
    "Great typists are built one practice session at a time.",
    "Your fingers remember what your mind repeats.",
    "Consistency beats intensity - keep typing.",
    "Today's practice is tomorrow's speed record.",
    "Accuracy first, speed follows.",
    "Small daily gains lead to big typing wins.",
    "Champions type through the mistakes too.",
    "The keyboard rewards patience and practice.",
    "Push your WPM one sentence at a time.",
    "Discipline today, mastery tomorrow.",
    "You're one session closer to your best streak.",
    "Progress is quiet, but it's happening - keep going."
];


function showRandomMotivation() {

    if (!introMotivationElement) {

        return;

    }

    const pick =
        MOTIVATIONAL_SLOGANS[
            Math.floor(
                Math.random() *
                MOTIVATIONAL_SLOGANS.length
            )
        ];

    introMotivationElement.textContent =
        "\u201C" + pick + "\u201D";

}


showRandomMotivation();


/* ========================================= */
/* NEW FEATURE: LEVEL SELECT SCREEN */
/* ========================================= */

/*
 * Shown every time, right after the intro screen and right
 * before the main app. Only levels up to highestLevelReached
 * can be opened; the rest stay locked until earned.
 */

/* NEW FEATURE: PRACTICE MODE CATEGORIES */

/*
 * Shown below the level grid on the level select screen.
 * Picking one of these starts a quick session using the
 * player's current level's sentences, instead of the classic
 * "finish every level in order" flow.
 */

const PRACTICE_MODES = [
    { id: "time15", label: "15 Sec", icon: "⏱️", type: "time", value: 15 },
    { id: "time30", label: "30 Sec", icon: "⏱️", type: "time", value: 30 },
    { id: "time60", label: "60 Sec", icon: "⏱️", type: "time", value: 60 },
    { id: "time120", label: "120 Sec", icon: "⏱️", type: "time", value: 120 },
    { id: "endless", label: "Endless", icon: "♾️", type: "endless", value: null },
    { id: "words10", label: "10 Words", icon: "🔤", type: "words", value: 10 },
    { id: "words25", label: "25 Words", icon: "🔤", type: "words", value: 25 },
    { id: "words50", label: "50 Words", icon: "🔤", type: "words", value: 50 },
    { id: "words100", label: "100 Words", icon: "🔤", type: "words", value: 100 },
    { id: "zen", label: "Zen Mode", icon: "🧘", type: "zen", value: null }
];


function populatePracticeModes() {

    if (!modeSelectGrid) {

        return;

    }

    modeSelectGrid.innerHTML = "";

    PRACTICE_MODES.forEach(
        mode => {

            const card =
                document.createElement("button");

            card.type = "button";

            card.className =
                "mode-select-card" +
                (
                    currentTestMode &&
                    currentTestMode.id === mode.id ?
                        " active" :
                        ""
                );


            const icon =
                document.createElement("div");

            icon.className =
                "mode-select-icon";

            icon.textContent =
                mode.icon;


            const name =
                document.createElement("div");

            name.className =
                "mode-select-name";

            name.textContent =
                mode.label;


            card.appendChild(icon);
            card.appendChild(name);


            card.addEventListener(
                "click",
                () => startPracticeMode(mode)
            );


            modeSelectGrid.appendChild(card);

        }
    );

}


function startPracticeMode(mode) {

    currentTestMode = mode;

    currentLevel =
        Number(savedData.currentLevel) || 1;

    levelSentenceIndex = 0;

    saveLevelProgress();

    updateLevelDisplay();

    loadSentence();

    enterMainApp();

}


function populateLevelSelectScreen() {

    if (!levelSelectGrid) {

        return;

    }


    const highestReached =
        Number(savedData.highestLevelReached) || 1;

    const lastPlayedLevel =
        Number(savedData.currentLevel) || 1;


    levelSelectGrid.innerHTML =
        "";


    for (
        let level = 1;
        level <= TOTAL_LEVELS;
        level++
    ) {

        const data =
            levelDisplayData[level];

        if (!data) {

            continue;

        }


        const isUnlocked =
            level <= highestReached;

        const isActive =
            level === lastPlayedLevel;


        const card =
            document.createElement("button");

        card.type =
            "button";

        card.className =
            "level-select-card " +
            (
                isUnlocked ?
                    "unlocked" :
                    "locked"
            ) +
            (
                isActive ?
                    " active" :
                    ""
            );

        card.disabled =
            !isUnlocked;


        const icon =
            document.createElement("div");

        icon.className =
            "level-select-icon";

        icon.textContent =
            data.image;


        const name =
            document.createElement("div");

        name.className =
            "level-select-name";

        name.textContent =
            `Lv ${level} · ${data.name}`;


        const status =
            document.createElement("div");

        status.className =
            "level-select-status";

        status.textContent =
            isUnlocked ?
                (
                    isActive ?
                        "Continue here" :
                        "Completed"
                ) :
                "🔒 Locked";


        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(status);


        if (isUnlocked) {

            card.addEventListener(
                "click",
                () => selectLevelAndEnter(level)
            );

        }


        levelSelectGrid.appendChild(card);

    }

}


function selectLevelAndEnter(level) {

    /* Picking a level card directly always means the classic,
       finish-every-level mode - not one of the practice modes. */
    currentTestMode = null;

    currentLevel =
        level;

    levelSentenceIndex =
        level === Number(savedData.currentLevel) ?
            (Number(savedData.levelSentenceIndex) || 0) :
            0;

    saveLevelProgress();

    updateLevelDisplay();

    loadSentence();

    enterMainApp();

}


function enterMainApp() {

    if (levelSelectScreen) {

        levelSelectScreen.classList.add(
            "fade-out"
        );

        setTimeout(
            () => {

                levelSelectScreen.style.display =
                    "none";

            },
            650
        );

    }


    setTimeout(
        () => {

            input.focus();

        },
        700
    );

}


function openLevelSelectScreen() {

    if (introScreen) {

        introScreen.classList.add(
            "fade-out"
        );

        setTimeout(
            () => {

                introScreen.style.display =
                    "none";

            },
            650
        );

    }


    populateLevelSelectScreen();

    populatePracticeModes();


    if (levelSelectScreen) {

        levelSelectScreen.classList.remove(
            "fade-out"
        );

        levelSelectScreen.style.display =
            "flex";

    }

}


/* ========================================= */
/* NEW FEATURE: BACK TO LEVEL / MODE SELECT */
/* ========================================= */

/*
 * Previously, once a player entered the main typing app there was
 * no way back to the level/mode select screen short of reloading
 * the page. This pauses whatever test is running and re-opens the
 * same select screen so the player can pick a different level or
 * practice mode.
 */
function goBackToLevelSelect() {

    if (timer) {

        clearInterval(timer);

        timer = null;

    }

    testRunning = false;


    if (appContainer &&
        (
            appContainer.classList.contains("main-panel-maximized") ||
            appContainer.classList.contains("panel-sliding-out")
        )) {

        appContainer.classList.remove(
            "main-panel-maximized"
        );

        appContainer.classList.remove(
            "panel-sliding-out"
        );

        if (mainPanelToggleButton) {

            mainPanelToggleButton.textContent =
                "⛶";

            mainPanelToggleButton.title =
                "Maximize";

        }

    }


    openLevelSelectScreen();

}


if (backToSelectButton) {

    backToSelectButton.addEventListener(
        "click",
        goBackToLevelSelect
    );

}


/* ========================================= */
/* NEW FEATURE: MAXIMIZE / MINIMIZE MIDDLE CARD */
/* ========================================= */

/*
 * Only the middle (typing) card can be maximized. When maximized
 * it fills the whole screen; the left and right cards slide away
 * (left card to the left, right card to the right) instead of just
 * vanishing - they never maximize themselves. Minimizing reverses
 * the slide so they glide straight back in from the same side.
 */

/* How long the left/right slide animation takes (ms). Kept in sync
 * with the transition duration set on .left-panel / .right-panel. */
const PANEL_SLIDE_DURATION_MS = 450;

function toggleMainPanelMaximize() {

    if (!appContainer ||
        !mainPanelToggleButton) {

        return;

    }

    const isCurrentlyMaximized =
        appContainer.classList.contains(
            "main-panel-maximized"
        );

    if (!isCurrentlyMaximized) {

        /* MAXIMIZING: slide the left/right cards away first, then
         * expand the middle card once they're clear of the screen
         * so the slide animation is actually visible instead of
         * being hidden underneath the middle card's instant jump
         * to fullscreen. */

        appContainer.classList.add(
            "panel-sliding-out"
        );

        mainPanelToggleButton.textContent =
            "🗗";

        mainPanelToggleButton.title =
            "Minimize";

        setTimeout(
            () => {

                appContainer.classList.remove(
                    "panel-sliding-out"
                );

                appContainer.classList.add(
                    "main-panel-maximized"
                );

            },
            PANEL_SLIDE_DURATION_MS
        );

    }

    else {

        /* MINIMIZING: drop the middle card back to its normal size
         * right away - the left/right cards automatically glide
         * back in (left from the left, right from the right) since
         * they share the same slide transition. */

        appContainer.classList.remove(
            "main-panel-maximized"
        );

        mainPanelToggleButton.textContent =
            "⛶";

        mainPanelToggleButton.title =
            "Maximize";

    }

}


if (mainPanelToggleButton) {

    mainPanelToggleButton.addEventListener(
        "click",
        toggleMainPanelMaximize
    );

}


if (introScreen) {

    setTimeout(
        () => {

            if (introTextBlock) {

                introTextBlock.classList.add(
                    "show"
                );

            }

        },
        500
    );


    if (introContinueButton) {

        introContinueButton.addEventListener(
            "click",
            openLevelSelectScreen
        );

    }

    /* NOTE: there is intentionally no auto-continue timer
       here anymore - the level select screen only opens once
       the person clicks "Continue", never on its own. */

}


/* ========================================= */
/* NEW FEATURE: PLAYER PROFILE MODAL */
/* ========================================= */

/*
 * A small modal where personal details are shown/edited:
 * a custom profile photo, a display name, and a quick
 * snapshot of stats. Data is stored inside savedData.
 */

function getProfileDisplayName() {

    return savedData.profileName || "Guest";

}


function getProfileAvatarSrc() {

    return (
        savedData.profileAvatar ||
        DEFAULT_AVATAR_IMAGE
    );

}


function updateProfileStatsDisplay() {

    if (profileLevelElement) {

        profileLevelElement.textContent =
            currentLevel;

    }


    if (profileBestWpmElement) {

        profileBestWpmElement.textContent =
            Number(savedData.bestWpm) || 0;

    }


    if (profileBestStreakElement) {

        profileBestStreakElement.textContent =
            Number(savedData.bestStreak) || 0;

    }


    if (profileTotalTestsElement) {

        profileTotalTestsElement.textContent =
            Number(savedData.totalTests) || 0;

    }


    if (profileTotalTimeElement) {

        profileTotalTimeElement.textContent =
            formatTimer(
                Math.floor(
                    Number(savedData.totalTimeSeconds) || 0
                )
            );

    }

}


function refreshProfileModalFields() {

    if (profileAvatarPreview) {

        profileAvatarPreview.src =
            getProfileAvatarSrc();

    }


    if (profileNameInput) {

        profileNameInput.value =
            savedData.profileName || "";

        profileNameInput.placeholder =
            "Type your name";

        /* Reopen the modal in read-only "view" state - the
           player must press Edit before typing, and Save to
           commit the change, instead of it auto-saving on
           every keystroke. */
        profileNameInput.readOnly =
            true;

    }


    if (profileNameWrap) {

        profileNameWrap.classList.remove(
            "editing"
        );

    }


    if (profileEmailDisplay) {

        profileEmailDisplay.textContent =
            "Playing as guest";

    }


    updateProfileStatsDisplay();

}


function openProfileModal() {

    refreshProfileModalFields();

    if (profileModal) {

        profileModal.classList.add("show");

    }

}


function closeProfileModal() {

    if (profileModal) {

        profileModal.classList.remove("show");

    }

}


if (openProfileButton) {

    openProfileButton.addEventListener(
        "click",
        openProfileModal
    );

}


if (openProfileButtonSide) {

    openProfileButtonSide.addEventListener(
        "click",
        openProfileModal
    );

}


if (closeProfileButton) {

    closeProfileButton.addEventListener(
        "click",
        closeProfileModal
    );

}


if (profileModal) {

    profileModal.addEventListener(
        "click",
        event => {

            if (event.target === profileModal) {

                closeProfileModal();

            }

        }
    );

}


/* ========================================= */
/* NEW FEATURE: EDIT / SAVE DISPLAY NAME */
/* ========================================= */

function enterProfileNameEditMode() {

    if (!profileNameInput) {

        return;

    }

    profileNameInput.readOnly =
        false;

    profileNameInput.focus();

    profileNameInput.select();


    if (profileNameWrap) {

        profileNameWrap.classList.add(
            "editing"
        );

    }

}


function saveProfileName() {

    if (!profileNameInput) {

        return;

    }

    savedData.profileName =
        profileNameInput.value
            .slice(0, 24);

    saveData();

    profileNameInput.readOnly =
        true;


    if (profileNameWrap) {

        profileNameWrap.classList.remove(
            "editing"
        );

    }

}


if (profileNameEditButton) {

    profileNameEditButton.addEventListener(
        "click",
        enterProfileNameEditMode
    );

}


if (profileNameSaveButton) {

    profileNameSaveButton.addEventListener(
        "click",
        saveProfileName
    );

}


if (profileNameInput) {

    profileNameInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter" &&
                !profileNameInput.readOnly) {

                event.preventDefault();

                saveProfileName();

            }

        }
    );

}


if (profileAvatarInput) {

    profileAvatarInput.addEventListener(
        "change",
        () => {

            const file =
                profileAvatarInput.files &&
                profileAvatarInput.files[0];

            if (!file) {

                return;

            }


            const reader = new FileReader();

            reader.onload = () => {

                savedData.profileAvatar =
                    String(reader.result || "");

                saveData();

                if (profileAvatarPreview) {

                    profileAvatarPreview.src =
                        getProfileAvatarSrc();

                }

            };

            reader.readAsDataURL(file);

        }
    );

}


/* ========================================= */
/* NEW FEATURE: KEYBOARD / ACCENT THEMES */
/* ========================================= */

/*
 * Lets the person pick a color theme from the left-panel
 * "Customize" card. The theme swaps the virtual keyboard's
 * highlight colors as well as the right-panel card accents,
 * via CSS variables set on <body data-theme="...">.
 */

const VALID_THEMES = [
    "classic",
    "neon",
    "sunset",
    "ocean",
    "crimson",
    "forest",
    "galaxy",
    "gold",
    "ice",
    "mono",
    "rose",
    "lime",
    "cyberpunk",
    "mint",
    "lava",
    "arctic",
    "berry",
    "amber",
    "steel",
    "candy",
    "sapphire",
    "emerald",
    "ruby",
    "topaz",
    "amethyst",
    "obsidian",
    "coral",
    "peach",
    "lavender",
    "slate",
    "midnight",
    "sakura",
    "autumn",
    "glacier",
    "volcano",
    "jade",
    "plum",
    "citrus",
    "storm",
    "desert",
    "neonblue",
    "neonpink",
    "neongreen",
    "copper",
    "onyx",
    "blossom",
    "tidal",
    "royal",
    "inferno",
    "frostbite"
];


const THEME_LABELS = {
    classic: "Classic",
    neon: "Neon",
    sunset: "Sunset",
    ocean: "Ocean",
    crimson: "Crimson",
    forest: "Forest",
    galaxy: "Galaxy",
    gold: "Gold",
    ice: "Ice",
    mono: "Monochrome",
    rose: "Rose",
    lime: "Lime",
    cyberpunk: "Cyberpunk",
    mint: "Mint",
    lava: "Lava",
    arctic: "Arctic",
    berry: "Berry",
    amber: "Amber",
    steel: "Steel",
    candy: "Candy",
    sapphire: "Sapphire",
    emerald: "Emerald",
    ruby: "Ruby",
    topaz: "Topaz",
    amethyst: "Amethyst",
    obsidian: "Obsidian",
    coral: "Coral",
    peach: "Peach",
    lavender: "Lavender",
    slate: "Slate",
    midnight: "Midnight",
    sakura: "Sakura",
    autumn: "Autumn",
    glacier: "Glacier",
    volcano: "Volcano",
    jade: "Jade",
    plum: "Plum",
    citrus: "Citrus",
    storm: "Storm",
    desert: "Desert",
    neonblue: "Neon Blue",
    neonpink: "Neon Pink",
    neongreen: "Neon Green",
    copper: "Copper",
    onyx: "Onyx",
    blossom: "Blossom",
    tidal: "Tidal",
    royal: "Royal",
    inferno: "Inferno",
    frostbite: "Frostbite"
};


const activeThemeLabel =
    document.getElementById("activeThemeLabel");

const activeThemePreview =
    document.getElementById("activeThemePreview");


function applyTheme(theme) {

    const safeTheme =
        VALID_THEMES.includes(theme) ?
            theme :
            "classic";

    document.body.setAttribute(
        "data-theme",
        safeTheme
    );


    themeSwatches.forEach(
        swatch => {

            swatch.classList.toggle(
                "active",
                swatch.dataset.theme === safeTheme
            );

        }
    );


    if (activeThemeLabel) {

        activeThemeLabel.textContent =
            THEME_LABELS[safeTheme] ||
            "Classic";

    }


    if (activeThemePreview) {

        activeThemePreview.className =
            "customize-open-btn-preview swatch-" +
            safeTheme;

    }


    try {

        localStorage.setItem(
            "typeRushTheme",
            safeTheme
        );

    }

    catch (e) {}

}


function loadStoredTheme() {

    let stored = "classic";

    try {

        stored =
            localStorage.getItem("typeRushTheme") ||
            "classic";

    }

    catch (e) {

        stored = "classic";

    }


    applyTheme(stored);

}


themeSwatches.forEach(
    swatch => {

        swatch.addEventListener(
            "click",
            () => {

                applyTheme(swatch.dataset.theme);

            }
        );

    }
);


loadStoredTheme();


/* ========================================= */
/* NEW FEATURE: TYPING FONTS (20 fonts) */
/* ========================================= */

/*
 * Lets the person pick the font used for the sentence text, the
 * typing input, and the on-screen keyboard, from the "Fonts"
 * button in the left-panel "Customize" card. Works the same way
 * as applyTheme()/loadStoredTheme() above, but sets
 * <body data-font="..."> instead, which drives the --app-font
 * CSS variable.
 */

const fontSwatches =
    document.querySelectorAll(".font-swatch");

const activeFontLabel =
    document.getElementById("activeFontLabel");

const VALID_FONTS = [
    "classic",
    "robotomono",
    "firacode",
    "jetbrainsmono",
    "sourcecodepro",
    "ibmplexmono",
    "spacemono",
    "inconsolata",
    "courierprime",
    "ubuntumono",
    "poppins",
    "montserrat",
    "nunito",
    "quicksand",
    "raleway",
    "rubik",
    "worksans",
    "lato",
    "opensans",
    "inter",
    "merriweather",
    "playfairdisplay",
    "lora",
    "ptserif",
    "crimsontext",
    "ebgaramond",
    "librebaskerville",
    "notoserif",
    "robotoslab",
    "bitter",
    "oswald",
    "bebasneue",
    "anton",
    "archivo",
    "barlow",
    "cabin",
    "karla",
    "manrope",
    "mulish",
    "dmsans",
    "josefinsans",
    "comfortaa",
    "dancingscript",
    "pacifico",
    "caveat",
    "indieflower",
    "shadowsintolight",
    "permanentmarker",
    "vt323",
    "pressstart2p"
];


const FONT_LABELS = {
    classic: "Classic",
    robotomono: "Roboto Mono",
    firacode: "Fira Code",
    jetbrainsmono: "JetBrains Mono",
    sourcecodepro: "Source Code Pro",
    ibmplexmono: "IBM Plex Mono",
    spacemono: "Space Mono",
    inconsolata: "Inconsolata",
    courierprime: "Courier Prime",
    ubuntumono: "Ubuntu Mono",
    poppins: "Poppins",
    montserrat: "Montserrat",
    nunito: "Nunito",
    quicksand: "Quicksand",
    raleway: "Raleway",
    rubik: "Rubik",
    worksans: "Work Sans",
    lato: "Lato",
    opensans: "Open Sans",
    inter: "Inter",
    merriweather: "Merriweather",
    playfairdisplay: "Playfair Display",
    lora: "Lora",
    ptserif: "PT Serif",
    crimsontext: "Crimson Text",
    ebgaramond: "EB Garamond",
    librebaskerville: "Libre Baskerville",
    notoserif: "Noto Serif",
    robotoslab: "Roboto Slab",
    bitter: "Bitter",
    oswald: "Oswald",
    bebasneue: "Bebas Neue",
    anton: "Anton",
    archivo: "Archivo",
    barlow: "Barlow",
    cabin: "Cabin",
    karla: "Karla",
    manrope: "Manrope",
    mulish: "Mulish",
    dmsans: "DM Sans",
    josefinsans: "Josefin Sans",
    comfortaa: "Comfortaa",
    dancingscript: "Dancing Script",
    pacifico: "Pacifico",
    caveat: "Caveat",
    indieflower: "Indie Flower",
    shadowsintolight: "Shadows Into Light",
    permanentmarker: "Permanent Marker",
    vt323: "VT323",
    pressstart2p: "Press Start 2P"
};


function applyFont(font) {

    const safeFont =
        VALID_FONTS.includes(font) ?
            font :
            "classic";

    document.body.setAttribute(
        "data-font",
        safeFont
    );


    fontSwatches.forEach(
        swatch => {

            swatch.classList.toggle(
                "active",
                swatch.dataset.font === safeFont
            );

        }
    );


    if (activeFontLabel) {

        activeFontLabel.textContent =
            FONT_LABELS[safeFont] ||
            "Classic";

    }


    try {

        localStorage.setItem(
            "typeRushFont",
            safeFont
        );

    }

    catch (e) {}

}


function loadStoredFont() {

    let stored = "classic";

    try {

        stored =
            localStorage.getItem("typeRushFont") ||
            "classic";

    }

    catch (e) {

        stored = "classic";

    }


    applyFont(stored);

}


fontSwatches.forEach(
    swatch => {

        swatch.addEventListener(
            "click",
            () => {

                applyFont(swatch.dataset.font);

            }
        );

    }
);


loadStoredFont();


/* ========================================= */
/* NEW FEATURE: KEYBOARD STYLES (50 styles) */
/* ========================================= */

/*
 * Lets the person pick a visual "skin" for the on-screen keyboard
 * keys from the "Keyboard Styles" button in the left-panel
 * "Customize" card. Works the same way as applyTheme()/applyFont()
 * above, but sets <body data-kbstyle="..."> instead, which drives
 * the --kb-bg / --kb-border-color / --kb-radius / --kb-shadow /
 * --kb-color / --kb-weight variables consumed by .kb-key.
 */

const kbStyleSwatches =
    document.querySelectorAll(".kbstyle-swatch");

const activeKbStyleLabel =
    document.getElementById("activeKbStyleLabel");

const VALID_KB_STYLES = [
    "classic",
    "flatdark",
    "flatlight",
    "glass",
    "neumorphlight",
    "neumorphdark",
    "retrobeige",
    "retrocream",
    "mechblack",
    "mechgrey",
    "gamingrgb",
    "wood",
    "metal",
    "chalkboard",
    "paper",
    "neoncyan",
    "neonpink",
    "neongreen",
    "pastelpink",
    "pastelblue",
    "pastelmint",
    "pastellavender",
    "bubble",
    "pixelart",
    "origami",
    "carbonfiber",
    "marble",
    "leather",
    "denim",
    "chrome",
    "goldplated",
    "rosegold",
    "copperkey",
    "bronze",
    "steelblue",
    "midnightglass",
    "frostedglass",
    "sunsetglass",
    "terminalgreen",
    "terminalamber",
    "holographic",
    "icecube",
    "lavarock",
    "sand",
    "emeraldgem",
    "rubygem",
    "sapphiregem",
    "onyxgem",
    "cottoncandy",
    "galaxynebula"
];


const KB_STYLE_LABELS = {
    classic: "Classic",
    flatdark: "Flat Dark",
    flatlight: "Flat Light",
    glass: "Glass",
    neumorphlight: "Neumorphic Light",
    neumorphdark: "Neumorphic Dark",
    retrobeige: "Retro Beige",
    retrocream: "Retro Cream",
    mechblack: "Mechanical Black",
    mechgrey: "Mechanical Grey",
    gamingrgb: "Gaming RGB",
    wood: "Wood",
    metal: "Brushed Metal",
    chalkboard: "Chalkboard",
    paper: "Paper",
    neoncyan: "Neon Cyan",
    neonpink: "Neon Pink",
    neongreen: "Neon Green",
    pastelpink: "Pastel Pink",
    pastelblue: "Pastel Blue",
    pastelmint: "Pastel Mint",
    pastellavender: "Pastel Lavender",
    bubble: "Bubble",
    pixelart: "Pixel Art",
    origami: "Origami",
    carbonfiber: "Carbon Fiber",
    marble: "Marble",
    leather: "Leather",
    denim: "Denim",
    chrome: "Chrome",
    goldplated: "Gold Plated",
    rosegold: "Rose Gold",
    copperkey: "Copper",
    bronze: "Bronze",
    steelblue: "Steel Blue",
    midnightglass: "Midnight Glass",
    frostedglass: "Frosted Glass",
    sunsetglass: "Sunset Glass",
    terminalgreen: "Terminal Green",
    terminalamber: "Terminal Amber",
    holographic: "Holographic",
    icecube: "Ice Cube",
    lavarock: "Lava Rock",
    sand: "Sand",
    emeraldgem: "Emerald Gem",
    rubygem: "Ruby Gem",
    sapphiregem: "Sapphire Gem",
    onyxgem: "Onyx Gem",
    cottoncandy: "Cotton Candy",
    galaxynebula: "Galaxy Nebula"
};


function applyKbStyle(kbStyle) {

    const safeKbStyle =
        VALID_KB_STYLES.includes(kbStyle) ?
            kbStyle :
            "classic";

    document.body.setAttribute(
        "data-kbstyle",
        safeKbStyle
    );


    kbStyleSwatches.forEach(
        swatch => {

            swatch.classList.toggle(
                "active",
                swatch.dataset.kbstyle === safeKbStyle
            );

        }
    );


    if (activeKbStyleLabel) {

        activeKbStyleLabel.textContent =
            KB_STYLE_LABELS[safeKbStyle] ||
            "Classic";

    }


    try {

        localStorage.setItem(
            "typeRushKbStyle",
            safeKbStyle
        );

    }

    catch (e) {}

}


function loadStoredKbStyle() {

    let stored = "classic";

    try {

        stored =
            localStorage.getItem("typeRushKbStyle") ||
            "classic";

    }

    catch (e) {

        stored = "classic";

    }


    applyKbStyle(stored);

}


kbStyleSwatches.forEach(
    swatch => {

        swatch.addEventListener(
            "click",
            () => {

                applyKbStyle(swatch.dataset.kbstyle);

            }
        );

    }
);


loadStoredKbStyle();


/* ========================================= */
/* NEW FEATURE: THEME / FONT PICKER MODALS */
/* ========================================= */

const openThemeModalButton =
    document.getElementById("openThemeModalButton");

const themeModal =
    document.getElementById("themeModal");

const closeThemeModalButton =
    document.getElementById("closeThemeModalButton");

const openFontModalButton =
    document.getElementById("openFontModalButton");

const fontModal =
    document.getElementById("fontModal");

const closeFontModalButton =
    document.getElementById("closeFontModalButton");

const openKeyboardStyleModalButton =
    document.getElementById("openKeyboardStyleModalButton");

const keyboardStyleModal =
    document.getElementById("keyboardStyleModal");

const closeKeyboardStyleModalButton =
    document.getElementById("closeKeyboardStyleModalButton");


function openPickerModal(modal) {

    if (modal) {

        modal.classList.add("show");

    }

}


function closePickerModal(modal) {

    if (modal) {

        modal.classList.remove("show");

    }

}


if (openThemeModalButton) {

    openThemeModalButton.addEventListener(
        "click",
        () => openPickerModal(themeModal)
    );

}


if (closeThemeModalButton) {

    closeThemeModalButton.addEventListener(
        "click",
        () => closePickerModal(themeModal)
    );

}


if (themeModal) {

    themeModal.addEventListener(
        "click",
        event => {

            if (event.target === themeModal) {

                closePickerModal(themeModal);

            }

        }
    );

}


if (openFontModalButton) {

    openFontModalButton.addEventListener(
        "click",
        () => openPickerModal(fontModal)
    );

}


if (closeFontModalButton) {

    closeFontModalButton.addEventListener(
        "click",
        () => closePickerModal(fontModal)
    );

}


if (fontModal) {

    fontModal.addEventListener(
        "click",
        event => {

            if (event.target === fontModal) {

                closePickerModal(fontModal);

            }

        }
    );

}


if (openKeyboardStyleModalButton) {

    openKeyboardStyleModalButton.addEventListener(
        "click",
        () => openPickerModal(keyboardStyleModal)
    );

}


if (closeKeyboardStyleModalButton) {

    closeKeyboardStyleModalButton.addEventListener(
        "click",
        () => closePickerModal(keyboardStyleModal)
    );

}


if (keyboardStyleModal) {

    keyboardStyleModal.addEventListener(
        "click",
        event => {

            if (event.target === keyboardStyleModal) {

                closePickerModal(keyboardStyleModal);

            }

        }
    );

}


/* ========================================= */
/* INITIAL LOAD */
/* ========================================= */

loadDailyData();

updateAchievementList();

updatePlayerSummary();

loadSentence();


setTimeout(
    () => {

        input.focus();

    },
    100
);