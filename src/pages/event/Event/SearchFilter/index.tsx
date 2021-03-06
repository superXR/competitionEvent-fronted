import * as React from 'react';
import { Input, Button, Form } from 'antd';
import styles from './index.scss';
import { EventSearchProps } from '@/interfaces/event';

interface SearchFilterProps {
  searchProps: EventSearchProps;
  changeSearchProps: (searchProps: EventSearchProps) => void;
  onSearch: () => void;
}


export default class SearchFilter extends React.PureComponent<SearchFilterProps> {

  render() {
    const { onSearch, changeSearchProps } = this.props;
    return (

      <Form layout="horizontal" className={styles.filterPanel}>
        <Form.Item>
          <div className={styles.filterItem}>
            <span className={styles.label}>比赛项目名称：</span>
            <Input
              allowClear={true}
              placeholder="请输入比赛项目名称"
              onChange={e => changeSearchProps({ competitionEventName: e.target.value })}
            />
          </div>
        </Form.Item>

        <Form.Item>
          <div className={styles.filterItem}>
            <span className={styles.label}>比赛项目编码：</span>
            <Input
              allowClear={true}
              placeholder="请输入比赛项目编码"
              onChange={e => changeSearchProps({ competitionEventCode: e.target.value })}
            />
          </div>
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={onSearch}>
            查询
          </Button>
        </Form.Item>

      </Form>


    );
  }
}
