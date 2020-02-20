import React from 'react';
import labels from './PlaceCard_locale'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import './form.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

// function screen(width) {
//   return (width < 700) ? 'sm' : 'lg';
// }

const styles = {
  select: { padding: '10px' }
};
class PlaceCard extends React.Component {
  constructor(props) {
    super(props);
    this.langs = [{ "_id": "ru", "name": "ru" }, { "_id": "en", "name": "en" }];
    this.handleChange = this.handleChange.bind(this);
    

    this.state = {
      lang: "ru",
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
  handleChange(e) {
    this.setState({ lang: e.target.value });
  }

  lab = (label) => {
    return labels[label][this.state.locale];
  }

  render() {
    const { children, classes } = this.props;

    return (

      <div className='form-style-6'>
        <div className='flex'>
          <h1>{this.lab('newPlace')}</h1>



          <Select
            variant="outlined"
            margin={'dense'}
            className='flexrightSel'
            id="demo-simple-select-outlined"
            value={this.state.lang}
            onChange={this.handleChange}
          // labelWidth={labelWidth}
          >

            {this.langs.map((item) =>
              <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>


                )}
                        
          </Select>


              <input type="submit" value='Send' className='flexright' />
        </div>

          <form>
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
              <TextField id="firstName" label={this.lab('firstName')} variant="filled" name="firstName" helperText="Some important text" style={{ marginBottom: 0 }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="secondName" label={this.lab('secondName')} variant="filled" name="secondName" helperText="Some important text" style={{ marginBottom: 0 }} fullWidth />
            </Grid> */}
              <Grid item xs={12}>
                <TextField id="title" label={this.lab('title')} variant="filled" name="title" style={{ marginBottom: 43, width:'50%' }} type="text" />
              </Grid>
              <Grid item xs={6} >
                <input type="submit" value='Send' />
              </Grid>
            </Grid>
          </form>
        </div>
        );
      }
    }
    
    export default withStyles(styles)(PlaceCard);
