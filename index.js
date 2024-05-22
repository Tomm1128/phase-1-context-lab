/* Your Code Here */
const employeeArray = ["Gray", "Worm", "Security", 1]


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

// createEmployeeRecord(employeeArray)

