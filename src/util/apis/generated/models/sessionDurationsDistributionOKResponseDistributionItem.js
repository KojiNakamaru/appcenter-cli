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
 * Class representing a SessionDurationsDistributionOKResponseDistributionItem.
 */
class SessionDurationsDistributionOKResponseDistributionItem {
  /**
   * Create a SessionDurationsDistributionOKResponseDistributionItem.
   * @property {string} [bucket] The bucket name.
   * @property {number} [count] The count of sessions in current bucket.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SessionDurationsDistributionOKResponseDistributionItem
   *
   * @returns {object} metadata of SessionDurationsDistributionOKResponseDistributionItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SessionDurationsDistributionOKResponse_distributionItem',
      type: {
        name: 'Composite',
        className: 'SessionDurationsDistributionOKResponseDistributionItem',
        modelProperties: {
          bucket: {
            required: false,
            serializedName: 'bucket',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = SessionDurationsDistributionOKResponseDistributionItem;
