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
}