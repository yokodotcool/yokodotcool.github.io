---
title: Everything a lesson

last_updated: 
permalink: "everything-a-lesson"
published: true

layout: blank
---

<main class="flexbox">
    <section id="eal-not">✹</section>
    <section id="eal-everything">everything</section>
    <section id="eal-be">✹</section>
    <section id="eal-lesson">a lesson</section>
    <section id="trigger"><button onclick="showNew()">click</button></section>
</main>

<style type="text/css">
    body {
    /* Typography */
        font-size: 4em;
        font-style: italic;
        letter-spacing: -.03em;
        line-height: 1em;
        text-align: center;
    }

    main {
        height: 100vh;

    /* Flex stuff */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #trigger {
        padding: 1rem 0;
    }

    button {
        background-color: rgba(0,0,0,0);
        border: 2px solid black;
        border-radius: 30px; 
        padding: 12px 18px;
        text-align: center;
        font-size: 1.5rem;
        font-family: serif; 
        font-style: italic;
        font-weight: bold;
        transition: 0.1s;
    }

    button:hover {
        border: 4px solid black;
        padding: 10px 16px; 
        cursor: pointer;
    }

    button:active {
        background-color: white;
        border-color: white;
        color: white;
    }
</style>

<script type="text/javascript">
    const ealNot = ["✹", "not"];
    const ealBe = ["is", "can be", "needs to be"];

    function selectRandom(scenarioArray) {
    // Return a random object from an array
        
        return scenarioArray[Math.floor(Math.random()*scenarioArray.length)];
    }

    function getPrettyColor(){
    // Return a random pretty color in HSL format

    const ealHue = Math.floor(Math.random()*256);
    const ealLightness = Math.floor(Math.random()*49) + 50;

    return `hsl(${ealHue}deg, 100%, ${ealLightness}%)`;
    }

    function showNew() {
    // Change the main text
    // Change the background color
        
        document.getElementById("eal-not").innerHTML = selectRandom(ealNot);
        document.getElementById("eal-be").innerHTML = selectRandom(ealBe);
        
        document.body.style.backgroundColor = getPrettyColor();
    }
</script>