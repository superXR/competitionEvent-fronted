/*
 * @作者: 李洪文
 * @公司: 山东大学
 * @文件描述: 部门管理服务
 * @LastEditors: Please set LastEditors
 * @Date: 2019-09-13 07:27:24
 * @LastEditTime: 2020-05-03 17:14:30
 */
import { action } from 'mobx';
import HttpClient from '../utils/HttpClient';
import { BACKEND_URL, messageFail } from './common';
import { Pagination, initalPaginationValue } from '@/interfaces/common';
import {
  EventModel,
  EventEditModel,
  EventSearchProps,
} from '@/interfaces/event';

import { EventStore } from '@/stores/event.store';

export class EventService {
  public store: EventStore;
  private http: HttpClient;

  public constructor() {
    this.http = new HttpClient();
    this.store = new EventStore();
  }

  @action
  public async fetchPageData(searchProps: EventSearchProps): Promise<boolean> {
    this.store.loading = true;
    this.store.pageData = initalPaginationValue;
    try {
      const result = await this.http.postJSON<Pagination<EventModel>>(
        `${BACKEND_URL}/competition_event/list`,
        searchProps,
      );
      this.store.loading = false;
      if (result.success) {
        this.store.pageData = result.data;
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      this.store.loading = false;
      messageFail();
      return false;
    }
  }

  @action
  public async update(data: EventEditModel): Promise<boolean> {
    this.store.loading = true;
    try {
      const result = await this.http.postJSON<String>(`${BACKEND_URL}/competition_event/update`, data);
      this.store.loading = false;
      if (result.success) {
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      messageFail();
      return false;
    }
  }

  @action
  public async add(data: EventEditModel): Promise<boolean> {
    this.store.loading = true;
    try {
      const result = await this.http.postJSON<String>(`${BACKEND_URL}/competition_event/add`, data);
      this.store.loading = false;
      if (result.success) {
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      messageFail();
      return false;
    }
  }

  @action
  public async delete(codeList: string[]): Promise<boolean> {
    this.store.loading = true;
    try {
      const result = await this.http.postJSON<String>(`${BACKEND_URL}/competition_event/delete`, codeList);
      this.store.loading = false;
      if (result.success) {
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      messageFail();
      return false;
    }
  }
}
