const $EB = $("#EventBrowser");
const $GY = $("#GatorYard");
const $MM = $("#MovieMaker");
const $AB = $("#Agkz_blackjack");
const $BS = $("#BotShot");

function showAll() {
    $EB.fadeIn();
    $GY.fadeIn();
    $MM.fadeIn();
    $AB.fadeIn();
    $BS.fadeIn();
}

function hideAll() {
    $EB.fadeOut();
    $GY.fadeOut();
    $MM.fadeOut();
    $AB.fadeOut();
    $BS.fadeOut();
}

$('.Filter').on('mouseenter',() => {
    $('#WebButton').show();
    $('#MobButton').show();
    $('#DesButton').show();
    $('#AllButton').show();
}).on('mouseleave',() => {
    $('#WebButton').hide();
    $('#MobButton').hide();
    $('#DesButton').hide();
    $('#AllButton').hide();
});;

$('#WebButton').on('click',() => {
    hideAll();
    $GY.fadeIn();
    $AB.fadeIn();
});

$('#MobButton').on('click',() => {
    hideAll();
    $EB.fadeIn();
    $BS.fadeIn();
});

$('#DesButton').on('click',() => {
    hideAll();
    $MM.fadeIn();
});

$('#AllButton').on('click',() => {
    showAll();
});