/*
    This file contains css related to 
    index.html, signup.html, login.html
*/

// This function gets called when the window gets loaded
function windowOnLoad() {
    $(".the-body").removeClass("body-no-scroll");
    $(".button-collapse").sideNav();
}

// This function gets called when the window gets resized
function windowOnResize() {

}

// This function gets called when the window gets scrolled
function windowOnScroll() {

}

function onSignUpLoad() {
    var interests_list = [
        "Baby",
        "Home Appliance",
        "Arts",
        "Crafts & Sewing",
        "Cars & Automotive",
        "Beauty & Personal Care",
        "Books",
        "Cellphones & accessories",
        "Clothing & Fashion",
        "Jewelry",
        "Collectible & Fine Art",
        "Computers & Laptops",
        "Electronics & Gadgets",
        "Gardens & Outdoor",
        "Handmade",
        "Health & Household",
        "Home & Kitchen",
        "Luggage & Travel Gears",
        "Luxury Products",
        "Musical Instruments",
        "Office Products",
        "Pets Supplies",
        "Sports & Outdoors",
        "Tools & Home Improvement",
        "Toys & Games",
        "Video Games"
    ]
    var sdp = $(".s-dropdown");
    interests_list.forEach(function(val, index) {
        sdp.append("<option value=" + index + ">" + val + "</option>")
    })


    $('select').material_select();
    $('.select-dropdown').addClass('ak-field-select');
    $('.caret').addClass("hide");

    $('select').on('change', function() {
        var s = "";
        var num = 1;
        $(this).val().forEach(function(val, index) {
            var color = "orange";
            if (num > 1) {
                color = "pink";
                num = 0;
            }
            s = s + '<div class="chip site-theme-' + color + ' site-theme-white-text" style = "font-weight:400;border-radius:3px;;">' + interests_list[val] + '</div>'
            num++;
        })
        $('.interests-chip-div').empty();
        $('.interests-chip-div').append(s);
        $('.select-dropdown').val("Choose your Interests");
    })
}