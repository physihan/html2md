import React, { Component } from 'react';
import Modal from '../utils/Modal';
import PropTypes from 'prop-types';

class ImportHTML extends Component {
  render() {
    return (
      <Modal>
        <div className="modal-main" >
      <iframe frameborder="0">
      <body contentEditable="true">aaca</body>
      
      </iframe>

        </div>
      </Modal>
    );
  }
}

ImportHTML.propTypes = {};

export default ImportHTML;
