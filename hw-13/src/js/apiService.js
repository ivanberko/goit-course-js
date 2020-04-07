import axios from 'axios';

const baseUrl = 'https://pixabay.com/api';
const apiKey = '13689220-f8624404383f6a2586dfba74c';

export default {
  page: 1,
  query: '',

  axiosArticles() {
    const requestParams = `/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;
    return axios.get(`${baseUrl}${requestParams}`).then((res) => {
      this.incrementPage();
      return res.data.hits;
    });
  },

  get searchQuery() {
    return this.query;
  },

  set searchQuery(string) {
    this.query = string;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
