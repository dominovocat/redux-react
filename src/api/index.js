import axios from 'axios';

export const commentRequest = async (comment) => {
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/comments',
    comment
  );

  return response.data;
};