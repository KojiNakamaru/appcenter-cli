/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a PostRepositoryProviderMappingRequest.
 */
class PostRepositoryProviderMappingRequest {
  /**
   * Create a PostRepositoryProviderMappingRequest.
   * @property {string} externalAccountId Id of user in the external provider
   * service
   * @property {uuid} accountId App Center account id to link to this provider
   * and external id
   */
  constructor() {
  }

  /**
   * Defines the metadata of PostRepositoryProviderMappingRequest
   *
   * @returns {object} metadata of PostRepositoryProviderMappingRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PostRepositoryProviderMappingRequest',
      type: {
        name: 'Composite',
        className: 'PostRepositoryProviderMappingRequest',
        modelProperties: {
          externalAccountId: {
            required: true,
            serializedName: 'external_account_id',
            type: {
              name: 'String'
            }
          },
          provider: {
            required: true,
            isConstant: true,
            serializedName: 'provider',
            defaultValue: 'github',
            type: {
              name: 'String'
            }
          },
          accountId: {
            required: true,
            serializedName: 'account_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PostRepositoryProviderMappingRequest;
