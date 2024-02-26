const yargs = require("yargs");
const addPerson = require("./data10")
// console.log(yargs.argv);
yargs.command({
  command: "add",
  describe: "This is add",
  builder: {
    id: {
        describe: "this is first name",
        demandOption:true,
        type:"string"
      },
    
      fname: {
      describe: "this is first name",
      demandOption:true,
      type:"string"
    },
    lname: {
        describe: "this is first name",
        demandOption:true,
        type:"string"
      },
      age: {
        describe: "Age",
        demandOption:true,
        type:"string"
      },
      city: {
        describe: "City",
        // demandOption:true,
        type:"string"
      },
     
  },
  handler: (x) => {
    addPerson.addPerson(x.id,x.fname,x.lname,x.age,x.city )
  },
});

yargs.command({
    command:"delete",
    descripe:"delete user",
    builder:{
        id:{
            describe: "this is first name",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        addPerson.deletUser(x.id)

    }
})


yargs.command({
    command:"read",
    describe:"read ",
    builder:{
        id:{
            describe: "this is first name",
            demandOption:true,
            type:"string"
        },
    },
    handler:(x)=>{
        addPerson.readDAta(x.id)
    }
})

yargs.command({
    command:"list",
    descripe:"List",
    builder:{},
    handler:(x)=>{
        addPerson.getAllUser()
    }
})
yargs.parse()