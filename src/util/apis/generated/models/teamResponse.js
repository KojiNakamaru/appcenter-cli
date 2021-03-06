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
 * Class representing a TeamResponse.
 */
class TeamResponse {
  /**
   * Create a TeamResponse.
   * @property {uuid} id The internal unique id (UUID) of the team.
   * @property {string} name The name of the team
   * @property {string} displayName The display name of the team
   * @property {string} [description] The description of the team
   */
  constructor() {
  }

  /**
   * Defines the metadata of TeamResponse
   *
   * @returns {object} metadata of TeamResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TeamResponse',
      type: {
        name: 'Composite',
        className: 'TeamResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TeamResponse;
