class Customer {
  constructor(firstName, lastName, emailID, mobileNo, channel) {
    this.firstName = firstName
    this.lastName = lastName
    this.emailID = emailID
    this.mobileNo = mobileNo
    this.channel = channel
  }

  getCustomerDetails(){
    return {
      firstName : this.firstName,
      lastName : this.lastName,
      emailID : this.emailID,
      mobileNo : this.mobileNo,
      channel : this.channel
    }
  }

  updateCustomerDetails(emailID, mobileNo, channel){
    this.emailID = emailID
    this.mobileNo = mobileNo
    this.channel = channel
    return {
      firstName : this.firstName,
      lastName : this.lastName,
      emailID : this.emailID,
      mobileNo : this.mobileNo,
      channel : this.channel
    }
  }
  
  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  setEmailID(emailID) {
    this.emailID = emailID;
  }

  setMobileNo(mobileNo) {
    this.mobileNo = mobileNo;
  }

  setChannel(channel) {
    this.channel = channel;
  }
}

module.exports = Customer;

let c1 = new Customer("Nukul", "Narkhede", "nukulnarkhede29@gmail.com", "1234567890", "ONLINE")
console.log(c1.getCustomerDetails())
console.log(c1.updateCustomerDetails("nukulnarkhede19@gmail.com", "9234567890" , "OFFLINE"))