const dbConnection = require('../../config/dbConnection');
const conn = dbConnection();
const controller ={};

controller.list = (req,res,next)=>{
    //res.send('Hello Word');

    var user =  req.session.user,
    userId = req.session.userId;
    console.log('hola1')
    console.log(user)
   console.log('hola2')
   if(userId == null){
     res.redirect("/login");
     return;
   }
    else	 {
     
conn.query('SELECT * FROM news', (err, result) => {
if(err){
res.json(err);
}
//console.log(result);
res.render ('news/news', {
    news: result,
    user:user
});

  });

}
};

controller.add =(req,res)=>{

    const { title, news } = req.body;
    conn.query('INSERT INTO news SET ? ',
      {
        title,
        news
      }
    , (err, result) => {
      res.redirect('/news');
    });
  };

  controller.edit = (req,res,next) =>{
    var user =  req.session.user,
    userId = req.session.userId;
    const { id_news }= req.params
    conn.query ('select * FROM news WHERE id_news=?',[id_news],(err,result) => {
   
      res.render ('news/news_edit', {
        news: result[0],
        user:user
    });
     console.log(result)
    });
  };


  controller.update = (req,res) =>{
    const { id_news }= req.params
    const news_edit= req.body
  //  console.log(news_edit)
   conn.query ('UPDATE news set ? WHERE id_news = ?',[news_edit,id_news],(err,result) => {
  
     
      res.redirect('/news')

     
    });
  };


  controller.delete =(req,res)=>{
   // console.log(req.params)
   // res.send('works')
   const { id_news }= req.params

conn.query ('DELETE FROM news WHERE id_news=?',[id_news],(err,result) => {
  res.redirect('/news');
});

  };

  controller.recarga = (req,res) =>{
    
  req.location.reload();
  };


module.exports = controller;