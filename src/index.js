import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import { Component } from 'react';
import * as typeformEmbed from "@typeform/embed";
import Whoispage from "./components/Whoispage/Whoispage";
// import reportWebVitals from './reportWebVitals';

class Series extends Component {

  componentDidMount() {
    const popup1 = typeformEmbed.makePopup(
      'https://5ih8bu19m4v.typeform.com/to/kNICAlsm',
      {
        mode: 'drawer_right',
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        onSubmit: function () {
          console.log('Typeform succesfully submitted')
        }
      }
    )
    document.getElementById('bt-popup').addEventListener('click', function
      () {
      popup1.open();
    });

  }
}

const routs = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/whoispage" component={Whoispage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routs, document.getElementById('root'));

export default Series;
