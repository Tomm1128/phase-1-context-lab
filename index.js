const createEmployeeRecord = (employee) => {
  let [name, lastName, position, pay] = employee
  const employeeRecord = {
    firstName: name,
    familyName: lastName,
    title: position,
    payPerHour: pay,
    timeInEvents: [],
    timeOutEvents: []
  }

  return employeeRecord
}

const createEmployeeRecords = (employeeList) => {
  let employeeRecords = []
  employeeList.forEach((employee) => {
  employeeRecords.push(createEmployeeRecord(employee))
  })

  return employeeRecords
}

function createTimeInEvent(timestamp){
  let hourIn = timestamp.split(" ")[1]
  let dateIn = timestamp.split(" ")[0]
  hourIn = Number(hourIn)
  const timeInObj = {
    type: "TimeIn",
    hour: hourIn,
    date: dateIn
  }

  this.timeInEvents.push(timeInObj)
  return this
}

function createTimeOutEvent(timestamp){
  let hourOut = timestamp.split(" ")[1]
  let dateOut = timestamp.split(" ")[0]
  hourOut = Number(hourOut)
  const timeOutObj = {
    type: "TimeOut",
    hour: hourOut,
    date: dateOut
  }

  this.timeOutEvents.push(timeOutObj)
  return this
}

function hoursWorkedOnDate(workedOnDate){
  const timeInEvents = this.timeInEvents
  const timeOutEvents = this.timeOutEvents
  let timeInHour
  let timeOutHour
  timeInEvents.forEach((timeIn) => {
    if(timeIn.date === workedOnDate){
    timeInHour =+ timeIn.hour
  }
  })
  timeOutEvents.forEach((timeOut) => {
      if(timeOut.date === workedOnDate){
        timeOutHour =+ timeOut.hour
      }
  })
  const hoursWorked = (timeOutHour - timeInHour) / 100

  return hoursWorked
}

function wagesEarnedOnDate(workedOnDate){
  let workingHours = hoursWorkedOnDate.call(this, workedOnDate)
  let payRate = this.payPerHour

  return payRate * workingHours
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(employeeList, firstName){
  return employeeList.find((employee) => employee.firstName === firstName)
}

function calculatePayroll(employeeRecords){
  let payroll = 0
  employeeRecords.map(record => payroll += allWagesFor.call(record))
  
  return payroll
}
