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
  tierId: 'pricing_0001',
  pricingCurrency: '$',
  pricingType: 'monthly',
  tiers: [
    {
      tierId: 'pricing_0001',
      tierHeading: 'Basic',
      tierText: 'With supporting text below as a natural lead-in to additional content.',
      tierSelected: false,
      tierFeatures: {
        tierFeatureOne: 'Feature one',
        tierFeatureTwo: 'Feature two',
        tierFeatureThree: 'Feature three'
      },
      tierPrice: '29'
    },
    {
      tierId: 'pricing_0002',
      tierHeading: 'Plus',
      tierText: 'With supporting text below as a natural lead-in to additional content.',
      tierSelected: true,
      tierFeatures: {
        tierFeatureOne: 'Feature one',
        tierFeatureTwo: 'Feature two',
        tierFeatureThree: 'Feature three',
        tierFeatureFour: 'Feature four',
        tierFeatureFive: 'Feature five'
      },
      tierPrice: '49'
    },
    {
      tierId: 'pricing_0003',
      tierHeading: 'Pro',
      tierText: 'With supporting text below as a natural lead-in to additional content.',
      tierSelected: false,
      tierFeatures: {
        tierFeatureOne: 'Feature one',
        tierFeatureTwo: 'Feature two',
        tierFeatureThree: 'Feature three',
        tierFeatureFour: 'Feature four',
        tierFeatureFive: 'Feature five',
        tierFeatureSix: 'Feature six'
      },
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
