import axios from 'axios';

const API_URL = 'http://localhost:4000'; // Replace with your actual API URL

export const generatePdf = async (
  chapterName: string,
  location: string,
  memberSize: string,
  regionalRank: string,
  allIndiaRank: string,
  globalRank: string,
  chapterLogo: File,
  members: any[],
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
    
    members.forEach((member, index) => {
      formData.append(`members[${index}][name]`, member.name);
      formData.append(`members[${index}][company]`, member.company);
      formData.append(`members[${index}][email]`, member.email);
      formData.append(`members[${index}][phone]`, member.phone);
      formData.append(`members[${index}][category]`, member.category);
      formData.append(`memberPhotos`, member.memberPhoto);
      formData.append(`companyPhotos`, member.companyPhoto);
    });

    const response = await axios.post(`${API_URL}/pdf/generate`, formData, {
      responseType: 'blob',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};