// Set classes on the time blocks based on the time.
(() => {
  const hour = luxon.DateTime.now().toFormat('H')
  const timeBlocks = $('.time-block')
  timeBlocks.toArray().forEach(timeBlock => {
    const timeBlockHour = parseInt(timeBlock.dataset.hour)
    if (timeBlockHour < hour) $(timeBlock).children('p').addClass('past')
    if (timeBlockHour == hour) $(timeBlock).children('p').addClass('present')
    if (timeBlockHour > hour) $(timeBlock).children('p').addClass('future')
  })
})()

$('button.save').click(() => console.log('saving...'))