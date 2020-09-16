import mockAxios from 'jest-mock-axios';
import { buildContentDto } from '../../testUtils/builders';
import { getContent } from '../contents';
import * as commonApi from '../common';

describe('contentsApi', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe('getContent', () => {
    it('should return content', async () => {
      const thenFn = jest.fn();
      const catchFn = jest.fn();

      const contentDto = buildContentDto({
        id: '1',
      });

      jest.spyOn(commonApi, 'getApiUrl').mockReturnValue('');

      const response = getContent(contentDto.id).then(thenFn).catch(catchFn);

      mockAxios.mockResponse({ data: contentDto });

      await response;

      expect(mockAxios.get).toHaveBeenCalledWith('/delivery/v1/content/1');
      expect(thenFn).toHaveBeenCalledWith(contentDto);
      expect(catchFn).not.toHaveBeenCalled();
    });
  });
});
