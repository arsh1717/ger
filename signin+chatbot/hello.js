var express = require('express');
const bodyParser = require('body-parser');
let app = express();
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});


var PORT = 3000;
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


// Without middleware
app.get('/', function (req, res) {
  res.render('signin', {
    login_data: "",
    signup_data: ""
  });
  // res.send("hello world");
})



app.post('/login', function (req, res) {
  const userSignin = String(req.body.username);
  const passSignin = String(req.body.password);

  //Check if username password exist in the database
  connection.query(`SELECT sno FROM MYTABLE WHERE username='${userSignin}' AND password_='${passSignin}'`, function (err, results, fields) {
    if (err) {
      res.send(err);
    }
    else {
      //Login success
      if (results.length === 1) {
        console.log(results);
        res.render('chat');
      }
      else {
        res.render('signin', {
          login_data: "Username and Password do not match",
          signup_data: ""
        });
      }

    }
  });

})



app.post('/signup', function (req, res) {

  const user = String(req.body.username);
  const pass = String(req.body.password);
  const confirm = String(req.body.confirm);

  if (pass !== confirm) {
    res.render('signup_first', {
      login_data: "",
      signup_data: "Password does not match"
    });

  }
  else {
    const { authorization } = req.headers;
    console.log(req.body);
    console.log({
      user,
      pass,
      authorization,
    });
    //inserting these values in mysql database
    //exporting them first

    connection.query(`INSERT INTO MYTABLE(username,password_) VALUES('${user}','${pass}');`, (err) => {
      if (err) res.send(err);
      else {
        res.render('signin', {
          login_data: "Successfully registered! Sign in now",
          signup_data: ""
        });
      }
    });
  }
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log(`Server listening on http://localhost:${PORT}/`);
});
