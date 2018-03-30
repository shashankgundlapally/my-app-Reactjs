import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Pagination, Button,DatePicker, Dropdown, FormField, Panel, Password, TextBox, TextArea, Modal } from '@veneer/core';

class App extends Component {
  state = {
    isShowingModal: false,
  }
  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false})
  render() {
    const {
      props: {
        isLoading,
      },
    } = this;
 
    return <div  >
        <Button onClick={this.handleClick}  >
              New Customer
            </Button>
      {
        this.state.isShowingModal &&

        <Modal onClose={this.handleClose}
        // footer={yourElement}
        onClose={this.handleClose}
        title="Modal title"
        size="sm">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies ultrice
          s enim, et cursus dolor ornare ut. Pellentesque sollicitudin ligula et felis tin
          cidunt rutrum
        </p>
      </Modal>
        // <ModalContainer onClose={this.handleClose}>
        //   {
        //     isLoading ?
        //     <ReactSpinner/> :
        //     <ModalDialog onClose={this.handleClose}>
        //       <h1>Dialog Content</h1>
        //       <p>More Content. Anything goes here</p>
        //     </ModalDialog>
        //   }
        // </ModalContainer>
      }
    </div>;
  }

}

export default App;
