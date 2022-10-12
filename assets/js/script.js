/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // code should be execute here

    // Password show hide -- Start
    $(".toggle-password").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
    // code should be execute here

    $(".confirm-password").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    function myFunction() {
        location.href("check-email.html");
    };
    // Password show hide -- End

    // Form tab -- Start
    let tabs = document.querySelectorAll('.tabs__toggle');
    let contents = document.querySelectorAll('.tabs__content');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            contents.forEach((content) => {
                content.classList.remove('is-active');
            });
            tabs.forEach((tab) => {
                tab.classList.remove('is-active');
            });
            contents[index].classList.add('is-active');
            tabs[index].classList.add('is-active');
        });
    });
    
    
    // For Next Button 
    
    let btnNext1 = document.querySelector(".btn1");
    let btnNext2 = document.querySelector(".btn2");
    // let btnNext3 = document.querySelector(".btn3");
    
    
    btnNext1.addEventListener("click", () => {
      document.getElementById("tabs_2").classList.add("is-active");
      document.getElementById("tabs_content2").classList.add("is-active");
    
      document.getElementById("tabs_1").classList.remove("is-active");
      document.getElementById("tabs_content1").classList.remove("is-active");
    });
    
    btnNext2.addEventListener("click", () => {
      document.getElementById("tabs_3").classList.add("is-active");
      document.getElementById("tabs_content3").classList.add("is-active");
    
      document.getElementById("tabs_2").classList.remove("is-active");
      document.getElementById("tabs_content2").classList.remove("is-active");
    });
    
    // btnNext3.addEventListener("click", () => {
    //   document.getElementById("tabs_1").classList.add("is-active");
    //   document.getElementById("tabs_content1").classList.add("is-active");
    
    //   document.getElementById("tabs_3").classList.remove("is-active");
    //   document.getElementById("tabs_content3").classList.remove("is-active");
    // });

    // Form tab -- End

});
