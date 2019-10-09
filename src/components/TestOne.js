import React, { Component } from 'react';
import { TextField, Button, Dialog, DialogTitle } from '@material-ui/core';

class TestOne extends Component {
  state = { text: '', shouldDialogOpen: false };

  onInputChange = e => this.setState({ text: e.target.value });

  onFormSubmit = e => {
    e.preventDefault();
    //If input is not empty then open Dialog
    if (this.state.text !== '') {
      this.setState({ shouldDialogOpen: true });
    }
  };

  onDialogClose = () => {
    this.setState({ shouldDialogOpen: false, text: '' });
  };

  render() {
    return (
      <div className="TestOne">
        <h1>Test One</h1>
        <form onSubmit={this.onFormSubmit}>
          <TextField
            value={this.state.text}
            onChange={this.onInputChange}
            placeholder="Write something here"
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
        <Dialog
          aria-labelledby="simple-dialog-title"
          open={this.state.shouldDialogOpen}
          onClose={this.onDialogClose}
        >
          <DialogTitle id="simple-dialog-title">{this.state.text}</DialogTitle>
        </Dialog>
      </div>
    );
  }
}

export default TestOne;
