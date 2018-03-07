/*
    This file contains css related to 
    index.html, signup.html, login.html
*/

/* use this function to set the explore and popular lists of search bar
function search_bar_set_explore_popular_list(explore, popular)
*/

// This function gets called when the window gets loaded
function windowOnLoad() {
    $(".the-body").removeClass("body-no-scroll");
    $(".button-collapse").sideNav();
    seachBarInit();
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

var sb_explore = [];
var sb_popular = [];

// use this function to set the explore and popular lists of search bar
function search_bar_set_explore_popular_list(explore, popular) {
    sb_explore = explore;
    sb_popular = popular;
    $(".search-sugg-large").html(getSearchLinksString(sb_explore, sb_popular));
    $(".search-sugg-small").html(getSearchLinksString(sb_explore, sb_popular));
}

// When the search bar is typed on this function will be called with the string being input in the 
// search input
function onSearch(search_str) {
    console.log(search_str);
    // ---- Code
}

function seachBarInit() {
    search_bar_set_explore_popular_list(sb_explore, sb_popular);
    $(".myhideclass ").hide();
    var sil_ele = $(".search-in-large");
    var sis_ele = $(".search-in-small");

    sil_ele.focus(function() {
        $(".search-sugg-large").show(500)
    });
    sil_ele.focusout(function() {
        $(".search-sugg-large").hide(500)
    });

    sis_ele.focus(function() {
        $(".search-sugg-small").show(500)
    });
    sis_ele.focusout(function() {
        $(".search-sugg-small").hide(500)
    });

    sil_ele.keyup(function() {
        var search = (sil_ele.val());
        onSearch(search);
    });

    sis_ele.keyup(function() {
        var search = (sis_ele.val());
        onSearch(search);
    });

}



function getSearchLinksString(explore_links, popular_searches) {
    var links_starting_row = '<div class="row" style="margin-bottom : 0px;"><div class="col l2 left-align"> <p class="site-theme-light-grey-text fw-400">Explore Amazon</p>  </div></div><div style="margin-left: auto;margin-bottom: 12px;" class="row left-align sugg-links"><a class="btn btn-options default-sugg-btn z-depth-0" >All</a>';
    var explore_buttons = "";
    for (i in explore_links) {
        var temp_button = '<a class="btn btn-options white site-theme-grey-text z-depth-0 sugg-btn" href="' + explore_links[i].link + '">' + explore_links[i].name + '</a>';
        explore_buttons += temp_button;
    }
    links_starting_row += explore_buttons;
    links_starting_row += '</div>';
    var search_links = "";
    var searches_starting_row = '<div class="row" style="margin-bottom:0px"> <div class = "col l2 left-align" ><p class = "site-theme-light-grey-text fw-400" style = "margin-top: 0px;" > Popular Searches </p> </div> </div> <div class = "row left-align sugg-div" > ';

    for (i in popular_searches) {
        var temp_searches = '<a class="btn-options site-theme-pink-text" style="margin-right:16px" href="' + popular_searches[i].link + '">' + popular_searches[i].name + '</a>';
        search_links += temp_searches;
    }
    searches_starting_row += search_links;
    searches_starting_row += '</div>';

    var final_string = links_starting_row + searches_starting_row;
    return final_string;


}