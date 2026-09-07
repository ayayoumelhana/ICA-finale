/**
 * CENTRAL DATA REGISTRY
 * Re-exports all data modules for easy CMS and page consumption
 */
const siteConfig = require('./siteConfig');
const homeData = require('./homeData');
const etudeData = require('./etudeData');
const formationData = require('./formationData');
const testimonialsData = require('./testimonialsData');
const contactData = require('./contactData');

module.exports = {
  siteConfig,
  homeData,
  etudeData,
  formationData,
  testimonialsData,
  contactData
};
