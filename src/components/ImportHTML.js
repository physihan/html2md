import React, { Component } from 'react';
import Modal from '../utils/Modal';
import PropTypes from 'prop-types';

class ImportHTML extends Component {
  render() {
    return (
      <Modal>
        <div className="modal-main">
          <iframe src="./temp.html" frameBorder="0" style={{width:'100%',height:'100%'}}/>
        </div>
      </Modal>
    );
  }
}

ImportHTML.propTypes = {};

export default ImportHTML;
