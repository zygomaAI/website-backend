import type { Schema, Attribute } from '@strapi/strapi';

export interface CardBenefits extends Schema.Component {
  collectionName: 'components_card_benefits';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    Heading: Attribute.String & Attribute.Required;
    Content: Attribute.RichText & Attribute.Required;
  };
}

export interface CardsWorkforceCards extends Schema.Component {
  collectionName: 'components_cards_workforce_cards';
  info: {
    displayName: 'Workforce Cards';
  };
  attributes: {
    CardTitle: Attribute.String & Attribute.Required;
    CardContent: Attribute.RichText & Attribute.Required;
  };
}

export interface ReviewTestimonials extends Schema.Component {
  collectionName: 'components_review_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    ReviewContent: Attribute.RichText & Attribute.Required;
    Author: Attribute.String & Attribute.Required;
    AuthorDesignation: Attribute.String & Attribute.Required;
  };
}

export interface SectionSection extends Schema.Component {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    SectionTitle: Attribute.String & Attribute.Required;
    SectionContent: Attribute.RichText & Attribute.Required;
    SectionImage: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card.benefits': CardBenefits;
      'cards.workforce-cards': CardsWorkforceCards;
      'review.testimonials': ReviewTestimonials;
      'section.section': SectionSection;
    }
  }
}
