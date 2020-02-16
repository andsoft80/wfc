import React from 'react';
import labels from '../locale'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// import Form, { Item } from 'devextreme-react/form';
import 'devextreme-react/text-area';

import './form.css';
import ResponsiveBox, {
  Row,
  Col,
  Item,
  Location
} from 'devextreme-react/responsive-box';
function screen(width) {
  return (width < 700) ? 'sm' : 'lg';
}
class PlaceCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      locale: "ru",
      countries: [
        { "_id": "ru", "name": "Россия" },
        { "_id": "us", "name": "США" },
        { "_id": "fi", "name": "Финляндия" },

      ],
      regions: [
        { "_id": "ru1", "name": "Центральная Россия" },
        { "_id": "ru2", "name": "Карелия" },
        { "_id": "ru3", "name": "Байкал" },
        { "_id": "ru4", "name": "Кольский полуостров" }
      ]
    };

  }


  lab = (label) => {
    return labels[label][this.state.locale];
  }

  render() {


    return (

      <div className='form-style-6'>
        {/* <div> */}
        <h1>Contact Us</h1>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm = {6}>
              <TextField id="firstName" label={this.lab('firstName')} variant="filled" name="firstName" helperText="Some important text" style={{ marginBottom: 0 }} fullWidth/>
            </Grid>
            <Grid item xs={12} sm = {6}>
              <TextField id="secondName" label={this.lab('secondName')} variant="filled" name="secondName" helperText="Some important text" style={{ marginBottom: 0 }} fullWidth/>
            </Grid>
            <Grid item xs={12} >
              <TextField id="email" label={this.lab('email')} variant="filled" name="email" helperText="Some important text" style={{ marginBottom: 0 }} fullWidth type="email" />
            </Grid>
            <input type="submit" value='Send' />
          </Grid>
        </form>
      </div>
    );
  }
}

export default PlaceCard;
