function getHeight(el) {
    var style = window.getComputedStyle(el);
    var max_height = style.maxHeight.replace("px", "").replace("%", "");
    if (style.display !== "none" && max_height !== "0") {
        return el.offsetHeight;
    }

    var display = el.display;
    el.style.display = "block";
    wanted_height = el.offsetHeight;
    el.style.display = display;
    return wanted_height;
}

if (window.addEventListener) {
    document.querySelector(".more").addEventListener("click", function(e) {
        this.style.display = "none" // remove "more" link

        // make inline bit visible
        document.querySelector(".hide-inline").style.display = "inline";

        // make block bit visible (ease in)
        var hide_block = document.querySelector(".hide-block");
        var max_height = 0;

        max_height = getHeight(hide_block) + "px";
        hide_block.style["transition"] = "max-height 0.5s ease-in-out"
        hide_block.style.overflowY = "hidden";
        hide_block.style.maxHeight = "0";
        hide_block.setAttribute("data-max-height", max_height);
        hide_block.style.display = "block";
        setTimeout(function() {
            hide_block.style.maxHeight = max_height
        }, 10);
        setTimeout(function() {
            hide_block.style["transition"] = "all 0s 0s ease";
            hide_block.style["max-height"] = "none"
        }, 700);

        e.preventDefault(); // input is handled
        return false
    }, false);
}

function onShortFeedbackSubmit () {
    document.querySelector("#short-feedback").style.display = "none";
    document.querySelector(".feedback-thanks").style.display = "block";
}
