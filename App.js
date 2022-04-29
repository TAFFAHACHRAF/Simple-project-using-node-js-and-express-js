const express=require('express')

const app=express()
app.set('view engine','ejs')


app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})

app.get('/about',function(req,res){
    res.sendFile(__dirname + '/about.html')
})

students =[
    {name: 'Achraf',birthday: '09/07/2001',cin: 'BJ473674706',cen :'R130419706'},
    {name: 'Abdelmalek',birthday: '07/05/2001',cin: 'BJ478524',cen :'P458741525'},
    {name: 'Abderrahmane',birthday: '08/08/2001',cin: 'HH0874125',cen :'Y899624777'},
]
app.get('/students',(req,res)=>{
    res.render('students',{students:students})
})

app.get('/professeurs',(req,res)=>{
    res.render('Profs',{name :'Khalid'})
})
app.get('/contact',function(req,res){
    res.sendFile(__dirname + '/contact.html')
})

app.listen(3000,function(req,res){
    console.log('Server is running ...')
})