import React from 'react';
import labels from '../locale'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
// import Form, { Item } from 'devextreme-react/form';
import 'devextreme-react/text-area';
import SelectBox from 'devextreme-react/select-box';
import TagBox from 'devextreme-react/tag-box';
import TextBox from 'devextreme-react/text-box';
import DateBox from 'devextreme-react/date-box';
import TextArea from 'devextreme-react/text-area';
import Button from 'devextreme-react/button';
import Validator from 'devextreme-react/validator';
import notify from 'devextreme/ui/notify';
import validationEngine from 'devextreme/ui/validation_engine';
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

    setTimeout(() => validationEngine.validateGroup());
    return (
      <div id="page">
        <ResponsiveBox
          singleColumnScreen="sm"
          screenByWidth={screen}>
          <Row ratio={1}></Row>
          <Row ratio={2} screen="xs"></Row>
          <Row ratio={2}></Row>
          <Row ratio={1}></Row>

          <Col ratio={1}></Col>
          <Col ratio={2} screen="lg"></Col>
          <Col ratio={1}></Col>
          <Item>
            <Location
              row={0}
              col={0}
              colspan={3}
              screen="lg"
            ></Location>
            <Location
              row={0}
              col={0}
              colspan={2}
              screen="sm"
            ></Location>
            <div className="header item">
              <p>Header</p>
            </div>
          </Item>
          <Item>
            <Location
              row={1}
              col={0}
              screen="lg"
            ></Location>
            <Location
              row={2}
              col={0}
              screen="sm"
            ></Location>
            <div className="left-side-bar item">
              <p>Left Bar</p>
            </div>
          </Item>
          <Item>
            <Location
              row={1}
              col={1}
              screen="lg"
            ></Location>
            <Location
              row={1}
              col={0}
              colspan={2}
              screen="sm"
            ></Location>
            <div className="content item">
              <p>Content</p>
            </div>
          </Item>

          <Item>
            <Location
              row={1}
              col={2}
              screen="lg"
            ></Location>
            <Location
              row={2}
              col={1}
              screen="sm"
            ></Location>
            <div className="right-side-bar item">
              <p>Right Bar</p>
            </div>
          </Item>
          <Item>
            <Location
              row={2}
              col={0}
              colspan={3}
              screen="lg"
            ></Location>
            <Location
              row={3}
              col={0}
              colspan={2}
              screen="sm"
            ></Location>
            <div className="footer item">
              <p>Footer</p>
            </div>
          </Item>
        </ResponsiveBox>
      </div>
    );
  }
}

export default PlaceCard;
