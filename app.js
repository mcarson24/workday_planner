// Set classes on the time blocks based on the time.
(() => {
  const time = new Date
  time.getHours()

  const timeBlocks = $('.time-block')
  console.log(timeBlocks.toArray())
  timeBlocks.toArray().forEach(timeBlock => {
    if (timeBlock.dataset.hour < time.getHours()) $(timeBlock).children('p').addClass('past')
    if (timeBlock.dataset.hour == time.getHours()) $(timeBlock).children('p').addClass('present')
    if (timeBlock.dataset.hour > time.getHours()) $(timeBlock).children('p').addClass('future')
  })
  console.log(timeBlocks)
})()

$('button.save').click(() => console.log('saving...'))