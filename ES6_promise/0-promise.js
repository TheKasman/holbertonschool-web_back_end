export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;

    if(success) {
      resolve("data received");
    } else {
      reject("error occured");
    }
  });
  return Promise;
}
