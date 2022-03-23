// Set classes on the time blocks based on the time.
(() => {
  const currentTime = luxon.DateTime.now()
  const hour = currentTime.toFormat('H')
  const timeBlocks = $('.time-block')
  timeBlocks.toArray().forEach(timeBlock => {
    const timeBlockHour = parseInt(timeBlock.dataset.hour)
    if (timeBlockHour < hour) $(timeBlock).children('p').addClass('past')
    if (timeBlockHour == hour) $(timeBlock).children('p').addClass('present')
    if (timeBlockHour > hour) $(timeBlock).children('p').addClass('future')
  })
  $('#currentDay').text(currentTime.toFormat('DDDD'))
})()

$('.time-block').on('click', '.task', e => {
  const el = $(e.target)
  el.siblings().eq(1).show()
  el.hide()
})

$('button.save').click(e => {
  const el = $(e.target)
  el.siblings().eq(1).show()
  el.siblings().eq(2).hide()
})
