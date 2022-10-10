$(document).ready(function() {
    //$('#SubscribeModal').css('display', 'block'); 
    //document.getElementById('SubscribeModal').show();
    
});
document.getElementById("mc-embedded-subscribe").addEventListener("click", function() {
    var email = document.getElementById("mce-EMAIL").value;
    /* $('#SubscribeModal').modal({
        show: 'true'
    });  */
    if(validateEmail(email)) {
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
document.getElementById("mc-embedded-subscribe1").addEventListener("click", function() {
    var email = document.getElementById("mce-EMAIL1").value;
    /* $('#SubscribeModal').modal({
        show: 'true'
    });  */
    if(validateEmail(email)) {
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
    }
});
document.getElementById("mc-embedded-subscribe2").addEventListener("click", function() {
    var email = document.getElementById("mce-EMAIL2").value;
    /* $('#SubscribeModal').modal({
        show: 'true'
    });  */
    if(validateEmail(email)) {
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
});
function openVerifyInNewTab(inputId) {
    var email = document.getElementById(inputId).value;
    if (validateEmail(email)) {
        email = email.replaceAll('+', '%2b');
        window.open("https://31a5zi2hct7.typeform.com/to/lWgSRQJS#email=" + email, "_new");            
    }
}
function validateEmail(email) {
    return /^\w+([+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}