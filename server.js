const express = require("express");
const alert = require("alert");
const bodyParser = require("body-parser");
app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

const userService = require("./user_service");

app.get('/',(req,res)=>{
  res.render("index")
});

app.get('/signup', (req,res) => {
  res.render("signup");
})

app.post("/signup", async (req, res) => {
  const { email, name, password, birthplace, age} = req.body;
  try {
    const reguser = await userService.addUser(email, password);
    const addfield = await userService.additionalField(reguser.user.uid, name, birthplace, age);

    alert("Signup Successful! Go for Signin");
    res.redirect('/');
    
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

app.get("/signin", (req,res)=> {
  res.render("signin");
})

app.post("/signin", async (req, res) => {
  const { email,password} = req.body;
  try {
    const reguser = await userService.authenticate(email, password);
    const details = await userService.getfield(reguser.user.uid);
    res.render('show',{user:reguser.user, additionalfield:details});
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

app.get('/signout', async(req,res) =>{
  try{
    const signo = await userService.logout();
    res.redirect('/');
  } catch(err){
    res.status(401).json({ error: err.message });
  }
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started at port ${port}`));
