(function ($) {
    $(document).ready(function () {

        var citylist = [];

        $('.edu_city').click(function () {

            // console.log(citysummary['Ballarat'])
            $('.alert2').hide()
            $('.svg4_2').hide()

            citylist = [];

            if (this.id === 'edu_btn1'){
                citylist.push(1)
                edu_firstGraph(citylist);
                $('.svg4_2').fadeIn();
            }
            if (this.id === 'edu_btn2'){
                citylist.push(2)
                edu_firstGraph(citylist);
                $('.svg4_2').fadeIn();
            }
            if(this.id === 'edu_btn3'){
                citylist.push(3)
                edu_firstGraph(citylist);
                $('.svg4_2').fadeIn();
            }
            if(this.id === 'edu_btn4'){
                citylist.push(4)
                edu_firstGraph(citylist);
                $('.svg4_2').fadeIn();
            }
            if(this.id === 'edu_btn5'){
                citylist.push(5)
                edu_firstGraph(citylist);
                $('.svg4_2').fadeIn();
            }
            if(this.id === 'edu_btn6'){
                citylist.push(6)
                edu_firstGraph(citylist);
                $('.svg4_2').fadeIn();
            }
            if(this.id === 'edu_btn7'){
                citylist.push(7)
                edu_firstGraph(citylist);
                $('.svg4_2').fadeIn();
            }
            if(this.id === 'edu_btn8'){
                citylist.push(8)
                edu_firstGraph(citylist);
                $('.svg4_2').fadeIn();
            }
            if(this.id === 'edu_btn9'){
                citylist.push(9)
                edu_firstGraph(citylist);
                $('.svg4_2').fadeIn();
            }
            if(this.id === 'edu_btn10'){
                citylist.push(10)
                edu_firstGraph(citylist);
                $('.svg4_2').fadeIn();
            }

            $('html, body').animate({
                scrollTop: $("div.svg4_2").offset().top
            }, 1000)
        })

    })
})(jQuery);