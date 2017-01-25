RspecApiDocumentation.configure do |config|
  config.format = :json
  config.curl_host = 'http://remindux.herokuapp.com' # Will be used in curl request
  config.api_name = "Remindux API" # Your API name
  config.request_headers_to_include = []
  config.response_headers_to_include = ["access-token", "client", "token-type", "expiry", "uid"]
  config.curl_headers_to_filter = ['Host', 'Cookie'] # Remove this if you want to show Auth headers in request
  config.keep_source_order = true
end
