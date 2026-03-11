    document.addEventListener("DOMContentLoaded", function() {
    let executeBtn = document.getElementById("Execute");
    let sentenceInput = document.getElementById("sentence");
    let sentCountInput = document.getElementById("sent-count");
    let wordsDiv = document.getElementById("words");
    let countDiv = document.getElementById("count");

    executeBtn.addEventListener("click", function() {
        let sentence = sentenceInput.value;
         let wordss = sentence.split(" ")

         let output = "";
         let wordCount = 0;

      for (let i = 0; i < words.length; i++) {

            if (wordss[i] !== "") {
                output += "<span style='text-decoration: underline;'>" + words[i] + "</span> ";
                wordCount++;
            }
        }

        wordsDiv.innerHTML = output;

        sentCountInput.value = wordCount;

        countDiv.textContent = "Number of words: " + wordCount;
    });
});
