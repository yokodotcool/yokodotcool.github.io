//  Pull random panda image

var pandaList = [
    'angel',
    'behind', 
    'cat',
    'chill',
    'coffee',
    'crawl',
    'dash',
    'egg',
    'flower',
    'hungry',
    'idea',
    'kevin',
    'launch',
    'sob',
    'space'
];

function insertPanda() {
    var randomPanda = pandaList[Math.floor(Math.random() * pandaList.length)];
    var pandaPath = "/assets/images/-pandas/panda-" + randomPanda + ".png"; 
    document.getElementById('header-panda').src = pandaPath; 
};

//  Pull random greeting

var greetingList = [
    'Hiya',
    'Sup',
    'Hellooo',
    'Heyo',
    'Hiii',
    'Oh hi',
    'Hhhi'
];

function insertGreeting() {
    let randomGreeting = greetingList[Math.floor(Math.random() * greetingList.length)];
    document.getElementById('random-greeting').src = randomGreeting; 
}