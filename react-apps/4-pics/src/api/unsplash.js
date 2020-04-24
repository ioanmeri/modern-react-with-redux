import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID u3WXeIz0gv1bA6OQY55inDoRfKXhr3xmIXX34Y0jves'
  }
});