import { PAGE_SIZE } from './common';

/*
 * @Author: 徐瑞
 * @Date: 2020-04-06 20:32:06
 * @LastEditTime: 2020-05-03 17:31:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \labs-fronted\src\interfaces\event.ts
 */
export interface EventModel {
  // 比赛项目编码
  competitionEventCode: string;
  // 比赛项目名称
  competitionEventName: string;
  // 开始时间
  planStartAt: string;
  // 结束时间
  planEndAt: string;
  // 组别
  suiteType: string;
  // 状态
  status: string;
  // 创建时间
  createdAt: string;
  // 创建人
  createdBy: string;
  // 更新时间
  updatedAt: string;
  // 更新人
  updatedBy: string;
}

export interface EventEditModel {
  // 比赛项目编码
  competitionEventCode?: string;
  // 比赛项目名称
  competitionEventName?: string;
  // 开始时间
  planStartAt?: string;
  // 结束时间
  planEndAt?: string;
  // 组别
  suiteType?: string;
  // 状态
  status?: string;
}

export interface EventSearchProps {
  // 比赛项目编码
  competitionEventCode?: string;
  // 比赛项目名称
  competitionEventName?: string;
  page?: number;
  pageSize?: number;
}

export const defaultEventSearchProps: EventSearchProps = {
  competitionEventCode: undefined,
  competitionEventName: undefined,
  page: 1,
  pageSize: PAGE_SIZE,
};

