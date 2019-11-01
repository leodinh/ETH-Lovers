let noteBtn = document.getElementById('take-note')

$('#take-note').click(async function () {
  const {
    value: text
  } = await Swal.fire({
    input: 'textarea',
    inputPlaceholder: 'Type your message here...',
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return 'You need to write something!'
      }
    }
  })

  if (text) {
    $.post({
      url: "/notes/create",
      data: {
        note: text,
        user: $('#user-email').text()
      },
      success: function (response) {
        if (response.result == "success") {
          console.log(window.location.pathname);

          if (window.location.pathname == "/note") {
            console.log("ahihi");
            let numberOfNotes = parseInt($('#number-of-notes').text())
            let numberOfPages = Math.ceil(numberOfNotes / 12);
            let templateNote = $("#template")
            templateNote.find('.time').parent().attr('data-id', response.id)
            templateNote.find('.time').parent().attr("id", "note" + (numberOfNotes + 1))
            templateNote.find('.time').text(datetimeFormat(response
              .time))
            templateNote.find('.content').text(text)
            let numberOfNewPages = Math.ceil((numberOfNotes + 1) / 12);
            console.log(numberOfNewPages);
            console.log(numberOfPages);
            
            if (numberOfNewPages > numberOfPages) {
              $('#note-page').prepend(
                `<input type="radio" name="input-paginacao" id="paginacao${numberOfNewPages}" style="display:none" ${(numberOfNewPages-1)==0?'checked':''}>`)
              $('#note-page .btn-paginacao ul').append(`<li><label for="paginacao${numberOfNewPages}">${numberOfNewPages}</label></li>`)
              $('.box-vitrines #note-content').append(`<div class="vitrine${numberOfNewPages}"></div>`)
            }
            $('#number-of-notes').text(`${numberOfNotes+1}`)
            $(`.vitrine${numberOfNewPages}`).append(templateNote.html())
          }
        }
      }
    });

  }
})