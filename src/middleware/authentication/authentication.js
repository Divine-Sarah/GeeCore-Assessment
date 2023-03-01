import { UsersCollection } from "../../db/schema/collection.js";


export class Authentication {
    static async signup(req, res){
        const {fullname,email,phone,password} = req.body;
        // console.log(req.body)
        // return
    
        const existingUser = await UsersCollection.findOne({ email: email})
    
        if(existingUser) return res.status(400).send({message: "Existing User"});
         
        const user = await UsersCollection.create({ 
            fullname:fullname,
            email: email,
            phone: phone,
            password: password
        })
        if(!user) return res.status(500).send({ message: 'Error creating user'})
        res.status(200).send({ message: 'User created'})
    }



    static async login(req, res) {
        const {email, password}= req.body;

        if(!(email && password)){
            res.status(400).send('All input required');
        }

        const user = await UsersCollection.findOne({email})

        if(user) return res.status(200).send({message: 'Login Successful'});

        res.status(200).json(user);
    
        res.status(400).send("Invalid Credentials");
    }
       
}
