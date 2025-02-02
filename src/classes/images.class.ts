import { AxiosResponse } from 'axios';
import { call, customCall } from '../utils/calls';
import { ImageTypeRoute } from '../types/prestashop.type';
import { PrestashopAPIDeleteResponse } from '../types/calls.type';

export class Images {
  /**
   *
   * Create an image.
   * It needs the category of the image, the item id and
   * the path to the file.
   *
   * @param type
   * @param itemId
   * @param path
   * @returns
   */
  create = async (
    type: ImageTypeRoute,
    itemId: number | string,
    file: Buffer,
    filename: string
  ): Promise<AxiosResponse> => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const formData = new FormData();
      const blob = new Blob([file]);

      formData.append('image', blob);

      const response: AxiosResponse = await call({
        method: 'POST',
        path: `/images/${type}/${itemId}`,
        body: formData,
      }).catch((error) => {
        return error.response;
      });

      return response;
    } else {
      const { default: FormData } = await import('form-data');
      const formData = new FormData();

      formData.append('image', file, { filename: filename });

      const response: AxiosResponse = await call({
        method: 'POST',
        path: `/images/${type}/${itemId}`,
        body: formData,
        headers: formData.getHeaders(),
      }).catch((error) => {
        return error.response;
      });

      return response;
    }
  };

  /**
   * Get an image.
   * It needs the category of the image, the item id and
   * the image id.
   *
   * @param type
   * @param itemId
   * @param imageId
   * @returns
   */
  get = async (
    type: ImageTypeRoute,
    itemId: number | string,
    imageId: number | string
  ): Promise<ArrayBuffer | undefined> => {
    const response = await customCall<ArrayBuffer>({
      method: 'GET',
      path: `/images/${type}/${itemId}/${imageId}`,
      responseType: 'arraybuffer',
    });

    return response;
  };

  /**
   * Delete an image.
   * It needs the category of the image, the item id and
   * the image id.
   *
   * @param type
   * @param itemId
   * @param imageId
   * @returns
   */
  delete = async (
    type: ImageTypeRoute,
    itemId: number | string,
    imageId: number | string
  ): Promise<PrestashopAPIDeleteResponse | undefined> => {
    const response = await customCall<PrestashopAPIDeleteResponse>({
      method: 'DELETE',
      path: `/images/${type}/${itemId}/${imageId}`,
    });

    return response;
  };
}
