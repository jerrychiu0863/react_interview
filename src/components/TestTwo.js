import React, { Component } from 'react';
import '../css/TestTwo.css';
import { TextField, Button, GridList, GridListTile } from '@material-ui/core';

class TestTwo extends Component {
  state = { query: '', photos: null };

  onInputChange = e => this.setState({ query: e.target.value });

  onFormSubmit = e => {
    e.preventDefault();
    this.fetchPhotos(this.state.query);
    this.setState({ query: '' });
  };

  async fetchPhotos(query) {
    const url = `https://api.unsplash.com/search/photos?query=${query}`;
    const photos = await fetch(url, {
      headers: {
        Authorization:
          'Client-ID 37c6f7a1c2f80907d21cb72a6bcd2ed56340929153fdddfcc90acbf8f8b27163'
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data.results;
      })
      .catch(error => console.log(error));
    this.setState({ photos });
  }

  renderPhotos() {
    //Check if photos are fetched
    if (!this.state.photos) {
      return null;
    } else {
      return (
        <div className="grid-container">
          <GridList
            cellHeight={200}
            style={{ width: '80%', height: '600' }}
            cols={3}
            spacing={10}
          >
            {this.state.photos.map(photo => (
              <GridListTile key={photo.id} cols={1} rows={1}>
                <img src={photo.urls.small} alt={this.state.query} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="TestTwo">
        <h1>Test Two</h1>
        <form onSubmit={this.onFormSubmit} style={{ marginBottom: '30px' }}>
          <TextField
            placeholder="Search photos"
            value={this.state.query}
            onChange={this.onInputChange}
          ></TextField>
          <Button
            variant="contained"
            color="primary"
            type={'submit'}
            onClick={this.onFormSubmit}
            style={{ marginLeft: '10px' }}
          >
            Submit
          </Button>
        </form>
        {this.renderPhotos()}
      </div>
    );
  }
}

export default TestTwo;
