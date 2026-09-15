/* =====================================================
                    YOUNICATE PEOPLE
===================================================== */

const people = {

    soli: {
        name: "Soliyana Biruk",
        nick: "SOLI • YARIM • SOLULU",
        nickname: "Soli / Yarim / Solulu",
        photo: "soli.jpg",
        love: "📸 loves taking pictures",
        description:
            "The photographer of YOUNICATE. If something happens and nobody took a picture, did it even happen? Soli is always ready to capture another memory."
    },

    kena: {
        name: "Kenawak Tilahun",
        nick: "KENA • MON CHÉRI",
        nickname: "Kena / Mon Chéri",
        photo: "kena.jpg",
        love: "💗 loves PINK",
        description:
            "A proud lover of pink. If there is a choice between pink and literally anything else, we already know which one Kena is choosing."
    },

    muki: {
        name: "Meklit Kifle",
        nick: "MUKI • MEK • ASKIM",
        nickname: "Muki / Mek / Aski(m)",
        photo: "muki.jpg",
        love: "🇹🇷 Turkey + ☕ coffee",
        description:
            "Give Muki something related to Turkey and a good cup of coffee and you've probably made her day."
    },

    agi: {
        name: "Aksan Tewodros",
        nick: "AGI • KANKA",
        nickname: "Agi / Kanka",
        photo: "agi.jpg",
        love: "✝️ loves Jesus",
        description:
            "The spiritual heart of YOUNICATE. Aksan loves Jesus and carries her faith as an important part of who she is."
    },

    // =================================================
    // BITU
    // =================================================

    bitu: {
        name: "Bethania Yohannes",
        nick: "BETHAA • BITUTU • Aşkım #2",
        nickname: "Bethaa / Bitutu / Aşkım #2",
        photo: "bitu.jpg",
        love: "🇹🇷 Turkey • 🤍 friends • ✝️ faith",
        description:
            "Loves Turkey, her friends, learning new things, creating, and keeping her faith close."
    }

};



/* =====================================================
                    OPEN PERSON
===================================================== */

function openPerson(person) {

    const data = people[person];

    document.getElementById("modalPhoto").src =
        data.photo;

    document.getElementById("modalPhoto").alt =
        data.name;

    document.getElementById("modalNick").textContent =
        data.nick;

    document.getElementById("modalName").textContent =
        data.name;

    document.getElementById("modalLove").textContent =
        data.love;

    document.getElementById("modalDescription").textContent =
        data.description;

    document.getElementById("modalNickname").textContent =
        data.nickname;

    document
        .getElementById("personModal")
        .classList.add("show");
}



/* =====================================================
                    CLOSE PERSON
===================================================== */

function closePerson() {

    document
        .getElementById("personModal")
        .classList.remove("show");
}



/* Close modal when clicking outside */

document
    .getElementById("personModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closePerson();
        }

    });



/* =====================================================
                    RANDOM MEMORIES
===================================================== */

const memories = [

    "That one conversation that started normally and somehow became completely chaotic.",

    "The moment we laughed so much that nobody could explain what was funny anymore.",

    "One of those ordinary school days that somehow became a favorite memory.",

    "A photo that makes absolutely no sense to anyone outside YOUNICATE.",

    "The inside joke that should have disappeared months ago but somehow survived.",

    "A completely random moment that none of us expected to remember forever.",

    "That time we were supposed to be serious. We were not serious.",

    "Proof that the best memories are usually the unplanned ones.",

    "Five people. One conversation. Zero productivity.",

    "Another screenshot that definitely did not need to exist.",

    "The kind of memory that makes you smile for no reason.",

    "We really made an entire website because we have too many memories."

];



function randomMemory() {

    const box =
        document.getElementById("randomMemoryText");

    const random =
        memories[
            Math.floor(Math.random() * memories.length)
        ];

    box.style.opacity = "0";

    setTimeout(function() {

        box.textContent = random;

        box.style.opacity = "1";

    }, 200);

}



/* =====================================================
                    OPEN WHEN
===================================================== */

const letters = {

    sad:
        "Hey. Whatever happened, remember that you don't have to figure everything out at once. You have people who care about you, and YOUNICATE is still here. ♡",

    miss:
        "You miss us? Good. That's exactly what this website is for. Go look through the photos and remember all the ridiculous little moments that made us us.",

    laugh:
        "You came here because you need to laugh. Here's your reminder that five people somehow decided they needed a whole website dedicated to their friendship. 😭",

    future:
        "Look how much has already happened. The conversations, jokes, school days, photos and tiny moments. This is only one chapter. There are still so many more to write. ♡"

};



function openLetter(type) {

    alert(letters[type]);

}



/* =====================================================
                    SECRET BUTTON
===================================================== */

function secretMessage() {

    const message =
        document.getElementById("secretMessage");

    const secrets = [

        "You clicked it. I knew you would. 😭",

        "There is absolutely no secret here.",

        "Okay fine. You are officially part of YOUNICATE.",

        "Friendship level: unnecessarily attached ♡",

        "This website contains approximately 0% useful information.",

        "Plot twist: the real secret was the friendship.",

        "Someone definitely needs to add more memories to this website.",

        "YOUNICATE classified information: we are never beating the chaos allegations."

    ];

    const random =
        secrets[
            Math.floor(Math.random() * secrets.length)
        ];

    message.textContent = random;

}



/* =====================================================
                    SCROLL ANIMATIONS
===================================================== */

const cards =
    document.querySelectorAll(
        ".person-card, .memory, .timeline-item"
    );

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );



cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});