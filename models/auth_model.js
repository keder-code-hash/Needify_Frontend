// ngo normal_user
const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.listen(3000)
app.use(express.json());

const useRouter = express.Router();
const authRouter = express.Router();


app.use('/user', useRouter)
app.use('/user', authRouter)

authRouter.get(getSignup)
authRouter.post(postSignup)

useRouter.
    route('/')
    .get(getUser)
    .post(postUser)
    .delete(deleteUser)

useRouter
    .route("/:id")
    .get(getUserById)

let users = [
    {
        'id': 1,
        'name': "Rajib"
    },
    {
        'id': 2,
        'name': "Indra"
    },
    {
        'id': 3,
        'name': "Keder"
    }
]


function getUser(req, res) {
    res.send(users)
}
function postUser(req, res) {
    console.log(req.body);
    users = req.body
    res.json({
        message: "data recived",
        user: req.body
    });
}
function updateUser(req, res) {
    console.log(req.body);
    let dataToBeUpdated = req.body;
    for (key in dataToBeUpdated) {
        users[key] = dataToBeUpdated[key]
    }
    res.json({
        message: " data updated successfully",

    })
}
function deleteUser(req, res) {
    console.log(req.body)
    users = {}
    res.json({
        message: "data deleted"
    })
}

function getUserById(req, res) {
    console.log(req.params.id);
    let paramId = req.params.id;
    let obj = {}
    for (let i = 0; i < users.length; i++) {
        if (obj[i]['id'] == paramId) {
            obj = users[i];
        }
    }
    res.json({
        message: "req received",
        data: obj
    })
}

function getSignup(req, res) {
    res.send('')
}
function postSignup(req, res) {
    console.log('signup', req.body);
    let obj = req.body
    res.json({
        message: "Signup done",
        data: obj
    })
}

const db_link = "mongodb+srv://rajib005:rajib@cluster0.wkthe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(db_link)
    .then(function (db) {
        console.log("db is connected")
    }).catch(function (err) {
        console.log(err);
    })


const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

//models
const userModel = mongoose.model('userModel', userSchema);
(async function createUser() {
    let user = {
        firstName: 'Rajib',
        lastName: 'Nasipuri',
        email: 'abc@gmail.com',
        password: '123456',
        min: 6
    }
    let data = await userModel.create(user);
    console.log(data);
})();

