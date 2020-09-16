import axios from 'axios';
import { getApiUrl } from './common';
import { ContentDto } from '../types/ContentDto';

const getContentUrl = () => `${getApiUrl()}/delivery/v1/content`;

export const getContent = async (id: string): Promise<ContentDto> => {
  const { data } = await axios.get(`${getContentUrl()}/${id}`);

  return data;
};
