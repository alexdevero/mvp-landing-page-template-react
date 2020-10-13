export const navConfig = {
  useDarkMode: true,
  navLinks: [
    {
      navLinkTitle: '',
      navLinkUrl: '',
      navLinkOpenInNewWindow: true
    },
    {
      navLinkTitle: '',
      navLinkUrl: '',
      navLinkOpenInNewWindow: true
    }
  ]
}

export const heroConfig = {
  heroHeading: 'Hello, world!',
  heroText: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
  heroHasCta: false,
  heroCtaText: '',
  heroCtaLink: '',
  heroInputPlacehodler: 'Enter email...',
  heroButtonText: 'Request access',
}

export const splitScreenConfig = {
  splitScreens: [
    {
      splitScreenID: 'splt_0001',
      splitScreenImageUrl: '',
      splitScreenImageTitle: '',
      splitScreenHeading: 'One',
      splitScreenText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tenetur eligendi commodi qui culpa blanditiis.',
      splitScreenDirection: 'image-left'
    },
    {
      splitScreenID: 'splt_0002',
      splitScreenImageUrl: '',
      splitScreenImageTitle: '',
      splitScreenHeading: 'Two',
      splitScreenText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tenetur eligendi commodi qui culpa blanditiis.',
      splitScreenDirection: 'image-right'
    },
    {
      splitScreenID: 'splt_0003',
      splitScreenImageUrl: '',
      splitScreenImageTitle: '',
      splitScreenHeading: 'Three',
      splitScreenText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tenetur eligendi commodi qui culpa blanditiis.',
      splitScreenDirection: 'image-left'
    }
  ]
}

export const featuresConfig = {
  featuresNumOfRows: 2,
  featuresItemsPerRow: 3,
  features: [
    {
      featureID: 'feat_0001',
      featureImageUrl: '',
      featureHeading: 'One',
      featureText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tenetur eligendi commodi qui culpa blanditiis.'
    },
    {
      featureID: 'feat_0002',
      featureImageUrl: '',
      featureHeading: 'Two',
      featureText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tenetur eligendi commodi qui culpa blanditiis.'
    },
    {
      featureID: 'feat_0003',
      featureImageUrl: '',
      featureHeading: 'Three',
      featureText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tenetur eligendi commodi qui culpa blanditiis.'
    },
    {
      featureID: 'feat_0004',
      featureImageUrl: '',
      featureHeading: 'Four',
      featureText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tenetur eligendi commodi qui culpa blanditiis.'
    },
    {
      featureID: 'feat_0005',
      featureImageUrl: '',
      featureHeading: 'Five',
      featureText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tenetur eligendi commodi qui culpa blanditiis.'
    },
    {
      featureID: 'feat_0006',
      featureImageUrl: '',
      featureHeading: 'Six',
      featureText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tenetur eligendi commodi qui culpa blanditiis.'
    }
  ]
}

