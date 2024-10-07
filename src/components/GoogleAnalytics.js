// GoogleAnalytics.js
import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

const GoogleAnalytics = ({ trackingId }) => {
  useEffect(() => {
    ReactGA.initialize(trackingId);
    ReactGA.send("pageview");
  }, [trackingId]);

  return null;
};

export default GoogleAnalytics;
