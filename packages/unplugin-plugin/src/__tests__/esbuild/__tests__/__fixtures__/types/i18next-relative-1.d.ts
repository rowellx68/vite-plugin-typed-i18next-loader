/**
 * WARNING: This file is generated by typed-i18next-loader. Do not modify it manually.
 */

import 'i18next'

type GeneratedResources = {
  'nested': {
    'other-namespace-yaml.message': string
    'other-namespace-yml.message': string
  }
}

type FlatGeneratedResources<TResource, NS extends keyof TResource> = {
  [Property in keyof TResource[NS] as `${NS & string}:${Property & string}`]: TResource[NS][Property]
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: GeneratedResources
      & { 'translation': FlatGeneratedResources<GeneratedResources, 'nested'> }
  }
}
