import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface LayoutFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_faq_sections';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    faq_section: Schema.Attribute.Component<'layout.questions', true>;
  };
}

export interface LayoutFeatures extends Struct.ComponentSchema {
  collectionName: 'components_layout_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_features_sections';
  info: {
    displayName: 'Features Section';
  };
  attributes: {
    features: Schema.Attribute.Component<'layout.features', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    Copyright: Schema.Attribute.String;
    SocialLinks: Schema.Attribute.Component<'layout.social-links', true>;
    text: Schema.Attribute.String;
  };
}

export interface LayoutHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_banners';
  info: {
    displayName: 'Hero Banner';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutItems extends Struct.ComponentSchema {
  collectionName: 'components_layout_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    message: Schema.Attribute.Blocks;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
    role: Schema.Attribute.String;
  };
}

export interface LayoutMenuItems extends Struct.ComponentSchema {
  collectionName: 'components_layout_menu_items';
  info: {
    displayName: 'Menu items';
  };
  attributes: {
    isBoolean: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    MenuItems: Schema.Attribute.Component<'layout.menu-items', true>;
  };
}

export interface LayoutNavbarCom extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbar_coms';
  info: {
    displayName: 'navbar_com';
    icon: 'arrowDown';
  };
  attributes: {};
}

export interface LayoutQuestions extends Struct.ComponentSchema {
  collectionName: 'components_layout_questions';
  info: {
    displayName: 'Questions';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String;
  };
}

export interface LayoutServices extends Struct.ComponentSchema {
  collectionName: 'components_layout_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    is_popular: Schema.Attribute.Boolean;
    price: Schema.Attribute.String;
    short_description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_services_sections';
  info: {
    displayName: 'Services Section';
  };
  attributes: {
    services: Schema.Attribute.Component<'layout.services', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_layout_social_links';
  info: {
    displayName: 'SocialLinks';
  };
  attributes: {
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_layout_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    items: Schema.Attribute.Component<'layout.items', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.about-section': LayoutAboutSection;
      'layout.faq-section': LayoutFaqSection;
      'layout.features': LayoutFeatures;
      'layout.features-section': LayoutFeaturesSection;
      'layout.footer': LayoutFooter;
      'layout.hero-banner': LayoutHeroBanner;
      'layout.items': LayoutItems;
      'layout.menu-items': LayoutMenuItems;
      'layout.navbar': LayoutNavbar;
      'layout.navbar-com': LayoutNavbarCom;
      'layout.questions': LayoutQuestions;
      'layout.services': LayoutServices;
      'layout.services-section': LayoutServicesSection;
      'layout.social-links': LayoutSocialLinks;
      'layout.testimonials': LayoutTestimonials;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
