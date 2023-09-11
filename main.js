$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nomeDaTarefa').val();
        const novoItem = $('<li></li>').text(novaTarefa);

        $('ul').append(novoItem);
        $('#nomeDaTarefa').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('concluido');
    });

});
