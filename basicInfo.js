const paths = require('path');

const swaggerOptions = {
  openapi: '3.0.0',
  info: {
    title: 'OpenAPI Bug Test',
    description: 'OpenAPI specification Test in GitLab',
    contact: {
      name: 'Test',
      url: 'http://localhost:8000',
      email: 'test@domain.tld'
    },
    license: {
      name: 'proprietary'
    },
    version: '1.0'
  },
  servers: [
    {
      url: 'http://localhost:8000',
      description: 'Test Server'
    }
  ],
  paths: {
    '/create': {
      post: {
        tags: ['Tasks'],
        summary: 'Create a Task',
        description: 'Create a Task',
        operationId: 'createTask',
        requestBody: {
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/User' }
            }
          }
        },
        responses: {
          200: { description: 'Task created successfully' },
          500: { description: 'Server error' }
        }
      }
    },
    '/id/{_id}': {
      get: {
        tags: ['Tasks'],
        summary: 'Get Task by ID',
        description: 'Get Task by ID',
        operationId: 'getTaskById',
        parameters: [
          {
            name: '_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string'
            },
            description: 'Id of Task to be retrieved'
          }
        ],
        responses: {
          200: { description: 'Task retrieved successfully' },
          500: { description: 'Server error' }
        }
      },
      put: {
        tags: ['Tasks'],
        summary: 'Update a Task',
        description: 'Update a Task',
        operationId: 'updateTask',
        parameters: [
          {
            name: '_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string'
            },
            description: 'Id of Task to be updated'
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/User' }
            }
          }
        },
        responses: {
          200: { description: 'Task updated successfully' },
          500: { description: 'Server error' }
        }
      },
      delete: {
        summary: 'Delete a Task',
        description: 'Delete a Task',
        tags: ['Tasks'],
        operationId: 'deleteTask',
        parameters: [
          {
            name: '_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string'
            },
            description: 'Id of Task to be deleted'
          }
        ],
        responses: {
          204: { description: 'Task deleted successfully' },
          500: { description: 'Server error' }
        }
      }
    },
    '/markAsCompleted/{_id}': {
      put: {
        tags: ['Tasks'],
        summary: 'Mark Task as Completed',
        description: 'Mark Task as Completed',
        operationId: 'markTaskAsCompleted',
        parameters: [
          {
            name: '_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string'
            },
            description: 'Id of Task to be marked as completed'
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/User' }
            }
          }
        },
        responses: {
          200: { description: 'Task marked as completed successfully' },
          500: { description: 'Server error' }
        }
      }
    },
    '/': {
      get: {
        tags: ['Tasks'],
        summary: 'Get all Tasks',
        description: 'Get all Tasks',
        operationId: 'getAllTasks',
        responses: {
          200: { description: 'Tasks retrieved successfully' },
          500: { description: 'Server error' }
        }
      }
    }
  },

};

module.exports = swaggerOptions;
