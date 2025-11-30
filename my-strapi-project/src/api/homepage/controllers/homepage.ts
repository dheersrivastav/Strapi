/**
 * homepage controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::homepage.homepage', ({ strapi }) => ({
  async find(ctx) {
    const populate: any = {
      navbar: { populate: '*' },
      hero_banner: { populate: '*' },
      about_section: { populate: '*' },
      features_section: { populate: '*' },
      services_section: { populate: '*' },
      faq_section: { populate: '*' },
      footer: { populate: '*' },
    };

    const entries = await strapi.entityService.findMany('api::homepage.homepage', {
      populate,
    });

    // For single type, findMany returns an array with one item
    return entries?.[0] || entries;
  },
}));
