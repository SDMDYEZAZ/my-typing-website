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
    }

};


/* ========================================= */
/* SETTINGS */
/* ========================================= */

const DAILY_GOAL = 20;
const TOTAL_LEVELS = 8;


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
/* LOCAL STORAGE */
/* ========================================= */

let savedData =
    JSON.parse(
        localStorage.getItem("typeRushData")
    ) || {

        unlockedAchievements: [],

        bestAccuracy: 0,

        bestWpm: 0,

        totalSentences: 0,

        totalCharacters: 0,

        totalTests: 0,

        dailyStreak: 0,

        lastActiveDate: "",

        dailyCompleted: 0
    };


/* ========================================= */
/* STORAGE SAFETY */
/* ========================================= */

if (!Number.isFinite(Number(savedData.bestWpm))) {

    savedData.bestWpm = 0;

}


if (!Number.isFinite(Number(savedData.totalTests))) {

    savedData.totalTests = 0;

}


if (!Array.isArray(savedData.unlockedAchievements)) {

    savedData.unlockedAchievements = [];

}


saveData();


/* ========================================= */
/* SAVE DATA */
/* ========================================= */

function saveData() {

    localStorage.setItem(
        "typeRushData",
        JSON.stringify(savedData)
    );

}


/* ========================================= */
/* PLAYER SUMMARY */
/* ========================================= */

function updatePlayerSummary() {

    const best =
        Number(savedData.bestWpm) || 0;

    const tests =
        Number(savedData.totalTests) || 0;


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
                cardLevel <
                currentLevel
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


    /* ========================================= */
    /* FIX 1: BEST WPM */
    /* ========================================= */

    if (
        wpm >
        Number(savedData.bestWpm)
    ) {

        savedData.bestWpm =
            wpm;

        saveData();

        updatePlayerSummary();

    }

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


    /* LIFETIME STATISTICS */

    savedData.totalSentences++;

    savedData.totalCharacters +=
        typed.length;


    /* ========================================= */
    /* FIX 2: TESTS COMPLETED */
    /* ========================================= */

    savedData.totalTests++;

    saveData();

    updatePlayerSummary();


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

    let newBestWpm = false;


    if (
        finalWpmValue >
        Number(savedData.bestWpm)
    ) {

        savedData.bestWpm =
            finalWpmValue;

        newBestWpm = true;

    }


    /*
     * TOTAL TESTS IS UPDATED IN completeSentence()
     * SO IT IS NOT UPDATED HERE AGAIN.
     */


    saveData();


    /* UPDATE TOP DISPLAY */

    updatePlayerSummary();


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