export const pricingConfig = {
  pricingCurrency: '$',
  pricingType: 'monthly',
  tiers: [
    {
      tierId: 'pricing_0001',
      tierHeading: 'Basic',
      tierText: 'With supporting text below as a natural lead-in to additional content.',
      tierSelected: false,
      tierFeatures: [
        {
          tierFeatureId: 'tierFeat_0001',
          tierFeatureTitle: 'Feature one',
          tierFeatureAvailable: true,
        },
        {
          tierFeatureId: 'tierFeat_0002',
          tierFeatureTitle: 'Feature two',
          tierFeatureAvailable: true,
        },
        {
          tierFeatureId: 'tierFeat_0003',
          tierFeatureTitle: 'Feature three',
          tierFeatureAvailable: false,
        },
        {
          tierFeatureId: 'tierFeat_0004',
          tierFeatureTitle: 'Feature four',
          tierFeatureAvailable: false,
        },
        {
          tierFeatureId: 'tierFeat_0005',
          tierFeatureTitle: 'Feature five',
          tierFeatureAvailable: false,
        },
        {
          tierFeatureId: 'tierFeat_0006',
          tierFeatureTitle: 'Feature six',
          tierFeatureAvailable: false,
         }
      ],
      tierPrice: '29'
    },
    {
      tierId: 'pricing_0002',
      tierHeading: 'Plus',
      tierText: 'With supporting text below as a natural lead-in to additional content.',
      tierSelected: true,
      tierFeatures: [
        {
          tierFeatureId: 'tierFeat_0007',
          tierFeatureTitle: 'Feature one',
          tierFeatureAvailable: true,
        },
        {
          tierFeatureId: 'tierFeat_0008',
          tierFeatureTitle: 'Feature two',
          tierFeatureAvailable: true,
        },
        {
          tierFeatureId: 'tierFeat_0009',
          tierFeatureTitle: 'Feature three',
          tierFeatureAvailable: true,
        },
        {
          tierFeatureId: 'tierFeat_0010',
          tierFeatureTitle: 'Feature four',
          tierFeatureAvailable: false,
        },
        {
          tierFeatureId: 'tierFeat_0011',
          tierFeatureTitle: 'Feature five',
          tierFeatureAvailable: false,
        },
        {
          tierFeatureId: 'tierFeat_0012',
          tierFeatureTitle: 'Feature six',
          tierFeatureAvailable: false,
         }
      ],
      tierPrice: '49'
    },
    {
      tierId: 'pricing_0003',
      tierHeading: 'Pro',
      tierText: 'With supporting text below as a natural lead-in to additional content.',
      tierSelected: false,
      tierFeatures: [
        {
          tierFeatureId: 'tierFeat_0013',
          tierFeatureTitle: 'Feature one',
          tierFeatureAvailable: true,
        },
        {
          tierFeatureId: 'tierFeat_0014',
          tierFeatureTitle: 'Feature two',
          tierFeatureAvailable: true,
        },
        {
          tierFeatureId: 'tierFeat_0015',
          tierFeatureTitle: 'Feature three',
          tierFeatureAvailable: true,
        },
        {
          tierFeatureId: 'tierFeat_0016',
          tierFeatureTitle: 'Feature four',
          tierFeatureAvailable: true,
        },
        {
          tierFeatureId: 'tierFeat_0017',
          tierFeatureTitle: 'Feature five',
          tierFeatureAvailable: true,
        },
        {
          tierFeatureId: 'tierFeat_0018',
          tierFeatureTitle: 'Feature six',
          tierFeatureAvailable: true,
         }
      ],
      tierPrice: '99'
    }
  ]
}

export const signUpConfig = {
  signUpHeading: 'Subscribe to "X"',
  signUpText: 'Subscribe to receive email notifications when "X" is launched and about new features and new releases.',
  signUpInputPlaceholder: 'Enter your email...',
  signUpButtonText: 'Sign me up',
  signUpErrorMessage: 'Please use correct email address.'
}

export const shareConfig = {
  shareHeading: 'Help us spread the word',
  shareText: 'Please, help us spread the word about "X" by sharing it with your friends.',
  shareLinks: [
    {
      shareLinkID: 'shr_0001',
      shareLinkIconName: 'fab fa-twitter',
      shareLinkTitle: 'Twitter',
      shareLinkUrl: ''
    },
    {
      shareLinkID: 'shr_0002',
      shareLinkIconName: 'fab fa-facebook-square',
      shareLinkTitle: 'Facebook',
      shareLinkUrl: ''
    },
    {
      shareLinkID: 'shr_0003',
      shareLinkIconName: 'fab fa-reddit',
      shareLinkTitle: 'Reddit',
      shareLinkUrl: ''
    },
    {
      shareLinkID: 'shr_0004',
      shareLinkIconName: 'far fa-envelope',
      shareLinkTitle: 'Email',
      shareLinkUrl: ''
    }
  ]
}

export const footerConfig = {
  footerCopyrightText: `Copyright ${new Date().getFullYear()}. Alex Devero, all rights reserved.`,
  footerLinks: [
    {
      footerLinkID: 'foot_0001',
      footerLinkIconName: 'far fa-envelope',
      footerLinkTitle: 'Email',
      footerLinkUrl: ''
    },
    {
      footerLinkID: 'foot_0002',
      footerLinkIconName: 'fab fa-product-hunt',
      footerLinkTitle: 'Product Hunt',
      footerLinkUrl: ''
    }
  ]
}
