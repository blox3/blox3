$(document).ready(function () {
    //$('#SubscribeModal').css('display', 'block'); 
    //document.getElementById('SubscribeModal').show();

});
var ListQuestion = [
    {
        question: "What is Blox3",
        answer: "Blox3 is a new fintech platform that connects users to a network of financially regulated institutions to grow their money faster, investing directly into real-world businesses. Blox3 gives users access to growth previously only accessible to institutions."
    },
    {
        question: "Is Blox3 a bank?",
        answer: "Blox3 is neither a bank nor a place to deposit money. Similar to the popular fintech products Cash App, Chime, Robinhood, etc. We are a financial technology firm that creates solutions, like Blox3, that provides access to an ecosystem of top-tier partners to help you earn significant and stable interest on your money."
    },
    {
        question: "How is Blox3 different from other institutions?",
        answer: "Blox3 offers access to financially managed institutions that invest in a self-stable money system (also known as a stablecoin) to protect investors' earnings, unlike other experimental high-yield products currently on the market. Blox3 gives you up to 5x returns compared to regular banks, which offer interest rates that are close to nothing."
    },
    {
        question: "How can I involve in Blox3 community?",
        answer: "The Blox3 community is open to everyone. Take the first step on your Blox3 journey by joining the <a href='https://discord.gg/4zUvcdK7DZ' target='_blank'>Official Blox3 Discord Community</a>"
    }
]
$(document).ready(function () {
    showList();
});
function showList() {
    var questions = "";
    for (let key = 0; key < ListQuestion.length; key++) {

        questions = '<div class="accordion-item wow fadeInUp">'
            + '<h2 class="accordion-header" id="questions' + key + '">'
            + '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' + key + '" aria-expanded="false" aria-controls="collapse' + key + '">' + ListQuestion[key].question + '</button>'
            + '</h2>'
            + '<div id="collapse' + key + '" class="accordion-collapse collapse" aria-labelledby="questions' + key + '" data-bs-parent="#accordionExample">'
            + '<div class="accordion-body">' + ListQuestion[key].answer + '</div>'
            + '</div>'
            + '</div>';
        $("#accordionExample").append(questions);

    };

}
function searchQuestion() {
    $("#accordionExample").html('');
    var text = document.getElementById("question_text").value;
    var questions = "";

    if (text == "") {
        for (let key = 0; key < ListQuestion.length; key++) {

            questions = '<div class="accordion-item wow fadeInUp">'
                + '<h2 class="accordion-header" id="questions' + key + '">'
                + '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' + key + '" aria-expanded="false" aria-controls="collapse' + key + '">' + ListQuestion[key].question + '</button>'
                + '</h2>'
                + '<div id="collapse' + key + '" class="accordion-collapse collapse" aria-labelledby="questions' + key + '" data-bs-parent="#accordionExample">'
                + '<div class="accordion-body">' + ListQuestion[key].answer + '</div>'
                + '</div>'
                + '</div>';
            $("#accordionExample").append(questions);

        };
    }
    else {
        for (let key = 0; key < ListQuestion.length; key++) {
            if (ListQuestion[key].question.toLowerCase().search(text.toLowerCase()) != -1) {
                questions = '<div class="accordion-item wow fadeInUp">'
                    + '<h2 class="accordion-header" id="questions' + key + '">'
                    + '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' + key + '" aria-expanded="false" aria-controls="collapse' + key + '">' + ListQuestion[key].question + '</button>'
                    + '</h2>'
                    + '<div id="collapse' + key + '" class="accordion-collapse collapse" aria-labelledby="questions' + key + '" data-bs-parent="#accordionExample">'
                    + '<div class="accordion-body">' + ListQuestion[key].answer + '</div>'
                    + '</div>'
                    + '</div>';
                $("#accordionExample").append(questions);
            }

        };
    }
};
document.getElementById("mc-embedded-subscribe").addEventListener("click", function () {
    var email = document.getElementById("mce-EMAIL").value;
    if (validateEmail(email)) {
        $.ajax({
            type: 'post',
            url: 'https://subscribe.metabase.build',
            data: JSON.stringify({
                email: email,
                project: 'Blox3'
            }),
            contentType: "application/json; charset=utf-8",
            success: function (res) {

            },
            error: function (err) {

            }
        });
        openVerifyInNewTab("mce-EMAIL");
        bootstrap.Modal.getOrCreateInstance(document.getElementById('SubscribeModal')).show();
    }
});
document.getElementById("mc-embedded-subscribe1").addEventListener("click", function () {
    var email = document.getElementById("mce-EMAIL1").value;
    /* $('#SubscribeModal').modal({
        show: 'true'
    });  */
    if (validateEmail(email)) {
        $.ajax({
            type: 'post',
            url: 'https://subscribe.metabase.build',
            data: JSON.stringify({
                email: email,
                project: 'Blox3'
            }),
            contentType: "application/json; charset=utf-8",
            success: function (res) {

            },
            error: function (err) {

            }
        });
        openVerifyInNewTab("mce-EMAIL1");
        bootstrap.Modal.getOrCreateInstance(document.getElementById('SubscribeModal')).show();
        bootstrap.Modal.getOrCreateInstance(document.getElementById('SignUpModal')).hide();
    }
});
/* document.getElementById("mc-embedded-subscribe2").addEventListener("click", function () {
    var email = document.getElementById("mce-EMAIL2").value;
    if (validateEmail(email)) {
        $.ajax({
            type: 'post',
            url: 'https://subscribe.metabase.build',
            data: JSON.stringify({
                email: email,
                project: 'Blox3'
            }),
            contentType: "application/json; charset=utf-8",
            success: function (res) {

            },
            error: function (err) {

            }
        });
        openVerifyInNewTab("mce-EMAIL2");
        bootstrap.Modal.getOrCreateInstance(document.getElementById('SubscribeModal')).show();
    }
}); */
function openVerifyInNewTab(inputId) {
    var email = document.getElementById(inputId).value;
    if (validateEmail(email)) {
        email = email.replaceAll('+', '%2b');
        window.open("https://form.typeform.com/to/lWgSRQJS#email=" + email, "_new");
    }
}
function validateEmail(email) {
    return /^\w+([+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}