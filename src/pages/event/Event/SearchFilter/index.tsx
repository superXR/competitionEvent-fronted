import * as React from 'react';
import { Input, Button } from 'antd';
import styles from './index.scss';
import { EventSearchProps } from '@/interfaces/event';

interface SearchFilterProps {
  searchProps: EventSearchProps;
  changeSearchProps: (searchProps: EventSearchProps) => void;
  onSearch: () => void;
}

export default class SearchFilter extends React.PureComponent<SearchFilterProps> {
  render() {
    const { searchProps, onSearch, changeSearchProps } = this.props;
    return (
      <div className={styles.filterPanel}>

        <div className={styles.filterItem}>
          <span className={styles.label}>比赛项目名称：</span>
          <Input
            allowClear={true}
            value={searchProps.eventName}
            placeholder="请输入比赛项目名称"
            onChange={e => changeSearchProps({ eventName: e.target.value })}
          />
        </div>

        <div className={styles.filterItem}>
          <span className={styles.label}>比赛项目编码：</span>
          <Input
            allowClear={true}
            value={searchProps.eventCode}
            placeholder="请输入比赛项目编码"
            onChange={e => changeSearchProps({ eventCode: e.target.value })}
          />
        </div>



        <Button type="primary" onClick={onSearch}>
          查询
        </Button>
      </div>
    );
  }
}