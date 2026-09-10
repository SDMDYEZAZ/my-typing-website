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
const TOTAL_LEVELS = 10;


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

const levelCards =
    document.querySelectorAll(".level-card");

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

    levelCards.forEach(
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


function updateProgressChart() {

    if (
        !progressChartElement ||
        !progressTrendElement
    ) {

        return;

    }


    const history =
        Array.isArray(savedData.progressHistory) ?
            savedData.progressHistory :
            [];


    if (history.length < 2) {

        progressChartElement.innerHTML =
            "<p class=\"progress-empty\">" +
            "Finish a couple of tests to see your trend." +
            "</p>";

        progressTrendElement.textContent =
            history.length === 1 ?
                "1 test recorded so far." :
                "Speed, accuracy and achievements combined.";

        progressTrendElement.className =
            "progress-trend-text";

        return;

    }


    const width = 240;

    const height = 80;

    const scores =
        history.map(point => point.score);

    const maxScore =
        Math.max(...scores);

    const minScore =
        Math.min(...scores);

    const scoreRange =
        Math.max(1, maxScore - minScore);

    const stepX =
        width / (scores.length - 1);


    const coords =
        scores.map(
            (score, index) => {

                const x =
                    Math.round(index * stepX);

                const y =
                    Math.round(
                        (height - 6) -
                        (
                            (score - minScore) /
                            scoreRange
                        ) * (height - 12)
                    );

                return { x, y };

            }
        );


    const polylinePoints =
        coords
            .map(point => `${point.x},${point.y}`)
            .join(" ");

    const dotMarkup =
        coords
            .map(
                point =>
                    `<circle cx="${point.x}" cy="${point.y}" ` +
                    `r="3" class="progress-dot"></circle>`
            )
            .join("");


    progressChartElement.innerHTML =
        `<svg viewBox="0 0 ${width} ${height}" ` +
        `preserveAspectRatio="none" class="progress-svg">` +
        `<polyline points="${polylinePoints}" ` +
        `class="progress-line"></polyline>` +
        dotMarkup +
        `</svg>`;


    const latestScore =
        scores[scores.length - 1];

    const previousScore =
        scores[scores.length - 2];

    const scoreDiff =
        latestScore - previousScore;


    if (scoreDiff > 0) {

        progressTrendElement.textContent =
            `▲ Up ${scoreDiff} pts since your last test`;

        progressTrendElement.className =
            "progress-trend-text trend-up";

    }

    else if (scoreDiff < 0) {

        progressTrendElement.textContent =
            `▼ Down ${Math.abs(scoreDiff)} pts since your last test`;

        progressTrendElement.className =
            "progress-trend-text trend-down";

    }

    else {

        progressTrendElement.textContent =
            "→ Holding steady since your last test";

        progressTrendElement.className =
            "progress-trend-text trend-flat";

    }

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

            item.className =
                "leaderboard-item" +
                (
                    rank <= 3
                        ? " rank-" + rank
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

            nameEl.textContent =
                "You";


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


    challengeElement.textContent =
        "⌨️ Type correctly to build your streak.";


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


    /* LEADERBOARD ENTRY */

    savedData.leaderboard.push({

        wpm: finalWpmValue,

        accuracy: finalAccuracyValue,

        date: getDateString()

    });


    savedData.leaderboard.sort(
        (a, b) => b.wpm - a.wpm
    );


    savedData.leaderboard =
        savedData.leaderboard.slice(0, 5);


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


    if (levelSelectScreen) {

        levelSelectScreen.classList.remove(
            "fade-out"
        );

        levelSelectScreen.style.display =
            "flex";

    }

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


if (profileNameInput) {

    profileNameInput.addEventListener(
        "input",
        () => {

            savedData.profileName =
                profileNameInput.value
                    .slice(0, 24);

            saveData();

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
    "lime"
];


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