// WARNING: This file is auto-generated by vite-plugin-typed-i18next-loader. Do not edit it manually.

import 'i18next'

type GeneratedResources = {
  'namespace': {
    'friend': string
    'friend_female': string
    'friend_female_one': string
    'friend_female_other': string
    'friend_female_zero': string
    'friend_male': string
    'friend_male_one': string
    'friend_male_other': string
    'friend_male_zero': string
    'message': string
    'other': string
  }
  'translation': {
    'app.message': string
    'app.message.0': string
    'app.message.1': string
    'app.pages': string
    'app.pages_one': string
    'app.pages_other': string
    'app.pages_zero': string
    'app.rank': string
    'app.rank_ordinal_few': string
    'app.rank_ordinal_one': string
    'app.rank_ordinal_other': string
    'app.rank_ordinal_two': string
    'app.title': string
  }
}

type FlatGeneratedResources<TResource, NS extends keyof TResource> = {
  [Property in keyof TResource[NS] as `${NS & string}:${Property & string}`]: TResource[NS][Property]
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'namespace'
    resources: GeneratedResources
      & { 'namespace': FlatGeneratedResources<GeneratedResources, 'namespace'> }
      & { 'namespace': FlatGeneratedResources<GeneratedResources, 'translation'> }
  }
}