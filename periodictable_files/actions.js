function highlight(a) {
    var b = a,
        c = "-button",
        d = b.concat(c),
        e = document.getElementById(d);
    if (e.classList.contains("on")) {
        e.className = e.className.replace(/(?:^|\s)on(?!\S)/, "");
        for (var f = new Array("non-metals", "halogens", "noble-gases", "rare-earth-metals", "other-metals", "transitions-metals", "alkali-earth-metals", "alkali-metals", "title", "Lanthanide", "Actinide"), g = 0; g < f.length; g++)
            for (var h = document.getElementsByClassName(f[g]), i = 0; i < h.length; i++) h[i].classList.contains("transitions-metals") ? h[i].style.backgroundColor = "rgba(0,153,154, 1)" : h[i].classList.contains("other-metals") ? h[i].style.backgroundColor = "rgba(0,127,150, 1)" : h[i].classList.contains("alkali-earth-metals") ? h[i].style.backgroundColor = "rgba(0,152,120, 1)" : h[i].classList.contains("alkali-metals") ? h[i].style.backgroundColor = "rgba(0,119,73, 1)" : h[i].classList.contains("halogens") ? h[i].style.backgroundColor = "rgba(88,93,172, 1)" : h[i].classList.contains("rare-earth-metals") ? h[i].style.backgroundColor = "rgba(138,68,138, 1)" : h[i].classList.contains("noble-gases") ? h[i].style.backgroundColor = "rgba(121,82,158, 1)" : h[i].classList.contains("non-metals") && (h[i].style.backgroundColor = "rgba(0,113,177, 1)")
    } else {
        e.className += " on";
        for (var j = new Array("non-metals-button", "halogens-button", "noble-gases-button", "rare-earth-metals-button", "other-metals-button", "transitions-metals-button", "alkali-earth-metals-button", "alkali-metals-button"), i = j.length - 1; i >= 0; i--) j[i] === d && j.splice(i, 1);
        for (var g = 0; g < j.length; g++) {
            var k = document.getElementById(j[g]);
            k.classList.contains("on") && (k.className = k.className.replace(/(?:^|\s)on(?!\S)/, ""))
        }
        for (var l = new Array("non-metals", "halogens", "noble-gases", "rare-earth-metals", "other-metals", "transitions-metals", "alkali-earth-metals", "alkali-metals", "title", "Lanthanide", "Actinide"), i = l.length - 1; i >= 0; i--) l[i] === b && l.splice(i, 1);
        for (var g = 0; g < l.length; g++)
            for (var h = document.getElementsByClassName(l[g]), i = 0; i < h.length; i++) h[i].classList.contains("transitions-metals") ? h[i].classList.contains("title") || (h[i].style.backgroundColor = "rgba(0,153,154, 0.3)") : h[i].classList.contains("other-metals") ? h[i].classList.contains("title") || (h[i].style.backgroundColor = "rgba(0,127,150, 0.3)") : h[i].classList.contains("alkali-earth-metals") ? h[i].classList.contains("title") || (h[i].style.backgroundColor = "rgba(0,152,120, 0.3)") : h[i].classList.contains("alkali-metals") ? h[i].classList.contains("title") || (h[i].style.backgroundColor = "rgba(0,119,73, 0.3)") : h[i].classList.contains("halogens") ? h[i].classList.contains("title") || (h[i].style.backgroundColor = "rgba(88,93,172, 0.3)") : h[i].classList.contains("rare-earth-metals") ? h[i].classList.contains("title") || (h[i].style.backgroundColor = "rgba(138,68,138, 0.3)") : h[i].classList.contains("noble-gases") ? h[i].classList.contains("title") || (h[i].style.backgroundColor = "rgba(121,82,158, 0.3)") : h[i].classList.contains("non-metals") && (h[i].classList.contains("title") || (h[i].style.backgroundColor = "rgba(0,113,177, 0.3)"));
        for (var m = document.getElementsByClassName(b), i = 0; i < m.length; i++) m[i].classList.contains("transitions-metals") ? m[i].style.backgroundColor = "rgba(0,153,154, 1)" : m[i].classList.contains("other-metals") ? m[i].style.backgroundColor = "rgba(0,127,150, 1)" : m[i].classList.contains("alkali-earth-metals") ? m[i].style.backgroundColor = "rgba(0,152,120, 1)" : m[i].classList.contains("alkali-metals") ? m[i].style.backgroundColor = "rgba(0,119,73, 1)" : m[i].classList.contains("halogens") ? m[i].style.backgroundColor = "rgba(88,93,172, 1)" : m[i].classList.contains("rare-earth-metals") ? m[i].style.backgroundColor = "rgba(138,68,138, 1)" : m[i].classList.contains("noble-gases") ? m[i].style.backgroundColor = "rgba(121,82,158, 1)" : m[i].classList.contains("non-metals") && (m[i].style.backgroundColor = "rgba(0,113,177, 1)")
    }
}

