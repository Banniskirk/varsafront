import React from 'react';
import SAQ from '../../img/SAQ.jpg';
import VDL from '../../img/VDL.jpg';
import KEG from '../../img/KEG.jpg';
import CEL from '../../img/CEL.jpg';

const Dashboard = () => {
  return (
    <div>
      <h1>DASHBOARD</h1>
      <p></p>
      <h3>LIST OF MODULES TO ADD</h3>
      <p>
        -ORDERING SYSTEM - Sales team places orders here and head office
        processes them, linking ordering from the LCBO, invoicing and inventory
        management
      </p>
      <p>
        -LCBO STORES - History of visits/calls -List of current and past
        products with stats
      </p>
      <p>
        -CLIENT DATABASE - List of all clients with info: Basic info, Order
        history, payment history, Notes, Client team members
      </p>
      <p>
        -CONTACTS DATABASE - Anybody we interact with; suppliers, potential
        clients, client team members owner, somms etc.
      </p>
      <p>
        -RETAIL PRODUCTS TRACKING SYSTEM - Including inventory tracking,
        sellthrough rates and other metrics
      </p>
      <p>
        -POTW/DESTINATION COLLECTION MODULE - Products/Suppliers for
        consideration - Product Pipeline and approvals - Sellthrough tracking
      </p>
      <p>
        -EXPENSES MODULE - Team members can enter expenses on the go and upload
        photos of invoices with the app
      </p>
      <p>
        -UPCOMING PRODUCT RELEASES - Categorized by preparations requirments eg:
        A general listing vs a Classics release
      </p>
      <p>
        {' '}
        -UPLOAD MODULE - Send link to suppliers to upload their documents
        directly into system. They will then be availble in the Pipeline page
        details.
      </p>
      <h1 className='p-2 m-2'>NEW WEB CONCEPT</h1>
      <div className='grid-2c badge p-3 m-3'>
        <div className='p-2 m-2'>
          <img
            src={SAQ}
            alt='logo'
            style={{ width: '300px', height: '300px' }}
          ></img>
        </div>

        <div className='p-2 m-2'>
          <img
            src={KEG}
            alt='logo'
            style={{ width: '300px', height: '300px' }}
          ></img>
        </div>
        <div>OUR RETAIL PARTNERS</div>
        <div>OUR RESTAURANT PARTNERS</div>
        <div className='p-2 m-2'>
          <img
            src={VDL}
            alt='logo'
            style={{ width: '300px', height: '300px' }}
          ></img>
        </div>
        <div className='p-2 m-2'>
          <img
            src={CEL}
            alt='logo'
            style={{ width: '300px', height: '300px' }}
          ></img>
        </div>
        <div>OUR PRODUCING PARTNERS</div>
        <div>OUR PRODUCTS</div>
      </div>
    </div>
  );
};

export default Dashboard;
