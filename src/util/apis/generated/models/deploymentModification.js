/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the DeploymentModification class.
 * @constructor
 * @member {string} name
 * 
 */
function DeploymentModification() {
}

/**
 * Defines the metadata of DeploymentModification
 *
 * @returns {object} metadata of DeploymentModification
 *
 */
DeploymentModification.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DeploymentModification',
    type: {
      name: 'Composite',
      className: 'DeploymentModification',
      modelProperties: {
        name: {
          required: true,
          serializedName: 'name',
          constraints: {
            MaxLength: 1000,
            MinLength: 1
          },
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = DeploymentModification;