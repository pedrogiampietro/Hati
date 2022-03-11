enum HttpStatus {
  success = 200,
  created = 201,
  no_content = 204,
  bad_request = 400,
  unauthorized = 401,
  forbidden = 403,
  not_found = 404,
  unsupported_media_type = 415,
  unprocessable_entity = 422,
  internal_server_error = 500,
}

export { HttpStatus };
