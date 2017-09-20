$(document).ready(function() {
    // Material form
    $('.material').materialForm();
    // Data Table
    $('#sort-table').addClass('nowrap').dataTable({       
        scrollY: '50vh',
        scrollCollapse: true,
        paging: false,
        info: false
    });
    // Datetime Picker
    $('.datetimepicker').datetimepicker({
        format: 'DD/MM/YYYY',
        allowInputToggle: true
    });


    $(".sidebar-toggle").click(function() {
        $('body').toggleClass('aside-open');
    });

    function setHeight() {
        var windowHeight = $(window).outerHeight();
        var footerHeight = $('footer').outerHeight();
        var headerHeight = $('.dataTables_scrollBody').offset().top;
        var screenHeight = headerHeight + footerHeight;
        var sectionHeight = windowHeight - screenHeight;
        $('.dataTables_scrollBody').css('max-height', sectionHeight).niceScroll({
        cursorcolor: "#f90",
        cursorwidth: "8px"
        });
    
    }
    if ($(".dataTables_scrollBody")[0]) {
        setHeight();
    }

    function fullHeight() {
        var windowHeight = $(window).outerHeight();
        var footerHeight = $('footer').outerHeight();
        var headerHeight = $('.fixed-height').offset().top;
        var screenHeight = headerHeight + footerHeight;
        var sectionHeight = windowHeight - screenHeight;
        $('.fixed-height').css('height', sectionHeight).niceScroll({
            cursorcolor: "#f90",
            cursorwidth: "8px"
        });
    }
    if ($(".fixed-height")[0]) {
        fullHeight();
    }

    function asideHeight() {
        var windowHeight = $(window).outerHeight();
        var footerHeight = $('footer').outerHeight();
        var headerHeight = $('.aside .filter-wrap').offset().top;
        var screenHeight = headerHeight + footerHeight;
        var sectionHeight = windowHeight - screenHeight;
        $('.aside .filter-wrap').css('height', sectionHeight).niceScroll({
            cursorcolor: "#f90",
            cursorwidth: "8px"
        });
    }
    if ($(".aside .filter-wrap")[0]) {        
        asideHeight();
    }


    $(window).resize(function() {
        if ($(".dataTables_scrollBody")[0]) {
            setHeight();
        }
        if ($(".fixed-height")[0]) {
            fullHeight();
        }
        if ($(".aside .filter-wrap")[0]) {        
            asideHeight();
        }
        if ($(".grid-view-menu .scroll-body")[0]) { 
            tableHeight();
        }
    });

    //Table-height
    function tableHeight() {
        var windowHeight = $(window).outerHeight();
        var footerHeight = $('footer').outerHeight();
        var headerHeight = $('.grid-view-menu .scroll-body').offset().top;
        var screenHeight = headerHeight + footerHeight;
        var sectionHeight = windowHeight - screenHeight;
        $('.grid-view-menu .scroll-body').css('height', sectionHeight).niceScroll({
            cursorcolor: "#f90",
            cursorwidth: "8px"
        });
    }
    if ($(".grid-view-menu .scroll-body")[0]) { 
        tableHeight();
    }


    


    //Wizard

    var navListItems = $('.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.attr('disabled')) {
            navListItems.removeClass('btn-active').addClass('btn-default');
            $item.removeClass('btn-success').addClass('btn-active');
            $item.parent().prev().find('a').removeClass('btn-default').addClass('btn-success');
            $item.parent().next().find('a').removeClass('btn-success');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-active').trigger('click');

    function contentToggle() {
        var toggleLink = $(".check-group h5, .check-group h4");
        $(toggleLink).each(function (){
            if($(toggleLink).find('collapse-toggle')){
                $('.collapse-toggle').next('ul').slideUp();
            }
        });
    }
    contentToggle();

    $(".check-group h5, .check-group h4").click(function() {
        $(this).next('ul').slideToggle();
        
        if($(this).hasClass('collapse-toggle')){
            $(this).removeClass('collapse-toggle');
        }
        else{
            $(this).addClass('collapse-toggle');
        }
        return false;
    });

});