function onYouTubePlayerAPIReady() {
    player = new YT.Player("video", {
        events: {
            onReady: onPlayerReady
        }
    })
}

function onPlayerReady() {
    for (var a = document.getElementsByClassName("overlay-container"), b = 0; b < a.length; b++) a[b].addEventListener("click", function() {
        player.pauseVideo()
    })
}

function closePopup() {
    document.getElementById("overlay-background").style.display = "none", document.getElementById("overlay-bucket").innerHTML = ""
}
var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
$(document).ready(function() {
    for (var a = new Array("#Hydrogen", "#Helium", "#Lithium", "#Beryllium", "#Boron", "#Carbon", "#Nitrogen", "#Oxygen", "#Fluorine", "#Neon", "#Sodium", "#Magnesium", "#Aluminium", "#Silicon", "#Phosphorus", "#Sulfur", "#Chlorine", "#Argon", "#Potassium", "#Calcium", "#Scandium", "#Titanium", "#Vanadium", "#Chromium", "#Manganese", "#Iron", "#Cobalt", "#Nickel", "#Copper", "#Zinc", "#Gallium", "#Germanium", "#Arsenic", "#Selenium", "#Bromine", "#Krypton", "#Rubidium", "#Strontium", "#Yttrium", "#Zirconium", "#Niobium", "#Molybdenum", "#Technetium", "#Ruthenium", "#Rhodium", "#Palladium", "#Silver", "#Cadmium", "#Indium", "#Tin", "#Antimony", "#Tellurium", "#Iodine", "#Xenon", "#Caesium", "#Barium", "#Hafnium", "#Tantalum", "#Tungsten", "#Rhenium", "#Osmium", "#Iridium", "#Platinum", "#Gold", "#Mercury", "#Thallium", "#Lead", "#Bismuth", "#Polonium", "#Astatine", "#Radon", "#Francium", "#Radium", "#Rutherfordium", "#Dubnium", "#Seaborgium", "#Bohrium", "#Hassium", "#Meitnerium", "#Darmstadtium", "#Roentgenium", "#Copernicium", "#Ununtrium", "#Flerovium", "#Ununpentium", "#Livermorium", "#Ununseptium", "#Ununoctium", "#Lanthanum", "#Cerium", "#Praseodymium", "#Neodymium", "#Promethium", "#Samarium", "#Europium", "#Gadolinium", "#Terbium", "#Dysprosium", "#Holmium", "#Erbium", "#Thulium", "#Ytterbium", "#Lutetium", "#Actinium", "#Thorium", "#Protactinium", "#Uranium", "#Neptunium", "#Plutonium", "#Americium", "#Curium", "#Berkelium", "#Californium", "#Einsteinium", "#Fermium", "#Mendelevium", "#Nobelium", "#Lawrencium"), b = new Array("#h", "#he", "#li", "#be", "#b", "#c", "#n", "#o", "#f", "#ne", "#na", "#mg", "#al", "#si", "#p", "#s", "#cl", "#ar", "#k", "#ca", "#sc", "#ti", "#v", "#cr", "#mn", "#fe", "#co", "#ni", "#cu", "#zn", "#ga", "#ge", "#as", "#se", "#br", "#kr", "#rb", "#sr", "#y", "#zr", "#nb", "#mo", "#tc", "#ru", "#rh", "#pd", "#ag", "#cd", "#in", "#sn", "#sb", "#te", "#i", "#xe", "#cs", "#ba", "#hf", "#ta", "#w", "#re", "#os", "#ir", "#pt", "#au", "#hg", "#tl", "#pb", "#bi", "#po", "#at", "#rn", "#fr", "#ra", "#rf", "#db", "#sg", "#bh", "#hs", "#mt", "#ds", "#rg", "#cn", "#uut", "#fl", "#uup", "#lv", "#uus", "#uuo", "#la", "#ce", "#pr", "#nd", "#pm", "#sm", "#eu", "#gd", "#tb", "#dy", "#ho", "#er", "#tm", "#yb", "#lu", "#ac", "#th", "#pa", "#u", "#np", "#pu", "#am", "#cm", "#bk", "#cf", "#es", "#fm", "#md", "#no", "#lr"), c = 0; c < a.length; c++) $(a[c]).click(function() {
//        var c = jQuery(this).attr("id"),
//            c = "#" + c,
//            d = a.indexOf(c),
//            e = b[d],
//            f = "/periodic-videos/elements.txt " + e;
//        $("#overlay-bucket").load(f);
//        var g = document.getElementById("overlay-background");
//        g.style.display = "block"
    })
});