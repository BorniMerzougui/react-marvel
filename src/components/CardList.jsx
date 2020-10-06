import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
// import { get } from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import axios from 'axios';
import CardUser from './Card';

class CardList extends React.Component {

  state = {
    chars: [],
    activePage: 15
  }

  componentDidMount() {
    const url = 'https://gateway.marvel.com/v1/public/';
    fetch(`${url}characters?ts=1&apikey=1881abfe945dfdbf0edb335c81b0863f&offset=0&limit=20`)
      .then((response) => response.json())
      .then((character) => {
        this.setState({
          chars: character.data.results
        })
      });
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }

  render() {
    // destruct props
    const { className } = this.props;
    return (
      <Grid className={className}>
        <Grid.Row>
          <Grid.Column>
            <Card.Group className="users_list">
            {this.state.chars && this.state.chars.map((char) => (
                <CardUser
                  key={char.id}
                  name={char.name}
                  img={char.thumbnail.path}
                  extension={char.thumbnail.extension}
                />
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

// props validations is here
CardList.propTypes = {
  className: PropTypes.string,
};

// export the component and add css here in the same file ( small css code )
export default styled(CardList)`
.users_list {
  justify-content: center;
  margin: 0;
}
.input_search{
  padding-top: 20px;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
  }
  .input_search__img{
    position:absolute;
    bottom:2px;
    right:5px;
    width:24px;
    height:24px;
    }
    .input_container {
      position:relative;
      padding:0 0 0 20px;
      margin:0 auto;
      width: 200px;
  }
  .input_img-container{
    display: block;
    margin: 0 auto;
  }
`;