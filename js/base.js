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
    var pandaPath = "/assets/-site/panda-" + randomPanda + ".png"; 
    document.getElementById('header-panda').src = pandaPath; 
}

//  Pull random facts

var factList = [
    'Friendly but not super social',
    'Prefers cats over dogs by a landslide',
    'Undecided on the presence of a higher being',
    'NYC native (Upper West Side)',
    'Likes pandas, also cats',
    'Inscrutably particular about sweet foods',
    'Awful at watching movies and TV',
    'Stopping wearing colors in January 2015',
    'Cries during most movies',
    'Might ghost at a party',
    'Always wearing a crown (on her tooth)'
]