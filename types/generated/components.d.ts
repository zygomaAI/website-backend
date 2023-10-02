import type { Schema, Attribute } from '@strapi/strapi';

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
      'section.section': SectionSection;
    }
  }
}
