document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      defaultDate: '2019-06-12',
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,
      select: function(arg) {
        var title = prompt('Nueva entrega:');
        if (title) {
          calendar.addEvent({
            title: title,
            start: arg.start,
            end: arg.end,
            allDay: arg.allDay
          })
        }
        calendar.unselect()
      },
      editable: true,
      eventLimit: true, 
      events: [
       {
          title: 'Entrega Ciudad Bolivar',
          start: '2019-06-01'
        },
        {
          title: 'Entrega Usme',
          start: '2019-06-12'
        },
        {
          title: 'Entrega Ciudad Bolivar',
          start: '2019-06-15'
        },
        {
          title: 'Entrega Engativa',
          start: '2019-06-20'
        },
        {
          title: 'Entrega Ciudad Bolivar',
          start: '2019-06-25'
        },
      ]
    });

    calendar.render();
  });