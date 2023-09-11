

function timeValue(){
  const work_time = Date.now()
  document.querySelector('[data-testid =currentUTCTime]').innerHTML = work_time
}

timeValue()
