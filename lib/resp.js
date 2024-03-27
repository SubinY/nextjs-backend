export function respData(data) {
  return respJson(0, "ok", data || []);
}

export function respOk() {
  return respJson(0, "ok");
}

export function respErr(message) {
  return respJson(-1, message);
}

export function respJson(code, message, data) {
  let json = {
    code: code,
    message: message,
    data: data,
  };
  if (data) {
    json["data"] = data;
  }

  return json;
}
