export default class {
  static async getProfile(request) {
    const httpResponse =
      (await fetch("https://jsonplaceholder.typicode.com/todos/1")) || {};
    const response = (await httpResponse.json()) || {};
    return response;
  }
}
