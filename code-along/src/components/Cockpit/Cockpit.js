import React, { useContext, useEffect, useRef } from 'react';
import AuthContext from '../context/auth-context';
import classes from './Cockpit.css';

const cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated)

  useEffect(() => {
    /*
    combines componentDidMount and componentDidUpdate
    can use multiple useEffect methods for each variable
    */
    console.log('[Cockpit.js] useEffect');
    /*
    HTTP request
    */
    // const timer = setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    /*
    returns before the main useEffect function,
    but after the first render cycle
    */
    return () => {
      console.log('[Cockpit.js] cleanup in useEffect');
      // clearTimeout(timer);
    };
    /*
    second argument is an array of variables to watch
    if empty, it'll only run on first render
    */
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup in 2nd useEffect");
    };
  });

  const colorClass = [];
  let btnClass = "";

  if(props.showPersons) {
    btnClass = classes.red;
  }

  if (props.personsLength <= 2) {
    colorClass.push(classes.red);
  }
  if (props.personsLength <= 1) {
    colorClass.push(classes.bold);
  }
  console.log(props.showPersons);
  console.log('btnClass:', btnClass);

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={colorClass.join(" ")}>by Max, on Udemy</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Show/Hide Persons
      </button>
      {/* <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log In</button>}
      </AuthContext.Consumer> */}
      <button onClick={authContext.login}>Log In</button>
    </div>
  );
};

export default React.memo(cockpit);
