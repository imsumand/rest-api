const express = require("express");
require("./db/conn");
const app = express();
const Student = require("./models/students");
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/students", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })

})


//Get all students
app.get("/students", async (req, res) => {
    try {
        const studentData = await Student.find();
        res.send(studentData);
    }
    catch (e) {
        res.send(e);

    }
})

//Get single student
app.get("/students/:id", async (req, res) => {
    try {
        const name = req.params.id;
        const studentOne = await Student.findById(_id.id);
        if (!studentOne) {
            return res.status(404).send();
        }
        else {
            res.send(studentOne);
        }
    }
    catch (e) {
        res.status(500).send(e);
    }
})

//Update
app.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentUpdate = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(studentUpdate)
    }
    catch (e) {
        res.status(404).send(studentUpdate);

    }

})

//Delete
app.delete("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentDelete = await Student.findByIdAndDelete(_id);
        if (!studentDelete) {
            res.status(400).send();
        }
        else {
            res.status(201).send(studentDelete);
        }
    }
    catch (e) {
        res.status(500).send(studentUpdate);

    }

})

app.listen(port, () => {
    console.log(`Connection setup at port ------ ${port}`);
})