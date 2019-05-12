export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 7,
      "maxItems": 12,
      "items": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "number",
            "minimum": 1,
            "maximum": 65535
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          }
        },
        "required": ["userId", "firstName", "lastName", "email"]
      }
    }
  },
  "required": ["users"]
};