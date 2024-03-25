import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'antd';
import { TableColumnsType } from 'antd/lib';
import { observer } from 'mobx-react-lite';
import store from '../../common/store';
import { values } from 'mobx';

interface DataType {
  key: React.Key;
  name: string;
  // platform: string;
  // version: string;
  // upgradeNum: number;
  // creator: string;
  // createdAt: string;
}

interface ExpandedDataType {
  artist: string;
  cardId: string;
  cardSet: string;
  collectible: boolean;
  dbfId: number;
  faction: string;
  health: number;
  locale: string;
  name: string;
  playerClass: string;
  rarity: string;
  type: string;
  key: React.Key;
}

const ClassesInfo = observer(() => {
  const navigate = useNavigate();

  const columns: TableColumnsType<DataType> = [{ title: 'Name', dataIndex: 'name', key: 'name', width: '1500px' }];

  const dataSource = store.classesInfoState?.map(classObj => {
    return {
      key: Object.keys(classObj),
      name: Object.keys(classObj),
      expandedData: Object.values(classObj),
    };
  });
  const expandedRender = record => {
    const expandedColumns: TableColumnsType<ExpandedDataType> = [
      { title: 'Artist', dataIndex: 'artist', key: 'artist' },
      { title: 'Card Id', dataIndex: 'cardId', key: 'cardId' },
      { title: 'Card Set', dataIndex: 'cardSet', key: 'cardSet' },
      { title: 'Collectible', dataIndex: 'collectible', key: 'collectible' },
      { title: 'DbfId', dataIndex: 'dbfId', key: 'dbfId' },
      { title: 'Faction', dataIndex: 'faction', key: 'faction' },
      { title: 'Health', dataIndex: 'health', key: 'health' },
      { title: 'Player Class', dataIndex: 'playerClass', key: 'playerClass' },
      { title: 'Type', dataIndex: 'type', key: 'type' },
      { title: 'Text', dataIndex: 'text', key: 'text' },
    ];
    const expandedDataSource = record.expandedData[0].map(classData => {
      return {
        artist: classData.artist,
        cardId: classData?.cardId,
        cardSet: classData?.cardSet,
        collectible: classData?.collectible ? 'Yes' : 'No',
        dbfId: classData?.dbfId,
        faction: classData?.faction,
        health: classData?.health,
        locale: classData?.locale,
        playerClass: classData?.playerClass,
        rarity: classData?.rarity,
        type: classData?.type,
        text: classData?.text,
        key: classData?.cardId,
      };
    });
    return <Table columns={expandedColumns} dataSource={expandedDataSource} />;
  };

  return (
    <div>
      <button onClick={() => navigate('/')}>back</button>
      <Table
        columns={columns}
        expandable={{ expandedRowRender: record => expandedRender(record), defaultExpandedRowKeys: ['0'] }}
        dataSource={dataSource}
        size="large"
      />
    </div>
  );
});

export default ClassesInfo;
