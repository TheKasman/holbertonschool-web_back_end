export default function getResponseFromAPI(success) {
  if(success === true) {
    return Promise.resolve({
      status: 200,
      body: "Success",
    });
  } else {
    return Promise.reject(new Error("The fake API is not working currently"));
  }
}

