const express=require('express');
const path=require('path')
const app=express();
const PORT=3030;


app.set('view engine',"ejs")    // view engine set

app.use(express.urlencoded({extended:true}))  // built in middleware using post methode


const staticPath=path.join(__dirname,'../Public-ejs')
app.use(express.static(staticPath))     // all css store in Public-ejs folder a


let ValuePush=[];
app.get('/',(req,res)=>{   // Home rought
     res.render("index",{ShowData:ValuePush})  
})    


app.get('/contact',(req,res)=>{   // contact rought
    res.render("contact",{});
}) 

app.post('/',(req,res,next)=>{
     
    const PLanguage=req.body.Plang;   // user give the data and store PLanguage variable
    ValuePush.push(PLanguage);        // then push to ValuePush empty array ta
    res.redirect("/")   // direct home rought a chalo jabo
    
})

app.get('*',(req,res)=>{
    res.send('<h1>404:Error</h1>');
})

app.listen(PORT,()=>{
    console.log(`Server Started at PORT ${PORT}`); 
})       