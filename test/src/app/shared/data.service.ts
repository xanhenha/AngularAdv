export class DataService {
  getDetails() {
    const resultPromisse = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 1500);
    });
    return resultPromisse;
  }
}