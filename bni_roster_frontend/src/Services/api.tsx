import axios from 'axios';
import { ChapterDetails, MemberDetails } from '../types';

const API_URL = 'http://localhost:4000/pdf/generate'; // Update with your NestJS backend URL

interface GeneratePdfData {
  chapterDetails: ChapterDetails;
  members: MemberDetails[];
}

export const generatePDF = async (data: GeneratePdfData): Promise<Blob> => {
  try {
    const response = await axios.post(`${API_URL}/generate`, data, {
      responseType: 'blob',
    });
    return response.data;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};