import React from 'react';
import _ from 'lodash';
import { Card } from 'antd';
import StandardTable from '../../components/StandardTable';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import Drawer from './Drawer';
import Action from './Action';
import Filter from './Filter';

import styles from './style.less';

export default function (props) {
  const {handleAdd, handleSelectRows, handleStandardTableChange, handleEdit, handleDelete} = props;
  const {selectedRows, loading, listData, pagination, listFields, pageSetting} = props;

  const standardTableCallbacks = {
    onChange: handleStandardTableChange,
    onSelectRow: handleSelectRows,
    handleEdit,
    handleDelete
  };

  const standardTableProps = {
    data: {
      list: listData,
      pagination
    },
    columns: listFields,
    loading,
    selectedRows,
    pageSetting,
    ...standardTableCallbacks
  };

  const actionProps = {handleAdd, pageSetting};
  return (
    <PageHeaderLayout title="查询表格">
      <Card bordered={false}>
        <div className={styles.tableList}>
          <Filter />
          <Action {...actionProps} />
          <StandardTable {...standardTableProps} />
          <Drawer />
        </div>
      </Card>
    </PageHeaderLayout>
  );
}
