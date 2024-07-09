// api.ts

import axios from 'axios';

const API_URL = 'http://localhost:4000'; // Replace with your Nest.js server URL

export const generatePdf = async (
  chapterName: string,
  location: string,
  memberSize: string,
  regionalRank: string,
  allIndiaRank: string,
  globalRank: string,
  members: any[]
) => {
  try {
    const response = await axios.post(
      `${API_URL}/pdf/generate`,
      {
        chapterName,
        location,
        memberSize,
        regionalRank,
        allIndiaRank,
        globalRank,
        members,
      },
      {
        responseType: 'blob', // Important to receive a blob response for PDF download
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};
