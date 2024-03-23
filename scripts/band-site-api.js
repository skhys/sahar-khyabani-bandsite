// {
//   ("api_key");
//   ("572fcc84-b65f-40d3-a206-084391a44203");
// }

const apiKey = "?api_key=572fcc84-b65f-40d3-a206-084391a44203";
class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }

  async postComment(comment) {
    try {
      const response = await axios.post(`${this.baseUrl}comments`, comment, {
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `Bearer ${this.apiKey}`,
        // },
      });
      return response.data;
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  }

  async getComments() {
    try {
      const response = await axios.get(`${this.baseUrl}comments${apiKey}`);
      let comments = response.data;

      comments.sort((a, b) => b.timestamp - a.timestamp);
      return comments;
    } catch (error) {
      console.error("Error fetching comments:", error);
      return [];
    }
  }

  async getShows() {
    try {
      const response = await axios.get(`${this.baseUrl}showdates${apiKey}`);
      const shows = response.data;
      return shows;
    } catch (error) {
      console.error("Error fetching shows:", error);
      return [];
    }
  }
}

console.log(BandSiteApi);
export const saharBandSite = new BandSiteApi(apiKey);

//   const bandsite_API_URL = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';
// export class bandsiteAPI {
//     constructor(apiKey) {
//         this.apiKey =apiKey;
//         this.bandSiteURL = bandsite_API_URL;
//     }
//     async getBandsiteAPI()
// }

// const getComments = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/comments/?api_key=572fcc84-b65f-40d3-a206-084391a44203'

// const getShows = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/showdates/?api_key=572fcc84-b65f-40d3-a206-084391a44203'

// getComment = async () => {
//     try {
//         const commentRequest = await axios.get
//     }
// }
