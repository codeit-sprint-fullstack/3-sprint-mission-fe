class Urls {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.articles = `${this.baseUrl}/articles`;
    this.products = `${this.baseUrl}/products`;
  }
}

const URLS = new Urls("https://sprint-mission-api.vercel.app");

export default URLS;
