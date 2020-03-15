//animate smooth scroll
$('view-work').on('click',function() {
    const image=$('#images').position().top;
    $('html,body'.animate(
    {
        screenTop: image
    },
    900
  );
});