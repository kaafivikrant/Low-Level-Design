class Seating {
  constructor() {
    layout = {}
    booked =  []
  }

  getSeatingDetails() {
    return this.layout
  }

  addSeat(row, seatNumber){
    if (!this.layout[row]){
      this.layout[row] = []
    }
    this.layout[row].push(seatNumber)
  }

  removeSeat(row, seatNumber){
    if (this.layout[row]){
      this.layout[row].splice(this.layout[row].indexOf(seatNumber), 1)
    }
  }

  removeRow(row){
    delete this.layout[row]
  }

  initiateBooking(row, seatNumber){
    if (this.layout[row].indexOf[seatNumber] == -1){
      return false
    }
    if (`${row}-${seatNumber}` in this.booked){
      return false
    }
    this.booked[`${row}-${seatNumber}`] = "INIT"
    //call payment method
    return true
  }

  updateBookingStatus(row, seatNumber, status){
    let seat = `${row}-${seatNumber}`
    if (this.layout[row].indexOf[seatNumber] == -1){
      return false
    }
    if (seat in this.booked){
      if (status == "FAIL"){
        delete this.booked[seat]
        return true
      }
      this.booked[seat] = "BOKD"
      return true
    }
    return false
  }

  seatAutoUpgrade(seat, tier) {
    //demonstrate
    return seat
  }
}

module.exports = Seating;