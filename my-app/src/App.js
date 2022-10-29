import './App.css';

function App() {
  return (
    <body>
      <div class="login">
        <form>
          <div class="con">
            <header class="head-form">
              <img src={require('./RadicallX-Black-Logo 1.png')} className="App-logo" alt="RadicalY"  />
              <h2>Login</h2>
            </header>
            <div class="inputs">
              <input class="email" id="txt-input" type="text" placeholder="Email"></input><br></br>
              <input class="pass" type="password" placeholder="Password" id="pwd" name="password" required></input><br></br>
            </div>
            <div class="remember">
              <input id="check" type="checkbox" class="check" checked></input>
              <label for="rm"> Remember Me</label>
              <label class="forgot"> Forgot password?</label>
            </div>
            <div class="Submit">
              <input type="submit" class="button" value="Login"></input>
            </div>
          </div>
        </form>
      </div>



    </body>
    /*<body>
      <div className="App">
        <header className="App-header">
          <img src={require('./RadicallX-Black-Logo 1.png')} className="App-logo" alt="RadicalY"  />
          </header>
      </div>
      <div className="Login">
        <h1>Login</h1>
          <div className="login-form">
            <form>
              <input type="text" id="Email" value="Email"></input><br></br>
              <input type="text" id="Password" value="Password"></input><br></br>
            </form>
          </div>
      </div>
      <form2>
        <input type="checkbox" id="Remember" value="Password/Email"></input>
      </form2>
      <form3>
        <label for="Remeber"> Rememeber me</label><br></br>
        <input type="submit" value="Login"></input><br></br>
      </form3>

    </body>*/
  );

}

export default App;
