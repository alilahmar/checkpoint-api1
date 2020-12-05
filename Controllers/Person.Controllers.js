// const replaceOne = require("../Model/person");

exports.postPeople = async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    if (!req.body.age) {
      res.status(400).send({ message: "age is required check it again" });
      return;
    }
    // const user = Person.findOne(replaceOne.body.name);
    // if (user) {
    //   res.status(400).send({ message: "user already exist" });
    //   return;
    // }
    const response = await newPerson.save();
    res.send({ response: response, message: "person is saved" });
  } catch (error) {
    console.log(error);
    res.status(400).send(`can not save${error}`);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const result = await Person.find();
    res.send({ response: result, message: "Getting person successfully" });
  } catch (error) {
    res.status(400).send({ message: "can not get person" });
  }
};

exports.getUsersById = async (req, res) => {
  try {
    const result = await Person.findOne({ _id: req.params.id });
    res.send({ response: result, message: "Getting person successfully" });
  } catch (error) {
    res.status(400).send({ message: "there is no person with this id" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const result = await Person.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ response: "person deleted" })
      : res.send({ response: "there is no person with this id" });
  } catch (error) {
    res.status(400).send({ message: "is not deleted" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const result = await Person.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);
    result.nModified
      ? res.send({ message: "updated" })
      : res.send({ message: "contact already updated" });
    // res.send("updated");
  } catch (err) {
    res.status(400).send("not updated");
  }
};
