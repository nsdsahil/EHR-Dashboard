const mongoose=require("mongoose");
// {
//     id: "020",
//     name: "Amelia",
//     doctor: "Dr. Carter",
//     date: "2022-01-01",
//     email: "KXrYk@example.com",
//     phone: "1234567890",
//     age: "36",
//     gender: "Female",
//     weight: "60",
//     disease: "Osteoporosis",
//     status: "Active",
// }
const patientSchema=new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        
        type: String,
        required: true,
    },
    doctor: {
        type: String
    },
    date: {
        type: String,
        required: true,
    },
    email: {
        type: String
    },
    phone: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    disease: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

const PatientModel=mongoose.model("patient",patientSchema);

module.exports=PatientModel