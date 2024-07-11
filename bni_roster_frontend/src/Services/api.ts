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
  chapterLogo: File,
  members: any[]
) => {
  try {
    const formData = new FormData();
    formData.append('chapterName', chapterName);
    formData.append('location', location);
    formData.append('memberSize', memberSize);
    formData.append('regionalRank', regionalRank);
    formData.append('allIndiaRank', allIndiaRank);
    formData.append('globalRank', globalRank);
    formData.append('chapterLogo', chapterLogo);
    formData.append('members', JSON.stringify(members));

    const response = await axios.post(`${API_URL}/pdf/generate`, formData, {
      responseType: 'blob', // Important to receive a blob response for PDF download
    });

    return response.data;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};
