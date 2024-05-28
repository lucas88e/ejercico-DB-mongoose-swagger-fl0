
const swaggerOptions = {
    "openapi": "3.0.0",
    "info": {
        "title": "OpenAPI Bug Test",
        "description": "OpenAPI specification Test in GitLab",
        "contact": {
            "name": "Test",
        "url": "http://localhost:8000",
    
            "email": "test@domain.tld"
        },
        "license": {
            "name": "proprietary"
        },
        "version": "1.0"
    },
    "servers": [
        {
        "url": "http://localhost:8000",
        "description": "Test Server"
        }
    ],
    "paths": {
        "/create": {
            post: {
              tags: {
                Tasks: " Create a Task.",
              },
              description: "Create a Task",
              operationId: "Create a Task",
              parameters: [
                {
                  name: "_id",
                  in: "path",
                  schema: {
                    $ref: "#/components/schemas/_id",
                  },
                  description: "Id of User to be updated",
                },
              ],
              requestBody: {
                content: {
                  "application/json": {
                    schema: { $ref: "#/components/schemas/User" },
                  },
                },
              },
              responses: {
                200: { description: "User updated successfully" },
                500: { description: "Server error" },
              },
            },
          },
        "/id/:_id": {
            get: {
              tags: {
                Tasks: " Get  Task by ID.",
              },
              description: "Get  Task by ID.",
              operationId: "Get  Task by ID.",
              parameters: [
                {
                  name: "_id",
                  in: "path",
                  schema: {
                    $ref: "#/components/schemas/_id",
                  },
                  description: "Id of User to be updated",
                },
              ],
              requestBody: {
                content: {
                  "application/json": {
                    schema: { $ref: "#/components/schemas/User" },
                  },
                },
              },
              responses: {
                200: { description: "User updated successfully" },
                500: { description: "Server error" },
              },
            },
          },
        "/": {
            get: {
              tags: {
                Tasks: " Get all TASKS.",
              },
              description: "Get all TASKS.",
              operationId: "Get all TASKS.",
              parameters: [
                {
                  name: "_id",
                  in: "path",
                  schema: {
                    $ref: "#/components/schemas/_id",
                  },
                  description: "Id of User to be updated",
                },
              ],
              requestBody: {
                content: {
                  "application/json": {
                    schema: { $ref: "#/components/schemas/User" },
                  },
                },
              },
              responses: {
                200: { description: "User updated successfully" },
                500: { description: "Server error" },
              },
            },
          },


    "/id/:_id": {
        put: {
          tags: {
            Tasks: "Update a user",
          },
          description: "Update User",
          operationId: "updateUser",
          parameters: [
            {
              name: "_id",
              in: "path",
              schema: {
                $ref: "#/components/schemas/_id",
              },
              description: "Id of User to be updated",
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/User" },
              },
            },
          },
          responses: {
            200: { description: "User updated successfully" },
            500: { description: "Server error" },
          },
        },
      },
      "/markAsCompleted/:_id": {
        put: {
          tags: {
            Tasks: " Mark  as completed",
          },
          description: "Mark  as completed",
          operationId: "Mark task completed",
          parameters: [
            {
              name: "_id",
              in: "path",
              schema: {
                $ref: "#/components/schemas/_id",
              },
              description: "Id of User to be updated",
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/User" },
              },
            },
          },
          responses: {
            200: { description: "User updated successfully" },
            500: { description: "Server error" },
          },
        },
      },
    
      "/id/:id": {
        "delete": {
            "summary": "Delete  TASK.",
            "description": "Delete all Tasks.",
            "security": [],
            "tags": [
                "Test"
            ],
            "operationId": "deleteSomething",
            "responses": {
                "204": {
                    "description": "Indicates, the request was successful."
                },
                "500": {
                    "description": "Indicates, the request failed."
                }
            }
        }
    
    
},
  
        
    
            
        
        
    }

  
}


module.exports = swaggerOptions;
