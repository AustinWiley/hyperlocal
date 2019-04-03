$(document).ready(function() {
    $("#root").css("padding", "0px 0px 38px 0px");
    $("#root").css("background-color", "#484759");
    $(".Welcome").css("background-image", "url('images/brew-2.png')"); 
    $(".Registration").css("background-image", "url('images/brew-2.png')");    


    const root = $("root");
    let images= ["images/brew-1.png","images/brew-2.png","images/cod-1.png", "images/cod-2.png", "images/skii-1.png", "images/skii-2.png"];
    let i = 0;
  
    function volgendefoto() {
        if(i < images.length-1) {
            i++
        } else {
            i = 0;
        }

        // console.log($(".weclome").parent().attr());
        $(".Welcome").css("background-image", "url("+ images[i]+ ")");
        $(".Registration").css("background-image", "url("+ images[i]+ ")");
        // image.src=images[i];
        // $(".Welcome").css("background-image", "url('images/brew-2.png')");

    }
    setInterval(volgendefoto, 4500);
}); 

