let input1 = document.querySelector(".age")
let input2 = document.querySelector(".meanornice")
let button = document.querySelector("button")
let results = document.querySelector(".results")


button.addEventListener("click", function () {
    console.log("button check")
    let answer1 = input1.value;
    console.log(answer1)
    let answer2 = input2.value;
    console.log(answer2)


    if (answer1 <= 30 && answer2 === "mean") {

        console.log("DC");
        results.innerHTML = "You Like DC";


    }

    if (answer1 >= 30 && answer2 === "nice") {

        console.log("DC");
        results.innerHTML = "You Like Marvel";
    }
    if (answer1 > 30 && answer2 === "mean") {

        console.log("DC");
        results.innerHTML = "You Hate DC";

    }
    if (answer1 < 30 && answer2 === "nice") {

        console.log("DC");
        results.innerHTML = "You Hate Marvel";
    }
});