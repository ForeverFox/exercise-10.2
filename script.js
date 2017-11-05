// From my script.js file for Exercise 10.1:
$("document").ready(function() {
	$("#products h2.product-name[data-type='vitamin']").css("backgroundColor", "darkgreen");
	$("#products h2.product-name[data-type='mineralwater']").css("backgroundColor", "blue");
	$("#products h2.product-name[data-type='proteinbar']").css("backgroundColor", "purple");
});

// This exercise was a bit confusing, so all of this is totally taken from the video and the finished index.html file:
document.querySelector('#cbVitamins').addEventListener('change',function (evt) {
    updateProductView("vitamins", evt.target.checked);
});

document.querySelector('#cbMineralWater').addEventListener('change',function (evt) {
    updateProductView("mineralwater", evt.target.checked);
});

document.querySelector('#cbProtein').addEventListener('change',function (evt) {
    updateProductView("proteinbar", evt.target.checked);
});

$(".product-item").each(function () {
    var prodName = encodeURIComponent($(this).children("h2").text());
    var prodID = encodeURIComponent($(this).data("prod_id"));

    var link = $("<a href='product.html?prodName=" + prodName + "&prodID=" + prodID + "'/>");
    $(this).children("img").wrap(link);
});
    

function updateProductView(categoryName, bVisible) {
    // get a list of the product items for the given category.
    // Use the data attributes to narrow the list
    var dataSelectorVal = "";
    switch (categoryName) {
    case "vitamins":
        dataSelectorVal = "h2[data-type='vitamin']";
        break;
    case "mineralwater":
        dataSelectorVal = "h2[data-type='mineralwater']";
        break;
    case "proteinbar":
        dataSelectorVal = "h2[data-type='proteinbar']";
        break;
    }
    // use the has() function to select the li tags that are product items
    // that contain the h2 tag with the corresponding data attribute value
    $(".product-item").has(dataSelectorVal).css('display', bVisible ? "" : "none");
};

/* My first attempt at trying to do something...didn't get too far:
	$("#cbVitamins").click(function(evt) {
		$("h2[data-type='vitamin']").toggle(display);
	}); */
