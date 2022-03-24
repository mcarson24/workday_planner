// Set classes on the time blocks based on the time.
// Set the current time in the heading.
(() => {
  // Get timeblock info stored in localStorage
  const timeBlockInfo = JSON.parse(localStorage.getItem('timeBlocks'))
  const currentTime = luxon.DateTime.now()
  const hour = currentTime.toFormat('H')
  const timeBlocks = $('.time-block')
  timeBlocks.toArray().forEach(timeBlock => {
    const timeBlockHour = parseInt(timeBlock.dataset.hour)
    if (timeBlockInfo[`${timeBlockHour}`]) {
      $(timeBlock).children('p').text(timeBlockInfo[`${timeBlockHour}`])
      $(timeBlock).children('input').attr('value', timeBlockInfo[`${timeBlockHour}`])
    }
    if (timeBlockHour < hour) $(timeBlock).children('p').addClass('past')
    if (timeBlockHour == hour) $(timeBlock).children('p').addClass('present')
    if (timeBlockHour > hour) $(timeBlock).children('p').addClass('future')
  })
  $('#currentDay').text(currentTime.toFormat('DDDD'))
})()

$('.time-block').on('click', '.task', e => {
  const el = $(e.target)
  // Don't allow user to edit time blocks in the past
  if (el.hasClass('past')) return
  el.siblings().eq(1).show()
  el.hide()
})

$('button.save').click(e => {
  const el = $(e.target)
  const parent = el.parent()
  const timeBlockHour = parent['0'].dataset['hour']
  let timeBlocks = JSON.parse(localStorage.getItem('timeBlocks')) || {}
  const input = $(e.target).siblings('input')
  const paragraph = el.siblings('p')
  timeBlocks[timeBlockHour] = input['0'].value
  localStorage.setItem('timeBlocks', JSON.stringify(timeBlocks))
  paragraph.text(input['0'].value)
  paragraph.show()
  input.hide()
})

$('#clear').click(() => {
  if (window.confirm('Are you sure you want to reset the time blocks?')) {
    localStorage.setItem('timeBlocks', JSON.stringify({}))
    $('.time-block').children('p').text('')
    $('.time-block').children('input').attr('value', '')
  }
})