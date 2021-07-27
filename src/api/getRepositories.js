import axios from "axios";

const getRepositories = () => {
  const url = 'https://api.github.com/users/lufergonn/repos?sort=pushed&per_page=10';
  return axios.get(url)
    .then(response => {
      if (response.status === 200) {
        return {
          error: false,
          data: response.data
        };
      }
    })
    .catch(error => {
      return {
        error: true
      };
    });
}

export default getRepositories;