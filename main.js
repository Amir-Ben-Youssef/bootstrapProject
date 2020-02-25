var authentification=[
    {
        username: "amir",
        password: "amirby"
    }
]

function addUser(name, password){
    return authentification.push({
        username: name,
        password: password
    })
}

var userName = "";
// authentification in the login page
function login(){       
    var nameuser =$('.container #username').val();
    var passuser = $('.container #psw').val();
    for (var i = 0 ; i< authentification.length; i++){
        if ((authentification[i].username === nameuser) && (authentification[i].password=== passuser)){
            $('.body-auth').hide();
            $('.index').show();
            $('body').css('background', '#96ceb4')
            $('.newEntry h1').append(userName.toUpperCase())
            userName = nameuser ;
            return false
        } else alert('Sorry, \nWrong Username or password');
    }
}
// add a diary in new entry
var diaries = [];

function submit (){
    var title = $('#title').val();
    var day = $('#date').val();
    var diaryText = $('#diaryText').val();
    diaries.push({
        title: title,
        day: day,
        diaryText: diaryText
    })
    $('.all').append('<div class="onediary"><b>'+title+'</b><span>' + day+'</span></div>')
    $('.all').append('<p class= "ptext">'+diaryText+'</p>')
    $('.ptext').hide();
    $('.onediary').click(function(){
        $(this).next().toggle()
        })
    return false;
}
// add the all the diaris entred into the all rntries page





function sig(){
    $('.body-auth').hide();
    $('.signUp').show()

}


$(document).ready(function(){
   $('.index').hide()
   $('.signUp').hide()
    $('.all').hide();
    $('.star').hide();
    

    $('#newentrie').click(function(){
        $('.all').hide().css('flex-grow', 0);
        $('.star').hide().css('flex-grow', 0);
        $('.newEntry').show().css('flex-grow', 3);
    })
    $('#allentries').click(function(){
        $('.all').show().css('flex-grow', 3);
        $('.star').hide().css('flex-grow', 0);
        $('.newEntry').hide().css('flex-grow', 0);
    })
    $('#starred').click(function(){
        $('.all').hide().css('flex-grow', 0);
        $('.star').show().css('flex-grow', 3);
        $('.newEntry').hide().css('flex-grow', 0);
    })

    //click on the menu to hide or show menu
    var clickstatus = 0;

    $('.fa-bars').click(function(){
        if (clickstatus === 0){
        $('section').hover().animate({left: '-26%'})
        clickstatus = 1;
        }else {
            $('section').hover().animate({left: '0'})
            clickstatus = 0;
        }

    })

    $('.signbtn').click(sig);
    $('.btn').click(login);
    $('#submit').on("click", submit);


})