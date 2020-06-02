import React, { Component } from 'react';

export class Phase1Titles extends Component {
  render() {
    return (
      <div>
        <div>
          <ul className='pipeline text-blueish text-center'>
            <li>Product Name</li>
            <li>NISS</li>
            <li>Channel</li>
            <li>Status</li>
            <li>Paperwork Required</li>
            <li>Date</li>
            <li>Sample Required</li>
            <li>Date</li>
            <li>Info Required</li>
            <li>Date</li>
            <li>Last update</li>
          </ul>
        </div>
      </div>
    );
  }
}

export class Phase2Titles extends Component {
  render() {
    return (
      <div>
        <h3 className='lead m-1'>Products in Phase 2</h3>
        <div>
          <ul className='pipeline text-blueish text-center'>
            <li>Product Name</li>
            <li>NISS</li>
            <li>Channel</li>
            <li>Status</li>
            <li>V. Pro.</li>
            <li>WebPO</li>
            <li>Label</li>
            <li>NTP</li>
            <li>NTP DATE</li>
            <li>Qty</li>
            <li>Release</li>
            <li>Last update</li>
          </ul>
        </div>
      </div>
    );
  }
}
