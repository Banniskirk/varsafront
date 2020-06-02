import React, { Component } from 'react';

export class StatusTitles extends Component {
  render() {
    if (this.props.status === 0) {
      return <div>No official Status</div>;
    } else if (this.props.status === 1) {
      return <div>Accepted For Tasting</div>;
    } else if (this.props.status === 2) {
      return <div>Accepted To Proceed</div>;
    } else if (this.props.status === 3) {
      return <div>Transfered To Direct</div>;
    } else {
      return <div>NA</div>;
    }
  }
}

export class PaperworkTitles extends Component {
  render() {
    if (this.props.paperwork === 0) {
      return <div>Not required</div>;
    } else if (this.props.paperwork === 1) {
      return <div>Required</div>;
    } else if (this.props.paperwork === 2) {
      return <div>Requested</div>;
    } else if (this.props.paperwork === 3) {
      return <div>Received</div>;
    } else if (this.props.paperwork === 4) {
      return <div>Delivered</div>;
    } else {
      return <div>NA</div>;
    }
  }
}

export function PaperworkClass(paperwork) {
  if (paperwork === 0) {
    return '';
  } else if (paperwork === 1) {
    return 'ph-red';
  } else if (paperwork === 2) {
    return 'ph-blue';
  } else if (paperwork === 3) {
    return 'ph-red';
  } else if (paperwork === 4) {
    return 'ph-green';
  } else {
    return <div>NA</div>;
  }
}

export class SampleTitles extends Component {
  render() {
    if (this.props.sample === 0) {
      return <div>Not required</div>;
    } else if (this.props.sample === 1) {
      return <div>Required</div>;
    } else if (this.props.sample === 2) {
      return <div>Requested</div>;
    } else if (this.props.sample === 3) {
      return <div>Confirmed Sending</div>;
    } else if (this.props.sample === 4) {
      return <div>Confirmed Sent</div>;
    } else if (this.props.sample === 5) {
      return <div>Received Sample</div>;
    } else if (this.props.sample === 6) {
      return <div>Delivered Sample</div>;
    } else {
      return <div>NA</div>;
    }
  }
}

export function SampleClass(info) {
  if (info === 0) {
    return '';
  } else if (info === 1) {
    return 'ph-red';
  } else if (info === 2) {
    return 'ph-blue';
  } else if (info === 3) {
    return 'ph-blue';
  } else if (info === 4) {
    return 'ph-blue';
  } else if (info === 5) {
    return 'ph-red';
  } else if (info === 6) {
    return 'ph-green';
  } else {
    return <div>NA</div>;
  }
}

export class Info_RequiredTitles extends Component {
  render() {
    if (this.props.info_required === 0) {
      return <div>Not required</div>;
    } else if (this.props.info_required === 1) {
      return <div>Required</div>;
    } else if (this.props.info_required === 2) {
      return <div>Requested</div>;
    } else if (this.props.info_required === 3) {
      return <div>Received</div>;
    } else if (this.props.info_required === 4) {
      return <div>Delivered</div>;
    } else {
      return <div>NA</div>;
    }
  }
}

export function Info_RequiredClass(info) {
  if (info === 0) {
    return '';
  } else if (info === 1) {
    return 'ph-red';
  } else if (info === 2) {
    return 'ph-blue';
  } else if (info === 3) {
    return 'ph-red';
  } else if (info === 4) {
    return 'ph-green';
  } else {
    return <div>NA</div>;
  }
}

export function AllCompleted(paperwork, sample, info_required) {
  if (paperwork === 0 || paperwork === 4) {
    if (sample === 0 || sample === 6) {
      if (info_required === 0 || info_required === 4) {
        return 'btn-success large p-2';
      }
    }
  } else {
    return 'hidden';
  }
}

export class VendorProfileTitles extends Component {
  render() {
    if (this.props.vendor_profile === 0) {
      return <div>None</div>;
    } else if (this.props.vendor_profile === 1) {
      return <div>Sent form</div>;
    } else if (this.props.vendor_profile === 2) {
      return <div>Received</div>;
    } else if (this.props.vendor_profile === 3) {
      return <div>Submitted</div>;
    } else if (this.props.vendor_profile === 4) {
      return <div>Completed</div>;
    } else {
      return <div>NA</div>;
    }
  }
}

export function VendorProfileClass(vendor_profile) {
  if (vendor_profile === 0) {
    return 'ph-red';
  } else if (vendor_profile === 1) {
    return 'ph-blue';
  } else if (vendor_profile === 2) {
    return 'ph-red';
  } else if (vendor_profile === 3) {
    return 'ph-red';
  } else if (vendor_profile === 4) {
    return 'ph-green';
  } else {
    return <div>NA</div>;
  }
}

export class WebpoTitles extends Component {
  render() {
    if (this.props.web_po === 0) {
      return <div>None</div>;
    } else if (this.props.web_po === 1) {
      return <div>Requested</div>;
    } else if (this.props.web_po === 2) {
      return <div>Completed</div>;
    } else {
      return <div>NA</div>;
    }
  }
}

export function WebpoClass(web_po) {
  if (web_po === 0) {
    return 'ph-red';
  } else if (web_po === 1) {
    return 'ph-blue';
  } else if (web_po === 2) {
    return 'ph-green';
  } else {
    return <div>NA</div>;
  }
}

export class LabelTitles extends Component {
  render() {
    if (this.props.label_review === 0) {
      return <div>Not started</div>;
    } else if (this.props.label_review === 1) {
      return <div>Sent instructions</div>;
    } else if (this.props.label_review === 2) {
      return <div>Received label</div>;
    } else if (this.props.label_review === 3) {
      return <div>NOT APPROUVED</div>;
    } else if (this.props.label_review === 4) {
      return <div>APPROUVED</div>;
    } else {
      return <div>NA</div>;
    }
  }
}

export function LabelClass(label_review) {
  if (label_review === 0) {
    return 'ph-red';
  } else if (label_review === 1) {
    return 'ph-blue';
  } else if (label_review === 2) {
    return 'ph-red';
  } else if (label_review === 3) {
    return 'ph-red';
  } else if (label_review === 4) {
    return 'ph-green';
  } else {
    return <div>NA</div>;
  }
}

export class NTPTitles extends Component {
  render() {
    if (this.props.ntp === 0) {
      return <div>Not Yet</div>;
    } else if (this.props.ntp === 1) {
      return <div>Received</div>;
    } else {
      return <div>NA</div>;
    }
  }
}
