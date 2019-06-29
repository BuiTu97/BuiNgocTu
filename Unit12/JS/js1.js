$(document).ready(function(){
    $('.tab1').show();
    $('#color').css("background","blue");
    $('h3').on('click',function(){
        $('.section').hide();
        $(this).parent().next().show();
        $('h3').css("background","#DDDDDD");
        $(this).css("background","blue");
    $('#next1').click(function(e){
        $("#form1").validate({
            rules:{
                userName: "required", 
                password: {
                    required: true,
                    minlength: 6
                },
                confirm: {
                    equalTo: password,
                    required: true,
                    minlength: 6
                }
            },
            messages:{
                userName: "vui lòng nhập username",
                password:{
                    required: "vui lòng nhập mật khẩu",
                    minlength: "mật khẩu phải có ít nhát 6 kí tự"
                },
                confirm:{
                    equalTo: " mật khẩu phải trùng với mật khẩu ở trên",
                    required: "vui lòng nhập mật khẩu",
                    minlength: "mật khẩu phải có ít nhất 6 kí tự "
                }
            }
        });
        if ($("#form1").valid()) {
            e.preventDefault()
            $(this).parents('.tab').next().children().children().show();
            $('h3').css("background","#DDDDDD");
            $(this).parents('.tab').next().children().children('.tabtr').children('h3').css("background","blue");
        }else{
            return false;
        }
    });
    $("#next2").click(function(e){
        $("#form2").validate({
            rules:{
                name:"required",
                surname:"required",
                address:"required",
                email:{
                    required: true,
                    email: true
                },
                age:{
                    required: true,
                    min: 18
                },
            },
            messages:{
                name:"Vui lòng nhập vào tên của bạn",
                surname:"Vui lòng nhập vào tên của bạn",
                email:{
                    required: "vui lòng nhập vào email",
                    email: "email sai định dạng"
                },
                address:"Vui lòng nhập vào địa chỉ",
                age:{
                    required:" vui lòng nhập vào tuổi của bạn",
                    min: "bạn chưa đủ 18 tuổi, bạn còn quá trẻ"
                },
            }
        });
        if ($("#form2").valid()) {
            e.preventDefault()
            $(this).parents('.tab').next().children().children().show();
            $('h3').css("background","#DDDDDD");
            $(this).parents('.tab').next().children().children('.tabtr').children('h3').css("background","blue");
        }
    });
    $("#next3").click(function(e){
        $("#form3").validate({
            rules:{
                hobbies:{
                    required: true,
                    minlength: 5
                },
                weakness:{
                    required: true,
                    minlength: 5
                }
            },
            messages:{
                hobbies:{
                    required: "vui lòng nhập vào sở thích",
                    minlength: "tối thiểu 5 kí tự"
                },
                weakness:{
                    required: "vui lòng nhập vào sở đoản",
                    minlength: "tối thiểu 5 kí tự"
                }
            }
        });
        if ($("#form3").valid()) {
            e.preventDefault()
            $(this).parents('.tab').next().children().children().show();
            $('h3').css("background","#DDDDDD");
            $(this).parents('.tab').next().children().children('.tabtr').children('h3').css("background","blue");
        }
    });
    $("#next4").click(function(e){
        $("#form4").validate({
            rules:{
                acceptTerms: "required"
            },
            messages:{
                acceptTerms:"bạn chưa đồng ý, không thể tiếp tục"
            }
        });
        if ($("#form4").valid()) {
            e.preventDefault()
            $(this).parents('.tab').next().children().children().show();
            $('h3').css("background","#DDDDDD");
            $(this).parents('.tab').next().children().children('.tabtr').children('h3').css("background","blue");
        }
    });
    
    });
    $('.prev').click(function(){
        $('.section').hide();
        $(this).parents('.tab').prev().children().children().show();
        $('h3').css("background","#DDDDDD");
        $(this).parents('.tab').prev().children().children('.tabtr').children('h3').css("background","blue");
    });
});