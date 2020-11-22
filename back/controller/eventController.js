const Event = require('../model/eventSchema').Event;
const auth = require ("./auth");
const Company = require('../model/companySchema').Company;

//this signup method for post requeset from client to save data in database 
exports.addEvent = async (req, res) => {
  
  //make make new event in mongoDB 
  const event = new Event({
    name: req.body.name,
    startDate: req.body.startDate,
    startTime : req.body.startTime,
    endDate: req.body.endDate,
    endTime:req.body.endTime,
    location: req.body.location,
    phoneNumber: req.body.phoneNumber,
    clients:[]
  });


  try {
    //save event in mongoDB
    const savedEvent = await event.save();

    res.send({ savedEvent });

  }
  catch (err) {
    res.status(400).send(err);
  }


}

exports.deleteEvent = async(req, res)=> {
  let _id = req.params.id
  console.log(_id)
  let deletedEvent = await Event.findOne({_id}) 
  console.log(deletedEvent)
  Event.deleteOne({ _id })
  .then(( event ) => res.status(200).json(deletedEvent) )
  .catch((err) => res.status(404).json({success:false}))
};


exports.delete = async (req, res)=> {
  Event.deleteMany()
      .exec( (err, deletedEvents) => {
          if(err) return res.status(404).json({success:false})
          res.status(200).json(deletedEvents)
      } )
};


exports.retrieveOneEvent = async (req,res)=> {
  try{
   const event = await Event.findById(req.params.id)
   res.json(event)
  }catch(err){
   res.send('Error' , err)
  } 
}

exports.retrieveEvent = function (req, res) {
  Event.find()
      .exec( (err,events) => {
          if(err) return res.status(404).json({success:false})
          res.status(200).json(events)
      } )

};

exports.updateEvent =  async(req, res) =>{
  let _id = req.params.id
  

  Event.updateOne({ _id } , req.body)
      .exec((err,status ) => {
          if(err) return res.status(404).json({success:false})
          res.status(201).json(req.body)
      })
  
};