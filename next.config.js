
const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source:"/contact",
        destination:"https://github.com/css9596/",
        permanent:false,
      }
    ]
  },
  async rewrites(){
    return [
        {
          source: "/api/movies",
          destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        },
    ]
  }
}
