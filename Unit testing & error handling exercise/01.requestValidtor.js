function requestValidator(object) {
  const { method, uri, version, message } = object;
  const uriRegex = /^[\w\.\d\*]+$/gm;
  const messageRgx = /^[^\<\>\\\&\'\"]+$/gm;

  if (
    method === "GET" ||
    method === "POST" ||
    method === "DELETE" ||
    method === "CONNECT"
  ) {
  } else {
    invalidMethod();
  }

  if (!uriRegex.exec(uri)) invalidRequestHeader();
  if (uri === "") invalidRequestHeader();
  if (uri === undefined) invalidRequestHeader();
  if (uri === null) invalidRequestHeader();

  if (
    version === "HTTP/0.9" ||
    version === "HTTP/1.0" ||
    version === "HTTP/1.1" ||
    version === "HTTP/2.0"
  ) {
  } else {
    invalidVersion();
  }

  if (message === "") {
  } else if (!messageRgx.exec(message)) {
    invalidMessage();
  }

  if (message === undefined) invalidMessage();
  if (message === null) invalidMessage();

  function invalidMethod() {
    throw new Error(`Invalid request header: Invalid Method`);
  }
  function invalidRequestHeader() {
    throw new Error(`Invalid request header: Invalid URI`);
  }
  function invalidVersion() {
    throw new Error(`Invalid request header: Invalid Version`);
  }
  function invalidMessage() {
    throw new Error(`Invalid request header: Invalid Message`);
  }

  return object;
}

//   console.log(requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   }
//   ));
console.log(
  requestValidator({
    method: "POST",
    uri: "home.bash",
    message: "rm -rf /*",
  })
);
console.log(
  requestValidator({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: "",
  })
);
