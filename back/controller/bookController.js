const Company = require('../model/companySchema').Company;
const Client = require('../model/clientSchema').Client;
const auth = require("./auth")
const Event = require('../model/eventSchema').Event


//add event in database
exports.createEvent = (req, res) => {
   //const client = 
   console.log(req.body)
   const event = new Event(req.body)
   event.save()
      .then((event) => res.json({ success: true, event }))
      .catch((err) => res.status(404).json({ success: false }))

}

//book event 
exports.bookEvent = (async (req, res) => {
   //const client = 
   console.log(req.body) // userId and eventId
   try {
      const user = await findOne({ '_id': req.body.userId })
      if (user) {
//after we fine the user by user id , check if the event by eventid is exist in events user 
         if (user.event.includes(req.body.eventId) === -1) {
            //if doesn't exist add it in user Events 
            user.event.push(req.body.eventId)
            return res.json({ success: false, events: user.event })
         } else {
            return res.send("already booked")
         }

      }


   } catch {
      res.status(404).json({ success: false })
   }

})

// to retrive all events for this organizer by his id 
exports.orgEvents = (async (req, res) => {
   //const client = 
   console.log(req.body) // orgId 
   try {
      const events = await Event.find({ 'orgId': req.body.orgId })
      return res.json(events)

   } catch {
      res.status(404).json({ success: false })
   }

})


// retrive all events booked for the user 
exports.clientEvents = (async (req, res) => {
   //const client = 
   console.log(req.body) // userId and eventId
   try {
      const user = await User.findOne({ 'userId': req.body.userId }).populate('event')
      const events = user.event

      return res.json(events)
   } catch {
      res.status(404).json({ success: false })
   }

})

})


